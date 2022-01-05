import React from "react";

const IndexPage = (props) => {
    React.useEffect(() => {
     const token = localStorage.getItem("CC_Token");
     if(!token){
         props.history.push("/login")
        //  window.location.href = "/login";
     }else{
        props.history.push("/dashboard")
        // window.location.href = "/dashboard";
     }
    }, []);
  return <div>
      Index Page
  </div>;
};

export default IndexPage;