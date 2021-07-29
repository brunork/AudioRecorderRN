import styled from 'styled-components/native';
import Colors from '../../theme/Colors';

export const PlayTouchable = styled.TouchableOpacity`
    background: ${Colors.primary};
    padding: 10px 20px;
    border-radius: 30px;
`;

export const Row = styled.View`
  border-radius: 30px;
`;

export const SliderWrapper = styled.View`
  width: 60%;
`;

export const IconsWrapper = styled.View`
  flex-direction: row;
  align-items: flex-end;
`;