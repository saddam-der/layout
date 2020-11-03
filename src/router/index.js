import Vue from 'vue';
import Router from 'vue-router';

//----------------------------Navigation--------------------------
import Dashboard1 from '@/components/navigation/dashboard/dashboard-1';
import Dashboard2 from '@/components/navigation/dashboard/dashboard-2';
import Dashboard3 from '@/components/navigation/dashboard/dashboard-3';
import Dashboard4 from '@/components/navigation/dashboard/dashboard-4';

//----------------------------Apps-------------
//Calendar
import Calendar from '@/components/apps/Calendar/Calendar';

//Chat
import Chat from '@/components/apps/Chat/Chat';

//Ecommerce
import EcommerceCart from '@/components/apps/Ecommerce/Ecommerce-Cart';
import EcommerceCheckout from '@/components/apps/Ecommerce/Ecommerce-Checkout';
import EcommerceCustomers from '@/components/apps/Ecommerce/Ecommerce-Customers';
import EcommerceDashboard from '@/components/apps/Ecommerce/Ecommerce-Dashboard';
import EcommerceOrderDetail from '@/components/apps/Ecommerce/Ecommerce-Order-Detail';
import EcommerceOrders from '@/components/apps/Ecommerce/Ecommerce-Orders';
import EcommerceProductDetail from '@/components/apps/Ecommerce/Ecommerce-Product-Detail';
import EcommerceProductEdit from '@/components/apps/Ecommerce/Ecommerce-Product-Edit';
import EcommerceProducts from '@/components/apps/Ecommerce/Ecommerce-Products';
import EcommerceSellers from '@/components/apps/Ecommerce/Ecommerce-Sellers';

//CRM
import CrmContact from '@/components/apps/Crm/Crm-Contact';
import CrmCustomers from '@/components/apps/Crm/Crm-Customers';
import CrmDashboard from '@/components/apps/Crm/Crm-Dashboard';
import CrmLeads from '@/components/apps/Crm/Crm-Leads';
import CrmOpportunities from '@/components/apps/Crm/Crm-Opportunities';

//Email
import EmailCompose from '@/components/apps/Email/Email-Compose';
import EmailInbox from '@/components/apps/Email/Email-Inbox';
import EmailRead from '@/components/apps/Email/Email-Read';
import EmailTemplate from '@/components/apps/Email/Email-Template';

//Social Feed
import AppsSocialFeed from '@/components/apps/SocialFeed/Apps-Social-Feed';

//Companies
import AppsCompanies from '@/components/apps/Companies/Apps-Companies';

//Project
import ProjectCreate from '@/components/apps/Project/Project-Create';
import ProjectDetail from '@/components/apps/Project/Project-Detail';
import ProjectList from '@/components/apps/Project/Project-List';

//Task
import TaskDetails from '@/components/apps/Tasks/Task-Details';
import TaskKanbanBoard from '@/components/apps/Tasks/Task-KanbanBoard';
import TaskList from '@/components/apps/Tasks/Task-List';

//Contact
import contactsList from '@/components/apps/Contacts/contacts-List';
import contactsProfile from '@/components/apps/Contacts/contacts-Profile';

//Tickets
import TicketsDetail from '@/components/apps/Tickets/Tickets-Detail';
import TicketsList from '@/components/apps/Tickets/Tickets-List';

//File Manager
import appsFileManager from '@/components/apps/FileManager/apps-File-Manager';

//-------------------------Custom---------------
//Auth Pages

//Extra Pages

//Layout

//-------------------------Components-----------
//Base Ui
import UiAvatars from '@/components/components/Base UI/Ui-Avatars';
import UiButtons from '@/components/components/Base UI/Ui-Buttons';
import UiCards from '@/components/components/Base UI/Ui-Cards';
import UiCarousel from '@/components/components/Base UI/Ui-Carousel';
import UiDropdowns from '@/components/components/Base UI/Ui-Dropdowns';
import UiGeneral from '@/components/components/Base UI/Ui-General';
import UiGid from '@/components/components/Base UI/Ui-Gid';
import UiImages from '@/components/components/Base UI/Ui-Images';
import UiListGroup from '@/components/components/Base UI/Ui-List-Group';
import UiModals from '@/components/components/Base UI/Ui-Modals';
import UiNotifications from '@/components/components/Base UI/Ui-Notifications';
import UiPortlets from '@/components/components/Base UI/Ui-Portlets';
import UiProgress from '@/components/components/Base UI/Ui-Progress';
import UiRibbons from '@/components/components/Base UI/Ui-Ribbons';
import UiSpinners from '@/components/components/Base UI/Ui-Spinners';
import UiTabsAccordions from '@/components/components/Base UI/Ui-Tabs-Accordions';
import UiTooltipsPopovers from '@/components/components/Base UI/Ui-Tooltips-Popovers';
import UiTypography from '@/components/components/Base UI/Ui-Typography';
import UiVideo from '@/components/components/Base UI/Ui-Video';

//Extended UI
import ExtendedAnimation from '@/components/components/Extended UI/Extended-Animation';
import ExtendedDragula from '@/components/components/Extended UI/Extended-Dragula';
import ExtendedLoadingButtons from '@/components/components/Extended UI/Extended-Loading-Buttons';
import ExtendedNestable from '@/components/components/Extended UI/Extended-Nestable';
import ExtendedRangeSlider from '@/components/components/Extended UI/Extended-Range-Slider';
import ExtendedScrollspy from '@/components/components/Extended UI/Extended-Scrollspy';
import ExtendedSweetAlert from '@/components/components/Extended UI/Extended-Sweet-Alert';
import ExtendedTour from '@/components/components/Extended UI/Extended-Tour';

//Widgets
import Widgets from '@/components/components/Widgets/Widgets';

//Icons
import IconsDripicons from '@/components/components/Icons/Icons-Dripicons';
import IconsFeather from '@/components/components/Icons/Icons-Feather';
import IconsFontAwesome from '@/components/components/Icons/Icons-Font-Awesome';
import IconsMdi from '@/components/components/Icons/Icons-Mdi';
import IconsSimpleLine from '@/components/components/Icons/Icons-Simple-Line';
import IconsThemify from '@/components/components/Icons/Icons-Themify';
import IconsTwoTone from '@/components/components/Icons/Icons-Two-Tone';
import IconsWeather from '@/components/components/Icons/Icons-Weather';

//Forms
import FormsAdvanced from '@/components/components/Forms/Forms-Advanced';
import FormsElements from '@/components/components/Forms/Forms-Elements';
import FormsFileUploads from '@/components/components/Forms/Forms-File-Uploads';
import FormsImageCrop from '@/components/components/Forms/Forms-Image-Crop';
import FormsMasks from '@/components/components/Forms/Forms-Masks';
import FormsPickers from '@/components/components/Forms/Forms-Pickers';
import FormsQuilljs from '@/components/components/Forms/Forms-Quilljs';
import FormsSummernote from '@/components/components/Forms/Forms-Summernote';
import FormsValidation from '@/components/components/Forms/Forms-Validation';
import FormsWizard from '@/components/components/Forms/Forms-Wizard';

//Tables
import TableBasic from '@/components/components/Tables/Table-Basic';
import TableBootstrap from '@/components/components/Tables/Table-Bootstrap';
import TableDatatables from '@/components/components/Tables/Table-Datatables';
import TableEditable from '@/components/components/Tables/Table-Editable';
import TableFootables from '@/components/components/Tables/Table-Footables';
import TableJsgrid from '@/components/components/Tables/Table-Jsgrid';
import TableResponsive from '@/components/components/Tables/Table-Responsive';
import TableTablesaw from '@/components/components/Tables/Table-Tablesaw';

//Charts
import ChartsApex from '@/components/components/Charts/Charts-Apex';
import ChartsC3 from '@/components/components/Charts/Charts-C3';
import ChartsChartist from '@/components/components/Charts/Charts-Chartist';
import ChartsChartjs from '@/components/components/Charts/Charts-Chartjs';
import ChartsFlot from '@/components/components/Charts/Charts-Flot';
import ChartsKnob from '@/components/components/Charts/Charts-Knob';
import ChartsMorris from '@/components/components/Charts/Charts-Morris';
import ChartsPeity from '@/components/components/Charts/Charts-Peity';
import ChartsSparklines from '@/components/components/Charts/Charts-Sparklines';

//Maps
import MapsGoogle from '@/components/components/Maps/Maps-Google';
import MapsMapael from '@/components/components/Maps/Maps-Mapael';
import MapsVector from '@/components/components/Maps/Maps-Vector';

Vue.use(Router);

export default new Router({
  routes: [

    //---------------Navigation---------
    {
      path: '/',
      name: 'Dashboard-1',
      component: Dashboard1,
    },
    {
      path: '/dashboard-2',
      name: 'Dashboard2',
      component: Dashboard2,
    },
    {
      path: '/dashboard-3',
      name: 'Dashboard3',
      component: Dashboard3,
    },
    {
      path: '/dashboard-4',
      name: 'Dashboard4',
      component: Dashboard4,
    },

    //------------------Apps---------------
    //Calendar
    {
      path: '/calendar',
      name: 'Calendar',
      component: Calendar,
    },

    //Chat
    {
      path: '/chat',
      name: 'Chat',
      component: Chat,
    },

    //Ecommerce
    {
      path: '/ecommerce-cart',
      name: 'EcommerceCart',
      component: EcommerceCart,
    },
    {
      path: '/ecommerce-checkout',
      name: 'EcommerceCheckout',
      component: EcommerceCheckout,
    },
    {
      path: '/ecommerce-customers',
      name: 'EcommerceCustomers',
      component: EcommerceCustomers,
    },
    {
      path: '/ecommerce-dashboard',
      name: 'EcommerceDashboard',
      component: EcommerceDashboard,
    },
    {
      path: '/ecommerce-order-detail',
      name: 'EcommerceOrderDetail',
      component: EcommerceOrderDetail,
    },
    {
      path: '/ecommerce-orders',
      name: 'EcommerceOrders',
      component: EcommerceOrders,
    },
    {
      path: '/ecommerce-product-detail',
      name: 'EcommerceProductDetail',
      component: EcommerceProductDetail,
    },
    {
      path: '/ecommerce-product-edit',
      name: 'EcommerceProductEdit',
      component: EcommerceProductEdit,
    },
    {
      path: '/ecommerce-products',
      name: 'EcommerceProducts',
      component: EcommerceProducts,
    },
    {
      path: '/ecommerce-sellers',
      name: 'EcommerceSellers',
      component: EcommerceSellers,
    },

    //CRM
    {
      path: '/crm-contacts',
      name: 'CrmContact',
      component: CrmContact,
    },
    {
      path: '/crm-customers',
      name: 'CrmCustomers',
      component: CrmCustomers,
    },
    {
      path: '/crm-dashboard',
      name: 'CrmDashboard',
      component: CrmDashboard,
    },
    {
      path: '/crm-leads',
      name: 'CrmLeads',
      component: CrmLeads,
    },
    {
      path: '/crm-opportunities',
      name: 'CrmOpportunities',
      component: CrmOpportunities,
    },

    //Email
    {
      path: '/email-compose',
      name: 'EmailCompose',
      component: EmailCompose,
    },
    {
      path: '/email-inbox',
      name: 'EmailInbox',
      component: EmailInbox,
    },
    {
      path: '/email-read',
      name: 'EmailRead',
      component: EmailRead,
    },
    {
      path: '/email-templates',
      name: 'EmailTemplate',
      component: EmailTemplate,
    },
    
    //Social Feed
    {
      path: '/social-feed',
      name: 'AppsSocialFeed',
      component: AppsSocialFeed,
    },

    //Companies
    {
      path: '/companies',
      name: 'Companies',
      component: AppsCompanies,
    },

    //Project
    {
      path: '/project-create',
      name: 'ProjectCreate',
      component: ProjectCreate,
    },
    {
      path: '/project-detail',
      name: 'ProjectDetail',
      component: ProjectDetail,
    },
    {
      path: '/project-list',
      name: 'ProjectList',
      component: ProjectList,
    },

    //Task
    {
      path: '/task-details',
      name: 'TaskDetails',
      component: TaskDetails,
    },
    {
      path: '/task-kanban-board',
      name: 'TaskKanbanBoard',
      component: TaskKanbanBoard,
    },
    {
      path: '/task-list',
      name: 'TaskList',
      component: TaskList,
    },

    //Contact
    {
      path: '/contacts-list',
      name: 'ContactList',
      component: contactsList,
    },
    {
      path: '/contacts-profile',
      name: 'ContactProfile',
      component: contactsProfile,
    },

    //Tickets
    {
      path: '/tickets-detail',
      name: 'TicketsDetail',
      component: TicketsDetail,
    },
    {
      path: '/tickets-list',
      name: 'TicketsList',
      component: TicketsList,
    },

    //File Manager
    {
      path: '/file-manager',
      name: 'FileManager',
      component: appsFileManager,
    },

    //-----------------------Custom-----------------------
    //Auth Pages

    //Extra Pages

    //Layouts

    //----------------------Components--------------------
    //Base Ui
    {
      path: '/ui-avatars',
      name: 'UiAvatars',
      component: UiAvatars,
    },
    {
      path: '/ui-buttons',
      name: 'UiButtons',
      component: UiButtons,
    },
    {
      path: '/ui-cards',
      name: 'UiCards',
      component: UiCards,
    },
    {
      path: '/ui-carousel',
      name: 'UiCarousel',
      component: UiCarousel,
    },
    {
      path: '/ui-dropdowns',
      name: 'UiDropdowns',
      component: UiDropdowns,
    },
    {
      path: '/ui-general',
      name: 'UiGeneral',
      component: UiGeneral,
    },
    {
      path: '/ui-gid',
      name: 'UiGid',
      component: UiGid,
    },
    {
      path: '/ui-images',
      name: 'UiImages',
      component: UiImages,
    },
    {
      path: '/ui-list-group',
      name: 'UiListGroup',
      component: UiListGroup,
    },
    {
      path: '/ui-modals',
      name: 'UiModals',
      component: UiModals,
    },
    {
      path: '/ui-notifications',
      name: 'UiNotifications',
      component: UiNotifications,
    },
    {
      path: '/ui-portlets',
      name: 'UiPortlets',
      component: UiPortlets,
    },
    {
      path: '/ui-progress',
      name: 'UiProgress',
      component: UiProgress,
    },
    {
      path: '/ui-ribbons',
      name: 'UiRibbons',
      component: UiRibbons,
    },
    {
      path: '/ui-spinners',
      name: 'UiSpinners',
      component: UiSpinners,
    },
    {
      path: '/ui-tabs-accordions',
      name: 'UiTabsAccordions',
      component: UiTabsAccordions,
    },
    {
      path: '/ui-tooltips-popovers',
      name: 'UiTooltipsPopovers',
      component: UiTooltipsPopovers,
    },
    {
      path: '/ui-typography',
      name: 'UiTypography',
      component: UiTypography,
    },
    {
      path: '/ui-video',
      name: 'UiVideo',
      component: UiVideo,
    },

    //Extended
    {
      path: '/extended-animation',
      name: 'ExtendedAnimation',
      component: ExtendedAnimation,
    },
    {
      path: '/extended-dragula',
      name: 'ExtendedDragula',
      component: ExtendedDragula,
    },
    {
      path: '/extended-loading-buttons',
      name: 'ExtendedLoadingButtons',
      component: ExtendedLoadingButtons,
    },
    {
      path: '/extended-nestable',
      name: 'ExtendedNestable',
      component: ExtendedNestable,
    },
    // {
    //   path: '/extended-rangel-slider',
    //   name: 'ExtendedRangelSlider',
    //   component: ExtendedRangelSlider,
    // },
    {
      path: '/extended-scrollspy',
      name: 'ExtendedScrollspy',
      component: ExtendedScrollspy,
    },
    // {
    //   path: '/extended-sweet-alert',
    //   name: 'ExtendedSweeAlert',
    //   component: ExtendedSweeAlert,
    // },
    {
      path: '/extended-tour',
      name: 'ExtendedTour',
      component: ExtendedTour,
    },

    //Widgets
    {
      path: '/widgets',
      name: 'Widgets',
      component: Widgets,
    },

    //Icons
    {
      path: '/icons-dripicons',
      name: 'IconsDripicons',
      component: IconsDripicons,
    },
    {
      path: '/icons-feather',
      name: 'IconsFeather',
      component: IconsFeather,
    },
    {
      path: '/icons-font-awesome',
      name: 'IconsFontAwesome',
      component: IconsFontAwesome,
    },
    {
      path: '/icons-mdi',
      name: 'IconsMdi',
      component: IconsMdi,
    },
    {
      path: '/icons-simple-line',
      name: 'IconsSimpleLine',
      component: IconsSimpleLine,
    },
    {
      path: '/icons-themify',
      name: 'IconsThemify',
      component: IconsThemify,
    },
    {
      path: '/icons-two-tone',
      name: 'IconsTwoTone',
      component: IconsTwoTone,
    },
    {
      path: '/icons-weather',
      name: 'IconsWeather',
      component: IconsWeather,
    },

    //Forms
    {
      path: '/forms-advanced',
      name: 'FormsAdvanced',
      component: FormsAdvanced,
    },
    {
      path: '/forms-elements',
      name: 'FormsElements',
      component: FormsElements,
    },
    {
      path: '/forms-file-uploads',
      name: 'FormsFileUploads',
      component: FormsFileUploads,
    },
    {
      path: '/forms-image-crop',
      name: 'FormsImageCrop',
      component: FormsImageCrop,
    },
    {
      path: '/forms-masks',
      name: 'FormsMasks',
      component: FormsMasks,
    },
    {
      path: '/forms-pickers',
      name: 'FormsPickers',
      component: FormsPickers,
    },
    {
      path: '/forms-quilljs',
      name: 'FormsQuilljs',
      component: FormsQuilljs,
    },
    {
      path: '/forms-summernote',
      name: 'FormsSummernote',
      component: FormsSummernote,
    },
    {
      path: '/forms-validation',
      name: 'FormsValidation',
      component: FormsValidation,
    },
    {
      path: '/forms-wizard',
      name: 'FormsWizard',
      component: FormsWizard,
    },

    //Table
    {
      path: '/table-basic',
      name: 'TableBasic',
      component: TableBasic,
    },
    {
      path: '/table-bootstrap',
      name: 'TableBootstrap',
      component: TableBootstrap,
    },
    {
      path: '/table-datatables',
      name: 'TableDatatables',
      component: TableDatatables,
    },
    {
      path: '/table-editable',
      name: 'TableEditable',
      component: TableEditable,
    },
    {
      path: '/table-foottables',
      name: 'TableFootables',
      component: TableFootables,
    },
    {
      path: '/table-jsgrid',
      name: 'TableJsgrid',
      component: TableJsgrid,
    },
    {
      path: '/table-responsive',
      name: 'TableResponsive',
      component: TableResponsive,
    },
    {
      path: '/table-tablesaw',
      name: 'TableTablesaw',
      component: TableTablesaw,
    },

    //Charts
    {
      path: '/charts-apex',
      name: 'ChartsApex',
      component: ChartsApex,
    },
    {
      path: '/charts-c3',
      name: 'ChartsC3',
      component: ChartsC3,
    },
    {
      path: '/charts-chartist',
      name: 'ChartsChartist',
      component: ChartsChartist,
    },
    {
      path: '/charts-chartjs',
      name: 'ChartsChartjs',
      component: ChartsChartjs,
    },
    {
      path: '/charts-flot',
      name: 'ChartsFlot',
      component: ChartsFlot,
    },
    {
      path: '/charts-knob',
      name: 'ChartsKnob',
      component: ChartsKnob,
    },
    {
      path: '/charts-morris',
      name: 'ChartsMorris',
      component: ChartsMorris,
    },
    {
      path: '/charts-peity',
      name: 'ChartsPeity',
      component: ChartsPeity,
    },
    {
      path: '/charts-sparklines',
      name: 'ChartsSparklines',
      component: ChartsSparklines,
    },
    
    //Maps
    {
      path: '/maps-google',
      name: 'MapsGoogle',
      component: MapsGoogle,
    },
    {
      path: '/maps-mapael',
      name: 'MapsMapael',
      component: MapsMapael,
    },
    {
      path: '/maps-vector',
      name: 'MapsVector',
      component: MapsVector,
    },
  ],
});
