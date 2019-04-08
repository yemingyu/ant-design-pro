import React, { Component, Suspense } from 'react';
import { connect } from 'dva';
import { Row, Col, Icon, Menu, Dropdown, Button } from 'antd';
import GridContent from '@/components/PageHeaderWrapper/GridContent';
import { getTimeDistance } from '@/utils/utils';
import styles from './YeyeTest.less';
import PageLoading from '@/components/PageLoading';

const IntroduceRow = React.lazy(() => import('./IntroduceRow'));
const SalesCard = React.lazy(() => import('./SalesCard'));
const TopSearch = React.lazy(() => import('./TopSearch'));
const ProportionSales = React.lazy(() => import('./ProportionSales'));
const OfflineData = React.lazy(() => import('./OfflineData'));

@connect(({ yeyetest, loading }) => ({
  yeyetest,
  loading: loading.effects['yeyetest/fetch'],
}))
class YeyeTest extends Component {
  state = {
   
  };

  componentDidMount() {
    
  }
  
  handleButtonClick = e => {
    const { dispatch } = this.props;
    dispatch({
      type: 'yeyetest/fetch',
    });
    const { yeyetest, loading } = this.props;
    console.log(yeyetest.response)
    // console.log(this.props.yeyetest)
    // console.log(this.props.loading)
  }

  render() {
    const { yeyetest, loading } = this.props;

    return (
      
      <Button size="small" type="primary" onClick={this.handleButtonClick} icon="plus">
            yeyeTest
          </Button>
    );
  }
}

export default YeyeTest;
