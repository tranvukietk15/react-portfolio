import { Fragment } from "react";
import { Row, Col } from "react-bootstrap";

function PetProjects() {
  const data = [
    {
      time: "Jul 2024- Present",
      name: "Next CRM",
      detail: `I developed and managed multiple in-house applications, including a cryptocurrency trading management system, data analysis tools, and AI models like ChatGPT. These applications include AI-powered chat systems for generating images and chart analysis, offering a comprehensive suite for data-driven decisions and automation in cryptocurrency trading.`,
      technologies: `NextJS v14, NextAuth v4, ReactJS, Tailwind css, Social Login (Google, Github), Chat GPT model-4o, MongoDb, Redis cache, Memory cache, Github Action deploy to Azure WebApp.`,
      className: "project border-bottom",
      // link: "https://sumo-america-trading.com/",
      // shortLink: "developing ...",
      first: true,
    },
    {
      time: "Jul 2024- Present",
      name: "Trakle",
      detail: `Background job call data Binance to Analyze and calculate EMA, RSI, auto trade.`,
      technologies: `NestJS, Task schedule, MongoDb.`,
      className: "project border-bottom",
	  //   link: "https://sumo-america-trading.com/",
      // shortLink: "developing ...",
      // first: true,
    },
    {
      time: "Dec 2022- Feb 2023",
      name: "SumoTour",
      detail: `Project to book tours in Japan, manage users, and send emails when tours become available.
			I used Nestjs build Backend and ReactJS build Front-end, use mongoDb license free, use mailgun to send email
			to user, deploy to contabo VPS with docker and use nginx to reverse proxy, use Cloudflare to map DNS and
			https vertificate.`,
      technologies: `NestJS, MongoDb, ReactJS.`,
      link: "https://sumo-america-trading.com/",
      shortLink: "https://sumo-america-trading.com",
    },
  ];

  return (
    <Fragment>
      {data.map((d, index) => (
        <Row key={`project_${d.name}_${index}`}>
          <Col lg={3} xs={12}>
            {/* <Row>
              <Col xs={12} className="bold">
                {d.time}
              </Col>
            </Row> */}
            <Row>
              {/* <Col xs={4}>Name</Col> */}
              <Col className="bold">{d.time}</Col>
            </Row>
            <Row>
              <Col xs={4}>Project</Col>
              <Col className="bold">{d.name}</Col>
            </Row>
          </Col>
          <Col className={d.className}>
            <Row>
              {d.link ? (
                <>
                  <div className="bold">
                    Link: <a href={d.link}>{d.shortLink}</a>
                  </div>
                </>
              ) : (
                <></>
              )}
              <div className="bold">DESCRIPTION</div>
              <div>{d.detail}</div>
              <div className="details bold">TECHNOLOGIES</div>
              <div>{d.technologies}</div>
            </Row>
          </Col>
        </Row>
      ))}
    </Fragment>
  );
}

export default PetProjects;
