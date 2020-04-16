import { Button } from 'antd';
// Workplace.js
export default () => {
    if (this.props.auth.includes("2") && this.props.auth.includes("3")) {
        return <Button>用户要有权限 1 or 18 </Button>;
    }
    return null;
  };
