import Data from './csvjson.json';
function Table() {
    // handleChange(event) {
    //     this.setState({value: event.target.value});
    //   }

    function show_hide() {
        var click = document.getElementById("list-item");
        if (click.style.display === "none") {
            click.style.display = "block";
        } else {
            click.style.display = "none";
        }
    }

    var count = 0;
    function minus() {
        count = document.getElementById("count").value;
        if (count <= 0) {
            count = 0;
        } else {
            count = --document.getElementById("count").value;
        }
    }

    function plus() {
        count = document.getElementById("count").value;
        count = ++document.getElementById("count").value;
    }

    return (
        <div class="container" style={{ overflowX: 'scroll' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                <div class="item">
                    <h3>قائمة المنتجات</h3>
                </div>
                <div class="item">

                </div>
                <div class="item">
                    <button onClick={show_hide} style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                        <img style={{ marginLeft: '10px' }} src="./img/download.svg" />
                        <p class="small">حمل الملف</p>
                    </button>
                    <div class="option" id="list-item">
                        <p class="small">بصيغة اكسل xlsx</p>
                        <p class="small">بصيغة بي دي اف pdf</p>
                    </div>
                </div>
            </div>
            <div style={{ overflowX: 'scroll', overflowY: 'scroll' }}>
                <table>
                    <thead>
                        <tr>
                            <th>م</th>
                            <th>رقم الصنف</th>
                            <th>البيان</th>
                            <th>السعر</th>
                            <th>العدد</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Data.Data.map((result) => (
                            <tr>
                                <td id="no">{result.no}</td>
                                <td id="id">{result.id}</td>
                                <td id="des">{result.des}</td>
                                <td id="price">{result.price}</td>
                                <td id="counter">
                                    <div id="tablecount" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', margin: '-15px 0' }}>
                                        <button class="moins" onClick={minus} style={{ width: '25px', height: '25px', padding: '0px', fontSize: '20px', fontWeight: 'bolder', borderRadius: '20px', margin: '-15px' }}>-</button>
                                        <input contentEditable="true" type="text" size="25" value="0" id="count" style={{ width: '50px', height: '30px', textAlign: 'center', padding: '10px 10px', margin: '0 10px' }} />
                                        <button class="plus" onClick={plus} style={{ width: '25px', height: '25px', padding: '0px', fontSize: '20px', fontWeight: 'bolder', borderRadius: '20px', margin: '-15px' }}>
                                            <p style={{ margin: 'auto', textAlign: 'center' }} >+</p>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default Table;


