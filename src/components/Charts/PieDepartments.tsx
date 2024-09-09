import { ApexOptions } from 'apexcharts';
import { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';

interface HospitalDepartmentsState {
  series: number[];
}

const PieDepartments = ({ data }) => {
  const [state, setState] = useState<HospitalDepartmentsState>({
    series: data && data.map((department) => department.patientsPerDay),
  });

  const departmentLabels = data.map((department) => department.department); 

  const options: ApexOptions = {
    chart: {
      fontFamily: 'Satoshi, sans-serif',
      type: 'donut',
    },
    colors: ['#3C50E0', '#6577F3', '#8FD0EF', '#0FADCF'],
    labels: departmentLabels, 
    legend: {
      show: false,
      position: 'bottom',
    },
    plotOptions: {
      pie: {
        donut: {
          size: '65%',
          background: 'transparent',
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    responsive: [
      {
        breakpoint: 2600,
        options: {
          chart: {
            width: 380,
          },
        },
      },
      {
        breakpoint: 640,
        options: {
          chart: {
            width: 200,
          },
        },
      },
    ],
  };

  useEffect(() => {
    setState({
      series: data.map((department) => department.patientsPerDay),
    });
  }, [data]);

  const colors = ["#6577F3", "#3c50e0", "#8FD0EF", "#0FADCF"];

  return (
    <div className="sm:px-7.5 col-span-6 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default xl:col-span-4">
      <div className="mb-3 justify-between gap-4 sm:flex">
        <div>
          <h5 className="text-xl font-semibold text-black">
          Number of patients per day 
          </h5>
          <h6>by department</h6>
        </div>
      </div>

      <div className="mb-2">
        <div id="chartThree" className="mx-auto flex justify-center">
          <ReactApexChart
            options={options}
            series={state.series}
            type="donut"
          />
        </div>
      </div>

      <div className="-mx-8 flex flex-row flex-wrap gap-y-3">
        {data.map((department, index) => (
          <div key={index} className="px-8">
            <div className="flex w-full items-center">
              <span
                className="mr-2 h-3 w-3 rounded-full"
                style={{ backgroundColor: colors[index % colors.length] }}
              ></span>
              <div className="flex flex-row gap-2 text-sm font-medium text-black">
                <span>{department.department}: {department.patientsPerDay}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieDepartments;
