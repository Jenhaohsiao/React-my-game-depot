import { useState, useEffect } from "react";

function useApiFetchData(initialUrl) {
  const [url, setUrl] = useState(initialUrl);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState();

  // Fetch data...
  useEffect(() => {
    // We can't make useEffect's callback async, so use a function within the callback to simplify
    // fetch's promise responses
    const fetchData = async () => {
      // Starting a new request
      setIsLoading(true);

      let response = null;
      await fetch(url).then((res) => {
        response = res;
      });

      // Store the response data in a state value
      const responeJson = await response.json();
      console.log("responeJson:", responeJson);
      setData(responeJson);

      setUrl(null);

      // All done!
      setIsLoading(false);
    };

    if (url) {
      fetchData();
    }
  }, [url]);

  return [data, isLoading, setUrl];
}

export default useApiFetchData;
