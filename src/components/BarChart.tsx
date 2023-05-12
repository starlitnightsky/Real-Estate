import React from 'react'
import { Chart, CategoryScale } from 'chart.js/auto'
import { Bar } from 'react-chartjs-2'

Chart.register(CategoryScale)

const BarChart = () => {
  const labels = ['Villa', 'Penthouse', 'Townhouse', 'Apartments']
  const data = {
    labels: labels,
    datasets: [
      {
        borderColor: 'none',
        borderRadius: 5,
        barThickness: 25,
        data: [38, 110, 52, 70],
        backgroundColor: [
          'rgb(140,140,140)',
          'rgb(254,240,138)',
          'rgb(140,140,140)',
          'rgb(140,140,140)',
        ],
      },
    ],
  }
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: {
          color: 'white',
          font: {
            size: 13,
          },
        },
      },
      y: {
        min: 0,
        max: 125,
        ticks: {
          stepSize: 25,
          color: 'white',
        },
      },
    },
    plugins: {
      title: { display: false },
      legend: { display: false },
    },
  }
  return (
    <div style={{ width: '270px', height: '220px' }}>
      <Bar
        data={data}
        options={options}
      />
    </div>
  )
}

export default BarChart
