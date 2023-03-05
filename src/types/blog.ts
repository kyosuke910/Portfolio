export type Blog = {
  id : string
  title : string
  body : string
  headline: string
  tags: Tag[]
  image?: {
    url: string;
    width: number;
    height: number;
  }
  createAt: string
  updateAt: string
  publishedAt: string
  revisedAt: string
}

export type Props = {
  blog: Blog
}

export type Tag = {
  id: string
  tag: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
}
