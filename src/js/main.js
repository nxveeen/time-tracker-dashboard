console.log("oksy");

const getJSON = async function (url) {
  const res = await fetch(`${url}`);
  const data = await res.json();
  console.log(data[0]);
};
getJSON("./data.json");
