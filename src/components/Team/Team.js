import { Container, SimpleGrid, Text, Paper, Title, Box } from "@mantine/core";
import "./TeamStyle.scss";
import Navbar from "../navbar/Navbar";

const Team = () => {
  const teaminfo = [
    {
      image: "https://www.wedsinvite.com/img/team/01.jpg",
      name: "joy",
      position: "director",
    },
    {
      image: "https://www.wedsinvite.com/img/team/02.jpg",
      name: "Mike Doe",
      position: "Senior Designer",
    },
    {
      image: "	https://www.wedsinvite.com/img/team/03.jpg",
      name: "Jane Doe",
      position: "Senior Designer",
    },
    {
      image: "	https://www.wedsinvite.com/img/team/04.jpg",
      name: "Karen Doe",
      position: "Project Manager",
    },
  ];
  return (
    <>
      <Navbar />
      <Container fluid px={120}>
        <Paper shadow="xl" p="xl">
          <Title size="h1" align="center">
            MEET THE TEAM
          </Title>
          <Text align="center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </Text>
        </Paper>
        <SimpleGrid
          cols={4}
          spacing="lg"
          breakpoints={[
            { maxWidth: 980, cols: 3, spacing: "md" },
            { maxWidth: 755, cols: 2, spacing: "sm" },
            { maxWidth: 600, cols: 1, spacing: "sm" },
          ]}
        >
          {teaminfo.map((v) => {
            return (
              <Box align="center">
                <Box>
                  <img src={v.image} alt="image" />
                </Box>
                <Box>
                  <Title size="h4">{v.name}</Title>
                  <Text className="team-position">{v.position}</Text>
                </Box>
              </Box>
            );
          })}
        </SimpleGrid>
      </Container>
    </>
  );
};

export default Team;
