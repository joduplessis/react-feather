import React from 'react';
import PropTypes from 'prop-types';

const ChevronRight = (props) => {
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
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
};

ChevronRight.propTypes = {
  color: PropTypes.string,
  thickness: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ChevronRight.defaultProps = {
  color: 'currentColor',
  size: '24',
  thickness: '2',
};

export default ChevronRight;
