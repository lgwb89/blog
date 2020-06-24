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

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

class Newsletter extends React.Component {
  state = {
    submitted: false,
  }

  handleSubmit = (event) => {
    const value = event.target.children[0].value
    console.log(value)

    if (value) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "newsletter",
          email: value,
        }),
      }).catch((error) => console.log("error"))
      event.target.children[0].value = ""
      this.setState({
        submitted: true,
      })
    }

    event.preventDefault()
  }

  render() {
    return (
      <div className={styles["newsletter"]}>
        <h4 className={styles["newsletter__title"]}>
          {!this.state.submitted
            ? "Get new articles sent to you"
            : "Thanks for subscribing"}
        </h4>
        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            name="email"
            id="email"
            className={styles["newsletter__form-input"]}
            placeholder="Your email"
          />
          <button type="submit" className={styles["newsletter__form-button"]}>
            {!this.state.submitted ? "Subscribe" : "✔️"}
          </button>
        </form>
      </div>
    )
  }
}

export default Newsletter
