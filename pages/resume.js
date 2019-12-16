import Layout from '../components/layout'

const Resume = () => {
    return (
        <div>
            <Layout title="Resume">
                <div>
                    <h1 className="title">My Resume</h1>
                    <img alt="Florian Wahl" class="y dk dz ea" src="https://miro.medium.com/fit/c/128/128/1*Q47mquwgGs7tMaDG13SSRQ.jpeg" width="128" height="128"></img>
                    <div>
                        <h2>Executive Summary</h2>
                        <p>
                            As a Senior Consultant of Capgemini North American Transformation &amp; Architecture Practice, I am experienced in business transformation analysis and problem solving, working with international teams.<br /><br />I am highly interested in new technologies and innovations and how they can be successfully implemented in the context of a business transformation. As part of Capgemini, I have acquired a broad knowledge of emerging Financial Technologies, especially Blockchain/Distributed Ledger Tech and Open Banking/Open APIs. I have a diverse scope of experience from delivering technical implementation and innovation projects, working closely with the development team and the business stakeholders, to strategy and transformation engagements, working with senior banking and capital markets executives.<br /><br />With an education in Industrial Engineering and Supply Chain Management, I also have experience working on cross-functional projects involving different Lines of Business.
                        </p>
                    </div>
                    <div>
                        <h2>Work Experience</h2>
                        <h3>Capgemini</h3>
                        <h4>Senior Consultant - Banking & Capital Markets Transformation - Open Banking</h4><h5>New York, NY - 2019 to Today</h5>
                        <p>
                            Supporting top U.S. retail banks consortium in enabling open banking in the U.S. market as a PMO and Lead Business Analyst.
                        </p>
                    </div>

                </div>

                <style jsx>{`
                h2 {
                    color: #61a1a1;
                }
        `}
                </style>
            </Layout>

        </div>
    )
}

export default Resume
