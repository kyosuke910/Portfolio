import { client } from "../../libs/client"
import { GetStaticProps } from 'next'
import type { Blog, Props } from '../../types/blog'

// SSG
export const getStaticProps: GetStaticProps<Props, { id: string }> = async ({ params }) => {
  if (!params || !params.id) {
    return { notFound: true }
  }

  const { id } = params
  const data = await client.get({ endpoint: 'blog', contentId: Array.isArray(id) ? id[0] : id })

  return {
    props: {
      blog: data,
    },
    revalidate: 1,
  }
}

export const getStaticPaths = async() => {
  const data = await client.get({ endpoint: 'blog' })

  const paths = data.contents.map((content:Blog)=> `/blog/${content.id}`)
  return {
    paths,
    fallback: false
  }
}

export default function BlogId({ blog }:Props) {
  return(
    <main>
      <h1>{blog.title}</h1>
      <img src={blog.image?.url} alt="" />
      <p>{`投稿日 : ${blog.publishedAt.substr(0,4)}/${blog.publishedAt.substr(5,2)}/${blog.publishedAt.substr(8,2)}`}</p>
      <div dangerouslySetInnerHTML={{ __html: blog.body }}></div>
      {/* <Typography variant="body2" color="textSecondary" component="div">
                    {ReactHTMLParser(blog.body)}
                  </Typography> */}

    </main>
  )
}