import {GrPowerReset} from "react-icons/gr";
import {useState} from "react";


export default function Subhanallah(){
    const [subhan, setSubhan] = useState(33)

    function updateTasbih(e){
        if (subhan > 0) setSubhan(prev => prev - 1)

    }

    function resetTasbih(e){
        e.stopPropagation()
        setSubhan(33)
    }
    return <>
        <div className='w-screen h-1/3 bg-gray-100 pb-16 border-b-2 border-green-800' onClick={updateTasbih}>


            <div className='pt-12 text-center font-semibold text-xl text-green-700'>سُبْحَانَ ٱللَّٰهِ</div>



            <div className='flex justify-center mt-10'>
                <div className='font-orbitron text-center text-7xl'>{subhan}</div>

                {subhan === 0 &&<div className='ml-4 mr-2 mt-4'>
                    <GrPowerReset onClick={resetTasbih} className='ml-auto mr-auto text-4xl'/>
                </div>}
            </div>
            {subhan === 33 && <div className='font-sans font-light text-center pt-11}'>Tap To Start</div>}


        </div>


    </>
}