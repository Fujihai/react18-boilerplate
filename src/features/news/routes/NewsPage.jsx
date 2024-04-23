import { useEffect, useState } from 'react';
import { request } from '../../../lib/request';

function Container({ children }) {
  return <div style={{ width: '100%', backgroundColor: 'hsl(252, 22%, 5%)', color: 'white' }}>{children}</div>;
}

function Header({ children }) {
  return (
    <div style={{
      height: '80px', display: 'flex', alignItems: 'center', margin: '0 180px', borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
    }}
    >
      {children}
    </div>
  );
}

function NewsItem({ data }) {
  const { imageUrl, title, paragraph } = data;
  return (
    <div style={{
      borderRadius: '8px',
      margin: '0 180px',
      display: 'flex',
      padding: '12px 0px',
    }}
    >
      <img src={imageUrl} style={{ width: '144px', height: '144px', borderRadius: '8px' }} alt="img" />
      <div style={{ padding: '0px 24px' }}>
        <h2 style={{ cursor: 'pointer' }}>{title}</h2>
        <p>{paragraph}</p>
      </div>
    </div>
  );
}

export default function NewsPage() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    request.get('/api/list').then((res) => {
      setNews(res.data);
    });
  }, []);

  return (
    <Container>
      <Header><h1>Faker News</h1></Header>
      {news.map((item) => <NewsItem data={item} />) }
    </Container>
  );
}
