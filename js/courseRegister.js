var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var activitySelection = ["Science Lab", "Swimming", "Cooking", "Painting"],
    restrictions = ['a) Dietary Restrictions', 'b) Physical Disabilities', 'c) Medical Needs'];

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

function Button(props) {
  return React.createElement(
    "button",
    null,
    props.value
  );
}

var Register = function (_React$Component) {
  _inherits(Register, _React$Component);

  function Register(props) {
    _classCallCheck(this, Register);

    var _this = _possibleConstructorReturn(this, (Register.__proto__ || Object.getPrototypeOf(Register)).call(this, props));

    _this.state = { firstName: '',
      lastName: '',
      activity: '',
      restrictions: '' };
    return _this;
  }

  _createClass(Register, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(InputField, { label: "First Name" }),
        React.createElement(InputField, { label: "Last Name" }),
        React.createElement(SelectActivity, { label: "Select Activity", list: activitySelection }),
        React.createElement(Restrictions, { list: restrictions }),
        React.createElement(Button, { value: "Submit" })
      );
    }
  }]);

  return Register;
}(React.Component);

ReactDOM.render(React.createElement(Register, null), document.getElementById('root'));