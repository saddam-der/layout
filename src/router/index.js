import Vue from 'vue';
import Router from 'vue-router';
//----------------------------Navigation--------------------------
import Dashboard1 from '@/components/navigation/dashboard/dashboard-1';
import Dashboard2 from '@/components/navigation/dashboard/dashboard-2';
import Dashboard3 from '@/components/navigation/dashboard/dashboard-3';
import Dashboard4 from '@/components/navigation/dashboard/dashboard-4';

//Disaster
import disasterList from '@/components/bencana/disaster-list';
import disasterAdd from '@/components/bencana/disaster-add';
import disasterEdit from '@/components/bencana/disaster-edit';

//Product
import productList from '@/components/product/product-list';
import productAdd from '@/components/product/product-add';
import productEdit from '@/components/product/product-edit'

//User
import register from '@/components/User/Register';
import account from '@/components/User/account';
import account_edit from '@/components/User/Account_edit';

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
import authConfirmMail from '@/components/custom/AuthPages/auth-Confirm-Mail'
import authConfirmMail2 from '@/components/custom/AuthPages/auth-Confirm-Mail-2'
import authLockScreen from '@/components/custom/AuthPages/auth-Lock-Screen'
import authLockScreen2 from '@/components/custom/AuthPages/auth-Lock-Screen-2'
import authLogin from '@/components/custom/AuthPages/auth-Login'
import authLogin2 from '@/components/custom/AuthPages/auth-Login-2'
import authLogout from '@/components/custom/AuthPages/auth-Logout'
import authLogout2 from '@/components/custom/AuthPages/auth-Logout-2'
import authRecoverpw from '@/components/custom/AuthPages/auth-Recoverpw'
import authRecoverpw2 from '@/components/custom/AuthPages/auth-Recoverpw-2'
import authRegister from '@/components/custom/AuthPages/auth-Register'
import authRegister2 from '@/components/custom/AuthPages/auth-Register-2'
import authSigninSignup from '@/components/custom/AuthPages/auth-Signin-Signup'
import authSigninSignup2 from '@/components/custom/AuthPages/auth-Signin-Signup-2'

//Extra Pages
import pages404 from '@/components/custom/ExtraPages/pages-404';
import pages404Alt from '@/components/custom/ExtraPages/pages-404-alt';
import pages404Two from '@/components/custom/ExtraPages/pages-404-two';
import pages500 from '@/components/custom/ExtraPages/pages-500';
import pages500Two from '@/components/custom/ExtraPages/pages-500-two';
import pagesComingSoon from '@/components/custom/ExtraPages/pages-Coming-Soon';
import pagesFaqs from '@/components/custom/ExtraPages/pages-Faqs';
import pagesGallery from '@/components/custom/ExtraPages/pages-Gallery';
import pagesInvoice from '@/components/custom/ExtraPages/pages-Invoice';
import pagesMaintenance from '@/components/custom/ExtraPages/pages-Maintenance';
import pagesPricing from '@/components/custom/ExtraPages/pages-Pricing';
import pagesSearchResults from '@/components/custom/ExtraPages/pages-Search-Results';
import pagesSitemap from '@/components/custom/ExtraPages/pages-Sitemap';
import pagesStarter from '@/components/custom/ExtraPages/pages-Starter';
import pagesTimeline from '@/components/custom/ExtraPages/pages-Timeline';

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
    //Product
    {
      path: '/product',
      name: 'productList',
      components: {
        default: productList,
      }
    },
    {
      path: '/product/add',
      name: 'productAdd',
      components: {
        default: productAdd,
      }
    },
    {
      path: '/product/edit/:id',
      name: 'productEdit',
      components: {
        default: productEdit,
      }
    },
    {
      path: '/disaster',
      name: 'disasterList',
      components: {
        default: disasterList,
      }
    },
    {
      path: '/disaster/add',
      name: 'disasterAdd',
      components: {
        default: disasterAdd,
      }
    },
    {
      path: '/disaster/edit/:id',
      name: 'disasterEdit',
      components: {
        default: disasterEdit,
      }
    },
    {
      path: '/Register',
      name: 'Register',
      components: {
        default: register,
      }
    },
    {
      path: '/account',
      name: 'account',
      components: {
        default: account,
      }
    },
    {
      path: '/account/edit/:id',
      name: 'account_edit',
      components: {
        default: account_edit,
      }
    },                  
    {
      path: '/',
      name: 'Dashboard-1',
      components: {
        default: Dashboard1,
      }
    },
    {
      path: '/dashboard-2',
      name: 'Dashboard2',
      components: {
        default: Dashboard2,
      }
    },
    {
      path: '/dashboard-3',
      name: 'Dashboard3',
      components: {
        default: Dashboard3,
      }
    },
    {
      path: '/dashboard-4',
      name: 'Dashboard4',
      components: {
        default: Dashboard4,
      }
    },

    //------------------Apps---------------
    //Calendar
    {
      path: '/calendar',
      name: 'Calendar',
      components: {
        default: Calendar,
      }
    },

    //Chat
    {
      path: '/chat',
      name: 'Chat',
      components: {
        default: Chat,
      }
    },

    //Ecommerce
    {
      path: '/ecommerce-cart',
      name: 'EcommerceCart',
      components: {
        default: EcommerceCart,
      }
    },
    {
      path: '/ecommerce-checkout',
      name: 'EcommerceCheckout',
      components: {
        default: EcommerceCheckout,
      }
    },
    {
      path: '/ecommerce-customers',
      name: 'EcommerceCustomers',
      components: {
        default: EcommerceCustomers,
      }
    },
    {
      path: '/ecommerce-dashboard',
      name: 'EcommerceDashboard',
      components: {
        default: EcommerceDashboard,
      }
    },
    {
      path: '/ecommerce-order-detail',
      name: 'EcommerceOrderDetail',
      components: {
        default: EcommerceOrderDetail,
      }
    },
    {
      path: '/ecommerce-orders',
      name: 'EcommerceOrders',
      components: {
        default: EcommerceOrders,
      }
    },
    {
      path: '/ecommerce-product-detail',
      name: 'EcommerceProductDetail',
      components: {
        default: EcommerceProductDetail,
      }
    },
    {
      path: '/ecommerce-product-edit',
      name: 'EcommerceProductEdit',
      components: {
        default: EcommerceProductEdit,
      }
    },
    {
      path: '/ecommerce-products',
      name: 'EcommerceProducts',
      components: {
        default: EcommerceProducts,
      }
    },
    {
      path: '/ecommerce-sellers',
      name: 'EcommerceSellers',
      components: {
        default: EcommerceSellers,
      }
    },

    //CRM
    {
      path: '/crm-contacts',
      name: 'CrmContact',
      components: {
        default: CrmContact,
      }
    },
    {
      path: '/crm-customers',
      name: 'CrmCustomers',
      components: {
        default: CrmCustomers,
      }
    },
    {
      path: '/crm-dashboard',
      name: 'CrmDashboard',
      components: {
        default: CrmDashboard,
      }
    },
    {
      path: '/crm-leads',
      name: 'CrmLeads',
      components: {
        default: CrmLeads,
      }
    },
    {
      path: '/crm-opportunities',
      name: 'CrmOpportunities',
      components: {
        default: CrmOpportunities,
      }
    },

    //Email
    {
      path: '/email-compose',
      name: 'EmailCompose',
      components: {
        default: EmailCompose,
      }
    },
    {
      path: '/email-inbox',
      name: 'EmailInbox',
      components: {
        default: EmailInbox,
      }
    },
    {
      path: '/email-read',
      name: 'EmailRead',
      components: {
        default: EmailRead,
      }
    },
    {
      path: '/email-templates',
      name: 'EmailTemplate',
      components: {
        default: EmailTemplate,
      }
    },

    //Social Feed
    {
      path: '/social-feed',
      name: 'AppsSocialFeed',
      components: {
        default: AppsSocialFeed,
      }
    },

    //Companies
    {
      path: '/companies',
      name: 'Companies',
      components: {
        default: AppsCompanies,
      }
    },

    //Project
    {
      path: '/project-create',
      name: 'ProjectCreate',
      components: {
        default: ProjectCreate,
      }
    },
    {
      path: '/project-detail',
      name: 'ProjectDetail',
      components: {
        default: ProjectDetail,
      }
    },
    {
      path: '/project-list',
      name: 'ProjectList',
      components: {
        default: ProjectList,
      }
    },

    //Task
    {
      path: '/task-details',
      name: 'TaskDetails',
      components: {
        default: TaskDetails,
      }
    },
    {
      path: '/task-kanban-board',
      name: 'TaskKanbanBoard',
      components: {
        default: TaskKanbanBoard,
      }
    },
    {
      path: '/task-list',
      name: 'TaskList',
      components: {
        default: TaskList,
      }
    },

    //Contact
    {
      path: '/contacts-list',
      name: 'ContactList',
      components: {
        default: contactsList,
      }
    },
    {
      path: '/contacts-profile',
      name: 'ContactProfile',
      components: {
        default: contactsProfile,
      }
    },

    //Tickets
    {
      path: '/tickets-detail',
      name: 'TicketsDetail',
      components: {
        default: TicketsDetail,
      }
    },
    {
      path: '/tickets-list',
      name: 'TicketsList',
      components: {
        default: TicketsList,
      }
    },

    //File Manager
    {
      path: '/file-manager',
      name: 'FileManager',
      components: {
        default: appsFileManager,
      }
    },

    //-----------------------Custom-----------------------
    //Auth Pages
    {
      path: '/auth-confirm-mail',
      name: 'authConfirmMail',
      component: authConfirmMail
    },
    {
      path: '/auth-confirm-mail2',
      name: 'authConfirmMail2',
      component: authConfirmMail2
    },
    {
      path: '/auth-lock-screen',
      name: 'authLockScreen',
      component: authLockScreen
    },
    {
      path: '/auth-lock-screen',
      name: 'authLockScreen',
      component: authLockScreen
    },
    {
      path: '/auth-lock-screen',
      name: 'authLockScreen2',
      component: authLockScreen2
    },
    {
      path: '/auth-login',
      name: 'authLogin',
      component: authLogin
    },
    {
      path: '/auth-login-2',
      name: 'authLogin2',
      component: authLogin2
    },
    {
      path: '/auth-logout',
      name: 'authLogout',
      component: authLogout
    },
    {
      path: '/auth-logout-2',
      name: 'authLogout2',
      component: authLogout2
    },
    {
      path: '/auth-recoverpw',
      name: 'authRecoverpw',
      component: authRecoverpw
    },
    {
      path: '/auth-recoverpw2',
      name: 'authRecoverpw2',
      component: authRecoverpw2
    },
    {
      path: '/auth-register',
      name: 'authRegister',
      component: authRegister
    },
    {
      path: '/auth-register2',
      name: 'authRegister2',
      component: authRegister2
    },
    {
      path: '/auth-signin-signup',
      name: 'authSigninSignup',
      component: authSigninSignup
    },
    {
      path: '/auth-signin-signup-2',
      name: 'authSigninSignup2',
      component: authSigninSignup2
    },

    //Extra Pages
    {
      path: '/pages-starter',
      name: 'pagesStarter',
      components: {
        default: pagesStarter,
      }
    },
    {
      path: '/pages-timeline',
      name: 'pagesTimeline',
      components: {
        default: pagesTimeline,
      }
    },
    {
      path: '/pages-sitemap',
      name: 'pagesSitemap',
      components: {
        default: pagesSitemap,
      }
    },
    {
      path: '/pages-invoice',
      name: 'pagesInvoice',
      components: {
        default: pagesInvoice,
      }
    },
    {
      path: '/pages-faqs',
      name: 'pagesFaqs',
      components: {
        default: pagesFaqs,
      }
    },
    {
      path: '/pages-search-result',
      name: 'pagesSearchResults',
      components: {
        default: pagesSearchResults,
      }
    },
    {
      path: '/pages-pricing',
      name: 'pagesPricing',
      components: {
        default: pagesPricing,
      }
    },
    {
      path: '/pages-maintenance',
      name: 'pagesMaintenance',
      components: {
        default: pagesMaintenance,
      }
    },
    {
      path: '/pages-comingsoon',
      name: 'pagesComingSoon',
      components: {
        default: pagesComingSoon,
      }
    },
    {
      path: '/pages-gallery',
      name: 'pagesGallery',
      components: {
        default: pagesGallery,
      }
    },
    {
      path: '/pages-404',
      name: 'pages404',
      component: pages404
    },
    {
      path: '/pages-404-two',
      name: 'pages404Two',
      component: pages404Two
    },
    {
      path: '/pages-404-alt',
      name: 'pages404Alt',
      components: {
        default: pages404Alt,
      }
    },
    {
      path: '/pages-500',
      name: 'pages500',
      component: pages500
    },
    {
      path: '/pages-500-two',
      name: 'pages500Two',
      component: pages500Two
    },

    //Layouts

    //----------------------Components--------------------
    //Base Ui
    {
      path: '/ui-avatars',
      name: 'UiAvatars',
      components: {
        default: UiAvatars,
      }
    },
    {
      path: '/ui-buttons',
      name: 'UiButtons',
      components: {
        default: UiButtons,
      }
    },
    {
      path: '/ui-cards',
      name: 'UiCards',
      components: {
        default: UiCards,
      }
    },
    {
      path: '/ui-carousel',
      name: 'UiCarousel',
      components: {
        default: UiCarousel,
      }
    },
    {
      path: '/ui-dropdowns',
      name: 'UiDropdowns',
      components: {
        default: UiDropdowns,
      }
    },
    {
      path: '/ui-general',
      name: 'UiGeneral',
      components: {
        default: UiGeneral,
      }
    },
    {
      path: '/ui-gid',
      name: 'UiGid',
      components: {
        default: UiGid,
      }
    },
    {
      path: '/ui-images',
      name: 'UiImages',
      components: {
        default: UiImages,
      }
    },
    {
      path: '/ui-list-group',
      name: 'UiListGroup',
      components: {
        default: UiListGroup,
      }
    },
    {
      path: '/ui-modals',
      name: 'UiModals',
      components: {
        default: UiModals,
      }
    },
    {
      path: '/ui-notifications',
      name: 'UiNotifications',
      components: {
        default: UiNotifications,
      }
    },
    {
      path: '/ui-portlets',
      name: 'UiPortlets',
      components: {
        default: UiPortlets,
      }
    },
    {
      path: '/ui-progress',
      name: 'UiProgress',
      components: {
        default: UiProgress,
      }
    },
    {
      path: '/ui-ribbons',
      name: 'UiRibbons',
      components: {
        default: UiRibbons,
      }
    },
    {
      path: '/ui-spinners',
      name: 'UiSpinners',
      components: {
        default: UiSpinners,
      }
    },
    {
      path: '/ui-tabs-accordions',
      name: 'UiTabsAccordions',
      components: {
        default: UiTabsAccordions,
      }
    },
    {
      path: '/ui-tooltips-popovers',
      name: 'UiTooltipsPopovers',
      components: {
        default: UiTooltipsPopovers,
      }
    },
    {
      path: '/ui-typography',
      name: 'UiTypography',
      components: {
        default: UiTypography,
      }
    },
    {
      path: '/ui-video',
      name: 'UiVideo',
      components: {
        default: UiVideo,
      }
    },

    //Extended
    {
      path: '/extended-animation',
      name: 'ExtendedAnimation',
      components: {
        default: ExtendedAnimation,
      }
    },
    {
      path: '/extended-dragula',
      name: 'ExtendedDragula',
      components: {
        default: ExtendedDragula,
      }
    },
    {
      path: '/extended-loading-buttons',
      name: 'ExtendedLoadingButtons',
      components: {
        default: ExtendedLoadingButtons,
      }
    },
    {
      path: '/extended-nestable',
      name: 'ExtendedNestable',
      components: {
        default: ExtendedNestable,
      }
    },
    // {
    // path: '/extended-rangel-slider',
    // name: 'ExtendedRangelSlider',
    // components: {
  
      // default: ExtendedRangelSlider,
      // footer: Footer,
      // leftsidebar: LeftSidebar,
      // rightsidebar: RightSidebar,
    // },
    {
      path: '/extended-scrollspy',
      name: 'ExtendedScrollspy',
      components: {
        default: ExtendedScrollspy,
      }
    },
    // {
    // path: '/extended-sweet-alert',
    // name: 'ExtendedSweeAlert',
    // components: {
  
      // default: ExtendedSweeAlert,
      // footer: Footer,
      // leftsidebar: LeftSidebar,
      // rightsidebar: RightSidebar,
    // },
    {
      path: '/extended-tour',
      name: 'ExtendedTour',
      components: {
        default: ExtendedTour,
      }
    },

    //Widgets
    {
      path: '/widgets',
      name: 'Widgets',
      components: {
        default: Widgets,
      }
    },

    //Icons
    {
      path: '/icons-dripicons',
      name: 'IconsDripicons',
      components: {
        default: IconsDripicons,
      }
    },
    {
      path: '/icons-feather',
      name: 'IconsFeather',
      components: {
        default: IconsFeather,
      }
    },
    {
      path: '/icons-font-awesome',
      name: 'IconsFontAwesome',
      components: {
        default: IconsFontAwesome,
      }
    },
    {
      path: '/icons-mdi',
      name: 'IconsMdi',
      components: {
        default: IconsMdi,
      }
    },
    {
      path: '/icons-simple-line',
      name: 'IconsSimpleLine',
      components: {
        default: IconsSimpleLine,
      }
    },
    {
      path: '/icons-themify',
      name: 'IconsThemify',
      components: {
        default: IconsThemify,
      }
    },
    {
      path: '/icons-two-tone',
      name: 'IconsTwoTone',
      components: {
        default: IconsTwoTone,
      }
    },
    {
      path: '/icons-weather',
      name: 'IconsWeather',
      components: {
        default: IconsWeather,
      }
    },

    //Forms
    {
      path: '/forms-advanced',
      name: 'FormsAdvanced',
      components: {
        default: FormsAdvanced,
      }
    },
    {
      path: '/forms-elements',
      name: 'FormsElements',
      components: {
        default: FormsElements,
      }
    },
    {
      path: '/forms-file-uploads',
      name: 'FormsFileUploads',
      components: {
        default: FormsFileUploads,
      }
    },
    {
      path: '/forms-image-crop',
      name: 'FormsImageCrop',
      components: {
        default: FormsImageCrop,
      }
    },
    {
      path: '/forms-masks',
      name: 'FormsMasks',
      components: {
        default: FormsMasks,
      }
    },
    {
      path: '/forms-pickers',
      name: 'FormsPickers',
      components: {
        default: FormsPickers,
      }
    },
    {
      path: '/forms-quilljs',
      name: 'FormsQuilljs',
      components: {
        default: FormsQuilljs,
      }
    },
    {
      path: '/forms-summernote',
      name: 'FormsSummernote',
      components: {
        default: FormsSummernote,
      }
    },
    {
      path: '/forms-validation',
      name: 'FormsValidation',
      components: {
        default: FormsValidation,
      }
    },
    {
      path: '/forms-wizard',
      name: 'FormsWizard',
      components: {
        default: FormsWizard,
      }
    },

    //Table
    {
      path: '/table-basic',
      name: 'TableBasic',
      components: {
        default: TableBasic,
      }
    },
    {
      path: '/table-bootstrap',
      name: 'TableBootstrap',
      components: {
        default: TableBootstrap,
      }
    },
    {
      path: '/table-datatables',
      name: 'TableDatatables',
      components: {
        default: TableDatatables,
      }
    },
    {
      path: '/table-editable',
      name: 'TableEditable',
      components: {
        default: TableEditable,
      }
    },
    {
      path: '/table-foottables',
      name: 'TableFootables',
      components: {
        default: TableFootables,
      }
    },
    {
      path: '/table-jsgrid',
      name: 'TableJsgrid',
      components: {
        default: TableJsgrid,
      }
    },
    {
      path: '/table-responsive',
      name: 'TableResponsive',
      components: {
        default: TableResponsive,
      }
    },
    {
      path: '/table-tablesaw',
      name: 'TableTablesaw',
      components: {
        default: TableTablesaw,
      }
    },

    //Charts
    {
      path: '/charts-apex',
      name: 'ChartsApex',
      components: {
        default: ChartsApex,
      }
    },
    {
      path: '/charts-c3',
      name: 'ChartsC3',
      components: {
        default: ChartsC3,
      }
    },
    {
      path: '/charts-chartist',
      name: 'ChartsChartist',
      components: {
        default: ChartsChartist,
      }
    },
    {
      path: '/charts-chartjs',
      name: 'ChartsChartjs',
      components: {
        default: ChartsChartjs,
      }
    },
    {
      path: '/charts-flot',
      name: 'ChartsFlot',
      components: {
        default: ChartsFlot,
      }
    },
    {
      path: '/charts-knob',
      name: 'ChartsKnob',
      components: {
        default: ChartsKnob,
      }
    },
    {
      path: '/charts-morris',
      name: 'ChartsMorris',
      components: {
        default: ChartsMorris,
      }
    },
    {
      path: '/charts-peity',
      name: 'ChartsPeity',
      components: {
        default: ChartsPeity,
      }
    },
    {
      path: '/charts-sparklines',
      name: 'ChartsSparklines',
      components: {
        default: ChartsSparklines,
      }
    },

    //Maps
    {
      path: '/maps-google',
      name: 'MapsGoogle',
      components: {
        default: MapsGoogle,
      }
    },
    {
      path: '/maps-mapael',
      name: 'MapsMapael',
      components: {
        default: MapsMapael,
      }
    },
    {
      path: '/maps-vector',
      name: 'MapsVector',
      components: {
        default: MapsVector,
      }
    },
  ],
});
