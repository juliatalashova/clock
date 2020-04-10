import React from 'react';

function Radio({label, options, onChange, name, value}) {
  return <label>{label}
    {options.map(option =>
      <div key={option} className="field">
        <input key={option}
               type="radio"
               name={name}
               checked={option === value}
               value={option}
               onChange={onChange}
        /> {option}
      </div>
    )}
  </label>
}

class Clock extends React.Component{
  state = {
    format: "12",
    date: new Date(),
  }
  componentDidMount() {
    this.timerID = setInterval(this.tick, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick = () => {
    this.setState({
      date: new Date()
    })
  }

  setFormat = (format) => {
    this.setState({format})
  }

  render() {
    let {date, format} = this.state

    let formattedDate = ""
    if (format === "24") {
      formattedDate = date.toLocaleTimeString('en-GB')
    } else {
      formattedDate = date.toLocaleTimeString('en-US')
    }

    return <div className="container">
      <Radio label="Format time"
             options={["24", "12"]}
             name="format"
             value={format}
             onChange={e => this.setFormat(e.target.value)}
      />

      <div className="output">
        {formattedDate}
      </div>
    </div>
  }
}

export default Clock;
