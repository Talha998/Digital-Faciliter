import * as React from "react"
import Svg, { Defs, Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: style */
const PasswordOpen = (props) => (
  <Svg
  xmlns="http://www.w3.org/2000/svg"
  fill="currentColor"
  className="w-6 h-6 text-gray-800 dark:text-white"
  viewBox="0 0 200 200"
    {...props}
  >
    <Path
      d="M171.51 97.44c-.69 1.15-1.25 2.39-2.08 3.42-10.06 12.59-21.72 23.41-35.75 31.48-9.24 5.32-19.08 8.89-29.8 9.62-8.75.59-17.2-.89-25.38-4-12.34-4.69-22.93-12.1-32.61-20.92-5.68-5.17-10.87-10.8-15.59-16.86-2.03-2.6-2.04-4.58 0-7.17 10.13-12.85 21.92-23.86 36.15-32.07 11.17-6.45 23.1-10.34 36.19-9.76 8.99.4 17.46 2.82 25.51 6.77 16.89 8.3 30.41 20.63 41.98 35.26.59.75.94 1.69 1.39 2.54v1.67Zm-132.1-.93c.52.62.88 1.1 1.29 1.53 4.34 4.45 8.49 9.11 13.08 13.3 8.85 8.07 18.69 14.65 30.14 18.54 6.86 2.33 13.89 3.32 21.12 2.53 9.26-1.02 17.67-4.45 25.59-9.2 10.29-6.17 19.09-14.11 27.08-23 1.04-1.16 2.04-2.37 3.16-3.68-2.74-2.96-5.31-5.9-8.04-8.67-9.19-9.33-19.37-17.34-31.48-22.59-6.04-2.62-12.32-4.34-18.95-4.65-10.13-.48-19.45 2.35-28.32 6.94-9.92 5.12-18.49 12.05-26.3 19.95-2.86 2.9-5.55 5.97-8.37 9.02Z"
      fill={props.color} // Replace with your desired color
      className="b"
    />
    <Path
      d="M128.34 96.72c-.11 15.64-12.87 28.26-28.39 28.09-15.62-.18-28.13-12.81-28.02-28.32.11-15.65 12.86-28.26 28.39-28.09 15.62.17 28.13 12.82 28.02 28.32Zm-9.41-.06c.06-10.34-8.29-18.75-18.71-18.87-10.32-.11-18.92 8.46-18.9 18.83.03 10.37 8.43 18.77 18.8 18.8 10.34.03 18.76-8.37 18.82-18.76Z"
      fill={props.color}  // Replace with your desired color
      className="b"
    />
  </Svg>
)
export default PasswordOpen