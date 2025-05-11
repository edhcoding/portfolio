import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Phone from "@mui/icons-material/Phone";
import MoreHoriz from "@mui/icons-material/MoreHoriz";
import EmailOutlined from "@mui/icons-material/EmailOutlined";

const contactDetails = [
  { icon: Phone, text: "010-4937-3681" },
  { icon: EmailOutlined, text: "eun49373681@gmail.com" },
  { icon: MoreHoriz, text: "더보기" },
];

export default function ContactInfo() {
  return (
    <>
      {contactDetails.map((detail, index) => (
        <Box
          key={index}
          mb={1}
          pr={2}
          pl={0.5}
          height={36}
          flexShrink={1}
          borderRadius={16}
          display="flex"
          alignItems="center"
          width="fit-content"
          bgcolor="rgba(255,255,255,0.3)"
        >
          <Box
            mr={1}
            width={28}
            height={28}
            borderRadius={12}
            display="flex"
            alignItems="center"
            justifyContent="center"
            bgcolor="rgba(255,255,255,0.3)"
          >
            <detail.icon sx={{ fontSize: 20, color: "#F9F9F9" }} />
          </Box>
          <Typography
            variant="body2"
            overflow="hidden"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            color="primary.contrastText"
          >
            {detail.text}
          </Typography>
        </Box>
      ))}
    </>
  );
}
