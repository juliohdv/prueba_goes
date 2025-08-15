import { Label } from 'src/components/label';
import { SvgColor } from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name: string) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} />;

export type NavItem = {
  title: string;
  path: string;
  icon: React.ReactNode;
  info?: React.ReactNode;
};

export const navData = [
  {
    title: 'Validar Usuario',
    path: '/user',
    icon: icon('ic-user'),
    info: (
      <Label color="error" variant='inverted'>
        1.1
      </Label>
    ),
  },
  {
    title: 'Productos',
    path: '/products',
    icon: icon('ic-cart'),
    info: (
      <Label color="error" variant="inverted">
        1.2
      </Label>
    ),
  },
  {
    title: 'Tareas',
    path: '/blog',
    icon: icon('ic-blog'),
    info: (
      <Label color="error" variant='inverted'>
        1.3
      </Label>
    ),
  },
  {
    title: 'Not found',
    path: '/404',
    icon: icon('ic-disabled'),
  },
];
