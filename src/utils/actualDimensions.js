//Dimensions.js
import {Dimensions} from 'react-native'
const {height, width} = Dimensions.get('window')

const actualDimensions = {
  height: height < width ? width : height,
  width: width > height ? height : width,
  getActualWidth ({width: imageWidth, height: imageHeight}) {
    return imageWidth <= width ? imageWidth : width
  },
  getActualHeight ({width: imageWidth, height: imageHeight}) {
    return imageWidth <= width
      ? imageHeight
      : imageHeight * (width / imageWidth)
  },
}

export default actualDimensions
