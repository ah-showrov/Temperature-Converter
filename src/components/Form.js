import React from "react";

class Form extends React.Component {
  state = {
    title: "javascript",
    text: "I love js",
    library: "React",
    isAwesome: true,
  };

  handleChange = (e) => {
    /*     this.setState({
      [e.target.name]: e.target.value,
    }); */

    if (e.target.type === "text") {
      this.setState({
        title: e.target.value,
      });
    } else if (e.target.type === "textarea") {
      this.setState({
        text: e.target.value,
      });
    } else if (e.target.type === "select-one") {
      this.setState({
        library: e.target.value,
      });
    } else if (e.target.type === "checkbox") {
      this.setState({
        isAwesome: e.target.checked,
      });
    } else {
      console.log(e.target.type);
      console.log(this.state);
    }
  };

  submitHandler = (e) => {
    e.preventDefault();
    const { title, text, library, isAwesome } = this.state;
    console.log(title, text, library, isAwesome);
  };
  render() {
    const { title, text, library, isAwesome } = this.state;
    return (
      <form onSubmit={this.submitHandler}>
        <input
          type="text"
          placeholder="Enter Title"
          value={title}
          onChange={this.handleChange}
        />
        <br />
        <br />
        <br />

        <textarea name="" value={text} onChange={this.handleChange} />

        <br />
        <br />
        <br />

        <select value={library} onChange={this.handleChange}>
          <option value="React">React</option>
          <option value="Angular">Angular</option>
          <option value="Vue">Vue</option>
        </select>

        <br />
        <br />
        <br />

        <input
          type="checkbox"
          checked={isAwesome}
          onChange={this.handleChange}
        />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Form;
