import styled from 'styled-components/native';
import Colors from '../../theme/Colors';

export const RecorderIconWrapper = styled.View`
    background: ${props => props.color};
    width: 60px;
    height: 60px;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    margin: 0px 30px;
`;

export const MessageText = styled.Text`
    font-size: 18px;
`;

export const BottomBar = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const IconWrapper = styled.View`
    width: 40px;
    height: 40px;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    background: ${props => props.backgroundColor};
    margin-bottom: 40px;
`;

export const Label = styled.Text`
    font-size: 14px;
    text-align: center;
    padding-top: 20px;
    color: ${Colors.grey};
`

export const RecorderWrapper = styled.View`
    flex-direction: column;
    justify-content: center;
`;
