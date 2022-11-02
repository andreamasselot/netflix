import "./App.css";
import categories from "./netflix.json";
import logo from "./img/logo.png";
import Section from "./components/Section";


function App() {
  return (<>
    <header>
      <img className="logo" src={logo} alt="logo netflix" />
    </header>

    <div className="container">
      {categories.map((elem, index) => {

        return (
          <Section key={index} category={elem.category} info={elem} images={elem.images} />
        );
      })};

    </div >
  </>
  );
}
export default App;

