function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';

var Sliders = function Sliders(props) {
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
    x1: "4",
    y1: "21",
    x2: "4",
    y2: "14"
  }), React.createElement("line", {
    x1: "4",
    y1: "10",
    x2: "4",
    y2: "3"
  }), React.createElement("line", {
    x1: "12",
    y1: "21",
    x2: "12",
    y2: "12"
  }), React.createElement("line", {
    x1: "12",
    y1: "8",
    x2: "12",
    y2: "3"
  }), React.createElement("line", {
    x1: "20",
    y1: "21",
    x2: "20",
    y2: "16"
  }), React.createElement("line", {
    x1: "20",
    y1: "12",
    x2: "20",
    y2: "3"
  }), React.createElement("line", {
    x1: "1",
    y1: "14",
    x2: "7",
    y2: "14"
  }), React.createElement("line", {
    x1: "9",
    y1: "8",
    x2: "15",
    y2: "8"
  }), React.createElement("line", {
    x1: "17",
    y1: "16",
    x2: "23",
    y2: "16"
  }));
};

Sliders.propTypes = {
  color: PropTypes.string,
  thickness: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Sliders.defaultProps = {
  color: 'currentColor',
  size: '24',
  thickness: '2'
};
export default Sliders;