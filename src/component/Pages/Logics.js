import { Box, Card, Container, Typography,CardContent } from "@mui/material";
import React,{useEffect, useState} from "react";
import ImageCollage from "../common/ImageCollage";
import SearchAppBar from "../common/AppBar";
import CommonAccordion from "../common/CommonAccordion";
import PersistentDrawerLeft from "../common/AppBar";
import { json } from "react-router-dom";

const Logics = () => {

  let arr = [];
  const [allNames, setAllNames] = useState(arr);
  const [allCount, setAllCount] = useState({});
  const [currentValue, setCurrentValue] = useState(null);
  const [finalObject, setFinalObject] = useState({});

  function wordCount(p) {
    let count = {};
    p.forEach((item)=>{
      if(count[item]) {
        count[item]++;
      } else {
        count[item]=1;
      }
    });
   return count;
  }

 
  //console.log(allNames);
  const ImportData = (event) => {
    
    var value = event.target.value;
    setCurrentValue(value);
  }

  const SubmitValue = (event) => {
    event.preventDefault();
     if(currentValue != null)
     setAllNames(allNames=>[...allNames,currentValue]);
     
  }

  useEffect(()=>{
    setFinalObject(wordCount(allNames));
  },[allNames]);
  return (
    <PersistentDrawerLeft>
      <Container sx={{ width: 900, display:"flex" }} >
      <Card sx={{ minWidth: 100,margin:'10px' }}>
      <Typography variant="h6" component="h1" marginTop={3}>
          Explore the world in Optm
        </Typography>
      <CardContent>

          <div style={{margin:"50px"}}>
          <input type="text" />
          </div>
       
        </CardContent>
        </Card>
        <Card sx={{ minWidth: 100,margin:'10px'  }}>
      <Typography variant="h6" component="h1" marginTop={3}>
          Explore the world in Optm
        </Typography>
      <CardContent>

          <div style={{margin:"50px"}}>
            <form onSubmit={SubmitValue}>
          <input type="text" name="currentValue" value={currentValue} onChange={ImportData}/>
          <button type="submit">submit</button>
          </form>
          </div>

          
         {JSON.stringify(finalObject)}
        </CardContent>
        </Card>
        
      </Container>
    </PersistentDrawerLeft>
  );
};

export default Logics;
