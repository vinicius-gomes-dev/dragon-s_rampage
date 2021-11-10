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

  return (
    <article className="dragon-item">
      <div className="dragon-data">
        <div className="dragon-name">
          <strong>{dragon.name}</strong>
        </div>
        <div className="dragon-type">
          {/* <span>({dragon.type})</span> */}
          {(containURL)
            ? <img className="dragon-type-img" src={dragon.type} alt="type" />
            : <span>(Não é URL)</span>}
        </div>
      </div>

      <div className="dragon-function">
        <span>Remover</span>
        <span>Alterar</span>
      </div>
    </article>

  );
}