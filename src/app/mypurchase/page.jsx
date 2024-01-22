'use client';
import React, { useEffect, useState } from 'react';
import { UserAuth } from '@/app/context/AuthContext';
import Spinner from '@/components/Spinner';


// You must eb logged in to view this page - protected route

const page = () => {
  const { user } = UserAuth();
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);

  return (
    <div>
      {loading ?
        <div className="flex justify-center items-center h-screen">
          <Spinner></Spinner>
        </div> : user ? (<p>Welcome,{user.displayName}</p>) : (<p>You must eb logged in to view this page</p>)}

    </div>
  )
}

export default page