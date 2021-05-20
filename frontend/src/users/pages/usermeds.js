import React, {useEffect,useContext, useState} from 'react';
import { useParams } from 'react-router-dom';
import { useHttpClient } from '../../shared/hooks/useHttpClient';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import MedList from './medlist';
import { AuthContext } from '../../shared/util/AuthContext';

const UserMeds = () =>{
  const auth = useContext(AuthContext);
const { isLoading, error, sendRequest, clearError } = useHttpClient();

const [ loadedmeds, setLoadedMeds] = useState();
const userId= auth.userId;

useEffect(()=> {
  const fetchPlaces = async() =>{
    try{
      const responseData = await sendRequest(
      `http://localhost:5000/api/places/users/${userId}/medicines`
      );
      console.log(responseData.Medicines);
      setLoadedMeds(responseData.Medicines);
    }
    catch(err)
    {}
  };
    fetchPlaces();
  
}, [sendRequest, userId]);


console.log(loadedmeds);
return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
     {isLoading && (<div className="center">  <LoadingSpinner  /></div>)}
  {!isLoading &&loadedmeds && <MedList items={loadedmeds}  />}
  </React.Fragment>
  );
  

};
export default UserMeds;