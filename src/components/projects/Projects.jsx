import React from 'react'
import styles from './Projects.module.css'
import ProjectCard from "./ProjectCard"

import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Heading from '../utilityComponents/sectionHeading/Heading';

const Projects = () => {

    const remittanceContent = [
        {
            imagePath: '../../../public/images/kantipur.png',
            websiteURL: "https://vijaybansal2004.github.io/Kantipur-Rimit",
            title: 'Kantipur Remit',
            discription: 'Send money to Nepal with Kantipur Remit !',
        },
        {
            imagePath: '../../../public/images/clearPath.png',
            websiteURL: "https://vijaybansal2004.github.io/clearpath",
            title: 'ClearPath Remit',
            discription: 'Save up to 3x on international transfers across more than 50 currencies, with no hidden fees.',
        },
    ];

    const blockchainContent = [
        {
            imagePath: '../../../public/images/tronWolf.png',
            websiteURL: "https://vijaybansal2004.github.io/TronWolf",
            title: 'TronWolf',
            discription: 'DISCOVER YOUR INNER BEAST AND MAKE YOUR WOLFPACK HOWL!',
        },
        {
            imagePath: '../../../public/images/axiBloc.png',
            websiteURL: "https://axibloc.netlify.app",
            title: 'Axibloc',
            discription: 'Achieving enduring performance for mission-critical priorities',
        },
    ];

    const tradingContent = [
        {
            imagePath: '../../../public/images/equiX.png',
            websiteURL: "https://vijaybansal2004.github.io/EquiX",
            title: 'EquiX',
            discription: `Trade with the world's largest retail broker and enjoy superior market conditions.`,
        },
    ];

    const fantasyContent = [
        {
            imagePath: '../../../public/images/super11.png',
            websiteURL: "https://vijaybansal2004.github.io/Super11",
            title: 'Super11',
            discription: 'GETTING STARTED WITH SUPER11 IS A BREEZE!',
        },
        {
            imagePath: '../../../public/images/super11.png',
            websiteURL: "https://vijaybansal2004.github.io/Super11-scrolling",
            title: 'Super11-scrolling',
            discription: 'GETTING STARTED WITH SUPER11 IS A BREEZE!',
        },

    ];

    const allProjects = [...remittanceContent, ...blockchainContent, ...tradingContent, ...fantasyContent];

    return (
        <section id='projects' className={`${styles.projectSectionContainer}`}>
            <div className="container">
                <Heading heading="Projects" />
                <h1 className='text-center scrollReveal w-100 mb-5'>Highlighted Projects I’ve Led</h1>
                <Tab.Container id="left-tabs-example" defaultActiveKey="allProjects" className={`${styles.projectContainer}`}>
                    <Row className='gap-5 gap-sm-0'>
                        <Col sm={3} lg={2}>
                            <Nav variant="pills" className={`flex-column ${styles.projectNavContainer}`}>
                                <Nav.Item>
                                    <Nav.Link eventKey="allProjects" className={`${styles.primaryColor}`}>All Projects</Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link eventKey="remittance" className={`${styles.primaryColor}`}>Remittance</Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link eventKey="blockchain" className={`${styles.primaryColor}`}>Blockchain</Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link eventKey="trading" className={`${styles.primaryColor}`}>Trading</Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link eventKey="fantasy" className={`${styles.primaryColor}`}>Fantasy</Nav.Link>
                                </Nav.Item>
                                
                            </Nav>
                        </Col>
                        <Col sm={9} lg={10}>
                            <Tab.Content>
                                <Tab.Pane eventKey="allProjects">
                                    <div className={`${styles.projectCardContainer}`}>
                                        {
                                            allProjects.map((element) => (
                                                <ProjectCard content={element} />
                                            ))
                                        }
                                    </div>
                                </Tab.Pane>


                                <Tab.Pane eventKey="remittance">
                                    <div className={`${styles.projectCardContainer}`}>
                                        {
                                            remittanceContent.map((element) => (
                                                <ProjectCard content={element} />
                                            ))
                                        }
                                    </div>
                                </Tab.Pane>

                                <Tab.Pane eventKey="blockchain">
                                    <div className={`${styles.projectCardContainer}`}>
                                        {
                                            blockchainContent.map((element) => (
                                                <ProjectCard content={element} />
                                            ))
                                        }
                                    </div>
                                </Tab.Pane>

                                <Tab.Pane eventKey="trading">
                                    <div className={`${styles.projectCardContainer}`}>
                                        {
                                            tradingContent.map((element) => (
                                                <ProjectCard content={element} />
                                            ))
                                        }
                                    </div>
                                </Tab.Pane>

                                <Tab.Pane eventKey="fantasy">
                                    <div className={`${styles.projectCardContainer}`}>
                                        {
                                            fantasyContent.map((element) => (
                                                <ProjectCard content={element} />
                                            ))
                                        }
                                    </div>
                                </Tab.Pane>

                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        </section>

    )
}

export default Projects
