import React from 'react'

const Footer = () => {
  return (
      <>
      <footer className="text-white w-screen bg-black flex flex-col  gap-2 px-[230px] mx-auto py-[100px] ">
        <div className="py-[20px] text-left">Questions? Call 000-800-919-1694</div>
        <div className="flex felx-row gap-24 ">
          <div className="footer-item underline right-[-10px]">
            <a href="faq" className="block py-2">
              Investor Relations
            </a>
            <a href="faq" className="block py-2">
              Jobs
            </a>
            <a href="faq" className="block py-2">
              Ways to Watch
            </a>
            <a href="faq" className="block py-2">
              Terms of Use
            </a>
          </div>

          <div className="footer-item underline ">
            <a href="faq" className="block py-2">
              Help Centre
            </a>
            <a href="faq" className="block py-2">
              Account
            </a>
            <a href="faq" className="block py-2">
              Speed Test
            </a>
            <a href="faq" className="block py-2">
              Legal Notices
            </a>
          </div>

          <div className="footer-item underline">
            <a href="faq" className="block py-2">
              Media Centre
            </a>
            <a href="faq" className="block py-2">
              Privacy
            </a>
            <a href="faq" className="block py-2">
              Cookie Preferences
            </a>
            <a href="faq" className="block py-2">
              Corporate
            </a>
          </div>

          <div className="footer-item underline">
            <a href="faq" className="block py-2">
              Contact Us
            </a>
            <a href="faq" className="block py-2">
              Speed Test
            </a>
            <a href="faq" className="block py-2">
              Legal Notices
            </a>
            <a href="faq" className="block py-2">
              Only on Netflix
            </a>
          </div>
        </div>
      </footer>
      </>
  )
}

export default Footer
