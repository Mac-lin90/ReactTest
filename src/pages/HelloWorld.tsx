import { useState } from 'react';

export default function HelloWorld(props: any) {
  // const {title = 'props hello world'} = props;

  const [styleData] = useState({ color: 'red', 'fontSize': "16px" });
  const [isHead] = useState(true);
  const [className] = useState('title');
  const [title, setTitle] = useState('hello');

  const handleClick = ()=>{
    setTitle('hello react');
 }

  return (
    <div
      className={`${className} ${isHead ? 'head' : ''}`}
      style={styleData}
      onClick={handleClick}
    >
     {title}
    </div>
  );
}
