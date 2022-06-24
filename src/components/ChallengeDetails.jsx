import React, { useState } from 'react'
import '../styles/challengedetails.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Calendar from 'react-calendar';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select, { SelectChangeEvent } from '@mui/material/Select';

import Stack from '@mui/material/Stack';
import { width } from '@mui/system';
const Input = styled('input')({
    display: 'none',
});
function DetailsPage() {
    const [isopen, setisopen] = useState(false);
    const [isopenend, setisopenend] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [initial, setinitial] = useState("set");
    const [initialEnd, setinitialEnd] = useState("set");
    let startDatestring = -1;
    let endDatestring = -1;
    const onChangeend = (endDate) => {
        setEndDate(endDate)
        setinitialEnd("unset");
        endDatestring = endDate.toString()
    }
    const onChange = (startDate) => {
        setStartDate(startDate);
        setinitial("unset");
        startDatestring = startDate.toString()
    }
    //const [value, onChange] = useState(new Date());
    return (
        <><div className="Details">
            <p className='HeadingChallenge'><b>Challenge Details</b></p>
        </div>
            <div className='AllFields'>
                <p className='HeadingFields'>Challenge name</p>
                <TextField id="outlined-basic" label="" variant="outlined" style={{ width: "40vw" }} />
                <p className='HeadingFields'>Start date</p>
                <FormControl >

                    <OutlinedInput
                        id="outlined-adornment-weight"
                        placeholder={initial === 'set' ? "YYYY-MM-DD" : `${startDate.getDate()}/${startDate.getMonth()}/${startDate.getFullYear()}`}
                        endAdornment={<InputAdornment position="end">
                            <img className="Calender" src="/assets/icons/uil_calender.svg" alt="" onClick={() => setisopen(!isopen)} />
                        </InputAdornment>}
                        label="Add start Date"
                        aria-describedby="outlined-weight-helper-text"
                        inputProps={{
                            'aria-label': 'weight',
                        }}
                        style={{ width: "40vw" }}
                    />
                    {
                        isopen ? <div style={{ width: "40vw", marginTop: "5%" }}><Calendar onChange={onChange} startDate={startDate} /> </div> : <></>
                    }
                </FormControl>
                <p className='HeadingFields'>End date</p>
                <FormControl >
                    <OutlinedInput
                        id="outlined-adornment-weight"
                        placeholder={initialEnd === 'set' ? "YYYY-MM-DD" : `${endDate.getDate()}/${endDate.getMonth()}/${endDate.getFullYear()}`}
                        endAdornment={<InputAdornment position="end">
                            <img className="Calender" src="/assets/icons/uil_calender.svg" alt="" onClick={() => setisopenend(!isopenend)} />
                        </InputAdornment>}
                        label="Add start Date"
                        aria-describedby="outlined-weight-helper-text"
                        inputProps={{
                            'aria-label': 'weight',
                        }}
                        style={{ width: "40vw" }}
                    />
                </FormControl>
                {
                    isopenend ? <div style={{ width: "40vw", marginTop: "5%" }}><Calendar onChange={onChangeend} endDate={endDate} /> </div> : <></>
                }
                <p className='HeadingFields'>Description</p>

                <TextField
                    id="outlined-textarea"
                    multiline
                    rows={10}
                    style={{ width: "90vw", height: "38vh" }}
                />
                <p className='HeadingFields'>Image</p>
                <FormControl >
                    <label htmlFor="contained-button-file" style={{ display: 'flex' }}>
                        <Input accept="image/*" id="contained-button-file" multiple type="file" />
                        <Button component="span" style={{
                            width: "25vw", backgroundColor: '#DCDCDC', outlineStyle: 'dotted',
                            outlineColor: 'blue'
                        }} >
                            <p className='UploadButton'>Upload</p>
                            <img src="/assets/icons/bxs_cloud-upload.svg" style={{ marginLeft: '-100px', height: '30px' }}></img>
                        </Button>
                    </label>
                </FormControl>
                <p className='HeadingFields'>Level Type</p>

                <FormControl sx={{ minWidth: 350, height: "50vh" }}>

                    <Select

                        inputProps={{ 'aria-label': 'Without label' }}
                    >
                        <MenuItem value="">
                        </MenuItem>
                        <MenuItem value={10}>Easy</MenuItem>
                        <MenuItem value={20}>Medium</MenuItem>
                        <MenuItem value={30}>Hard</MenuItem>
                    </Select>
                    <Button variant="contained" color="success" style={{ fontSize: "20px", width: "350px", padding: "15px", marginTop: "3.5rem" }}>
                        Create Challenge
                    </Button>

                </FormControl>




            </div>
        </>

    )
}

export default DetailsPage