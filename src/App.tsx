import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/Routes';
import './styles/tailwind.css';

function App() {
  return (
    <div className="min-h-screen bg-slate-100">
      <div className="container p-6 mx-auto">
        <div className="flex flex-col items-center prose-headings:font-semibold prose-h1:text-4xl prose-h4:font-semibold prose-em:text-red-600 prose-em:italic prose-h4:mb-2">
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;
