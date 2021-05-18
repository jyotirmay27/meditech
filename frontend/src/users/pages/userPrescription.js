import React, {useEffect,useContext, useState} from 'react';
import { useParams } from 'react-router-dom';
import { useHttpClient } from '../../shared/hooks/useHttpClient';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import PrescriptionList from './prescriptionList';
import { AuthContext } from '../../shared/util/AuthContext';

const UserPrescription = () =>{
  const auth = useContext(AuthContext);
const { isLoading, error, sendRequest, clearError } = useHttpClient();

const [ loadedpres, setLoadedPres] = useState();
const userId= auth.userId;

useEffect(()=> {
  const fetchPlaces = async() =>{
    try{
      const responseData = await sendRequest(
      `http://localhost:5000/api/places/users/${userId}/prescription`
      );
      setLoadedPres(responseData.Prescriptions);
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
  {!isLoading &&loadedpres && <PrescriptionList items={loadedpres}  />}
  </React.Fragment>
  );
  

};
export default UserPrescription;