import { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../images/logo.svg';
import { SearchIcon } from '../../icons';
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

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-[#2000ad] duration-300 ease-linear lg:static lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
    >
      <div className="flex items-center justify-between gap-2 px-10 mt-6 py-5.5 lg:py-6.5">
          <NavLink to={'/'} ><img src={Logo} alt="Logo" /></NavLink>
      </div>

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        <nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-6">
          <div>
            <ul className="mb-6 flex flex-col gap-1.5">
              <>
                <ul className="mt-4 mb-5.5 flex flex-col gap-2.5">
                  <div className="hidden sm:block mb-4">
                    <form onChange={(e) => handleSearch(e)}>
                      <div className="relative">
                        <button className="absolute left-0 px-2 top-1/2 -translate-y-1/2 py-2">
                          <SearchIcon/>
                        </button>

                        <input
                          type="text"
                          placeholder="Search for a hospital"
                          className="w-full bg-white rounded-xl px-4 py-4 pl-9 pr-4 text-black focus:outline-none"
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
      </div>
    </aside>
  );
};

export default Sidebar;
