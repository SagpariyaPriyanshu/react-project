import React from "react";
import { saveAs } from "file-saver";
import "./css/b1.css";
import "./css/b2.css";
import "./css/b3.css";
import "./css/b4.css";
import "./css/b5.css";
import "./css/b6.css";
import "./css/b7.css";
import "./css/b8.css";
import "./css/b9.css";
import "./css/b10.css";

export default function GetLogin() {
  const [btn, setBtn] = React.useState('b1');

  const setSelectedBtnValue = (event) => {
    setBtn(event.target.value);
  };

  function downlode() {
    var background_color = document.getElementById("background_color").value;
    var font_color = document.getElementById("font_color").value;
    var font_style = document.getElementById("font_style").value;

    if (font_style) {
      var FS = `font-family: ${font_style};`;
    }
    if(font_color){
      var FC = `color: ${font_color};`;
      var BC = `--color: ${font_color};`;
      var B = `border: 2px solid ${font_color};`;
    }
    

    if (btn === "b4") {
      var b_css = `.b4 { text-decoration: none; border: 3px solid yellow; color: transparent; padding: 12px 20px; font-size: 12px; ${FS}; border-radius: 50px; display: flex; justify-content: center; transition: all 0.5s; align-items: center; position: relative; height: 45px; width: 140px; } .b4:before { content: "Log In"; display: flex; justify-content: center; align-items: center; color: yellow; background: rgb(34, 34, 34); font-size: 16px; border-radius: 50px; top: 0; left: 100%; ${FS}; transition: all 1s; height: 100%; width: 100%; position: absolute; transform: scale(0) rotatey(0); opacity: 0; } .b4:hover:before { transform: scale(1) rotatey(360deg); left: 0; opacity: 1; } .b4:after { content: "Log In"; display: flex; justify-content: center; align-items: center; color: yellow; background: rgb(34, 34, 34); font-size: 16px; border-radius: 50px; top: 0; left: 0; ${FS}; transition: all 1s; height: 100%; width: 100%; position: absolute; transform: scale(1) rotatey(0); opacity: 1; } .b4:hover:after { transform: scale(0) rotatey(360deg); left: -100%; opacity: 0; } `;
      var b_html = ` <br><br><button style="margin-left:auto;margin-right:auto" class="b4">Login</button>`;
    } else if (btn === "b2") {
      b_css = `.b2 { position: relative; outline: none; text-decoration: none; border-radius: 50px; display: flex; align-items: center; justify-content: center; align-items: center; cursor: pointer; height: 45px; width: 140px; opacity: 1; background-color: rgba(255, 255, 255, 0.5); ${FS}; ${B}; ${FC} } .b2 .b2span { ${FS}; color: #000000; font-size: 12px; font-weight: 500; letter-spacing: 0.7px; } .b2:hover { animation: b2rotate 0.7s ease-in-out both; } .b2:hover .b2span { animation: b2storm 0.7s ease-in-out both; animation-delay: 0.06s; } @keyframes b2rotate { 0% { transform: rotate(0deg) translate3d(0, 0, 0); } 25% { transform: rotate(3deg) translate3d(0, 0, 0); } 50% { transform: rotate(-3deg) translate3d(0, 0, 0); } 75% { transform: rotate(1deg) translate3d(0, 0, 0); } 100% { transform: rotate(0deg) translate3d(0, 0, 0); } } @keyframes b2storm { 0% { transform: translate3d(0, 0, 0) translateZ(0); } 25% { transform: translate3d(4px, 0, 0) translateZ(0); } 50% { transform: translate3d(-3px, 0, 0) translateZ(0); } 75% { transform: translate3d(2px, 0, 0) translateZ(0); } 100% { transform: translate3d(0, 0, 0) translateZ(0); } }`;
      b_html = `<br><br><button style="margin-left:auto;margin-right:auto" class="b2">Login</button>`;
    } else if (btn === "b3") {
      b_css = `.b3 { padding: 0.6em 2em; ${B}; ${FC}; outline: none; background: #111; cursor: pointer; position: relative; align-items: center; display: flex; justify-content: center; height: 45px; width: 140px; z-index: 0; border-radius: 30px; ${FS}; } .b3:before { content: ""; background: linear-gradient( 45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000 ); position: absolute; top: -2px; left: -2px; background-size: 400%; z-index: -1; filter: blur(3px); width: calc(100% + 5px); height: calc(100% + 5px); animation: glowingb3 20s linear infinite; opacity: 0; transition: opacity 0.3s ease-in-out; border-radius: 20px; } @keyframes glowingb3 { 0% { background-position: 0 0; } 50% { background-position: 400% 0; } 100% { background-position: 0 0; } } .b3:active { color: #000; } .b3:active:after { background: transparent; } .b3:hover:before { opacity: 1; } .b3:after { z-index: -1; content: ""; position: absolute; width: 100%; height: 100%; background: rgba(255, 255, 255, 0.50); left: 0; top: 0; border-radius: 30px; }`;
      b_html = `<br><br><button style="margin-left:auto;margin-right:auto" class="b3">Login</button>`;
    } else if (btn === "b1") {
      b_css = `.b1 { border: none; padding: 0.6em 2.0em; outline: none; color: white; position: relative; z-index: 1; cursor: pointer; height: 45px; width: 140px; ${FS}; background: none; align-items: center; justify-content: center; display: flex; text-shadow: 3px 3px 10px rgba(0, 0, 0, 0.45); } .b1:before, .b1:after { position: absolute; top: 50%; left: 50%; border-radius: 10em; -webkit-transform: translateX(-50%) translateY(-50%); transform: translateX(-50%) translateY(-50%); width: 105%; height: 105%; content: ""; z-index: -2; background-size: 400% 400%; background: linear-gradient( 60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82 ); } .b1:before { -webkit-filter: blur(5px); filter: blur(5px); -webkit-transition: all 0.25s ease; transition: all 0.25s ease; -webkit-animation: pulse 10s infinite ease; animation: pulse 10s infinite ease; } .b1:after { -webkit-filter: blur(0.3px); filter: blur(0.3px); } .b1:hover:before { width: 115%; height: 115%; }`;
      b_html = `<br><br><button style="margin-left:auto;margin-right:auto" class="b1">Login</button>`;
    } else if (btn === "b5") {
      b_css = `.b5 { margin: 0; padding: 0; box-sizing: border-box; -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; -webkit-tap-highlight-color: transparent; } .b5 { width: 140px; height: 45px; align-items: center; justify-content: center; display: flex; cursor: pointer; background: #f3f943; border: none; ${FS}; border-radius: 15px; box-shadow: 0px 5px 15px #d3db62, 0px -5px 15px #e9ffa6, inset 0px -2px 5px #c7ff4f, inset 0px 2px 5px #e6ffa6; color: rgb(0, 0, 0); font-size: 16px; transition: 100ms; } .b5:hover { border: 3px solid #bfd66d; animation: hueRotation 4s linear infinite; } @keyframes hueRotation { to {filter: hue-rotate(360deg);} } .b5:focus { outline: none; }`;
      b_html = `<br><br><button style="margin-left:auto;margin-right:auto" class="b5">Login</button>`;
    } else if (btn === "b6") {
      b_css = `.b6 {${FS}; height: 45px; width: 140px; border: 2px solid #000; border-radius: 5px; font-weight: 500; background: #ffffff; cursor: pointer; transition: all 0.6s ease; position: relative; display: inline-block; align-items: center; justify-content: center; display: flex; } .b6 { z-index: 2; transition: all 0.6s ease; overflow: hidden; } .b6:after { position: absolute; content: " "; z-index: -1; top: 0; left: 0; width: 100%; height: 100%; transition: all 0.6s ease; } .b6:hover { color: #ffffff; border-color: #ffffff; } .b6:hover:after { -webkit-transform: scale(2) rotate(180deg); transform: scale(2) rotate(180deg); background: #000000; }`;
      b_html = `<br><br><button style="margin-left:auto;margin-right:auto" class="b6">Login</button>`;
    } else if (btn === "b7") {
      b_css = `.b7 {${FS}; height: 45px; width: 140px; border: 2px solid rgb(0, 0, 0); border-radius: 5px; font-weight: 500; background: rgb(255, 255, 255); cursor: pointer; transition: all 0.6s ease; position: relative; overflow: hidden; display: inline-block; align-items: center; justify-content: center; display: flex; z-index: 2; } .b7:after { position: absolute; content: " "; top: 0; left: 0; z-index: -1; width: 100%; height: 100%; transition: all 0.6s ease; -webkit-transform: scale(.1); transform: scale(.1); } .b7:hover { color: rgb(255, 255, 255); border-color: #ffffff; } .b7:hover:after { background: rgb(0, 0, 0); -webkit-transform: scale(1); transform: scale(1); }`;
      b_html = `<br><br><button style="margin-left:auto;margin-right:auto" class="b7">Login</button>`;
    } else if (btn === "b8") {
      b_css = `.b8 {${FS}; height: 45px; width: 140px; align-items: center; justify-content: center; display: flex; border: 2px solid #000000; border-radius: 5px; box-sizing: border-box; font-weight: 300; color: #000000; text-align: center; background-color: rgba(255, 255, 255, 0.5); transition: all 0.5s; animation: b8bouncy 4s infinite linear; position: relative; } .b8:hover { background-color: rgb(0, 0, 0, 0.25); color: #ffffff; border-color: #ffffff; } @keyframes b8bouncy { 0% { top: 0em; } 40% { top: 0em; } 43% { top: -0.4em; } 46% { top: 0em; } 48% { top: -0.4em; } 50% { top: 0em; } 100% { top: 0em; } }`;
      b_html = `<br><br><button style="margin-left:auto;margin-right:auto" class="b8">Login</button>`;
    }else if (btn === "b9") {
      b_css = `.b9 {${FS}; height: 45px; width: 140px; align-items: center; justify-content: center; display: flex; --b: 3px; /* border thickness */ --s: .45em; /* size of the corner */ ${BC}; padding: calc(.5em + var(--s)) calc(.9em + var(--s)); color: var(--color); --_p: var(--s); background: conic-gradient(from 90deg at var(--b) var(--b),#0000 90deg,var(--color) 0) var(--_p) var(--_p)/calc(100% - var(--b) - 2*var(--_p)) calc(100% - var(--b) - 2*var(--_p)); transition: .3s linear, color 0s, background-color 0s; outline: var(--b) solid #0000; outline-offset: .6em; font-size: 16px; border: 0; user-select: none; -webkit-user-select: none; touch-action: manipulation; } .b9:hover, .b9:focus-visible{ --_p: 0px; outline-color: var(--color); outline-offset: .05em; } .b9:active { background: var(--color); color: #fff; }`;
      b_html = `<br><br><button style="margin-left:auto;margin-right:auto" class="b9">Login</button>`;
    }else if (btn === "b10") {
      b_css = `.b10 { height: 45px; width: 140px; align-items: center; justify-content: center; display: flex; --c: ${font_color}; /* text color */ background: linear-gradient(90deg, #0000 33%, #fff5, #0000 67%) var(--_p,100%)/300% no-repeat, rgba(255, 255, 255, 0.50); /* background color */ color: #0000; ${B}; transform: perspective(500px) rotateY(calc(20deg*var(--_i,-1))); text-shadow: calc(var(--_i,-1)* 0.08em) -.01em 0 var(--c), calc(var(--_i,-1)*-0.08em) .01em 2px #0004; outline-offset: .1em; transition: 0.3s; } .b10:hover, .b10:focus-visible { --_p: 0%; --_i: 1; } .b10:active { text-shadow: none; color: var(--c); box-shadow: inset 0 0 9e9q #0005; transition: 0s; } .b10 { margin: 0; cursor: pointer; padding: .1em .3em; }`;
      b_html = `<br><br><button style="margin-left:auto;margin-right:auto" class="b10">Login</button>`;
    }
    const data = `<!DOCTYPE html> <html lang="en"> <head> <style media="screen"> *, *:before, *:after{ padding: 0; margin: 0; box-sizing: border-box; } body{ background-color: ${background_color}; } .background{ width: 430px; height: 520px; position: absolute; transform: translate(-50%,-50%); left: 50%; top: 50%; } .background .shape{ height: 200px; width: 200px; position: absolute; border-radius: 50%; } .shape:first-child{ background: linear-gradient( #1845ad, #23a2f6 ); left: -80px; top: -80px; } .shape:last-child{ background: linear-gradient( to right, #ff512f, #f09819 ); right: -80px; bottom: -80px; } form{ height: 520px; width: 400px; background-color: rgba(255,255,255,0.13); position: absolute; transform: translate(-50%,-50%); top: 50%; left: 50%; border-radius: 10px; backdrop-filter: blur(10px); border: 2px solid rgba(255,255,255,0.1); box-shadow: 0 0 40px rgba(8,7,16,0.6); padding: 50px 35px; } form *{ ${FS}; ${FC}; letter-spacing: 0.5px; outline: none; border: none; } ${b_css}; form h3{ font-size: 32px; font-weight: 500; line-height: 42px; text-align: center; ${FS}; } label{ display: block; margin-top: 30px; font-size: 16px; font-weight: 500; ${FS}; } input{ display: block; height: 50px; width: 100%; background-color: rgba(255,255,255,0.07); border-radius: 3px; padding: 0 10px; margin-top: 8px; font-size: 14px; font-weight: 300; ${FS}; } ::placeholder{ ${FC}; opacity: 0.5; } button{ margin-top: 50px; width: 100%; background-color: #ffffff; color: #080710; padding: 15px 0; font-size: 18px; font-weight: 600; border-radius: 5px; cursor: pointer; } .social{ margin-top: 30px; display: flex; } .social div{ background: red; width: 150px; border-radius: 3px; padding: 5px 10px 10px 5px; background-color: rgba(255,255,255,0.27); color: #eaf0fb; text-align: center; } .social div:hover{ background-color: rgba(255,255,255,0.47); } .social .fb{ margin-left: 25px; } .social i{ margin-right: 4px; }javascript:; </style> </head> <body> <div class="background"> <div class="shape"></div> <div class="shape"></div> </div> <form> <h2 style="text-align: center">Login Here</h2> <label for="username">Username</label> <input type="text" placeholder="Email or Phone" id="username"> <label for="password">Password</label> <input type="password" placeholder="Password" id="password"> ${b_html}; </form> </body> </html> `;
    const blob = new Blob([data], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "login.html");
  }

  return (
    <>
      <div className="container-fluid pt-5 ps-5 pe-5" style={{height: "100vh",display: "flex",alignItems: "center", justifyContent: "center"}}  >
        <div className="card" style={{backgroundColor:"#ffffffc0"}}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src="./sample/login.png" className="img-fluid rounded-start" alt="Sample1"/>
            </div>
            <div className="col-md-8">
              <div className="card-body" style={{ overflow: "auto",height:"75vh" }}>
                <h5 className="card-title mb-4">Login Form</h5>

                <div className="input-group input-group-lg mb-3 mt-3" >
                  <select className="form-select" id="font_style" style={{cursor:"pointer"}}>
                    <option selected>Choose Custom Font Style</option>
                    <option style={{ fontFamily: "Arial" }} value="Arial">Arial</option>
                    <option style={{ fontFamily: "Arial Black" }} value="Arial Black">Arial Black</option>
                    <option style={{ fontFamily: "Times New Roman" }} value="Times New Roman">Times New Roman</option>
                    <option style={{ fontFamily: "Nyala" }} value="Nyala">Nyala</option>
                    <option style={{ fontFamily: "Monospace" }} value="Monospace">Monospace</option>
                    <option style={{ fontFamily: "Segoe Print" }} value="Segoe Print">Segoe Print</option>
                    <option style={{ fontFamily: "Segoe Script" }} value="Segoe Script">Segoe Script</option>
                    <option style={{ fontFamily: "Lucida Handwriting" }} value="Lucida Handwriting">Lucida Handwriting</option>
                    <option style={{ fontFamily: "Cursive" }} value="Cursive">Cursive</option>
                    <option style={{ fontFamily: "MV Boli" }} value="MV Boli">MV Boli</option>
                    <option style={{ fontFamily: "papyrus" }} value="papyrus">papyrus</option>
                    <option style={{ fontFamily: "Courier" }} value="Courier">Courier</option>
                    <option style={{ fontFamily: "Gabriola" }} value="Gabriola">Gabriola</option>
                    <option style={{ fontFamily: "Ink Free" }} value="Ink Free">Ink Free</option>
                  </select>
                </div>

                <div className="input-group input-group-lg mt-3">
                  <span className="input-group-text" id="inputGroup-sizing-default">Choose Background Color</span>
                  <input
                    type="color"
                    id="background_color"
                    name="background_color"
                    defaultValue="#000000"
                    className="btn btn-outline-secondary py-4"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                  />
                </div>
                <div className="input-group input-group-lg mt-3">
                  <span className="input-group-text" id="inputGroup-sizing-default">Choose Text Color</span>
                  <input
                    type="color"
                    id="font_color"
                    name="font_color"
                    defaultValue="#ffffff"
                    className="btn btn-outline-secondary py-4"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                  />
                </div>

                  <h5 className="mt-3 mb-2">Choose Login Button</h5>
                <div className="container" style={{ backgroundColor: '#ffffff',height:160, overflow: "auto",borderRadius: 7,border: "1px solid #dddddd" }}>
                  <div className="form-check form-check-inline mt-2 mb-2 ms-3 me-3">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="b1"
                      value="b1"
                      checked={btn === "b1"}
                      onChange={setSelectedBtnValue}
                    />
                    <button className="b1">Hover Me</button>
                  </div>
                  <div className="form-check form-check-inline mt-3 mb-3 ms-3 me-3">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="b2"
                      value="b2"
                      checked={btn === "b2"}
                      onChange={setSelectedBtnValue}
                    />
                    <button className="b2">Hover Me</button>
                  </div>
                  <div className="form-check form-check-inline mt-3 mb-3 ms-3 me-3">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="b3"
                      value="b3"
                      checked={btn === "b3"}
                      onChange={setSelectedBtnValue}
                    />
                    <button className="b3">Hover Me</button>
                  </div>
                  <div className="form-check form-check-inline mt-3 mb-3 ms-3 me-3">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="b4"
                      value="b4"
                      checked={btn === "b4"}
                      onChange={setSelectedBtnValue}
                    />
                    <button className="b4">Hover Me</button>
                  </div>
                  <div className="form-check form-check-inline mt-3 mb-3 ms-3 me-3">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="b5"
                      value="b5"
                      checked={btn === "b5"}
                      onChange={setSelectedBtnValue}
                    />
                    <button className="b5">Hover Me</button>
                  </div>
                  <div className="form-check form-check-inline mt-3 mb-3 ms-3 me-3">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="b6"
                      value="b6"
                      checked={btn === "b6"}
                      onChange={setSelectedBtnValue}
                    />
                    <button className="b6">Hover Me</button>
                  </div>
                  <div className="form-check form-check-inline mt-3 mb-3 ms-3 me-3">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="b7"
                      value="b7"
                      checked={btn === "b7"}
                      onChange={setSelectedBtnValue}
                    />
                    <button className="b7">Hover Me</button>
                  </div>
                  <div className="form-check form-check-inline mt-3 mb-3 ms-3 me-3">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="b8"
                      value="b8"
                      checked={btn === "b8"}
                      onChange={setSelectedBtnValue}
                    />
                    <button className="b8">Hover Me</button>
                  </div>
                  <div className="form-check form-check-inline mt-3 mb-3 ms-3 me-3">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="b9"
                      value="b9"
                      checked={btn === "b9"}
                      onChange={setSelectedBtnValue}
                    />
                    <button className="b9">Hover Me</button>
                  </div>
                  <div className="form-check form-check-inline mt-3 mb-3 ms-3 me-3">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="b10"
                      value="b10"
                      checked={btn === "b10"}
                      onChange={setSelectedBtnValue}
                    />
                    <button className="b10">Hover Me</button>
                  </div>
                </div>

                <div className="text-center">
                  <button onClick={downlode} type="button" className="btn btn-light mt-4" style={{backgroundColor: "#00008b", color:"white" }}>Download</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}