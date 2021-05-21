import React, {useEffect,useContext, useState} from 'react';
import { useParams } from 'react-router-dom';
import { useHttpClient } from '../shared/hooks/useHttpClient';
import ErrorModal from '../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../shared/components/UIElements/LoadingSpinner';
import VitalList from './vitalsList';
import { AuthContext } from '../shared/util/AuthContext';
import '../css/pat.css';
const PatientVitals = () =>{
    const auth = useContext(AuthContext);
const { isLoading, error, sendRequest, clearError } = useHttpClient();

const [ loadedvital, setLoadedVital] = useState();
const userId= useParams().patID;

useEffect(()=> {
  const fetchPlaces = async() =>{
    try{
      const responseData = await sendRequest(
      `http://localhost:5000/api/places/users/${userId}/vitals`
      );
      console.log(responseData.vitals);
      setLoadedVital(responseData.vitals);
    }
    catch(err)
    {}
  };
    fetchPlaces();
  
}, [sendRequest, userId]);





return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      <div className="BGGradient">
     {isLoading && (<div className="center">  <LoadingSpinner  /></div>)}
  {!isLoading &&loadedvital && <VitalList items={loadedvital}  />}
  </div>
  </React.Fragment>
  );
  

};
export default PatientVitals;