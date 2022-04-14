import React, { Component } from "react";

class Button extends Component {
  shouldComponentUpdate(nextProps) {
    const { change: currentChange, locale: currentLocale } = this.props;
    const { change: nextChange, locale: nextLocale } = nextProps;
    if (currentChange === nextChange && currentLocale === nextLocale) {
      return false;
    } else {
      return true;
    }
  }
  render() {
    // console.log("render button");

    const { change, locale } = this.props;
    return (
      <div>
        <button onClick={() => change(locale)}>
          {locale === "bn-BD" ? "Change Clock" : "ঘড়ি পরিবর্তন করুন "}
        </button>
      </div>
    );
  }
}

export default Button;
