import {
  SimpleGrid,
  Button,
  TextInput,
  Input,
  Textarea,
  Grid,
  Container,
  Box,
  Text,
  Title,
  Divider,
} from "@mantine/core";
import "./ContactStyle.scss";
import Navbar from "../navbar/Navbar";

const Contact = () => {
  return (
    <>
      <Navbar />
      <Container fluid px={0} className="contact-body">
        <Grid>
          <Grid.Col span={8}>
            <Box className="footer-left-contact">
              <Title size="h1">GET IN TOUCH</Title>
              <Text fz="md" color={"white"} mt={16}>
                Please fill out the form below to send us an email and we will
                get back to you as soon as possible.
              </Text>
              <Box className="footer-input-field-container">
                {/* <Box className="input-field"> */}
                <SimpleGrid cols={2}>
                  <Box>
                    <TextInput placeholder="Name" withAsterisk />
                  </Box>
                  <Box>
                    <Input placeholder="Email" />
                  </Box>
                </SimpleGrid>
                {/* </Box> */}
                <Textarea placeholder="Message" withAsterisk />
                <Button color="dark" radius="xl" size="xl" uppercase>
                  Send Message
                </Button>
              </Box>
            </Box>
          </Grid.Col>
          <Grid.Col span="auto">
            <Box className="footer-right-address">
              <Title size="h3" color={"white"}>
                Contact Info
              </Title>
              <Box className="address">
                <Box>
                  <i class="fa-solid fa-location-dot"></i> Address{" "}
                </Box>
                <Text fz={14} color={"rgb(250 236 236)"}>
                  4321 California St, San Francisco, CA 12345
                </Text>
              </Box>
              <Box className="address">
                <Box>
                  <i class="fa-solid fa-phone"></i> Phone{" "}
                </Box>
                <Text fz={14} color={"rgb(250 236 236)"}>
                  +1 123 456 1234
                </Text>
              </Box>
              <Box className="address">
                <Box>
                  <i class="fa-solid fa-envelope"></i> Email{" "}
                </Box>
                <Text fz={14} color={"rgb(250 236 236)"}>
                  info@company.com
                </Text>
              </Box>
            </Box>
          </Grid.Col>
        </Grid>
        {/*  */}
        <Divider my="sm" className="footer-hr-line" />
        <Box className="footer-icon">
          <i class="fa-brands fa-facebook-f"></i>
          <i class="fa-brands fa-twitter"> </i>
          <i class="fa-brands fa-square-youtube"></i>
        </Box>
      </Container>
    </>
  );
};

export default Contact;
