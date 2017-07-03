import React from 'react';
import PropTypes from 'prop-types';

const OptionSelect = props =>
  // const itemStyle = {display: block;}
   (
     <div role="button" tabIndex="-1" onMouseDown={props.mouseClick}>
       {props.roomName}
     </div>
  );

OptionSelect.propTypes = {
  roomName: PropTypes.string.isRequired,
  mouseClick: PropTypes.func.isRequired,
};

export default OptionSelect;
