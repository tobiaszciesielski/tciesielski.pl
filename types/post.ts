export interface PostMeta {
  title: string;
  date: string;
  excerpt: string;
  author: string;
  category: string;
  tags: string[];
  slug: string;
}

export interface PostData extends PostMeta {
  content: string;
}
