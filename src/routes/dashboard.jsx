// @material-ui/icons
// import Dashboard from '@material-ui/icons/Dashboard';
// import Person from '@material-ui/icons/Person';
// // import ContentPaste from "@material-ui/icons/ContentPaste";
// import LibraryBooks from '@material-ui/icons/LibraryBooks';
// import BubbleChart from '@material-ui/icons/BubbleChart';
// import LocationOn from '@material-ui/icons/LocationOn';
import Notifications from '@material-ui/icons/Notifications';
// import Unarchive from '@material-ui/icons/Unarchive';
// core components/views
import {
  // DashboardPage,
  // UserProfile,
  // Typography,
  // Icons,
  // NotificationsPage,
  Database
} from '../views';

const dashboardRoutes = [
  // {
  //   path: '/dashboard',
  //   sidebarName: 'Dashboard',
  //   navbarName: 'Material Dashboard',
  //   icon: Dashboard,
  //   component: DashboardPage
  // },
  // {
  //   path: '/user',
  //   sidebarName: 'User Profile',
  //   navbarName: 'Profile',
  //   icon: Person,
  //   component: UserProfile
  // },

  // {
  //   path: '/typography',
  //   sidebarName: 'Typography',
  //   navbarName: 'Typography',
  //   icon: LibraryBooks,
  //   component: Typography
  // },
  // {
  //   path: '/icons',
  //   sidebarName: 'Icons',
  //   navbarName: 'Icons',
  //   icon: BubbleChart,
  //   component: Icons
  // },

  // {
  //   path: '/notifications',
  //   sidebarName: 'Notifications',
  //   navbarName: 'Notifications',
  //   icon: Notifications,
  //   component: NotificationsPage
  // },
  {
    path: '/database',
    sidebarName: 'Database',
    navbarName: 'Database',
    icon: Notifications,
    component: Database
  },
  { redirect: true, path: '/', to: '/dashboard', navbarName: 'Redirect' }
];

export default dashboardRoutes;
