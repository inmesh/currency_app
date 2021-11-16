
export function pastDate(days) {
    const today = new Date()
    const yesterday = new Date(today)
    yesterday.setDate(yesterday.getDate() - days)
    return yesterday.toISOString().split("T")[0]
}

export function calcDiff(data, diffTime, to) {
    let curr = data.now[to]
    let orig = data.daily[pastDate(diffTime)][to]
    return (curr/orig -1) * 100
}

// export function fetchData(baseCurr, daysBack) {
//     let data = {}
//     var latest_data_url = `https://freecurrencyapi.net/api/v2/latest?apikey=07ffb0f0-3b0c-11ec-bbbf-d13e26852652&base_currency=${baseCurr}` //latest rates
//     var daily_data_url = `https://freecurrencyapi.net/api/v2/historical?apikey=07ffb0f0-3b0c-11ec-bbbf-d13e26852652&base_currency=${baseCurr}&date_from=${pastDate(daysBack)}` // history rates
//     return Promise.all([
//         fetch(latest_data_url).then(res => res.json()),
//         fetch(daily_data_url).then(res => res.json())])
//         // .then(([latest_data_res, daily_data_res]) => {
//         //     if ('data' in latest_data_res && 'data' in daily_data_res) {
//         //         console.log("they are both populated1", latest_data_res)
//         //         data = ({
//         //             now: latest_data_res['data'],
//         //             base: latest_data_res['query']['base_currency'],
//         //             daily: daily_data_res['data']
//         //         })
//         //     }
//         // },
//         // (error) => {
//         //     return error
//         // })
//         // .then(() => {console.log(data)
//         //     return(data)})
// }