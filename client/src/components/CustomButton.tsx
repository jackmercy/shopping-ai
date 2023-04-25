import React from 'react';
import { useSnapshot } from 'valtio';
import state from '../store';

interface CustomButtonProps {
  type: string;
  title: string;
  handleClick: () => void;
  customStyles?: string;
}

const CustomButton = (props: CustomButtonProps) => {
  const snap = useSnapshot(state);

  const generateStyle = (type: string) => {
    if (type === 'filled') {
      return {
        backgroundColor: snap.color,
        color: 'white',
      }
    }
  }
  return (
    <button className={`px-2 py-1.5 flex-1 rounded-md ${props.customStyles}`} style={generateStyle(props.type)} onClick={props.handleClick}>
      {props.title}
    </button>
  )
}

export default CustomButton;