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
      }}
    >
      <Group
        style={{
          display: "flex",
          justifyContent: "center",
          gap: isMobile ? "5px" : "30px",
        }}
      >
        <Title
          order={1}
          className="main-title"
          style={{
            fontSize: isMobile ? "2.5rem" : "4rem",
            color: "rgb(124, 0, 254)",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            padding: "5px",
          }}
        >
          Recipe Finder
        </Title>
        <Text
          className="text-title"
          size={isMobile ? "1.2rem" : "1.5rem"}
          style={{
            fontStyle: "italic",
            color: "rgb(245, 0, 79)",
            fontWeight: "500",
          }}
        >
          Find your recipe from{" "}
          <a
            href="https://www.themealdb.com"
            style={{ color: "rgb(245, 0, 79)" }}
          >
            MealDB
          </a>
        </Text>
      </Group>
    </Container>
  );
}
