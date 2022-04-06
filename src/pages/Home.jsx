import React from "react";
import { useState, useEffect } from "react";

function Home() {
  const [villagers, setVillagers] = useState([
    {
      id: 1,
      name: "Cyrano",
      species: "Ant Eater",
      image: "",
    },
  ]);

  useEffect(() => {
    let url = "https://acnhapi.com/v1a/villagers";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.slice(0, 15));
        console.log(data);
        let newVillagers = data.map((villager) => ({
          name: villager.name["name-USen"],
          species: villager["species"],
          id: villager.id,
          image: villager.image_uri,
        }));
        console.log(newVillagers);
        setVillagers(newVillagers);
      })
      .catch((err) => console.log(err));
  }, []);

  const villagerCards = villagers.map((villager) => (
    <article key={villager.id}>
      <img src={villager.image} alt={villager.name} />
      <h2> {villager.name} </h2>
      <p> {villager.species} </p>
    </article>
  ));

  return (
    <div>
      <h1>Home Page</h1>
      {villagerCards}
    </div>
  );
}

export default Home;
