import { useState } from "react";
const Home = () => {
  const [name, setName] = useState("mario");
  const [age, setAge] = useState(23);
  const handleClick = () => {
    const name = ["Nhan", "Oanh", "Ngoc"];
    const int = Math.floor(Math.random() * 3);
    setName(name[int]);
    setAge(30);
  };

  return (
    <div className="home">
      <h2>HomePage</h2>
      <p>
        {name} is {age} years old.
      </p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Home;
