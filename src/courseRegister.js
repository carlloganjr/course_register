let activitySelection = ["Science Lab","Swimming","Cooking","Painting"]

function InputField(props) {
  return (
    <div class = 'inputDiv'>
      <label class = 'label'>{props.label}</label>
      <input value = {props.value} class = 'input'/>
    </div>
  )
}

ReactDOM.render(
  <InputField label = "First Name"/>,
  document.getElementById('root')
)
