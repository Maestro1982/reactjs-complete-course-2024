import { useEffect } from 'react';

const BasicEffect = () => {
  useEffect(() => {
    console.log('Hello world!');
  }, []);

  return <div>BasicEffect</div>;
};
export default BasicEffect;
