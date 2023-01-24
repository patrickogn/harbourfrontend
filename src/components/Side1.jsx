import React, {useEffect, useState} from 'react';
import facade from "../apiFacade.js";


function Side1({setErrorMessage}) {

  const [allOwners, setAllOwners] = useState([]);
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    facade.fetchData("owner/all", data=> setAllOwners(data), setErrorMessage);
}, [])

const assignToConference = (e) => {
  setToggle(!toggle)
}

  return (
    <div style={{padding: 30}} className='column middle'>
    <h2>Owner list</h2>

    <br/>

    <table className="table">
        <thead>
        <tr>
            <th scope="col"></th>
            <th scope="col">name</th>
            <th scope="col">adress</th>
            <th scope="col">phone</th>
        </tr>
        </thead>
        <tbody>
        {allOwners.map((owner, i) =>(
            <tr key={owner.id}>
                <th scope="row" >{i+1}</th>
                <td>{owner.name}</td>
                <td>{owner.adress}</td>
                <td>{owner.phone}</td>
            </tr>
        ))}
        </tbody>
    </table>
</div>
  );
}

export default Side1

