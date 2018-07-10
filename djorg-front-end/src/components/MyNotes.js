import React, { Component } from 'react';
import NoteCard from './NoteCard';

class MyNotes extends Component {
    render() {
        return (
            <div>
                <div className='row'>
                    <div className='col'>
                        <h4>My Notes:</h4>
                    </div>
                </div>
                <div className='row'>
                    <div className='col d-flex'>
                        {this.props.notes.map(note => {
                            return (<NoteCard note={note} key={note.id}/>)
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default MyNotes;