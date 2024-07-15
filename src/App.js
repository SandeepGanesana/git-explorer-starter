// import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";

import Nav from './components/navbar'
import Home from "./components/home";
import AboutUs from "./components/about";
import Users from "./components/users";
import UserProfile from "./components/userProfile";

const NotFound = () => {
  return (<>
    <h2>Page not found</h2>
    <Link to={'/'}>Home</Link></>)
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:username" element={<UserProfile />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
