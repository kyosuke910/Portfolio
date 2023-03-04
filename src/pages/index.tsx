import Link from 'next/link'
import Layout from '../components/layout'
import type { InferGetStaticPropsType, NextPage } from 'next'
import { client } from '../libs/client'
import type { Blog } from '../types/blog'
import styles from '../styles/Home.module.css'

// microCMSへAPIリクエスト
export const getStaticProps = async () => {
    const blog = await client.get({ endpoint: "blog" })

    return {
        props: {
            blogs: blog.contents,
        },
    };
};

// Props（blogsとtags）の型
    type Props = {
        blogs: Blog[];
    }

    const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
        blogs
    }: Props) => {
        console.log(blogs)
        return (
            <>
                <ul>
                    {blogs.map((blog)=>(
                        <li key={blog.id}>
                            <Link href={`/blog/${blog.id}`}>
                                <img src={blog.image?.url} alt="ブログ画像" />
                                {blog.title}
                                <div dangerouslySetInnerHTML={{ __html: blog.body }}></div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </>
        )
    }
export default Home