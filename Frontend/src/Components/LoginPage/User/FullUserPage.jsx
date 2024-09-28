import React from 'react';
import { Outlet } from 'react-router-dom';

const FullUserPage = () => {
 
  return (
    <div className="fullUserPageContainer">
      <main>

      
      <Outlet /> 
      
      </main>
    </div>
  );
};

export default FullUserPage;