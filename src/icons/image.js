import React from 'react';
import PropTypes from 'prop-types';

const Image = (props) => {
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
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <polyline points="21 15 16 10 5 21" />
    </svg>
  );
};

Image.propTypes = {
  color: PropTypes.string,
  thickness: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Image.defaultProps = {
  color: 'currentColor',
  size: '24',
  thickness: '2',
};

export default Image;
