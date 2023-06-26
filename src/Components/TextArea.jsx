import {useState} from 'react';
import Botoncito from './Botoncito';

const Textarea = () => {
  const [texto, setTexto] = useState('');

  const handleChange = (e) => {
    setTexto(e.target.value);
  };

  return (
    <div>
      <textarea
        name=''
        id=''
        cols='30'
        rows='10'
        value={texto}
        onChange={handleChange}></textarea>
      <Botoncito texto={texto} />
    </div>
  );
};

export default Textarea;
