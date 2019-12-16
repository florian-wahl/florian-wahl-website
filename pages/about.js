import React, { useEffect, useState } from 'react'
import Head from '../components/head'
import Nav from '../components/nav'
import Layout from '../components/layout'

const About = () => {
  return (
    <div>
      <Head title="About" />
      <Layout>

        <div>
          <h1>About Me</h1>
          <p> Coming soon... </p>
        </div>

        <style jsx>{`
        div {
          padding: 25px;
        }
        `}
        </style>
      </Layout>

    </div>
  )
}

export default About
