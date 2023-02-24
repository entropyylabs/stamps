import React from "react"
import ReactStreetview from "react-streetview"

const GeoGuesser = () => {
  const googleMapsApiKey = process.env.NEXT_PUBLIC_MAPS_KEY

  // see https://developers.google.com/maps/documentation/javascript/3.exp/reference#StreetViewPanoramaOptions
  const streetViewPanoramaOptions = {
    position: { lat: 48.86750220793768, lng: 2.78353936022087 },
    pov: { heading: 100, pitch: 0 },
    zoom: 1,
  }
  return (
    <div
      style={{
        width: "325px",
        height: "330px",
        backgroundColor: "#eeeeee",
        border: "2px solid #262626",
        borderRadius: "8px",
      }}
    >
      <ReactStreetview
        apiKey={googleMapsApiKey}
        streetViewPanoramaOptions={streetViewPanoramaOptions}
      />
    </div>
  )
}

export default GeoGuesser
