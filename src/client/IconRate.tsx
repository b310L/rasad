'use client'
import { styled } from '@mui/material/styles';
import Rating, { IconContainerProps } from '@mui/material/Rating';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import { Box } from '@mui/material';



const StyledRating = styled(Rating)(({ theme }) => ({
    '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
      color: theme.palette.action.disabled,
      
    },
    
    
  }));
  
  const customIcons: {
    [index: string]: {
      icon: React.ReactElement;
      label: string;
    };
  } = {
    1: {
      icon: <SentimentVeryDissatisfiedIcon color="error"  fontSize='large' style={{fontSize:'40px',}}/>,
      label: 'Very Dissatisfied',
    },
    2: {
      icon: <SentimentDissatisfiedIcon color="error"  fontSize='large' style={{fontSize:'40px',}}/>,
      label: 'Dissatisfied',
    },
    3: {
      icon: <SentimentSatisfiedIcon color="warning"  fontSize='large' style={{fontSize:'40px',}}/>,
      label: 'Neutral',
    },
    4: {
      icon: <SentimentSatisfiedAltIcon color="success" fontSize='large' style={{fontSize:'40px',}}/>,
      label: 'Satisfied',
    },
    5: {
      icon: <SentimentVerySatisfiedIcon color="success" fontSize='large' style={{fontSize:'40px',}} />,
      label: 'Very Satisfied',
    },
  };
  
  function IconContainer(props: IconContainerProps) {
    const { value, ...other } = props;
    return <Box   {...other}>{customIcons[value].icon}</Box>;
  }
  
  export default function RadioGroupRating() {
    return (<Box display={'flex'} justifyContent={'center'}  >
      <StyledRating
      
        name="highlight-selected-only"
        defaultValue={4}
        IconContainerComponent={IconContainer}
        getLabelText={(value: number) => customIcons[value].label}
        highlightSelectedOnly
        />
        </Box>
    );}