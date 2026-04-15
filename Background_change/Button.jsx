import React from 'react'

let buttons = [{
    name : "Blue",
    psp : 'bg-blue-500'
},{
    name : "orange",
    psp : "bg-orange-500"
},{
    name : "yelloe",
    psp : "bg-yellow-500"
},{
    name : "green",
    psp : "bg-green-500"
},{
    name : "cyan",
    psp : "bg-cyan-500"
},{
    name : "sky",
    psp : "bg-sky-500"
},{
    name : "violet",
    psp : "bg-violet-500"
}]
function Button({chgcolor}) {
  return (
    <div className='fixed bottom-5  w-full justify-center-safe flex gap-2'>
      {buttons.map((button , index) =>
        <button className={`${button.psp} w-20 text-black rounded-md`} key={index}
        onClick={()=>chgcolor(button.psp)}
        >{button.name}</button>
      )}
    </div>
  )
}

export default Button
