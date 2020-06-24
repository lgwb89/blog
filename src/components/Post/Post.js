// @flow strict
import React from "react"
import { withPrefix, Link } from "gatsby"
import Author from "./Author"
import Comments from "./Comments"
import Content from "./Content"
import Meta from "./Meta"
import Tags from "./Tags"
import Newsletter from "../Sidebar/Newsletter"
import styles from "./Post.module.scss"
import { useSiteMetadata } from "../../hooks"
import type { Node } from "../../types"

type Props = {
  post: Node,
}

const Post = ({ post }: Props) => {
  const { html } = post
  const { tagSlugs, slug, categorySlug } = post.fields
  const { tags, title, date, category } = post.frontmatter
  const { author } = useSiteMetadata()

  return (
    <div className={styles["post"]}>
      <Link className={styles["post__home-button"]} to="/">
        <img
          src={withPrefix(author.photo)}
          className={styles["author__photo"]}
          width="25"
          height="25"
          alt={author.name}
        />
        Screen & Times
      </Link>

      <div className={styles["post__content"]}>
        <Content
          body={html}
          title={title}
          category={category}
          categorySlug={categorySlug}
        />
      </div>

      <div className={styles["post__footer"]}>
        <Meta date={date} />
        {tags && tagSlugs && <Tags tags={tags} tagSlugs={tagSlugs} />}
        <Newsletter></Newsletter>
      </div>

      <div className={styles["post__comments"]}>
        <Comments postSlug={slug} postTitle={post.frontmatter.title} />
      </div>
    </div>
  )
}

export default Post
