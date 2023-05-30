const Home = () => {
  const handleClick = (e) => {
    console.log("Hello, Van", e);
  };
  const handleClickAgain = (name, e) => {
    console.log("Hello", name, e.target);
  };

  return (
    <div className="home">
      <h2>HomePage</h2>
      <button onClick={handleClick("Oanh")}>Click me</button>

      <button
        onClick={(e) => {
          handleClickAgain("Oanh", e);
        }}
      >
        Click me again
      </button>
    </div>
  );
};

export default Home;
