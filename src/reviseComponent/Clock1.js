const { Component } = require("react");

class Clock1 extends Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date(), locale: "bn-BD" };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  handleLocalTime = (locale) => {
    this.setState({
      locale: locale,
    });
  };
  render() {
    const { time, locale } = this.state;
    return (
      <div>
        <h1>Time is {time.toLocaleTimeString(locale)}</h1>
        <h1>.....................</h1>
        <button onClick={() => this.handleLocalTime("en-US")}>Click Me</button>
      </div>
    );
  }
}
export default Clock1;
