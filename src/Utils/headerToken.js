export const HeaderToken = () => {
    // let userData = localStorage.getItem('token')
    // console.log(userData,"ud")
    let token=sessionStorage.getItem('token')
   // console.log("token",token)
      let config = {
        headers: {
          Authorization:'Bearer ' +token,
        //   'Access-Control-Allow-Origin' : "http://localhost:3000",
        //  "Access-Control-Allow-Headers": 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
          //  "Access-Control-Request-Method": 'GET, POST, DELETE, PUT, OPTIONS',
          // "origin": "http://127.0.0.1:5500",
          // 'Access-Control-Allow-Origin': "http://localhost:3000",
          // "Referer":"http://127.0.0.1:5500",
        },
      };
      return config;
    
    };