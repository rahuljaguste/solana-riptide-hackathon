import ReactCurrencyInput from "react-currency-input-field"

export const TextAreaInput = (props) => (
  <div className="flex flex-col">
    <label>{props.label}</label>
    <textarea rows={4} className="bg-background rounded-md p-2" {...props} />
  </div>
)

export const Input = (props) => (
  <div className="flex flex-col">
    <label>{props.label}</label>
    <input className="bg-background rounded-md p-2" {...props} />
  </div>
)

export const CurrencyInput = (props) => (
  <div className="flex flex-col">
    <label>{props.label}</label>
    <ReactCurrencyInput className="bg-background rounded-md p-2" {...props} />
  </div>
)

export const Select = (props) => (
  <div className="flex flex-col">
    <label>{props.label}</label>
    <select className="bg-background rounded-md p-2" {...props}>
      {props.options.map((option) => {
        if (option instanceof Map) {
          return <option key={option.key} value={option.value}>{option.key}</option>
        }

        return <option key={option} value={option}>{option}</option>
      })}
    </select>
  </div>
)
