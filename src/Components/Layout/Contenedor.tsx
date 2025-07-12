import { Outlet } from 'react-router-dom'
import { motion } from 'framer-motion'
import UNAHVS from '../../assets/UNAHVS6.jpg'

export const Contenedor = () => {
    return (
        <div className="border-0 p-4 bg-gray-200 overflow-y-scroll h-[75vh]"
            style={{ backgroundImage: `url(${UNAHVS})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
            <motion.div
                id='animated'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 30 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.9 }}
            >
                <Outlet />
            </motion.div>
        </div >
    )
}
