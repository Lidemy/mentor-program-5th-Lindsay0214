import React, { useState } from "react";

function Form(props) {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (name === "") {
      alert("填入你的代辦事項！！！");
    } else if (name !== "") {
      props.addTask(name);
      setName("");
    }
  }

  function handleChange(e) {
    // console.log(e.target.value) 抓到輸入的值
    // setName 不只記錄，更儲存狀態
    setName(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          還有什麼事沒做 ......
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="on"
        value={name}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
}

export default Form;
