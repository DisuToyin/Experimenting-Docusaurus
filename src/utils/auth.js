export default function useIsAuthenticated() {
    const token = localStorage.getItem('authToken');
    console.log(token)
    return !!token;
  }
  