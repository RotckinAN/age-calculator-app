import Footer from './Footer';
import InputsDashboard from './InputsDashboard';
import ResultDashboard from './ResultDashboard';

function App() {
   return (
      <div className="flex flex-col min-h-screen justify-center items-center bg-off-white box-border">
         <main className="bg-white desktop:w-[850px] desktop:h-[680px] desktop:p-[60px] rounded-[25px] desktop:rounded-br-[200px] mobile:w-[350px] mobile:h-[490px] mobile:rounded-br-[90px] mobile:px-[25px] mobile:py-[50px]">
            <InputsDashboard />
            <ResultDashboard />
         </main>
         <Footer />
      </div>
   );
}

export default App;
