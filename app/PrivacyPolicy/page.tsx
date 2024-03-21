import "../style.css";
import Link from "next/link";

const PrivacyPolicy = () => {
  return (
    <>
    <header className="flex justify-between items-center p-4 bg-gray-800 dark:bg-gray-900">
          <img
            src="https://www.reshot.com/preview-assets/icons/KGBY5R3WQ4/home-rent-KGBY5R3WQ4.svg"
            alt="Your Image Alt Text"
            className=""
          />
          <h3 className="text-xl font-semibold text-white">Leta House Rent</h3>
          <div className="space-x-4">
            <Link href="/login/" className="text-sm text-white">
              Login
            </Link>
            <Link href="/register/" className="text-sm text-white">
              Register
            </Link>
          </div>
        </header>
        <hr />
    <div id="po">
    <div className="poi">
        <h1>Privacy Policy</h1>
    <p>Last updated: 24 Mar 2023</p>
    <p>By opting to use our Service, you acknowledge and consent to the collection and utilization of information in accordance with this policy. The Personal Information obtained through this process is intended solely for the purpose of providing and enhancing the Service. As stated in this Privacy Policy, we will not utilize or disclose your information to any third party unless otherwise specified.</p>
    <p>For the sake of clarity, the terminology employed in this Privacy Policy holds the same definitions as those outlined in our Terms and Conditions, which can be found at  https://steyp.com/, except in cases where stated otherwise within this Privacy Policy.</p>
    </div>
    <h3>I. Information Collection and Use</h3>
    <p>To provide an improved user experience with our Service, it may be necessary for us to request that you provide us with specific personally identifiable information, such as your name, phone number, and postal address. This information is collected with the sole purpose of contacting and identifying you.</p>
    <h3>II. Cookies</h3>
    <p>Cookies are small files that typically serve as anonymous and unique identifiers, which are sent to your browser from the website you are visiting, and subsequently stored on your computer's hard drive.
Our website utilizes these "cookies" to gather information and enhance the quality of our Service. You have the option to accept or decline the use of these cookies, and can choose to be alerted whenever a cookie is being sent to your computer. Refusing to accept our cookies may restrict your ability to access certain aspects of our Service.
For further details regarding cookies, please refer to the  "What Are Cookies" section.</p>\

    </div>
    <footer className="footer">
  <div className="container">
    <div className="grid grid-cols-2">
      <div>
        <h3>Hleta Private Limited</h3>
        <p className="address">#208, 2nd Floor,<br /> HiLITE Platino,<br /> Shankar Nagar Road, Maradu,<br /> Kakkanad,<br /> Kerala, India - 682304</p>
      </div>
      <div className="footer-links">
        <h3>Company</h3>
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Places</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <div className="grid grid-cols-1">
        <h3>Contact</h3>
        <p className="contact-info">
          <a href="tel:+918281176376">+91 828 1176 376</a> | <a href="mailto:hello@steyp.com">anusajesh5@gmail.com</a>
        </p>
      </div>
    </div>
    <div className="text-center">
      
      <p className="terms">
        <p className="copyright">© 2024, Hleta Private Limited. All rights reserved</p>
        <a href="#">Terms of Service</a>  | <a href="/PrivacyPolicy">Privacy Policy</a>
        </p>
    </div>
  </div>
</footer>
    </>
  )
}
export default PrivacyPolicy