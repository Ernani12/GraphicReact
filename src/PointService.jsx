import React from 'react'
import APIService from './ApiService'


export default class PointComponemt extends React.Component {



    

    constructor(props) {
        super(props)
    
        this.state = {
             points: []
        }
    }
    
    componentDidMount(){
        APIService.getBooks().then((data) => {
            this.setState({ points: data })
            console.log(this.state.data)
          })
          .catch(function (ex) {
              console.log('Response parsing failed. Error: ', ex);
          });;
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Point Details</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Point Id</th>
                            <th>Point X</th>
                            <th>Point Y</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.points.map(points =>
                                    <tr key={points.id}>
                                        <td>{points.id}</td>
                                        <td>{points.x}</td>
                                        <td>{points.y}</td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}