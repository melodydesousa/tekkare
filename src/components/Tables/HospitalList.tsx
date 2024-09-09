import { useNavigate } from "react-router-dom";
import { ChevronDown, ChevronUp } from "../../icons";
import React from "react";

const HospitalList = ({ data }) => {
  const navigate = useNavigate()
  const [order, setOrder] = React.useState(true) //true = asc ; false = desc
  const [sortColumn, setSortColumn] = React.useState('patients')
  const [processedData, setProcessedData] = React.useState(data)

  React.useEffect(() => {
    let sortedData = [...data]

      sortedData.sort((a, b) =>
        order 
          ? a.overview.totalPatients - b.overview.totalPatients 
          : b.overview.totalPatients - a.overview.totalPatients
      )
    setProcessedData(sortedData)
  }, [data, order, sortColumn])

  const handleSort = (column) => {
    if (sortColumn === column) {
      setOrder(!order)
    } else {
      setSortColumn(column)
      setOrder(true)
    }
  }

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default sm:px-7.5 xl:pb-1">

      <div className="text-md mb-6">Click on a hospital to see more data</div>
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left">
              <th className="min-w-[150px] py-4 px-4 font-semibold text-black xl:pl-11 flex flex-row items-center gap-2">
                Name
              </th>
              <th className="min-w-[150px] py-4 px-4 font-semibold text-black">
                Location
              </th>
              <th className="min-w-[150px] py-4 px-4 font-semibold text-black">
                Satisfaction Rate
              </th>
              <th className="min-w-[150px] py-4 px-4 font-semibold text-black flex flex-row items-center gap-2">
                Total patients
                <div className="cursor-pointer" onClick={() => handleSort('patients')}>
                  {order ? <ChevronDown /> : <ChevronUp />}
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {processedData.map((item, key) => (
              <tr onClick={() => navigate(`/hospital/${item.id}`)} key={key} className="hover:bg-bodydark1 cursor-pointer">
                <td className="border-b border-[#eee] py-5 px-4 xl:pl-11">
                  <h5 className="font-medium text-black">
                    {item.name}
                  </h5>
                </td>
                <td className="border-b border-[#eee] py-5 px-4">
                  <p className="text-black">
                    {item.location}
                  </p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4">
                  <p
                    className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ${item.overview.satisfactionRate.slice(0, 2) > 85
                      ? 'bg-success text-success'
                      : item.overview.satisfactionRate < 70
                        ? 'bg-danger text-danger'
                        : 'bg-warning text-warning'
                      }`}
                  >
                    {item.overview.satisfactionRate}
                  </p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4">
                  <p className="text-black">
                    {item.overview.totalPatients.toLocaleString()}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HospitalList;
