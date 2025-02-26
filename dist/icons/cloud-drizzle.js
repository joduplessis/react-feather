function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';

var CloudDrizzle = function CloudDrizzle(props) {
  var color = props.color,
      size = props.size,
      thickness = props.thickness,
      otherProps = _objectWithoutProperties(props, ["color", "size", "thickness"]);

  return React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: thickness,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, otherProps), React.createElement("line", {
    x1: "8",
    y1: "19",
    x2: "8",
    y2: "21"
  }), React.createElement("line", {
    x1: "8",
    y1: "13",
    x2: "8",
    y2: "15"
  }), React.createElement("line", {
    x1: "16",
    y1: "19",
    x2: "16",
    y2: "21"
  }), React.createElement("line", {
    x1: "16",
    y1: "13",
    x2: "16",
    y2: "15"
  }), React.createElement("line", {
    x1: "12",
    y1: "21",
    x2: "12",
    y2: "23"
  }), React.createElement("line", {
    x1: "12",
    y1: "15",
    x2: "12",
    y2: "17"
  }), React.createElement("path", {
    d: "M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"
  }));
};

CloudDrizzle.propTypes = {
  color: PropTypes.string,
  thickness: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
CloudDrizzle.defaultProps = {
  color: 'currentColor',
  size: '24',
  thickness: '2'
};
export default CloudDrizzle;