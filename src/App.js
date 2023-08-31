import { useState } from "react";
import "./App.css";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FaCcAmazonPay } from "react-icons/fa";

function TextAnalizer() {
  const [textValue, setTextValue] = useState("");
  const [setnces, setSentences] = useState(0);



  return (
    <div className="bg-gray-100 h-[100vh]">
      <div className="App bg-cyan-100 p-2  w-[10%%] m-auto flex justify-around  rounded-xl items-center">
        <div>
          <h2>Text Analizer</h2>
        </div>
        <div className="flex gap-x-2">
          <AiOutlineTwitter color="#9e9e9e" />
          <BsFacebook color="#9e9e9e" />
          <FaCcAmazonPay color="#9e9e9e" />
        </div>
      </div>
      <div className=" flex justify-around gap-x-5 bg-neutral-50 w-[80%] m-auto mt-2 rounded p-2">
        <div className="flex flex-col items-center">
          <h4 className="text-[#9e9e9e]">Words</h4>
          <h6 className="m-0">{textValue.split(" ").length}</h6>
        </div>
        <div className="flex flex-col items-center">
          <h4 className="text-[#9e9e9e]">Charecters</h4>
          <h6 className="m-0">{textValue.length}</h6>
        </div>
        <div className="flex flex-col items-center">
          <h4 className="text-[#9e9e9e]">Sentences</h4>
          <h6 className="m-0">{setnces}</h6>
        </div>
        <div className="flex flex-col items-center">
          <h4 className="text-[#9e9e9e]">Longest Word</h4>
          <h6 className="m-0">{textValue.split(" ").sort((a, b) => b.length - a.length)[0]}</h6>
        </div>
        <div className="flex flex-col items-center">
          <h4 className="text-[#9e9e9e]">Paragraphs</h4>
          <h6 className="m-0">
            {textValue.replace(/\n$/gm, "").split(/\n/).length}
          </h6>
        </div>
      </div>
      <div className="bg-neutral-50 w-[80%] m-auto mt-2 rounded p-2">
        <div className="flex flex-col">
          <textarea

            onKeyPress={(e) => {
              if (e.code === "Enter") {
                setSentences(setnces + 1);
              }
            }}
            className="!border-0 p-6 w-[95%] max-w-[95%] text-xl h-[600px] "
            name="textValue"
            value={textValue}
            onChange={(e) => {
              setTextValue(e.target.value);
            }}
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default TextAnalizer;
