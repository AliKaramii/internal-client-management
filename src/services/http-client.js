// getting data from mock server

const baseUrl = "/api";

export const fetchData = async (url) => {
  const res = await fetch(`${baseUrl}${url}`);
  const { data } = await res.json();
  // console.log("HTTP: ", data);
  return data;
};
