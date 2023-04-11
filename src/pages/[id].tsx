import { PokemonPerfilLayout } from "@/layout/pokemon/perfil";
import { PokemonPerfilProps } from "@/layout/pokemon/perfil/types";
import { pokemonService } from "@/services/pokeapi/pokemon";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

export const getServerSideProps: GetServerSideProps<PokemonPerfilProps> = async (context) => {
  const { id } = context.query

  const { data } = await pokemonService.findById(String(id))

  return {
    props: {
      data
    }
  }
}

export default function PokemonPerfilPage (props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <PokemonPerfilLayout {...props} />
}