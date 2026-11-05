
import logo from './logo.svg';
import './App.css';

function Student(props) {
  return (
    <div className="student-info">
      <h3>Student ID: {props.studentId}</h3>
      <h4>Student Name: {props.studentName}</h4>
      <h5>George Brown College, Toronto</h5>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <img src={logo} className="React-logo" alt="React Logo" />

      <h1>Welcome to Fullstack Development - 1</h1>

      <h2>React JS Programming Week09 Lab exercice</h2>

      <Student
        studentId="101579629"
        studentName="Mohamed Amine OUATAR"
      />
    </div>
  );
}

export default App;
