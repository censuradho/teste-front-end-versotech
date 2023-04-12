import { PokemonLayout } from "@/layout/pokemon"
import { PokemonPageProps } from "@/layout/pokemon/types"
import { pokemonService } from "@/services/pokeapi/pokemon"
import { GetServerSideProps, InferGetServerSidePropsType } from "next"

export const getServerSideProps: GetServerSideProps<PokemonPageProps> = async (context) => {
  const { 
    page = 1,
    limit,
    search
  } = context.query

  const _page = Number(page) || 1

  const data = await pokemonService.findMany({
    page: _page,
    search: search as string,
    ...(limit && ({ limit: Number(limit )})) 
  })

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