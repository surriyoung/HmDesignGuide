import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

import ColorGuide from "./pages/category1/ColorGuide";
import FontGuide from "./pages/category1/FontGuide";
import TableGuide from "./pages/category2/TableGuide";
import ButtonGuide from "./pages/category2/ButtonGuide";
import FormGuide from "./pages/category2/FormGuide";
import Header from "./components/Header";
import ProfileImg from "./assets/profile.jpg";
import TabMenuList from "./components/TabMenuList";

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // 유저 정보를 App에서 관리하고 Home 컴포넌트로 넘겨줍니다.
  const user = {
    name: "최수영",
    profileImage: ProfileImg,
    position: "개발자", // 예시 직책
    phone: "010-1234-5678", // 예시 전화번호
    email: "sooyoung@example.com", // 예시 이메일
  };

  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} user={user} />
      <Router basename="/HmDesignGuide">
        <div className="main-wrapper">
          <Navbar />
          <main>
            <TabMenuList />
            <div className="main-wrap">
              <div className="main-content">
                <Routes>
                  {/* <Route path="/" element={<HmDesignGuide user={user} />} /> */}
                  <Route path="/" element={<Home user={user} />} />
                  <Route path="/color" element={<ColorGuide />} />
                  <Route path="/font-size" element={<FontGuide />} />
                  <Route path="/table" element={<TableGuide />} />
                  <Route path="/button" element={<ButtonGuide />} />
                  <Route path="/form" element={<FormGuide />} />
                </Routes>
              </div>
            </div>
          </main>
        </div>
      </Router>
    </>
  );
};

export default App;
