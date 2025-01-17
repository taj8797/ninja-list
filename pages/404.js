import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {

  useEffect(()=> {
    setTimeout(()=> {
      router.push('/')
    },3000)
    
  },[])
  return ( 
    <div className="not-found">
    <h1>Oooops...</h1>
    <h2>The page cannot be found</h2>
    <p>Go back to the<Link href='/'>HomePage</Link> </p>
    </div>
   );
}
 
export default NotFound;