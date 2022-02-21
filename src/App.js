import { useEffect, useState } from 'react';
import { DadoIcon, LineWebIcon, LineMobileIcon } from './components/Icons'
import { ButtonDado } from './components/Buttons/Buttons'
import api from './service/app';

const App = () => {
   const [tip, setTip] = useState({});
   const [loading, setLoading] = useState(true);

   async function newTip(){
      setLoading(true)
      try{
         const response = await api.get()
         setTip(response.data.slip)
      }  
      catch{
         console.log('erro')
      }    
      // setTimeout(() => {
         setLoading(false)
      // }, 500);
   } 
   
   useEffect(() => {
      console.log('new')
      screenTip()
   }, [loading])


   setTimeout(() => {
      if(loading && Object.keys(tip).length === 0){
         newTip()
      }
   }, 1000);

   const screenTip = () =>{
      return (
         <div className="container">
            <div className='card'>

               {!loading && (
               <>
                     <h1 className="title"> 
                        Advice 
                        <span id="number_tip"> # {tip.id} </span>
                     </h1>

                     <div className="text_tip" id="tip"> "{tip.advice}" </div>
               </>
               )}

               {loading && (
               <>
                     <h1 className="title"> 
                        Advice 
                        <span id="number_tip"> # {tip.id} </span>
                     </h1>

                     <div className='animation_loading'>
                        <DadoIcon />
                     </div>
               </>
               )}

               <div className="container_tips">
                  <LineWebIcon className="line line_web" />
                  <LineMobileIcon className="line line_mobile" />

                  <ButtonDado newTip={newTip} />
               </div>
            </div>
         </div>
      )
   }

   return (
      screenTip()
   );
}

export default App;
