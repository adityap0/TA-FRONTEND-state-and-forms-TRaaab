import "./App.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.allSteps = [5, 10, 15];
    this.maxValue = [15, 100, 200];
    this.count = 0;
    this.state = {
      counter: 1,
      countBy: 0,
      maxVal: Math.pow(10, 1000),
    };
  }
  handleCountby = (step) => {
    this.setState({
      countBy: step,
    });
  };
  handleMaxval = (value) => {
    this.setState({
      maxVal: value,
    });
  };

  handleIncrement = (count) => {
    console.log(this.state.maxVal, this.state.counter);
    if (this.state.counter < this.state.maxVal) {
      if (count === 1) {
        this.setState({
          counter: this.state.counter + this.state.countBy - 1,
        });
      } else {
        this.setState({
          counter: this.state.counter + this.state.countBy,
        });
      }
      if (this.state.countBy === 0) {
        this.setState({
          counter: this.state.counter + 1,
        });
      }
    } else {
      this.setState({
        counter: this.state.counter,
      });
    }
  };
  handleDecrement = (count) => {
    if (this.state.counter < this.state.maxVal) {
      if (count === 1) {
        this.setState({
          counter: this.state.counter + this.state.countBy - 1,
        });
      } else {
        this.setState({
          counter: this.state.counter - this.state.countBy,
        });
      }
      if (this.state.countBy === 0) {
        this.setState({
          counter: this.state.counter - 1,
        });
      }
    } else {
      this.setState({
        counter: this.state.counter,
      });
    }
  };
  handleReset = () => {
    this.count = 0;
    this.setState({
      counter: 0,
      countBy: 0,
      maxVal: Math.pow(10, 1000),
      active: true,
    });
  };
  addActive = () => {
    this.setState({ active: !this.state.active });
  };
  render() {
    const btn_class = this.state.active
      ? "h-10 px-5 text-red-700 border border-red-500 rounded-lg hover:bg-red-500 hover:text-red-50 m-2"
      : "h-10 px-5 text-green-700 border border-green-500 rounded-lg hover:bg-green-500 hover:text-blue-50 m-2";
    return (
      <div className="flex flex-col justify-evenly w-6/12 mx-auto p-10 my-20">
        <h1 className="text-center text-3xl p-2 m-4">{this.state.counter}</h1>
        <div className="flex flex-row justify-between">
          <div className="w-5/12">
            <h2 className="text-center text-2xl p-2">Steps</h2>
            <div className="flex flex-row justify-evenly m-10">
              {this.allSteps.map((step, i) => {
                return (
                  <button
                    className={btn_class}
                    key={i}
                    onClick={(e) => {
                      this.handleCountby(step);
                      this.addActive();
                    }}
                  >
                    {step}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="w-5/12">
            <h2 className="text-center text-2xl p-2">Max Value</h2>
            <div className="flex flex-row justify-evenly m-10">
              {this.maxValue.map((value, i) => {
                return (
                  <button
                    className={btn_class}
                    key={i}
                    onClick={(e) => {
                      this.handleMaxval(value);
                    }}
                  >
                    {value}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-evenly m-10">
          <button
            className="px-3 py-1 text-3xl bg-red-400 text-white m-2 "
            onClick={() => {
              this.count += 1;
              this.handleIncrement(this.count);
            }}
          >
            Increment
          </button>
          <button
            className="px-3 py-1 text-3xl bg-red-400  text-white m-2"
            onClick={() => {
              this.count += 1;
              this.handleDecrement(this.count);
            }}
          >
            Decrement
          </button>
          <button
            className="px-3 py-1 text-3xl bg-red-400 text-white m-2"
            onClick={this.handleReset}
          >
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default App;
