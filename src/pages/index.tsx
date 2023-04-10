import { PokemonLayout } from "@/layout/pokemon"
import { PokemonPageProps } from "@/layout/pokemon/types"
import { pokemonService } from "@/services/pokeapi/pokemon"
import { GetServerSideProps, InferGetServerSidePropsType } from "next"

export const getServerSideProps: GetServerSideProps<PokemonPageProps> = async () => {
  const data = await pokemonService.findMany()

  return {
    props: {
      data
    }
  }
}

export default function PokemonPage (props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <PokemonLayout {...props} />
  )
}