import React from "react";

const useFetchData = (url) => {
  const [list, setList] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetchList();
  }, []);

  const fetchList = async () => {
    // setLoading(true);

    const response = await fetch(url);
    const list = await response.json();

    setList(list);
    setLoading(false);
  };

  return { list, loading };
};

export default useFetchData;
