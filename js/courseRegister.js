var activitySelection = ["Science Lab", "Swimming", "Cooking", "Painting"],
    restrictions = ['Dietary Restrictions', 'Physical Disabilities', 'Medical Needs'];

function InputField(props) {
  return React.createElement(
    "div",
    { "class": "inputDiv" },
    React.createElement(
      "label",
      { "class": "label" },
      props.label
    ),
    React.createElement("input", { value: props.value, "class": "input", type: "text" })
  );
}

function SelectActivity(props) {
  var options = props.list.map(function (item) {
    return React.createElement(
      "option",
      { key: item },
      item
    );
  });
  return React.createElement(
    "div",
    { "class": "inputDiv" },
    React.createElement(
      "label",
      { "class": "label" },
      props.label
    ),
    React.createElement(
      "select",
      null,
      options
    )
  );
}

function Restrictions(props) {
  var checks = props.list.map(function (item) {
    return React.createElement(
      "div",
      null,
      React.createElement("input", { type: "checkbox", key: item, id: item }),
      React.createElement(
        "label",
        { "for": item },
        item
      )
    );
  });
  return React.createElement(
    "div",
    null,
    checks
  );
}

ReactDOM.render(React.createElement(
  "div",
  null,
  React.createElement(InputField, { label: "First Name" }),
  React.createElement(InputField, { label: "Last Name" }),
  React.createElement(SelectActivity, { label: "Select Activity", list: activitySelection }),
  React.createElement(Restrictions, { list: restrictions })
), document.getElementById('root'));