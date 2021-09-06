import "./App.css";
import React from "react";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgUrl: "",
    };
    this.btnArr = ["Basketball", "PubG", "Tiger", "Phone", "Laptop", "Cricket"];
  }
  handleBtn = (e) => {
    this.setState({
      imgUrl: `/assets/${e.target.innerText.toLowerCase()}.jpg`,
    });
  };
  render() {
    return (
      <div className="m-10 my-40 mx-auto p-10 flex flex-col align-middle">
        <div className="p-4 w-5/12 mx-auto flex justify-evenly">
          {this.btnArr.map((btn, i) => {
            return (
              <button
                onClick={this.handleBtn}
                key={i}
                className="border border-red-400 p-2 m-2"
              >
                {btn}
              </button>
            );
          })}
        </div>
        <div className="flex justify-items-center h-88 w-9/12 my-0 mx-auto">
          <img src={this.state.imgUrl} alt="" className="w-full" />
        </div>
      </div>
    );
  }
}

export default App;
