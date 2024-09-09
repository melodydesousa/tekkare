import { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';

const AreaHospitalizations = ({ data }) => {
  const [filter, setFilter] = useState(
    { value: '0' }, // 0: all time, 3: last 3 months, 12: last year
  );

  const [state, setState] = useState({
    series: [
      {
        name: 'Monthly Hospitalizations',
        data: filter?.value === "0" ? data.map((month) => month.value) : data.slice(-filter.value).map((month) => month.value),
      },
    ],
    options: {
      legend: {
        show: false,
        position: 'top',
        horizontalAlign: 'left',
      },
      colors: ['#3C50E0', '#80CAEE'],
      chart: {
        fontFamily: 'Satoshi, sans-serif',
        height: 335,
        type: 'area',
        dropShadow: {
          enabled: true,
          color: '#623CEA14',
          top: 10,
          blur: 4,
          left: 0,
          opacity: 0.1,
        },
        toolbar: {
          show: false,
        },
      },
      stroke: {
        width: [2, 2],
        curve: 'straight',
      },
      grid: {
        xaxis: {
          lines: {
            show: true,
          },
        },
        yaxis: {
          lines: {
            show: true,
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      markers: {
        size: 4,
        colors: '#fff',
        strokeColors: ['#3056D3', '#80CAEE'],
        strokeWidth: 3,
        strokeOpacity: 0.9,
        strokeDashArray: 0,
        fillOpacity: 1,
        discrete: [],
        hover: {
          size: undefined,
          sizeOffset: 5,
        },
      },
      xaxis: {
        type: 'category',
        categories: [],
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        title: {
          style: {
            fontSize: '0px',
          },
        },
        min: 0,
        max: 3000,
      },
    },
  });


  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      series: [
        {
          name: 'Monthly Hospitalizations',
          data: filter?.value === "0" ? data.map((month) => month.value) : data.slice(-filter.value).map((month) => month.value),
        },
      ],
      options: {
        ...prevState.options,
        xaxis: {
          ...prevState.xaxis,
          categories: filter?.value === "0" 
            ? data.map((d) => `${d.month} ${d.year.toString().slice(-2)}`)
            : data.slice(-filter.value).map((d) => `${d.month} ${d.year.toString().slice(-2)}`),
        },
      },
    }));
  }, [data, filter]);

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default sm:px-7.5 xl:col-span-8">
      <div className="flex items-start justify-between gap-3 sm:flex-nowrap flex-col sm:flex-row">
        <div className=" w-full flex-wrap gap-3 sm:gap-5">
          <div className="flex min-w-47.5">
            <h4 className="text-xl font-semibold text-black ">
              Monthly Hospitalizations</h4>
          </div>
        </div>
        <div className="sm:flex w-full justify-end">
          <div className="gap-2 inline-flex items-center rounded-md bg-whiter p-1.5">
            <button
              onClick={() => setFilter({ value: "3" })}
              className={`rounded ${filter.value === "3" ? 'bg-white shadow-card' : ''} py-1 px-3 text-xs font-medium text-black hover:bg-white hover:shadow-card`}>
              Last 3 months
            </button>
            <button
              onClick={() => setFilter({ value: "12" })}
              className={`rounded ${filter.value === "12" ? 'bg-white shadow-card' : ''} py-1 px-3 text-xs font-medium text-black hover:bg-white hover:shadow-card`}>
              Last year
            </button>
            <button
              onClick={() => setFilter({ value: "0" })}
              className={`rounded ${filter.value === "0" ? 'bg-white shadow-card' : ''} py-1 px-3 text-xs font-medium text-black hover:bg-white hover:shadow-card`}>

              All time
            </button>
          </div>
        </div>
      </div>
      <div>

        <div id="chartOne" className="-ml-5">
          <ReactApexChart
            options={state.options}
            series={state.series}
            type="area"
            height={350}
          />
        </div>
      </div>
    </div>
  );
};

export default AreaHospitalizations;
