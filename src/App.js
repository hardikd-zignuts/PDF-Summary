import AppBar from "./components/common/AppBar";
import FormSection from "./view/form";
import PDF from "./view/pdf";
import './App.css';
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster />
      <div className="dark:bg-gray-800">
        <AppBar />
        <section className="flex flex-col md:flex-row h-screen mt-1">
          <div className='md:w-1/2 border p-2 overflow-y-auto dark:bg-gray-800'>
            <PDF />
          </div>
          <div className='md:w-1/2 border p-2 dark:bg-gray-800'>
            <FormSection />
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
