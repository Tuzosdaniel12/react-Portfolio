import React from "react";

const Contact = ({ data }) => {

  if (data) {
    var name = data.name;
    var city = data.address.city;
    var state = data.address.state;
    var phone = data.phone;
    var resumeDownload = data.resumedownload;
    var email = data.email;
  }

    if (data) {
		var networks = data.social.map(function (network) {
			
        if (network.name === "linkedin" || network.name === "github") {
          return (
              <span key={network.name}>
                <a href={network.url}>
                  <i className={`${network.className} icons-contact`}></i>
                </a>
              </span>
            );
        }
		});
	}


  return (
		<section id="contact">
			<div className="row">
				<div className="columns contact-details">
					<h2 className="h2-color-white">Contact Details</h2>
					<p className="address">
						<span>{name}</span>
						<br />
						<span>
							{city}, {state}
						</span>
						<br />
						<span>
							<a href={`tel::${phone}`}>{phone}</a>
						</span>
						<br />
						<span>
							<a href={`mailto:${email}`}>{email}</a>
						</span>
						<br />
						{networks}
					</p>
				</div>
				<div className="columns download">
					<p>
						<a href={resumeDownload} className="button">
							<i className="fa fa-download"></i>Download Resume
						</a>
					</p>
				</div>
			</div>
		</section>
  );
};

export default Contact;
