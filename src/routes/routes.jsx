import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import DetailSurah from "../pages/DetailSurah";

function RoutesIndex() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/surah/:id" element={<DetailSurah />} />
        </Routes>
    )
}

export default RoutesIndex