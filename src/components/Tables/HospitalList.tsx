const HospitalList = ({ data }) => {
  console.log(data);
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black">
      List
      </h4><div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left">
              <th className="min-w-[150px] py-4 px-4 font-semibold text-black xl:pl-11">
                Name
              </th>
              <th className="min-w-[150px] py-4 px-4 font-semibold text-black">
                Location
              </th>
              <th className="min-w-[150px] py-4 px-4 font-semibold text-black">
                Satisfaction Rate
              </th>
              <th className="min-w-[150px] py-4 px-4 font-semibold text-black">
                Total patients
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, key) => (
              <tr key={key}>
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
                    className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ${
                      item.overview.satisfactionRate.slice(0,2) > 85
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
