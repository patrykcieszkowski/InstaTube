import { StyleSheet } from 'aphrodite'

import controls from './controls'
import video from './video'
import main from './main'
import slider from './slider'
import quality from './quality'

export default {
  controls: StyleSheet.create(controls),
  video: StyleSheet.create(video),
  main: StyleSheet.create(main),
  slider: StyleSheet.create(slider),
  quality: StyleSheet.create(quality)
}
