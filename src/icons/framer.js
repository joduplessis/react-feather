import React from 'react';
import PropTypes from 'prop-types';

const Framer = (props) => {
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
      <path d="M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7" />
    </svg>
  );
};

Framer.propTypes = {
  color: PropTypes.string,
  thickness: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Framer.defaultProps = {
  color: 'currentColor',
  size: '24',
  thickness: '2',
};

export default Framer;
