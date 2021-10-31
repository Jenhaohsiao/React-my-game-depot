import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

import { useState, useEffect } from "react";

// API Key
// 04f19512cf744444b13c42bd2f1026d4

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    const APIKey = "04f19512cf744444b13c42bd2f1026d4";
    const _url = `https://api.rawg.io/api/platforms?key=${APIKey}`;
    fetch(_url)
      .then((response) => {
        const _res = response.json();

        return _res;
      })
      .then((response) => {
        console.log("response:", response);
        setData(response);
      })
      .then(() => setLoading(false))
      .catch(function (errorInfo) {
        setError(errorInfo);
      });
  }, []);

  if (loading) return <h1>Loading...</h1>;
  if (!loading) return <pre>{JSON.stringify(data)}</pre>;
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;

  if (!data) return null;

  return (
    <>
      <Button variant="primary">test button</Button>{" "}
    </>
  );
}

export default App;
