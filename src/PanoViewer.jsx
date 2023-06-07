import React from 'react';
import { PanoViewer } from '@egjs/view360';
import jpg from './pano.jpg';

const PanoWiewer = () => {
  const viewerRef = React.useRef(null);

  React.useEffect(() => {
    const viewer = new PanoViewer(viewerRef.current, {
      image: jpg,
    });

    // Добавление кнопок навигации
    viewer.enableFeature(PanoViewer.PanoViewer.STATES.NORMAL);

    // Добавление кнопки информации
    viewer.enableFeature(PanoViewer.PanoViewer.STATES.INFO);

    // Добавление стрелок для переключения направления просмотра панорамы
    viewer.enableFeature(PanoViewer.PanoViewer.STATES.ARROW);

    return () => {
      viewer.destroy();
    };
  }, []);

  return <div ref={viewerRef} className="panoviewer-viewer"></div>;
};

export default PanoWiewer;