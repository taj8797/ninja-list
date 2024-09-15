export const getStaticProps = async () => {

  const res= await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props : {ninjas : data}
  }
}

import Link from 'next/link';
import style from '../../styles/Ninja.module.css'


const Ninjas = ({ninjas}) => {
  return (
    <div>
      <h1>All ninjas</h1>
      {ninjas.map(ninja =>  (
        <Link href={"/ninjas/" + ninja.id} key={ninjas.id} className={style.single}>
       
          <h3>{ninja.name}</h3>
          
        </Link>

      ))}
    </div>
  );
};

export default Ninjas;
