import Hello from './Hello';
function App(){
   let firstName ="Amit";
   let lastName ="Yadav";
   let fullName = ()=>{
    return "Amit Yadav";
   }

  return <div>
    <h2>
      My first name is {firstName} and my last name is {lastName}
    </h2>
    <h2>
      So my full name is {fullName()}
    </h2>
  </div>

}
export default App;