import { Container } from "@mantine/core";
import { Title, Group, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
export default function Header() {
  const isMobile = useMediaQuery("(max-width: 620px)");

  return (
    <Container
      size={"100%"}
      style={{
        padding: "10px",
        textAlign: "center",
      }}
    >
      <Group
        style={{
          display: "flex",
          justifyContent: "center",
          gap: isMobile ? "0" : "30px",
        }}
      >
        <Title
          order={1}
          className="main-title"
          style={{
            fontFamily: "Kalnia Glaze",
            fontSize: isMobile ? "2.2rem" : "4rem",
            color: "rgb(124, 0, 254)",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            padding: "5px",
          }}
        >
          Recipe Finder
        </Title>
        <Text
          className="text-title"
          size={isMobile ? "1.5rem" : "2rem"}
          style={{
            fontFamily: "Dancing Script",
            fontStyle: "italic",
            color: "rgb(124, 0, 254)",
            fontWeight: "500",
            paddingTop: isMobile ? "0" : "15px",
          }}
        >
          Find your recipe from{" "}
          <a
            href="https://www.themealdb.com"
            style={{ color: "rgb(245, 0, 79)" }}
          >
            TheMealDB
          </a>
        </Text>
      </Group>
    </Container>
  );
}
