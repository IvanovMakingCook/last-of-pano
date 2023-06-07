import React from 'react';
import { Viewer, Geometry, EquirectGeometry, RectilinearView } from 'marzipano';
import jpg from './pano.jpg'

const MarzipanoViewer = () => {
  const viewerRef = React.useRef(null);

  React.useEffect(() => {
    const viewer = new Viewer(viewerRef.current);

    const geometry = new EquirectGeometry([{ width: 4000 }]);
    const view = new RectilinearView();

    const scene = viewer.createScene({
      source: jpg,
      geometry,
      view,
    });

    // // Добавление кнопок навигации
    // viewer.addControl(Viewer.CONTROLS.ZOOM);

    // // Добавление кнопки информации
    // viewer.addControl(Viewer.CONTROLS.INFO);

    // // Добавление стрелок для переключения направления просмотра панорамы
    // viewer.addControl(Viewer.CONTROLS.ARROWS);

    scene.switchTo();

    return () => {
      viewer.destroy();
    };
  }, []);

  return <div ref={viewerRef} className="marzipano-viewer"></div>;
};

export default MarzipanoViewer;