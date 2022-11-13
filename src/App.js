import React, {useState} from 'react';
import { motion } from "framer-motion"
import { CardBody } from '@material-tailwind/react';



function App() {
  const [occupied, setOccupied] = useState(false)
  
  return (
    <div id='container' className={`flex align-center justify-center bg-gradient-to-tr ${occupied ? "to-[#ffbb00] from-[#fd7700]" : "to-[#24bb8b] from-[#154734]"} w-screen h-screen`}>
      <motion.div 
      onClick={() => {
        setOccupied(!occupied)
      }}
      className="flex flex-initial flex-col justify-center align-center"
      >
        {occupied && <h1 className='text-[24pt] font-semibold text-white flex-initial text-center'>Occupied</h1>}
        {!occupied && <h1 className='text-[24pt] font-semibold text-white flex-initial text-center'>Empty</h1>}
        <motion.img
          whileTap={{ scale: 0.8, transition: .1 }}  
          src={require('./utdvectorwhite.png')} />
          
      </motion.div>
    </div>
  );
}


export default App;
