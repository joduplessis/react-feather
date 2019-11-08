import React from 'react';
import PropTypes from 'prop-types';

const Navigation2 = (props) => {
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
      <polygon points="12 2 19 21 12 17 5 21 12 2" />
    </svg>
  );
};

Navigation2.propTypes = {
  color: PropTypes.string,
  thickness: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Navigation2.defaultProps = {
  color: 'currentColor',
  size: '24',
  thickness: '2',
};

export default Navigation2;
