import { useEffect, useState } from 'react';
import { useData } from '../../context/DataContext'
import { useParams } from 'react-router-dom';
import CardDataStats from '../../components/CardDataStats';
import Hospitalizations from '../../components/Charts/Hospitalizations';
import HospitalDepartments from '../../components/Charts/HospitalDepartments';
import SpecialtyRate from '../../components/Charts/SpecialtyRate';
import HospitalSpecialities from '../../components/Charts/HospitalSpecialities';
import ClinicalTrials from '../../components/Tables/ClinicalTrials';

const Hospital = () => {
  const data = useData()
  const { id } = useParams();
  const [hospitalData, setHospitalData] = useState(null);

  useEffect(() => {
    if (data) {
      const selectedHospital = data.find(hospital => hospital.id === parseInt(id));
      setHospitalData(selectedHospital);
    }
  }, [id, data]);

  if (!hospitalData) {
    return <div>Loading...</div>;
  }


  return (hospitalData &&
    <>
    <div className='flex flex-row gap-2 h-full items-center mb-6'>
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48"><g fill="currentColor"><path d="M20 20h-4v3h4zm-4 5h4v3h-4zm4 5h-4v3h4zm2-10h4v3h-4zm4 5h-4v3h4zm-4 5h4v3h-4zm10-10h-4v3h4zm-4 5h4v3h-4zm4 5h-4v3h4zm-7-15v-3h3v-2h-3V7h-2v3h-3v2h3v3z"/><path fill-rule="evenodd" d="M17 6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2h8v2h-2v34h2a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h2V8h-1V6zm0 5h-4v31h4v-4h-1v-2h16v2h-1v4h4V11h-4v5a2 2 0 0 1-2 2H19a2 2 0 0 1-2-2zm0-2h-4V8h4zm2-3h10v10H19zm4 36h-4v-4h4zm6 0v-4h-4v4zm6-33V8h-4v1z" clip-rule="evenodd"/></g></svg>
      <h2 className="text-3xl font-semibold text-black dark:text-white ">{hospitalData.name}</h2>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardDataStats title="Total doctors" total={hospitalData?.overview.numberOfDoctors}>
          <svg xmlns="http://www.w3.org/2000/svg" className="fill-primary dark:fill-white" width="32" height="32" viewBox="0 0 48 48"><g fill="fill-primary dark:fill-white" fillRule="evenodd" clipRule="evenodd"><path d="M32.263 8.356q.045.055.083.114l.001.002l.003.005l.009.015l.032.053q.044.07.119.198a32 32 0 0 1 1.656 3.267C35.058 14.06 36 16.827 36 19.463c0 2.983-2.015 4.637-3.787 5.491a11.7 11.7 0 0 1-2.776.915A7.97 7.97 0 0 1 24 27.999a7.99 7.99 0 0 1-6.257-3.013l-.046-.004a8 8 0 0 1-.649-.086a8 8 0 0 1-1.97-.606c-.73-.34-1.506-.862-2.1-1.663c-.603-.813-.978-1.859-.978-3.164c0-2.467 1.202-5.27 2.306-7.352a36 36 0 0 1 2.206-3.619l.032-.045l.012-.019l.088-.13c.075-.107.182-.25.326-.418a7.4 7.4 0 0 1 1.32-1.195C19.502 5.821 21.372 5 24.054 5c2.675 0 4.712.817 6.084 1.643c.685.413 1.204.827 1.557 1.144a8 8 0 0 1 .55.55l.01.012l.005.005zM18.237 9.512l-.048.074l-.002.002l-.008.01l-.033.048q-.046.063-.132.19a34 34 0 0 0-1.942 3.212C14.988 15.094 14 17.522 14 19.462c0 .899.25 1.522.584 1.973c.344.462.819.8 1.339 1.042c.247.115.497.206.735.277a24 24 0 0 1-.429-2.6c-.113-1.074-.146-2.265.056-3.318c.199-1.032.668-2.141 1.742-2.718c1.429-.767 3.847-1.793 5.979-2.5c1.063-.353 2.1-.642 2.929-.774c.407-.064.825-.1 1.193-.063c.288.03.885.139 1.215.68c2.68 3.869 2.72 7.414 2.041 10.003c-.196.749-.45 1.412-.712 1.976q.333-.126.672-.288c1.45-.7 2.656-1.814 2.656-3.69c0-2.222-.81-4.686-1.668-6.654a30 30 0 0 0-1.546-3.051l-.094-.159l-.024-.025l-.011-.012a6 6 0 0 0-.298-.287a8.3 8.3 0 0 0-1.252-.918C27.99 7.683 26.305 7 24.055 7c-2.244 0-3.712.679-4.606 1.315a5.4 5.4 0 0 0-.961.867a4 4 0 0 0-.246.322zM32.346 8.47l-.848.53zm-.848.53l.765-.644zM18.743 22.894l-.075-.317a23 23 0 0 1-.45-2.63c-.104-.993-.117-1.96.032-2.733c.152-.792.43-1.175.723-1.333c1.307-.702 3.616-1.685 5.663-2.364c1.026-.34 1.942-.59 2.612-.696c.253-.04.439-.055.565-.054c2.198 3.268 2.175 6.137 1.636 8.191a10 10 0 0 1-1.053 2.517a8 8 0 0 1-.565.834l-.007.009l-.021.026l-.004.004l-.001.001a1 1 0 0 0-.224.471a5.998 5.998 0 0 1-8.83-1.926M27.98 12.78l-.026-.006z" /><path d="M17.914 28.855c-.212-.422-.473-.943-.914-.842c-5.404 1.23-11 4.782-11 8.557V42h36v-5.43c0-2.974-3.472-5.808-7.587-7.48l-.014-.027l-.005-.01l-.033.016c-1.093-.44-2.231-.8-3.361-1.056c-.503-.115-1.023.577-1.25 1.01H18zm13.489 1.321q.656.181 1.301.407c.012.342-.014.745-.07 1.157a8 8 0 0 1-.272 1.26H31a1 1 0 0 0-.894.553l-1 2A1 1 0 0 0 29 36v2a1 1 0 0 0 1 1h2v-2h-1v-.764L31.618 35h2.764L35 36.236V37h-1v2h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-.106-.447l-1-2A1 1 0 0 0 35 33h-.566a11 11 0 0 0 .248-1.608c.975.46 1.881.988 2.666 1.56C39.27 34.356 40 35.668 40 36.57V40H8v-3.43c0-.903.73-2.215 2.652-3.617c.966-.705 2.119-1.343 3.355-1.871a10.2 10.2 0 0 0 .381 2.354l.008.028a3 3 0 1 0 1.956-.444l-.044-.144a8 8 0 0 1-.235-1.136a7 7 0 0 1-.07-1.171q.005-.126.015-.224q.18-.056.36-.107l.415.786h14.164zM16 37.015c.538 0 1-.44 1-1.015c0-.574-.462-1.015-1-1.015s-1 .44-1 1.015c0 .574.462 1.015 1 1.015" /></g></svg>
        </CardDataStats>

        <CardDataStats title="Total nurses" total={hospitalData?.overview.numberOfNurses}>

          <svg xmlns="http://www.w3.org/2000/svg" className="fill-primary dark:fill-white" width="32" height="32" viewBox="0 0 48 48"><g fill="fill-primary dark:fill-white"><path d="M27 13v-2h-2V9h-2v2h-2v2h2v2h2v-2z" /><path fillRule="evenodd" d="m31.32 16.767l1.978-5.606c.536-1.52-.228-3.24-1.829-3.747C29.61 6.824 26.57 6 24 6s-5.61.824-7.47 1.414c-1.6.508-2.364 2.228-1.828 3.747l1.979 5.606a8 8 0 1 0 14.639 0M24 8c-2.24 0-5.029.738-6.865 1.32c-.46.146-.73.658-.547 1.176l2.024 5.734c3.587-1.14 7.189-1.14 10.776 0l2.024-5.734c.183-.518-.087-1.03-.547-1.175C29.029 8.738 26.239 8 24 8m5.806 10.481h-.001a1 1 0 0 1-.156-.045c-3.774-1.415-7.524-1.415-11.298 0a1 1 0 0 1-.157.045a6 6 0 1 0 11.613 0" clipRule="evenodd" /><path d="M34 34h2v2h-2v2h-2v-2h-2v-2h2v-2h2z" /><path fillRule="evenodd" d="M16.879 28S6 31.393 6 35.467V42h36v-6.533C42 31.393 31.121 28 31.121 28l-5.972 4.193a2 2 0 0 1-2.298 0zm14.562 2.22l-5.142 3.61a4 4 0 0 1-4.597 0l-5.143-3.61a38 38 0 0 0-4.227 1.776c-1.296.646-2.482 1.363-3.316 2.092C8.115 34.875 8 35.343 8 35.467V40h32v-4.533c0-.124-.115-.592-1.016-1.38c-.834-.728-2.02-1.445-3.317-2.092a38 38 0 0 0-3.547-1.528q-.376-.14-.679-.248" clipRule="evenodd" /></g></svg>
        </CardDataStats>

        <CardDataStats title="Total treatments" total={hospitalData?.overview.totalTreatments}>
          <svg xmlns="http://www.w3.org/2000/svg" className="fill-primary dark:fill-white" width="32" height="32" viewBox="0 0 48 48"><g fill="fill-primary dark:fill-white"><path d="M11 30a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1m1 4a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2zm2-13v-3h2v3h3v2h-3v3h-2v-3h-3v-2z" /><path fillRule="evenodd" d="M15 6a3 3 0 0 0-3 3H9a3 3 0 0 0-3 3v27a3 3 0 0 0 3 3h20a3 3 0 0 0 3-3V12a3 3 0 0 0-3-3h-3a3 3 0 0 0-3-3zm8 6a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1zm-11-1a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3h3a1 1 0 0 1 1 1v27a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V12a1 1 0 0 1 1-1zm24 6a3 3 0 1 1 6 0v20.303l-3 4.5l-3-4.5zm3-1a1 1 0 0 0-1 1v2h2v-2a1 1 0 0 0-1-1m0 22.197l1-1.5V21h-2v15.697z" clipRule="evenodd" /></g></svg>
        </CardDataStats>
        <CardDataStats title="Total patients" total={hospitalData?.overview.totalPatients}>
          <svg
            className="fill-primary dark:fill-white"
            width="22"
            height="18"
            viewBox="0 0 22 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.18418 8.03751C9.31543 8.03751 11.0686 6.35313 11.0686 4.25626C11.0686 2.15938 9.31543 0.475006 7.18418 0.475006C5.05293 0.475006 3.2998 2.15938 3.2998 4.25626C3.2998 6.35313 5.05293 8.03751 7.18418 8.03751ZM7.18418 2.05626C8.45605 2.05626 9.52168 3.05313 9.52168 4.29063C9.52168 5.52813 8.49043 6.52501 7.18418 6.52501C5.87793 6.52501 4.84668 5.52813 4.84668 4.29063C4.84668 3.05313 5.9123 2.05626 7.18418 2.05626Z"
              fill=""
            />
            <path
              d="M15.8124 9.6875C17.6687 9.6875 19.1468 8.24375 19.1468 6.42188C19.1468 4.6 17.6343 3.15625 15.8124 3.15625C13.9905 3.15625 12.478 4.6 12.478 6.42188C12.478 8.24375 13.9905 9.6875 15.8124 9.6875ZM15.8124 4.7375C16.8093 4.7375 17.5999 5.49375 17.5999 6.45625C17.5999 7.41875 16.8093 8.175 15.8124 8.175C14.8155 8.175 14.0249 7.41875 14.0249 6.45625C14.0249 5.49375 14.8155 4.7375 15.8124 4.7375Z"
              fill=""
            />
            <path
              d="M15.9843 10.0313H15.6749C14.6437 10.0313 13.6468 10.3406 12.7874 10.8563C11.8593 9.61876 10.3812 8.79376 8.73115 8.79376H5.67178C2.85303 8.82814 0.618652 11.0625 0.618652 13.8469V16.3219C0.618652 16.975 1.13428 17.4906 1.7874 17.4906H20.2468C20.8999 17.4906 21.4499 16.9406 21.4499 16.2875V15.4625C21.4155 12.4719 18.9749 10.0313 15.9843 10.0313ZM2.16553 15.9438V13.8469C2.16553 11.9219 3.74678 10.3406 5.67178 10.3406H8.73115C10.6562 10.3406 12.2374 11.9219 12.2374 13.8469V15.9438H2.16553V15.9438ZM19.8687 15.9438H13.7499V13.8469C13.7499 13.2969 13.6468 12.7469 13.4749 12.2313C14.0937 11.7844 14.8499 11.5781 15.6405 11.5781H15.9499C18.0812 11.5781 19.8343 13.3313 19.8343 15.4625V15.9438H19.8687Z"
              fill=""
            />
          </svg>
        </CardDataStats>
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <Hospitalizations data={hospitalData?.monthlyHospitalizations} />
        <HospitalDepartments data={hospitalData?.hospitalDepartments} />
        <HospitalSpecialities data={hospitalData?.doctorSpecialties} />
        <SpecialtyRate data={hospitalData?.doctorSpecialties} />
        <div className="col-span-12 xl:col-span-18">
          <ClinicalTrials data={hospitalData?.clinicalTrials} />
        </div>
      </div>
    </>
  );
};

export default Hospital;
