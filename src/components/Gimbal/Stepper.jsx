import React from "react";
import { Steps, Divider } from 'antd';
import Test from "./Test"

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
          <Step title="Step 1" description={<Test/>}/>
          <Step title="Step 2" description="This is a description." />
          <Step title="Step 3" description="This is a description." />
        </Steps>
      </>
    );
  }
}

export default Stepper;
