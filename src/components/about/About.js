import {
  List,
  ThemeIcon,
  SimpleGrid,
  Container,
  Box,
  Title,
  Text,
  Image,
} from "@mantine/core";
import { IconCircleCheck, IconCircleDashed } from "@tabler/icons";
import "./AboutStyle.scss";
import Navbar from "../navbar/Navbar";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <Container fluid px={120}>
        <SimpleGrid
          cols={2}
          breakpoints={[
            { maxWidth: 980, cols: 3, spacing: "md" },
            { maxWidth: 755, cols: 2, spacing: "sm" },
            { maxWidth: 600, cols: 1, spacing: "sm" },
          ]}
        >
          <Box className="about-image-container">
            <Image src="https://www.wedsinvite.com/img/about.jpg" alt="image" />
          </Box>
          <Box className="about-content-container">
            <Title size="h1">ABOUT US</Title>
            <Text>
              We are a complete online solution for your business, We take care
              of every single need which requires to make a good impact on the
              your clients.
            </Text>

            <Title size="h3">Why Choose Us?</Title>
            <SimpleGrid cols={2}>
              <Box>
                <List
                  spacing="xs"
                  size="sm"
                  center
                  icon={
                    <ThemeIcon color="teal" size={24} radius="xl">
                      <IconCircleCheck size={16} />
                    </ThemeIcon>
                  }
                >
                  <List.Item>Dedicated and hardworking team</List.Item>
                  <List.Item>Timely deliveries</List.Item>
                  <List.Item>Happy clients</List.Item>
                  <List.Item>Expectations meet</List.Item>
                </List>
              </Box>
              <Box>
                <List
                  spacing="xs"
                  size="sm"
                  center
                  icon={
                    <ThemeIcon color="teal" size={24} radius="xl">
                      <IconCircleCheck size={16} />
                    </ThemeIcon>
                  }
                >
                  <List.Item>Full assistance</List.Item>
                  <List.Item> quality delivers</List.Item>
                </List>
              </Box>
            </SimpleGrid>
          </Box>
        </SimpleGrid>
      </Container>
    </>
  );
};

export default AboutPage;
