import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Navbar from "./components/Layout/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import Adduser from "./components/users/Adduser";
import EditUser from "./components/users/EditUser";

function App() {
  return (
    <>
      <Router>
        Hello World Love
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />

          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here bro!</p>
              </main>
            }
          />
          <Route exact path="/users/add" element={<Adduser />}></Route>
          <Route exact path="/users/edit/:id" element={<EditUser />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
