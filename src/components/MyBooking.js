import React from 'react'

const MyBooking = ({ data, setData }) => {
  // console.log("data", data, 'ss', setData)


  const CancelHandler = (e,i) => {
    const selectedIndex = data.findIndex(p => p.id === e);
    // console.log("ee", e, "ii", i)
    data[selectedIndex].Time[i].bookedBy = null;
   setData([...data]);
 
  }

  //console.log("data", data)

  return (
    <>
      <div className='table-wrapper'>
        
        <table rules='all'>
          <tr>
            <th>Room</th>
            <th>Time</th>
            <th>Action</th>
          </tr>
          {data?.map((item) => {
            return (
              (item.Time.map((bookby,index) => {
               // console.log("ss", bookby, index)
                // return (
                if (bookby.bookedBy !== null) {
                  return (
                    <>
                      <tr key={index}>
                        <td>{item.title}</td>
                        <td>{bookby.time}</td>
                        <td><button className='my-button' onClick={() =>CancelHandler(item.id, index)}>cancel</button></td>
                      </tr>

                    </>
                  )
                }
              }))
            )
          })}
        </table>
      </div>

    </>
  )
}

export default MyBooking