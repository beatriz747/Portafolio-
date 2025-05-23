
function Footer() {
    return (
      <footer className="container-fluid p-0 pr-0">
        <div className="row mr-0 ml-0">
          <div className="col-md-6 pr-0 pl-0 map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13035.46901327725!2d-80.85396551628644!3d35.234674411422155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8856a03af474f38f%3A0xf8301daadf5f7670!2sFourth+Ward%2C+Charlotte%2C+NC%2C+USA!5e0!3m2!1sen!2sin!4v1551001218548" title="Map"  style={{border:0}} allowFullScreen></iframe>
          </div>
          <div className="col-md-6 content-us">
            <div className="contact-form" id="contact">
              <h3 className="text-uppercase">Contact me</h3>
              <input type="text" className="form-control" placeholder="Your Name" />
              <input type="text" className="form-control" placeholder="Your Email" />
              <textarea className="form-control" placeholder="Your Message"></textarea>
              <button type="submit">Send</button>
            </div>
          </div>
        </div>
        <div className="copy pt-4 pb-4">
          <p><a href="https://freehtml5.co/" target="_blank" rel="noreferrer"> &copy; 2019 Girly</a>  &nbsp;  |  &nbsp; Design by <a href="https://freehtml5.co/" target="_blank" rel="noreferrer">freehtml5.co</a> &nbsp; | &nbsp;  All rights reserved</p>
        </div>
      </footer>
    );
}

export default Footer;