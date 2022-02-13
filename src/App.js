import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NowPlayingMovie from "./pages/NowPlayingMovie";
import UpcomingMovie from "./pages/UpcomingMovie";
import Detail from "./pages/Detail";
import MovieStateProvider from "./providers/MovieStateProvider";
import './common.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <MovieStateProvider>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/now_playing" element={<NowPlayingMovie/>}/>
          <Route path="/upcoming" element={<UpcomingMovie/>}/>
          <Route path="/movie/:movie_id" element={<Detail/>}/>
        </Routes>
      </BrowserRouter>
    </MovieStateProvider>
    </>
  );
}

export default App;
