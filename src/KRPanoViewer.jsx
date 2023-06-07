import React from 'react';
import left from './arrow_left.png';
import right from './arrow_right.png';
import down from './arrow_down.png';
import up from './arrow_up.png';

const KRPanoViewer = () => {
  const viewerRef = React.useRef(null);

  React.useEffect(() => {
    const krpano = viewerRef.current;
    krpano.call('loadpano("path/to/panorama.jpg", null, null, null);');

    // Добавление кнопок навигации
    krpano.call('addplugin(new PanoViewer('+left+', "left"));');
    krpano.call('addplugin(new PanoViewer('+right+', "right"));');
    krpano.call('addplugin(new PanoViewer('+up+', "up"));');
    krpano.call('addplugin(new PanoViewer('+down+', "down"));');

    // Добавление кнопки информации
    krpano.call('addplugin(new InfoButton());');

    return () => {
      krpano.call('removepano();');
    };
  }, []);

  return <div ref={viewerRef} className="krpano-viewer"></div>;
};

export default KRPanoViewer;