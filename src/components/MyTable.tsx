import { useMemo, useState, useEffect } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';
import { getPersons } from '../api/Persons';

//data must be stable reference (useState, useMemo, useQuery, defined outside of component, etc.)
// const data = [
//   {
//     name: 'John',
//     age: 30,
//   },
//   {
//     name: 'Sara',
//     age: 25,
//   },
// ];

// const columns = [
//   {
//     accessor: 'age',
//     header: 'Age',
//     muiEditTextFieldProps: ({ cell, row, table }) => ({
//       onBlur: (event) => {
//         //validate data
//         //save data to api and/or rerender table
//         // table.setEditingCell(null) is called automatically onBlur internally
//       },
//     }),
//   },
// ];

export default function MyTable() {
  const [persons, setPersons] = useState([]);
  let data = persons;
  getPersons().then((res) => {
    console.log('setting ', res);
    setPersons(res);
  });
  const columns = useMemo(
    () => [
      {
        accessorKey: 'name', //simple recommended way to define a column
        header: 'Name',
      },
      {
        accessorKey: 'age', //alternate way
        header: 'Age',

        muiEditTextFieldProps: ({ cell, row, table }) => ({
          onBlur: (event) => {
            //validate data
            //save data to api and/or rerender table
            // table.setEditingCell(null) is called automatically onBlur internally
          },
        }),
      },
    ],
    []
  );

  //optionally, you can manage any/all of the table state yourself
  const [rowSelection, setRowSelection] = useState({});

  useEffect(() => {
    //do something when the row selection changes
  }, [rowSelection]);
  console.log('persons ', persons);
  const table = useMaterialReactTable({
    columns,
    data,
    enableEditing: true,
    editDisplayMode: 'cell',
    enableColumnOrdering: true, //enable some features
    enableRowSelection: true,
    enablePagination: false, //disable a default feature
    onRowSelectionChange: setRowSelection, //hoist internal state to your own state (optional)
    state: { rowSelection }, //manage your own state, pass it back to the table (optional)
  });

  const someEventHandler = () => {
    //read the table state during an event from the table instance
    console.log(table.getState().sorting);
  };

  return (
    <MaterialReactTable table={table} /> //other more lightweight MRT sub components also available
  );
}
