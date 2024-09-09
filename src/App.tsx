import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import Hospital from './pages/Dashboard/Hospital.js';
import DefaultLayout from './layout/DefaultLayout';

function App() {
  const [loading, setLoading] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <DefaultLayout>
      <Routes>
   
        {/* Route dynamique pour chaque hôpital */}
        <Route
          path="/hospital/:id"  // ':id' est un paramètre dynamique
          element={<Hospital />}
        />

        {/* Route par défaut */}
        <Route path="/" element={<Hospital/>} />
      </Routes>
    </DefaultLayout>
  );
}

export default App;
