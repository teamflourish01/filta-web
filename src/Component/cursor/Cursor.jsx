import React,{useEffect} from 'react'
import "../cursor/cursor.css"
const Cursor = () => {
    useEffect(() => {
        const cursor = document.querySelector('.cursor');
    
        const handleMouseMove = (e) => {
          cursor.style.left = `${e.clientX}px`;
          cursor.style.top = `${e.clientY}px`;
        };
    
        window.addEventListener('mousemove', handleMouseMove);
    
        return () => {
          window.removeEventListener('mousemove', handleMouseMove);
        };
      }, []);
  return (
    <div className="cursor"></div>
  )
}

export default Cursor