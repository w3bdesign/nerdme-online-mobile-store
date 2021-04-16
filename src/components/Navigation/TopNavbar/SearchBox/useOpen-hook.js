import { useState, useRef, useEffect } from "react";

function useOpen(initialState) {
    const [isOpen, setIsOpen] = useState(initialState);
    const openerRef = useRef();
    const ref = useRef();

    const handleClickOutside = (e) => {
        // added openerRef to prevent setIsOpen(false) when I press openerRef button 
        if (!ref.current.contains(e.target) && !openerRef.current.contains(e.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        // never reached -- however, its fine
        return _ => document.removeEventListener('click', handleClickOutside);
    }, []);

    return [openerRef, ref, isOpen, setIsOpen];
}

export default useOpen;