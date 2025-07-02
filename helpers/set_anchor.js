
/* SET ANCHOR */

function setAnchor ( x, y, window = Window.focused () ) {

  if ( _.isString ( x ) ) return setAnchor ( ...getNamedAnchor ( x ), y || window );

  if ( !window ) return;

  if ( x === false && y === false ) return;

  const screen = window.screen (),
        frame = screen.flippedVisibleFrame (),
        wFrame = window.frame ();

  const nextFrame = {
    x: x === 0 ? frame.x + FRAME_PADDING : ( x === 1 ? frame.x + frame.width - wFrame.width - FRAME_PADDING : wFrame.x ),
    y: y === 0 ? frame.y + FRAME_PADDING : ( y === 1 ? frame.y + frame.height - wFrame.height - FRAME_PADDING : wFrame.y ),
    width: wFrame.width,
    height: wFrame.height
  };

  if ( _.isEqual ( frame, nextFrame ) ) return;

  window.setFrame ( nextFrame );

}
