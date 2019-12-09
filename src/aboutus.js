function aboutUs() {

    const contentDiv = document.querySelector('.mainContent');
    contentDiv.innerHTML = `
    <div class="container-fluid">  
        <div class="container pt-5">
                <div class="row justify-content-around">
                        <div class="col-xs-12 col-md-12 col-sm-8 col-lg-6">
                            <img src="https://i.pinimg.com/474x/0f/81/5a/0f815a508b087334f0958cf4a9f122f5.jpg" alt="" class="w-100">
                        </div>
                        <div class="col-xs-12 col-md-12 col-sm-6 col-lg-6 mt-5">      
                            Кухня отеля Four Seasons всегда была великолепной, и сейчас - еще более, чем раньше. Отель представляет кухню на
                            все вкусы и случаи жизни, имеет пять ресторанов с широким выбором традиционных и экзотических блюд в элегантной
                            обстановке и сопровождении живой музыки
                        </div>
                </div>
        </div>
    </div>
                            `;
}

export {aboutUs};