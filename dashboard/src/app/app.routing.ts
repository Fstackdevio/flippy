import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';

export const AppRoutes: Routes = [{
  path: '',
  component: AdminLayoutComponent,
  children: [{
    path: '',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  }, {
    path: 'inbox',
    loadChildren: './email/email.module#EmailModule'
  },{
    path: 'components',
    loadChildren: './components/components.module#ComponentsModule'
  },{
    path: 'Service',
    loadChildren: './services/service.module#ServiceModule'
  },{
    path: 'ApiService',
    loadChildren: './apiservices/apiservices.module#ApiServicesModule'
  },{
    path: 'Getstarted',
    loadChildren: './getstarted/getstarted.module#GetstartedModule'
  },{
    path: 'tutorials/php',
    loadChildren: './php/php.module#PhpModule'
  },{
    path: 'tutorials/javascript',
    loadChildren: './javascript/javascript.module#JavascriptModule'
  },{
    path: 'tutorials/python',
    loadChildren: './python/python.module#PythonModule'
  },{
    path: 'Transactions',
    loadChildren: './transactions/transactions.module#TransactionsModule'
  },{
    path: 'Custormers',
    loadChildren: './custormers/custormers.module#CustormersModule'
  },{
    path: 'Income',
    loadChildren: './incomes/incomes.module#IncomesModule'
  },{
    path: 'Transfers',
    loadChildren: './transfers/transfers.module#TransfersModule' 
  },{
    path: 'Invoices',
    loadChildren: './invoice/invoice.module#InvoiceModule'
  },{
    path: 'PaymentPageComponent',
    loadChildren: './payment-page/payment-page.module#PaymentPageModule'
  },{
    path: 'TrashComponent',
    loadChildren: './trash/trash.module#TrashModule'
  },{
    path: 'Settings',
    loadChildren: './settings/settings.module#SettingsModule'
  },{
    path: 'icons',
    loadChildren: './icons/icons.module#IconsModule'
  }, {
    path: 'cards',
    loadChildren: './cards/cards.module#CardsModule'
  }, {
    path: 'forms',
    loadChildren: './form/form.module#FormModule'
  }, {
    path: 'tables',
    loadChildren: './tables/tables.module#TablesModule'
  }, {
    path: 'datatable',
    loadChildren: './datatable/datatable.module#DatatableModule'
  }, {
    path: 'charts',
    loadChildren: './charts/charts.module#ChartsModule'
  }, {
    path: 'maps',
    loadChildren: './maps/maps.module#MapsModule'
  }, {
    path: 'pages',
    loadChildren: './pages/pages.module#PagesModule'
  }, {
    path: 'taskboard',
    loadChildren: './taskboard/taskboard.module#TaskboardModule'
  }, {
    path: 'calendar',
    loadChildren: './fullcalendar/fullcalendar.module#FullcalendarModule'
  }, {
    path: 'media',
    loadChildren: './media/media.module#MediaModule'
  }, {
    path: 'widgets',
    loadChildren: './widgets/widgets.module#WidgetsModule'
  }, {
    path: 'social',
    loadChildren: './social/social.module#SocialModule'
  }, {
    path: 'docs',
    loadChildren: './docs/docs.module#DocsModule'
  }]
}, {
  path: '',
  component: AuthLayoutComponent,
  children: [{
    path: 'authentication',
    loadChildren: './authentication/authentication.module#AuthenticationModule'
  }, {
    path: 'error',
    loadChildren: './error/error.module#ErrorModule'
  }, {
    path: 'landing',
    loadChildren: './landing/landing.module#LandingModule'
  }]
}, {
  path: '**',
  redirectTo: 'error/404'
}];

