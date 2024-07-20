
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import axios from "axios";
import { useEffect } from "react";
import Loader from "./components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { HideLoading, SetPortfolioData, ShowLoading } from "./redux/rootSlice";
import Admin from "./Pages/Home/Admin/index";

function App() {
  const { loading, portfolioData } = useSelector((state) => state.root);
  const dispatch = useDispatch();
  const getPortfolioData = async () => {
    try {
      dispatch(ShowLoading());
      const response = await axios.get('/api/portfolio/get-portfolio-data');
      dispatch(SetPortfolioData(response.data));
      dispatch(HideLoading());
    } catch (error) {
      // console.log(error);
      dispatch(HideLoading());
    }
  }

  useEffect(() => {
    if (!portfolioData) {
      getPortfolioData();
    }
  }, []);

  useEffect(() => {
    console.log(portfolioData);
  }, [portfolioData]);



  return (
    <BrowserRouter>
      {loading ? <Loader /> : null}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;