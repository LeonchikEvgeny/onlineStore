import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadPokemonDetails } from "../reducers";
import Spinner from "../../../components/Spinner";

const PokemonDetailsContainer = () => {
  const { id } = useParams();

  const { pokemonInfo, isLoading } = useSelector(
    (state) => state.pokemonDetails
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPokemonDetails(id));
  }, [dispatch, id]);
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          {id}
          <img src={pokemonInfo.image} />
        </div>
      )}
    </>
  );
};

export default PokemonDetailsContainer;
