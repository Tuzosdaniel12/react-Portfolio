import React from "react";

const Portfolio = ({ data }) => {
  if (data) {
    var projects = data.projects.map(function (projects) {
      var projectImage = "images/portfolio/" + projects.image;
      return (
			<div key={projects.title} className="columns portfolio-item">
				<div className="item-wrap">
					<a href={projects.url} title={projects.title}>
						<img alt={projects.title} src={projectImage} />
						<div className="overlay">
							<div className="portfolio-item-meta">
								<h5>{projects.title}</h5>
								<p>{projects.category}</p>
							</div>
						</div>
					</a>
				</div>
				<div className="project-card">
					<a href={projects.git} title={projects.title}>
						Git Repo
					</a>
          <span>|</span>
					<a href={projects.url} title={projects.title}>
						Live Demo
					</a>
				</div>
			</div>
		);
    });
  }

  return (
		<section id="portfolio">
			<div className="row">
				<div className="twelve columns collapsed">
					<h1>
						Check Out Some of My Works.
					</h1>

					<div
						id="portfolio-wrapper"
						className="bgrid-quarters s-bgrid-thirds cf">
						{projects}
					</div>

					<h1>
						More of my work{" "}
						<a href="https://github.com/Tuzosdaniel12">Here</a>
					</h1>
				</div>
			</div>
		</section>
  );
};

export default Portfolio;
