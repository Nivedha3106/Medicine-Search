import "../styles.css";
export default function Medicine() {
  return (
    <div className="container">
      <form>
        <div className="container1">
          <label for="M_name">Medicine Name</label>
          <input type="text" id="name" name="M_name" />
          <br></br>
          <br></br>
          <label for="c1">Component 1</label>
          <input type="text" id="c1" name="c1" />
          <br></br>
          <br></br>
          <label for="c2">Component 2</label>
          <input type="text" id="c2" name="c2" />
          <br></br>
          <br></br>
          <label for="c3">Component 3</label>
          <input type="text" id="c3" name="c3" />
          <br></br>
          <br></br>
          <label for="c4">Component 4</label>
          <input type="text" id="c4" name="c4" />
          <br></br>
          <br></br>
          <button type="button" className="btn btn-secondary">
            Save
          </button>
        </div>
        <div className="container0">
          <p>Search Medicine</p>
          <label for="search">Search Components</label>
          <input type="text" id="search" name="search" />
          <br></br>
          <div className="container2">
            <p>Shell Cal</p>
            <label className="radio-inline"></label>
            <input type="radio" name="optradio" />
            Calcium
            <label className="radio-inline"></label>
            <input type="radio" name="optradio" />
            Vitamin D3
            <label className="radio-inline"></label>
            <input type="radio" name="optradio" />
            Oysetr Shell
            <label className="radio-inline"></label>
            <input type="radio" name="optradio" />
            Titanium Dioxide
          </div>
          <div className="container3">
            <p>Celli Cal</p>
            <label className="radio-inline"></label>
            <input type="radio" name="optradio" />
            Calcium
            <label className="radio-inline"></label>
            <input type="radio" name="optradio" />
            Vitamin D3
            <label className="radio-inline"></label>
            <input type="radio" name="optradio" />
            Oysetr Shell
            <label className="radio-inline"></label>
            <input type="radio" name="optradio" />
            Titanium Dioxide
          </div>
        </div>
      </form>
    </div>
  );
}
