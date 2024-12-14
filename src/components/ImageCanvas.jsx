import React, { useRef, useState, useEffect } from "react";
import CanvasDraw from "react-canvas-draw";
import { FaEraser, FaBrush, FaPaintBrush, FaUpload, FaEye, FaMagic } from "react-icons/fa";

const ImageCanvas = () => {
  const [imgSrc, setImgSrc] = useState(null); // To store the uploaded image source
  const [maskSrc, setMaskSrc] = useState(null); // To store the generated mask image
  const [brushSize, setBrushSize] = useState(10); // Brush size for drawing
  const [imageWidth, setImageWidth] = useState(0);
  const [imageHeight, setImageHeight] = useState(0);
  const canvasRef = useRef(null);

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const img = new Image();
        setImgSrc(reader.result);
        img.src = reader.result;
        img.onload = () => {
          setImageWidth(img.width);
          setImageHeight(img.height);
        };
      };
      reader.readAsDataURL(file);
    }
  };

  // Export mask from canvas
  const exportMask = () => {
    if (canvasRef.current) {
      const maskCanvas = canvasRef.current.canvas.drawing;
      const maskImage = document.createElement("canvas");
      maskImage.width = maskCanvas.width;
      maskImage.height = maskCanvas.height;
      const maskCtx = maskImage.getContext("2d");

      // Fill with black background
      maskCtx.fillStyle = "#000000";
      maskCtx.fillRect(0, 0, maskImage.width, maskImage.height);

      // Draw white strokes (mask)
      maskCtx.drawImage(maskCanvas, 0, 0);

      // Generate mask image data URL
      const maskDataURL = maskImage.toDataURL("image/png");
      setMaskSrc(maskDataURL);
      return maskDataURL;
    }
    return null;
  };

  // Clear the canvas
  const handleClearCanvas = () => {
    if (canvasRef.current) {
      canvasRef.current.clear();
    }
  };

  useEffect(() => {
    if (imgSrc && imageWidth && imageHeight) {
      // Dynamically adjust the canvas size based on the image
      const canvasWidth = (window.innerHeight * 0.7 / imageHeight) * imageWidth;
      const canvasHeight = window.innerHeight * 0.7;
      // Adjust canvas size for better display
      if (canvasRef.current) {
        canvasRef.current.canvas.width = canvasWidth;
        canvasRef.current.canvas.height = canvasHeight;
      }
    }
  }, [imgSrc, imageWidth, imageHeight]);

  return (
    <div className="flex flex-col">
      <div className="w-full bg-white shadow-md p-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          {/* Brush Size Control */}
          <div className="flex items-center space-x-2 w-full sm:w-auto">
            <button
              className="border-2  border-black rounded p-2 hover:bg-gray-100"
              title="Paintbrush"
            >
              <span className="hidden md:inline font-medium">Size</span> {/* Visible on md and above */}

              <FaPaintBrush className="w-4 h-4 md:hidden" />
            </button>
            <input
              type="range"
              value={brushSize}
              onChange={(e) => setBrushSize(Number(e.target.value))}
              max={50}
              step={1}
              className="w-full max-w-xs"
            />
            <span className="text-sm text-gray-500 min-w-[3ch]">{brushSize}</span>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2">
            <label className="border-2 border-black p-2 rounded-md">
              <span className="hidden md:inline font-medium">Upload</span> {/* Visible on md and above */}

              <FaUpload className="w-4 h-4 md:hidden" />
              <input
                type="file"
                id="file-upload"
                onChange={handleImageUpload}
                className="hidden"
                aria-label="Upload Image"
              />
            </label>
            <button
              className="border-2 border-black rounded p-2 hover:bg-gray-100"
              title="Preview Mask"
              onClick={exportMask}
            >
              <FaMagic className="w-4 h-4 md:hidden" />
              <span className="hidden md:inline font-medium">Preview Mask</span> {/* Visible on md and above */}
            </button>
            <button
              className="border-2 border-black rounded p-2 hover:bg-gray-100"
              title="Clear"
              onClick={handleClearCanvas}
            >
              <FaEraser className="w-4 h-4 md:hidden" />
              <span className="hidden md:inline font-medium">Clear</span> {/* Visible on md and above */}
            </button>
          </div>
        </div>
      </div>

      <div className="p-4 flex items-center justify-center overflow-hidden">
        {!imgSrc && (
          <div className="w-full max-w-2xl mx-auto p-6 space-y-6">
            <div className="border-2 border-dashed rounded-lg p-12 text-center">
              <div className="flex flex-col items-center gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                  <path
                    fillRule="evenodd"
                    d="M11.47 2.47a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1-1.06 1.06l-3.22-3.22V16.5a.75.75 0 0 1-1.5 0V4.81L8.03 8.03a.75.75 0 0 1-1.06-1.06l4.5-4.5ZM3 15.75a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-lg font-medium">Upload your own image</p>
                <label
                  htmlFor="file-upload"
                  className="inline-flex items-center justify-center bg-gray-900 text-white text-base font-medium rounded-md px-6 py-2 cursor-pointer hover:bg-black transition-all"
                >
                  Choose Image
                  <input
                    type="file"
                    id="file-upload"
                    onChange={handleImageUpload}
                    className="hidden"
                    aria-label="Upload Image"
                  />
                </label>
              </div>
            </div>
          </div>
        )}

        {imgSrc && imageWidth && imageHeight && (
          <div className="relative">
            <CanvasDraw
              ref={canvasRef}
              brushRadius={brushSize}
              lazyRadius={0}
              canvasWidth={(window.innerHeight * 0.7 / imageHeight) * imageWidth}
              canvasHeight={window.innerHeight * 0.7}
              imgSrc={imgSrc}
              brushColor="#FFFFFF"
              className="border border-black"
            />
          </div>
        )}
      </div>

      {maskSrc && (
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 m-6">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img
              className="rounded-t-lg"
              src={imgSrc}
              alt="Original Image"
            />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-mono tracking-tight text-gray-900 dark:text-white">
                Original Image
              </h5>
              <button
                className="mt-4 bg-gray-900 text-white text-sm font-medium rounded-md px-4 py-2 hover:bg-black transition-all"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = imgSrc;
                  link.download = "original.png";
                  link.click();
                }}
              >
                Download
              </button>
            </div>
          </div>

          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img
              className="rounded-t-lg"
              src={maskSrc}
              alt="Masked Layer"
            />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-mono tracking-tight text-gray-900 dark:text-white">
                Masked Layer
              </h5>
              <button
                className="mt-4 bg-gray-900 text-white text-sm font-medium rounded-md px-4 py-2 hover:bg-black transition-all"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = maskSrc;
                  link.download = "mask.png";
                  link.click();
                }}
              >
                Download Mask
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageCanvas;
