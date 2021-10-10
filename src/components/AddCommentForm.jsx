import React from 'react';

import { MdAttachFile } from 'react-icons/md';
import { AiOutlineSend } from 'react-icons/ai';

const AddCommentForm = () => {
    return (
        <div>
            <form className="add-comment-form">
                <input className="add-comment-form__input-comment" type="text" placeholder="Comment..." required/>
                <input id="add-comment-form__input-file" className="add-comment-form__input-file" type="file" />
                <label htmlFor="add-comment-form__input-file" className="add-comment-form__input-file-label"> <MdAttachFile />Select image</label>
                <button><AiOutlineSend className="add-comment-form__btn-send"/>Send</button>
            </form>
        </div>
    );
};

export default AddCommentForm;