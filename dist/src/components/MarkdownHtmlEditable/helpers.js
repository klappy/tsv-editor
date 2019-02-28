'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.htmlToMarkdown = exports.markdownToHtml = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _showdown = require('showdown');

var _showdown2 = _interopRequireDefault(_showdown);

var _turndown = require('turndown');

var _turndown2 = _interopRequireDefault(_turndown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var turndownService = new _turndown2.default();
var markdownToHtmlConverter = new _showdown2.default.Converter();
markdownToHtmlConverter.setOption('underline', true);

var markdownToHtml = exports.markdownToHtml = function markdownToHtml(_ref) {
  var markdown = _ref.markdown,
      _ref$inputFilters = _ref.inputFilters,
      inputFilters = _ref$inputFilters === undefined ? [] : _ref$inputFilters;

  var _markdown = markdown.slice(0);
  inputFilters.forEach(function (filter) {
    var _filter = _slicedToArray(filter, 2),
        replacee = _filter[0],
        replacer = _filter[1];

    _markdown = _markdown.replace(replacee, replacer);
  });
  var html = markdownToHtmlConverter.makeHtml(_markdown);
  return html;
};

var htmlToMarkdown = exports.htmlToMarkdown = function htmlToMarkdown(_ref2) {
  var html = _ref2.html,
      _ref2$outputFilters = _ref2.outputFilters,
      outputFilters = _ref2$outputFilters === undefined ? [] : _ref2$outputFilters;

  var markdown = turndownService.turndown(html);
  outputFilters.forEach(function (filter) {
    var _filter2 = _slicedToArray(filter, 2),
        replacee = _filter2[0],
        replacer = _filter2[1];

    markdown = markdown.replace(replacee, replacer);
  });
  return markdown;
};

//# sourceMappingURL=helpers.js.map