function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';

var Sunrise = function Sunrise(props) {
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
  }, otherProps), React.createElement("path", {
    d: "M17 18a5 5 0 0 0-10 0"
  }), React.createElement("line", {
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "9"
  }), React.createElement("line", {
    x1: "4.22",
    y1: "10.22",
    x2: "5.64",
    y2: "11.64"
  }), React.createElement("line", {
    x1: "1",
    y1: "18",
    x2: "3",
    y2: "18"
  }), React.createElement("line", {
    x1: "21",
    y1: "18",
    x2: "23",
    y2: "18"
  }), React.createElement("line", {
    x1: "18.36",
    y1: "11.64",
    x2: "19.78",
    y2: "10.22"
  }), React.createElement("line", {
    x1: "23",
    y1: "22",
    x2: "1",
    y2: "22"
  }), React.createElement("polyline", {
    points: "8 6 12 2 16 6"
  }));
};

Sunrise.propTypes = {
  color: PropTypes.string,
  thickness: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Sunrise.defaultProps = {
  color: 'currentColor',
  size: '24',
  thickness: '2'
};
export default Sunrise;