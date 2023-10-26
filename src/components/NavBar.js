import React from "react";
import classes from "./NavBar.module.css";
import { useState } from "react";
import CustomerName from "./CustomerName";

const NavBar = () => {
  const [name, setName] = useState("");
  const [isNameExist, setIsNameExist] = useState(false);

  function handleNameChange(event) {
    setName(event.target.value);
    
  }

  function handleSubmit(event) {
    event.preventDefault();
    setIsNameExist(true);
  }
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Daily Note</h1>
      {isNameExist ? (
        <CustomerName name={name} />
      ) : (
        <div>
          <form onSubmit={handleSubmit}>
            <div className={classes.inputBox}>
              <input
                type="text"
                required
                placeholder="Inter your name"
                className={classes.name}
                onChange={handleNameChange}
              />
              <button type="submit" className={classes.btn}>
                Submit Name
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default NavBar;
