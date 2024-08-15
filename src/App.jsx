import { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import FetchMealDB from "./api/FetchMealDB";
import RenderMenu from "./pages/RenderMenu";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
const App = () => {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <MantineProvider>
      <Header />
      <SearchBar
        FetchMealDB={(query) => FetchMealDB(query, setSearchResults)}
      />
      <RenderMenu menuItems={searchResults} />
    </MantineProvider>
  );
};

export default App;
