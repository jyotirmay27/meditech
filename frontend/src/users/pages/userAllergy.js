import React, {useEffect,useContext, useState} from 'react';
import { useParams } from 'react-router-dom';
import { useHttpClient } from '../../shared/hooks/useHttpClient';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import AllergyList from './allergyList';
import { AuthContext } from '../../shared/util/AuthContext';
const UserAllergy = () =>{
    const auth = useContext(AuthContext);
const { isLoading, error, sendRequest, clearError } = useHttpClient();
 
const [ loadedAllergy, setLoadedAllergy] = useState();
const userId= auth.userId;

useEffect(()=> {
  const fetchPlaces = async() =>{
    try{
        const responseData = await sendRequest(
            `http://localhost:5000/api/places/users/${userId}/allergies`
            );
            setLoadedAllergy(responseData.allergies);
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
  {!isLoading &&loadedAllergy && <AllergyList items={loadedAllergy}  />}
  </React.Fragment>
  );
  

};
export default UserAllergy ;