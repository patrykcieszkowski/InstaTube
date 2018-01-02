import React from 'react'

import MobilePlayer from './mobile'
import DesktopPlayer from './desktop'

const VideoPlayer = props => {
  if (window.MediaSource) {
    return (
      <DesktopPlayer
        {...props}
      />
    )
  }

  return (
    <MobilePlayer
      {...props}
    />
  )
}

export default VideoPlayer