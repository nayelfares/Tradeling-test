import * as React from "react"
import Svg, { Path } from "react-native-svg"

const Eye = (props) => (
  <Svg
    width={17}
    height={11}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M8.205 10.756c4.693 0 7.94-3.797 7.94-4.98 0-1.19-3.252-4.981-7.94-4.981C3.57.795.26 4.585.26 5.775c0 1.184 3.31 4.98 7.945 4.98Zm0-1.717a3.28 3.28 0 0 1-3.281-3.264c-.006-1.828 1.453-3.263 3.281-3.263a3.252 3.252 0 0 1 3.275 3.263A3.282 3.282 0 0 1 8.205 9.04Zm0-2.086c.65 0 1.19-.533 1.19-1.178a1.193 1.193 0 0 0-2.385 0c0 .645.539 1.178 1.195 1.178Z"
      fill="#3C3C43"
      fillOpacity={0.3}
    />
  </Svg>
)

export default Eye
