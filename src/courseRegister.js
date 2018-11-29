let activitySelection = ["Science Lab","Swimming","Cooking","Painting"],
    restrictions = ['a) Dietary Restrictions',
                    'b) Physical Disabilities',
                    'c) Medical Needs']

function InputField(props) {
  return (
    <div class = 'inputDiv'>
      <label class = 'label'>{props.label}</label>
      <input value = {props.value} class = 'input' type = 'text'/>
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
      <select>{options}</select>
    </div>
  )
}

function Restrictions(props) {
  let checks = props.list.map((item) => {
    return (
      <div>
        <input type = 'checkbox' key = {item} id = {item}/>
        <label for = {item}>{item}</label>
      </div>
    )
  })
  return (
    <div>
      {checks}
    </div>
  )
}

function  Button(props) {
  return (
    <button>{props.value}</button>
  )
}

class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {firstName: '',
                  lastName: '',
                  activity: '',
                  restrictions: ''}
  }

  render() {
    return (
      <div>
        <InputField label = 'First Name'/>
        <InputField label = 'Last Name'/>
        <SelectActivity label = 'Select Activity' list = {activitySelection}/>
        <Restrictions list = {restrictions}/>
        <Button value = 'Submit'/>
      </div>
    )
  }
}

ReactDOM.render(
  <Register/>,
  document.getElementById('root')
)
