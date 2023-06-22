import { lazy, Suspense } from "react";

// Component Import
import { Routes, Route } from "react-router-dom";

// Component Import Normlly
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import NotFound from "./pages/NotFound";


// Import Component Lazy (Code Splitting)
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
// For named imports
const NotFound = lazy(() =>
  import("./pages/NotFound/NotFound").then(module => {
    return { default: module.NotFound };
  })
);



function App() {

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  )
}

export default App
