
import React from 'react';
import './App.css';

class Signup extends React.Component{
constructor(props) {
  super(props);
  this.state={ 
    FirstName:'',LastName:'',Username:'',Email:'',
    PhoneNumber:'',Password:'',ConfrimPassword:'',
    Gender:['Male', 'Female', 'Others'] 
      ,  submitted: false};
   

  this.handleChangeFrist = this.handleChangeFrist.bind(this);
  this.handleChangeUser = this.handleChangeUser.bind(this);
  this.handleChangeLast = this.handleChangeLast.bind(this);
  this.handleEmail=this.handleEmail.bind(this);
  this.handlePhone=this.handlePhone.bind(this);
  this.handleSubmit=this.handleSubmit.bind(this);
  this.handlePass=this.handlePass.bind(this);
  this.handlePassConfrim=this.handlePassConfrim.bind(this);
  this.handleGender=this.handleGender.bind(this);
}

handleChangeFrist(event) {
  
  if(isNaN(event.target.value))
  this.setState({FirstName: event.target.value});
}

handleChangeLast(event) {
  if(isNaN(event.target.value))
  this.setState({LastName: event.target.value});
}


handleChangeUser(event) {
  
  this.setState({UserName: event.target.value});
  
}

handleGender(e){
  this.setState({Gender:e.target.value})
}

handleEmail(e){
  const input=e.target.value
  this.setState({Email:input});
}
 handlePhone(e){
  const Phone=e.target.value
  this.setState({PhoneNumber:Phone})}
  
  handleSubmit(e){
     
  //  e.preventDefault();
    const {FirstName,LastName,Username,Email,
    PhoneNumber,Password,ConfrimPassword,Gender}=this.state;
    if(FirstName&&LastName&&Username&&Email&&
      PhoneNumber&&Password&&ConfrimPassword&&Gender){
      alert('successfull');}
      else{
      alert('unsuccessfull');
           }
  }
  handlePassConfrim(e){
    const pc=e.target.value; 
    this.setState({ConfrimPassword:pc})
    if(pc!==this.state.Password){
        alert('Not same');
    }
   }
  handlePass(e){
    const p=e.target.value;
    this.setState({Password:p})
  }

  

 render() {
  return (
    
    <div className="App">
    <h2>Signup</h2>
    <form onSubmit={this.handleSubmit}>
      <label><br/>
      FirstName:
      <br/>
        <input type="text" value={this.state.FirstName} onChange={this.handleChangeFrist} />
        {this.state.submitted && !this.state.FirstName &&
          <div ><br/><p>First Name is required</p></div>}
      </label>
    <label><br/>
    LastName:
    <br/>
      <input type="text" value={this.state.LastName} onChange={this.handleChangeLast} />
      {this.state.submitted && !this.state.LastName &&
        <div><br/><p>Last Name is required</p></div>}
    </label>
  <label><br/>
  UserName:<br/>
    <input type="text" value={this.state.UserName} onChange={this.handleChangeUser} />
  </label><br/>
  <label>Gender:<br/></label>
  <select  onChange={this.handlGender} value={this.state.Gender}>
    <option value="select Gender">Select</option>
    <option value="Male">Male</option>
    <option value="Famale">Female</option>
    <option value="Others">Others</option>
  </select>
      <label> <br/> Email:<br/>
        <input type="email" placeholder="example@gmail.com" value={this.state.Email} onChange={this.handleEmail} />
        <br/> </label>
       <label>PhoneNumber:<br/>
       
       <input type="tel" name="number"  value={this.state.PhoneNumber} onChange={this.handlePhone} />
       </label>
        <label ><br/> Password:<br/>
        <input type="password" value={this.state.Password} onChange={this.handlePass} />
        </label>
  
    <label ><br/>Confirm Password:<br/>
    <input type="password" value={this.state.ConfrimPassword} onChange={this.handlePassConfrim} />
    </label>
  <label><br/><br/>
  <input  type="submit" onClick={this.handleSubmit} value="Submit form" ></input>
  </label>

  </form>
  </div>
  );
 }
}

export default Signup;