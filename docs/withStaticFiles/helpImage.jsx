import React, { useState, useEffect } from 'react';

async function scaleImage(imgMaxWidth, data) {
  const targetedWidth = imgMaxWidth;
  const img = new Image();

  img.src = `data:image/png;base64,${data}`;
  img.alt = 'help image';
  const imgDone = await img.decode().catch((e) => e);
  if (imgDone instanceof Error) {
    // wasted time here instead of having try/catch
    console.log(imgDone.message, ' #934 ');
    return { width: 0, height: 0 };
  }
  // adjust image keeping aspect
  const ratioOrig = img.height / img.width;
  let widthCurrent = img.width;
  let heightCurrent = img.height;
  if (img.width > targetedWidth) {
    widthCurrent = targetedWidth;
    heightCurrent = ratioOrig * targetedWidth;
  }
  return { width: widthCurrent, height: heightCurrent };
}

export const HelpImagePng = ({ data, className, imgMaxWidth = 0 }) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const sizes = () =>
    scaleImage(imgMaxWidth, data).then((s) => {
      setWidth(s.width);
      setHeight(s.height);
    });

  useEffect(() => {
    sizes();
  }, [imgMaxWidth]);

  if (width === 0) return null;
  return (
    <img
      width={width}
      height={height}
      className={className}
      src={`data:image/png;base64,${data}`}
    />
  );
};
