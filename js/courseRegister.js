var activitySelection = ["Science Lab", "Swimming", "Cooking", "Painting"];

function InputField(props) {
  return React.createElement(
    "div",
    { "class": "inputDiv" },
    React.createElement(
      "label",
      { "class": "label" },
      props.label
    ),
    React.createElement("input", { value: props.value, "class": "input" })
  );
}

ReactDOM.render(React.createElement(InputField, { label: "First Name" }), document.getElementById('root'));