import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';
import AppLayout from './components/layout/AppLayout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import AdminLayout from './components/admin/AdminLayout';
import AdminGuard from './components/admin/AdminGuard';
import AdminLogin from './pages/admin/Login';
import AdminDashboard from './pages/admin/Dashboard';
import AdminCatalog from './pages/admin/Catalog';
import AdminInquiries from './pages/admin/Inquiries';
import AdminNewArrivals from './pages/admin/NewArrivals';
import AdminReviews from './pages/admin/Reviews';
import AdminGallery from './pages/admin/Gallery';
import AdminSettings from './pages/admin/Settings';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import FAQ from './pages/FAQ';
import OkirikaBalesAba from './pages/seo/OkirikaBalesAba';
import ThriftBalesNigeria from './pages/seo/ThriftBalesNigeria';
import KoreaBales from './pages/seo/KoreaBales';
import MixedBales from './pages/seo/MixedBales';
import LadiesBales from './pages/seo/LadiesBales';
import MenBales from './pages/seo/MenBales';
import ShoesBagsBales from './pages/seo/ShoesBagsBales';
import Delivery from './pages/seo/Delivery';
import ChildrenBales from './pages/seo/ChildrenBales';
import CorporateWearBales from './pages/seo/CorporateWearBales';
import BoutiqueReseller from './pages/seo/BoutiqueReseller';
import OkirikainAba from './pages/seo/OkirikainAba';
import OkirikainNigeria from './pages/seo/OkirikainNigeria';
import WholesaleOkirika from './pages/seo/WholesaleOkirika';
import KoreaBaleSupplier from './pages/seo/KoreaBaleSupplier';
import MixedBaleSupplier from './pages/seo/MixedBaleSupplier';
import LadiesBaleSupplier from './pages/seo/LadiesBaleSupplier';
import MenBaleSupplier from './pages/seo/MenBaleSupplier';
import ChildrenClothingBaleSupplier from './pages/seo/ChildrenClothingBaleSupplier';
import ShoeBaleSupplier from './pages/seo/ShoeBaleSupplier';
import BagBaleSupplier from './pages/seo/BagBaleSupplier';
import SecondHandClothesNigeria from './pages/seo/SecondHandClothesNigeria';
import UsedClothesSupplier from './pages/seo/UsedClothesSupplier';
import OkirikaStoreAba from './pages/seo/OkirikaStoreAba';
import BestOkirikaSupplier from './pages/seo/BestOkirikaSupplier';
import CheapOkirikaBales from './pages/seo/CheapOkirikaBales';
import QualityThriftBales from './pages/seo/QualityThriftBales';
import AriariaMarketOkirika from './pages/seo/AriariaMarketOkirika';
import WholesaleClothingSupplier from './pages/seo/WholesaleClothingSupplier';
import BoutiqueStockSupplier from './pages/seo/BoutiqueStockSupplier';
import ShoesBalesNigeria from './pages/seo/ShoesBalesNigeria';
import BagBalesNigeria from './pages/seo/BagBalesNigeria';
import ChildrenClothingBalesNigeria from './pages/seo/ChildrenClothingBalesNigeria';
import OkirikaSupplierNigeria from './pages/seo/OkirikaSupplierNigeria';
import ThriftBaleSupplierAba from './pages/seo/ThriftBaleSupplierAba';
import SportswearBalesNigeria from './pages/seo/SportswearBalesNigeria';
import CorporateWearSupplierNigeria from './pages/seo/CorporateWearSupplierNigeria';
import OkirikaLagos from './pages/seo/OkirikaLagos';
import OkirikaAbuja from './pages/seo/OkirikaAbuja';
import OkirikaPortHarcourt from './pages/seo/OkirikaPortHarcourt';
import OkirikaEnugu from './pages/seo/OkirikaEnugu';
import GradeAOkirikaNigeria from './pages/seo/GradeAOkirikaNigeria';
import UKBalesNigeria from './pages/seo/UKBalesNigeria';
import USABalesNigeria from './pages/seo/USABalesNigeria';
import OkirikaWholesaleAbia from './pages/seo/OkirikaWholesaleAbia';
import OkirikaResellerNigeria from './pages/seo/OkirikaResellerNigeria';
import NationwideDeliveryOkirika from './pages/seo/NationwideDeliveryOkirika';
import BulkOkirikaBuyer from './pages/seo/BulkOkirikaBuyer';
import OkirikaOnlineNigeria from './pages/seo/OkirikaOnlineNigeria';

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  // Show loading spinner while checking app public settings or auth
  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div>
      </div>
    );
  }

  // Handle authentication errors
  if (authError) {
    if (authError.type === 'user_not_registered') {
      return <UserNotRegisteredError />;
    } else if (authError.type === 'auth_required') {
      // Redirect to login automatically
      navigateToLogin();
      return null;
    }
  }

  // Render the main app
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/seo/okirika-bales-aba" element={<OkirikaBalesAba />} />
        <Route path="/seo/thrift-bales-nigeria" element={<ThriftBalesNigeria />} />
        <Route path="/seo/korea-bales" element={<KoreaBales />} />
        <Route path="/seo/mixed-bales" element={<MixedBales />} />
        <Route path="/seo/ladies-bales" element={<LadiesBales />} />
        <Route path="/seo/men-bales" element={<MenBales />} />
        <Route path="/seo/shoes-bags-bales" element={<ShoesBagsBales />} />
        <Route path="/seo/delivery" element={<Delivery />} />
        <Route path="/seo/children-bales" element={<ChildrenBales />} />
        <Route path="/seo/corporate-wear-bales" element={<CorporateWearBales />} />
        <Route path="/seo/boutique-reseller" element={<BoutiqueReseller />} />
        {/* New dedicated SEO supplier pages */}
        <Route path="/okirika-in-aba" element={<OkirikainAba />} />
        <Route path="/okirika-in-nigeria" element={<OkirikainNigeria />} />
        <Route path="/wholesale-okirika" element={<WholesaleOkirika />} />
        <Route path="/korea-bale-supplier-nigeria" element={<KoreaBaleSupplier />} />
        <Route path="/mixed-bale-supplier" element={<MixedBaleSupplier />} />
        <Route path="/ladies-bale-supplier" element={<LadiesBaleSupplier />} />
        <Route path="/men-bale-supplier" element={<MenBaleSupplier />} />
        <Route path="/children-clothing-bale-supplier" element={<ChildrenClothingBaleSupplier />} />
        <Route path="/shoe-bale-supplier" element={<ShoeBaleSupplier />} />
        <Route path="/bag-bale-supplier" element={<BagBaleSupplier />} />
        {/* Additional high-intent keyword pages */}
        <Route path="/second-hand-clothes-nigeria" element={<SecondHandClothesNigeria />} />
        <Route path="/used-clothes-supplier" element={<UsedClothesSupplier />} />
        <Route path="/okirika-store-aba" element={<OkirikaStoreAba />} />
        <Route path="/best-okirika-supplier" element={<BestOkirikaSupplier />} />
        <Route path="/cheap-okirika-bales" element={<CheapOkirikaBales />} />
        <Route path="/quality-thrift-bales" element={<QualityThriftBales />} />
        <Route path="/ariaria-market-okirika" element={<AriariaMarketOkirika />} />
        <Route path="/wholesale-clothing-supplier" element={<WholesaleClothingSupplier />} />
        <Route path="/boutique-stock-supplier" element={<BoutiqueStockSupplier />} />
        <Route path="/shoe-bales-nigeria" element={<ShoesBalesNigeria />} />
        <Route path="/bag-bales-nigeria" element={<BagBalesNigeria />} />
        <Route path="/children-clothing-bales" element={<ChildrenClothingBalesNigeria />} />
        <Route path="/okirika-supplier-nigeria" element={<OkirikaSupplierNigeria />} />
        <Route path="/thrift-bale-supplier-aba" element={<ThriftBaleSupplierAba />} />
        <Route path="/sportswear-bales-nigeria" element={<SportswearBalesNigeria />} />
        <Route path="/corporate-wear-supplier-nigeria" element={<CorporateWearSupplierNigeria />} />
        <Route path="/okirika-lagos" element={<OkirikaLagos />} />
        <Route path="/okirika-abuja" element={<OkirikaAbuja />} />
        <Route path="/okirika-port-harcourt" element={<OkirikaPortHarcourt />} />
        <Route path="/okirika-enugu" element={<OkirikaEnugu />} />
        <Route path="/grade-a-okirika-nigeria" element={<GradeAOkirikaNigeria />} />
        <Route path="/uk-bales-nigeria" element={<UKBalesNigeria />} />
        <Route path="/usa-bales-nigeria" element={<USABalesNigeria />} />
        <Route path="/okirika-wholesale-abia" element={<OkirikaWholesaleAbia />} />
        <Route path="/okirika-reseller-nigeria" element={<OkirikaResellerNigeria />} />
        <Route path="/nationwide-delivery-okirika" element={<NationwideDeliveryOkirika />} />
        <Route path="/bulk-okirika-buyer" element={<BulkOkirikaBuyer />} />
        <Route path="/okirika-online-nigeria" element={<OkirikaOnlineNigeria />} />
      </Route>
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route
        path="/admin"
        element={
          <AdminGuard>
            <AdminLayout />
          </AdminGuard>
        }
      >
        <Route index element={<AdminDashboard />} />
        <Route path="catalog" element={<AdminCatalog />} />
        <Route path="inquiries" element={<AdminInquiries />} />
        <Route path="new-arrivals" element={<AdminNewArrivals />} />
        <Route path="reviews" element={<AdminReviews />} />
        <Route path="gallery" element={<AdminGallery />} />
        <Route path="settings" element={<AdminSettings />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};


function App() {

  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <AuthenticatedApp />
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App