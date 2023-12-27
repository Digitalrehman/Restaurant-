import "./pages.css" ;
import Menu from "../Menu/Menu";
import Crousel from "../Crousel/Crousel";
import Services from "../Service/Services";

const Page = () => {
  return (
    <>
       <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-md-7 my-5">
            <h1>
              Welcome to the Resturent
            </h1>
            <p>
              This is a simple React app that uses the React library to create a web
            </p>
            <p>
              application. It uses the React component model to build the app.
            </p>
            <button>ORDER</button>
          </div>
        
        </div>
      </div>
      <Menu/>
      <Crousel />
      <Services/>
   
    </>
  )
}

export default Page
