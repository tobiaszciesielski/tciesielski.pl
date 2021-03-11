import React from 'react'
import { Link } from "gatsby"

const NotFoundPage = () => {
  return <main>
    <h2>Page not found</h2>
    <Link to="/">
      <p>Go back</p>
    </Link>
  </main>

}

export default NotFoundPage
