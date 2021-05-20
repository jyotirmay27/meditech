import React, { useEffect, useState,useContext } from 'react';
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import DocList from './doctors';
import { useHttpClient } from '../../shared/hooks/useHttpClient';
import { AuthContext } from '../../shared/util/AuthContext';
import "../../css/DoctorList.css";

const Doctors = () =>{
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [loadedDoctors, setLoadedDoctors] = useState();
    
    useEffect(() => {
      const fetchUsers = async () => {
   
        try {
          const responseData = await sendRequest('http://localhost:5000/api/doctors/all');
  
  
          setLoadedDoctors(responseData.doctors);
        } catch (err) {
  console.log(err);
        }
      };
      fetchUsers();
    }, [sendRequest]);



  return (
    <React.Fragment>
              <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
    <>
    <div className="DoctorListHeading">Doctors List</div>
    {!isLoading &&loadedDoctors && 
    <div className="BGGradDoctorList">
    <DocList items={loadedDoctors} />
    </div>}
    </>
    </React.Fragment>
         
  );
};


export default Doctors;



