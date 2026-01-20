import { Navigate, useLocation } from 'react-router-dom';

export function DocsRedirect() {
  const location = useLocation();
  const { pathname, search, hash } = location;
  const alreadyPrefixed = pathname.startsWith('/docs');
  const targetPath = alreadyPrefixed ? pathname : `/docs${pathname === '/' ? '' : pathname}`;

  return (
    <Navigate
      to={{ pathname: targetPath || '/docs', search, hash }}
      replace
    />
  );
}
