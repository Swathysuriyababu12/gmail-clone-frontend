import React, { useState, useEffect } from "react";

const ImageGallery = () => {
  const [imagePaths, setImagePaths] = useState([]);

  useEffect(() => {
    const importImages = async () => {
      const imageContext = import.meta.glob("./images/*");
      console.log(imageContext);
      for (const path in imageContext) {
        imageContext[path]().then((mod) => {
          setImagePaths([...imagePaths, mod.default]);
        });
      }
    };

    importImages();
  }, []);

  return (
    <div>
      {console.log(imagePaths)}
      {imagePaths.map((image, index) => {
        console.log(image);

        return <img key={index} src={image} alt={`Image ${index + 1}`} />;
      })}
    </div>
  );
};

export default ImageGallery;
