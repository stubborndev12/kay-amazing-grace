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