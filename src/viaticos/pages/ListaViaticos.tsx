import { ViaticosLayout } from "../layout/ViaticosLayout";
import moment from "moment";
import DataTable, {createTheme} from "react-data-table-component";
import 'styled-components';
import React, {useState, useEffect} from "react";

export const ListaViaticos = () => {
  // 1.- Configurar los hooks
  const [users, setUsers] = useState ( [] )

  // 2.- Función para mostrar los datos con fetch
  const URL = 'http://172.31.74.243:7280/api-viaticos/Viaticos/lista-viaticos-empleado/ejercicio/empleado?ejercicio=2022&empleado=7161'
  const showData = async() => {
    const response = await fetch(URL) 
    const data = await response.json()
    console.log(data)
    setUsers(data)
  }

  useEffect( ()=> {
    showData()
  }, [])

  const handleButtonClick = () => {
		
		console.log('clicked');
	};
  // 3.- COnfiguramos los columns para Datatable 

  const columns = [
    
    {
      name: 'Acciones',
			cell: (row: any) => <button className="btn btn-primary" 
                                  onClick={() => alert(row.viatico)}>
                            Editar
                          </button>,
      //ignoreRowClick: true,
      //allowOverflow: true,
      button: true,
    },
    { 
      name: 'No. Viático',
      selector: (row: any)=>  row.viatico,
      sortable: true,
    },
    { 
      name: 'Fecha',
      selector: (row: any)=>  moment(row.fecha).format('DD/MM/YYYY'),
      sortable: true,
    },
    { 
      name: 'Origen',
      selector: (row: any)=>  row.origen,
      sortable: true,
    },
    { 
      name: 'Destino',
      selector: (row: any)=>  row.destino,
      sortable: true,
    },
    { 
      name: 'Motivo',
      selector: (row: any)=>  row.movito,
      grow: 3
    },
    { 
      name: 'Salida',
      selector: (row: any)=>  moment(row.fechaSal).format('DD/MM/YYYY'),
      sortable: true,
    },
    { 
      name: 'Regreso',
      selector: (row: any)=>  moment(row.fechaReg).format('DD/MM/YYYY'),
      sortable: true,
    },
    { 
      name: 'Estatus',
      selector: (row: any)=>  row.estatus,
      sortable: true,
    },
  ]

// Formato custom al datatable

// createTheme creates a new theme named solarized that overrides the build in dark theme

const customStyles = {
  rows: {
      style: {
          minHeight: '50px', // override the row height
      },
  },
  headCells: {
      style: {
          paddingLeft: '8px', // override the cell padding for head cells
          paddingRight: '8px',
      },
  },
  cells: {
      style: {
          paddingLeft: '4px', // override the cell padding for data cells
          paddingRight: '4px',
      },
  },
};

const paginacionOpciones ={
  rowsPerPageText: 'Registros por Página',
  rangeSeparatorText: 'de',
  selectAllRowsItem: true,
  selectAllRowsItemText: 'Todos'
}
  // 4.- Mostramos la data en Datatable

  return (
    <ViaticosLayout>
       <h3>Listado de Viáticos</h3>
       <div className="table-responsive">
       <DataTable
          columns={columns}
          customStyles={customStyles}
          data = {users}
          defaultSortFieldId={1}
          pagination
          paginationComponentOptions={paginacionOpciones}
          fixedHeader
          fixedHeaderScrollHeight="600px"
       />
       </div>
    </ViaticosLayout>
  )
}
