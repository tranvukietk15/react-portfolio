function Projects() {
	const projects = [
		{
			id: 1,
			title: "Project 1 Title",
			description: "Project 1 description",
			technologies: ["React", "Node.js", "MongoDB"],
			link: "https://project1link.com",
		},
		// ... more projects
	];

	return (
		<section className="projects">
			<div className="container">
				<h2>Projects</h2>
				<ul className="project-list">
					{projects.map((project) => (
						<li key={project.id}>
							<h3>{project.title}</h3>
							<p>{project.description}</p>
							<ul className="technologies">
								{project.technologies.map((tech) => (
									<li key={tech}>{tech}</li>
								))}
							</ul>
							<a href={project.link}>View Project</a>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}

export default Projects;
