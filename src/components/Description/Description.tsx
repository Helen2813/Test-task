import React from 'react';
import './style.css';

interface Props {
  levelsCount: 1 | 2;
  title: string;
  propsTitles: string[];
  descriptions: string[];
}

export const Description: React.FC<Props> = ({
  levelsCount = 1,
  title,
  propsTitles,
  descriptions,
}) => {
  return (
    <div className="description">
      <div className="description-props">
        <h3>{title}</h3>
        <ul className="description-props__list">
          {propsTitles.map((listElement, index) => {
            return (
              <li className="description-props__list-item" key={index}>{listElement}</li>
            )
          })}
        </ul>
      </div>
      <div className="description-value">
        {levelsCount === 1 && (
          <div className="description-value__list">
            <ul className="description-value__list treeline">
              {descriptions.map((listElement, index) => {
                return (
                  <li className="description-props__list-item" key={index}>{listElement}</li>
                )
              })}
            </ul>
          </div>
        )}
        {levelsCount === 2 && (
          <div className="description-value__list">
            <ul className="description-value__list treeline">
              {descriptions.map((listElement, index) => {
                return (
                  <li className="description-props__list-item" key={index}>{listElement}</li>
                )
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
};

