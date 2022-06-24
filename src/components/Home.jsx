import React from 'react'
import Header from './Header'
import '../styles/home.css'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ThemeComponent from '../components/ThemeComponent'
import { borderRadius, width } from '@mui/system';
import { useNavigate } from "react-router-dom";

function Home() {
    // const navigate = useNavigate();
    return (
        <>
            <Header></Header>
            <div className='intro'>
                <div className='content'>
                    <div className='contentSubpart'>
                        <div className="lineVertical"></div>
                        <p><b>Accelerate Innovation <br></br> with Global AI Challenges</b></p>
                        <img className='picsArt' src="/assets/icons/picsArt.svg" alt="" />
                    </div>
                    <p className='aboutText'>AI Challenges at DPhi simualte real-world problems . It is a <br></br> great place to put your AI/Data Science skills to test on <br></br> diverse datasets allowing you to faster learning through <br></br> competitions</p>
                </div>
                <Button

                    sx={{
                        "&.MuiButton-text": { backgroundColor: "white", color: "black" },
                        border: "2px black solid",
                        padding: '10px 15px',
                        borderRadius: '12px'
                    }}
                    variant="text"

                >Create Challenge</Button>
            </div>
        </>
    )
}

export default Home