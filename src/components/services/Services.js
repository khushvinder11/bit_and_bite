import { Container, SimpleGrid, Title, Text, Box } from "@mantine/core";
import "./ServicesStyle.scss";
import Navbar from "../navbar/Navbar";

const Services = () => {
  const servicesInfo = [
    {
      title: "Web Development",
      content: "Share your idea and we will develop web apps from that",
      icon: <i class="fa-solid fa-photo-film"></i>,
    },
    {
      title: "Logo Designs",
      content: "Share your idea and we will develop web apps from that",
      icon: <i class="fa-solid fa-folder"></i>,
    },
    {
      title: "Video Editing",
      content: "Share your idea and we will develop web apps from that",
      icon: <i class="fa-solid fa-address-book"></i>,
    },
    {
      title: "Web Designs",
      content: "Share your idea and we will develop web apps from that",
      icon: <i class="fa-solid fa-clock"></i>,
    },
    {
      title: "Brandings",
      content: "Share your idea and we will develop web apps from that",
      icon: <i class="fa-solid fa-wallet"></i>,
    },
    {
      title: "Photo Editing",
      content: "Share your idea and we will develop web apps from that",
      icon: <i class="fa-brands fa-google-play"></i>,
    },
  ];
  return (
    <>
      <Navbar />
      <Container fluid px={0} className="Services-body">
        <Box className="services-heading">
          <Title size="h1">OUR SERVICES</Title>
          <Text>All services under one roof </Text>
        </Box>

        <SimpleGrid
          cols={3}
          spacing="lg"
          breakpoints={[
            { maxWidth: 980, cols: 3, spacing: "md" },
            { maxWidth: 755, cols: 2, spacing: "sm" },
            { maxWidth: 600, cols: 1, spacing: "sm" },
          ]}
          a
        >
          {servicesInfo.map((v) => {
            return (
              <Box className="services-card-body">
                {" "}
                <Box className="services-card-icon">{v.icon}</Box>
                <Title size="h3" color="white" mb={7}>
                  {v.title}
                </Title>
                <Text mt={0} color="white">
                  {v.content}
                </Text>
              </Box>
            );
          })}
        </SimpleGrid>
      </Container>
    </>
  );
};

export default Services;

{
  /* <Box className="services-card-body">
                <Box className="services-card-icon">{v.icon}</Box>
                <Title size="h3" color="white" mt={20}>
                  {v.title}
                </Title>
                <Text mt={0} color="white">
                  {v.content}
                </Text>
              </Box> */
}
