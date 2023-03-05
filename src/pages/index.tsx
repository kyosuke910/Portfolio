import type { InferGetStaticPropsType, NextPage } from 'next'
import { client } from '../libs/client'
import type { Blog,Tag } from '../types/blog'
import BlogArea from '../components/BlogArea'
import { animateScroll, Link } from 'react-scroll'
import { Element } from 'react-scroll'
import { useEffect, useRef, useState } from 'react'

// microCMSへAPIリクエスト
export const getStaticProps = async () => {
    const blog = await client.get({ endpoint: 'blog' })
    const tag = await client.get({ endpoint: "tag" })

    return {
        props: {
            blogs: blog.contents,
            tags: tag.contents,
        },
    };
};

// Props（blogs）の型
type Props = {
    blogs: Blog[]
    tags: Tag[]
}

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
    blogs,
    tags,
}: Props) => {
    const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
    const sectionRefs = [useRef<Element>(null), useRef<Element>(null), useRef<Element>(null)];

    const handleScroll = () => {
    const nextSectionIndex = Math.min(currentSectionIndex + 1, sectionRefs.length - 1);
    const nextSectionRef = sectionRefs[nextSectionIndex];
    const nextSectionElement = nextSectionRef.current;
    if (nextSectionElement) {
        animateScroll.scrollTo(nextSectionElement.offsetTop);
        setCurrentSectionIndex(nextSectionIndex);
      }
    };
  
    return (
        <main>
            <div>
            <nav>
        <ul>
            <li>
            <Link to="section1" smooth={true}>
                Section 1
            </Link>
            </li>
            <li>
            <Link to="section2" smooth={true}>
                Section 2
            </Link>
            </li>
        </ul>
    </nav>
    <Element name="section1" className="section" ref={sectionRefs[0]}>
        <h2>Section 1</h2>
        <p>Section 1 content</p>
    </Element>
    <Element name="section2" className="section" ref={sectionRefs[1]}>
        <h2>Section 2</h2>
        <p>Section 2 content</p>
    </Element>
    <Element name="section3" className="section" ref={sectionRefs[2]}>
        <h2>Section 3</h2>
        <p>Section 3 content</p>
    </Element>
    <button onClick={handleScroll}>Scroll</button>
            </div>
            <section>
                <BlogArea blogs={blogs} tags={tags} />
            </section>
        </main>
    )
}


export default Home