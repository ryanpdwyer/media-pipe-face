import MediaPipeWebcam from './MediaPipeWebcam.js';

// Create instance
const handDetector = new MediaPipeWebcam('webcam-container', {
    width: 640,
    height: 480,
    numHands: 2
});

// Listen for detection results
document.getElementById('webcam-container').addEventListener('handLandmarksDetected', (event) => {
    const results = event.detail;
    // Do something with the results
    console.log('Detected hands:', results);
});