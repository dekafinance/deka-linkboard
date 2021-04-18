import React from "react";
import { Layout, Typography, Tag, Table, Image } from "antd";
import "./App.less";
import Logo from "./assets/logo.png";


const { Content } = Layout;
const { Title } = Typography;
const App = () => {
  const data = [
    {
      title: "App",
      url: "https://app.deka.finance",
      tags: ["common", "countdown"],
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
      tags: ["common", "not live"],
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
      url: "https://discord.gg/HASWTEbVa8",
      tags: ["community"],
    },
    {
      title: "Twitter",
      url: "https://twitter.com/dekafinance",
      tags: ["community"],
    },
    {
      title: "Telegram - Announcements",
      url: "https://t.me/dekafinanceannouncements",
      tags: ["community"],
    },
    {
      title: "Telegram - Official",
      url: "https://t.me/dekafinanceofficial",
      tags: ["community"],
    },
    {
      title: "Github",
      url: "https://github.com/dekafinance",
      tags: ["code"],
    },
    {
      title: "Smart Contract - dApp",
      url: "https://bscscan.com/address/0xEA9776dAA746d0d29424ff1a251f03c8F95A0693",
      tags: ["code"],
    },
    {
      title: "Smart Contract - Protocol",
      url: "https://bscscan.com/address/0x88629f11e22861043B2E701207a19Aeb743562F9",
      tags: ["code"],
    },
    {
      title: "Smart Contract - Token",
      url: "https://bscscan.com/address/0x992d63281EbF61061fd79623F294d0F0296BeF81",
      tags: ["code"],
    },
    {
      title: "Dodo - Crowdpooling",
      url: "https://app.dodoex.io/cp/join/0x34986383c7e9ee7e74f9eb660c320fea5cb2bf2f?network=bsc-mainnet",
      tags: ["market"],
    },
    {
      title: "Dodo - Liquidity Pool",
      url: "https://app.dodoex.io/exchange/BUSD-DKA",
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
            if (tag === "not live") {
              return (
                <Tag className="tag-lb tag-lb-nl" key={tag}>
                  {tag.toUpperCase()}
                </Tag>
              );
            }

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
          <Image
            height={64}
            src={Logo}
            preview={false}
          />
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
