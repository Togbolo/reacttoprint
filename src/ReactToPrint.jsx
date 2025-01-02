import React,{useRef} from 'react'
import { useReactToPrint } from 'react-to-print';

const ReactToPrint = () => {
    const contentRef = useRef(null);
  const reactToPrintFn = useReactToPrint({ contentRef });
    //const componentRef = useRef()
    //const handlePrint = useReactToPrint({
       // content: () => componentRef.current,
        //documentTitle:'emp-data',
        //onAfterPrint:()=>alert('Print Success')
    //})
  return (
    <div ref={contentRef} style={{width:'100%',height:window.innerHeight}}>
        <h1 className="text-center my-3 border py-2">Employee data</h1>
        
        ReactToPrint
        <button className='btn btn-primary' onClick={reactToPrintFn}>
                            Pay Now
                          </button>
        </div>
  )
}

export default ReactToPrint