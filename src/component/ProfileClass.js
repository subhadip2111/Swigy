
import React from "react"
//why we need super props?
//extends means inheiants somethings
class ProfileClass extends React.Component{
  
  //constucture is a place where we can create our state vaariables 
  //whenever we load a class the first constructor is first load
    
    
    constructor(props) {
        super(props);

        console.log(" Child -Constructor")

        this.state = {
            UserInfo: {
                name: "Dummy name",
                location: "Dummy Locations"
            }
        }
    }



      componentDidUpdate() {
    console.log("Child Component-Did-Updte")
  }
   async componentDidMount() {
    const data= await fetch("https://api.github.com/users/subhadip2111")

       const json = await data.json()
        console.log(json)
      this.setState({
  UserInfo:json
})
 console.log("Child-componentDidmount-" +this.props.name)
    }
    componentDidUpdate() {
    

     console.log(" child component didUpdate")
 }

    componentWillUnmount() {
    console.log("Component willUnmount")
}

    componentWillUnmount() {
    clearInterval(this.timmer)
}
    render() {
        const { count } = this.state
        console.log("Child-render"+this.props.name)
        return (
            <> 
                
    
                {/* we dont not  */}
                <h1>Profile From class component</h1>
                <h2>Name: { this.state?.UserInfo.name}</h2>
                <h3> Location: {this.state?.UserInfo.location }</h3>
                <img src={ this.state?.UserInfo.avatar_url} />
             
                <h1>This is an classbased component</h1>
        </>
    )
}


}


/**
 * parent constructor
 * parent render
 * child construtur
 * child render
 * 
 * Dom is updated
 * api call
 * child componentDid mount
 * parent componentDid Mount
 * 
 * 
 * 
 * 
 * 
 * 
 */


export default ProfileClass



