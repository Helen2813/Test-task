import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Description } from './components/Description/Description';

interface DataItem {
  id: number;
  levelsCount: 1 | 2;
  title: string;
  propsTitles: string[];
  descriptions: string[];
};

const data: DataItem[] = [
  {
    id: 0,
    levelsCount: 1,
    title: 'Общая информация',
    propsTitles: [
      'Документ',
      'Должность',
      'Функциональное направление',
      'Специализация',
    ],
    descriptions: [
      'Профиль требований к должности',
      'Инженер',
      'Логистика',
      'Обслуживание и ремонт механического, энергетического электрооборудования',
    ]
  },
  {
    id: 1,
    levelsCount: 1,
    title: 'Образование',
    propsTitles: [
      'Степень',
      'Специализация',
    ],
    descriptions: [
      'Высшее / Среднее высшее',
      'Инженерно-техническая',
    ]
  },
  {
    id: 2,
    levelsCount: 1,
    title: 'Корпоративные компетенции',
    propsTitles: [
      'Сотрудничество',
      'Коммуникации и убеждения',
      'Достижение результата',
      'Системное мышление',
      'Культура безопасности',
      'Сотрудничество',
    ],
    descriptions: [
      '1',
      '2',
      '3',
      '3',
      '2',
      '1',
    ]
  },
  {
    id: 3,
    levelsCount: 2,
    title: 'Дополнительные требования',
    propsTitles: [
      'Инструменты',
      'SAP ERP',
      'SAP HR',
      'Иностранные языки',
      'Английский',
    ],
    descriptions: [
      'Продвинутый уровень',
      'Продвинутый уровень',
      'Продвинутый уровень',
    ]
  }
];

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <div className="main-title">
          <span className="main-title__txt">Свойства</span>
          <span>Значения</span>
        </div>
        {data.map((item, index) => {
          return <Description
            key={item.id}
            title={item.title}
            levelsCount={item.levelsCount}
            propsTitles={item.propsTitles}
            descriptions={item.descriptions}
          />
        })}
      </main>
    </div>
  );
}

export default App;
