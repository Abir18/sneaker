import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PinterestIcon from '@mui/icons-material/Pinterest';
import RoomIcon from '@mui/icons-material/Room';
import TwitterIcon from '@mui/icons-material/Twitter';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: 'column' })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1`
  margin-bottom: 10px;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
  margin-left: 180px;
  margin-top: 10px;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: 'none' })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  margin-left: 200px;
  /* display: flex; */
  /* flex-wrap: wrap; */
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  font-size: 14px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: '#fff8f8' })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
  margin-right: 300px;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        {/* <Logo>SNEAKER</Logo> */}
        <Logo>
          <span style={{ color: 'red', fontSize: '3rem' }}>S</span>
          <span style={{ marginTop: '20px', fontSize: '1.8rem' }}>NEAKERS</span>
        </Logo>

        <Desc>
          Through our collections we blur the borders between high fashion and
          high performance. Some of our Sneakers Originals lifestyle pieces,
          that can be worn as sports apparel too. Our lives are constantly
          changing. Becoming more and more versatile. And Sneakers designs with
          that in mind.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon color="E60023">
            <PinterestIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title style={{ marginRight: '520px' }}>Contact</Title>
        <ContactItem>
          <RoomIcon style={{ marginRight: '10px' }} /> 622 Dixie Path , South
          Tobinchester 98336
        </ContactItem>
        <ContactItem>
          <PhoneIcon style={{ marginRight: '10px' }} /> +1 234 56 78
        </ContactItem>
        <ContactItem>
          <MailOutlineIcon style={{ marginRight: '10px' }} />{' '}
          contact@sneakers.dev
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
