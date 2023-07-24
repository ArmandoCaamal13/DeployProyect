
const Ventas = () => {
    const ventas = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
        <>
            <div className="container-fluid d-flex align-items-center justify-content-between h-100 py-3 px-4">
                <h3>Listado de ventas</h3>
                {/* <button className="btn btn-primary">Agregar producto</button> */}
            </div>
            <table className="table align-middle">
                <thead>
                    <tr>
                        <th scope="col" className="py-2 px-4">
                            Folio
                        </th>
                        <th scope="col" className="py-2 px-4">
                            Fecha
                        </th>
                        <th scope="col" className="py-2 px-4">
                            Total
                        </th>
                        <th scope="col" className="py-2 px-4">
                            Completada
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {ventas.map((venta, index) => (
                        <tr key={index}>
                            <td className="py-3 px-4">xxxXxxx</td>
                            <td className="py-3 px-4">
                                {new Date().toLocaleDateString()}
                            </td>
                            <td className="py-3 px-4">$0.00</td>
                            <td className="py-3 px-4">NO</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default Ventas;
