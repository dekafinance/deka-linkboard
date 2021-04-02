import React from "react";
import { Layout, Typography, Tag, Table } from "antd";
import "./App.less";

const { Content } = Layout;
const { Title } = Typography;
const App = () => {
  const data = [
    {
      title: "App",
      url: "https://app.deka.finance",
      tags: ["common"],
    },
    {
      title: "Blog",
      url: "https://blog.deka.finance",
      tags: ["common"],
    },
    {
      title: "Docs",
      url: "https://docs.deka.finance",
      tags: ["common"],
    },
    {
      title: "Stats",
      url: "https://stats.deka.finance",
      tags: ["common"],
    },
    {
      title: "Website",
      url: "https://deka.finance",
      tags: ["common"],
    },
    {
      title: "Forum",
      url: "https://discuss.deka.finance",
      tags: ["community"],
    },
    {
      title: "Discord",
      url: "https://deka.finance",
      tags: ["community"],
    },
    {
      title: "Twitter",
      url: "https://twitter.com/dekafinance",
      tags: ["community"],
    },
    {
      title: "Telegram - Announcements",
      url: "https://deka.finance",
      tags: ["community"],
    },
    {
      title: "Telegram - Official",
      url: "https://deka.finance",
      tags: ["community"],
    },
    {
      title: "Github",
      url: "https://github.com/dekafinance",
      tags: ["code"],
    },
    {
      title: "Smart Contract - App",
      url: "https://deka.finance",
      tags: ["code"],
    },
    {
      title: "Smart Contract - Protocol",
      url: "https://deka.finance",
      tags: ["code"],
    },
    {
      title: "Smart Contract - Token",
      url: "https://deka.finance",
      tags: ["code"],
    },
    {
      title: "Dodo - Crowdpooling",
      url: "https://deka.finance",
      tags: ["market"],
    },
    {
      title: "Dodo - Liquidity Pool",
      url: "https://deka.finance",
      tags: ["market"],
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Url",
      dataIndex: "url",
      key: "url",
      render: (url) => (
        <a href={url} target="_blank" rel="noreferrer">
          {url}
        </a>
      ),
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      render: (tags) => (
        <>
          {tags.map((tag) => {
            return (
              <Tag className="tag-lb" key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
  ];

  return (
    <div className="App">
      <Layout>
        <Content className="content-lb">
          <Title>{"deka link board".toUpperCase()}</Title>
          <Table
            className="table-lb"
            columns={columns}
            dataSource={data}
            pagination={false}
            rowKey="title"
          />
        </Content>
      </Layout>
    </div>
  );
};

export default App;
