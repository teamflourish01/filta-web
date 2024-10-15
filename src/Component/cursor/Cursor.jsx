import React,{useEffect,useState} from 'react'
import "../cursor/cursor.css"
const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  return (
    <div
      className="cursor-dot"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      Drag
    </div>
  )
}

export default Cursor