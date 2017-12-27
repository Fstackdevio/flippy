import { Injectable } from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  name: string;
  type?: string;
}

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

const MENUITEMS = [
  {
    state: 'Getstarted',
    name: 'GET STARTED',
    type: 'link',
    icon: 'basic-world'
  },
  {
    state: '/',
    name: 'HOME',
    type: 'link',
    icon: 'basic-accelerator'
  },{
    state: 'section1',
    name: 'ACCOUNT TOOLS',
    type: 'link',
    icon: ' '
  },
  {
    state: 'ApiService',
    name: 'API SERVICES',
    type: 'link',
    icon: 'basic-paperplane'
  },
  {
    state: 'Service',
    name: 'SERVICES',
    type: 'link',
    icon: 'basic-clessidre'
  },{
    state: 'inbox',
    name: 'INBOX',
    type: 'link',
    icon: 'basic-spread-text-bookmark'
  },{
    state: 'tutorials',
    name: 'INGEGRATION HELP',
    type: 'sub',
    icon: 'basic-webpage-multiple',
    badge: [
      {
        type: 'success',
        value: '3'
      }
    ],
    children: [
      {
        state: 'python',
        name: 'PYTHON'
      },
      {
        state: 'php',
        name: 'PHP'
      },
      {
        state: 'javascript',
        name: 'JAVASCRIPT'
      },
    ]
  },{
    state: '/section1',
    name: 'YOUR BUSINESS',
    type: 'link',
    icon: ' '
  },{
    state: 'Transactions',
    name: 'TRANSACTIONS',
    type: 'link',
    icon: 'basic-webpage-txt'
  },{
    state: 'Custormers',
    name: 'CUSTORMERS',
    type: 'link',
    icon: 'basic-star'
  },{
    state: 'Income',
    name: 'INCOMES',
    type: 'link',
    icon: 'basic-alarm'
  },{
    state: 'Transfers',
    name: 'TRANSFERS',
    type: 'link',
    icon: 'basic-upload'
  },{
    state: '/section1',
    name: 'PAYMENTS',
    type: 'link',
    icon: ' '
  },{
    state: 'Invoices',
    name: 'INVOICES',
    type: 'link',
    icon: 'basic-todo'
  },{
    state: 'PaymentPage',
    name: 'Payment Pages',
    type: 'link',
    icon: 'basic-spread-text'
  },{
    state: 'empty',
    name: ' ',
    type: 'link',
    icon: ' '
  },{
    state: 'Settings',
    name: 'SETTINGS',
    type: 'link',
    icon: 'basic-gear'
  },{
    state: 'Trash',
    name: 'TRASH',
    type: 'link',
    icon: 'basic-trashcan-remove'
  },{
    state: 'components',
    name: 'COMPONENTS',
    type: 'sub',
    icon: 'basic-webpage-multiple',
    badge: [
      {
        type: 'success',
        value: '5'
      }
    ],
    children: [
      {
        state: 'accordion',
        name: 'ACCORDION'
      },
      {
        state: 'alert',
        name: 'ALERT'
      },
      {
        state: 'buttons',
        name: 'BUTTONS'
      },
      {
        state: 'buttonicons',
        name: 'SBUTTONS'
      },
      {
        state: 'carousel',
        name: 'CAROUSEL'
      },
      {
        state: 'collapse',
        name: 'COLLAPSE'
      },
      {
        state: 'datepicker',
        name: 'DATEPICKER'
      },
      {
        state: 'dropdown',
        name: 'DROPDOWN'
      },
      {
        state: 'modal',
        name: 'MODAL'
      },
      {
        state: 'pagination',
        name: 'PAGINATION'
      },
      {
        state: 'popover',
        name: 'POPOVER'
      },
      {
        state: 'progress',
        name: 'PROGRESS'
      },
      {
        state: 'rating',
        name: 'RATING'
      },
      {
        state: 'tabs',
        name: 'TABS'
      },
      {
        state: 'timepicker',
        name: 'TIMEPICKER'
      },
      {
        state: 'tooltip',
        name: 'TOOLTIP'
      },
      {
        state: 'typeahead',
        name: 'TYPEAHEAD'
      },
      {
        state: 'spinners',
        name: 'SPINNERS'
      }
    ]
  },
  {
    state: 'icons',
    name: 'ICONS',
    type: 'sub',
    icon: 'basic-postcard',
    children: [
      {
        state: 'linea',
        name: 'LINEA'
      },
      {
        state: 'fontawesome',
        name: 'FONTAWESOME'
      },
      {
        state: 'sli',
        name: 'SLI'
      }
    ]
  },
  {
    state: 'taskboard',
    name: 'TASKBOARD',
    type: 'link',
    icon: 'basic-message-txt'
  },
  {
    state: 'cards',
    name: 'CARDS',
    type: 'sub',
    icon: 'basic-postcard',
    children: [
      {
        state: 'basic',
        name: 'BASIC'
      },
      {
        state: 'portlets',
        name: 'PORTLETS'
      },
      {
        state: 'draggable',
        name: 'DRAGGABLE'
      }
    ]
  },
  {
    state: 'forms',
    name: 'FORMS',
    type: 'sub',
    icon: 'basic-sheet-pen',
    children: [
      {
        state: 'basic',
        name: 'BASIC'
      },
      {
        state: 'masks',
        name: 'MASKS'
      },
      {
        state: 'editor',
        name: 'EDITOR'
      },
      {
        state: 'validation',
        name: 'VALIDATION'
      },
      {
        state: 'upload',
        name: 'UPLOAD'
      },
      {
        state: 'tree',
        name: 'TREE'
      },
    ]
  },
  {
    state: 'tables',
    name: 'TABLES',
    type: 'sub',
    icon: 'basic-webpage-txt',
    badge: [
      {
        type: 'primary',
        value: '2'
      }
    ],
    children: [
      {
        state: 'basic',
        name: 'BASIC'
      },
      {
        state: 'responsive',
        name: 'RESPONSIVE'
      },
    ]
  },
  {
    state: 'datatable',
    name: 'DATATABLES',
    type: 'sub',
    icon: 'basic-webpage-img-txt',
    children: [
      {
        state: 'fullscreen',
        name: 'FULLSCREEN'
      },
      {
        state: 'editing',
        name: 'EDITING'
      },
      {
        state: 'filter',
        name: 'FILTER'
      },
      {
        state: 'paging',
        name: 'PAGING'
      },
      {
        state: 'pinning',
        name: 'PINNING'
      },
      {
        state: 'selection',
        name: 'SELECTION'
      },
      {
        state: 'sorting',
        name: 'SORTING'
      },
    ]
  },
  {
    state: 'charts',
    name: 'CHARTS',
    type: 'sub',
    icon: 'ecommerce-graph1',
    badge: [
      {
        type: 'info',
        value: '4'
      }
    ],
    children: [
      {
        state: 'bar',
        name: 'BAR'
      },
      {
        state: 'pie',
        name: 'PIE'
      },
      {
        state: 'line',
        name: 'LINE'
      },
      {
        state: 'misc',
        name: 'MISC'
      }
    ]
  },
  {
    state: 'maps',
    name: 'MAPS',
    type: 'sub',
    icon: 'basic-geolocalize-01',
    children: [
      {
        state: 'google',
        name: 'GOOGLE'
      },
      {
        state: 'fullscreen',
        name: 'FULLSCREEN'
      }
    ]
  },
  {
    state: 'pages',
    name: 'PAGES',
    type: 'sub',
    icon: 'basic-spread-text-bookmark',
    children: [
      {
        state: 'invoice',
        name: 'INVOICE'
      },
      {
        state: 'forum',
        name: 'FORUM'
      },
      {
        state: 'timeline',
        name: 'TIMELINE'
      },
      {
        state: 'activity',
        name: 'ACTIVITY'
      },
      {
        state: 'pricing',
        name: 'PRICING'
      },
      {
        state: 'blank',
        name: 'BLANK'
      }
    ]
  },
  {
    state: 'landing',
    name: 'LANDING',
    type: 'link',
    icon: 'basic-spread'
  },
  {
    state: 'authentication',
    name: 'AUTHENTICATION',
    type: 'sub',
    icon: 'basic-lock-open',
    children: [
      {
        state: 'signin',
        name: 'SIGNIN'
      },
      {
        state: 'signup',
        name: 'SIGNUP'
      },
      {
        state: 'forgot',
        name: 'FORGOT'
      },
      {
        state: 'lockscreen',
        name: 'LOCKSCREEN'
      },
    ]
  },
  {
    state: 'error',
    name: 'ERROR',
    type: 'sub',
    icon: 'basic-ban',
    children: [
      {
        state: '404',
        name: '404'
      },
      {
        state: '500',
        name: '500'
      },
      {
        state: '503',
        name: '503'
      }
    ]
  },
  {
    state: 'calendar',
    name: 'CALENDAR',
    type: 'link',
    icon: 'basic-calendar'
  },
  {
    state: 'media',
    name: 'MEDIA',
    type: 'sub',
    icon: 'basic-todo-txt',
    children: [
      {
        state: 'grid',
        name: 'GRID'
      },
      {
        state: 'tile',
        name: 'TILE'
      },
      {
        state: 'list',
        name: 'LIST'
      }
    ]
  },
  {
    state: 'widgets',
    name: 'WIDGETS',
    type: 'link',
    icon: 'software-scale-reduce'
  },
  {
    state: 'social',
    name: 'SOCIAL',
    type: 'link',
    icon: 'basic-elaboration-message-happy'
  },
  {
    state: 'docs',
    name: 'DOCS',
    type: 'link',
    icon: 'basic-sheet-txt'
  }
];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }

  add(menu: Menu) {
    MENUITEMS.push(menu);
  }
}
