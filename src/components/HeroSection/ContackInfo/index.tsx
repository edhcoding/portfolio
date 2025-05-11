import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Phone from "@mui/icons-material/Phone";
import MoreHoriz from "@mui/icons-material/MoreHoriz";
import EmailOutlined from "@mui/icons-material/EmailOutlined";

export default function ContactInfo() {
  const contactDetails = [
    { icon: Phone, text: "010-4937-3681" },
    { icon: EmailOutlined, text: "eun49373681@gmail.com" },
    { icon: MoreHoriz, text: "더보기" },
  ];

  return (
    <>
      {contactDetails.map((detail, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            alignItems: "center",
            bgcolor: "rgba(255,255,255,0.3)",
            pl: 0.5,
            pr: 2,
            height: 32,
            width: "fit-content",
            borderRadius: 16,
            flexShrink: 1,
            mb: 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: "rgba(255,255,255,0.3)",
              height: 24,
              width: 24,
              borderRadius: 12,
              mr: 1,
            }}
          >
            <detail.icon sx={{ fontSize: 14, color: "#F9F9F9" }} />
          </Box>
          <Typography
            variant="body2"
            color="primary.contrastText"
            sx={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {detail.text}
          </Typography>
        </Box>
      ))}
    </>
  );
}
