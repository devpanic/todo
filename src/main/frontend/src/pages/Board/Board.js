import React, {Component} from 'react';
import './Board.css';

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            newItem: '',
            editIndex: null,
            editText: '',
        };
    }

    handleChange = (e) => {
        this.setState({newItem: e.target.value});
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.newItem.trim()) {
            this.setState({
                items: [...this.state.items, this.state.newItem],
                newItem: '',
            });
        }
    };

    handleDelete = (index) => {
        const newItems = [...this.state.items];
        newItems.splice(index, 1);
        this.setState({items: newItems});
    };

    handleEdit = (index) => {
        const editText = this.state.items[index];
        this.setState({editIndex: index, editText});
    };

    handleSave = () => {
        const newItems = [...this.state.items];
        newItems[this.state.editIndex] = this.state.editText;
        this.setState({items: newItems, editIndex: null, editText: ''});
    };
    
    render() {
        return (
            <div className="board">
                <h1>CRUD Board</h1>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        value={this.state.newItem}
                        onChange={this.handleChange}
                        placeholder="Enter a new item"
                    />
                    <button type="submit">Add</button>
                </form>
                <ul>
                    {this.state.items.map((item, index) => (
                        <li key={index}>
                            {this.state.editIndex === index ? (
                                <input
                                    type="text"
                                    value={this.state.editText}
                                    onChange={(e) => this.setState({editText: e.target.value})}
                                />
                            ) : (
                                <span>{item}</span>
                            )}
                            {this.state.editIndex === index ? (
                                <button onClick={this.handleSave}>Save</button>
                            ) : (
                                <>
                                    <button onClick={() => this.handleEdit(index)}>Edit</button>
                                    <button onClick={() => this.handleDelete(index)}>Delete</button>
                                </>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Board;