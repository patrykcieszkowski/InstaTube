import { StyleSheet } from 'aphrodite'

export default StyleSheet.create({
  track: {
    position: `absolute`,
    width: `10px`,
    borderRadius: `5px`,
    padding: `2px 0`,
    backgroundColor: '#e2e9f1',
    height: '100%',
    top: 0,
    right: 0
  },
  thumb: {
    position: `relative`,
    display: `block`,
    width: `6px`,
    margin: `0 2px`,
    cursor: `pointer`,
    borderRadius: `3px`,
    backgroundColor: `white`
  },
  view: {
    marginRight: `-14px`,
    width: `calc(100% - 12px)`,
    overflow: `-moz-scrollbars-none`,
    paddingRight: `4px`,
    transition: `all 0.2s cubic-bezier(0.77, 0, 0.175, 1)`,
    '::-webkit-scrollbar': {
      width: `0px`,
      background: `transparent`
    },
    '::-webkit-scrollbar-thumb': {
      background: `transparent`
    }
  },
  hideTrack: {
    paddingRight: `0`
  }
})
