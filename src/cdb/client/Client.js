


import {Config} from "Config";

export class Client {
  constructor(serverURL=Config.serverURL) {
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

  build_url(){
    var url = new URL(this.client.serverURL)
    url.pathname = "/"+"Car".toLowerCase()
    return url
  }

  create(obj){
    var url = this.build_url()
    return fetch(
      new Request(
        url,
        {
          method:"POST",
          body:JSON.stringify(obj),
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json'
          },
        }
      )
    )
  }

  list(req){
    var url = this.build_url()
    url.search = new URLSearchParams(req).toString()
    return fetch(new Request(url,{method:"GET"}))
  }
}

  
class Dept {
  constructor(client) {
    this.client = client
  }

  build_url(){
    var url = new URL(this.client.serverURL)
    url.pathname = "/"+"Dept".toLowerCase()
    return url
  }

  create(obj){
    var url = this.build_url()
    return fetch(
      new Request(
        url,
        {
          method:"POST",
          body:JSON.stringify(obj),
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json'
          },
        }
      )
    )
  }

  list(req){
    var url = this.build_url()
    url.search = new URLSearchParams(req).toString()
    return fetch(new Request(url,{method:"GET"}))
  }
}

  
class User {
  constructor(client) {
    this.client = client
  }

  build_url(){
    var url = new URL(this.client.serverURL)
    url.pathname = "/"+"User".toLowerCase()
    return url
  }

  create(obj){
    var url = this.build_url()
    return fetch(
      new Request(
        url,
        {
          method:"POST",
          body:JSON.stringify(obj),
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json'
          },
        }
      )
    )
  }

  list(req){
    var url = this.build_url()
    url.search = new URLSearchParams(req).toString()
    return fetch(new Request(url,{method:"GET"}))
  }
}

