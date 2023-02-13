import { Box, Container, Image, SimpleGrid, Text, Title } from "@mantine/core";
import "./GalleryStyle.scss";
import Navbar from "../navbar/Navbar";

const Gallery = () => {
  const imageGallery = [
    "https://images.unsplash.com/photo-1587831990711-23ca6441447b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVza3RvcCUyMGNvbXB1dGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGRlc2t0b3AlMjBjb21wdXRlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
    "https://images.unsplash.com/photo-1593640495253-23196b27a87f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZGVza3RvcCUyMGNvbXB1dGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    "https://img.business.com/w/700/aHR0cHM6Ly9pbWFnZXMuYnVzaW5lc3NuZXdzZGFpbHkuY29tL2FwcC91cGxvYWRzLzIwMjIvMDQvMDQwNzQ1NTMvMTU1NDI0NDAxMC5qcGVn",
    "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?cs=srgb&dl=pexels-designecologist-1779487.jpg&fm=jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9aMKl0ugJcA1Y26UdmmTjlcZqMDfo25Slq9FXpftt7Rl-WcSbUSCW7xn9bRfC4VrqHi4&usqp=CAU",
    "https://burst.shopifycdn.com/photos/laptop-from-above.jpg?width=1200&format=pjpg&exif=1&iptc=1",
  ];
  return (
    <>
      <Navbar />
      <Container fluid px={120}>
        <Box className="gallery-heading">
          <Title size="h1">GALLERY</Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </Text>
        </Box>
        <SimpleGrid
          cols={3}
          spacing="lg"
          breakpoints={[
            { maxWidth: 980, cols: 3, spacing: "md" },
            { maxWidth: 755, cols: 2, spacing: "sm" },
            { maxWidth: 600, cols: 1, spacing: "sm" },
          ]}
          sx={{ gap: "1px" }}
        >
          {imageGallery.map((v) => {
            return <Image src={v} alt="images" />;
          })}
        </SimpleGrid>
      </Container>
    </>
  );
};

export default Gallery;
