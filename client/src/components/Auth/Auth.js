import React,{useState} from 'react';
import { Avatar,Button,Paper,Grid ,Typography,Container } from '@material-ui/core';
//import {GoogleLogin} from 'react-google-login';
import {useDispatch} from 'react-redux';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Input from './Input';
//import Icon from './Icon';
import useStyles from './style'; 
import {signin,signup} from '../../actions/auth';

import { useHistory } from 'react-router-dom';

const initialState={ firstName:'' , lastName:'',email:'',password:'',confirmPassword:''};
const Auth =() =>{
  const classes= useStyles();
const [showPassword,setshowPassword]=useState(false);
const [isSignup,setisSignup]=useState(false);
const[formData,setformData]=useState(initialState);

const dispatch=useDispatch();
const history=useHistory();

 const handleShowPassword =() => setshowPassword((prev) =>!prev);

 const handleSubmit =(e) =>{
    e.preventDefault();
    
    if(isSignup)
    {
      dispatch(signup(formData,history));
    }
    else
    {
      dispatch(signin(formData,history));
    }
 };

 const handleChange=(e)=>{
      setformData({...formData,[e.target.name]:e.target.value});
 }

 const switchMode=()=>{
 setisSignup((prev)=>!prev);
    setshowPassword(false);
 };

  // const googleSuccess= async (res) =>{
  //    const result =res?.profileObj;
  //    const token = res?.tokenId;

  //    try{
  //     dispatch({type :'AUTH',data:{result,token}});
  //      history.push('/');
    
  //   }catch(error)
  //    {
  //      console.log(error);
  //    }
  // };

  // const googleFailure=(error) =>{
  //   console.log(error);
  //   console.log("Google Sign In was unsuccessful. Try Again Later");
  // };

    return(
      <Container component="main" maxWidth="xs">
        <Paper className={classes.paper} elevation={3}>
            <Avatar className={classes.avatar}>
               <LockOutlinedIcon />
            </Avatar>
            <Typography variant="h5">{isSignup ?'Sign Up':'Sign In'}</Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
                <Grid container spacing ={2}>
                    {
                        isSignup && (
                            <>
                                <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                                <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                            </>
                        )
                    }
                    <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                    <Input name="password" label="Password" handleChange={handleChange} type={showPassword? "text": "password"} handleShowPassword={handleShowPassword} />
                    {isSignup && <Input name="confirmPassword" label="Confirm Password"  handleChange={handleChange} type="password" />}
                     
                    <Button type="submit" fullWidth color='primary' variant='contained' className={classes.submit} >
                        {isSignup? "Sign Up" :"Sign In"}
                    </Button>

                    {/* <GoogleLogin 
                     clientId='164851335550-7f1stgtt5aivhvldmjj72hd4hq0uinal.apps.googleusercontent.com'
                     render={(renderProps)=>(
                        <Button className={classes.googleButton} color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant="contained" >
                         Google Sign In
                        </Button>
                       )}
                      onSuccess={googleSuccess}
                      onFailure={googleFailure}
                      cookiePolicy="single_host_origin"
                      plugin_name="Art Gallery"
                     /> */ }
                    
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Button onClick={switchMode}>
                                {isSignup ? 'Already have an account? Sign In' : "Don't have an account? SignUp"}
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </form>
        </Paper>
      </Container>
    );
};

export default Auth;