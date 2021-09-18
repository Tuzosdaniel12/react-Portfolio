import React from "react";

const About = ({ data }) => {
  if (data) {
    var name = data.name;
    var profilepic = "images/" + data.image;
    var bio = data.bio;
    var city = data.address.city;
    var state = data.address.state;
    var phone = data.phone;
    var email = data.email;
    var resumeDownload = data.resumedownload;
  }

if (data) {
	var networks = data.social.map(function (network) {
		if (network.name === "linkedin" || network.name === "github") {
			return (
				<span key={network.name}>
					<a href={network.url}>
						<i
							className={`${network.className} icons-contact`}></i>
					</a>
				</span>
			);
		}
	});
}

  return (
		<section id="about">
			<div className="row">
				<div className="three columns">
					<img
						className="profile-pic"
						src={profilepic}
						alt="Profile Pic"
					/>
				</div>
				<div className="nine columns main-col">
					<h2>About Me</h2>

					<p>{bio}</p>
					<div className="row">
						<div className="columns contact-details">
							<h2>Contact Details</h2>
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
								{networks}
							</p>
						</div>
						<div className="columns download">
							<p>
								<a href={resumeDownload} className="button">
									<i className="fa fa-download"></i>Download
									Resume
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
  );
};

export default About;
