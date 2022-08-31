// src/App.js
import "./App.css";
import allContacts from "./contacts.json";
import { useState } from "react";

function App() {
  const firstFive = allContacts.slice(0, 5);
  const [celebs, setCelebs] = useState(firstFive);

  const randomCelebHandler = () => {
    let randomIndex = Math.floor(Math.random() * allContacts.slice(5).length);
    const randomCeleb = allContacts[randomIndex];
    setCelebs((firstFive) => [...firstFive, randomCeleb]);
  };
  const SortCelebsByName = () => {
    const sortedNames = [...celebs].sort((a, b) => (a.name > b.name ? 1 : -1));
    setCelebs(sortedNames);
  };

  const SortCelebsByPopularity = () => {
    const sortedPop = [...celebs].sort((a, b) => b.popularity - a.popularity);
    setCelebs(sortedPop);
  };

  const deleteCeleb = (id) => {
    const OneLessCeleb = celebs.filter((celebs) => {
      return celebs.id !== id;
    });
    setCelebs(OneLessCeleb);
  };

  return (
    <div className="App">
      <table>
        <button onClick={randomCelebHandler}>Add Random Contact</button>
        <button onClick={SortCelebsByName}> Sort By Name</button>
        <button onClick={SortCelebsByPopularity}> Sort By Popularity</button>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
          </tr>
        </thead>
        <tbody>
          {celebs.map((celebs) => {
            return (
              <tr key={celebs.id}>
                <td>
                  <img src={celebs.pictureUrl} height="150px" />
                </td>
                <td>{celebs.name}</td>
                <td>{celebs.popularity}</td>
                <td>{celebs.wonOscar === true ? "🏆" : ""}</td>
                <td>{celebs.wonEmmy === true ? "🏆" : ""}</td>
                <td>
                  <button onClick={() => deleteCeleb(celebs.id)}>
                    Erase Contact
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default App;
