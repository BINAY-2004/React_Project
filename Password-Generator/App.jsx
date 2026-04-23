import React, { useState , useEffect, useCallback, useRef} from 'react'

const App = () => {
  const[length,setlength] = useState(4);
  const[number,setnumber] = useState(false);
  const[character,setchar] = useState(false);
  const[pass,setpass] = useState("");
  const Password = useCallback(()=>{
    let alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let specialchar = "!@#$%^&*()_+";
    let newnum = "0123456789";
    let password = ""
    if(number) alpha+=newnum;
    if(character) alpha+=specialchar;

    for(let i=1 ; i<=length ; i++){
      let d = Math.floor(Math.random() * alpha.length);
      password+=alpha[d];
    }
    setpass(password);
    
    return(
      console.log(password)
    )
  },[length,number,character]);

  //useref 
  const refer = useRef(null); // not to be like state declaration
  const cliptoclipboard = () =>{
    refer.current?.select();
    window.navigator.clipboard.writeText(pass);
  }
  useEffect(()=>
    Password()
  ,[length,number,character])
  return (
    <>
    <div className='grid place-items-center h-screen' style={{
        backgroundImage: "url('https://th.bing.com/th/id/OIP.AZANL7JOBT0jDgCUFoD9uAHaEK?w=333&h=187&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3')",
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>

    <div className='w-5/6 bg-black text-green-500 sm:w-3/5 md:w-3/6 flex flex-col items-center justify-center border-4 p-3 border-green-500 rounded-xl text-2xl'>
      <h2 className='underline underline-offset-8 mb-2.5 text-shadow-green-500 text-[16px] sm:text-xl'>Password Generator</h2>
      <div className='flex bg-amber-50 w-full justify-between border-2 border-e-black rounded-2xl p-2'>
        <input type="text" ref={refer} value={pass} placeholder='New password' className='w-4/5 text-sm sm:text-xl pl-1 text-black'/>
        <button //onClick={()=>{
         // window.navigator.clipboard.writeText(pass);
        //}} it's ok to select but use useref 
        onClick={cliptoclipboard}
        className='bg-black text-green-500 text-[16px] sm:text-xl w-1/5 rounded-2xl p-0.5 hover:bg-green-500 hover:text-black active:scale-85 transition duration-150'>Copy</button>
      </div>


    <div className='w-full pt-3 md:mt-1 flex flex-col md:justify-around md:flex-row justify-center items-center overflow-x-hidden'>
      <div className='flex flex-col sm:flex-row justify-around items-center '>
        <input type="range" min={4} max={10} value={length} className='min-w-1.5 mr-2 slider cursor-pointer'  
        onChange={(e) => {
        const value = e.target.value;
        setlength(value);
        e.target.style.background = `linear-gradient(to right, green ${value}%, white ${value}%)`;
        }}/>
        <label className='text-[16px] sm:text-xl'>Length:{length}</label></div> 
      
      <div><input type="checkbox"
      checked={number} onChange={(e)=>{
        setnumber(e.target.checked);
      }} 
       className='mr-2'/>
      <label className='text-[16px] sm:text-xl'>Numbers</label></div>
      
      <div><input type="checkbox" checked={character} onChange={(e)=>{
        setchar(e.target.checked);
      }}  className='mr-2'/>
      <label className='text-[16px] sm:text-xl'>Character</label></div>
      
    </div>
    </div>
    </div>
    </>
  )
}

export default App
