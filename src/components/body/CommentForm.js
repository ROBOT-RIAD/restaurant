import React,{Component} from "react";
import { Form,Button,Input } from "reactstrap";


export class CommentForm extends Component {
    constructor(props)
    {
        super(props);
        this.state ={
            author :"",
            rating:"",
            comment:"",
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit =this.handleSubmit.bind(this);
    }
    handleInputChange = event =>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    handleSubmit = event =>{

        this.props.addComment(this.props.dishId,this.state.rating,this.state.author,this.state.comment)

        this.setState({
            author :"",
            rating:"",
            comment:"",
        });
        event.preventDefault();
    }
  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
            <Input type="text" name="author" value={this.state.author} onChange={this.handleInputChange} placeholder="yourname" required  /> <br/>
            <Input type="select" onChange={this.handleInputChange} name="rating" value={this.state.rating}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            </Input><br/>
            <Input type="textarea" onChange={this.handleInputChange} name="comment" value={this.state.comment} placeholder="your comment" required> <br/>
            </Input>
            <Button type="submit">submit comment </Button>

        </Form>
      </div>
    )
  }
}

export default CommentForm;