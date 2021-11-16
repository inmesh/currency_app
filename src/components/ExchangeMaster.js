import React, { useEffect, useState } from "react"
import CurrDropdown from "./CurrDropdown"
import Spinner from 'react-bootstrap/Spinner'

export default function ExchangeMaster() {
    const [error, setError] = useState(null)
    const [data, setData] = useState({})
    const [curr, setCurr] = useState({
        from: 'USD',
        to: 'EUR'
    })
    const [amount, setAmount] = useState(0)

    function onCurrChange(e) {
        setCurr({...curr, [e.target.name]: e.target.value})
    }

    function onAmountChange(e) {
        if (!(e.target.value)) {
            setAmount(0)
        } else {
            setAmount(e.target.value)
        }
    }

    function convert() {
        return amount * data.now[curr.to]
    }

    function switchCurr() {
        var oldfrom = curr.from
        var oldto = curr.to
        setCurr({'from': oldto, 'to': oldfrom})
    }

    useEffect(() => {
        var latest_data_url = `https://freecurrencyapi.net/api/v2/latest?apikey=07ffb0f0-3b0c-11ec-bbbf-d13e26852652&base_currency=${curr.from}` //latest rates
        fetch(latest_data_url).then(res => res.json())
        .then((latest_data_res) => {
            if ('data' in latest_data_res) {
                setData({
                    now: latest_data_res['data']
                })
        }},
        (error) => {
            setError(error);
        })            
    }, [curr])

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!("now" in data)) {
      return <Spinner animation="border" variant="success" />
    } else {
        return (
            <div className='ExchangeMaster'>
                <h3>Currency converter</h3>
                <div className='ExchangeCont'>
                    <input placeholder="amount" name="amount" autoComplete="off" onChange={onAmountChange} />
                    <CurrDropdown direction="from" onChange={onCurrChange} default={curr.from} />
                    <button onClick={switchCurr}>{'\u21C6'}</button>
                    <CurrDropdown direction="to" onChange={onCurrChange} default={curr.to} />
                </div>
                <div>
                    <p className="result">{parseFloat(amount).toLocaleString()} {curr.from} = {convert().toLocaleString('en-US', {maximumFractionDigits:4})} {curr.to}</p>
                </div>
            </div>
        )
            
    }
  }