import logoImg from '../../assets/images/Logo/Simples/dragon-logo2.png';

import './styles.css';

interface PageHeaderProps {
  title: string;
  description?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = (props) => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <img src={logoImg} alt="Logo" />
        <h5>{props.title}</h5>
        <strong>Vinicius</strong>
      </div>
    </header>
  );
}