let activitySelection = ["Science Lab","Swimming","Cooking","Painting"],
    restrictions = ['Dietary Restrictions', 'Physical Disabilities', 'Medical Needs']

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

ReactDOM.render(
  <div>
    <InputField label = 'First Name'/>
    <InputField label = 'Last Name'/>
    <SelectActivity label = 'Select Activity' list = {activitySelection}/>
    <Restrictions list = {restrictions}/>
  </div>,
  document.getElementById('root')
)
