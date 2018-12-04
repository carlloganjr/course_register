let activitySelection = ["--Select an activity--",
                         "Science Lab",
                         "Swimming",
                         "Cooking",
                         "Painting"],
    restrictions = [{restrict: 'a) Dietary Restrictions', letter: 'a'},
                    {restrict: 'b) Physical Disabilities', letter: 'b'},
                    {restrict: 'c) Medical Needs', letter: 'c'}],
    registeredStudent = []

function InputField(props) {
  return (
    <div class = 'inputDiv'>
      <label class = 'label'>{props.label}</label>
      <input value = {props.value} class = 'input'
             type = 'text' onChange = {props.handler}/>
    </div>
  )
}

function SelectActivity(props) {
  let options = props.list.map((item) => {
    return <option key = {item}>{item}</option>
  })
  return (
    <div class = 'inputDiv'>
      <label class = 'label'>{props.label}</label>
      <select onChange = {props.handler}>{options}</select>
    </div>
  )
}

function Restrictions(props) {
  let checks = props.list.map((item) => {
    return (
      <div key = {item.letter}>
        <input
               type = 'checkbox'
               id = {item.letter}
               onChange = {props.handler}
               value = {item.letter}/>
        <label for = {item.letter}>{item.restrict}</label>
      </div>
    )
  })
  return (
    <div>
      {checks}
    </div>
  )
}

function Button(props) {
  return (
    <button value = {props.value} onClick = {props.handler}>
      {props.value}
    </button>
  )
}

function StudentInfo(props) {
  return (
      <tr>
        <td><Button value = 'X' handler = {props.handler}/></td>
        <td>{props.firstName}</td>
        <td>{props.lastName}</td>
        <td>{props.activity}</td>
        <td>{props.restriction}</td>
      </tr>
  )
}

function Registrations(props) {
  let registered = props.list.map(
    (item, i) => {
      return (<StudentInfo key = {i}
                   firstName = {item.firstName}
                   lastName = {item.lastName}
                   activity = {item.activity}
                   restriction = {item.restriction}
                   handler = {props.handler}/>)
    }
  )
  return (
    <table class = 'student'>
      <tr>
        <th>Remove</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Activity</th>
        <th>Restrictions</th>
      </tr>
      {registered}
    </table>
  )
}

class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {firstName: '',
                  lastName: '',
                  activity: '',
                  restriction: '',
                  students: []}
    this.registeredStudent = this.registeredStudent.bind(this)
  }

  updateFirst(e) {
    this.setState({firstName: e.target.value})
  }

  updateLast(e) {
    this.setState({lastName: e.target.value})
  }

  updateActivity(e) {
    this.setState({activity: e.target.value})
  }

  updateRestriction(e) {
    let index = this.state.restriction.indexOf(e.target.value)
    if (e.target.checked == true) {
      this.state.restriction += e.target.value
      // this.setState({str: this.state.str)
    }
    else if (e.target.checked == false) {
      // this.state.restriction.replace(e.target.value, '')
      // this.state.restriction.trim()
      this.setState({restriction:this.state.restriction.replace(e.target.value, '')})
    }
    // alert(this.state.restriction)
  }

  registeredStudent() {
    registeredStudent.push({firstName: this.state.firstName,
                            lastName: this.state.lastName,
                            activity: this.state.activity,
                            restriction: this.state.restriction
                            })
    this.setState({students: registeredStudent})
  }

  removeItem(i) {
    registeredStudent.splice(i,1)
    this.setState({students: registeredStudent})
  }

  render() {
    return (
      <div>
        <InputField label = 'First Name' value = {this.state.firstName}
                    handler = {this.updateFirst.bind(this)}/>
        <InputField label = 'Last Name' value = {this.state.lastName}
                    handler = {this.updateLast.bind(this)}/>
        <SelectActivity label = 'Select Activity' list = {activitySelection}
                        handler = {this.updateActivity.bind(this)}/>
        <Restrictions list = {restrictions}
                      handler = {this.updateRestriction.bind(this)}/>
        <Button value = 'Submit'handler = {this.registeredStudent}/>
        <Registrations list = {this.state.students}
                       handler = {this.removeItem.bind(this)}/>
      </div>
    )
  }
}

ReactDOM.render(
  <Register/>,
  document.getElementById('root')
)
