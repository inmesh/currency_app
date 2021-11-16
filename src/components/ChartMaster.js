import React, { useEffect, useState } from "react"
import Chart from "./Chart"
import CurrDropdown from "./CurrDropdown"
import TimeSelectors from './TimeSelectors'
import ChartInfo from './ChartInfo'
import { pastDate } from '../Utils'
import Spinner from 'react-bootstrap/Spinner'
// import { fetchData } from '../Utils'

export default function ChartMaster() {
    const [error, setError] = useState(null)
    const [data, setData] = useState({})
    const [curr, setCurr] = useState({
        from: 'USD',
        to: 'EUR'
    })
    const [daysPeriod, setDaysPeriod] = useState(5)

    // Creates rates-dates arrays for the chart
    function gatherInfo(data, toCurr, daysPeriod) {
        let dates = [pastDate(0)]
        let vals = [data.now[toCurr]]
        for (let i = 1; i <= daysPeriod; i++) {
            let getDate = pastDate(i)
            dates.push(getDate)
            vals.push(data.daily[getDate][toCurr])
        }
        return [dates, vals]
    }

    // get min and max value for period of time
    function getMinMax(vals, days) {
        const vals_slice = vals.slice(0, days)
        return [Math.min(...vals_slice), Math.max(...vals_slice)]
    }

    function onTimeChange(e) {
        setDaysPeriod(e.target.value)
    }

    function onCurrChange(e) {
        setCurr({...curr, [e.target.name]: e.target.value})
    }

    useEffect(() => {
        // async function getFromFetch() {
        //     let retVal = await fetchData(curr.from, 365)
        //     if ('data' in retVal[0] && 'data' in retVal[1]) {
        //         setData({
        //             now: retVal[0]['data'],
        //             base: retVal[0]['query']['base_currency'],
        //             daily: retVal[1]['data']
        //          })
        //     } else {
        //         setError(retVal)
        //     }
        //     return retVal
        // }
        // setData(getFromFetch())
        
        var latest_data_url = `https://freecurrencyapi.net/api/v2/latest?apikey=07ffb0f0-3b0c-11ec-bbbf-d13e26852652&base_currency=${curr.from}` //latest rates
        var daily_data_url = `https://freecurrencyapi.net/api/v2/historical?apikey=07ffb0f0-3b0c-11ec-bbbf-d13e26852652&base_currency=${curr.from}&date_from=${pastDate(365)}` // history rates
        Promise.all([
            fetch(latest_data_url).then(res => res.json()),
            fetch(daily_data_url).then(res => res.json())])
            .then(([latest_data_res, daily_data_res]) => {
                if ('data' in latest_data_res && 'data' in daily_data_res) {
                    setData({
                        now: latest_data_res['data'],
                        base: latest_data_res['query']['base_currency'],
                        daily: daily_data_res['data']
                    })
            }},
            (error) => {
                setError(error);
            }) 
    }, [curr.from])

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!("now" in data && "daily" in data)) {
      return <Spinner animation="border" variant="success" />
    } else {
        const [dates, vals] = gatherInfo(data, curr.to, daysPeriod)
        return (
            <div className='ChartMaster'>
                <div className='ChartCont'>
                    <ChartInfo data={data} toCurr={curr.to} days={daysPeriod} minmax={getMinMax(vals, daysPeriod)} />
                    <Chart labels={dates.reverse()} vals={vals.reverse()} from={curr.from} to={curr.to}/>
                </div>
                <div className="graphsForms">
                    <TimeSelectors onChange={onTimeChange} />
                    <div className="CurrForm">
                        <form>
                            <label>From: </label>
                            <CurrDropdown direction="from" onChange={onCurrChange} default={curr.from} />
                            <label>To: </label>
                            <CurrDropdown direction="to" onChange={onCurrChange} default={curr.to} />
                        </form>
                    </div>
                </div>
            </div>
        )
            
    }
  }