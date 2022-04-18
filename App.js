import { useEffect, useState } from 'react';
import {db} from './firebase-config';
import {collection,getDocs,addDoc,updateDoc,doc,deleteDoc} from 'firebase/firestore';
import { async } from '@firebase/util';

function App() {
  const [users,setUsers]=useState([]);
  const [newName,setNewName]=useState("");
  const [newAge,setNewAge]=useState(0);
  const usersCollectionRef = collection(db,"users");
  const createUser = async ()=>{
    await addDoc(usersCollectionRef,{name: newName, age: Number(newAge)});

  }
  const updateUser =async (id,age)=>{
    const userDoc = doc(db,"users",id);
    const newFields = {age: age+1}
    await updateDoc(userDoc,newFields);

  }

  const deleteUser=async (id)=>{
    const userDoc = doc(db,"users",id);
    await deleteDoc(userDoc);

  }
  useEffect(()=>{
   const getUsers = async ()=>{
           const data = await getDocs(usersCollectionRef);
           setUsers(data.docs.map((doc)=>({...doc.data(), id:doc.id})));

   }
    getUsers()
      
  },[])
  return (
    <div className="App">
    <input placeholder='Name...' onChange={(event)=>{setNewName(event.target.value);}}/>
    <input type="number" placeholder='Age...' onChange={(event)=>{setNewAge(event.target.value);}}/>
    <button onClick={createUser}>Create user</button>
{
users.map((user)=>{
return(
<div>
<h1>Name: {user.name}</h1>
<h1>Age: {user.age}</h1>
<button onClick={()=>{updateUser(user.id,user.age)}}>Increase Age</button>
<button onClick={()=>{deleteUser(user.id)}}>Delete user</button>
</div>

);

})

}

    </div>
  )
}

export default App;
