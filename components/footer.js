import Link from "next/link";

const Footer = () => (
    <div>
        <div>
            <ul>
                <li>&copy; Florian Wahl - 2019 - All Rights Reserved</li>
                <li>Created with Next.js and hosted on Zeit.co</li>
                <li><Link href="/about"><a>Learn More</a></Link></li>
            </ul>
        </div>
        <style jsx>{`
      div {
          margin: 10px;
        text-align: center;
        font-size: 9pt;
      }
      div > ul > li {
        list-style-type:none;
        padding: 2px 0;
      }
    `}</style>
    </div>
)

export default Footer;