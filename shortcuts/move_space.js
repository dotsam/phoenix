
/* MOVE TO NEXT/PREVIOUS SPACE */

const move_space = [
  ['pageUp', HYPER, ['next', false]],
  ['pageDown', HYPER, ['previous', false]],
  ['pageUp', HYPER_SHIFT, ['next', true]],
  ['pageDown', HYPER_SHIFT, ['previous', true]]
];

setKeysHandler ( (direction, follow) => {

  const window = Window.focused ();

  if ( !window ) return;

  const space = Space.active();

  let nextSpace = space[direction]();

  nextSpace.moveWindows([window]);

  if (follow) {
    window.focus();
  }

}, move_space );
