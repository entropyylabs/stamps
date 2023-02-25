import React, { useRef } from "react"
import { Camera } from "react-camera-pro"

const Cameraview = () => {
  const camera = useRef(null)
  const errorMessages = {
    noCameraAccessible:
      "No camera device accessible. Please connect your camera or try a different browser.",
    permissionDenied: "Permission denied. Please refresh and give camera permission.",
    switchCamera:
      "It is not possible to switch camera to different one because there is only one video device accessible.",
    canvas: "Canvas is not supported.",
  }

  const videoConstraints = {
    facingMode: { exact: "environment" },
  }

  return (
    <div style={{ height: "700px" }}>
      <Camera
        errorMessages={errorMessages}
        ref={camera}
        facingMode="environment"
        style={{ zIndex: 0, height: "695px" }}
      />
    </div>
  )
}

export default Cameraview
