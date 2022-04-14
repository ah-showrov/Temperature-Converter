import React from "react";

const scalesName = {
  c: "celsius",
  f: "fahrenheit",
};
export default function TemperatureInput({
  scale,
  temperature,
  onTemperatureChange,
}) {
  return (
    <fieldset>
      <legend> Enter temperature in {scalesName[scale]} :</legend>
      <input
        type="text"
        value={temperature}
        onChange={(e) => onTemperatureChange(e, scale)}
      />
    </fieldset>
  );
}
