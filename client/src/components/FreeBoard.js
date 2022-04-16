import React, { useState, useEffect } from 'react';
import "../assets/css/bootstrap.min.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import ReactHtmlParser from 'react-html-parser';
import Axios from 'axios';


import '../assets/css/freeboard.css';

const FreeBoard = () => {
    const [boardContent, setBoardContent] = useState({
        title: '',
        content: ''
    });

    const [viewContent, setViewContent] = useState([]);

    useEffect(() => {
      Axios.get('http://localhost:8000/api/get').then((response) => {
        setViewContent(response.data);
      })
    }, [viewContent]);

    const submitContents = () => {
      Axios.post('http://localhost:8000/api/insert', {
        title: boardContent.title,
        content: boardContent.content
      }).then(()=>{
        alert('등록 완료!');
      })
    };

    const getValue = e => {
        const { name, value } = e.target;
        setBoardContent({
            ...boardContent,
            [name]: value
        })
    };

  return (
    <div className="freeboard">
      <div className='container'>
        {viewContent.map(element =>
            <div>
                <h2>{element.title}</h2>
                <div>
                    {ReactHtmlParser(element.content)}
                </div>
            </div>
            )}
      </div>
      <div className='form-wrapper'>
        <input className="title-input" 
            type='text' 
            placeholder='제목'
            onChange={getValue}
            name='title' />
        <CKEditor
          editor={ClassicEditor}
          data="<p></p>"
          onReady={editor => {
            // You can store the "editor" and use when it is needed.
            console.log('Editor is ready to use!', editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
            setBoardContent({
                ...boardContent,
                content: data,
            })
            console.log(boardContent);
          }}
          onBlur={(event, editor) => {
            console.log('Blur.', editor);
          }}
          onFocus={(event, editor) => {
            console.log('Focus.', editor);
          }}
        />
      </div>
      <button className="submit-button"
        onClick={submitContents}>입력</button>
    </div>
  );
};
export default FreeBoard;
