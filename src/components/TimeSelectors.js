import React from "react"

// Creates 5 buttons so set the time interval for the chart.
export default function TimeSelectors(props) {

    function onTimeChange(e) {
        return props.onChange(e)
    }

    // Get day of year for the YTD option.
    function getDOY(date) {
        return Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24)-1
    }

    return(
        <form className="TimeSelectors">
            <input type="radio" className="btn-check" name="options" id="5days" value="5" onChange={onTimeChange}/>
            <label className="btn btn-secondary" htmlFor="5days">5D</label>

            <input type="radio" className="btn-check" name="options" id="1month" value="30" onChange={onTimeChange}/>
            <label className="btn btn-secondary" htmlFor="1month">1M</label>

            <input type="radio" className="btn-check" name="options" id="6month" value="180" onChange={onTimeChange}/>
            <label className="btn btn-secondary" htmlFor="6month">6M</label>

            <input type="radio" className="btn-check" name="options" id="ytd" value={getDOY(new Date())} onChange={onTimeChange}/>
            <label className="btn btn-secondary" htmlFor="ytd">YTD</label>

            <input type="radio" className="btn-check" name="options" id="1year" value="365" onChange={onTimeChange}/>
            <label className="btn btn-secondary" htmlFor="1year">1Y</label>
        </form>
    )
}