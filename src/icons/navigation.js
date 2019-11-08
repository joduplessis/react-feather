import React from 'react';
import PropTypes from 'prop-types';

const Navigation = (props) => {
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
      <polygon points="3 11 22 2 13 21 11 13 3 11" />
    </svg>
  );
};

Navigation.propTypes = {
  color: PropTypes.string,
  thickness: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Navigation.defaultProps = {
  color: 'currentColor',
  size: '24',
  thickness: '2',
};

export default Navigation;
