import PropTypes from "prop-types";
import {
  Text,
  Card,
  Image,
  Badge,
  Button,
  Group,
  List,
  Title,
  Center,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

export default function RenderMenu({ menuItems }) {
  const isMobile = useMediaQuery("(max-width: 768px)");
  if (menuItems === null) {
    return (
      <Title
        order={2}
        style={{
          textAlign: "center",
          fontSize: "1.5rem",
          fontFamily: "sans-serif",
          padding: "10px 0",
        }}
      >
        No menu found...
      </Title>
    );
  }

  const renderIngredients = (item) => {
    const ingredients = Object.entries(item)
      .filter(([key]) => key.startsWith("strIngredient") && item[key])
      .map(([ingredientKey, ingredientValue]) => {
        const measureKey = `strMeasure${ingredientKey.slice("strIngredient".length)}`;
        const measure = item[measureKey] || "";
        return (
          <List.Item key={ingredientKey}>
            {measure} of {ingredientValue}
          </List.Item>
        );
      });

    return (
      <List
        text="ingredients"
        listStyleType="none"
        style={{
          textAlign: "center",
          fontSize: isMobile ? "1rem" : "1.1rem",
          marginTop: "5px",
          fontFamily: "sans-serif",
          color: "white",
        }}
      >
        {ingredients}
      </List>
    );
  };

  const renderInstructions = (item) => {
    const instructions = item.strInstructions?.split("\r\n\r\n") || [];
    const instructionsList = instructions.map((instruction, index) => (
      <List.Item key={index}>{instruction}</List.Item>
    ));

    return (
      <List
        text="instruction"
        listStyleType="none"
        style={{
          textAlign: "center",
          fontSize: isMobile ? "1rem" : "1.1rem",
          fontFamily: "sans-serif",
          color: "white",
          margin: isMobile ? "5px 20px" : "5px 20px",
        }}
      >
        {instructionsList}
      </List>
    );
  };

  return (
    <Group
      text="menu-container"
      style={{
        width: isMobile ? "100%" : "50%",
        position: "relative",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, 0)",
      }}
    >
      {menuItems.map((item) => {
        return (
          <div key={item.idMeal}>
            <Card
              style={{
                backgroundColor: "rgba(3, 3, 3, 0.2)",
                paddingTop: "50px",
                marginBottom: "30px",
                borderRadius: "50px",
                filter: "drop-shadow(0px 0px 5px #000000)",
                alignItems: "center",
              }}
            >
              <Card
                style={{
                  backgroundColor: "rgb(247, 196, 31)",
                  borderRadius: "50px 50px 0 0",
                  marginBottom: "30px",
                  minWidth: isMobile ? "75%" : "50%",
                }}
              >
                <Center>
                  <Image
                    src={item.strMealThumb}
                    alt={item.strMeal}
                    loading="lazy"
                    style={{
                      width: isMobile ? "175px" : "300px",
                      height: isMobile ? "175px" : "300px",
                      border: "3px solid rgb(124, 0, 254)",
                      borderRadius: "50%",
                      boxShadow: "6px 6px 5px 0px rgba(0,0,0,0.5)",
                    }}
                  />
                </Center>
                <Group
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "5px",
                    padding: "10px",
                  }}
                >
                  <Group
                    title="Menu Details"
                    position="center"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "5px",
                      alignItems: "center",
                    }}
                  >
                    <Title
                      order={1}
                      style={{
                        fontSize: isMobile ? "1.5rem" : "2.2rem",
                        textAlign: "center",
                        color: "rgb(245, 0, 79)",
                        paddingBottom: "10px",
                      }}
                    >
                      {item.strMeal}
                    </Title>
                    <Group
                      title="meal-area-category"
                      style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        gap: isMobile ? "10px" : "50px",
                      }}
                    >
                      <Badge
                        color="rgb(124, 0, 254)"
                        style={{
                          width: "fit-content",
                          height: "fit-content",
                          textTransform: "none",
                          fontSize: isMobile ? ".8rem" : "1rem",
                          padding: "5px 10px",
                          color: "rgb(247, 196, 31)",
                          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
                          border: "none",
                        }}
                      >
                        {item.strArea}
                      </Badge>
                      <Badge
                        color="rgb(124, 0, 254)"
                        style={{
                          width: "fit-content",
                          height: "fit-content",
                          textTransform: "none",
                          fontSize: isMobile ? ".8rem" : "1rem",
                          padding: "5px 10px",
                          color: "rgb(247, 196, 31)",
                          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
                          border: "none",
                        }}
                      >
                        {item.strCategory}
                      </Badge>
                    </Group>
                  </Group>
                </Group>
              </Card>

              <Group
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                <Group
                  display={"grid"}
                  align="center"
                  justify="center"
                  style={{ gap: 10, paddingTop: "10px" }}
                >
                  <Badge
                    color="rgb(245, 0, 79)"
                    style={{
                      width: "fit-content",
                      height: "30px",
                      justifySelf: "center",
                      border: "none",
                    }}
                  >
                    <Title
                      order={2}
                      style={{
                        fontSize: isMobile ? "1.2rem" : "1.5rem",
                        textTransform: "none",
                        padding: "5px",
                        color: "rgb(247, 196, 31)",
                        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
                      }}
                    >
                      Ingredient:
                    </Title>
                  </Badge>
                  {renderIngredients(item)}
                </Group>

                <Group
                  display={"grid"}
                  align="center"
                  justify="center"
                  style={{ gap: 10, paddingTop: "10px" }}
                >
                  <Badge
                    color="rgb(245, 0, 79)"
                    style={{
                      width: "fit-content",
                      height: "30px",
                      justifySelf: "center",
                      border: "none",
                    }}
                  >
                    <Title
                      order={2}
                      style={{
                        fontSize: isMobile ? "1.2rem" : "1.5rem",
                        textTransform: "none",
                        padding: "5px",
                        color: "rgb(247, 196, 31)",
                        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
                      }}
                    >
                      Instruction:
                    </Title>
                  </Badge>
                  {renderInstructions(item)}
                </Group>
              </Group>
              <Group
                title="source"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  gap: "10px",
                  padding: "20px",
                  paddingTop: "30px",
                }}
              >
                <Text
                  style={{
                    color: "rgb(247, 196, 31)",
                    fontSize: "1.3rem",
                  }}
                >
                  Visit :
                </Text>
                <Button
                  color="transparent"
                  component="a"
                  href={item.strYoutube}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: "fit-content",
                    height: "fit-content",
                    backgroundColor: "transparent",
                    cursor: "pointer",
                    transition: "transform 0.3s ease-in-out",
                  }}
                >
                  <i
                    className="fa fa-youtube"
                    style={{
                      color: "red",
                      fontSize: "2.5rem",
                    }}
                  ></i>
                </Button>

                <Button
                  color="transparent"
                  component="a"
                  href={item.strSource}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: "fit-content",
                    height: "fit-content",
                    backgroundColor: "transparent",
                  }}
                >
                  <i
                    className="fa fa-globe"
                    style={{
                      color: "red",
                      fontSize: "2.5rem",
                    }}
                  ></i>
                </Button>
              </Group>
            </Card>
          </div>
        );
      })}
    </Group>
  );
}

RenderMenu.propTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.object).isRequired,
};
