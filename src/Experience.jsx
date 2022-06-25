import {
  Divider,
  Image,
  HStack,
  Text,
  VStack,
  UnorderedList,
  ListItem,
  Box,
  Heading,
} from "@chakra-ui/react";
import swaarmlogo from "./Assets/Swaarm.png";
import storysurflogo from "./Assets/StorySurf.png";
import atteroLogo from "./Assets/Attero.png";
import React from "react";

const experiences = [
  {
    logo: swaarmlogo,
    jobTitle: "React Frontend Engineer",
    companyName: "Swaarm GMBH",
    location: "Berlin, Germany (remote)",
    timeFrame: "Jan 2022 - Present",
    companyInfo:
      "Swarm is an AdTech platform that manages adnetworks and their Advertisers, Publishers and Campaigns",
    responsibilities: [
      "Used Typescript, Ant Design, Final Forms, GraphQL Codegen, CSS Modules, to build new features into the product and modify existing ones.",
      "Worked with a lean team of highly experienced (8+ years) Software Engineers in a high paced startup environment.",
      "Conducted Internal UX research, to identify the most common user, problems and generate insights for new features.",
      "Created Specifications in tickets using Jira.",
    ],
  },
  {
    logo: storysurflogo,
    companyName: "Storysurf / Rakugo",
    jobTitle: "Flutter Frontend Engineer",
    location: "Mumbai, India (remote)",
    timeFrame: "July 2021 - December 2021",
    companyInfo:
      "Storysurf is an aesthetically pleasing app that hosts short snackable stories.",
    responsibilities: [
      "Used Flutter and Bloc State management to build and maintain various features of the product.",
      "Modified the core Story Feed of the app to inject items that are not stories based upon a hard-coded rate.",
      "Managed the backend using AWS.",
      "Oversaw multiple database migrations.",
      "Co-ordinated with the backend engineer to develop new features.",
    ],
  },
  {
    logo: atteroLogo,
    companyName: "AtteroLabs",
    jobTitle: "SparkAR Javascript Dev / Animator / Designer",
    location: "Mumbai, India",
    timeFrame: "March 2018 - October 2018",
    companyInfo:
      "AtteroLabs ran an adnetwork, and created creative marketing collaterals for AR campaigns.",
    responsibilities: [
      "Building unique filters using SparkAR and Javascript",
      "Prototyping AR campaigns for pitches in AfterEffects",
      "Creating interactive ad banners using javascript",
    ],
  },
  {
    companyName: "Freelance",
    jobTitle: "Writer / Designer / Animator / Music Producer",
    location: "Mumbai, India",
    timeFrame: "March 2016 - Present",
    companyInfo: "I create marketing collateral for pitches and social media.",
    responsibilities: [
      "Motion Graphics",
      "Music Production",
      "Video Production",
    ],
  },
  {
    companyName: "Leo Burnett",
    jobTitle: "Creative Trainee",
    location: "Mumbai, India",
    timeFrame: "March 2016 - May 2016",
    companyInfo: "Leo Burnett is a full service advertising agency.",
    responsibilities: [
      "Marketing Research",
      "Copywriting",
    ],
  },
  {
    companyName: "Fulcro",
    jobTitle: "Graphic Designer",
    location: "Mumbai, India",
    timeFrame: "March 2014 - Jan 2015",
    companyInfo: "Leo Burnett is a full service advertising agency.",
    responsibilities: [
      "Marketing Research",
      "Copywriting",
    ],
  },
  {
    companyName: "Trinetra Focus",
    jobTitle: "Social Media Manager",
    location: "Mumbai, India",
    timeFrame: "Oct 2013 - Jan 2014",
    companyInfo: "Leo Burnett is a full service advertising agency.",
    responsibilities: [
      "Marketing Research",
      "Copywriting",
    ],
  },

];

const Experience = () => {
  return (
    <>
      <Heading py={5} color={"pink.500"}>
        Job Experience
      </Heading>
      {experiences.map((exp, index) => (
        <div key={index}>
          <Divider pt={2} />
          <SingleExperience {...exp} />
        </div>
      ))}
    </>
  );
};

const SingleExperience = ({
  jobTitle,
  location,
  timeFrame,
  logo,
  companyName,
  companyInfo,
  responsibilities,
}) => {
  return (
    <Box pt={"5"}>
      <HStack>
        {logo && (
          <>
            <Image src={logo} height={{base:"80px", md:"60px"} } />
            <Divider orientation={"vertical"} height="50px" />
          </>
        )}
        <VStack spacing={0} align={"start"}>
          <Text as={"span"} fontWeight={600} fontSize={20} p={0}>
            {jobTitle}{" "}
            <Text fontWeight={200} as={"span"}>
              at
            </Text>{" "}
            {companyName}
          </Text>

          <Text p={0}>
            {location} | {timeFrame}{" "}
          </Text>
        </VStack>
      </HStack>
      <Text pt={"3"}>{companyInfo}</Text>
      {responsibilities && (
        <UnorderedList pt={"3"}>
          {responsibilities.map((resp, index) => (
            <ListItem key={index}>{resp}</ListItem>
          ))}
        </UnorderedList>
      )}
    </Box>
  );
};

export default Experience;
