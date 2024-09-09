import { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../images/logo/logo.svg';
import { useData } from '../../context/DataContext';

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen }: SidebarProps) => {

  const data = useData()
  const [searchedHospital, setSearchedHospital] = useState(data)
  const sidebar = useRef<any>(null);

  const handleSearch = (e) => {
    const res = data?.filter((h) => h.name.toLowerCase().includes(e.target.value.toLowerCase()))
    setSearchedHospital(res)
  }

  console.log(searchedHospital)

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-[#2000ad] duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
          <img src={Logo} alt="Logo" />
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        {/* <!-- Sidebar Menu --> */}
        <nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-6">
          {/* <!-- Menu Group --> */}
          <div>

            <ul className="mb-6 flex flex-col gap-1.5">

              <>

                <ul className="mt-4 mb-5.5 flex flex-col gap-2.5">
                  <div className="hidden sm:block mb-4">
                    <form onChange={(e) => handleSearch(e)}>
                      <div className="relative">
                        <button className="absolute left-0 px-2 top-1/2 -translate-y-1/2 py-2">
                          <svg
                            className="fill-body hover:fill-primary dark:fill-bodydark dark:hover:fill-primary"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M9.16666 3.33332C5.945 3.33332 3.33332 5.945 3.33332 9.16666C3.33332 12.3883 5.945 15 9.16666 15C12.3883 15 15 12.3883 15 9.16666C15 5.945 12.3883 3.33332 9.16666 3.33332ZM1.66666 9.16666C1.66666 5.02452 5.02452 1.66666 9.16666 1.66666C13.3088 1.66666 16.6667 5.02452 16.6667 9.16666C16.6667 13.3088 13.3088 16.6667 9.16666 16.6667C5.02452 16.6667 1.66666 13.3088 1.66666 9.16666Z"
                              fill=""
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M13.2857 13.2857C13.6112 12.9603 14.1388 12.9603 14.4642 13.2857L18.0892 16.9107C18.4147 17.2362 18.4147 17.7638 18.0892 18.0892C17.7638 18.4147 17.2362 18.4147 16.9107 18.0892L13.2857 14.4642C12.9603 14.1388 12.9603 13.6112 13.2857 13.2857Z"
                              fill=""
                            />
                          </svg>
                        </button>

                        <input
                          type="text"
                          placeholder="Search for a hospital"
                          className="w-full bg-white rounded-xl px-4 py-4 pl-9 pr-4 text-black focus:outline-none dark:text-white"
                        />
                      </div>
                    </form>
                  </div>
                  {searchedHospital &&
                    searchedHospital.map((hospital) => (
                      <li key={hospital.id}>
                        <NavLink
                          to={`/hospital/${hospital.id}`}
                          className={({ isActive }) =>
                            'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                            (isActive && '!text-white')
                          }
                        >
                          {hospital.name}
                        </NavLink>
                      </li>
                    ))}
                </ul>
              </>
            </ul>
          </div>


        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  );
};

export default Sidebar;
