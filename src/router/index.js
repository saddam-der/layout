import Vue from 'vue';
import Router from 'vue-router';

//------------------------------Layout------------------------
import Navbar from '@/components/Layout/Navbar';
import LeftSidebar from '@/components/Layout/LeftSidebar.vue';
import RightSidebar from '@/components/Layout/RightSidebar.vue';
import Footer from '@/components/Layout/Footer';

//----------------------------Navigation--------------------------
import Dashboard1 from '@/components/navigation/dashboard/dashboard-1';
import Dashboard2 from '@/components/navigation/dashboard/dashboard-2';
import Dashboard3 from '@/components/navigation/dashboard/dashboard-3';
import Dashboard4 from '@/components/navigation/dashboard/dashboard-4';

import disasterList from '@/components/bencana/disaster-list.vue';
import disasterAdd from '@/components/bencana/disaster-add.vue';
import disasterEdit from '@/components/bencana/disaster-edit.vue';

//Product
import productList from '@/components/product/product-list';
import productAdd from '@/components/product/product-add';
import productEdit from '@/components/product/product-edit'

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
        navbar: Navbar,
        default: productList,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
    {
      path: '/product/add',
      name: 'productAdd',
      components: {
        navbar: Navbar,
        default: productAdd,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
    {
      path: '/product/edit/:id',
      name: 'productEdit',
      components: {
        navbar: Navbar,
        default: productEdit,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
    {
      path: '/disaster',
      name: 'disasterList',
      components: {
        navbar: Navbar,
        default: disasterList,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
    {
      path: '/disaster/add',
      name: 'disasterAdd',
      components: {
        navbar: Navbar,
        default: disasterAdd,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
    {
      path: '/disaster/edit/:id',
      name: 'disasterEdit',
      components: {
        navbar: Navbar,
        default: disasterEdit,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
    {
      path: '/',
      name: 'Dashboard-1',
      components: {
        navbar: Navbar,
        default: Dashboard1,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
    {
      path: '/dashboard-2',
      name: 'Dashboard2',
      components: {
        navbar: Navbar,
        default: Dashboard2,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
    {
      path: '/dashboard-3',
      name: 'Dashboard3',
      components: {
        navbar: Navbar,
        default: Dashboard3,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
    {
      path: '/dashboard-4',
      name: 'Dashboard4',
      components: {
        navbar: Navbar,
        default: Dashboard4,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },

    //------------------Apps---------------
    //Calendar
    {
      path: '/calendar',
      name: 'Calendar',
      components: {
        navbar: Navbar,
        default: Calendar,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },

    //Chat
    {
      path: '/chat',
      name: 'Chat',
      components: {
        navbar: Navbar,
        default: Chat,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },

    //Ecommerce
    {
      path: '/ecommerce-cart',
      name: 'EcommerceCart',
      components: {
        navbar: Navbar,
        default: EcommerceCart,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
    {
      path: '/ecommerce-checkout',
      name: 'EcommerceCheckout',
      components: {
        navbar: Navbar,
        default: EcommerceCheckout,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
    {
      path: '/ecommerce-customers',
      name: 'EcommerceCustomers',
      components: {
        navbar: Navbar,
        default: EcommerceCustomers,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
    {
      path: '/ecommerce-dashboard',
      name: 'EcommerceDashboard',
      components: {
        navbar: Navbar,
        default: EcommerceDashboard,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
    {
      path: '/ecommerce-order-detail',
      name: 'EcommerceOrderDetail',
      components: {
        navbar: Navbar,
        default: EcommerceOrderDetail,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
    {
      path: '/ecommerce-orders',
      name: 'EcommerceOrders',
      components: {
        navbar: Navbar,
        default: EcommerceOrders,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
    {
      path: '/ecommerce-product-detail',
      name: 'EcommerceProductDetail',
      components: {
        navbar: Navbar,
        default: EcommerceProductDetail,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
    {
      path: '/ecommerce-product-edit',
      name: 'EcommerceProductEdit',
      components: {
        navbar: Navbar,
        default: EcommerceProductEdit,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
    {
      path: '/ecommerce-products',
      name: 'EcommerceProducts',
      components: {
        navbar: Navbar,
        default: EcommerceProducts,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
    {
      path: '/ecommerce-sellers',
      name: 'EcommerceSellers',
      components: {
        navbar: Navbar,
        default: EcommerceSellers,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },

    //CRM
    {
      path: '/crm-contacts',
      name: 'CrmContact',
      components: {
        navbar: Navbar,
        default: CrmContact,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
    {
      path: '/crm-customers',
      name: 'CrmCustomers',
      components: {
        navbar: Navbar,
        default: CrmCustomers,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
    {
      path: '/crm-dashboard',
      name: 'CrmDashboard',
      components: {
        navbar: Navbar,
        default: CrmDashboard,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
    {
      path: '/crm-leads',
      name: 'CrmLeads',
      components: {
        navbar: Navbar,
        default: CrmLeads,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
    {
      path: '/crm-opportunities',
      name: 'CrmOpportunities',
      components: {
        navbar: Navbar,
        default: CrmOpportunities,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },

    //Email
    {
      path: '/email-compose',
      name: 'EmailCompose',
      components: {
        navbar: Navbar,
        default: EmailCompose,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
    {
      path: '/email-inbox',
      name: 'EmailInbox',
      components: {
        navbar: Navbar,
        default: EmailInbox,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
    {
      path: '/email-read',
      name: 'EmailRead',
      components: {
        navbar: Navbar,
        default: EmailRead,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
    {
      path: '/email-templates',
      name: 'EmailTemplate',
      components: {
        navbar: Navbar,
        default: EmailTemplate,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },

    //Social Feed
    {
      path: '/social-feed',
      name: 'AppsSocialFeed',
      components: {
        navbar: Navbar,
        default: AppsSocialFeed,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },

    //Companies
    {
      path: '/companies',
      name: 'Companies',
      components: {
        navbar: Navbar,
        default: AppsCompanies,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },

    //Project
    {
      path: '/project-create',
      name: 'ProjectCreate',
      components: {
        navbar: Navbar,
        default: ProjectCreate,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
    {
      path: '/project-detail',
      name: 'ProjectDetail',
      components: {
        navbar: Navbar,
        default: ProjectDetail,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
    {
      path: '/project-list',
      name: 'ProjectList',
      components: {
        navbar: Navbar,
        default: ProjectList,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },

    //Task
    {
      path: '/task-details',
      name: 'TaskDetails',
      components: {
        navbar: Navbar,
        default: TaskDetails,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
    {
      path: '/task-kanban-board',
      name: 'TaskKanbanBoard',
      components: {
        navbar: Navbar,
        default: TaskKanbanBoard,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
    {
      path: '/task-list',
      name: 'TaskList',
      components: {
        navbar: Navbar,
        default: TaskList,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },

    //Contact
    {
      path: '/contacts-list',
      name: 'ContactList',
      components: {
        navbar: Navbar,
        default: contactsList,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
    {
      path: '/contacts-profile',
      name: 'ContactProfile',
      components: {
        navbar: Navbar,
        default: contactsProfile,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },

    //Tickets
    {
      path: '/tickets-detail',
      name: 'TicketsDetail',
      components: {
        navbar: Navbar,
        default: TicketsDetail,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
    {
      path: '/tickets-list',
      name: 'TicketsList',
      components: {
        navbar: Navbar,
        default: TicketsList,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },

    //File Manager
    {
      path: '/file-manager',
      name: 'FileManager',
      components: {
        navbar: Navbar,
        default: appsFileManager,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
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
        navbar: Navbar,
        default: pagesStarter,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
    {
      path: '/pages-timeline',
      name: 'pagesTimeline',
      components: {
        navbar: Navbar,
        default: pagesTimeline,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
    {
      path: '/pages-sitemap',
      name: 'pagesSitemap',
      components: {
        navbar: Navbar,
        default: pagesSitemap,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
    {
      path: '/pages-invoice',
      name: 'pagesInvoice',
      components: {
        navbar: Navbar,
        default: pagesInvoice,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
    {
      path: '/pages-faqs',
      name: 'pagesFaqs',
      components: {
        navbar: Navbar,
        default: pagesFaqs,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
    {
      path: '/pages-search-result',
      name: 'pagesSearchResults',
      components: {
        navbar: Navbar,
        default: pagesSearchResults,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
    {
      path: '/pages-pricing',
      name: 'pagesPricing',
      components: {
        navbar: Navbar,
        default: pagesPricing,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
    {
      path: '/pages-maintenance',
      name: 'pagesMaintenance',
      components: {
        navbar: Navbar,
        default: pagesMaintenance,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
    {
      path: '/pages-comingsoon',
      name: 'pagesComingSoon',
      components: {
        navbar: Navbar,
        default: pagesComingSoon,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
    {
      path: '/pages-gallery',
      name: 'pagesGallery',
      components: {
        navbar: Navbar,
        default: pagesGallery,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
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
        navbar: Navbar,
        default: pages404Alt,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
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
        navbar: Navbar,
        default: UiAvatars,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
    {
      path: '/ui-buttons',
      name: 'UiButtons',
      components: {
        navbar: Navbar,
        default: UiButtons,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
    {
      path: '/ui-cards',
      name: 'UiCards',
      components: {
        navbar: Navbar,
        default: UiCards,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
    {
      path: '/ui-carousel',
      name: 'UiCarousel',
      components: {
        navbar: Navbar,
        default: UiCarousel,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
    {
      path: '/ui-dropdowns',
      name: 'UiDropdowns',
      components: {
        navbar: Navbar,
        default: UiDropdowns,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
    {
      path: '/ui-general',
      name: 'UiGeneral',
      components: {
        navbar: Navbar,
        default: UiGeneral,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
    {
      path: '/ui-gid',
      name: 'UiGid',
      components: {
        navbar: Navbar,
        default: UiGid,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
    {
      path: '/ui-images',
      name: 'UiImages',
      components: {
        navbar: Navbar,
        default: UiImages,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
    {
      path: '/ui-list-group',
      name: 'UiListGroup',
      components: {
        navbar: Navbar,
        default: UiListGroup,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
    {
      path: '/ui-modals',
      name: 'UiModals',
      components: {
        navbar: Navbar,
        default: UiModals,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
    {
      path: '/ui-notifications',
      name: 'UiNotifications',
      components: {
        navbar: Navbar,
        default: UiNotifications,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
    {
      path: '/ui-portlets',
      name: 'UiPortlets',
      components: {
        navbar: Navbar,
        default: UiPortlets,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
    {
      path: '/ui-progress',
      name: 'UiProgress',
      components: {
        navbar: Navbar,
        default: UiProgress,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
    {
      path: '/ui-ribbons',
      name: 'UiRibbons',
      components: {
        navbar: Navbar,
        default: UiRibbons,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
    {
      path: '/ui-spinners',
      name: 'UiSpinners',
      components: {
        navbar: Navbar,
        default: UiSpinners,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
    {
      path: '/ui-tabs-accordions',
      name: 'UiTabsAccordions',
      components: {
        navbar: Navbar,
        default: UiTabsAccordions,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
    {
      path: '/ui-tooltips-popovers',
      name: 'UiTooltipsPopovers',
      components: {
        navbar: Navbar,
        default: UiTooltipsPopovers,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
    {
      path: '/ui-typography',
      name: 'UiTypography',
      components: {
        navbar: Navbar,
        default: UiTypography,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
    {
      path: '/ui-video',
      name: 'UiVideo',
      components: {
        navbar: Navbar,
        default: UiVideo,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },

    //Extended
    {
      path: '/extended-animation',
      name: 'ExtendedAnimation',
      components: {
        navbar: Navbar,
        default: ExtendedAnimation,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
    {
      path: '/extended-dragula',
      name: 'ExtendedDragula',
      components: {
        navbar: Navbar,
        default: ExtendedDragula,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
    {
      path: '/extended-loading-buttons',
      name: 'ExtendedLoadingButtons',
      components: {
        navbar: Navbar,
        default: ExtendedLoadingButtons,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
    {
      path: '/extended-nestable',
      name: 'ExtendedNestable',
      components: {
        navbar: Navbar,
        default: ExtendedNestable,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
    // {
    // path: '/extended-rangel-slider',
    // name: 'ExtendedRangelSlider',
    // components: {
      // navbar: Navbar,
      // default: ExtendedRangelSlider,
      // footer: Footer,
      // leftsidebar: LeftSidebar,
      // rightsidebar: RightSidebar,
    // },
    {
      path: '/extended-scrollspy',
      name: 'ExtendedScrollspy',
      components: {
        navbar: Navbar,
        default: ExtendedScrollspy,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
    // {
    // path: '/extended-sweet-alert',
    // name: 'ExtendedSweeAlert',
    // components: {
      // navbar: Navbar,
      // default: ExtendedSweeAlert,
      // footer: Footer,
      // leftsidebar: LeftSidebar,
      // rightsidebar: RightSidebar,
    // },
    {
      path: '/extended-tour',
      name: 'ExtendedTour',
      components: {
        navbar: Navbar,
        default: ExtendedTour,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },

    //Widgets
    {
      path: '/widgets',
      name: 'Widgets',
      components: {
        navbar: Navbar,
        default: Widgets,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },

    //Icons
    {
      path: '/icons-dripicons',
      name: 'IconsDripicons',
      components: {
        navbar: Navbar,
        default: IconsDripicons,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
    {
      path: '/icons-feather',
      name: 'IconsFeather',
      components: {
        navbar: Navbar,
        default: IconsFeather,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
    {
      path: '/icons-font-awesome',
      name: 'IconsFontAwesome',
      components: {
        navbar: Navbar,
        default: IconsFontAwesome,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
    {
      path: '/icons-mdi',
      name: 'IconsMdi',
      components: {
        navbar: Navbar,
        default: IconsMdi,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
    {
      path: '/icons-simple-line',
      name: 'IconsSimpleLine',
      components: {
        navbar: Navbar,
        default: IconsSimpleLine,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
    {
      path: '/icons-themify',
      name: 'IconsThemify',
      components: {
        navbar: Navbar,
        default: IconsThemify,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
    {
      path: '/icons-two-tone',
      name: 'IconsTwoTone',
      components: {
        navbar: Navbar,
        default: IconsTwoTone,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
    {
      path: '/icons-weather',
      name: 'IconsWeather',
      components: {
        navbar: Navbar,
        default: IconsWeather,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },

    //Forms
    {
      path: '/forms-advanced',
      name: 'FormsAdvanced',
      components: {
        navbar: Navbar,
        default: FormsAdvanced,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
    {
      path: '/forms-elements',
      name: 'FormsElements',
      components: {
        navbar: Navbar,
        default: FormsElements,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
    {
      path: '/forms-file-uploads',
      name: 'FormsFileUploads',
      components: {
        navbar: Navbar,
        default: FormsFileUploads,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
    {
      path: '/forms-image-crop',
      name: 'FormsImageCrop',
      components: {
        navbar: Navbar,
        default: FormsImageCrop,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
    {
      path: '/forms-masks',
      name: 'FormsMasks',
      components: {
        navbar: Navbar,
        default: FormsMasks,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
    {
      path: '/forms-pickers',
      name: 'FormsPickers',
      components: {
        navbar: Navbar,
        default: FormsPickers,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
    {
      path: '/forms-quilljs',
      name: 'FormsQuilljs',
      components: {
        navbar: Navbar,
        default: FormsQuilljs,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
    {
      path: '/forms-summernote',
      name: 'FormsSummernote',
      components: {
        navbar: Navbar,
        default: FormsSummernote,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
    {
      path: '/forms-validation',
      name: 'FormsValidation',
      components: {
        navbar: Navbar,
        default: FormsValidation,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
    {
      path: '/forms-wizard',
      name: 'FormsWizard',
      components: {
        navbar: Navbar,
        default: FormsWizard,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },

    //Table
    {
      path: '/table-basic',
      name: 'TableBasic',
      components: {
        navbar: Navbar,
        default: TableBasic,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
    {
      path: '/table-bootstrap',
      name: 'TableBootstrap',
      components: {
        navbar: Navbar,
        default: TableBootstrap,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
    {
      path: '/table-datatables',
      name: 'TableDatatables',
      components: {
        navbar: Navbar,
        default: TableDatatables,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
    {
      path: '/table-editable',
      name: 'TableEditable',
      components: {
        navbar: Navbar,
        default: TableEditable,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
    {
      path: '/table-foottables',
      name: 'TableFootables',
      components: {
        navbar: Navbar,
        default: TableFootables,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
    {
      path: '/table-jsgrid',
      name: 'TableJsgrid',
      components: {
        navbar: Navbar,
        default: TableJsgrid,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
    {
      path: '/table-responsive',
      name: 'TableResponsive',
      components: {
        navbar: Navbar,
        default: TableResponsive,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
    {
      path: '/table-tablesaw',
      name: 'TableTablesaw',
      components: {
        navbar: Navbar,
        default: TableTablesaw,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },

    //Charts
    {
      path: '/charts-apex',
      name: 'ChartsApex',
      components: {
        navbar: Navbar,
        default: ChartsApex,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
    {
      path: '/charts-c3',
      name: 'ChartsC3',
      components: {
        navbar: Navbar,
        default: ChartsC3,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
    {
      path: '/charts-chartist',
      name: 'ChartsChartist',
      components: {
        navbar: Navbar,
        default: ChartsChartist,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
    {
      path: '/charts-chartjs',
      name: 'ChartsChartjs',
      components: {
        navbar: Navbar,
        default: ChartsChartjs,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
    {
      path: '/charts-flot',
      name: 'ChartsFlot',
      components: {
        navbar: Navbar,
        default: ChartsFlot,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
    {
      path: '/charts-knob',
      name: 'ChartsKnob',
      components: {
        navbar: Navbar,
        default: ChartsKnob,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
    {
      path: '/charts-morris',
      name: 'ChartsMorris',
      components: {
        navbar: Navbar,
        default: ChartsMorris,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
    {
      path: '/charts-peity',
      name: 'ChartsPeity',
      components: {
        navbar: Navbar,
        default: ChartsPeity,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
    {
      path: '/charts-sparklines',
      name: 'ChartsSparklines',
      components: {
        navbar: Navbar,
        default: ChartsSparklines,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },

    //Maps
    {
      path: '/maps-google',
      name: 'MapsGoogle',
      components: {
        navbar: Navbar,
        default: MapsGoogle,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
    {
      path: '/maps-mapael',
      name: 'MapsMapael',
      components: {
        navbar: Navbar,
        default: MapsMapael,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
    {
      path: '/maps-vector',
      name: 'MapsVector',
      components: {
        navbar: Navbar,
        default: MapsVector,
        footer: Footer,
        leftsidebar: LeftSidebar,
        rightsidebar: RightSidebar,
      }
    },
  ],
});
