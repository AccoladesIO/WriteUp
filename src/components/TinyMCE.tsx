// components/TinyMCEEditor.js

import React from 'react';
import dynamic from 'next/dynamic';
import { Editor } from '@tinymce/tinymce-react';


type TinyMCEProps = {
  apiKey: string | null | undefined;
  // Add other props as needed
};

const TinyMCE: React.FC<TinyMCEProps> = ({ apiKey }) => {
  const handleEditorChange = (content: any, editor: any) => {
    console.log('Content was updated:', content);
  };

  return (
    <div>
      <h2>TinyMCE Editor</h2>
      <Editor
        apiKey="YOUR_TINYMCE_API_KEY" // Replace with your TinyMCE API key
        initialValue="<p>This is the initial content of the editor</p>"
        init={{
          height: 500,
          menubar: true,
          plugins: ['advlist autolink lists link image charmap print preview anchor', 'searchreplace visualblocks code fullscreen', 'insertdatetime media table paste code help wordcount'],
          toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help',
          content_style: 'body { font-family: Arial, Helvetica, sans-serif; font-size: 14px }',
        }}
        onEditorChange={handleEditorChange}
      />
    </div>
  );
};

export default TinyMCE;
