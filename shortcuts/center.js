
/* CENTER */

setKeyHandler ( 'x', HYPER, () => {

  const window = Window.focused ();

  if ( !window ) return;

  center_window ( window );

});

setKeyHandler ( 'x', HYPER_SHIFT, () => {

  const window = Window.focused ();

  if ( !window ) return;

  const frame = window.screen ().frame ();

  window.setFrame ({
    x: frame.x,
    y: frame.y,
    width: CENTER_WIDTH,
    height: CENTER_HEIGHT
  });

  center_window ( window );

});
