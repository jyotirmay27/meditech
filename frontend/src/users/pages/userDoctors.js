import React, {useEffect,useContext, useState} from 'react';
import { useParams } from 'react-router-dom';
import { useHttpClient } from '../../shared/hooks/useHttpClient';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import DocList from './doclist';
import { AuthContext } from '../../shared/util/AuthContext';

const UserDoctors = () =>{
    const auth = useContext(AuthContext);
const { isLoading, error, sendRequest, clearError } = useHttpClient();

const [ loadeddoc, setLoadedDoc] = useState();
const userId= auth.userId;

useEffect(()=> {
  const fetchPlaces = async() =>{
    try{
      const responseData = await sendRequest(
      `http://localhost:5000/api/places/users/${userId}/yourdoctors`
      );
      setLoadedDoc(responseData.User);
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
  {!isLoading &&loadeddoc && <DocList items={loadeddoc}  />}
  </React.Fragment>
  );
  

};
export default UserDoctors;