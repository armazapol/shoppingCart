import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/home";
import History from "./pages/history";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/history" element={<History />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
