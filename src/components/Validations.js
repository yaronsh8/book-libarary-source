

export function validate_no_blanks(book) {
    for (var key in book){
        if ((book[key]==" " || !book[key]) && key!="errorText"){
            return false
        }
    }
}

export function validate_date(book){
    // validate date
    if (isNaN(Date.parse(book.date))){
        return false;
    }
}


export function setTitle(title){
    //capitalize all words in the title (found out about bootstrap text-capitalize later...)
    title= title.split(' ').map(function(item){return (item.charAt(0).toUpperCase() +item.slice(1).toLowerCase()  )}).join(' ')
    //remove non-alphanumeric characters
    title= title.replace(/[^a-z0-9 ]/gi,'');

    return title
}


export function reset_unchanged_fields(new_book, original_book){
    //verify unchanged fields (empty in the local state) are reset to the original data
    if (!new_book.title) new_book.title=original_book.title;
    if (!new_book.author) new_book.author=original_book.author;
    if (!new_book.date) new_book.date=original_book.date;
    if (!new_book.url) new_book.url=original_book.url;   
}
