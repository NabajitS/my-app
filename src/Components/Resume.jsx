import React, { useContext, useRef } from "react";
import ReactToPrint from "react-to-print";
import { ResumeContext } from "../Context/ResumeContext";
import './Resume.css'

export const ComponentToPrint = React.forwardRef((props, ref) => {

    const { nameArr, designationArr, educationArr, experienceArr, aboutArr, emailArr, urlArr } = useContext(ResumeContext)
    const [name, setName] = nameArr;
    const [designation, setDesignation] = designationArr;

    const [about, setAbout] = aboutArr;

    const [experience, setExperience] = experienceArr;

    const [education, setEducation] = educationArr;

    const [email, setEmail] = emailArr;
    const [url, setUrl] = urlArr;



    return (
        <div ref={ref} style={{ height: '100%', width: '100%', overflowWrap: 'break-word' }} >

            <div className="resume-printable-container" >
                <section className="heading">
                    <h1 className="name-h1">{name}</h1>
                    <h3>{designation}</h3>
                </section>

                <section className="resume-body">

                    <div className="about-div">
                        <p className="underline" >About</p>
                        <p>{about}</p>
                    </div>

                    <div className="experience-div">
                        <p className="underline" > Experience</p>
                        <p>{experience}</p>
                    </div>


                    <div className="education-div">
                        <p className="underline" >Education</p>
                        <p>{education}</p>
                    </div>


                    {/* <h3>Contact Details</h3> */}
                    <div className="email-div">
                        <p>Email</p>
                        <p>{email}</p>
                    </div>


                    <div className="url-div">
                        <p>Url</p>
                        <p>{url}</p>
                    </div>

                </section>
            </div>
        </div >
    );
});


const Example = () => {
    const componentRef = useRef();
    const pageStyle = `@page { size: 5.8in 8.3in }`;

    const getPageMargins = () => {
        return `@page { margin: 4px 4px 4px 4px !important; }`;
    };

    return (
        <div style={{ textAlign: 'center', position: 'relative', height: '100vh', width: '100%' }}  >
            <style>{getPageMargins()}</style>
            <ReactToPrint
                pageStyle={pageStyle}
                trigger={() => <a className="print-btn" href="#">Print this out!</a>}
                content={() => componentRef.current}
            />
            <ComponentToPrint ref={componentRef} />
        </div>
    );
};



export default Example;







// import React from "react";
// import ReactToPrint from "react-to-print";
// import { ResumeContext } from "../Context/ResumeContext";

// class ComponentToPrint extends React.Component {
//     render() {

//         console.log(this.context);

//         return (
//             <div style={{ height: '100%', width: "100%", background: "green", }} >
//                 <div>
//                     <h1>Nigga</h1>
//                     <p>So you've created a React component and would love to give end users
//                         the ability to print out the contents of that component. This package
//                         aims to solve that by popping up a print window with CSS styles
//                         copied over as well.
//                     </p>

//                 </div>
//             </div>
//         );
//     }
// }

// class Example extends React.Component {
//     render() {
//         return (
//             <div style={{ height: '100%' }} >
//                 <ReactToPrint
//                     trigger={() => <a href="#">Print this out!</a>}
//                     content={() => this.componentRef}
//                 />
//                 <ComponentToPrint ref={el => (this.componentRef = el)} />
//             </div>
//         );
//     }
// }

// Example.contextType = ResumeContext;

// export default Example;

