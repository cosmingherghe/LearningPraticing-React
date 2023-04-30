import { useState } from "react";

const ErrorExample = () => {
  const [count, setCount] = useState(0);

  function handleBtnClick() {
    setCount(count + 1);
    console.log(count);
  }

  return (
    <>
      <h1>{count}</h1>
      <h2>useState error example</h2>
      <button type="button" onClick={handleBtnClick}>
        + 1
      </button>
    </>
  );
};

export default ErrorExample;
