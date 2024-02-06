import React, { useRef, useEffect, useState } from "react";
import "./AidAssistant.css"; // Import your CSS file for styling

const AidAssistant = () => {
  const webcamRef = useRef(null);
  const labelContainerRef = useRef(null);
  const [isWebcamActive, setIsWebcamActive] = useState(false);
  const [predictions, setPredictions] = useState([]);

  useEffect(() => {
    let model, maxPredictions;

    const init = async () => {
      try {
        console.log("Initializing webcam and loading model...");
        // Load the model and metadata
        const modelURL =
          "https://teachablemachine.withgoogle.com/models/kXpIcxgjY/model.json";
        const metadataURL =
          "https://teachablemachine.withgoogle.com/models/kXpIcxgjY/metadata.json";

        model = await window.tmImage.load(modelURL, metadataURL);
        maxPredictions = model.getTotalClasses();

        console.log("Webcam and model loaded successfully!");
        // Initialize the webcam
        const flip = true; // whether to flip the webcam
        webcamRef.current = new window.tmImage.Webcam(800, 800, flip); // width, height, flip
        await webcamRef.current.setup(); // request access to the webcam
        await webcamRef.current.play();
        setIsWebcamActive(true);
        window.requestAnimationFrame(loop);

        // Append elements to the DOM
        document
          .getElementById("webcam-container")
          .appendChild(webcamRef.current.canvas);
        labelContainerRef.current = document.getElementById("label-container");
        for (let i = 0; i < maxPredictions; i++) {
          labelContainerRef.current.appendChild(document.createElement("div"));
        }
      } catch (error) {
        console.error("Error initializing webcam:", error);
      }
    };

    const loop = async () => {
      try {
        if (webcamRef.current && webcamRef.current.active) {
          webcamRef.current.update(); // update the webcam frame
          const prediction = await predict();
          setPredictions(prediction);
          window.requestAnimationFrame(loop);
        }
      } catch (error) {
        console.error("Error in loop:", error);
      }
    };

    const predict = async () => {
      // Predict using the model
      const prediction = await model.predict(webcamRef.current.canvas);
      return prediction.map((item) => ({
        className: item.className,
        probability: item.probability.toFixed(2),
      }));
    };

    init();

    return () => {
      // Cleanup code
      try {
        if (webcamRef.current && webcamRef.current.active) {
          webcamRef.current.stop();
        }
      } catch (error) {
        console.error("Error during cleanup:", error);
      }
    };
  }, []); // Empty dependency array ensures useEffect runs once on mount

  const handleStartWebcam = () => {
    try {
      if (webcamRef.current && !webcamRef.current.active) {
        webcamRef.current.start();
        setIsWebcamActive(true);
      }
    } catch (error) {
      console.error("Error starting webcam:", error);
    }
  };

  const handleStopWebcam = () => {
    try {
      if (webcamRef.current && webcamRef.current.active) {
        webcamRef.current.stop();
        setIsWebcamActive(false);
        setPredictions([]);
      }
    } catch (error) {
      console.error("Error stopping webcam:", error);
    }
  };

  return (
    <div className="container">
      <div className="controls">
        <button
          type="button"
          className="control-button"
          onClick={handleStartWebcam}
          disabled={isWebcamActive}
        >
          Start
        </button>
        <button
          type="button"
          className="control-button"
          onClick={handleStopWebcam}
          disabled={!isWebcamActive}
        >
          Stop
        </button>
      </div>
      <div className="webcam-container" id="webcam-container"></div>
      <div className="label-container" id="label-container">
        {predictions.map((prediction, index) => (
          <div key={index}>
            {prediction.className}: {prediction.probability}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AidAssistant;
