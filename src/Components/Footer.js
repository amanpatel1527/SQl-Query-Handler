import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
function Footer() {
  return (
<>

{/* <!-- Footer --> */}
<footer id="Footer" className="text-lg-start py-1 mt-5">
  
  <section className="">
    <div className="container text-center text-md-start mt-5">
      <div className="row mt-3">
        <div className="col-md-3 col-lg-4 col-xl-4 mx-auto mb-4">
      
          <h6 className="text-uppercase fw-bold mb-4">
            Get in Touch 
          </h6>
          <p>
            help@sqlQuery.in
          </p>
          <h5>
            +91 98752 XXXXX
          </h5>
          <div>
          <button type="button" className="btn btn-outline-info" ><i className="fa-brands fa-whatsapp me-2"></i> WhatsApp</button>
          <button type="button" className="btn btn-outline-info ms-2"><i className="fa-brands fa-rocketchat me-2"></i>Chat With Us</button>
          </div>
        </div>
        {/* <!-- Grid column --> */}

        {/* <!-- Grid column --> */}
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-2">

          <h6 className="text-uppercase fw-bold mb-2">
            Information
          </h6>
          <p>
            <a href="#!" className="text-reset">Refund Policy</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Privacy Policy</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Terms & Conditions</a>
          </p>
        </div>
        {/* <!-- Grid column --> */}

        {/* <!-- Grid column --> */}
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* <!-- Links --> */}
          <h6 className="text-uppercase fw-bold mb-4">
          </h6>
          <p>
            <a href="#!" className="text-reset">FAQs</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Pricing</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Business Group</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Blogs</a>
          </p>
        </div>
        {/* <!-- Grid column --> */}

        {/* <!-- Grid column --> */}
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          {/* <!-- Links --> */}
          <h6 className="text-uppercase fw-bold mb-4">
            Follow us
          </h6>
          <p className='px-2'>
            <a href='#'>
            <i className="fa-brands fa-youtube me-2 fa-2x text-danger"></i>
            </a>
            <a href='#'>
            <i className="fa-brands fa-facebook mx-2 fa-2x text-primary"></i>
            </a>
            <a href='#'>
            <i className="fa-brands fa-instagram mx-2 fa-2x text-danger"></i>
            </a>
            <a href='#'>
            <i className="fa-brands fa-twitter mx-2 fa-2x text-primary"></i>
            </a>
            <a href='#'>
              <i className="fa-brands fa-linkedin mx-2 fa-2x text-primary"></i>
              </a>
          </p>
          
        </div>
        {/* <!-- Grid column --> */}
      </div>
      {/* <!-- Grid row --> */}
    </div>
  </section>
  {/* <!-- Section: Links  --> */}

  {/* <!-- Copyright --> */}
  <div className="text-center p-4" style={{"backgroundColor": "rgba(0, 0, 0, 0.05)"}}>
    © 2022 Copyright :
    <a className="text-reset fw-bold" href="#">SQL_Query.com</a>
  </div>
  {/* <!-- Copyright --> */}
</footer>
{/* <!-- Footer --> */}
</>
  )
}

export default Footer;