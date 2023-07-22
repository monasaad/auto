function Filter() {
    function brand_menu() {
        var click = document.getElementById("brand-list");
        if (click.style.display === "none") {
            click.style.display = "block";
        } else {
            click.style.display = "none";
        }
    }
    function sort_menu() {
        var click = document.getElementById("sort-list");
        if (click.style.display === "none") {
            click.style.display = "block";
        } else {
            click.style.display = "none";
        }
    }
    return (

        <div class="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', alignContent: 'flex-end' }}>
            <div class="item">
                <p class="small ">ابحث برقم القطعة</p>
                <input type='text' placeholder='ادخل رقم القطعة'></input>
            </div>

            <div class="item">
                <p class="small">اختر الماركة</p>
                <select>
                    <option value="">الكل</option>
                    <option value="تويوتا">
                        تويوتا</option>
                    <option value="نيسان">
                        نيسان</option>
                    <option value="نيسان">
                        نيسان</option>
                </select>
            </div>

            <div class="item">
                <p class="small">رتب حسب</p>
                <select>
                    <option>وصل حديثًا</option>
                    <option>العروض</option>
                    <option>الأكثر مبيعًا</option>
                    <option>الأقل سعر</option>
                    <option>أبجديًا</option>
                </select>
            </div>

            <div class="item">
                <p class="small "></p>
                <button style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <img style={{ marginLeft: '10px' }} src="./img/upload.svg" />
                    <p class="small">ارفع ملف اكسل</p>
                </button>
            </div>
        </div>

    );
}
export default Filter;