import {useState} from "react";
import './App.css';
import Form from "./components/Form";
import Employee from "./components/Employee";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function App() {

  const initialEmployeesState = [
    {name: "Fran", lastName: "Gómez Fernández"},
    {name: "Lucía", lastName: "García Ruíz"},
    {name: "María", lastName: "Núñez Coronado"},
  ];

  const [employees, setEmployees] = useState(initialEmployeesState);

  const [selectedDate, setselectedDate] = useState(null);

  return (
    <div className="container">
        <h2 className="my-4">Empleados</h2>
        <Employee employees={employees} setEmployees={setEmployees}/>
        <h2 className="my-4">Nuevo empleado</h2>
        <Form setEmployees={setEmployees}/>
        <DatePicker 
          selected={selectedDate} 
          onChange={date => setselectedDate(date)}
          dateFormat='dd/MM/yyyy'
          minDate='01/01/2020'
          maxDate='01/01/2020'
          filterDate={date => date.getDay() !== 6 && date.getDay() !== 0}
        />
    </div>
  );
}

export default App;
