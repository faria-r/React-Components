import logo from './logo.svg';
import './App.css';
const number = 5555;
const singers = [
  {name:'Dr. Mahfuzur Rahman',job: 'singer'},
  {name:'eva Rahman', job:'singer'},
  {name:'Dr. Mahfuzur Rahman',job: 'singer'},
];
const style = {
  color:'red',
  backgroundColor:'bisque'
}
function App() {
  const Names = ['Faria','Nujairah','Arowa','Ayesha','Adil','Atif','Rahman'];
return(
  <div className="App">
    {
      Names.map(name => <li> {name} </li>)
    }
    {/* {Names.map(name => <Person name={name}></Person>)} */}
{
  singers.map(singer => <Person name={singer.name}></Person>)
}




    {/* <Person name={Names[0]} job='Engineer'></Person>
    <Person name= {Names[2]} job='Doctor'></Person>
    
    <Person></Person> */}



<h5>New Component in Code</h5>
    <Friend name='Adil Mahmud' job='Scientist'></Friend>
    
    <Friend name='Atif Mahmud' job='Engineeer'></Friend>
  </div>
)
}

function Person(props){
  // console.log(props)
return (
<div className='person'>
<h1>{props.name}</h1>
<p>{props.job}</p>
</div>
)
}
function Friend(props){
  return(
    <div className='container'>
      <h3>{props.name}</h3>
      <p>{props.job}</p>
    </div>
  )
}

export default App;
