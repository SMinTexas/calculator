import React, { Component } from 'react';
import './App.css';
import KeyPadComponent from './components/KeyPadComponent';
import ResultComponent from './components/ResultComponent';

class App extends Component {
  constructor(){
      super();

      this.state = {
          result: ""
      }
  }

  onClick = button => {

      if(button === "="){
          this.calculate()
      }

      else if(button === "C"){
          this.reset()
      }
      else if(button === "CE"){
          this.backspace()
      }

      else {
          this.setState({
              result: this.state.result + button
          })
      }
  };


  calculate = () => {
      var checkResult = ''
      if(this.state.result.includes('--')){
          checkResult = this.state.result.replace('--','+')
      }

      else {
          checkResult = this.state.result
      }

      try {
          this.setState({
              // eslint-disable-next-line
              result: (eval(checkResult) || "" ) + ""
          })
      } catch (e) {
          this.setState({
              result: "error"
          })

      }
  };

  reset = () => {
      this.setState({
          result: ""
      })
  };

  backspace = () => {
      this.setState({
          result: this.state.result.slice(0, -1)
      })
  };

  render() {
      return (
          <div>
              <div className="calculator-body">
                  <h1>Calculator</h1>
                  <ResultComponent result={this.state.result}/>
                  <KeyPadComponent onClick={this.onClick}/>
              </div>
          </div>
      );
  }
}

export default App;
















// import React, { Component } from 'react';
// import './App.css';
// import Header from './header';
// import ClearButton from './clear';
// import PlusMinusButton from './plusminus';
// import PercentButton from './percent';
// import OneButton from './one';
// import TwoButton from './two';
// import ThreeButton from './three';
// import FourButton from './four';
// import FiveButton from './five';
// import SixButton from './six';
// import SevenButton from './seven';
// import EightButton from './eight';
// import NineButton from './nine';
// import ZeroButton from './zero';
// import PeriodButton from './period';
// import DivideButton from './divide';
// import MultiplyButton from './multiply';
// import SubtractButton from './subtract';
// import AddButton from './add';
// import EqualButton from './equal';

// //function App() {
// class App extends Component {
//   state = {
//     number: 0
//   }

//   render() {
//     return (
//       <>
//         <Header />
//         <div className="calc">
//           <div className="button-row-top">
//             <ClearButton />
//             <PlusMinusButton />
//             <PercentButton />
//             <DivideButton />
//           </div>
//         </div>
//         <div className="calc">
//           <div className="button-row-top">
//             <SevenButton />
//             <EightButton />
//             <NineButton />
//             <MultiplyButton />
//           </div>
//         </div>
//         <div className="calc">
//           <div className="button-row-middle">
//             <FourButton />
//             <FiveButton />
//             <SixButton />
//             <SubtractButton />
//           </div>
//         </div>
//         <div className="calc">
//           <div className="button-row-bottom">
//             <OneButton />
//             <TwoButton />
//             <ThreeButton />
//             <AddButton />
//           </div>
//         </div>
//         <div className="calc">
//           <div className="button-row-bottom">
//             <ZeroButton />
//             <PeriodButton />
//             <EqualButton />
//           </div>
//         </div>
//       </>
//     );
//   }
// }

// export default App;



