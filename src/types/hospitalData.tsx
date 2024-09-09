export interface Data {
    name: string;
    id: number;
    overview: {
      numberOfDoctors: string;
      numberOfNurses: string;
      totalTreatments: string;
      totalPatients: string;
    };
    monthlyHospitalizations: {
      month: string;
      value: number;
    }[];
    hospitalDepartments: {
      department: string;
      patientsPerDay: string;
      value: number;
    }[];
    doctorSpecialties: {
      specialty: string;
      satisfactionRate: number;
    }[];
    clinicalTrials: {
      trial: string;
      status: string;
      date: string;
    }[];
  } 