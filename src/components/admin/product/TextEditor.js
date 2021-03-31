import { CKEditor } from "@ckeditor/ckeditor5-react";
import React, { Component } from "react";
import Editor from "ckeditor5-custom-build/build/ckeditor";

class TextEditor extends Component {
  render() {
    const { value, onChange } = this.props; // <- Dont mind this, just handling objects from props because Im using this as a shared component.

    const custom_config = {
      extraPlugins: [MyCustomUploadAdapterPlugin],
      toolbar: {
        items: [
          "heading",
          "|",
          "fontFamily",
          "fontColor",
          "fontBackgroundColor",
          "fontSize",
          "highlight",
          "|",
          "bold",
          "italic",
          "link",
          "bulletedList",
          "numberedList",
          "|",
          "alignment",
          "outdent",
          "indent",
          "|",
          "imageUpload",
          "blockQuote",
          "insertTable",
          "mediaEmbed",
          "undo",
          "redo",
          "CKFinder",
          "horizontalLine",
          "imageInsert",
          "removeFormat",
          "specialCharacters",
          "restrictedEditingException",
        ],
      },
      language: "vi",
      image: {
        toolbar: [
          "imageTextAlternative",
          "imageStyle:full",
          "imageStyle:side",
          "linkImage",
        ],
      },
      table: {
        contentToolbar: [
          "tableColumn",
          "tableRow",
          "mergeTableCells",
          "tableCellProperties",
          "tableProperties",
        ],
      },
      licenseKey: "",
    };

    return (
      <CKEditor
        required
        editor={Editor}
        config={custom_config}
        data={value}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log(data);
          onChange(data);
        }}
      />
    );
  }
}

function MyCustomUploadAdapterPlugin(editor) {
  editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
    return new MyUploadAdapter(loader);
  };
}

class MyUploadAdapter {
  constructor(props) {
    // CKEditor 5's FileLoader instance.
    this.loader = props;
    // URL where to send files.
    this.url = "https://kadonfarm.herokuapp.com/api/images/upload";
  }

  // Starts the upload process.
  upload() {
    return new Promise((resolve, reject) => {
      this._initRequest();
      this._initListeners(resolve, reject);
      this._sendRequest();
    });
  }

  // Aborts the upload process.
  abort() {
    if (this.xhr) {
      this.xhr.abort();
    }
  }

  // Example implementation using XMLHttpRequest.
  _initRequest() {
    const xhr = (this.xhr = new XMLHttpRequest());

    xhr.open("POST", this.url, true);
    xhr.responseType = "json";
    xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
    xhr.setRequestHeader("Authorization", "");
  }

  // Initializes XMLHttpRequest listeners.
  _initListeners(resolve, reject) {
    const xhr = this.xhr;
    const loader = this.loader;
    const genericErrorText = `Couldn't upload file: ${loader.file.name}.`;

    xhr.addEventListener("error", () => reject(genericErrorText));
    xhr.addEventListener("abort", () => reject());
    xhr.addEventListener("load", () => {
      const response = xhr.response;
      if (!response || response.error) {
        return reject(
          response && response.error ? response.error.message : genericErrorText
        );
      }

      // If the upload is successful, resolve the upload promise with an object containing
      // at least the "default" URL, pointing to the image on the server.
      resolve({
        default: response.s3Url,
      });
    });

    if (xhr.upload) {
      xhr.upload.addEventListener("progress", (evt) => {
        if (evt.lengthComputable) {
          loader.uploadTotal = evt.total;
          loader.uploaded = evt.loaded;
        }
      });
    }
  }

  // Prepares the data and sends the request.
  _sendRequest() {
    const data = new FormData();

    this.loader.file.then((result) => {
      data.append("img", result);
      this.xhr.send(data);
    });
  }
}

export default TextEditor;
