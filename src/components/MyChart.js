import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Chart from 'chart.js/auto';

export function CryptoChart({ symbol }) {
    const [chart, setChart] = useState(null);
    const chartContainer = useRef(null);
  
    async function fetchData() {
      const response = await fetch(`https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=1h`);
      const data = await response.json();
      
      function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i+=1) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }


      const chartData = {
        labels: [],
        datasets: [{
          label: `${symbol} Price`,
          data: [],
          borderColor: getRandomColor(),
          tension: 0.1
        }]
      };
  
      data.forEach(kline => {
        const date = new Date(kline[0]);
        chartData.labels.push(`${date.toLocaleDateString()} ${date.toLocaleTimeString()}`);
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
            x:{
              display: false,
            },
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
      <div style={{ width: "auto", height: "400px"}}>
        <canvas ref={chartContainer} />
      </div>
    );
  }
  