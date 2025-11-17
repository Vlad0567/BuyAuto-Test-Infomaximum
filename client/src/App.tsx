import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Global } from "@emotion/react";
import { FC } from "react";
import { GLOBAL_STYLES } from "./styles/global.styles";
import Header from "./components/Header";
import Catalog from "./pages/Catalog";
import Favorites from "./pages/Favorites";

const App: FC = () => {
  return (
    <main css={{
      width: "1920px",
      margin: "70px auto 0 auto",
    }}>
      <Router>
        <Global styles={GLOBAL_STYLES} />
        <Header />
        <Routes>
          <Route path="/" element={<Catalog />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
