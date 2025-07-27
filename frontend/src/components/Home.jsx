//Create the Home UI for the BlogAPP(Cards are preferrred; You may choose your UI preference )
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import axios from 'axios';

const Home = () => {
     const [use, setUse] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
    axios.get("http://localhost:3001")
      .then((res) => {
        setUse(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const delValue =(id)=>{
    console.log(id)
    axios.delete("http://localhost:3001/delete/"+id)
    .then((res)=>{
        console.log(res.data)
        alert(res.data)
        window.location.reload()//to refresh page
    })
    

  }
  const updValue =(val)=>{
    
   console.log(val)
        navigate("/add",{state:{val}})
        
    }
  return (
    <div>
      
      <Grid container spacing={2} style={{ padding: '100px', boxSizing: 'border-box', marginTop: '64px' }}>
        {use.map((val) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={val.id}>
            <Card
              style={{
                width: '100%',
                maxWidth: '300px',
                // margin: 'auto',
                height: '400px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderRadius: '8px',
                padding: '0px',
                boxSizing: 'border-box',
                boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)'
              }}
            >
              <CardMedia sx={{ height: 200 , borderRadius: '8px 8px 0 0'}} image={val.img_url}/>
              <CardContent style={{ flexGrow: 1, padding: '16px' }}>
                <Typography variant="body2" style={{ color: '#666', overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>{val.title}</Typography>
                <Typography variant="h6" style={{ color: '#333', marginBottom: '10px' }}>{val.content}</Typography>
        
              </CardContent>
              <CardActions style={{  padding: '0 16px 16px', }}>
                <Link to='/'>
                  <Button
                    variant='contained'
                    size='small'
                    color='secondary'
                    style={{ marginRight: '0px', marginLeft: '0px'}}
                    onClick={()=>{delValue(val._id)}}
>
                    Delete
                  </Button>
                </Link>
                <Button
                  size='small'
                  variant='contained'
                  color='secondary'
                  onClick={()=>{updValue(val)}}
                >
                  Update
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

    </div>
  )
}

export default Home


//Write your code here