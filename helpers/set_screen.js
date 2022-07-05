
/* SET SCREEN */

function setScreen( screen, window = Window.focused () ){

  if ( !window ) return;

  const currentScreen = window.screen (),
        currentFrame = currentScreen.flippedVisibleFrame (),
        x = (window.frame().x - currentFrame.x) / currentFrame.width,
        y = (window.frame().y - currentFrame.y) / currentFrame.height,
        width = window.frame().width / currentFrame.width,
        height = window.frame().height / currentFrame.height,
        newScreenFrame = screen.flippedVisibleFrame();

  window.setFrame ( {
    x: newScreenFrame.x + ( newScreenFrame.width * x ),
    y: newScreenFrame.y + ( newScreenFrame.height * y ),
    width: newScreenFrame.width * width,
    height: newScreenFrame.height * height
  } );

}
