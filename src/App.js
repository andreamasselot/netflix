import "./App.css";
import categories from "./netflix.json";
import logo from "./img/logo.png";


function App() {
  return (<>
    <header>
      <img className="logo" src={logo} />
    </header>
    <div className="container">
      {categories.map(c => {

        return (
          <div>

            < h2 className="titles" > {c.category}</h2>

            <div className="OOO">
              {
                c.images.map(image => {
                  return (<div className="images-container">
                    <img className="images-row" src={image} />
                  </div>
                  );
                })
              }
            </div>
          </div >
        );
      })};

    </div ></>
  );
}
export default App;

