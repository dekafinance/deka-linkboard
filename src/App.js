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
      title: "Smart Contract - dApp (v.2)",
      url: "https://bscscan.com/address/0x9D8d758Bfc999d0404718c7b95381365Aa40C6D5",
      tags: ["code"],
    },
    {
      title: "Smart Contract - Protocol (v.2)",
      url: "https://bscscan.com/address/0x0757733c26f1364Ae096E6F21eeE6281789ab7cD",
      tags: ["code"],
    },
    {
      title: "Smart Contract - Token (v.2)",
      url: "https://bscscan.com/address/0xcc043fF110ec01beB2e33C2713Af5924A19aB723",
      tags: ["code"],
    },
    {
      title: "Smart Contract - dApp (v.1)",
      url: "https://bscscan.com/address/0xEA9776dAA746d0d29424ff1a251f03c8F95A0693",
      tags: ["code"],
    },
    {
      title: "Smart Contract - Protocol (v.1)",
      url: "https://bscscan.com/address/0x88629f11e22861043B2E701207a19Aeb743562F9",
      tags: ["code"],
    },
    {
      title: "Smart Contract - Token (v.1)",
      url: "https://bscscan.com/address/0x992d63281EbF61061fd79623F294d0F0296BeF81",
      tags: ["code"],
    },
    {
      title: "Pancake Swap - Liquidity Pool (BUSD/DKA)",
      url: "https://exchange.pancakeswap.finance/#/swap",
      tags: ["market"],
    },
    {
      title: "Pancake Swap - Liquidity Pool (BUSD/DKA) [Smart Contract]",
      url: "https://bscscan.com/address/0x55d1ec71bdbff5152e8e2816f0263242986749e4",
      tags: ["market, code"],
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
