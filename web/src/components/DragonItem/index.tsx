import { useEffect, useState } from 'react';
import { PageHeader } from '../../components/PageHeader';
import { api } from '../../services/api';

import './styles.css';

export interface Dragon {
  id: string;
  name: string;
  type: string;
  histories: string;
  createdAt: string;
}

interface DragonItemProps {
  dragon: Dragon;
}

export const DragonItem: React.FC<DragonItemProps> = ({ dragon }) => {

  const containURL = "https://savegnago.vteximg.com.br/arquivos/ids/";
  const isAImage = dragon.type.includes(containURL);
  function teste() {
    console.log("Dragon ID: ", dragon.id);
  }

  return (
    <article className="dragon-item">
      <div className="dragon-data">
        <div className="dragon-name">
          <strong>{dragon.name}</strong>
        </div>
        <div className="dragon-type">
          {/* <span>({dragon.type})</span> */}
          {(isAImage)
            ? <img className="dragon-type-img" src={dragon.type} alt="type" />
            : <span>({dragon.type})</span>}
        </div>
      </div>

      <div className="dragon-function">
        <button type="button" onClick={teste}>Remover</button>
        <button type="button" onClick={teste}>Alterar</button>
      </div>
    </article>

  );
}