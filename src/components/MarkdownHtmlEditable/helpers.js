import showdown from 'showdown';
import TurndownService from 'turndown';

const turndownService = new TurndownService();
const markdownToHtmlConverter = new showdown.Converter();
markdownToHtmlConverter.setOption('underline', true);

export const markdownToHtml = ({markdown, inputFilters=[]}) => {
  let _markdown = markdown.slice(0);
  inputFilters.forEach((filter) => {
    const [replacee, replacer] = filter;
    _markdown = _markdown.replace(replacee, replacer);
  });
  const html = markdownToHtmlConverter.makeHtml(_markdown);
  return html;
};

export const htmlToMarkdown = ({html, outputFilters=[]}) => {
  let markdown = turndownService.turndown(html);
  outputFilters.forEach((filter) => {
    const [replacee, replacer] = filter;
    markdown = markdown.replace(replacee, replacer);
  });
  return markdown;
};
