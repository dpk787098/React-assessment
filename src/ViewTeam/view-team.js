import React, { Component } from 'react';
import './view-team.css';
import TitleBar from '../TitleBar/title-bar';
import { connect } from 'react-redux';
import SalesExecutiveBar from '../SalesExecutiveBar/sales-executive-bar';
import { removeSalesExecutiveDataAction } from '../Actions/actions';

class ViewTeam extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    deleteSalesExecutive=(data)=>{
        this.props.deleteSalesExecutive(data);
        alert("Deleted a sales executive");
    }

    render() { 
        return ( 
            <div className="teams_wrapper">
                <TitleBar title="View Teams" />
                <div className="sales_executive_bar">
                    {
                        this.props?.salesExecutiveData?.map((data,index)=>
                            <SalesExecutiveBar 
                                first_name={data.first_name} 
                                last_name={data.last_name}
                                email={data.email}
                                gender={data.gender}
                                phone={data.phone}
                                emp_id={data.emp_id}
                                deleteItem={()=>this.deleteSalesExecutive(data)}
                            />
                        )
                    }
                </div>
            </div>
         );
    }
}

const mapStateToProps = (globalStore) =>({
    salesExecutiveData: globalStore?.productReducer?.salesExecutiveData
})

const mapDispatchToProps = {
    deleteSalesExecutive: (data)=>removeSalesExecutiveDataAction(data),
}
 
export default connect(mapStateToProps,mapDispatchToProps)(ViewTeam);