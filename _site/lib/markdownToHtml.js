import { join } from 'path';
import remark from 'remark';
import html from 'remark-html';
import { includeMarkdown } from '@hashicorp/remark-plugins';

export default async function markdownToHtml(markdown) {
  const result = await remark()
    .use(html)
    .use(includeMarkdown, { resolveFrom: join(process.cwd(), '_includes') })
    .process(markdown);

  return result.toString();
}
