import AppBar from "./components/common/AppBar";
import FormSection from "./view/form";
import PDF from "./view/pdf";

function App() {
  return (
    <>
      <AppBar />
      <section className="flex flex-row h-[100vh] mt-1">
        <div className='w-1/2 border p-2'>
          <PDF />
        </div>
        <div className='w-1/2 border p-2'>
          <FormSection />
        </div>
      </section>
    </>
  );
}

export default App;
