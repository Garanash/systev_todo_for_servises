import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import MainLayout from "./layouts/MainLayout";
import Alg1 from "./components/Alg1";
import Alg2 from "./components/Alg2";
import Alg3 from "./components/Alg3";
import BaseInfo from "./components/BaseInfo";
import AlgLayout from "./layouts/AlgLayout"
import NotFound from "./components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<BaseInfo />} />
            <Route path="alg1" element={<Alg1 />} />
            <Route path="alg2" element={<Alg2 />} />
            <Route path="alg3" element={<Alg3 />} />
            <Route path="alg4" element={<AlgLayout />}>
              
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;