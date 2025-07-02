
/* SET FRAME */

function setFrame ( x, y, width, height, window = Window.focused () ) {

  if ( _.isString ( x ) ) {

    setFrame ( ...getNamedFrame ( x ), y || window );
    setAnchor ( ...getNamedAnchor ( x ), y || window );

  } else {

    if ( !window ) return;

    const screen = window.screen (),
          frame = screen.flippedVisibleFrame ();

    window.setFrame ({
      x: frame.x + ( frame.width * x ) + FRAME_PADDING,
      y: frame.y + ( frame.height * y ) + FRAME_PADDING,
      width: (frame.width * width) - (FRAME_PADDING * 2),
      height: (frame.height * height) - (FRAME_PADDING * 2)
    });

  }

}
