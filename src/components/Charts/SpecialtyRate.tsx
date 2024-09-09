import { ApexOptions } from 'apexcharts';
import { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';

interface SpecialtyRateState {
  series: {
    name: string;
    data: number[];
  }[];
}

const SpecialtyRate = ({ data }) => {

  const [state, setState] = useState<SpecialtyRateState>({
    series: [
      {
        name: "Rate",
        data: data.map((specialty) => specialty.satisfactionRate),
      },
    ],
  });

  const specialtyLabels = data.map((specialty) => specialty.specialty).sort();

  const options: ApexOptions = {
    colors: ['#3C50E0', '#80CAEE'],
    chart: {
      fontFamily: 'Satoshi, sans-serif',
      type: 'bar',
      height: 335,
      stacked: true,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    legend: {
      show: false,
      position: 'bottom',
    },

    responsive: [
      {
        breakpoint: 1536,
        options: {
          plotOptions: {
            bar: {
              borderRadius: 0,
              columnWidth: '25%',
            },
          },
        },
      },
    ],
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 0,
        columnWidth: '25%',
        borderRadiusApplication: 'end',
        borderRadiusWhenStacked: 'last',
      },
    },
    dataLabels: {
      enabled: false,
    },

    xaxis: {
      categories: specialtyLabels,
    },
    yaxis: {
      max: 100,
    },
    fill: {
      opacity: 1,
    },
  };


  useEffect(() => {
    setState({
      series: [
        {
          name: "%",
          data: data.map((specialty) => specialty.satisfactionRate),
        },
      ],
    });
  }, [data]);

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default xl:col-span-8">
      <div className="mb-4 justify-between gap-4 sm:flex">
        <div>
          <h4 className="text-xl font-semibold text-black">
            Satisfaction rate %
          </h4>
          <h5>per specialty</h5>
        </div>
      </div>

      <div>
        <div id="chartTwo" className="-ml-5 -mb-9">
          <ReactApexChart
            options={options}
            series={state.series}
            type="bar"
            height={350}
          />
        </div>
      </div>
    </div>
  );
};

export default SpecialtyRate;
