// @flow strict
import React from "react"
import { Link } from "gatsby"
import styles from "./Content.module.scss"

type Props = {
  body: string,
  title: string,
  category: string,
}

const Content = ({ body, title, category, categorySlug }: Props) => (
  <div className={styles["content"]}>
    <span className={styles["content__category-span"]}>
      <Link to={categorySlug} className={styles["content__category-link"]}>
        {category}
      </Link>
    </span>
    <h1 className={styles["content__title"]}>{title}</h1>
    <div
      className={styles["content__body"]}
      dangerouslySetInnerHTML={{ __html: body }}
    />
  </div>
)

export default Content
