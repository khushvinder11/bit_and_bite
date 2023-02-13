import {
  Title,
  Text,
  Container,
  Button,
  Overlay,
  createStyles,
} from "@mantine/core";
import "./HomeStyle.scss";
import Navbar from "../navbar/Navbar";

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    paddingTop: 180,
    paddingBottom: 130,
    backgroundImage: "url(https://www.wedsinvite.com/img/intro-bg.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",

    "@media (max-width: 520px)": {
      paddingTop: 80,
      paddingBottom: 50,
    },
  },

  inner: {
    position: "relative",
    zIndex: 1,
  },

  title: {
    fontWeight: 800,
    fontSize: 40,
    letterSpacing: -1,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    color: theme.white,
    marginBottom: theme.spacing.xs,
    textAlign: "center",
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    "@media (max-width: 520px)": {
      fontSize: 28,
      textAlign: "left",
    },
  },

  highlight: {
    color: theme.colors[theme.primaryColor][4],
  },

  description: {
    color: theme.colors.gray[0],
    textAlign: "center",

    "@media (max-width: 520px)": {
      fontSize: theme.fontSizes.md,
      textAlign: "left",
    },
  },

  controls: {
    marginTop: theme.spacing.xl * 1.5,
    display: "flex",
    justifyContent: "center",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,

    "@media (max-width: 520px)": {
      flexDirection: "column",
    },
  },

  control: {
    height: 42,
    fontSize: theme.fontSizes.md,

    "&:not(:first-of-type)": {
      marginLeft: theme.spacing.md,
    },

    "@media (max-width: 520px)": {
      "&:not(:first-of-type)": {
        marginTop: theme.spacing.md,
        marginLeft: 0,
      },
    },
  },

  secondaryControl: {
    color: theme.white,
    backgroundColor: "rgba(255, 255, 255, .4)",

    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, .45) !important",
    },
  },
}));

export function HeroImageBackground() {
  const { classes, cx } = useStyles();

  return (
    <>
      <Navbar />
      <div className={classes.wrapper}>
        <Overlay color="#000" opacity={0.2} zIndex={1} />

        <div className={classes.inner}>
          <Title className={classes.title}>
            WE ARE A COMPLETE <br />
            WEB SOLUTION
          </Title>

          <Container size={640}>
            <Text size="lg" className={classes.description}>
              Build more reliable software with AI companion. AI is also trained
              to detect lazy developers who do nothing and just complain on
              Twitter.
            </Text>
          </Container>

          <div className={classes.controls}>
            <Button className={classes.control} variant="white" size="lg">
              LEARN MORE
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
