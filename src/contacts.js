function contacts() {
const contentDiv = document.querySelector('.mainContent');
    contentDiv.innerHTML = `
    <div class="container-fluid">  
        <div class="container pt-5">
                <div class="row justify-content-around">
                        <div class="col-xs-12 col-md-8 col-sm-12 col-lg-8">
                        <img src="https://www.scribblemaps.com/api/maps/images/639274_thumb_500x500.jpg" class="w-75">
                        </div>
                        
                </div>
                <p class="pt-3 text-center">      
                            Адрес: Б. Патриарший пер., 6, стр. 1, тел.: (499) 769 3333.
                </p>
        </div>
    </div>`;
}
export {contacts};