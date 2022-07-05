
/* MOVE TO NEXT/PREVIOUS DISPLAY */

const move = [
  [',', HYPER, ['previous']],
  ['.', HYPER, ['next']]
];

setKeysHandler ( (direction) => {

  const window = Window.focused ();

  if ( !window ) return;

  const curScreen = window.screen();

  let nextScreen = curScreen[direction]();

  if ( DISPLAY_ORDER_OVERRIDE.length ) {
    const allScreens = Screen.all();

    if (allScreens.length === DISPLAY_ORDER_OVERRIDE.length) {
      if (direction === 'previous') {
        allScreens.reverse();
      }

      const curScreenIndex = allScreens.indexOf(curScreen);
      const overrideScreenIndex = DISPLAY_ORDER_OVERRIDE.indexOf(curScreenIndex);

      const nextScreenIndex = (overrideScreenIndex + 1) % allScreens.length;

      nextScreen = allScreens[DISPLAY_ORDER_OVERRIDE[nextScreenIndex]];
    }
  }

  setScreen(nextScreen);

}, move );
