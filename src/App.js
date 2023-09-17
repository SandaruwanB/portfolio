import React from "react";
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import { CssBaseline } from "@mui/material";

import NotFound from './components/404'
import Home from './components/Home'
import About from './components/About'
import ThemeIcon from "./theme/ThemeIcon";

function App() {
  return (
      <BrowserRouter>
        <CssBaseline />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route element={<ThemeIcon />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes> 
      </BrowserRouter>

  );
}

export default App;