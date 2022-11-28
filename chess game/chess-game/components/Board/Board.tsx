import styles from './Board.module.css';
import  * as THREE from 'three';
import { useEffect, useRef } from 'react';
const Board = () => {
    const boardRef = useRef(null)
    const didExec = useRef(false);
    useEffect(()=>{
        if(!boardRef.current) return;
        if(didExec.current) return ;
        const boardContainer = boardRef.current as HTMLElement;
        const {width,height} = boardContainer.getBoundingClientRect();
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75,width / height,0.1 , 1000);
        const renderer = new THREE.WebGLRenderer({antialias:true});


        function animate(){
            requestAnimationFrame(animate);
        }
        animate()
        didExec.current = true;
    },[])
  return (
    <div ref={boardRef} className={styles.container}>
        
    </div>
  )
}

export default Board