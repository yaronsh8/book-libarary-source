import React, { Component } from 'react';

export default class ModalDelete extends Component {
    constructor(props){
        super(props)
    }


    deleteBook(book){
        //delete a book
        const {delete_book} = this.props
        delete_book(book)
    }

    render(){
        const {book} = this.props; 
        //bootstrap modal
        return (
            <div className="modal fade" id="deleteModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h3 className="modal-title" id="exampleModalLabel">Delete a book</h3>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>Delete this book?</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal" >Close</button>
                        <button type="button" className="btn btn-primary" onClick={()=>this.deleteBook(book)}>Delete</button>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}