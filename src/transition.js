import {motion} from "framer-motion";
import "./App.css"

const transition = (OgComponent) => {
        
    return () =>(

        <>

        <OgComponent/>

        <motion.div
            className="slide-in"
            initial={{scaleY:2}}
            animate={{scaleY:0}}
            exit={{scaleY:2}}
            transition={{duration:1.3,ease:[0.22,1,0.36,1] }}
        />


        <motion.div
            className="slide-out"
            initial={{scaleY:2}}
            animate={{scaleY:0}}
            exit={{scaleY:2}}
            transition={{duration:1.3,ease:[0.22,1,0.36,1] }}
        />
        
        </>
    )

};

export default transition