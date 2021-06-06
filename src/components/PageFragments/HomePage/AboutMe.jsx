import React from "react";
import { Row, Col } from "antd";
import AboutTile from "../../AbouTile";
import { stripTags, domHtml } from "../../../utils/stripTags";

import SEO from "../../Seo";

const pageText = {
  paraOne: `👨‍💻&ensp; Hi! 👋 &nbsp;, I'm <b>Ahmed Komsan</b> an IOS Software engineer Doing mobile applications
  development for +4 years working with different languages like C, C++,
  Objective-C, Swift and Java. following MVVM, MVVM-C, MVC methods of
  organizing code. I’m truly passionate about my work and always eager
  to learn new skills, enthusiastically grabbing onto learning any other
  programming languages, frameworks or principles and develop new
  software , apps and products.`,
  paraTwo: `🎓&ensp; Obtained my bachelor's degree in Computer Science from the cairo University in
  Egypt ( Faculty of Computers and Information ) focusing on Software
  Engineering.`,
  paraThree: `✨&ensp; This blog mostly covers my programming experience venturing into the world of iOS and Swift and
  my small previous dealing with C/C++. You can also find some rants here, because I do not like when stuff breaks.`,
  paraFour: `🌃 &ensp; I think the turning point in my career goes back to my second year in college when I decided to join
  my colleagues in the programming competitions and focusing on the algorithms and competitive programming.`,
  paraFive: `🤾🏾&ensp; When i'm not working, i love Reading, Playing and Watching Football and blog about IOS Development.`,
};

const AboutMe = () => {
  const description = `${stripTags(pageText.paraOne)} ${stripTags(pageText.paraTwo)} ${stripTags(pageText.paraThree)} ${stripTags(pageText.paraFour)} ${stripTags(pageText.paraFive)}`;
  return (
    <>
      <div>
        <SEO
          title="About"
          description={description}
          path=""
          keywords={[
            "Rolwin",
            "Reevan",
            "Monteiro",
            "FullStack developer",
            "Javascript",
            "ReactJS",
            "NodeJS",
            "Gatsby",
          ]}
        />
        <h1 className="titleSeparate">About Me</h1>
        <p dangerouslySetInnerHTML={domHtml(pageText.paraOne)} />
        <p dangerouslySetInnerHTML={domHtml(pageText.paraTwo)} />
        <p dangerouslySetInnerHTML={domHtml(pageText.paraThree)} />
        <p dangerouslySetInnerHTML={domHtml(pageText.paraFour)} />
        <p dangerouslySetInnerHTML={domHtml(pageText.paraFive)} />
      </div>
      <Row gutter={[20, 20]}>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="location.png"
            height={60}
            alt="location image"
            textH4="Born and bought up in"
            textH3="Cairo, Egypt"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="coffee.png"
            alt="coffee image"
            textH4="Love Coffee"
            textH3="Coffee + Me = Happiness"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="graduation.png"
            alt="graduation image"
            textH4="Pursued B.Tech in"
            textH3="Computer Science"
            height={60}
            width={60}
          />
        </Col>
      </Row>
    </>
  );
};
export default AboutMe;
