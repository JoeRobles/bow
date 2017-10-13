import React from 'react';
import {connect} from 'react-redux';

export function Bow(props) {
  return(
    <div>
      <pre><code>{JSON.stringify(props, null, 2)}</code></pre>
    </div>
  );
}

function mapState(state) {
  return state;
}

export default connect(mapState)(Bow);
