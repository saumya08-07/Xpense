import React from 'react'
import './Transactions.css'
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function Transactions() {

  const data = {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [
          {
            label: 'Votes',
            data: [300, 50, 100],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
          }
        ]
      };
      
      const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
              display: false // Disable the legend
            },
          tooltip: {
            enabled: true
          }
        }
      };      

  return (
    <div className='trans-container'>
        <div className="trans-wrap">
            <div className="left-wrap">
                <div className="top-wrap">
                    <div className="data-container">
                        <span className="data-label">Account Balance</span>
                        <span className="data-value">$50000</span>
                        <p className="line-sep"></p>
                    </div>
                    <div className="data-container">
                        <span className="data-label">Spent</span>
                        <span className="data-value">$24000</span>
                        <p className="line-sep"></p>
                    </div>
                    <div className="data-container">
                        <span className="data-label">Earned</span>
                        <span className="data-value">$25000</span>
                        <p className="line-sep"></p>
                    </div>
                </div>
                <div className="bottom-wrap">
                    <Doughnut data={data} options={options} />
                </div>
            </div>
            <div className="right-wrap">
                <div className="recent-trans-container">
                    <span className='recent-label'>Recent Transactions</span>
                    <div className="recent-trans">
                        <div className="img-wrap">
                            <i className="plane-up fa-solid fa-plane-up">Up</i>
                        </div>
                        <div className="recent-data-wrap">
                            <div className="recent-trans-label">Travel<i className="green-arr fa-solid fa-angles-up"></i></div>
                            <span className="recent-trans-data">Indigo Ticket</span>
                        </div>
                        <div className="amt">$100</div>
                    </div>
                    <div className="recent-trans">
                        <div className="img-wrap">
                            <i className="plane-up fa-solid fa-plane-up">Up</i>
                        </div>
                        <div className="recent-data-wrap">
                            <div className="recent-trans-label">Travel<i className="red-arr fa-solid fa-angles-down"></i></div>
                            <span className="recent-trans-data">Indigo Ticket</span>
                        </div>
                        <div className="amt">$900</div>
                    </div>
                    <div className="recent-trans">
                        <div className="img-wrap">
                            <i className="plane-up fa-solid fa-plane-up">Up</i>
                        </div>
                        <div className="recent-data-wrap">
                            <div className="recent-trans-label">Travel<i className="red-arr fa-solid fa-angles-down"></i></div>
                            <span className="recent-trans-data">Indigo Ticket</span>
                        </div>
                        <div className="amt">$15000</div>
                    </div>
                    <div className="recent-trans">
                        <div className="img-wrap">
                            <i className="plane-up fa-solid fa-plane-up">Up</i>
                        </div>
                        <div className="recent-data-wrap">
                            <div className="recent-trans-label">Travel<i className="green-arr fa-solid fa-angles-up"></i></div>
                            <span className="recent-trans-data">Indigo Ticket</span>
                        </div>
                        <div className="amt">$1000</div>
                    </div>
                </div>
            </div>
            <div className="btn-wrap">
                <i class="fa-solid fa-xmark x-mark"></i>
                <button className="btn-up"><i class="fa-solid fa-upload"></i></button>
                <button className="btn-down"><i class="fa-solid fa-download"></i></button>
            </div>
        </div>
    </div>
  )
}

export default Transactions