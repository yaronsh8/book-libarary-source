import React, { Component } from 'react';

export default class Table extends Component {
    constructor(props){
        super(props)
    }

    render(){
        const {book_list, book, edit_book, select_book, delete_book} = this.props;
        return (
            <div>
                <table className="table table-striped panel panel-default">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Date</th>
                            <th>Image</th>
                            <th></th>
                            <th></th>                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            book_list.map( item=>
                                    <tr key={book_list.id}>
                                        <td>
                                            {item.title}
                                        </td>
                                        <td>
                                            {item.author}
                                        </td>
                                        <td>
                                            {item.date}
                                        </td>
                                        <td>
                                            <img src={item.url} alt="book image" width="50" height="50"></img>
                                        </td>
                                        <td>
                                            < button type="button" className="btn btn-primary" data-toggle="modal" data-target="#editModal" onClick={()=>{select_book(item)}}>edit</button>
                                        </td>
                                        <td>
                                            < button type="button" className="btn btn-primary" data-toggle="modal" data-target="#deleteModal" onClick={()=>{select_book(item)}}>delete</button>
                                        </td>
                                </tr>
                            )
                        }
                        </tbody>
                </table>
            </div>
        )
    }
}    