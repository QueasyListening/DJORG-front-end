import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NoteCard extends Component {
    render() {
        return (
            <div className="card">
                <Link to={`/noteview/${this.props.note.id}`}>
                    <h6>{this.props.note.title}</h6>
                    <hr/>
                    <div className='cardText'>{this.props.note.content}</div>
                </Link>
            </div>
        )
    }
}

export default NoteCard;