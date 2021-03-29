import React from "react";

const Header = (props: any) => {
  console.log('@props', props);
  
  return (
    <header className="App-header">
      <div className="header-wrapper">
        <nav className="main-nav">
          <ul className="main-nav-list">
            {props.items.map((item: any, index: number) => {
              return <li key={index}>
                        <a href={item.path}>
                          {item.name}
                        </a>
                      </li>;
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
