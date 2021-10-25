import React from 'react';
import {useState} from "react";

export default function Form({setEmployees}) {

    const initialEmployeesState = {
        name:"",
        lastName:""
    }

    const [form, setForm] = useState(initialEmployeesState)

    function handleInput(e) {
        const inputName = e.target.id;
        const newValue = e.target.value;

        setForm({...form, ...{[inputName]: newValue}})
    }

    function submit(e) {
        e.preventDefault();

        const newEmployee = {
            name:  form.name,
            lastName:  form.lastName
        };

        setEmployees(currentEmployees => [...currentEmployees, newEmployee]);
     
        setForm(initialEmployeesState)
  
    }

    return (
    <form className="form-group" onSubmit={submit}>
        <input id="name"        value={form.name}        onChange={handleInput} className="form-control mb-3" type="text" placeholder="Introduce un nombre"/>
        <input id="lastName"    value={form.lastName}    onChange={handleInput} className="form-control mb-3" type="text" placeholder="Introduce los apellidos"/>
        <input type="submit" class="btn btn-success" value="Registrar"/>
    </form>
    )
}
