import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const SinglePropertyPage = lazy(() =>
  import("./Pages/SingleProperty/SinglePropertyPage")
);

const App = () => {
  return (
    <Suspense fallback={<></>}>
      <Routes>
        <Route path="/" element={<SinglePropertyPage />} />
      </Routes>
    </Suspense>
  );
};

export default App;
