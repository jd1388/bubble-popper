export default {
    appContainer: {
      display: 'flex',
      width: '100%',
      height: '100vh',
    },
    menuButton: {
      position: 'fixed',
      left: '12px',
      top: '12px',
      fontSize: '16pt',
      padding: '12px',
      borderRadius: '6px',
      border: 'solid 1px blue',
    },
    bubbleContainer: {
      display: 'flex',
      flex: 12,
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      backgroundImage: 'url("bubble.svg")',
      backgroundRepeat: 'space',
      backgroundSize: '75px',
    },
};
