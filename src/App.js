import Route from "./components/Route";
import AccodionPage from "./pages/AccordionPage";
import DropDownPage from "./pages/DropDownPage";
import Sideber from "./components/Sidebar";
import ButtonPage from "./pages/ButtonPage";
const App = () => {
  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
      <Sideber />
      <div className="col-span-5">
        <Route path="/accordion">
          <AccodionPage />
        </Route>
        <Route path="/">
          <DropDownPage />
        </Route>
        <Route path="/buttons">
          <ButtonPage />
        </Route>
      </div>
    </div>
  );
};

export default App;
