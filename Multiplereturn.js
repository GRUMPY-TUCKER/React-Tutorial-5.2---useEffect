import React, {useState, useEffect} from 'react'

const Multiplereturn = () => {
    const [users,setusers] = useState([]);
    const [isloading,setisloading] = useState(true);
    const [error,seterror] = useState(null);

    useEffect(()=>{
        async function fetchUsers(){
        try{
            const response = await fetch('https://api.github.com/users');
            const data = await response.json();
            setusers(data);
            setisloading(false);
            }
        catch(error){
            seterror(error);
            setisloading(false);
        }
        }
        fetchUsers();
    },[])
    if(isloading){
        return <p>Loading....</p>
    }
    if(error){
        return  <p>Error : {error.message}</p>
    }
  return (
    <div>
        <h1>Users List</h1>
        <ul>
            {
                users.map(user=> {
                    return <li key={user.id}>{user.login}</li>
                })
            }
        </ul>
    </div>
  )
}

export default Multiplereturn;