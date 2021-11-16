import React, { useEffect, useState } from "react"
import CurrItem from "./CurrItem"
import { pastDate, calcDiff } from '../Utils'
import Carousel from 'react-bootstrap/Carousel'
import Spinner from 'react-bootstrap/Spinner'

export default function CurrItemsMaster(props) {
    const [error, setError] = useState(null)
    const [data, setData] = useState({})
    const [currList, setCurrList] = useState({})
    const [width, setWidth] = useState(window.innerWidth)
    var baseCurr = props.from

    // delay the on-change-screen-size to avoid many re-rendering.
    function debounce(fn, ms) {
        let timer
        return _ => {
          clearTimeout(timer);
          timer = setTimeout(_ => {
            timer = null
            fn.apply(this, arguments)
          }, ms)
        }
    }
    
    // Update screen width, used to calculate the number of items on screen in mapItemToCarousel.
    useEffect(() => {
        const debouncedHandleResize = debounce(function handleResize() {
            setWidth(window.innerWidth)
          }, 100)
        window.addEventListener("resize", debouncedHandleResize)
        return _ => window.removeEventListener("resize", debouncedHandleResize)
    }, [])

    useEffect(() => {
        var latest_data_url = `https://freecurrencyapi.net/api/v2/latest?apikey=07ffb0f0-3b0c-11ec-bbbf-d13e26852652&base_currency=${baseCurr}` //latest rates
        var daily_data_url = `https://freecurrencyapi.net/api/v2/historical?apikey=07ffb0f0-3b0c-11ec-bbbf-d13e26852652&base_currency=${baseCurr}&date_from=${pastDate(1)}` // history rates
        Promise.all([
            fetch(latest_data_url).then(res => res.json()),
            fetch(daily_data_url).then(res => res.json())])
            .then(([latest_data_res, daily_data_res]) => {
                if ('data' in latest_data_res && 'data' in daily_data_res) {
                    setData({
                        now: latest_data_res['data'],
                        updated: latest_data_res['query']['timestamp'],
                        daily: daily_data_res['data']
                    })
                    setCurrList(Object.keys(latest_data_res['data']))
            }},
            (error) => {
                setError(error);
            }) 
    }, [baseCurr])

    // Calculates the number of elements to show on screen depending on screen width. Returns a list of Carousel Item.
    function mapItemToCarousel() {
        let numOfItems = parseInt(width / 120)
        let retItems = []
        for (let i = 0; i < currList.length; i += numOfItems) {
            retItems.push(
            <Carousel.Item key={i}>
                {currList.slice(i, i+numOfItems).map(curr => (
                    <CurrItem key={curr} from={baseCurr} to={curr} lastVal={data.now[curr].toFixed(4)} dayDiff={calcDiff(data, 1, curr)} />
                ))}
            </Carousel.Item>
            )}
        return retItems
    }

    if (error) {
      return <div>Error: {error.message}. Please refresh the page.</div>
    } else if (!("now" in data && "daily" in data)) {
      return <Spinner animation="border" variant="success" />
    } else {
        (['XRP', 'XPF', 'XOF', 'XAF', 'BTC', 'ETH', 'LTC']).forEach(key => delete data.now[key]) // currencies with no flag.
        // var updateTime = new Date(data.updated*1000).toLocaleTimeString("en-GB", {hour: '2-digit', minute:'2-digit'})
        return (
            <div className='ItemsCont'>
                <div className='itemsList'>
                    <Carousel indicators={false} >
                        {mapItemToCarousel()}
                    </Carousel>
                </div>
                {/* <footer>Last update: {updateTime}</footer> */}
            </div> 
        )
            
    }
  }
