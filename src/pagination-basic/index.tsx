import Button from '@mui/material/Button';
import styled from 'styled-components';

const Box = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
`

const Center = styled.div`
    margin: auto;
    dispaly: grid;
`

const PaginationBasic = ({ prev, next }: { prev: () => void, next: () => void }) => {
    return (
        <Box>
            <Center>
                <Button data-testid="prev" variant="contained" sx={{ margin: '10px' }} onClick={prev}>
                    Prev
                </Button>
                <Button data-testid="next" variant="contained" sx={{ margin: '10px' }} onClick={next}>
                    Next
                </Button>
            </Center>
        </Box>
    )
}

export default PaginationBasic;