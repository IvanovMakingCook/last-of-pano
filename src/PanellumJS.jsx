import React from 'react';
import { Viewer } from 'pannellum';
import jpg from './pano.jpg';

const PannellumJSViewer = () => {
  const viewerRef = React.useRef(null);

  React.useEffect(() => {
    const viewer = new Viewer(viewerRef.current, {
      type: 'equirectangular',
      panorama: jpg,
    });

    // Добавление кнопок навигации
    viewer.addControl(Viewer.CONTROLS.ORBIT);

    // Добавление кнопки информации
    viewer.addControl(Viewer.CONTROLS.INFO);

    // Добавление стрелок для переключения направления просмотра панорамы
    viewer.addControl(Viewer.CONTROLS.ARROWS);

    return () => {
      viewer.destroy();
    };
  }, []);

  return <div ref={viewerRef} className="panellumjs-viewer"></div>;
};

export default PannellumJSViewer;
