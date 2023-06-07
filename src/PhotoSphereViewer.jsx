// import React from 'react';
// import PhotoSphereViewer from 'photo-sphere-viewer';
// import jpg from './pano.jpg';

// const PhotoSphereWiewer = () => {
//   const viewerRef = React.useRef(null);

//   React.useEffect(() => {
//     const viewer = new PhotoSphereViewer.Viewer({
//       container: viewerRef.current,
//       panorama: jpg
//     });

//     // Добавление кнопок навигации
//     const navbar = PhotoSphereViewer.Utils.createNavbar();
//     viewer.getContainer().appendChild(navbar);

//     // Добавление кнопки информации
//     const infoButton = PhotoSphereViewer.Utils.createInfoButton();
//     viewer.getContainer().appendChild(infoButton);

//     // Добавление стрелок для переключения направления просмотра панорамы
//     const arrowLeft = PhotoSphereViewer.Utils.createArrowButton('left');
//     const arrowRight = PhotoSphereViewer.Utils.createArrowButton('right');
//     viewer.getContainer().appendChild(arrowLeft);
//     viewer.getContainer().appendChild(arrowRight);

//     return () => {
//       viewer.destroy();
//     };
//   }, []);

//   return <div ref={viewerRef} className="photo-sphere-viewer"></div>;
// };

// export default PhotoSphereWiewer;