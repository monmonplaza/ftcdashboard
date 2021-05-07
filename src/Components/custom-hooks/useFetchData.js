import React from "react";

const useFetchData = (url) => {
  const [list, setList] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetchChild();
  }, []);

  const fetchChild = async () => {
    // setLoading(true);

    const response = await fetch(url);
    const children = await response.json();

    setList(children);
    setLoading(false);
  };

  return { list, loading };
};

export default useFetchData;
