import { useState } from "react";
import React from "react";
import ImageCanvas from "./ImageCanvas";

function Edit() {
  const [image, setImage] = useState(null);
  const [mask, setMask] = useState(null);

  return (
    <div>
      <ImageCanvas image={image} setImage={setImage} setMask={setMask} />
      {image && mask && (
        <div className="image-preview">
          <div>
            <h3>Original Image</h3>
            <img src={image} alt="Original" />
          </div>
          <div>
            <h3>Mask Image</h3>
            <img src={mask} alt="Mask" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Edit;