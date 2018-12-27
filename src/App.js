import React, { Component } from 'react';

import Panel from './components/Panel.js'

class App extends Component {
  state ={
    textareaVal: '',
    piece:''
  }


  onBold = (e) => {
    let textVal = this.refs.myTextarea; 
    let cursorStart = textVal.selectionStart;
    let cursorEnd = textVal.selectionEnd;
    const pice = this.state.textareaVal.substring(cursorStart,cursorEnd);
    const start = this.state.textareaVal.substring(0,cursorStart);
    const end = this.state.textareaVal.substring(cursorEnd+1,this.state.textareaVal.length);
    this.setState ({piece: pice}) 
    var editor = document.getElementById("editline");
    editor.innerHTML = "<span classname='normal'>" + start + "</span>" + "<span classname='bold'>" + pice + "</span>" + "<span classname='normal'>" + end + "</span>";
  }
  onRed = (e) => {
    let textVal = this.refs.myTextarea; 
    let cursorStart = textVal.selectionStart;
    let cursorEnd = textVal.selectionEnd;
    const pice = this.state.textareaVal.substring(cursorStart,cursorEnd);
    const start = this.state.textareaVal.substring(0,cursorStart);
    const end = this.state.textareaVal.substring(cursorEnd+1,this.state.textareaVal.length);
    this.setState ({piece: pice}) 
    var editor = document.getElementById("editline");
    editor.innerHTML = "<span classname='normal'>" + start + "</span>" + "<span classname='red'>" + pice + "</span>" + "<span classname='normal'>" + end + "</span>";

  }
  onBlack = (e) => {
    let textVal = this.refs.myTextarea; 
    let cursorStart = textVal.selectionStart;
    let cursorEnd = textVal.selectionEnd;
    const pice = this.state.textareaVal.substring(cursorStart,cursorEnd);
    const start = this.state.textareaVal.substring(0,cursorStart);
    const end = this.state.textareaVal.substring(cursorEnd+1,this.state.textareaVal.length);
    this.setState ({piece: pice}) 
    var editor = document.getElementById("editline");
    editor.innerHTML = "<span classname='normal'>" + start + "</span>" + "<span classname='black'>" + pice + "</span>" + "<span classname='normal'>" + end + "</span>";
  }
  onNormal = (e) => {
    let textVal = this.refs.myTextarea; 
    let cursorStart = textVal.selectionStart;
    let cursorEnd = textVal.selectionEnd;
    const pice = this.state.textareaVal.substring(cursorStart,cursorEnd);
    const start = this.state.textareaVal.substring(0,cursorStart);
    const end = this.state.textareaVal.substring(cursorEnd+1,this.state.textareaVal.length);
    this.setState ({piece: pice}) 
    var editor = document.getElementById("editline");
    editor.innerHTML = "<span classname='normal'>" + start + "</span>" + "<span classname='normal'>" + pice + "</span>" + "<span classname='normal'>" + end + "</span>";
  }
  onItalic = (e) => {
    let textVal = this.refs.myTextarea; 
    let cursorStart = textVal.selectionStart;
    let cursorEnd = textVal.selectionEnd;
    const pice = this.state.textareaVal.substring(cursorStart,cursorEnd);
    const start = this.state.textareaVal.substring(0,cursorStart);
    const end = this.state.textareaVal.substring(cursorEnd+1,this.state.textareaVal.length);
    this.setState ({piece: pice}) 
    var editor = document.getElementById("editline");
    editor.innerHTML = "<span classname='normal'>" + start + "</span>" + "<span classname='italic'>" + pice + "</span>" + "<span classname='normal'>" + end + "</span>";
  }
  onUnderline = (e) => {
    let textVal = this.refs.myTextarea; 
    let cursorStart = textVal.selectionStart;
    let cursorEnd = textVal.selectionEnd;
    const pice = this.state.textareaVal.substring(cursorStart,cursorEnd);
    const start = this.state.textareaVal.substring(0,cursorStart);
    const end = this.state.textareaVal.substring(cursorEnd+1,this.state.textareaVal.length);
    this.setState ({piece: pice}) 
    var editor = document.getElementById("editline");
    editor.innerHTML = "<span classname='normal'>" + start + "</span>" + "<span classname='underline'>" + pice + "</span>" + "<span classname='normal'>" + end + "</span>";
  }
  render() {
    return (
      <div>
        <Panel
          red = {this.onRed}
          black = {this.onBlack}
          bold = {this.onBold}
          normal = {this.onNormal}
          italic = {this.onItalic}
          underline = {this.onUnderline}         
        />
        <textarea
           className='html-editor'  
           ref='myTextarea' 
            value = {this.state.textareaVal}
            onChange={(event)=>{
                      this.setState({
                         textareaVal:event.target.value
                      });
                   }}
        >
        </textarea>
        <div id="editline"></div>
      </div>
    );
  }
}

export default App;
