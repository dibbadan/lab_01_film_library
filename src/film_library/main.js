'use strict';

import { Film } from "./modules/film.js";
import { FilmLibrary} from "./modules/film_library.js";

const fl = new FilmLibrary();
const film1 = new Film(1, "Pulp Fiction", true, "March 10, 2022", 5);
const film2 = new Film(2, "21 Grams", true, "March 17, 2022", 4 );
const film3 = new Film(3, "Star Wars", false, undefined, undefined );
const film4 = new Film(4, "Matrix", false, undefined, undefined );
const film5 = new Film(5, "Shrek", false, "March 21, 2022", 3 );

fl.addNewFilm(film1, film2, film3, film4, film5);


