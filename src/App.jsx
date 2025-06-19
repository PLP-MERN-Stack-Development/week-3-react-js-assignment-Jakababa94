import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import TaskManager from './components/TaskManager';
import ApiData from './components/ApiData';

function App() {

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <Navbar/>

      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6">
          <div className="flex flex-col items-center justify-center">
            <p className="text-lg mb-4">
              Our PLP Task Manager App is designed to help you manage your tasks efficiently.
              It features a user-friendly interface, allowing you to add, edit, and delete tasks with ease.
            </p>            
            <div className="flex items-center gap-4 my-4">
              <span className="text-gray-500 dark:text-white mt-4">
                <TaskManager/>
              </span>
            </div>
          </div>
        </div>
        <div className="mt-8 bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6">
          <ApiData/>
        </div>
      </main>
      <Footer/> 
    </div>
  );
}

export default App;