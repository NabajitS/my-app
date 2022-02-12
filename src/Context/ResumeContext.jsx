import React from 'react'
import { useState, createContext } from 'react'

export const ResumeContext = createContext()

export const ResumeProvider = (props) => {

  const [name, setName] = useState('');
  const [designation, setDesignation] = useState('');

  const [education, setEducation] = useState('');
  const [experience, setExperience] = useState('');
  const [about, setAbout] = useState('');

  const [email, setEmail] = useState('');
  const [url, setUrl] = useState('')

  return (
    <ResumeContext.Provider
      value={{
        nameArr: [name, setName],
        designationArr: [designation, setDesignation],
        educationArr: [education, setEducation],
        experienceArr: [experience, setExperience],
        aboutArr: [about, setAbout],
        emailArr: [email, setEmail],
        urlArr: [url, setUrl]
      }}
    >
      {props.children}
    </ResumeContext.Provider>
  )
}
