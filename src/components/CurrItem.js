import React from "react"
import FlagIcon from './FlagIcon.js'

//freecurrency API
export default function CurrItem(props) {

    function getCountryCode(currency) {
        if (currency === "URY") {
            return 'uy'
        } else if (currency === "BIH") {
            return 'ba'
        } else {
            return currency.substring(0,2).toLowerCase()
        }
    }

    return (
        <div className="item">
            <div className='flags'>
                <FlagIcon code={getCountryCode(props.from)} squared={true} />
                <p>{'\u2192'}</p>
                <FlagIcon code={getCountryCode(props.to)} squared={true} />
            </div>
            <h5>{props.from} / {props.to}</h5>
            <p>{props.lastVal}</p>
            <p style={{color: props.dayDiff > 0 ? '#55a630' : 'red'}}>{props.dayDiff > 0 ? '\u2191' : '\u2193'} {props.dayDiff.toFixed(3)}%</p>
        </div>
    );
}