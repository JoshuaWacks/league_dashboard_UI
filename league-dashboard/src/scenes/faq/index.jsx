import { Box,useTheme,Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import {tokens} from "../../theme"

const FAQ = () =>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mdoe);

    return (<Box m="20px">
        <Header title="FAQ" subtitle="Frequently asked questions page"/>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} varient ="h5">

                    1. An important Question

                </Typography>
            </AccordionSummary>

            <AccordionDetails>

                <Typography>
                    Random text
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} varient ="h5">

                    2. An important Question

                </Typography>
            </AccordionSummary>
            <AccordionDetails>

                <Typography>
                    Random text
                </Typography>
            </AccordionDetails>
        </Accordion>
    </Box>
    );
};

export default FAQ;