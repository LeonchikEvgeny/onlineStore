import { Routes, Route } from "react-router-dom";
import { ROUTE_NAMES } from "./routeNames";
import Home from "../pages/Home/components/Index";
import SignUpContainer from "../pages/SignUp/containers/SignUpContainer";
import SignInContainer from "../pages/SignIn/containers/SignInContainer";
import PokemonsContainer from "../pages/Pokemons/containers/PokemonsContainer";
import PrivateRoutes from "./PrivateRoute";
import PokemonDetailsContainer from "../pages/PokemonDetails/containers/PokemonDetailsContainer";

const Router = () => {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path={ROUTE_NAMES.HOME} element={<Home />} />
      </Route>

      <Route path={ROUTE_NAMES.SIGN_UP} element={<SignUpContainer />} />
      <Route path={ROUTE_NAMES.SIGN_IN} element={<SignInContainer />} />
      <Route element={<PrivateRoutes />}>
        <Route path={ROUTE_NAMES.POKEMONS} element={<PokemonsContainer />} />
      </Route>
      <Route element={<PrivateRoutes />}>
        <Route
          path={ROUTE_NAMES.POKEMON_DETAILS}
          element={<PokemonDetailsContainer />}
        />
      </Route>
    </Routes>
  );
};

export default Router;
