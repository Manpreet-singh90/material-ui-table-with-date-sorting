import './App.css';
import DataTable from './mui-table'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import MDTable from './table'

let columns = [
  { Header: "Name", accessor: "name",  align: "left", dataSorted: true },
  { Header: "Label", accessor: "label", align: "left", dataSorted: true },
  { Header: "Value", accessor: "value", align: "left", dataSorted: true },
  { Header: "Version", accessor: "version", align: "center", dataSorted: true },
  { Header: "Status", accessor: "status", align: "center", dataSorted: false },
  { Header: "Created At", accessor: "Created_at", align: "center", dataSorted: true },
]

let rows= [
  {
    // name: <Author image={team2} name="John Michael" email="john@yopmail.com" />,
    // function: <Job title="Manager" description="Organization" />,
    name:(
      <Typography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        test Michael
      </Typography>
    ),
    label:(
      <Typography component="a" href="#" variant="caption" color="text" fontWeight="medium">
         Michael John
      </Typography>
    ),
    value:(
      <Typography component="a" href="#" variant="caption" color="text" fontWeight="medium">
         02
      </Typography>
    ),
    version: (
      <Box ml={-1}>
        <Badge badgeContent={100} color="secondary" />
      </Box>
    ),
    Created_at: (
      <Typography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        02/04/22
      </Typography>
    ),
    status: (
      <Typography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        Edit
      </Typography>
    ),
  }, {
    // name: <Author image={team2} name="John Michael" email="john@yopmail.com" />,
    // function: <Job title="Manager" description="Organization" />,
    name:(
      <Typography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        xyz test 
      </Typography>
    ),
    label:(
      <Typography component="a" href="#" variant="caption" color="text" fontWeight="medium">
         John Kalis
      </Typography>
    ),
    value:(
      <Typography component="a" href="#" variant="caption" color="text" fontWeight="medium">
         45
      </Typography>
    ),
    version: (
      <Box ml={-1}>
        <Badge badgeContent={20} color="secondary" />
      </Box>
    ),
    Created_at: (
      <Typography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        22/09/98
      </Typography>
    ),
    status: (
      <Typography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        Edit
      </Typography>
    ),
  },
  {
    // name: <Author image={team3} name="Alexa Liras" email="alexa@yopmail.com" />,
    // function: <Job title="Programator" description="Developer" />,
    name:(
      <Typography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        Alexa Liras
      </Typography>
    ),
    label:(
      <Typography component="a" href="#" variant="caption" color="text" fontWeight="medium">
       Wade
      </Typography>
    ),
    value:(
      <Typography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        5
      </Typography>
    ),
    version: (
      <Box ml={-1}>        
        <Badge badgeContent={45} color="secondary" />
      </Box>
    ),
    Created_at: (
      <Typography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        11/01/19
      </Typography>
    ),
    status: (
      <Typography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        Delete
      </Typography>
    ),
  }, {
    // name: <Author image={team2} name="John Michael" email="john@yopmail.com" />,
    // function: <Job title="Manager" description="Organization" />,
    name:(
      <Typography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        Oliver jake
      </Typography>
    ),
    label:(
      <Typography component="a" href="#" variant="caption" color="text" fontWeight="medium">
         Harry Callum
      </Typography>
    ),
    value:(
      <Typography component="a" href="#" variant="caption" color="text" fontWeight="medium">
         02
      </Typography>
    ),
    version: (
      <Box ml={-1}>
        <Badge badgeContent={33} color="secondary" />
      </Box>
    ),
    Created_at: (
      <Typography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        12/09/12
      </Typography>
    ),
    status: (
      <Typography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        Edit
      </Typography>
    ),
  },
]

function App() {
 
  const rows = [
    {name:"Marielia", calories: 1,cdate: "2022-14-10T16:00:00.000Z", fat: 10, carbs: 233, protein: 45 },
    {name:"Devin", calories: 93,cdate: "2023-25-12T16:00:00.000Z", fat: 10, carbs: 3.3, protein: 5 },
    {name:"TAmara", calories: 15,cdate: "2001-02-11T16:00:00.000Z", fat: 10, carbs: 56, protein: 0.5 },
    {name:"Uchenna", calories: 18,cdate: "1621-19-09T16:00:00.000Z", fat: 10, carbs: 96.0, protein: 15.45 },
    {name:"Ethan", calories: 51,cdate: "1721-12-04T16:00:00.000Z", fat: 10, carbs: 355, protein: 45.5 },
    {name:"Moshe", calories: 21,cdate: "2031-28-06T16:00:00.000Z", fat: 10, carbs: 33, protein: 454 },
    {name:"Cathenna", calories: 81,cdate: "1021-13-02T16:00:00.000Z", fat: 10, carbs: 0.2, protein: 25 },
  
  ]

  

  return (
    <div className="App">
    <p>Custom Table(Need to instal react-table NPM package)</p>
    {/* <DataTable 
     tableHeading={columns} tableData={rows}
      // isSorted={true}
      // entriesPerPage={true}
      // showTotalEntries={true}
      noEndBorder
      /> */}

      {/* /*
      *
      */
      }
      <MDTable />
    </div>
  );
}

export default App;
