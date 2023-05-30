const Home = () => {
  const handleClick = () => {
    console.log("Hello, Van");
  };
  const handleClickAgain = (name) => {
    console.log("Hello", name);
  };

  return (
    <div className="home">
      <h2>HomePage</h2>
      <button onClick={handleClick("Oanh")}>Click me</button>

      <button
        onClick={() => {
          console.log("hi there");
        }}
      >
        Click me again
      </button>
    </div>
  );
};

export default Home;
