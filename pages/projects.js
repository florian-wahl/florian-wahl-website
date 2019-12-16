import Layout from '../components/layout'

const Projects = () => {
  return (
    <div>
      <Layout title= "Projects">
        <div>
          <h1 className="title">My Projects</h1>
          <p>Additional projects (outside of corporate working experience) supporting my experience:</p>
          <ul>
            <li>This website</li>
            <li><b>Archived</b>: HubRoad</li>
            <li><b>Archived</b>: COM 525 in Jekyll</li>
          </ul>

          <p>Writing experience:</p>
          <ul>
            <li><a href="https://medium.com/@flwahl/moving-toward-a-cashless-world-what-investments-to-consider-9769e2ecec10"><i>Moving Toward a Cashless World — What Investments to Consider?</i></a> posted on Medium</li>
          </ul>
        </div>

        <style jsx>{`
        
        `}
        </style>
      </Layout>

    </div>
  )
}

export default Projects
