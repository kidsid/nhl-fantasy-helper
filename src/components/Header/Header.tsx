import React from "react";

const Header = (props: any) => {
  return (
    <header className="App-header">
      <div className="header-wrapper">
        <nav className="main-nav">
          <ul className="main-nav-list">
            {props.items.map((item: string, index: number) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
