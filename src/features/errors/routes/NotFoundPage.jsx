import styled from '@emotion/styled';

const Container = styled.div`
  height: 100vh;
  font-weight: bolder;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 12px;
`;

export default function NotFoundPage() {
  return (
    <Container>
      <h1>404 Not Found</h1>
      <p>An error as occured</p>
      <h1><span>(╯°□°）╯︵ ┻━┻</span></h1>
      <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>Go back</span>
    </Container>
  );
}
