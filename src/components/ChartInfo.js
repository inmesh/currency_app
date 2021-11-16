import React from "react"
import { calcDiff } from '../Utils'

export default function ChartInfo(props) {
    const dayDiff = calcDiff(props.data, props.days, props.toCurr)
    const daysToLabel = {
        5: '5 days',
        30: '1 month',
        180: '6 month',
        365: '1 year'
    }

    function findLabel(days) {
        if (daysToLabel[days]) {
            return daysToLabel[days]
        } else {
            return 'YTD'
        }
    }

    return(
        <div className="ChartInfo">
            <h5>{props.data.now[props.toCurr]} </h5>
            <p>{findLabel(props.days)} change:
                <span style={{color: dayDiff > 0 ? '#55a630' : 'red'}}> {dayDiff > 0 ? '\u2191' : '\u2193'} {dayDiff.toFixed(3)}%</span>
            </p>
            <p>{findLabel(props.days)} range: {props.minmax[0].toFixed(4)}-{props.minmax[1].toFixed(4)}</p>
        </div>
    )
}