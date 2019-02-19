import marked from 'marked';
import TurndownService from 'turndown';

const turndownService = new TurndownService();
turndownService.addRule('linebreaks', {
  filter: ['br'],
  replacement: () => '<br>',
});

export const markdownToHtml = (markdown) => {
  const html = marked(markdown, {sanitize: true});
  return html;
};

export const htmlToMarkdown = (html) => {
  const markdown = turndownService.turndown(html).replace(/\n/g,'<br>');
  return markdown;
};
