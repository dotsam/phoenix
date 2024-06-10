
/* GET FOCUSED SCREEN */

function getFocusedScreen ( win = Window.focused () ) {

  if ( win && win.screen () ) return win.screen ();

  return Screen.main () || Screen.all () [0];

}
