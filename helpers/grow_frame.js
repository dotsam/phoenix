
/* GROW FRAME */

function growFrame ( x, y, width, height, window = Window.focused () ) {

  if ( !window ) return;

  const screen = getFocusedScreen ( window ),
        sFrame = screen.flippedFrame (),
        svFrame = screen.flippedVisibleFrame (),
        yUnusable = sFrame.height - svFrame.height,
        frame = window.frame (),
        newFrame = _.cloneDeep ( frame );

  if ( x ) newFrame.x = _.clamp ( frame.x + x, sFrame.x, sFrame.x + sFrame.width );
  if ( y ) newFrame.y = _.clamp ( frame.y + y, yUnusable + sFrame.y, yUnusable + sFrame.y + svFrame.height );
  if ( width ) newFrame.width = Math.min ( x ? frame.x - sFrame.x + frame.width : sFrame.width - (frame.x - sFrame.x), frame.width + ( width - ( Math.abs ( x ) - Math.abs ( frame.x - newFrame.x ) ) ) );
  if ( height ) newFrame.height = Math.min ( y ? frame.y + frame.height : sFrame.height - (frame.y - sFrame.y), frame.height + ( height - ( Math.abs ( y ) - Math.abs ( frame.y - newFrame.y ) ) ) );

  window.setFrame ( newFrame );

}
