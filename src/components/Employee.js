export default function Employee({employees, setEmployees}) {
     
    return (
        <div className="row">
        {employees.map((employee, index) => {
            return (
                <ul className="list-group mb-3 col-12 col-sm-6 col-xl-3" key={employee.phone}>
                    <li className="list-group-item active">Empleado {index + 1}</li>
                    <li className="list-group-item">{employee.name}</li>
                    <li className="list-group-item">{employee.lastName}</li>
                </ul>
            )
        })}
    </div>
    )
}
