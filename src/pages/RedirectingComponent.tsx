import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface props{
  path:string
}

function RedirectingComponent({ path }:props) {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(path, { replace: true });
  }, [path]);

  return (
    <div />
  );
}

export default RedirectingComponent;
