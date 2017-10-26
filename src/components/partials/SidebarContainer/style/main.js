export const mainStyle = {
  container: {
    background: 'white',
    position: 'absolute',
    padding: `20px`,
    boxShadow: `0px 0px 17px 0px rgba(0,0,0,0.15)`,
    top: `10px`,
    width: `calc(100vw - 15px)`,
    height: `calc(100vh - 20px)`,
    right: `-100vw`,
    transition: `1s`
  },
  active: {
    right: `0`
  }
}

export default mainStyle
