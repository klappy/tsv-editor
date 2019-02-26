import marked from 'marked';
import TurndownService from 'turndown';

const turndownService = new TurndownService();
turndownService.addRule('linebreaks', {
  filter: ['br'],
  replacement: () => '<br>',
});

export const markdownToHtml = (markdown) => {
  const _markdown = markdown.replace(/<br>/gi, '\n');
  const html = marked(_markdown, {sanitize: true});
  return html;
};

export const htmlToMarkdown = (html) => {
  const markdown = turndownService.turndown(html).replace(/\n/g,'<br>');
  return markdown;
};
