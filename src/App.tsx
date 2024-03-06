//App.tsx
import Quiz from "./components/Quiz";
import Footer from "./components/Footer";
import './App.css';

function App() {
    return (
        <div className="container my-5">
            <Quiz />
            <Footer footer={"Lauren Elliott-Manheim • 2015-2025 • Ex astris, scientia"} />
        </div>
    );
}
 
export default App;