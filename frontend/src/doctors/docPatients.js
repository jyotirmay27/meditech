import React, {useEffect,useContext, useState} from 'react';
import { useParams } from 'react-router-dom';
import { useHttpClient } from '../shared/hooks/useHttpClient';
import ErrorModal from '../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../shared/components/UIElements/LoadingSpinner';
import PatientList from './patientList';
import { AuthContext } from '../shared/util/AuthContext';
const DocPatients = () =>{
    const auth = useContext(AuthContext);
const { isLoading, error, sendRequest, clearError } = useHttpClient();

const [ loadeddoc, setLoadedDoc] = useState();
const userId= auth.userId;

useEffect(()=> {
  const fetchPlaces = async() =>{
    try{
      const responseData = await sendRequest(
      `http://localhost:5000/api/doctors/${userId}/yourPatients`
      );
      
      setLoadedDoc(responseData.doctor);
    }
    catch(err)
    {}
  };
    fetchPlaces();
  
}, [sendRequest, userId]);





return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
     {isLoading && (<div className="center">  <LoadingSpinner  /></div>)}
  {!isLoading &&loadeddoc && <PatientList items={loadeddoc}  />}
  </React.Fragment>
  );
  

};
export default DocPatients;