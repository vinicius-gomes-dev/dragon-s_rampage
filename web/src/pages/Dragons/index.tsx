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

interface DragonProps {
  dragons: Dragon[];
}

export const Dragons: React.FC<DragonProps> = ({ dragons }) => {
  const [getDragons, setDragons] = useState('');

  useEffect(() => {
    api.get('dragon').then(response => {
      dragons = response.data;
      console.log(dragons);
    })
  });

  return (
    <div id="page-dragons" className="container">
      <PageHeader title="Dragões" />
      <main className="dragons-list">
        <div className="buttons-container">
          <a href="" className="add-dragon">
            + Adicionar dragão
          </a>
        </div>

        <article>
          <div className="dragon-data">
            <strong>Charizard</strong>
            <span>(Fogo/Voador)</span>
          </div>

          <div className="dragon-function">
            <span>Remover</span>
            <span>Alterar</span>
          </div>
        </article>

        <article>
          <div className="dragon-data">
            <strong>Anitta</strong>
            <span>(Funkeira)</span>
          </div>

          <div className="dragon-function">
            <span>Remover</span>
            <span>Alterar</span>
          </div>
        </article>
      </main>
    </div>
  );
}