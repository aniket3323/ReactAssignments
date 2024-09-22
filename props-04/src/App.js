import Student from './Component/Student';
import './App.css';

function App() {
  return (
    <>
      <Student name=" Aniket" age={23} isStudent={23}></Student>
      <Student name=" Vinit" age={24} isStudent={false}></Student>
      <Student name=" Sakshi" age={22} isStudent={true}></Student>
      <Student name=" Saee" age={22} isStudent={false}></Student>
      <Student></Student>
    </>
  );
}

export default App;
