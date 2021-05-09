import React from "react"
import * as styles from "./404.module.scss"

const PageError = () => {
  return (
    <div className={styles.errorMsg}>Oops something went wrong <span role="img" aria-label="poop-emoji">💩</span></div>
  )
}

export default PageError