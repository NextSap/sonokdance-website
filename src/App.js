import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./page/Home";
import WhyUs from "./page/WhyUs";
import Contact from "./page/Contact";
import Gallery from "./page/Gallery";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/whyus" element={<WhyUs/>}/>
                <Route path="/gallery" element={<Gallery/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
