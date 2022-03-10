'use strict';

import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat.js';
dayjs.extend(customParseFormat);



export function Film(id, title, favorites=false, date, rating) {
    this.id = id,
    this.title = title,
    this.favorites = favorites,
    this.date = typeof(date) != "undefined" ? dayjs(date, 'MMMM DD, YYYY', 'en') : undefined,
    this.rating = rating
}

 