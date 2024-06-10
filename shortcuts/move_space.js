
/* MOVE TO NEXT/PREVIOUS SPACE */

const move_space = [
  ['pageUp', HYPER, [1, false]],
  ['pageDown', HYPER, [-1, false]],
  ['pageUp', HYPER_SHIFT, [1, true]],
  ['pageDown', HYPER_SHIFT, [-1, true]]
];

setKeysHandler ( (direction, follow) => {

  const window = Window.focused ();

  if ( !window ) return;

  const screen = window.screen();
  const spaces = screen.spaces();

  if ( spaces.length < 2 ) return;

  const space = window.screen().currentSpace();
  const curSpaceIndex = spaces.findIndex ( s => s.isEqual ( space ) )

  let nextIndex = curSpaceIndex + direction;

  nextIndex = ( nextIndex < 0 ) ? spaces.length + nextIndex : nextIndex % spaces.length;

  spaces[nextIndex].moveWindows([window]);

  if (follow) {
    window.focus();
  } else {
    // TODO: Focus another window on the screen we just left?
    // "Another" is the trick here, we probably need to find another window from the same app if possible,
    // or if not, "smartly" choose another
    // screen.windows({ visible: true })[0].focus();
  }

}, move_space );
