export default {
  appContainer: {
    display: 'flex',
    width: '100%',
    height: '100vh',
  },
  bubbleContainer: {
    display: 'flex',
    flex: 8,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundImage: 'url("bubble.svg")',
    backgroundRepeat: 'space',
    backgroundSize: '225px',
  },
  menu: {
    borderLeft: 'solid 1px blue',
    flex: 4,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    overflowY: 'scroll',
  },
};
