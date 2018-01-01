'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Switch = exports.Default = exports.Case = undefined;

var _react = require('react');

var Case = exports.Case = function Case(_ref) {
  var children = _ref.children;
  return children;
};

var Default = exports.Default = function Default(_ref2) {
  var children = _ref2.children;
  return children;
};

var Switch = exports.Switch = function Switch(_ref3) {
  var children = _ref3.children,
      on = _ref3.on;

  var maybeChild = _react.Children.map(children, function (child) {
    if (child.type === Case) {
      if (child.props.condition === on) {
        return child;
      }
    }
  });
  return maybeChild;
};