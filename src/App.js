import Index from "./pages/Index/index";
import Login from './pages/Login/login'
import "./App.css";
import { Route } from "wouter";

function App() {
  return (
    <div className="App">
      <section>
        <Route 
          path="/"
          component={Index}
        />
        <Route 
          path="/login"
          component={Login}
        />
      </section>
    </div>
  );
}

export default App;
