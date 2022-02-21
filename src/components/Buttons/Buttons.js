import React from 'react'
import { DadoIcon } from '../Icons'
import './Buttons.css';


export const ButtonDado = ({newTip}) => (
  <div className="card_circle_tip" onClick={newTip}>
    <DadoIcon className="button_tip" />
  </div>
)
