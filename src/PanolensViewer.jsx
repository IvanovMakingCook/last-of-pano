// import React from 'react';
// import { Panorama, Viewer } from 'panolens';
// import jpg from './pano.jpg';

// const PanolensJSViewer = () => {
//     const viewerRef = React.useRef(null);
//     var PanolensJS;
//     React.useEffect(() => {
//         const viewer = new Viewer({
//             container: viewerRef.current,
//         });

//         const panorama = new Panorama();
//         panorama.add(new Panorama.Image(jpg));

//         viewer.add(panorama);

//         // Добавление кнопок навигации
//         viewer.enableControl(PanolensJS?.CONTROLS.ARROW_LEFT);
//         viewer.enableControl(PanolensJS?.CONTROLS.ARROW_RIGHT);
//         viewer.enableControl(PanolensJS?.CONTROLS.ARROW_UP);
//         viewer.enableControl(PanolensJS?.CONTROLS.ARROW_DOWN);

//         // Добавление кнопки информации
//         viewer.enableControl(PanolensJS?.CONTROLS.INFO);

//         return () => {
//             viewer.dispose();
//         };
//     }, []);

//     return <div ref={viewerRef} className="panolensjs-viewer"></div>;
// };

// export default PanolensJSViewer;