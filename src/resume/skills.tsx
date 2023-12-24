function Skills() {
	const skills = [
		{
			name: "React",
			level: "90%",
		},
		// ... more skills
	];

	return (
		<section className="skills">
			<div className="container">
				<h2>Skills</h2>
				<ul className="skill-list">
					{skills.map((skill) => (
						<li key={skill.name}>
							<span>{skill.name}</span>
							<div
								className="progress-bar"
								style={{ width: `${skill.level}%` }}
							></div>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}

export default Skills;
