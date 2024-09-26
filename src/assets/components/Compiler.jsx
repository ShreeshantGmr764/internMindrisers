import React, { useState, useEffect } from 'react';
import { FaHtml5, FaCss3Alt, FaPlay, FaJs } from "react-icons/fa";

const Compiler = () => {
  const [html, setHtml] = useState(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>

</body>
</html>`);
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");

  // Function to compile and inject HTML, CSS, and JS into the iframe
  const compileCode = () => {
    const output = document.getElementById('output');
    
    const compiledContent = `
      <html>
        <head>
          <style>${css}</style>
        </head>
        <body>
          ${html}
          <script>${js}<\/script>
        </body>
      </html>
    `;
    
    output.srcdoc = compiledContent; // Set iframe content using srcdoc
  };

  // Automatically compile whenever HTML, CSS, or JS changes
  useEffect(() => {
    compileCode();
  }, [html, css, js]);

  return (
    <div className="bg-blue-300 dark:bg-gray-900 h-screen w-full p-4 flex flex-col lg:flex-row lg:space-x-4">
      
      <div className="w-full lg:w-1/2 space-y-4">
      
        <div>
          <label htmlFor="html" className="flex items-center space-x-2 text-blue-600 dark:text-blue-300 font-semibold">
            HTML <FaHtml5 />
          </label>
          <textarea
            id="html"
            value={html}
            onChange={(e) => setHtml(e.target.value)}
            className="w-full p-4 h-56 resize-none bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring focus:border-blue-300 dark:focus:border-gray-500"
          />
        </div>

     
        <div>
          <label htmlFor="css" className="flex items-center space-x-2 text-blue-600 dark:text-blue-300 font-semibold">
            CSS <FaCss3Alt />
          </label>
          <textarea
            id="css"
            value={css}
            onChange={(e) => setCss(e.target.value)}
            className="w-full p-4 h-48 resize-none bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring focus:border-blue-300 dark:focus:border-gray-500"
          />
        </div>

        {/* JavaScript Input */}
        <div>
          <label htmlFor="js" className="flex items-center space-x-2 text-blue-600 dark:text-blue-300 font-semibold">
            JavaScript <FaJs />
          </label>
          <textarea
            id="js"
            value={js}
            onChange={(e) => setJs(e.target.value)}
            className="w-full p-4 h-48 bg-gray-100 resize-none dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring focus:border-blue-300 dark:focus:border-gray-500"
          />
        </div>
      </div>

     
      <div className="w-full lg:w-1/2 bg-gray-100 dark:bg-gray-800 p-4 border border-gray-300 dark:border-gray-700 rounded-lg">
        <div className="flex items-center space-x-2 text-blue-600 dark:text-blue-300 font-semibold mb-2">
          <FaPlay /> Output
        </div>
        <iframe
          id="output"
          title="output"
          className="w-full h-5/6 flex flex-wrap bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg"
        ></iframe>
      </div>
    </div>
  );
};

export default Compiler;
