import React, { useEffect, useState } from "react";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";
import "./css/default.css"
import "./css/layout.css";
import "./css/media-queries.css"
import "./css/magnific-popup.css";
import "./css/projects.css";

const App = () => {
  const [resumeData, setResumeData] = useState({});

  useEffect(() => {
    fetch("/resumeData.json")
      .then((res) => res.json())
      .then((data) => {
        setResumeData(data);
      });
  }, []);

  return (
		<div className="App">
			<Header data={resumeData.main} />
			<Portfolio data={resumeData.portfolio} />
			<About data={resumeData.main} />
			<Resume data={resumeData.resume} />
			<Contact data={resumeData.main} />
			<Footer data={resumeData.main} />
		</div>
  );
};

export default App;
