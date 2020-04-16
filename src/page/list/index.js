import React from 'react';
import { Table } from 'antd';
import { connect } from 'dva';

function mapStateToProps(state) {
  return {
    cardsList: state.cards.cardsList,
    cardsLoading: state.loading.effects['cards/queryList'],
  };
}

@connect(mapStateToProps)
class List extends React.Component {

  columns = [
    {
      title: '名称',
      dataIndex: 'name',
    },
    {
      title: '描述',
      dataIndex: 'desc',
    },
    {
      title: '链接',
      dataIndex: 'url',
      render: value => <a href={value}>{value}</a>,
    },
  ];

  componentDidMount() {
    this.props.dispatch({
      type: 'cards/queryList',
    });
  }

  render() {
    const { cardsList, cardsLoading } = this.props;
    return (
      <div>
       <div>
        <Table columns={this.columns} dataSource={cardsList} loading={cardsLoading} rowKey="id" />
      </div>
      </div>
    );
  }
}

export default List;