import React,{useState,useRef} from 'react'
// import { ChatList } from '../../data'
import {Link} from 'phosphor-react'
import Sendreceive from './sendreceive';
// import Receive from './Receive';

const Chat=({dtaa})=>{
  const [myArray, setMyArray] = useState([]);
  const [formData, updateFormData]=useState("");
  
  const handleForm = (e)=>{
    updateFormData(e.target.value);
  };
  const arr=["dnwos","nuihns","wbiyh"];
  const handleSubmit=(e)=>{
    e.preventDefault();
    setMyArray([...myArray, formData]);
    e.target.value='';
  };
  
  const fileInputRef = useRef();
  const onUploadClick = () => {
    fileInputRef.current.click();
  }


// console.log(dtaa);
  return (
    <div>
    <div className="fixed left-80 bg-purple-200 h-full w-full">
      <div className="fixed left-80 h-12 w-full bg-slate-200 font-medium border-b border-gray-500">
      {/* {dtaa.map((dtaa)=> */}
      <div className=" relative flex items-center gap-x-3 p-1">
          <div className="relative w-8 h-8">
            {/* <span className="absolute -bottom-0.5 right-1 w-2 h-2 rounded-full border border-white bg-green-500"></span> */}
            <div className="w-full h-full rounded-full mx-2">{dtaa.img}</div>
        </div>
            <div>
              <span className="block text-gray-700 text-sm font-small">{dtaa.name}</span>
                {/* <a href="javascript:void(0)" className="block text-indigo-600 hover:text-indigo-500 text-xs">Online</a> */}
            </div>
        </div>
      {/* )} */}
            {myArray.map(data=><div><Sendreceive msgDetail={data}/></div>)}
            {/* <div><Sendreceive msgDetail={{msg:"asmdklasmdlasml"}}/></div> */}
      </div>
      <div className="flex flex-items fixed left-80 bottom-0 p-2 w-[59rem] bg-slate-200 border-t border-gray-500">
      <button onClick={() =>onUploadClick()} className="bg-"><Link size={25}/>
        </button> 
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          // onChange={(e) => setFile(e.target.files[0])}
        />
      <form className="getinp inline-flex bg-white"onSubmit={handleSubmit}>
       
      <input type="text" className="rounded-sm h-8 w-[48rem] text-sm p-2" placeholder="Write a message" onChange={handleForm}></input>
      <button className="bg-violet-600 border-2 ml-2 border-black rounded-md w-20 hover:bg-indigo-500 active:bg-indigo-600 duration-150" >Send</button>
      </form>
      </div>
    </div>
    </div>
  )
}


export default Chat
