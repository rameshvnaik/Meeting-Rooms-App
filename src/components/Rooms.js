import React, { useState } from 'react'
import Popup from './Popup'
import './style.css'

const Rooms = ({ data, setData }) => {

  const [dialogOpen, setDialogOpen] = useState(false);
  const [id, setId] = useState();

  const getAvailability = (i) => {
    const bookedSeats = data[i].Time.filter(j => j.bookedBy);
    return 100 - bookedSeats.length / data[i].Time.length * 100;
  }

  return (
    <>
      <div className='main-div'>
        {
          data.map((room, index) => {
            return (
              <>
                <button key={index} className='main-item' onClick={() => {
                  setDialogOpen(true)
                  setId(room.id)
                }} > 
                  <div  >
                    <h2>{room.title}</h2>
                  </div>
                  <h3>Availability : {getAvailability(index)} %</h3>
                </button>

              </>
            )
          })
        }

      </div>


      {dialogOpen && <Popup setDialogOpen={setDialogOpen} id={id} slotData={data} setslotData={setData} />}
    </>
  )

}

export default Rooms