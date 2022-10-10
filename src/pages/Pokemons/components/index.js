import Spinner from "../../../components/Spinner";
import PokemonCard from "../../../components/pokemonCard";
import Pagination from "../../../components/Pagination";

import styles from "./index.module.scss";

const PokemonsLayout = ({
  data,
  isLoading,
  error,
  handleNavigateToPokemonDetail,
  page,
  handlePageChange,
}) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Pokemons</h1>

      <div className={styles.pokemosContainer}>
        {isLoading ? (
          <Spinner />
        ) : (
          data.map(({ id, name, image, price }) => (
            <PokemonCard
              key={id}
              name={name}
              image={image}
              price={price}
              handleClick={() => handleNavigateToPokemonDetail(id)}
            />
          ))
        )}
        {error && <div style={{ color: "red" }}>{error}</div>}
      </div>
      <div>
        <Pagination currentPage={page} handlePageChange={handlePageChange} />
      </div>
    </div>
  );
};

export default PokemonsLayout;
