import React, { Component } from "react";
import Button from "./Button";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), locale: "bn-BD" };
  }
  /* 
we will follow this  code way when our props will directly handle the state. or if our state is changed by props. 

constructor(props) {
    super(props); // marge the props of Base class .
way -->   this.state = { date: new Date() }; // this class state. state is an javascript object.
  } 
  */

  //componentDidMount will call after component has been rendered to the DOM

  componentDidMount() {
    this.clockTimer = setInterval(
      () => this.tick(),

      //to update the state we have to use setState method which is given from React Component class .setState is a method of base class..
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.clockTimer);

    //componentWillUnmount will call just before we change the component , It suppose if we go home page from about page in that time home page componentWillUnmount will be called .
  }

  // handleClick(local) { // parameter dile avabe ta recieve korte hove.
  handleClick = (locale) => {
    //handleClick(e)   // to prevent default behavior write   e.preventDefault in the function.
    this.setState({
      locale,
      // local: local,
      // property name and props name same hole shodo local : local na likhe local liklei hove
    });
  };
  tick() {
    this.setState({ date: new Date() });
  }
  render() {
    // console.log("render clock");
    const { date, locale } = this.state; // destructuring date state from this.sate
    // const { local } = this.props; // destructuring local props from this.props

    /*    let button;   // for conditional rendering..
    if (locale === "bn-BD") {
      button = <Button change={this.handleClick} locale="en-US" />;
    } else {
      button = <Button change={this.handleClick} locale="bn-BD" />;
    } */
    return (
      <>
        <div>
          {/* <h1>Hello, {this.state.date.toLocaleTimeString(this.props.local)}</h1> way --1 */}

          {/* <h1>Hello, {date.toLocaleTimeString(local)}</h1>  way --2 */}

          <h1>
            {locale === "bn-BD" ? "এখন সময় =  " : "Time is Now = "}
            {date.toLocaleTimeString(locale)}
          </h1>
          <br />

          {/* <button onClick={this.handleClick.bind(this)}>Click Me</button>
          .bind(this) akhaneo likha jai.and constructor a r likhar proyojon nai.
          */}

          {/* <button onClick={this.handleClick.bind(this, "en-US")}>Click Me</button>
          
          akn jodi parameter pass korte hoi tahole this ar shate patate parbo. 
          */}

          {/* <button onClick={this.handleClick.bind(this)}>Click Me</button> */}

          {/* // parameter pathate hole bind dieo patano jai.  */}

          {/* {ototba arrow function use koreo parameter patano jai..} */}
          {locale === "bn-BD" ? (
            <Button change={this.handleClick} locale="en-US" />
          ) : (
            <Button change={this.handleClick} locale="bn-BD" />
          )}
        </div>
      </>
    );
  }
}
export default Clock;
