import { usePathname } from 'next/navigation';
// ----------------------------------------------------------------------

export function useActiveLink(path, deep = true) {
  const pathname = usePathname();

  const normalActive = path ? pathname === path : false;

  const deepActive = path ? pathname === path : false;

  return deep ? deepActive : normalActive;
}
