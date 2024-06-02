import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "./Pages/Hero";

import Hero2 from "./Pages/Hero2";
import Hero3 from "./Pages/Hero3";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Hero />} />
          <Route path="page2" element={<Hero2 />} />
          <Route path="page3" element={<Hero3 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
