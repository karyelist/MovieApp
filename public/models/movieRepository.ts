import { Movie } from "./movie";

export class MovieRepository{

    private movies : Movie[];
    constructor(){
        this.movies=[
            { id: 1, title: "Ağır Roman", desc: "Türkiye'de kentsel dönüşüm ve yeraltı dünyasının karanlık yüzünü anlatan kült bir drama.", img: "assets/img/agirroman.jpg" },
            { id: 2, title: "Fight Club", desc: "Toplumun tüketim alışkanlıklarına ve bireylerin kimlik arayışına eleştirel bir bakış sunan, kült bir film.", img: "assets/img/fight_club.jpg" },
            { id: 3, title: "RainMan", desc: "Otizmli bir adamın özel yeteneklerini keşfeden kardeşinin onunla olan duygusal yolculuğunu anlatan bir drama.", img: "assets/img/rainman.jpg" },
            { id: 4, title: "Hulk", desc: "Bilimsel bir deney sonucunda güçlü bir yaratığa dönüşen Bruce Banner'ın öfkesini kontrol etme mücadelesi.", img: "assets/img/Hulk.jpg" },
            { id: 5, title: "The Marvels", desc: "Marvel evrenindeki süper kahramanların yeni bir takım olarak güçlerini birleştirip evreni kurtarmak için mücadele ettikleri bir aksiyon macera.", img: "assets/img/the_marvels.jpg" }
          ];
    }
  

    getMovies() : Movie[]{
        return this.movies; 
    }
    getMovieById(Id:number):Movie | undefined{
        return this.movies.find(movie => movie.id === Id);
    }


}