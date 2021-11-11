import { useEffect, useState } from 'react';
import { Dragon, DragonItem } from '../../components/DragonItem';
import { PageHeader } from '../../components/PageHeader';
import { api } from '../../services/api';

import './styles.css';


export function Dragons() {
  const [getDragons, setDragons] = useState([]);



  useEffect(() => {
    api.get('/dragon/').then(response => {
      console.log("Dragons => ", response.data);
      setDragons(response.data);
      console.log("getDragons =>", getDragons);
    })
  }, []);



  return (
    <div id="page-dragons" className="container">
      <PageHeader title="Dragões" />
      <main className="dragons-list">
        <div className="buttons-container">
          <a href="" className="add-dragon">
            + Adicionar dragão
          </a>
        </div>

        {getDragons.map((dragon: Dragon) => {
          return <DragonItem key={dragon.id} dragon={dragon} />
        })}
      </main>
    </div>
  );
}