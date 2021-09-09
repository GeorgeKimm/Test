import React, { Component } from "react";
import { render } from "react-dom";
import App from "./components/App";

render(<App />, document.getElementById("root"));

// ТЕСТ 1
// class Clock extends Component {
//   state = {
//     date: new Date(),
//   };

//   componentDidMount() {
//     this.timerID = setInterval(() => this.tick(), 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }

//   render() {
//     return (
//       <div>
//         <h1>hello world</h1>
//         <h2>now: {this.state.date.toLocaleTimeString()}</h2>
//       </div>
//     );
//   }

//   tick = () => {
//     this.setState({
//       date: new Date(),
//     });
//   };
// }

// render(<Clock />, document.getElementById("root"));

// ТЕСТ 2
// function Form(props) {
//   function handleSubmit(event) {
//     event.preventDefault();
//     console.log("ebobo");
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <button type="submit">sent</button>
//     </form>
//   );
// }

// render(<Form />, document.getElementById("root"));

// ТЕСТ 3
// class Toggle extends Component {
//   state = {
//     isToggleOn: true,
//   };

//   render() {
//     return (
//       <button onClick={this.handleClick}>
//         {this.state.isToggleOn ? "включно" : "выключено"}
//       </button>
//     );
//   }

//   handleClick = () => {
//     this.setState((prevState) => ({
//       isToggleOn: !prevState.isToggleOn,
//     }));
//   };
// }

// render(<Toggle />, document.getElementById("root"));

// ТЕСТ 4
// function UserGreeting() {
//   return <h1> Ты внутри </h1>;
// }

// function GuestGreeting() {
//   return <h1> Ты снаружи </h1>;
// }

// function Greeting(props) {
//   const isLogIn = props.isLoggendIn;

//   if (isLogIn) {
//     return <UserGreeting />;
//   } else return <GuestGreeting />;
// }

// function LoginButton(props) {
//   return <button onClick={props.onClick}>войти</button>;
// }

// function LogoutButton(props) {
//   return <button onClick={props.onClick}>выйти</button>;
// }

// class LoginControl extends Component {
//   constructor(props) {
//     super(props);

//     this.handleLoginClick = this.handleLoginClick.bind(this);
//     this.handleLogoutClick = this.handleLogoutClick.bind(this);

//     this.state = {
//       isLoggendIn: false,
//     };
//   }

//   handleLoginClick = function () {
//     this.setState({
//       isLoggendIn: true,
//     });
//   };

//   handleLogoutClick = function () {
//     this.setState({
//       isLoggendIn: false,
//     });
//   };

//   render() {
//     const isLoggendIn = this.state.isLoggendIn;
//     let button;

//     if (isLoggendIn) {
//       button = <LogoutButton onClick={this.handleLogoutClick} />;
//     } else {
//       button = <LoginButton onClick={this.handleLoginClick} />;
//     }

//     return (
//       <div>
//         <Greeting isLoggendIn={isLoggendIn} />
//         {button}
//       </div>
//     );
//   }
// }

// render(<LoginControl />, document.getElementById("root"));

// ТЕСТ 5
// function WarninigBunner(props) {
//   if (!props.warn) {
//     return null;
//   }

//   return <div>предпреждение</div>;
// }

// class Page extends Component {
//   state = {
//     iswarn: true,
//   };

//   handleToggle = () => {
//     this.setState((state) => ({
//       iswarn: !state.iswarn,
//     }));
//   };

//   render() {
//     return (
//       <div>
//         <WarninigBunner warn={this.state.iswarn} />
//         <button onClick={this.handleToggle}>
//           {this.state.iswarn ? "hide" : "show"}
//         </button>
//       </div>
//     );
//   }
// }

// render(<Page />, document.getElementById("root"));

// ТЕСТ 6
// function ListItem(props) {
//   return <li>{props.value}</li>;
// }

// function NumberList(props) {
//   // Ключи нужно определять непосредственно внутри массивов
//   const list = props.arr.map((item) => {
//     return <ListItem key={item.toString()} value={item} />;
//   });

//   return <ul>{list}</ul>;
// }

// const arr = [1, 2, 3, 4, 5];
// render(<NumberList arr={arr} />, document.getElementById("root"));

// ТЕСТ 7
// class NameForm extends Component {
//   state = {
//     value: "",
//   };

//   handleChange = (event) => {
//     this.setState({
//       value: event.target.value,
//     });
//   };

//   handleSubmit = (event) => {
//     console.log(this.state.value);
//     event.preventDefault();
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name:
//           <input
//             type="text"
//             value={this.state.value}
//             onChange={this.handleChange}
//           />
//         </label>
//         <input type="submit" value="sent" />
//       </form>
//     );
//   }
// }

// render(<NameForm />, document.getElementById("root"));

// class Reservation extends Component {
//   state = {
//     isGoing: true,
//     numberOfGuests: 2,
//   };

//   handleSubmit = (event) => {
//     console.log(this.state.isGoing);
//     console.log(this.state.numberOfGuests);
//     event.preventDefault();
//   };

//   handleChange = (event) => {
//     const target = event.target;
//     const name = target.name;
//     const value = target.type === "checkbox" ? target.checked : target.value;

//     this.setState({
//       [name]: value,
//     });
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Пойдут:
//           <input
//             type="checkbox"
//             name="isGoing"
//             checked={this.state.isGoing}
//             onChange={this.handleChange}
//           />
//         </label>
//         <br />
//         <label>
//           Количество гостей:
//           <input
//             type="text"
//             name="numberOfGuests"
//             value={this.state.numberOfGuests}
//             onChange={this.handleChange}
//           />
//         </label>
//         <input type="submit" value="sent" />
//       </form>
//     );
//   }
// }
// render(<Reservation />, document.getElementById("root"));

// ТЕСТ 8
// function toCelsius(fahrenheit) {
//   return ((fahrenheit - 32) * 5) / 9;
// }

// function toFahrenheit(celsius) {
//   return (celsius * 9) / 5 + 32;
// }

// function tryConvert(temperature, convert) {
//   const input = parseFloat(temperature);
//   if (Number.isNaN(input)) {
//     return "";
//   }
//   const output = convert(input);
//   const rounded = Math.round(output * 1000) / 1000;
//   return rounded.toString();
// }

// class Calculator extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       scale: "c",
//       temperature: "",
//     };

//     this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
//     this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
//   }

//   handleCelsiusChange(temperature) {
//     this.setState({
//       scale: "c",
//       temperature: temperature,
//     });
//   }

//   handleFahrenheitChange(temperature) {
//     this.setState({
//       scale: "f",
//       temperature: temperature,
//     });
//   }

//   render() {
//     const scale = this.state.scale;
//     const temperature = this.state.temperature;
//     const celsius =
//       scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
//     const fahrenheit =
//       scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

//     return (
//       <div>
//         <TemperatureInput
//           scale="c"
//           temperature={celsius}
//           onTemperatureChange={this.handleCelsiusChange}
//         />
//         <TemperatureInput
//           scale="f"
//           temperature={fahrenheit}
//           onTemperatureChange={this.handleFahrenheitChange}
//         />
//       </div>
//     );
//   }
// }

// const scaleNames = {
//   c: "Цельсия",
//   f: "Фаренгейта",
// };

// class TemperatureInput extends Component {
//   constructor(props) {
//     super(props);

//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(e) {
//     this.props.onTemperatureChange(e.target.value);
//   }

//   render() {
//     const temperature = this.props.temperature;
//     const scale = this.props.scale;

//     return (
//       <fieldset>
//         <legend>Введите градусы по шкале {scaleNames[scale]}</legend>
//         <input value={temperature} onChange={this.handleChange} />
//       </fieldset>
//     );
//   }
// }
// render(<Calculator />, document.getElementById("root"));

// ТЕСТ 9
// function Fansy(props) {
//   return <div style={{ color: props.color }}> {props.children} </div>;
// }

// function Dialog(props) {
//   return (
//     <Fansy color="green">
//       <h1>{props.title}</h1>
//       <h2>{props.user}</h2>
//     </Fansy>
//   );
// }

// function WelcomeDialog() {
//   return <Dialog title="welcome" user={<Contact />} />;
// }

// function Contact() {
//   return <div>jonny</div>;
// }

// render(<WelcomeDialog />, document.getElementById("root"));

// ТЕСТ 10
// class InputComponent extends Component {
//   componentDidUpdate() {
//     console.log("%c компонент обновился", "background-color: green");
//   }

//   render() {
//     return (
//       <div>
//         <p>Пришло: {this.props.test}</p>
//       </div>
//     );
//   }
// }

// две нижние функции шинима, не делай так

// function logProps(InputComponent) {
//   InputComponent.prototype.componentDidUpdate = function (prevProps) {
//     console.log("Текущие пропсы: ", this.props);
//     console.log("Предыдущие пропсы: ", prevProps);
//   };
//   // Если мы возвращаем оборачиваемый компонент, значит, наверняка мы его изменили
//   return InputComponent;
// }

// function logProps2(InputComponent) {
//   InputComponent.prototype.componentDidUpdate = function (prevProps) {
//     console.log("Текущие пропсы2: ", this.props);
//     console.log("Предыдущие пропсы2: ", prevProps);
//   };
//   // Если мы возвращаем оборачиваемый компонент, значит, наверняка мы его изменили
//   return InputComponent;
// }

// а вот так делай

// function logProps(WrappedComponent) {
//   return class extends React.Component {
//     componentDidUpdate(prevProps) {
//       console.log("Текущие пропсы: ", this.props);
//       console.log("Предыдущие пропсы: ", prevProps);
//     }
//     render() {
//       // Оборачиваем компонент в контейнер без мутаций. Супер!
//       return <WrappedComponent {...this.props} />;
//     }
//   };
// }

// function logProps2(WrappedComponent) {
//   return class extends React.Component {
//     componentDidUpdate(prevProps) {
//       console.log("Текущие пропсы2: ", this.props);
//       console.log("Предыдущие пропсы2: ", prevProps);
//     }
//     render() {
//       // Оборачиваем компонент в контейнер без мутаций. Супер!
//       return <WrappedComponent {...this.props} />;
//     }
//   };
// }

// // EnhancedComponent будет печатать в консоль при каждом изменении пропсов
// const EnhancedComponent = logProps(InputComponent);
// const EnhancedComponent2 = logProps2(EnhancedComponent); // можешь попробовать передать в аргумент InputComponent
// EnhancedComponent.displayName = "EnhancedComponent";
// EnhancedComponent2.displayName = "EnhancedComponent2";

// class Test extends Component {
//   timerId = React.createRef();

//   state = {
//     count: 0,
//   };

//   componentDidMount() {
//     this.timerId.current = setInterval(() => {
//       this.setState((state) => ({
//         count: state.count + 1,
//       }));
//     }, 3000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerId.current);
//   }

//   render() {
//     return (
//       <>
//         {/* <InputComponent test={this.state.count} /> */}
//         {/* <EnhancedComponent test={this.state.count} /> */}
//         <EnhancedComponent2 test={this.state.count} />
//         {/* <InputComponent test={this.state.count} /> */}
//       </>
//     );
//   }
// }

// render(<Test />, document.querySelector("#root"));
