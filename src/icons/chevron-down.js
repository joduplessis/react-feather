import React from 'react';
import PropTypes from 'prop-types';

const ChevronDown = (props) => {
  const { color, size, thickness, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={thickness}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
};

ChevronDown.propTypes = {
  color: PropTypes.string,
  thickness: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ChevronDown.defaultProps = {
  color: 'currentColor',
  size: '24',
  thickness: '2',
};

export default ChevronDown;
