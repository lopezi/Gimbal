import React from "react";
import { Card, Input, Button } from 'antd';

class Stake extends React.Component {

  render() {
    return (
      <Card bordered="true">
        <p style={{ flex: 1,  }}>2781 USDC available</p>
        <Input size="large" placeholder="0,0" />
        <Button style={{ marginTop: "10px",  }} size="large" type="primary">Stake</Button>
      </Card>
    );
  }
}

export default Stake;
