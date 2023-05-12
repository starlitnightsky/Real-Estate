import React from 'react'

import { Line } from 'react-chartjs-2'
// import RU from '../assets/img/flags/russia.png'

const LineChart = () => {
  const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  const data = {
    labels: labels,
    datasets: [
      {
        fill: false,
        label: 'US',
        data: [200, 500, 370, 650, 450, 600, 490],
        borderColor: 'rgb(254,240,138)',
        backgroundColor: 'rgb(254,240,138)',
        tension: 0.4,
        radius: 1.5,
        borderWidth: 2,
      },
      {
        label: 'CA',
        data: [450, 300, 550, 370, 750, 400, 610],
        borderColor: 'rgb(170,170,170,0.5)',
        backgroundColor: 'rgb(170,170,170,0.5)',
        tension: 0.4,
        radius: 1.5,
        borderWidth: 2,
      },
      {
        label: 'FR',
        data: [100, 740, 400, 390, 650, 330, 400],
        borderColor: 'rgb(0,255,255,0.4)',
        backgroundColor: 'rgb(0,255,255,0.4)',
        tension: 0.4,
        radius: 1.5,
        borderWidth: 2,
      },
      {
        label: 'AU',
        data: [50, 380, 240, 370, 480, 500, 320],
        borderColor: 'rgb(144, 238, 144,0.4)',
        backgroundColor: 'rgb(144, 238, 144,0.4)',
        tension: 0.4,
        radius: 1.5,
        borderWidth: 2,
      },
    ],
  }
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        display: true,
        ticks: {
          color: 'white',
        },
      },
      y: {
        display: true,
        min: 0,
        max: 1000,
        ticks: {
          stepSize: 250,
          color: 'white',
        },
      },
    },
    tooltips: {
      enabled: false,
      // mode: 'label',
      // callbacks: {
      //   label: function (
      //     tooltipItem: { datasetIndex: string | number; yLabel: any },
      //     data: { datasets: { [x: string]: { label: string } } }
      //   ) {
      //     const label = data.datasets[tooltipItem.datasetIndex].label || ''
      //     const value = tooltipItem.yLabel
      //     const image = '<img src="russia.png" alt="123"/>'
      //     return ''
      //   },
      // },
    },
    plugins: {
      legend: {
        display: false,
        labels: {
          color: 'white',
          boxWidth: 15,
          padding: 20,
        },
      },
    },
  }
  return (
    <div style={{ height: '270px', width: '100%' }}>
      <Line
        data={data}
        options={options}
      />
    </div>
  )
}

export default LineChart
