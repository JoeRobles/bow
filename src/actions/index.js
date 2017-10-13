export const CLEAR_CODE_PEGS ='CLEAR_CODE_PEGS';
export const CLEAR_HISTORY_PEGS ='CLEAR_HISTORY_PEGS';
export const LOAD_HISTORY_PEGS ='LOAD_HISTORY_PEGS';
export const RECEIVE_CODE_PEGS ='RECEIVE_CODE_PEGS';

export function sendCodePegs() {
  return {
    type: RECEIVE_CODE_PEGS
  };
}

export function loadCodePegs() {
  return {
    type: LOAD_HISTORY_PEGS
  };
}
