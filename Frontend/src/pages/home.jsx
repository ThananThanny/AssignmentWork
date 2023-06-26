/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */

import { Button,Typography,Box,Grid,Stack,Modal,TextField  } from '@mui/material';
import { createElement, useEffect, useState } from 'react';
import List from "../components/pagination/list";
import Pagination from "../components/pagination/pagination";
import '../styles/home.css'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Navbar from '../components/navbar/navbar'


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 235,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    alignContent:'center',
    justifyItems:'center',
   
  };

export default function home() {

    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(5);
    
    useEffect(() => {
        
        fetch('http://localhost:3000/products',{method:"GET"})
        .then(response => response.json())
              .then(e => {
                setData(e)
                console.log(e)
                })
              .catch(error => console.error(error));
    },[])

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = data.slice(firstPostIndex, lastPostIndex);

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [open2, setOpen2] = useState(false);
    const handleOpen2 = () => setOpen2(true);
    const handleClose2 = () => setOpen2(false);

    const [confirm, setConfirm] = useState(false);
    const handleConfirm = () => setConfirm(true);
    const handleUnConfirm = () => setConfirm(false);
    const [nameProd,setNameProd] = useState(null);
    const [descProd,setDescProd] = useState(null);
    const [typeProd,setTypeProd] = useState(null);
    const [brandProd,setBrandProd] = useState(null);
    const [priceProd,setPriceProd] = useState(1);
    const [packProd,setPackProd] = useState(1);

    const [base, setBase] = useState(null);
    useEffect(()=>{
      console.log(base)
      console.log(nameProd)
      console.log(descProd)
      console.log(typeProd)
      console.log(brandProd)
      console.log(priceProd)
      console.log(packProd)
    },[base,nameProd,descProd,typeProd,brandProd,priceProd,packProd])



function getBaseUrl ()  {
    var file = document.querySelector('input[type=file]')['files'][0];
    var reader = new FileReader();
    var baseString;
    reader.onloadend = function () {
        baseString = reader.result;
        setBase(baseString)
        console.log(base); 
    };
    reader.readAsDataURL(file);
}

    return (
  
        <div className='home'>
            <Navbar />
          <Box marginTop={'10px'} style={{ width: 'auto', height: '100%'}}>

        <List data={currentPosts} style={{ overflow: 'hidden' }}  />
        <Pagination
            totalPosts={data.length}
            postsPerPage={postsPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            />
            </Box>
    </div>
  
    )
}