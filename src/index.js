import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
import {load} from './loading';
import {contacts} from './contacts';
import {menu} from './menu';
import {aboutUs} from './aboutus';

load();
main();

function main() {
        const content = document.querySelector('#content');
        content.innerHTML = `
<div class="header">
        <h1 class="display-4">Ресторан</h1>
        <div class='tab'>
                <button class="tabHome btn btn-link">Главная</button>
                <button class="tabContact btn btn-link">Контакты</button>
                <button class="tabMenu btn btn-link">Меню</button>
                <button class="tabAboutUs btn btn-link">О нас</button>                               
        </div>
</div>
<div class="mainContent">
        <div class="container-fluid">
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                                <div class="carousel-item active">
                                <img src="https://www.selmieldoha.com/resourcefiles/homeimages/exterior-sel-miel-doha_1.jpg" alt="" class="w-100" >
                                </div>
                                <div class="carousel-item">
                                <img src="https://www.selmieldoha.com/resourcefiles/homeimages/selmiel-restaurant-doha_1.jpg" alt="" class="w-100" >
                                </div>
                                <div class="carousel-item">
                                <img src="https://www.thehouseonsathorn.com/resourcefiles/homeimages/paii-interior-1800x757.jpg" alt="" class="w-100" >
                                </div>
                        </div>

                        <a href="#carouselExampleIndicators" class="carousel-control-prev" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                        </a>
                        <a href="#carouselExampleIndicators" class="carousel-control-next" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                        </a>
        </div>
        <div class="container pt-3">
                <div class="row justify-content-around">
                        <div class="col-xs-12 col-sm-6 col-lg-6">      
                                Ресторан морепродуктов и бар на крышe
                        </div>
                        <div class="col-xs-12 col-sm-6 col-lg-6">      
                                Забронировать: +7 000 111 2233
                        </div>
                </div>
        </div>

        <div class="container pt-5">
                <div class="row justify-content-around">
                        <div class="col-xs-12 col-md-6 col-lg-6" class="w-100"> 
                                <img src="https://lmtprovisions.com/wp-content/uploads/2015/06/Rosies-Restaurant-American-Metalcraft-300x300.jpg" alt="" >
                        </div>
                        <div class="col-xs-12 col-md-6 col-lg-6 mt-5">      
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse ipsa tempora fugit corrupti nihil ad rerum alias quis, cumque autem delectus velit reprehenderit debitis minus dolores vitae architecto provident? Voluptatem!
                        </div>
                </div>
        </div>
</div>`;
                     
        const tabContact = document.querySelector('.tabContact');
        const tabMenu = document.querySelector('.tabMenu');
        const tabHome = document.querySelector('.tabHome');
        const tabAboutUs = document.querySelector('.tabAboutUs');

        tabAboutUs.addEventListener('click', () => {
                aboutUs();
        });
        
        tabContact.addEventListener('click', () => {
                contacts();
        });

        tabMenu.addEventListener('click', () => {
                menu();
        });

        tabHome.addEventListener('click', () => {
                main();
        });

}