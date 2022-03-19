import './App.css';

function App() {
  return (
    <div className="app">
        <div className="d-flex justify-content-center">
            <div className="card shadow-l filter-card mt-3">
                <div className="d-flex">
                    <input type="text" className="form-control border-0" placeholder="Search with title"/>
                </div>
            </div>
        </div>
        <div className="row result justify-content-center">
            <div className="col-md-3">
                <div className="card output-card"></div>
            </div>
            <div className="col-md-3">
                <div className="card output-card"></div>
            </div>
            <div className="col-md-3">
                <div className="card output-card"></div>
            </div>
        </div>
        <div className="row mt-3 justify-content-center">
            <div className="col-md-3">
                <div className="card output-card"></div>
            </div>
            <div className="col-md-3">
                <div className="card output-card"></div>
            </div>
            <div className="col-md-3">
                <div className="card output-card"></div>
            </div>
        </div>
        <div className="clip-path"></div>
    </div>
  );
}

export default App;
