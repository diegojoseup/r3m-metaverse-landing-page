import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function Faq() {
  const theme = useTheme();
  const matchUpSm = useMediaQuery(theme.breakpoints.up("sm"));
  const matchUpMd = useMediaQuery(theme.breakpoints.up("md"));
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box
      sx={{
        px: matchUpMd ? 27 : matchUpSm ? 9 : 5,
        py: 12,
      }}
    >
      {items.map((item, key) => (
        <Accordion
          key={key}
          expanded={expanded === key}
          onChange={handleChange(key)}
          sx={{
            bgcolor: "#000",
            backgroundImage: "none",
          }}
        >
          <AccordionSummary
            aria-controls="panel1bh-content"
            id={`panel${key}bh-header"`}
            sx={{
              py: 1,
            }}
          >
            <Typography variant="h4" sx={{ lineHeight: 1 }}>
              {item.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{item.content}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
      {/* <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
                >
                <Typography sx={{ width: '33%', flexShrink: 0 }}>Users</Typography>
                <Typography sx={{ color: 'text.secondary' }}>
                    You are currently not an owner
                </Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
                    varius pulvinar diam eros in elit. Pellentesque convallis laoreet
                    laoreet.
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
                >
                <Typography sx={{ width: '33%', flexShrink: 0 }}>
                    Advanced settings
                </Typography>
                <Typography sx={{ color: 'text.secondary' }}>
                    Filtering has been entirely disabled for whole web server
                </Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
                >
                <Typography sx={{ width: '33%', flexShrink: 0 }}>Personal data</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                </Typography>
                </AccordionDetails>
            </Accordion> */}
    </Box>
  );
}

const items = [
  {
    title: "Creative Concepts",
    content: "",
  },
  {
    title: "Virtual World Integration",
    content: "",
  },
  {
    title: "Immersive Video",
    content: "",
  },
  {
    title: "AR/VR music visualizers",
    content: "",
  },
  {
    title: "Social Filters",
    content: "",
  },
  {
    title: "AR/VR Visual Effects",
    content: "",
  },
  {
    title: "Digital Marketing + OOH",
    content: "",
  },
];
