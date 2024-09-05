import logo from './logo.svg';
import './App.css';
import './index.css'; // or the path to your CSS file with Tailwind directives


function App() {
  return (
    
    <div className="grid grid-cols-8 grid-rows-6 gap-6 h-screen w-screen p-6 sm:grid-cols-4 sm:grid-rows-4 md:grid-cols-6 md:grid-rows-5 lg:grid-cols-8 lg:grid-rows-6 text-center">
    <div className="col-span-3 row-span-2 bg-orange-500 rounded-lg">logo and image of me</div>
    <div className="col-span-3 col-start-1 row-start-3 bg-orange-500 rounded-lg">headline text</div>
    <div className="col-span-3 row-span-2 col-start-1 row-start-4 bg-orange-500 rounded-lg">about me</div>
    <div className="col-span-3 col-start-1 row-start-6 bg-orange-500 rounded-lg">4</div>
    <div className="col-start-4 row-start-1 bg-orange-500 rounded-lg">download cv</div>
    <div className="col-start-4 row-start-2 bg-orange-500 rounded-lg">6</div>
    <div className="col-start-4 row-start-3 bg-orange-500 rounded-lg">7</div>
    <div className="col-span-4 row-span-3 col-start-5 row-start-1 bg-orange-500 rounded-lg">projects carousel</div>
    <div className="col-span-2 row-span-2 col-start-4 row-start-4 bg-orange-500 rounded-lg">my stack</div>
    <div className="col-span-2 col-start-4 row-start-6 bg-orange-500 rounded-lg">contact</div>
    <div className="col-span-2 col-start-6 row-start-4 bg-orange-500 rounded-lg">11</div>
    <div className="col-span-2 row-span-2 col-start-6 row-start-5 bg-orange-500 rounded-lg">12</div>
    <div className="col-start-8 row-start-4 bg-orange-500 rounded-lg">Github</div>
    <div className="col-start-8 row-start-5 bg-orange-500 rounded-lg">Linkedin</div>
    <div className="col-start-8 row-start-6 bg-orange-500 rounded-lg">Goodreads</div>
  </div>
    
  );
}

export default App;
