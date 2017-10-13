import {
  CLEAR_CODE_PEGS,
  CLEAR_HISTORY_PEGS,
  LOAD_HISTORY_PEGS,
  RECEIVE_CODE_PEGS
} from '../actions';

const bow = {
  codePegs: [0, 1, 2, 3],
  historyCodePegs: [[3, 2, 1, 0], [2, 0, 1, 3], [0, 2, 1, 3]],
  historyKeyPegs: [[4, 0], [4, 1], [4, 2]],
};

const initialState = {
  codePegs: [],
  historyCodePegs: [],
  historyKeyPegs: [],
};

export function bowReducer(state = initialState, action) {
  switch (action.type) {
    case CLEAR_CODE_PEGS:
      return {
        codePegs: []
      };

    case CLEAR_HISTORY_PEGS:
      return {
        historyCodePegs: [],
        historyKeyPegs: []
      };

    case LOAD_HISTORY_PEGS:
      const historyPegs = bow.historyKeyPegs.map((keyPeg, index) => {
        return {codePegs: bow.historyCodePegs[index], keyPegs: bow.historyKeyPegs[index]};
      });

      return {
        historyPegs: historyPegs
      };

    case RECEIVE_CODE_PEGS:
      return {
        codePegs: bow.codePegs
      };

    default:
      return state;
  }
}

export default bowReducer;
