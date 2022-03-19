import Card from './components/Card/Card';
import style from './css/style.module.scss';


function App() {
  return (
    <div className={style["app"]}>
        <div className={style["search__box--header"]}>
            <div className={style["card"]}>
                <div className={style["search__container"]}>
                    <input type="text" className={style["search__box"]} placeholder="Search with title"/>
                </div>
            </div>
        </div>

        <Card/>
       
        <div className={style["clip-path"]}></div>
    </div>
  );
}

export default App;
