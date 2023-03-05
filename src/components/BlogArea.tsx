import React from 'react'
import Link from 'next/link'
import type { Blog, Tag } from '../types/blog'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import ReactHTMLParser from 'react-html-parser'
import styled from 'styled-components'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from 'react-slick'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import LocalOfferIcon from '@material-ui/icons/LocalOffer'

type Props = {
  blogs: Blog[]
  tags: Tag[]
}

const BlogArea = ({ blogs,tags }: Props) => {
  interface ArrowProps {
    onClick?: () => void;
  }

  const PrevArrow = (props:ArrowProps) => {
    const { onClick } = props;
    return (
      <div className="arrow arrow--left" onClick={onClick}>
        <AiOutlineLeft />
      </div>
    );
  };

  const NextArrow = (props:ArrowProps) => {
    const { onClick } = props;
    return (
      <div className="arrow arrow--right" onClick={onClick}>
        <AiOutlineRight />
      </div>
    );
  };

  const settings = {
    dots: true, // ドットナビゲーションの表示有無
    infinite: true, // スライドのループ有無
    speed: 500, // スライドのスピード
    slidesToShow: 4, // 一度に表示するスライド数
    slidesToScroll: 1, // 一度にスクロールするスライド数
    autoplay: true, // autoplayをするか
    autoplaySpeed: 3000, // autoplayの速度
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    centerMode: true
  }
console.log(blogs)
  return (
    <Slider {...settings}>
      {blogs.map((blog)=>(
        <SCard>
            <div key={blog.id}>
              <Link href={`/blog/${blog.id}`}>
                <CardMedia component="img" height="210" image={blog.image?.url} alt="ブログ画像" />
                <SCardContent>
                  <Typography gutterBottom variant="h5" component="h3">
                    {blog.title}
                  </Typography>
                  <SBlogHeadLine gutterBottom variant="h6">
                    {blog.headline}
                  </SBlogHeadLine>
                  <STagContents>
                    <STagIcon>
                      <LocalOfferIcon />
                    </STagIcon>
                    <STagArea>
                      {blog.tags.map((tag) => (
                        <STag>{tag.tag}</STag>
                      ))}
                    </STagArea>
                  </STagContents>
                  <SDateArea>
                    <p>{`投稿日 : ${blog.publishedAt.substr(0,4)}/${blog.publishedAt.substr(5,2)}/${blog.publishedAt.substr(8,2)}`}</p>
                    <p>{`更新日 : ${blog.revisedAt.substr(0,4)}/${blog.revisedAt.substr(5,2)}/${blog.revisedAt.substr(8,2)}`}</p>
                  </SDateArea>
                </SCardContent>
              </Link>
            </div>
        </SCard>
      ))}
    </Slider>
  )
}
const SCard = styled(Card)`
  max-width: 90%;
`
const SCardContent = styled(CardContent)`
  height: 16.5vw;
`
const SBlogHeadLine = styled(Typography)`
  color: #949593;
  height: 3vw;
  margin-bottom: 1em;
`
const STagContents = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: nowrap;
  margin-top: 2em;
  height: 4vw;
`
const STagIcon = styled.div`
  display: flex;
  align-items: flex-start;
  height: 4vw;
`
const STagArea = styled.div`
  display: flex;
  align-items: flex-start;
  height: 4vw;
  flex-wrap: wrap;
`
const STag = styled.p`
  background: rgba(0,0,0,0.1);
  padding: 0.2em 0.5em;
  border-radius: 6px;
  margin: 0 0.4em;
`
const SDateArea = styled.div`
  margin-top: 1em;
`
export default BlogArea