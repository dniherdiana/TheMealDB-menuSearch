/* export default async function FetchMealDB(searchQuery, setSearchQuery) {
  try {
    const fetchData = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`,
    );

    if (!fetchData.ok) {
      throw new Error(`HTTP error! status: ${fetchData.status}`);
    }

    const parseData = await fetchData.json();
    setSearchQuery(parseData.meals);
  } catch (error) {
    console.error("Error fetching data", error);
    setSearchQuery([]);
  }
}
 */

const FetchMealDB = async (searchKeyword, setSearchResult) => {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchKeyword}`
    );
    if (!response.ok) {
      throw new Error(`HTTPS error! status: ${response.status}`);
    } else {
      const data = await response.json();
      setSearchResult(data.meals);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    setSearchResult([]);
  }
};

export default FetchMealDB;
