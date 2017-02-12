import React, {Component} from 'react'
const _ = lodash
class BookCheckbox extends Component{
  constructor(props){
    super(props)
    this.state  = {
      checked: this.props.book.transactionCompleted,
    }
  }

  render(){
    console.log(this.props.book);
    return(
      <button onClick={this.clickBox.bind(this)}>
        {this.props.book.transactionCompleted ? 'complete' : 'not complete'}
      </button>

    )
  }

  clickBox(event){
    event.preventDefault()
    Meteor.call('book.completeTransac', FlowRouter.getParam('id'), _.assign({}, this.props.book, {
       transactionCompleted: !this.props.book.transactionCompleted
    }));
  }
}

export default BookCheckbox;
