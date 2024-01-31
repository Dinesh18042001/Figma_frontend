import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
const PREMIUMjpg = React.lazy(() => import("pages/PREMIUMjpg"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
         <Route path="/home" element={<Home />} />
          
          <Route path="/" element={<PREMIUMjpg />} />
          
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
