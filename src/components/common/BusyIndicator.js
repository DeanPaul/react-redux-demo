import React, { PropTypes } from 'react';
import FontIcon from './FontIcon';

const BusyIndicator = (props) => (
  <div className={props.className}>
    <FontIcon name="stack">
      <FontIcon name={props.spinner} spin stack="1x" />
      <FontIcon name="circle-thin" stack="2x" />
    </FontIcon>
  </div>
);

// BusyIndicator.propTypes = {
//   className: PropTypes.string,
//   spinner: PropTypes.string,
// };

BusyIndicator.defaultProps = {
  spinner: 'refresh',
};

export default BusyIndicator;
