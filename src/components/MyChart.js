import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Chart from 'chart.js/auto';

export function CryptoChart({ symbol }) {
    const [chart, setChart] = useState(null);
    const chartContainer = useRef(null);
  
    async function fetchData() {
      const response = await fetch(`https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=1d`);
      const data = await response.json();
  
      const chartData = {
        labels: [],
        datasets: [{
          label: `${symbol} Price`,
          data: [],
          borderColor: 'rgb(10, 110, 130)',
          tension: 0.1
        }]
      };
  
      data.forEach(kline => {
        chartData.labels.push(new Date(kline[0]).toLocaleDateString());
        chartData.datasets[0].data.push(kline[4]);
      });


      if (chart) {
        chart.destroy();
      }

      const newChart = new Chart(chartContainer.current, {
        type: 'line',
        data: chartData,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              ticks: {
                beginAtZero: true,
              },
            },
          },
        }
      });
      setChart(newChart);
    }
  
    useEffect(() => {
      fetchData();
      const interval = setInterval(() => {
        fetchData();
      }, 60000);
    clearInterval(interval);
    // clearInterval será chamado antes de desmontar o componente
    }, []);
  
    return (
      <div style={{ width: "auto", minHeight: "400px", margin: "5% 20%"}}>
        <canvas ref={chartContainer} />
      </div>
    );
  }
  