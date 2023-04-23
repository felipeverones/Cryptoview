import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Chart from 'chart.js/auto';

export function CryptoChart({ symbol }) {
    const [chart, setChart] = useState(null);
  
    async function fetchData() {
      const response = await fetch(`https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=1d`);
      const data = await response.json();
  
      const chartData = {
        labels: [],
        datasets: [{
          label: `${symbol} Price`,
          data: [],
          borderColor: 'rgb(255, 99, 132)',
          tension: 0.1
        }]
      };
  
      data.forEach(kline => {
        chartData.labels.push(new Date(kline[0]).toLocaleDateString());
        chartData.datasets[0].data.push(kline[4]);
      });
  
      if (!chart) {
        const newChart = new Chart(document.getElementById(`${symbol}-chart`), {
          type: 'line',
          data: chartData,
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
          }
        });
        setChart(newChart);
      } else {
        chart.data = chartData;
        chart.update();
      }
    }
  
    useEffect(() => {
      fetchData();
      const interval = setInterval(() => {
        fetchData();
      }, 60000);
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div style={{ width: "auto", minHeight: "500px", margin: "5% 20%"}}>
        <canvas id={`${symbol}-chart`} />
      </div>
    );
  }
  