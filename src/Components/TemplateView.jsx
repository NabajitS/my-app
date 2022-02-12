import React, { useContext } from 'react'
import { ResumeContext } from '../Context/ResumeContext'
import Resume from './Resume';
import './TemplateView.css'


function TemplateView() {

    const { nameArr, designationArr, educationArr, experienceArr, aboutArr, emailArr, urlArr } = useContext(ResumeContext)
    const [name, setName] = nameArr;
    const [designation, setDesignation] = designationArr;

    const [about, setAbout] = aboutArr;

    const [experience, setExperience] = experienceArr;

    const [education, setEducation] = educationArr;

    const [email, setEmail] = emailArr;
    const [url, setUrl] = urlArr;

    return (
        <div className='template-view-container'  >
            <aside className='details-left-side'>

                <h2>Template View 00</h2>

                <div className="input-container">
                    {/* Name and Designation */}
                    <input type="text" placeholder='Enter your Name' className='input name' value={name} onChange={(e) => setName(e.target.value)} />
                    <input type="text" placeholder='Enter your Designation' className='input designation' value={designation} onChange={(e) => setDesignation(e.target.value)} />

                    {/* About Me */}
                    <textarea type="text" placeholder='About ME' className='input about' value={about} onChange={(e) => setAbout(e.target.value)} />

                    {/* Experience */}
                    <textarea type="text" placeholder='Experiences in the past' className='input experience' value={experience} onChange={(e) => setExperience(e.target.value)} />

                    {/* Education */}
                    <textarea type="text" placeholder='Enter your Education' className='input education' value={education} onChange={(e) => setEducation(e.target.value)} />

                    {/* Contact */}
                    <input type="email" placeholder='Enter your Email' className='input email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="url" placeholder='Link to your portfolio' className='input url' value={url} onChange={(e) => setUrl(e.target.value)} />

                </div>

            </aside>

            <aside className='resume-right-side'  >
                <Resume />
            </aside>

        </div>
    )
}

export default TemplateView






























// import HomePage from "./Components/HomePage";
// import ShowTemplates from "./Components/ShowTemplates";
// import TemplateView from "./Components/TemplateView";
// import jsPDF from 'jspdf';
// import { useState } from "react";


// function App() {

//   const [name, setName] = useState("Kala")

//   const generatePDF = () => {
//     var doc = new jsPDF('p', 'pt');

//     doc.text(20, 20, `${name}`)
//     doc.addFont('helvetica', 'normal')
//     doc.text(20, 60, 'This is the second title.')
//     doc.text(20, 100, 'This is the thrid title.')

//     doc.save('demo.pdf')
//   }

//   return (
//     <div className="App">

//       <TemplateView />

//       <div>
//         <button onClick={() => generatePDF()} type="primary">Download PDF</button>
//       </div>

//     </div>
//   );
// }

// export default App;


// import React from 'react';
// import { useState } from 'react';

// function TemplateView() {



//     const [name, setName] = useState('');
//     const [education, setEducation] = useState('');
//     const [experience, setexperience] = useState('');

//     return (
//         <div className='template-view' >

//             <div className="input-side">
//                 <h2>Template View 00</h2>

//                 <input type="text" style={{ display: 'block' }} className='name' value={name} onChange={(e) => setName(e.target.value)} />
//                 <input type="text" style={{ display: 'block' }} className='name' value={education} onChange={(e) => setEducation(e.target.value)} />
//                 <input type="text" style={{ display: 'block' }} className='name' value={experience} onChange={(e) => setexperience(e.target.value)} />

//             </div>

//             <div style={{ height: "100vh", backgroundColor: 'red' }} className='output-side' >

//                 <h2 >{name}</h2>

//                 <h4>{education}</h4>

//                 <h4>{experience}</h4>

//             </div>



//         </div>
//     )
// }

// export default TemplateView;




