import { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  const removeItem = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  const removeAllItems = () => {
    setPeople([]);
  };

  return (
    <>
      <h2>useState array example</h2>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div>
            <div key={id}>
              <div>{name}</div>
              <button
                type="button"
                onClick={() => removeItem(id)}
                className="btn"
              >
                Remove
              </button>
            </div>
          </div>
        );
      })}
      <br />
      <button type="button" onClick={removeAllItems} className="btn">
        Remove All
      </button>
    </>
  );
};

export default UseStateArray;
