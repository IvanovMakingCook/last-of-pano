import React from 'react';
import { Viewer } from 'pannellum-react';
import jpg from './pano.jpg';

const PannellumViewer = () => {
  return (
    <div className="pannellum-viewer">
      <Viewer
        image={jpg}
        autoLoad
        autoRotate
        autoRotateInactivityDelay={3000}
        compass={true}
        preview={true}
      />
    </div>
  );
};

export default PannellumViewer;