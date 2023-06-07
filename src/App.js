import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar.jsx';
// import PanolensViewer from './PanolensViewer';
import PhotoSphereWiewer from './PhotoSphereViewer';
import KRPanoViewer from './KRPanoViewer';
import MarzipanoViewer from './MarzipanoViewer';
import PanoWiewer from './PanoViewer';
import PannellumJSViewer from './PanellumJS.jsx';

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          {/* <Route path="/panolens" component={PanolensViewer} /> */}
          {/* <Route path="/photo-sphere-viewer" component={PhotoSphereWiewer} /> */}
          {/* <Route path="/krpano" element={<KRPanoViewer/>} /> */}
          {/* <Route path="/panellum" element={<PannellumJSViewer/>} /> */}
          <Route path="/marzipano" element={<MarzipanoViewer/>} />
          {/* <Route path="/panoviewer" element={<PanoWiewer/>} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;