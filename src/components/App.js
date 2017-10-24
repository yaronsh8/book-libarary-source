import React, { Component } from 'react';
import Table from './Table'
import ModalEdit from './ModalEdit';
import ModalDelete from './ModalDelete';
import ModalAdd from './ModalAdd';
import Head from './Head'

export default class App extends Component {
    constructor(props){
        super(props)
        this.state={
            original_list:[],
            current_book:{}
        }
    }

    componentWillMount(){
        window.fetch('./static/data/data.json')
            .then(response => response.json())
            .then(data => this.setState({
                original_list:data,
                current_book:data[0]
            }))
        
    }


    edit_book(id, book){
        var tmpList=this.state.original_list;
        var i=tmpList.findIndex(item=>item.id==id);
        tmpList[i]=book;
        this.setState({original_list:tmpList})
    }

    select_book(book){
        this.setState({current_book:book});
    }

    delete_book(book){
        var new_list=this.state.original_list;
        var index=new_list.indexOf(book);
        if (index!=-1) {
            new_list.splice(index,1)
            this.setState({original_list:new_list});
        }
    }

    add_book(book){
        var clone_list=this.state.original_list;
        var max_id=(Math.max.apply(Math,clone_list.map(function(o){return o.id;})))
        book.id=max_id+1;
        clone_list.push(book);
        this.setState({original_list:clone_list})


    }

    render() {

        return (
        <div className="container">
            <Head>Book Library</Head>
            <button type="button" className="btn btn-primary pull-right" data-toggle="modal" data-target="#addModal" >add book</button>
            <Table book_list={this.state.original_list} select_book={(book)=>{this.select_book(book)}}/>
            <ModalEdit book={this.state.current_book} edit_book={(id,book)=>{this.edit_book(id,book)}}/>
            <ModalDelete book={this.state.current_book} delete_book={(book)=>{this.delete_book(book)}}/>
            <ModalAdd add_book={(book)=>{this.add_book(book)}}/>
            
        </div>
        )
    }
}

