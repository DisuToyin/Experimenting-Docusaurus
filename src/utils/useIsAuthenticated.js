
import { useEffect, useState } from 'react';

export default function useIsAuthenticated() {
  const [authenticated, setAuthenticated] = useState(true);

  useEffect(() => {
    // Check if running in the browser
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('authToken'); 
      setAuthenticated(!!token);
    }
  }, []);

  return authenticated;
}
