import {keyMirror} from "../utils/index";

const ActionTypes = keyMirror({


  // ModuleA
  REQUEST_MODULEA_TOKEN: null,
  RECEIVE_MODULEA_TOKEN: null,
  FAILURE_MODULEA_TOKEN: null,

  // ModuleB
    REQUEST_MODULEB_TOKEN: null,
    RECEIVE_MODULEB_TOKEN: null,
    FAILURE_MODULEB_TOKEN: null,

    INCREASE : null,
    DECREASE : null
});

export default ActionTypes;
