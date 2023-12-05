import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import BottomNav from "./components/BottomNav";
import Header from "./components/Header";
import "./App.css";
import { GameProvider } from "./context/GameContext";
import AiPinPage from "./pages/AiPinPage/AiPinPage";
import MainPage from "./pages/mainPage/MainPage";
import TrustPage from "./pages/AiPinPage/TrustPage";
import TechDetailsPage from "./pages/AiPinPage/TechDetailsPage";
import BrowsePage from "./pages/shopPage/BrowsePage";
import GameDetailPage from "./pages/detailPage/GameDetailPage";
import CartPage from "./pages/detailPage/CartPage";
import Shop from "./pages/shopPage/index";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <BottomNav />
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <GameProvider>
        <div className="App">
          <Routes>
            {/* 모든 주소에 Layout 컴포넌트를 적용합니다. */}
            <Route path="/" element={<Layout />}>
              <Route index element={<MainPage />} />
              <Route path="main" element={<MainPage />} />
              <Route path="aipin" element={<AiPinPage />} />
              <Route path="aipin/trust" element={<TrustPage />} />
              <Route path="aipin/tech-details" element={<TechDetailsPage />} />
              {/* Shop 관련 경로를 여기에 중첩합니다. */}
              <Route path="shop" element={<Shop />}>
                <Route index element={<div>Welcome to the shop!</div>} />
                <Route path="browse" element={<BrowsePage />} />
              </Route>
              <Route path="shop/cart" element={<CartPage />} />
              <Route path="/shop/detail/:gameId" element={<GameDetailPage />} />
              {/* 다른 경로들 예정 */}
            </Route>
          </Routes>
        </div>
      </GameProvider>
    </BrowserRouter>
  );
}

export default App;
