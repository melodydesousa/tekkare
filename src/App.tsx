import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Loader from './common/Loader';
import Dashboard from './pages/Dashboard';
import DefaultLayout from './layout/DefaultLayout';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <DefaultLayout>
      <Routes>
        {/* dynamic route by id */}
        <Route
          path="/hospital/:id"
          element={<Dashboard />}
        />
        {/* default route */}
        <Route path="/" element={<Dashboard/>} />
      </Routes>
    </DefaultLayout>
  );
}

export default App;
