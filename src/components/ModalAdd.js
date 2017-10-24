import React, { Component } from 'react';
import * as validate from './Validations'

export default class ModalAdd extends Component {
    constructor(props){
        super(props)
        //component state - only to save and render text changes
        this.state={
            title:'',
            author:'',
            date:'',
            url:'',
            errorText:''
        }
    }


    handleChange(input_obj){
        //allow input text to change (controlled object) and update the local state
        var tmp_obj={}
        tmp_obj[input_obj.id]=input_obj.value?input_obj.value:" ";//hack
        this.setState(tmp_obj)
    }

    closeModal(){
        //reset the input texts when closing without saving
        this.setState({
            title:'',
            author:'',
            date:'',
            url:'',
            errorText:''
        })
    }

    addBook(new_book){
        const {book, add_book} = this.props;
        var isValidated=true; //trap validation flag

        // validations.call(this,updated_book,book); // run all the validations
        if (validate.validate_no_blanks(new_book)==false) {
            this.setState({errorText:"no blanks allowed"});
            isValidated=false;                
        }
        if (validate.validate_date(new_book)==false){
            this.setState({errorText:"date invalid"});
            isValidated=false;
        }
        
        //if validations passed - use edit_book callback prop to update the app state.
        if (isValidated) {
            new_book.title=validate.setTitle(new_book.title);
            add_book(new_book);
            this.setState({errorText:""});
        }

    }


    render(){
        const {book} = this.props; 
        //bootstrap modal
        return (
            <div className="modal fade" id="addModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title" id="exampleModalLabel">Add a book</h3>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    {<label htmlFor="title">title:</label>}
                                    {<input type="text" className="form-control" id="title" value={this.state.title} onChange={(e)=>this.handleChange(e.target)}/>}
                                </div>
                                <div className="form-group">
                                    {<label htmlFor="author">author:</label>}
                                    {<input type="text" className="form-control" id="author" value={this.state.author} onChange={(e)=>this.handleChange(e.target)}/>}
                                </div>
                                <div className="form-group">
                                    {<label htmlFor="date">date:</label>}
                                    {<input type="text" className="form-control" id="date" value={this.state.date} onChange={(e)=>this.handleChange(e.target)}/>}
                                </div>
                                <div className="form-group">
                                    {<label htmlFor="url">image url:</label>}
                                    {<input type="text" className="form-control" id="url" value={this.state.url} onChange={(e)=>this.handleChange(e.target)}/>}
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <p className="text-left text-danger">{this.state.errorText}</p>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={()=>this.closeModal()}>Close</button>
                            <button type="button" className="btn btn-primary" onClick={()=>this.addBook(this.state)}>Add</button>
                        </div>
                        </div>
                    </div>
                </div>
        )
    }
}