const backgroundStyle = {
  home: {
    background: `url('/img/bg/dashboard/w480.png')`,
    backgroundSize: `cover`,
    '@media (min-width: 768px)': {
      backgroundImage: `url('/img/bg/dashboard/w768.png')`
    },
    '@media (min-width: 992px)': {
      backgroundImage: `url('/img/bg/dashboard/w992.png')`
    },
    '@media (min-width: 1200px)': {
      backgroundImage: `url('/img/bg/dashboard/w1200.png')`
    },
    '@media (min-width: 1680px)': {
      backgroundImage: `url('/img/bg/dashboard/w1680.png')`
    }
  },
  dashboard: {
    background: `#f3f5f7 url('/img/bg/dashboard/w480.png')`,
    backgroundSize: `cover`,
    '@media (min-width: 768px)': {
      backgroundImage: `url('/img/bg/dashboard/w768.png')`
    },
    '@media (min-width: 992px)': {
      backgroundImage: `url('/img/bg/dashboard/w992.png')`
    },
    '@media (min-width: 1200px)': {
      backgroundImage: `url('/img/bg/dashboard/w1200.png')`
    },
    '@media (min-width: 1680px)': {
      backgroundImage: `url('/img/bg/dashboard/w1680.png')`
    }
  }
}

export default backgroundStyle
