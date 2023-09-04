import React from 'react'
import './style.css';

const Popup = ({setDialogOpen,id,slotData,setslotData}) => {
  
    const selectedIndex = slotData.findIndex(p => p.id === id);
    const BookHandler =(i) =>{
    slotData[selectedIndex].Time[i].bookedBy = "1";
     setslotData([...slotData])
    }

  return (
    <>

    <div className='popup-wrapper'>
    <div className='pop-items'>
       <button  className='popup-button' onClick={() =>setDialogOpen(false)}>X</button>
      <div className='slot-times'>  {
             slotData[selectedIndex].Time.map((item,index) => {
                return (
                    <div className='popup-item' key={index}>
                    <h3  >{item.time}</h3>
                    <button className='my-button' onClick={(e) =>BookHandler(index)}   disabled={item.bookedBy} >Book the slot</button>
                    </div>
                )
               }
               )

        }
        </div>

    </div>
    </div>
</>
  )
}

export default Popup