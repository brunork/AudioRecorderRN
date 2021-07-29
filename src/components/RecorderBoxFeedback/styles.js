import styled from 'styled-components/native';
import Colors from '../../theme/Colors';

export const Container = styled.View`
    background: ${props => props.background};
    padding: 10px;
    border-radius: 15px;
    flex-direction: row;
    justify-content: space-around;
    margin: 40px 10px;
`;

export const Row = styled.View`
    flex-direction: row;
    align-items: center;
    align-self: center;
    align-content: center;
    justify-content: center;
    margin: 10px 20px;
`;

export const Lorem = styled.Text`
  font-size: 14px;
  color: ${Colors.white};
`;

