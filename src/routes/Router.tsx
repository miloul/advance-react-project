import { Route, Routes } from "react-router-dom";
import Dongjin from "../pages/Dongjin";
import HomePage from "../pages/HomePage";
import Jaewon from "../pages/Jaewon";
import Seungmin from "../pages/Seungmin";

const RouterManager = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/dongjin" element={<Dongjin />} />
      <Route path="/jaewon" element={<Jaewon />} />
      <Route path="/seungmin" element={<Seungmin />} />
    </Routes>
  );
};

export default RouterManager;
