import React,{useRef} from 'react'


import { useReactToPrint } from 'react-to-print';
import ReactToPrint from './ReactToPrint';

function App() {
   const contentRef = useRef(null);
    const reactToPrintFn = useReactToPrint({ 
      contentRef
    });

  return (
    <>
     <button onClick={() => reactToPrintFn()}>Print</button>
    <div style={{ display: "none" }}>
   
    <div   ref={contentRef} >
    <ReactToPrint  />
    </div>
    </div>
    </>
        
    
  )
}

export default App
