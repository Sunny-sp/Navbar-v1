import axios from 'axios';
import { useState,useEffect } from 'react';
const Employee = ()=>{
    const [employees,setEmployees]=useState([]);
    const [loading,setLoading] = useState(true);
    //useEffect will call API only once since 2nd parm is []
    useEffect(()=>{
        console.log("--------useEffect------");
        axios.get('https://universities.hipolabs.com/search?country=United+Kingdom').then((emp)=>{
            setEmployees(emp.data)
            setLoading(false)
    }).catch(error=>{
        console.log(error)
    });
    },[]);
    function handleDelete(name){
        setEmployees(employees.filter(emp=>emp.name!==name));
    } 
        if(loading){
            return(
                <h2 style={{textAlign:'center'}}>Loading...</h2>
            )
        }
    return(
        <table style={{margin:10}}>
            <thead>
                <tr>
                    <td>Country</td>
                    <td>Name</td>
                    <td>Domains</td>
                    <td>Alpha_two_code</td>
                    <td>Delete</td>
                </tr>
            </thead>
            <tbody>
                {employees.map(({country,name,domains,alpha_two_code})=>(
                        <tr>
                        <td>{country}</td>
                        <td>{name}</td>
                        <td>{domains}</td>
                        <td>{alpha_two_code}</td>
                        <td>
                            <button onClick={()=>handleDelete(name)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
export default Employee