'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inherits2 = require('/Users/johnotander/code/cssstats/node_modules/babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _getPrototypeOf = require('/Users/johnotander/code/cssstats/node_modules/babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('/Users/johnotander/code/cssstats/node_modules/babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('/Users/johnotander/code/cssstats/node_modules/babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = require('/Users/johnotander/code/cssstats/node_modules/babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _react = require('/Users/johnotander/code/cssstats/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _rebass = require('rebass');

var _css = require('/Users/johnotander/code/cssstats/node_modules/next/dist/lib/css.js');

var _css2 = _interopRequireDefault(_css);

var _style = require('../style');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);
  (0, _createClass3.default)(_class, null, [{
    key: 'getInitialProps',
    value: function getInitialProps() {
      return {
        sites: ['google.com']
      };
    }
  }]);

  function _class(props) {
    (0, _classCallCheck3.default)(this, _class);

    var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, props));

    _this.state = { uri: '' };
    _this.handleUriChange = _this.handleUriChange.bind(_this);
    _this.handleUriSubmit = _this.handleUriSubmit.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(_class, [{
    key: 'handleUriChange',
    value: function handleUriChange(e) {
      this.setState({
        uri: e.target.value
      });
    }
  }, {
    key: 'handleUriSubmit',
    value: function handleUriSubmit(e) {
      this.props.url.pushTo('/stats?uri=' + this.state.uri);
      e.preventDefault();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: (0, _css2.default)(_style2.default) },
        _react2.default.createElement(
          'h1',
          null,
          'Css Stats'
        ),
        _react2.default.createElement(_rebass.InlineForm, {
          label: 'uri',
          name: 'uri',
          type: 'url',
          buttonLabel: 'Get Stats',
          placeholder: 'Input a url, domain, or direct css link',
          onChange: this.handleUriChange,
          onClick: this.handleUriSubmit
        })
      );
    }
  }]);
  return _class;
}(_react2.default.Component);

exports.default = _class;
    if (module.hot) {
      module.hot.accept()
      if (module.hot.status() !== 'idle') {
        var Component = module.exports.default || module.exports
        next.router.update('/', Component)
      }
    }
  