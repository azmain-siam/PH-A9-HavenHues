import logo from "../assets/Logo.png";


const Footer = () => {
  return (
    <footer className="py-10 px-4 md:px-0 pb-0 text-base-content border-t">
      <div className="max-w-7xl w-[95%] md:w-[93%] mx-auto">
        <div className="footer">
          <aside className="flex items-center gap-1">
            <img src={logo} className="w-24" alt="" />
            <div>
              <h3 className="text-2xl font-bold mb-2">HavenHues Properties</h3>
              
              <p className="text-sm">Where Every Home Tells a Colorful Story</p>
            </div>
          </aside>

          <nav>
            <h6 className="footer-title text-lg text-black">Services</h6>
            <a className="link link-hover">Real Estate</a>
            <a className="link link-hover">Residential</a>
            <a className="link link-hover">Construction</a>
          </nav>
          <nav>
            <h6 className="footer-title text-lg text-black">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
          </nav>
          <nav>
            <h6 className="footer-title text-lg text-black">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </div>
        <hr className="my-5" />
        <aside className="footer-center pb-5 text-sm font-medium text-gray-600">
          <p>Copyright © 2024 | All right reserved by HavenHues Properties.</p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
