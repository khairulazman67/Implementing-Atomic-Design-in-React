import React from "react"

class Counter extends React.Component{
    constructor(props){
        console.log('constructor')
        super(props)
        this.state = {
            count : 1
        }
    }

    componentDidMount(){
        this.setState({count : 10})
        console.log('component did count')
    }

    componentDidUpdate(prevProps, prevState){
        console.log('componen did update')
        if(this.state.count==10){
            this.setState({count : 0})
        }
    }

    render(){
        console.log('render')
        return(
            <div className="flex items-center">
                <h1 className="mr-5">{this.state.count}</h1>
                <button className="bg-black text-white p-3"
                    onClick={()=>this.setState({count : this.state.count + 1})}
                >+</button>
            </div>
        )
    }
}

export default Counter