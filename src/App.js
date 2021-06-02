import { Route, Switch } from "react-router-dom";

import MainNavBar from "./components/layout/MainNavBar";
import MainPage from "./pages/MainPage";
import UserPage from "./pages/User";
import ArchivePage from "./pages/Archive";
import RecipePage from "./pages/Recipe";

function App() {
  return (
    <>
      <MainNavBar />
      <Switch>
        <Route path='/' exact>
          <MainPage />
        </Route>
        <Route path='/archvie'>
          <ArchivePage />
        </Route>
        <Route path='/recipe'>
          <RecipePage />
        </Route>
        <Route path='/user'>
          <UserPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
