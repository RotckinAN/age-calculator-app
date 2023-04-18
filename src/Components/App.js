import Footer from '../Footer';
import InputsDashboard from './InputsDashboard';

function App() {
   return (
      <div className="flex flex-col min-h-screen justify-center items-center bg-off-white box-border">
         <main className="bg-white w-[500px]">
            <InputsDashboard />
         </main>
         <Footer />
      </div>
   );
}

export default App;
