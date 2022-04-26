import React from "react";
import { Steps, Divider } from 'antd';
import Account from "../Account/Account"

const { Step } = Steps;

class Stepper extends React.Component {
  state = {
    current: 0,
  };

  onChange = current => {
    console.log('onChange:', current);
    this.setState({ current });
  };

  render() {
    const { current } = this.state;

    return (
      <>
        <Divider />

        <Steps current={current} onChange={this.onChange} direction="vertical">
          <Step title="Connect wallet" description={<Account/>}/>
          <Step title="Stake stablecoin" description="This is a description." />
          <Step title="Instantly earning " description="This is a description." />
        </Steps>
      </>
    );
  }
}

export default Stepper;
