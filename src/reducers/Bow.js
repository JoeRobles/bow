import {
  LOAD_CODE_PEGS,
  LOAD_KEY_PEGS,
  CLEAR_CODE_PEGS,
  CLEAR_KEY_PEGS
} from '../actions/Bow';

const bow = {
  codePegs: [0, 1, 2, 3],
  keyPegs: [2]
};

const initialState = {
  codePegs: [],
  keyPegs: [],
};

export function bowReducer(state = initialState, action) {
  switch (action.type) {
    case CLEAR_CODE_PEGS:
      return {
        codePegs: []
      };
      break;

    case CLEAR_KEY_PEGS:
      return {
        keyPegs: []
      };
      break;

    case LOAD_CODE_PEGS:
      return {
        codePegs: bow.codePegs
      };
      break;

    case LOAD_KEY_PEGS:
      return {
        keyPegs: bow.keyPegs
      };
      break;

    default:
      return state;
  }
}

export default bowReducer;
