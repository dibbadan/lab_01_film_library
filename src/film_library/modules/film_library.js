'use strict';


export function FilmLibrary() {
    
    this.filmArray = [];

    this.addNewFilm = (...film) => {
        this.filmArray.push(...film);
    }

    this.sortByDate = () => {
        let sorted = this.filmArray.sort((a,b) => a.date - b.date);
        sorted.forEach((item) => console.log(item.date['$D']));
    }






    this.showLibrary = (film) => {
        this.filmArray.forEach(film => {
            console.log(film.title);
        });
    }

};

