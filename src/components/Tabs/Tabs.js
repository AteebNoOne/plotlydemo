import React, { useState } from 'react';
import Chart from '../Chart/Chart';
import ThreeDLinePlot from '../3DLinePlot/3DLinePlot';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-screen ">
        {activeTab === 1 && <div><ThreeDLinePlot /></div>}
        {activeTab === 2 && <div><Chart /></div>}
        {activeTab === 3 && <div>Tab 3 Content Goes Here</div>}
      </div>

      <div className="w-15 p-4">
        <button
          className={`block w-full p-2 mb-2 text-center border ${
            activeTab === 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
          onClick={() => handleTabClick(1)}
        >
          3D Lines plot
        </button>
        <button
          className={`block w-full p-2 mb-2 text-center border ${
            activeTab === 2 ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
          onClick={() => handleTabClick(2)}
        >
          Simple Line Chart
        </button>
        <button
          className={`block w-full p-2 text-center border ${
            activeTab === 3 ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
          onClick={() => handleTabClick(3)}
        >
          Tab 3
        </button>
      </div>
    </div>
  );
};

export default Tabs;
