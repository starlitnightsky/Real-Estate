import React from 'react'
import { Doughnut } from 'react-chartjs-2'
// import 'chartjs-plugin-doughnutlabel'

const DoughnutChart = () => {
  const labels = ['Social Media', 'Organic Search']
  const data = {
    labels: labels,
    datasets: [
      {
        data: [70, 30],
        backgroundColor: ['rgb(3 7 18)', 'rgb(156 163 175)'],
        borderColor: 'rgb(254,240,138)',
        hoverBorderColor: 'rgb(254,240,138)',
        borderRadius: 20,
        rotation: 40,
        spacing: 6,
      },
    ],
  }
  const options = {
    aspectRatio: 1,
    cutout: '73%',
    plugins: {
      legend: { display: false },
      doughnutlabel: {
        labels: [
          {
            text: '12k',
            font: {
              size: '30',
            },
            color: 'black',
          },
        ],
      },
      datalabels: {
        display: false,
      },
    },
  }
  return (
    <div style={{ width: '180px', height: '180px', position: 'relative' }}>
      <Doughnut
        data={data}
        options={options}
      />
      <div
        style={{
          position: 'absolute',
          top: '55px',
          left: '50px',
          fontSize: '50px',
        }}
      >
        12k
      </div>
    </div>
  )
}

export default DoughnutChart
