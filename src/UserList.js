import React, {Component} from 'react';
class UserList extends Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)
    }
    render() {
        const {value} =this.props;
        this.handledeletes=this.handledeletes.bind(this)
        return(
            <li>{value} <button onClick={this.handledeletes}>删除</button></li>
        )
    }
    handledeletes(){
        const {handledeletes , index} =this.props;
        handledeletes(index)
    }
}

// 指定 props 的默认值：
UserList.defaultProps = {
    value: '你好啊我是默认值'
};
export default UserList