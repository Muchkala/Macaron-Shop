import Navbar from "@/components/shared/Navbar";
import AppRouter from './routes/AppRouter'
import Footer from "@/components/shared/Footer";

export default function App() {
  return (
    <div>
      <Navbar />
      <AppRouter />
      <Footer/>
    </div>  
  )
}
