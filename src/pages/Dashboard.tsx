import { useEffect, useState } from 'react';
import { useData } from '../context/DataContext'
import { useParams } from 'react-router-dom';

import CardDataStats from '../components/CardDataStats';
import AreaHospitalizations from '../components/Charts/AreaHospitalizations';
import PieDepartments from '../components/Charts/PieDepartments';
import BarSpecialtyRate from '../components/Charts/BarSpecialtyRate';
import PieSpecialities from '../components/Charts/PieSpecialities';
import ClinicalTrials from '../components/Tables/ClinicalTrials';
import HospitalList from '../components/Tables/HospitalList';

import { HospitalIcon, NotesIcon, PeopleIcon } from '../icons';
import { DoctorIcon } from '../icons';
import { NurseIcon } from '../icons';

import { Data } from '../types/hospitalData';

const Dashboard = () => {
  const data: Data[] | null = useData()
  const { id } = useParams();

  const [hospitalData, setHospitalData] = useState<Data | null>(null);
  const [overviewData, setOverviewData] = useState<any>(null);

  useEffect(() => {
    if (data) {
      if (id) {
        const selectedHospital = data.find(hospital => hospital.id === parseInt(id))
        setHospitalData(selectedHospital || null)
      } else {
        const totalDoctors = data.reduce((acc, hospital) => acc + hospital.overview.numberOfDoctors, 0)
        const totalNurses = data.reduce((acc, hospital) => acc + hospital.overview.numberOfNurses, 0)
        const totalTreatments = data.reduce((acc, hospital) => acc + hospital.overview.totalTreatments, 0)
        const totalPatients = data.reduce((acc, hospital) => acc + hospital.overview.totalPatients, 0)

        setOverviewData({
          totalDoctors,
          totalNurses,
          totalTreatments,
          totalPatients,
        })
        setHospitalData(null)
      }
    }
  }, [id, data])

  if (!hospitalData && !overviewData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className='mt-6 flex flex-row gap-2 h-full items-center mb-6'>
        <HospitalIcon />
        <h2 className="text-3xl font-semibold text-black ">{hospitalData ? hospitalData.name : "All hospitals"}</h2>
      </div>

      {/* Overview stats */}
      {hospitalData && <h3 className="text-xl font-medium text-bodydark ml-1 mb-2">Overview</h3>}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardDataStats title="Total doctors" total={hospitalData ? hospitalData?.overview.numberOfDoctors : overviewData.totalDoctors}>
          <DoctorIcon />
        </CardDataStats>

        <CardDataStats title="Total nurses" total={hospitalData ? hospitalData?.overview.numberOfNurses : overviewData.totalNurses}>
          <NurseIcon />
        </CardDataStats>

        <CardDataStats title="Total treatments" total={hospitalData ? hospitalData?.overview.totalTreatments : overviewData.totalTreatments}>
          <NotesIcon />
        </CardDataStats>

        <CardDataStats title="Total patients" total={hospitalData ? hospitalData?.overview.totalPatients : overviewData.totalPatients}>
          <PeopleIcon />
        </CardDataStats>
      </div>

      {/* Dashboard by hospital */}
      {hospitalData && id ?
        <>
          <h3 className="text-xl font-medium text-bodydark ml-1 mt-8">Hospitalizations</h3>

          <div className="grid grid-cols-12 gap-4 md:gap-6 mt-3 2xl:gap-7.5">
            <AreaHospitalizations data={hospitalData?.monthlyHospitalizations} />
            <PieDepartments data={hospitalData?.hospitalDepartments} />
          </div>
          <h3 className="text-xl font-medium text-bodydark ml-1 mt-8">Specialties</h3>
          <div className="grid grid-cols-12 gap-4 md:gap-6 mt-3 2xl:gap-7.5">

            <PieSpecialities data={hospitalData?.doctorSpecialties} />
            <BarSpecialtyRate data={hospitalData?.doctorSpecialties} />

            <div className="col-span-12 xl:col-span-18">
              <h3 className="text-xl font-medium text-bodydark ml-1 my-2">Clinical Trials</h3>

              <ClinicalTrials data={hospitalData?.clinicalTrials} />
            </div>
          </div>
        </>
        :
        //  Dashboard for all hospitals
        <div className="col-span-12 xl:col-span-18 mt-8">
          <HospitalList data={data} />
        </div>
      }
    </>
  );
};

export default Dashboard;
