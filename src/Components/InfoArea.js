import React from 'react'
import './InfoArea.css'

function InfoArea({data}) {
    return (
        <div className='card'>
            <img className='image' src={data.image} />
            

            <div className='detail'>
                <h4>Current Price  </h4>
                <p>$  {data.current_price}</p>
            </div>
            <div className='detail'>
                <h4>Market Cap  </h4>
                <p>$  {data.market_cap}</p>
            </div>
            <div className='detail'>
                <h4>Rank(Market Cap Vise)  </h4>

                <p># {data.market_cap_rank}</p>
            </div>
            <div className='detail'>
                <h4>Change in Price (Last 24hour)  </h4>
                
                <p>{data.price_change_percentage_24h_in_currency} %</p>
            </div>
        </div>
    )
}

export default InfoArea
