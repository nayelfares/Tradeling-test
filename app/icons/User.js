import * as React from "react"
import Svg, { Path } from "react-native-svg"

const User = (props) => (
  <Svg
    width={14}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M7.035 6.639c1.567 0 2.93-1.407 2.93-3.238 0-1.809-1.363-3.149-2.93-3.149-1.568 0-2.93 1.37-2.93 3.164 0 1.816 1.355 3.223 2.93 3.223ZM2.428 13.42h9.199c1.157 0 1.567-.33 1.567-.974 0-1.89-2.365-4.497-6.167-4.497-3.794 0-6.16 2.607-6.16 4.497 0 .644.41.974 1.56.974Z"
      fill="#3C3C43"
      fillOpacity={0.6}
    />
  </Svg>
)

export default User
