import React from 'react';
import {connect} from 'react-redux';
import {sendCodePegs, loadCodePegs} from "../actions/index";

export function Bow(props) {
  return (
    <div>
      <select>
        <option>Please select</option>
        <option value="0">Red</option>
        <option value="1">Green</option>
        <option value="2">Blue</option>
        <option value="3">Yellow</option>
      </select>
      <select>
        <option>Please select</option>
        <option value="0">Red</option>
        <option value="1">Green</option>
        <option value="2">Blue</option>
        <option value="3">Yellow</option>
      </select>
      <select>
        <option>Please select</option>
        <option value="0">Red</option>
        <option value="1">Green</option>
        <option value="2">Blue</option>
        <option value="3">Yellow</option>
      </select>
      <select>
        <option>Please select</option>
        <option value="0">Red</option>
        <option value="1">Green</option>
        <option value="2">Blue</option>
        <option value="3">Yellow</option>
      </select>
      <button onClick={props.sendCodePegs}>Send</button>
      <button onClick={props.loadCodePegs}>Load</button>
      <HistoryBow {...props}/>
    </div>
  );
}

function HistoryBow(props) {
  if (typeof props.historyPegs === 'undefined') {
    return null;
  } else {
    return (
      <div>
        {
          props.historyPegs.map((pegs, index) => <Pegs {...[pegs]} key={index}/>)
        }
      </div>
    );
  }
}

function Pegs(props) {
  return (
    <div>
      <CodePegs {...[props[0].codePegs]}/>
      <KeyPegs {...[props[0].keyPegs]}/>
    </div>
  );
}

function CodePegs(props) {
  return (
    <div>
      {
        props[0].map((peg, index) => <span key={index}>{peg}</span>)
      }
    </div>
  );
}

function KeyPegs(props) {
  return (
    <div>
      {
        props[0].map((peg, index) => <span key={index}>{peg}</span>)
      }
    </div>
  );
}

function mapState(state) {
  return state;
}

function mapDispatch(dispatch) {
  return {
    sendCodePegs: () => dispatch(sendCodePegs()),
    loadCodePegs: () => dispatch(loadCodePegs()),
  };
}

export default connect(mapState, mapDispatch)(Bow);
