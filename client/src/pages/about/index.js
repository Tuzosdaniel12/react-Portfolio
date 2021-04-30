import Columns from "../../components/Columns";
import Column from "../../components/Colunm";
import Icon from "../../components/Icon";
import Section from "../../components/Section";
import iconList from "./iconList"
import "./style.sass"

const About = () => {
     
    return (
		<Section
			cName={`pb-6 ${
				window.location.pathname === "/About" ? "fadeIn" : "fadeOut"
			}`}
			id="aboutme">
			<Columns columnsName="is-tablet about-me-div">
				<Column columnStyles="">
					<div className="is-flex is-justify-content-center">
						<img className alt="Me" src="./images/me.png" />
					</div>
				</Column>

				<Column columnStyles="is-two-thirds-desktop has-text-white has-text-centered-mobile is-flex is-flex-direction-column is-justify-content-center">
					<h1 className="is-size-4 has-text-danger">About Daniel</h1>
					<p className="is-size-5 pb-5">
						Hard working and honest Fullstack Developer, always
						eager to learn new skills. Uses analytical and problem
						solving skills to create user-friendly applications. If
						you have any questions don't hesitate to reach out
						at{" "}
						<span className="has-text-centered has-text-danger">
							danielsoledad@gmail.com,{" "}
						</span>
						or at any of the other contact methods listed below. Let's CODE!!!
					</p>

					<div className="has-text-centered has-text-danger">
						{iconList.map(({ icon, text }) => (
							<Icon icon={icon} text={text} />
						))}
					</div>
				</Column>
			</Columns>
		</Section>
	);
}

export default About   