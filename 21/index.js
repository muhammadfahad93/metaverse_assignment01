
var countriesList = [
    {
      name: "Pakistan",
      code: "PK",
    },
  
    {
      name: "India",
      code: "IN",
    },
  
    {
      name: "Germany",
      code: "GER",
    },
  
    {
      name: "IRAN",
      code: "IR",
    }
  
  
  ];
  
  console.log("countries list in object", countriesList);
  
  countriesList.map((data) => {
    console.log("countries name and codes: ", data.name + " " + data.code);
  });