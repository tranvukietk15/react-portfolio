import "./App.css";
import "./resume/resume.css";
import avatar from "./resume/avatar.jpg";
import Header from "./resume/header";
import About from "./resume/about";
import Skills from "./resume/skills";
import Projects from "./resume/projects";
import { MdEmail } from "react-icons/md";
import { FaBirthdayCake, FaPhoneAlt } from "react-icons/fa";

function App() {
	return (
		<div className="App">
			<div className="container">
				<div className="Avatar">
					{/* <div className="avt" /> */}
					<img src={avatar} alt="Kiet Tran" className="avt" />
					<div className="info">
						<div>
							<MdEmail />
						</div>
						<div>kiettranv@gmail.com</div>
						<div>
							<FaBirthdayCake />
						</div>
						<div>Nov 1996</div>
						<div>
							<FaPhoneAlt />
						</div>
						<div>+84 949845485</div>
						<div>
							<MdEmail />
						</div>
						<div>District 1, Ho Chi Minh City, VietNam</div>
					</div>
				</div>
				<div className="About">
					<div>Trần Vũ Kiệt</div>
					<div>Fullstack Developer</div>
					<div>
						Highly experienced full-stack developer with over 5
						years of experience building and maintaining web
						applications using .NET Core and ReactJS. Proven ability
						to design, develop, and implement high-performance,
						scalable, and maintainable web applications. Expertise
						in all aspects of the full-stack development process,
						including front-end development, back-end development,
						and DevOps. Strong understanding of .NET Core, ReactJS,
						JavaScript, and related web technologies. Experience
						with RESTful APIs, microservices architecture, and cloud
						platforms such as AWS or Azure. Excellent
						problem-solving and analytical skills. Ability to work
						independently and as part of a team. Strong
						communication skills and hard working.
					</div>
				</div>
				<div className="Skills">
					<div className="title" />
				</div>
				<div className="Projects">
					<div className="project-title" />
					<div className="project-info" />
					<div className="project-desciption" />
				</div>
				<div className="Education" />
				<div className="Favorite" />
				<div className="Work-experience">
					<div className="work-title" />
					<div className="work-info" />
					<div className="work-description" />
				</div>
			</div>
			{/* <Header />
			<About />
			<Skills />
			<Projects /> */}
		</div>
	);
}

export default App;
