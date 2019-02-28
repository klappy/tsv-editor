'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _helpers = require('./helpers');

var helpers = _interopRequireWildcard(_helpers);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MarkdownHtmlEditable = function MarkdownHtmlEditable(_ref) {
  var markdown = _ref.markdown,
      handleChange = _ref.handleChange,
      inputFilters = _ref.inputFilters,
      outputFilters = _ref.outputFilters,
      style = _ref.style,
      raw = _ref.raw;

  markdown = markdown || '';
  var rawComponent = _react2.default.createElement('pre', {
    style: style,
    dir: 'auto',
    contentEditable: true,
    onBlur: function onBlur(e) {
      var _markdown = e.target.innerText;
      handleChange(_markdown);
    },
    dangerouslySetInnerHTML: { __html: markdown }
  });
  var htmlComponent = _react2.default.createElement('div', {
    style: style,
    dir: 'auto',
    contentEditable: true,
    dangerouslySetInnerHTML: {
      __html: helpers.markdownToHtml({ markdown: markdown, inputFilters: inputFilters })
    },
    onBlur: function onBlur(e) {
      var html = e.target.innerHTML;
      var _markdown = helpers.htmlToMarkdown({ html: html, outputFilters: outputFilters });
      handleChange(_markdown);
    }
  });
  return raw ? rawComponent : htmlComponent;
};

MarkdownHtmlEditable.propTypes = {
  markdown: _propTypes2.default.string.isRequired,
  handleChange: _propTypes2.default.func.isRequired,
  inputFilters: _propTypes2.default.array,
  outputFilters: _propTypes2.default.array,
  style: _propTypes2.default.object,
  raw: _propTypes2.default.bool
};

exports.default = MarkdownHtmlEditable;

//# sourceMappingURL=MarkdownHtmlEditable.js.map