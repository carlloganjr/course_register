var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var activitySelection = ["--Select an activity--", "Science Lab", "Swimming", "Cooking", "Painting"],
    restrictions = [{ restrict: 'a) Dietary Restrictions', letter: 'a' }, { restrict: 'b) Physical Disabilities', letter: 'b' }, { restrict: 'c) Medical Needs', letter: 'c' }],
    _registeredStudent = [];

function InputField(props) {
  return React.createElement(
    "div",
    { "class": "inputDiv" },
    React.createElement(
      "label",
      { "class": "label" },
      props.label
    ),
    React.createElement("input", { value: props.value, "class": "input",
      type: "text", onChange: props.handler })
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
      { onChange: props.handler },
      options
    )
  );
}

function Restrictions(props) {
  var checks = props.list.map(function (item) {
    return React.createElement(
      "div",
      { key: item.letter },
      React.createElement("input", {
        type: "checkbox",
        id: item.letter,
        onChange: props.handler,
        value: item.letter }),
      React.createElement(
        "label",
        { "for": item.letter },
        item.restrict
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
    { value: props.value, onClick: props.handler },
    props.value
  );
}

function StudentInfo(props) {
  return React.createElement(
    "tr",
    null,
    React.createElement(
      "td",
      null,
      React.createElement(Button, { value: "X", handler: props.handler })
    ),
    React.createElement(
      "td",
      null,
      props.firstName
    ),
    React.createElement(
      "td",
      null,
      props.lastName
    ),
    React.createElement(
      "td",
      null,
      props.activity
    ),
    React.createElement(
      "td",
      null,
      props.restriction
    )
  );
}

function Registrations(props) {
  var registered = props.list.map(function (item, i) {
    return React.createElement(StudentInfo, { key: i,
      firstName: item.firstName,
      lastName: item.lastName,
      activity: item.activity,
      restriction: item.restriction,
      handler: props.handler });
  });
  return React.createElement(
    "table",
    { "class": "student" },
    React.createElement(
      "tr",
      null,
      React.createElement(
        "th",
        null,
        "Remove"
      ),
      React.createElement(
        "th",
        null,
        "First Name"
      ),
      React.createElement(
        "th",
        null,
        "Last Name"
      ),
      React.createElement(
        "th",
        null,
        "Activity"
      ),
      React.createElement(
        "th",
        null,
        "Restrictions"
      )
    ),
    registered
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
      restriction: '',
      students: [] };
    _this.registeredStudent = _this.registeredStudent.bind(_this);
    return _this;
  }

  _createClass(Register, [{
    key: "updateFirst",
    value: function updateFirst(e) {
      this.setState({ firstName: e.target.value });
    }
  }, {
    key: "updateLast",
    value: function updateLast(e) {
      this.setState({ lastName: e.target.value });
    }
  }, {
    key: "updateActivity",
    value: function updateActivity(e) {
      this.setState({ activity: e.target.value });
    }
  }, {
    key: "updateRestriction",
    value: function updateRestriction(e) {
      var index = this.state.restriction.indexOf(e.target.value);
      if (e.target.checked == true) {
        this.state.restriction += e.target.value;
        // this.setState({str: this.state.str)
      } else if (e.target.checked == false) {
        // this.state.restriction.replace(e.target.value, '')
        // this.state.restriction.trim()
        this.setState({ restriction: this.state.restriction.replace(e.target.value, '') });
      }
      // alert(this.state.restriction)
    }
  }, {
    key: "registeredStudent",
    value: function registeredStudent() {
      _registeredStudent.push({ firstName: this.state.firstName,
        lastName: this.state.lastName,
        activity: this.state.activity,
        restriction: this.state.restriction
      });
      this.setState({ students: _registeredStudent });
    }
  }, {
    key: "removeItem",
    value: function removeItem(i) {
      _registeredStudent.splice(i, 1);
      this.setState({ students: _registeredStudent });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(InputField, { label: "First Name", value: this.state.firstName,
          handler: this.updateFirst.bind(this) }),
        React.createElement(InputField, { label: "Last Name", value: this.state.lastName,
          handler: this.updateLast.bind(this) }),
        React.createElement(SelectActivity, { label: "Select Activity", list: activitySelection,
          handler: this.updateActivity.bind(this) }),
        React.createElement(Restrictions, { list: restrictions,
          handler: this.updateRestriction.bind(this) }),
        React.createElement(Button, { value: "Submit", handler: this.registeredStudent }),
        React.createElement(Registrations, { list: this.state.students,
          handler: this.removeItem.bind(this) })
      );
    }
  }]);

  return Register;
}(React.Component);

ReactDOM.render(React.createElement(Register, null), document.getElementById('root'));