import React,{useEffect,useState} from 'react';
import './App.css';

function App() {

  const [log,setLog] = useState([]);
    const [items,setItems] = useState([]);
  const [id, setId] = useState("179571326");
  // temporalmente le paso el ID con el numero
  
  useEffect(()=> {
    searchForPublishedItemsById();
   }, [])

  useEffect(()=> {
   searchForPublishedItemsById();
  }, [id])

  
   const searchForPublishedItemsById = ()=>{
 
   
    fetch(`https://api.mercadolibre.com/sites/MLA/search?seller_id=${id}`)
    .then(res => res.json())
    .then(
      (result) => {
        setItems(
          items =>[
            result.results
        
          ]
        );
              items.map(e=>{

                  let itemToLog = {
                 "id": e.id,
                 "title": e.title,
                 "category_id": e.category_id ,
                 "name": e.domain_id

                 
                }
              
                setLog(log=>[...log, itemToLog])
           

      })},
    
      
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      });

     

           
           
        }
        
    
    
   
  
    


    return (
      <div className="App">
       
        <ul>
          {log.map(e=>{
            return (
              <li key={e.id}>
            <div>
              <span>
              <label> Id: </label> {e.id}
              </span>
              <span>
              <label> Title</label> {e.title}
              </span>
              <span>
              <label> Category Id</label>{e.category_id}
              </span>
              <span>
              <label> Category Name</label>{e.name}
              </span>
            </div>        
          </li>
                    )
          })} 
           </ul>
      </div>
    );

  
  
}

export default App;
