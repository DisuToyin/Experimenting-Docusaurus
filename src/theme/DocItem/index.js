import React, { useEffect } from 'react';
import { useHistory } from '@docusaurus/router';
import OriginalDocItem from '@theme-original/DocItem';
// import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useIsAuthenticated from '../../utils/useIsAuthenticated'; // Your auth hook


export default function DocItemWrapper(props) {
  const { frontMatter } = props.content;
  const isAuthenticated = useIsAuthenticated();

  const isProtected = frontMatter?.protected === true;
  const history = useHistory();

  useEffect(() => {
    if (isProtected && !isAuthenticated) {
      history.replace('/login'); 
    }
  }, [isProtected, isAuthenticated, history]);

  if (isProtected && !isAuthenticated) {
    return null;
  }

  return <OriginalDocItem {...props} />;
}
