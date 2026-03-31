import { CiInstagram } from "react-icons/ci";
import { FaFacebook, FaTwitter } from "react-icons/fa6";

const FooterButton = () => {
  return (
    <div>
      <footer className="footer grid grid-cols-5 sm:footer-horizontal bg-[#101727] text-white p-10">
        <aside>
          <p>
            DigiTools
          </p>
          <p>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
        </aside>
        <nav>
          <h6 className="footer-title">Product</h6>
          <a className="link link-hover">Features</a>
          <a className="link link-hover">Pricing</a>
          <a className="link link-hover">Templates</a>
          <a className="link link-hover">Integrations</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About</a>
          <a className="link link-hover">Blog</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Press</a>
        </nav>
        <nav>
          <h6 className="footer-title">Resources</h6>
          <a className="link link-hover">Documentation</a>
          <a className="link link-hover">Help Center</a>
          <a className="link link-hover">Community</a>
          <a className="link link-hover">Contact</a>
        </nav>

        <nav>
          <h6 className="footer-title">Social Links</h6>
          <div className="flex gap-5">
            <CiInstagram  className="w-9 h-9 p-1 bg-base-100 text-black rounded-full"/>
            <FaFacebook className="w-9 h-9 p-1 bg-base-100 text-black rounded-full"/>
            <FaTwitter className="w-9 h-9 p-1 bg-base-100 text-black rounded-full"/>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default FooterButton;