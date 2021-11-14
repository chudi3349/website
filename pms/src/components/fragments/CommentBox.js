import React from 'react'

function CommentBox() {
    return (
        <>
            <div className='commentBox'>
                <label className='commentBox__label bg-gold text-light'>Comment</label>
            </div>               
            <textarea className='commentBox__textarea' rows='5' cols='48' ></textarea>
        </>
    )
}

export default CommentBox
