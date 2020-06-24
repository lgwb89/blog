// @flow strict
import React from "react"
import { Link } from "gatsby"
import styles from "./Newsletter.module.scss"

type Props = {
  menu: {
    label: string,
    path: string,
  }[],
}

class Newsletter extends React.Component {
  state = {
    submitted: false,
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      submitted: true,
    })
  }

  render() {
    return (
      <div className={styles["newsletter"]}>
        <h4 className={styles["newsletter__title"]}>
          {!this.state.submitted
            ? "Get new articles sent to you"
            : "Thanks for subscribing"}
        </h4>
        <form
          method="post"
          netlify-honeypot="bot-field"
          data-netlify="true"
          name="newsletter"
          onSubmit={this.handleSubmit}
        >
          <input
            type="email"
            name="newsletter"
            id="email"
            className={styles["newsletter__form-input"]}
            placeholder="Your email"
          />
          <input type="hidden" name="bot-field" />
          <button type="submit" className={styles["newsletter__form-button"]}>
            {!this.state.submitted ? "Subscribe" : "✔️"}
          </button>
        </form>
      </div>
    )
  }
}

export default Newsletter
