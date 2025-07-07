import { Outlet } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import UNAHVS from '../../assets/UNAHVS6.jpg'

export const Contenedor = () => {
    const [isVisible, setIsVisible] = useState(false)

    const handleScroll = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        })
    }

    useEffect(() => {
        const observer = new IntersectionObserver(handleScroll, {
            threshold: 0.1,
        })
        const element = document.getElementById('animated');

        if (element) {
            observer.observe(element);
        }
        return () => {
            if (element) {
                observer.unobserve(element);
            }
        }
    }, []);


    return (
        <div className="border-0 p-4 w-[100%] bg-gray-200 overflow-y-scroll h-[73vh] mr-4"
            style={{ backgroundImage: `url(${UNAHVS})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
            <motion.div
                id='animated'
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.9 }}
            >
                <Outlet />
            </motion.div>
        </div>
    )
}
