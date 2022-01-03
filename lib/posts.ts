import fs from 'fs';
import { join } from 'path';

import matter from 'gray-matter';
import remark from 'remark';
import remarkHtml from 'remark-html';
import remarkPrism from 'remark-prism';

import { PostData, PostMeta } from '../types/post';

export const POST_DIRECTORY = join(process.cwd(), 'posts');

const getAllFileNames = () => fs.readdirSync(POST_DIRECTORY);

export function getAllPostsMeta(): PostMeta[] {
  const files = getAllFileNames();

  const postsMeta: PostMeta[] = files.map((file) => {
    const fullPath = join(POST_DIRECTORY, file);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data: meta } = matter(fileContents);
    return { ...meta, slug: file.replace('.md', '') } as PostMeta;
  });

  return postsMeta;
}

export function getAllSlugs(): string[] {
  const files = getAllFileNames();

  const slugs: string[] = files.map((file) => file.replace('.md', ''));

  return slugs;
}

export async function getPostData(slug: string): Promise<PostData> {
  const fullPath = join(POST_DIRECTORY, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data: meta, content } = matter(fileContents);

  const result = await remark()
    .use(remarkHtml)
    .use(remarkPrism, {
      transformInlineCode: false,
    })
    .process(content);

  return {
    ...meta,
    slug,
    content: result.toString(),
  } as PostData;
}
