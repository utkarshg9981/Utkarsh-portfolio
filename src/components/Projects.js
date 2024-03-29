import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import project_1 from "../assets/img/project-1.png";
import project_2 from "../assets/img/project-2.png";
import project_3 from "../assets/img/project-3.png";
import amazon from "../assets/img/project-4.png";
import mediGuide from "../assets/img/project-5.png";
import helphive from "../assets/img/project-6.png";
import TakshShila from "../assets/img/project-7.png";
import covid from "../assets/img/project-8.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projectsTab1 = [
    {
      title:  " TakshShila" ,
     
      description: "In this project , i am using Figma to create UI/UX. Then I code it by using Html & Tailwind Css. It is my first project of tailwind css.",
      
      imgUrl: project_1,
      imgLink: <a href="https://utkarsh6263.github.io/takshashila/" target="_blank"> Click For Demo
      </a>,
      
      
    },
    {
      title: "Calculator",
      description: "This is my first Js project. I have made a calculator",
      imgUrl: project_2,
      imgLink: <a href="https://utkarsh6263.github.io/Parikalan/" target="_blank"> Click For Demo
      </a>,
      
    },
    {
      title:  "Amazon-Clone" ,
     
      description: "In this project ,I am clone amazon website using Html CSS",
      
      imgUrl: amazon,
      imgLink: <a href="https://utkarsh6263.github.io/amazon-clone/" target="_blank"> Click For Demo
      </a>,
      
      
    },
  ];
  const projectsTab2 = [
    {
      title:  "TakshShila" ,
     
      description: "This is the UI/UX part of my project i made it using figma",
      
      imgUrl: TakshShila,
      imgLink: <a href="https://www.figma.com/proto/LhmNfmJ8IVYwThnE4m2eqX/Takshashila?node-id=2-2&scaling=scale-down-width" target="_blank"> Click For Demo
      </a>,
      
      
    },
    {
      title: "Covid",
      description: "This is my first Designing project. I have made a covid awareness WebSite",
      imgUrl: covid,
      imgLink: <a href="https://www.figma.com/proto/XY6q9ykLEMB7E0dH2sO93q/covid?node-id=1-4&hide-ui=1&t=AzXvnaWcwEGRgFLJ-8" target="_blank"> Click For Demo
      </a>,
      
    },
    {
      title: "Devoic-Funnel Page",
      description: "Design & Development",
      imgUrl: project_3,
      imgLink: <a href="https://utkarsh6263.github.io/DEVOIC-FUNNEL-PAGE/" target="_blank"> Click For Demo
      </a>,
    },
  ];
  const projectsTab3 = [
    {
      title:  "MediGuide" ,
     
      description: "My team members are shreyash & vedansh. We made this project during hackhive Hackathone .In this project , We are using many cutting-edge technologies.",
      
      imgUrl: mediGuide,
      imgLink: <a href="https://mediguide-indol.vercel.app/" target="_blank"> Click For Demo
      </a>,
      
      
    },
    {
      title: "Devoic-Funnel Page",
      description: "My team members are Mahima & Pranesh . We made this project for Devoic .In this project , We are using Html & CSS.",
      imgUrl: project_3,
      imgLink: <a href="https://utkarsh6263.github.io/DEVOIC-FUNNEL-PAGE/" target="_blank"> Click For Demo
      </a>,
    },
    {
      title: "HelpHive",
      description: "My team members are Ritika, Raksha, rupali,Shruti,Anya. My mentor during this project is Harsh Shukla sir . We made this project in Asper .In this project , We are using Html & CSS.",
      imgUrl: helphive,
      imgLink: <a href="https://utkarsh6263.github.io/HelpHive/" target="_blank"> Click For Demo
      </a>,
      
    },
    
  ];

 

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                    <p>Web Development Related Projects</p>
                      <Row>
                        {
                          projectsTab1.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Design Related Projects</p>
                      <Row>
                        {
                          projectsTab2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Team Projects</p>
                      <Row>
                        {
                          projectsTab3.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
