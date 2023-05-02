import AppBar from "./components/common/AppBar";
import FormSection from "./view/form";
import PDF from "./view/pdf";

function App() {
  return (
    <>
      <AppBar />
      <section className="flex flex-col md:flex-row h-screen mt-1">
        <div className='md:w-1/2 border p-2 overflow-y-auto'>
          <PDF />
        </div>
        <div className='md:w-1/2 border p-2'>
          <FormSection />
        </div>
      </section>
    </>
  );
}

export default App;
