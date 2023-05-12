import React from 'react'
import { Chart, CategoryScale } from 'chart.js/auto'
import { Bar } from 'react-chartjs-2'
import ChartDataLabels from 'chartjs-plugin-datalabels'

Chart.register(CategoryScale)
Chart.register(ChartDataLabels)

const HorizontalBarChart = () => {
  const labels = [
    'Villa',
    'Penthouse',
    'Apartments',
    'Townhouse',
    'Plot',
    'Loft & Duplex',
    'Office',
  ]
  const data = {
    labels: labels,
    datasets: [
      {
        borderColor: 'none',
        borderRadius: 5,
        barThickness: 20,
        data: [38, 110, 52, 70, 40, 89, 30],
        backgroundColor: [
          'rgb(110,110,110)',
          '#eab308',
          'rgb(110,110,110)',
          'rgb(110,110,110)',
          'rgb(110,110,110)',
          'rgb(110,110,110)',
          'rgb(110,110,110)',
        ],
        color: 'white',
      },
    ],
  }
  const options = {
    indexAxis: 'y' as const,
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        display: false,
      },
      y: {
        ticks: {
          color: 'white',
          font: {
            size: 15,
          },
        },
      },
    },
    plugins: {
      title: { display: false },
      legend: { display: false },
      datalabels: {
        color: 'white',
        font: {
          size: 15,
        },
      },
    },
  }
  return (
    <div style={{ width: '80%', height: '250px' }}>
      <Bar
        data={data}
        options={options}
      />
    </div>
  )
}

export default HorizontalBarChart
