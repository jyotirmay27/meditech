import React, { useEffect, useState,useContext } from 'react';
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import DocList from './doctors';
import { useHttpClient } from '../../shared/hooks/useHttpClient';
import { AuthContext } from '../../shared/util/AuthContext';
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
    <Card
        bg="info"
        style={{
            width: "auto",
            textAlign: "center",
            fontSize: "4rem",
            fontFamily: "Lucida Calligraphy",
        }}
    >
        Doctors List
    </Card>
    {!isLoading &&loadedDoctors && <DocList items={loadedDoctors} />}
    </>
    </React.Fragment>
         
  );
};


export default Doctors;



