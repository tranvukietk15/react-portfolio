import { Fragment } from "react";
import { Row, Col } from "react-bootstrap";

function Projects() {
	const data = [
		{
			time: "Jun 2023 - Present",
			name: "WellBarrier",
			company: "Restaff",
			teamSize: 30,
			position: "Senior fullstack developer",
			detail: `WELLBARRIER is a web-based project
			for drawing wells and barriers. It allows
			users to drag and drop icons to create a
			well and move the elements on the well to
			match reality. WELLBARRIER, drawings had to be done
			by hand or scattered across multiple tools.
			Engineers had to spend a lot of time drawing
			and were often inaccurate across versions.
			WELLBARRIER helps engineers save
			time, improve the accuracy of drawings, and
			ensure safety with barrier, monitoring, and
			qualification systems. Most oil wells in the
			world currently use WELLBARRIER.`,
			technologies: `.Net 6, Multi Tenant, javascript, ReactJS, Redux,
			d3js, MSSQL, Redis.`,
			contributed: [
				`Init project Unit Test with xUnit.`,
				`Import user with excel.`,
				`Use d3js draw component and barrier.`,
				`Demo feature with foreign clients (Norway, India, China).`,
				`Refactor appsettings.`,
				`Fix bugs.`,
				`Review code prevent bug early.`,
			],
			first: true,
		},
		{
			time: "Apr 2022 - Jun 2023",
			name: "Wallet",
			company: "Extracy",
			teamSize: 6,
			position: "Leader backend",
			detail: `Build Duende Identity to provide social login and OAuth2
			login with hybrid flow. Build microservices with .NET Core and
			NestJS. Import folders from Trust Wallet and filter and
			insert data. Use Web3 to read data from RPC and push
			notifications using Firebase. Build and host RabbitMQ to sync
			user data. Research and learn about smart contracts.
			Implement CI/CD using Jenkins, Docker, and Nginx. Use
			CentOS and VPS Contabo to host the project. Train new team
			members and assign tasks to them.`,
			technologies: `.Net 7, Duende Identity, OAuth2, Nestjs, SQL, MongoDb,
			ReactJS, Web3, RabbitMQ, Firebase, Docker, nginx, jenkins`,
			contributed: [
				`Init project and apply clean architecture.`,
				`Get data from CoinGecko, TrustWallet and store to data warehouse.`,
				`Implement social login with Duende Identity OAuth2 standard.`,
				`Versioning API`,
				`Implement 2-Factor Authentication.`,
				`Install and configs Nexus Sonatype store docker hub.`,
				`Deploy projects with docker.`,
				`Install and configs Jenkins for CI/CD.`,
				`Config Azure pipe-line and Azure webhook with Jenkins.`,
				`Config Azure permission.`,
				`Proxy with nginx.`,
				`Map DNS domain, config networks.`,
				`Config MongoDb cluster and config MSSQL server.`,
				`Discuss with BA to create tasks and assign to member.`,
				`Mentor member.`,
			],
		},
		{
			time: "Apr 2022 - Feb 2023",
			name: "Massion",
			company: "Extracy",
			teamSize: 6,
			position: "Leader backend",
			detail: `Build project structure using NestJS and MongoDB, design
			the database, discuss features with PM, assign tasks to
			team members, design authentication and authorization with
			social login options including Apple, Google, Facebook, and
			Twitter using OAuth2 PKCE flow, handle PDF certificate
			generation, design APIs for the mobile team, train new team
			members, set up keys and templates Mailgun for email, and
			create a cron job worker to send emails every day at 1
			AM,
			Build CI/CD with jenkins, docker and nginx, use Cloudflare to
			map DNS domain. manage VPS centos for dev env, and
			ubuntu for prod env.`,
			technologies: `Nodejs Nestjs framework, MongoDb, ReactJS, PDF lib, passport, Mailgun,
			Docker, nginx, jenkins`,
			contributed: [
				`Init project and apply clean architecture.`,
				`Export PDF and embedded font, create PDF certificate.`,
				`Versioning API`,
				`Install and configs Nexus Sonatype store docker hub.`,
				`Deploy projects with docker.`,
				`Install and configs Jenkins for CI/CD.`,
				`Config Azure pipe-line and Azure webhook with Jenkins.`,
				`Proxy with nginx.`,
				`Map DNS domain, config networks.`,
				`Deploy single page to S3.`,
				`Config MongoDb.`,
				`Mentor member.`,
			],
		},
		{
			time: "Feb 2022 - Apr 2022",
			name: "OBL Hub",
			company: "Extracy",
			teamSize: 12,
			position: "Leader backend",
			detail: `The main focus of backend coding is building the structure,
			coding APIs, and communicating with PM and B
			A to design
			the database. Setup S3 bucket. Implementing API
			authentication and authorization, custom JWT to adapt to
			the business, managing the team, and assigning tasks to
			team members, build core ReactJS, create docker and
			deploy web to VPS centos 7, setup nginx and jenkins.`,
			technologies: `.Net 6, SQL, ReactJS, S3, Onion Architeture, Docker, nginx,
			jenkins.`,
			contributed: [
				`Init project and apply clean architecture.`,
				`Implement authorization and authentication grant type hydrid.`,
				`Install and configs Nexus Sonatype store docker hub.`,
				`Install and configs Jenkins for CI/CD.`,
				`Config Azure pipe-line and Azure webhook with Jenkins.`,
				`Proxy with nginx.`,
				`Map DNS domain, config networks.`,
				`Deploy single page to S3.`,
				`Config MSSQL server.`,
				`Discuss with BA to create tasks and assign to member.`,
				`Mentor member.`,
			],
		},
		{
			time: "Dec 2021 - Feb 2022",
			name: "FVC",
			company: "Extracy",
			teamSize: 4,
			position: "Backend developer",
			detail: `FVC is a web application for callers and investors. Callers can post their projects, and investors can review and provide capital. FVC's task is to manage the list of potential projects and schedule meetings for the two sides to meet.`,
			technologies: `EF core 2.1, SQL, store procedure, AWS S3, EC2, OneSignal.`,
			contributed: [
				`Maintain old project.`,
				`Implement feature worker.`,
				`Implement feature push notification to mobile use OneSignal.`,
				`Fix bug store procedure.`,
			],
		},
		{
			time: "Jul 2021 - Dec 2021",
			name: "Swap",
			company: "Nashtech",
			teamSize: 50,
			position: "Software engineer",
			detail: `Swap is a cross-border payment platform for businesses and everyday people who seek to make payments overseas while reducingFX costs and complexity. We offer the most competitive rates throughour proprietary online transaction portal and a wide network of FXPartners to enable our users to fulfil global payments at the lowest costefficiently.In addition to Swap’s online transaction portal, cross-borderpayments provided by Swap are also available on the NetworkedTrade Platform (“NTP”) Value Added Service (“VAS”) provider listing.As an NTP VAS provider, Swap is part of the vibrant tradeecosystem that is the NTP – a Singapore Government initiative. Weoffer a cost-effective and convenient solution to importers and exporters seeking to make or collect payments internationally.`,
			technologies: `Net Core 5, Microservice, SQL, Azure Devops, Azure Service bus, Mailgun, K8s, DDD, TDD, Onion Architecture, SignalR, XUnit, Moq, Proxy, Automapper, design pattern: CQRS, repository, proxy.`,
			contributed: [
				`Write Unit Test.`,
				`Implement project notification.`,
				`Implement SignalR.`,
				`Implement feature related to transaction and touch core project.`,
				`Fix bugs production with trade log in Application Insights.`,
				`Discuss with BA Singaporean to get requirement.`,
			],
		},
		{
			time: "Dec 2019 - Jul 2021",
			name: "US_Kaplan eLearning",
			company: "Nashtech",
			teamSize: 28,
			position: "Software engineer",
			detail: `Implement main feature is a Calculation Service to calculate
			the point for the Leaner, write unit tests for the code, call get
			data from GraphQL service, ensure that data works
			correctly, implement the design system from the team
			leader, improve UI performance, and report tasks to the
			team leader and PM.`,
			technologies: `EF core 3.1, GraphQL, microservice, ReactJS, AWS services,
			S3, SNS, SQS, MySQL, Table per hierarchy, SSO, Identity
			Server 4, OAuth2, Redis cache, Memcached, design pattern:
			Singleton, Factory, CQRS, Builder, Mediator.`,
			contributed: [
				`Write Unit Test.`,
				`Implement task.`,
				`Implement new API with GraphQL.`,
				`Involve build table table per hierarchy and calculate point.`,
				`Fix bugs.`,
			],
		},
		{
			time: "May 2019 - Dec 2019",
			name: "Milano-Coffee",
			company: "Futurify",
			teamSize: 8,
			position: "Fullstack developer",
			detail: `Manage warehouse and sales, order drinks.`,
			technologies: `EF core 2.0, Angular 7, SQL, microservice, API gateway.`,
			contributed: [
				`Implement API.`,
				`Implement Role and Permission.`,
				`Implement Paging.`,
				`Fix bugs.`,
			],
		},
		{
			time: "Apr 2019 - May 2019",
			name: "VietCredit",
			company: "Futurify",
			teamSize: 4,
			position: "Fullstack developer",
			detail: `Create a form for borrowers to register for loans.`,
			technologies: `DotNet core 2.0, Angular js, SOAP, SQL.`,
			contributed: [
				`Create form with angularjs allow user register for loans.`,
				`Validate form.`,
			],
		},
		{
			time: "Aug 2018 - Apr 2019",
			name: "RVezy",
			company: "Futurify",
			teamSize: 4,
			position: "Fullstack developer",
			detail: `RVezy is an RV rental platform where you can book unique RV experiences with local motorhome and trailer owners. You can drive, tow, or get your RV delivered and set up practically anywhere across the U.S. and Canada.`,
			technologies: `EF core 2.1, Angular js, SQL, RabbitMQ, ElasticSearch, Fluent
			API.`,
			contributed: [`Create API.`, `Maintain.`, `Fix bugs.`],
		},
	];

	return (
		<Fragment>
			{data.map((d, index) => (
				<Row key={`project_${d.name}_${index}`}>
					<Col md={3} className={d["first"] ? "" : "project-intro"}>
						<Row>
							<Col md={4}>Time</Col>
							<Col>{d.time}</Col>
						</Row>
						<Row>
							<Col md={4}>Name</Col>
							<Col className="bold">{d.name}</Col>
						</Row>
						<Row>
							<Col md={4}>Company</Col>
							<Col className="bold">{d.company}</Col>
						</Row>
						<Row>
							<Col md={4}>Team size</Col>
							<Col>{d.teamSize}</Col>
						</Row>
						<Row>
							<Col md={4}>Position</Col>
							<Col className="bold">{d.position}</Col>
						</Row>
					</Col>
					<Col className={d["first"] ? "" : "project"}>
						<Row>
							<div>{d.detail}</div>
							<div className="details bold">TECHNOLOGIES</div>
							<div>{d.technologies}</div>
							<div className="details bold">CONTRIBUTED</div>
							<div>
								<ul>
									{d.contributed.map((contribute, index) => (
										<li
											key={`contribute_${d.name}_${index}`}
										>
											{contribute}
										</li>
									))}
								</ul>
							</div>
						</Row>
					</Col>
				</Row>
			))}
		</Fragment>
	);
}

export default Projects;
