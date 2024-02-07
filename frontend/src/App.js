import "./App.css";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./Components/SignUp";
import Category from "./Components/Category";
import Cart from "./Components/Cart";
import Footer from "./Components/Footer";
import Footer2 from "./Components/Footer2";
import Home from "./Components/Home";
import Product from "./Components/Product";
import Profile from "./Components/Profile";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/Mens" element={<Category category="men" />}></Route>
        <Route
          exact
          path="/Women"
          element={<Category category="women" />}
        ></Route>
        <Route exact path="/Profile" element={<Profile />}></Route>
        <Route
          exact
          path="/Kids"
          element={<Category category="kids" />}
          s
        ></Route>
        <Route exact path="/Product" element={<Product />}>
          <Route exact path=":Product_id" element={<Product />}></Route>
        </Route>
        <Route exact path="/Cart" element={<Cart />}></Route>
        <Route exact path="/Login" element={<Login />}></Route>
        <Route exact path="/SignUp" element={<SignUp />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
