
/* SAVE/RESTORE WINDOW POSITIONS */

let lastSaveTimestamp = 0;

setKeyHandler ( 'escape', HYPER, () => {

  const timestamp = Date.now ();

  if ( timestamp - lastSaveTimestamp <= DOUBLE_KEY_INTERVAL ) {

    lastSaveTimestamp = 0;

    // modalScreen ({ text: 'Twice' });
    Screen.all().forEach(screen => {
      screen.windows().forEach(window => {
        log(window.hash())
      });
    });

  } else {

    lastSaveTimestamp = timestamp;

    // modalScreen ({ text: 'Once' });

  }

});
