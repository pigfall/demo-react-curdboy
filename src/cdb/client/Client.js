

class Client {
  constructor(serverURL) {
    this.serverURL = serverURL
  }

  
    
  Car(){
    return new Car(this)
  }
  
    
  Dept(){
    return new Dept(this)
  }
  
    
  User(){
    return new User(this)
  }
  
}


  
class Car {
  constructor(client) {
    this.client = client
  }

  create(obj){
    return fetch(new Request(this.client.serverURL,{method:"POST",body:JSON.stringify(obj)}))
  }
}

  
class Dept {
  constructor(client) {
    this.client = client
  }

  create(obj){
    return fetch(new Request(this.client.serverURL,{method:"POST",body:JSON.stringify(obj)}))
  }
}

  
class User {
  constructor(client) {
    this.client = client
  }

  create(obj){
    return fetch(new Request(this.client.serverURL,{method:"POST",body:JSON.stringify(obj)}))
  }
}

