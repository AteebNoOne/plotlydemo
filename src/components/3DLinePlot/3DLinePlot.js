import React, { useState } from 'react';
import Plot from 'react-plotly.js';

function ThreeDLinePlot() {
  const [xData, setXData] = useState([1, 2, 3, 4, 5]);
  const [yData, setYData] = useState([10, 11, 12, 13, 14]);
  const [zData, setZData] = useState([20, 21, 22, 23, 24]);
  const [chartTitle, setChartTitle] = useState('3D Line Chart');
  const [xAxisLabel, setXAxisLabel] = useState('X-Axis Label');
  const [yAxisLabel, setYAxisLabel] = useState('Y-Axis Label');
  const [zAxisLabel, setZAxisLabel] = useState('Z-Axis Label');

  const layout = {
    title: chartTitle,
    scene: {
      xaxis: {
        title: xAxisLabel,
      },
      yaxis: {
        title: yAxisLabel,
      },
      zaxis: {
        title: zAxisLabel,
      },
    },
  };

  const updateChart = () => {
    const data = [
      {
        x: xData,
        y: yData,
        z: zData,
        type: 'scatter3d',
        mode: 'lines+markers',
        marker: { color: 'blue' },
      },
    ];

    return <Plot data={data} layout={layout} />;
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/3 p-4 ">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="xData">
              X Data:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="xData"
              type="text"
              value={xData.join(', ')}
              onChange={(e) => setXData(e.target.value.split(',').map(Number))}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="yData">
              Y Data:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="yData"
              type="text"
              value={yData.join(', ')}
              onChange={(e) => setYData(e.target.value.split(',').map(Number))}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="zData">
              Z Data:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="zData"
              type="text"
              value={zData.join(', ')}
              onChange={(e) => setZData(e.target.value.split(',').map(Number))}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="chartTitle">
              Chart Title:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="chartTitle"
              type="text"
              value={chartTitle}
              onChange={(e) => setChartTitle(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="xAxisLabel">
              X-Axis Label:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="xAxisLabel"
              type="text"
              value={xAxisLabel}
              onChange={(e) => setXAxisLabel(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="yAxisLabel">
              Y-Axis Label:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="yAxisLabel"
              type="text"
              value={yAxisLabel}
              onChange={(e) => setYAxisLabel(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="zAxisLabel">
              Z-Axis Label:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="zAxisLabel"
              type="text"
              value={zAxisLabel}
              onChange={(e) => setZAxisLabel(e.target.value)}
            />
          </div>
        </div>
        <div className="">
          <div className="h-screen flex items-center justify-center">{updateChart()}</div>
        </div>
      </div>
    </div>
  );
}

export default ThreeDLinePlot;
