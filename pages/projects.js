import React, { useEffect, useState } from 'react'
import Head from '../components/head'
import Nav from '../components/nav'
import Layout from '../components/layout'

const Projects = () => {
  return (
    <div>
      <Layout>
        <Head title="Projects" />
        <Nav />

        <div>
          <h1>Projects</h1>
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

export default Projects
