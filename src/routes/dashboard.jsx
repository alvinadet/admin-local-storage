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
import { Database } from '../views';

const dashboardRoutes = [
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
