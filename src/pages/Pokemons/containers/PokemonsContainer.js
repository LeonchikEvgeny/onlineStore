import PokemonsLayout from "../components";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loadPokemons } from "../reducers";
import { usePagination } from "../../../hooks/usePagination";

const PokemonsContainer = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [page, handlePageChange] = usePagination(1);

  console.log(page);

  const { data, error, isLoading } = useSelector((state) => state.pokemons);

  useEffect(() => {
    dispatch(loadPokemons(page));
  }, [page]);

  const handleNavigateToPokemonDetail = (pokemonId) => {
    navigate(`/pokemon-details/${pokemonId}`);
  };

  return (
    <PokemonsLayout
      data={data}
      isLoading={isLoading}
      error={error}
      handleNavigateToPokemonDetail={handleNavigateToPokemonDetail}
      page={page}
      handlePageChange={handlePageChange}
    />
  );
};

export default PokemonsContainer;
