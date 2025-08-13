// React는 src/renderer/App.jsx부터 시작됨

import React from "react";    // default export
import { createRoot } from "react-dom/client";    // named export
// React 18부터는 react-dom에서 render을 직접 쓰지 않고 createRoot를 써야 한다. 현재 버전 react@19.1.1
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import StartView from "./views/StartView";  
import GameView from "./views/GameView";
import SettingView from "./views/SettingView";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<StartView />} />
        <Route path="/game" element={<GameView />} />
        <Route path="/setting" element={<SettingView />} />
        <Route path="/result" element={<ResultView />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
}

const root = createRoot(document.getElementById("app"));
root.render(<App />);