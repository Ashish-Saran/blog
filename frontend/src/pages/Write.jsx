import React, { useState, useRef } from 'react';
import JoditEditor from 'jodit-react';

const Write = () => {

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const editor = useRef(null);

  return (
    <div className="write">
      <form action="">
        <input type="text" name="title" id="" autoFocus={true} placeholder='Title'/>
        <input type="text" name="category" id="" placeholder='Category' />
        <textarea name="excerpt" id="" cols="60" rows="3" placeholder='Excerpt'></textarea>
        <label htmlFor="uploadImage">
          Upload Image
          <input type="file" name="" id="" accept='.jpg, .jpeg, .png'
            onChange={(e) => setImage(window.URL.createObjectURL(e.target.files[0]))} />
        </label>
        <JoditEditor
          ref={editor}
          value={content}
        />
        <button className="writeSubmit" type="submit">
            Publish
        </button>
      </form>

    </div>
  )
}

export default Write