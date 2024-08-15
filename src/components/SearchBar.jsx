import { useState } from "react";
import PropTypes from "prop-types";
import { Title, Button, Input, CloseButton, Group } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
export default function SearchBar({ FetchMealDB }) {
  const isMobile = useMediaQuery("(max-width: 620px)");
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (searchQuery.trim() === "") {
      alert("Please enter valid menu");
      return;
    }

    setIsLoading(true);

    try {
      await FetchMealDB(searchQuery);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Group
        text="search-bar"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          paddingBottom: "20px",
          margin: "0",
        }}
      >
        <Input
          style={{
            width: isMobile ? "50%" : "25%",
            height: "50px",
            alignContent: "center",
          }}
          variant="filled"
          radius="xl"
          type="text"
          value={searchQuery}
          onChange={handleChange}
          placeholder="Search Menu here..."
          rightSectionPointerEvents="all"
          mt="md"
          rightSection={
            <CloseButton
              aria-label="Clear input"
              onClick={() => setSearchQuery("")}
              style={{
                display: searchQuery ? undefined : "none",
                marginRight: "10px",
                marginBottom: "5px",
                backgroundColor: "rgb(241,243,245)",
              }}
            />
          }
        />

        <Button
          variant="subtle"
          color="black"
          radius="xl"
          type="submit"
          style={{
            fontSize: "1.3rem",
            paddingTop: "10px",
            paddingLeft: "2px",
            backgroundColor: "transparent",
          }}
        >
          <i className="fa fa-search"></i>
        </Button>
      </Group>
      {isLoading && (
        <Title
          order={4}
          style={{
            textAlign: "center",
            fontSize: "1.5rem",
            fontFamily: "sans-serif",
            paddingTop: "20px",
          }}
        >
          Loading data...
        </Title>
      )}
    </form>
  );
}

SearchBar.propTypes = {
  FetchMealDB: PropTypes.func.isRequired,
};
