import { useEffect, useState } from "react"

export default function useHasMounted() {
    const [hasMounted, setHasMounted] = useState(false);
    
    useEffect(()=> {
        setHasMounted(true);
    }, []) ;

    return  hasMounted;

}

//상태를 만들고 상태를 변경하는 로직이 useEffect에 담겨있는 형태가 리턴