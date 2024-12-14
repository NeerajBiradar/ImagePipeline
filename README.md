# Image-inpainting-widget 👨🏽‍💻©️

This project is a simple React-based application that allows users to upload an image, draw a mask on it, and export both the original image and the mask as a pair. The mask is drawn by the user in white, and the rest of the image remains black. Users can adjust the brush size for better control and save the mask for further use.

## Demo
- No backend for live version. 
- **Live Demo Link**: https://image-pipeline-205ox2z3e-neerajbiradars-projects.vercel.app/

## Features

1. **Image Upload**: 
   - Users can upload an image (JPEG/PNG format).
   - The image is displayed on a canvas for drawing.

2. **Mask Drawing**:
   - Users can draw on the image to create a mask.
   - The mask appears in white, while the background remains black.

3. **Brush Controls**:
   - Users can adjust the brush size to draw with more precision.

4. **Export the Mask**:
   - The generated mask can be exported as an image.
   - Users can also clear the canvas for new drawings.

5. **Display Images**:
   - After generating the mask, both the original image and the mask are displayed side by side.

## Technologies Used
- **Frontend**: React.js + Vite , react-canvas-draw

## Setup Instructions

Follow these steps to set up and run the project locally:

### 1. Clone the repository

```bash
git clone https://github.com/NeerajBiradar/ImagePipeline.git
cd ImagePipeline
```

### 2. Frontend Setup (React)
Navigate to the client folder:
 ```bash
 cd image-inpainting-widget
 npm install 
   ```
Start the frontend development server:
 ```bash
 npm run dev
   ```
This will start the frontend on http://localhost:5171.
# Importanat Point Here To Note 
```bash
There may you encounter error occurs because react-canvas-draw has a peer dependency of react versions 16.x || 17.x, while my project is using React 18.3.1. This is causing a dependency conflict.

Use --legacy-peer-deps Flag
Run the following command instead of npm install:

npm install react-canvas-draw fabric --legacy-peer-deps

This flag tells npm to bypass strict peer dependency resolution and use the older behavior, which often resolves conflicts like this.
```

## Challenges Faced

1. **Canvas Screen Usage**:
   - **Challenge**: Ensuring the canvas properly adjusted and fit within the screen on different devices was tricky. The canvas content was not scaling properly when the window size changed.
   - **Solution**: I solved this issue by using `overflow: hidden` to prevent the canvas from overflowing its container. Additionally, I dynamically adjusted the canvas size based on the screen size to ensure it remained responsive and usable across various devices.

2. **Responsive Design**:
   - **Challenge**: Ensuring that the UI was responsive across different screen sizes was a challenge.
   - **Solution**: I used Material-UI's Grid system to create a responsive layout that adjusts based on the screen size.

## Conclusion

This project demonstrates the ability to create an interactive image inpainting widget using React and Material-UI. The challenges faced during development provided valuable learning experiences in state management, responsive design, and handling canvas resizing.

Feel free to contribute or reach out with any questions!
