import { Sections, SectionsType } from "@/types";
import { FontWeightValues } from "@/types/styles";

import { useCallback, useMemo } from "react";

import useDeviceQuery from "@/hooks/useDeviceQuery";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@/components/HeroSection/Card";
import Typography from "@mui/material/Typography";
import SkillList from "@/components/HeroSection/SkillList";
import ContactInfo from "@/components/HeroSection/ContackInfo";

import HelloAnimation from "@/components/HeroSection/HelloAnimation";

export default function HeroSection() {
  const { isMobile } = useDeviceQuery();

  const onClickNavigator = useCallback((section: SectionsType) => {
    const elem = document.getElementById(section);
    if (elem) elem.scrollIntoView({ behavior: "smooth" });
  }, []);

  const renderTags = useMemo(
    () => (
      <Box display="flex" flexWrap="wrap" gap={0.5} mt={5}>
        {["프론트엔드", "UI/UX"].map((tag) => (
          <Box
            key={tag}
            px={2}
            height={32}
            display="flex"
            borderRadius="16px"
            alignItems="center"
            bgcolor="primary.dark"
            sx={{
              backdropFilter: "blur(1px)",
            }}
          >
            <Typography variant="body2" color="primary.light">
              #{tag}
            </Typography>
          </Box>
        ))}
      </Box>
    ),
    []
  );

  return (
    <Box
      id={Sections.INTRO}
      component="header"
      px={3}
      py={10}
      display="flex"
      width="100%"
      minHeight="100vh"
      alignItems="center"
      bgcolor="primary.dark"
      justifyContent="center"
    >
      {!isMobile && (
        <Box
          position="absolute"
          width="100%"
          sx={{
            pointerEvents: "none",
          }}
        >
          <HelloAnimation />
        </Box>
      )}
      <Grid container rowSpacing={2} maxWidth="1024px" width="100%">
        {/* Section - Top */}
        <Grid container spacing={2} size={12}>
          <Grid size={isMobile ? 12 : 4}>
            <Card
              index={0}
              bgImage="images/donghyuck.webp"
              onClick={() => onClickNavigator(Sections.ABOUT)}
            >
              <Box
                height="100%"
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
              >
                <Box>
                  <Typography variant="h3" color="primary.contrastText">
                    은동혁
                  </Typography>
                  <Typography
                    fontSize={16}
                    color="primary.contrastText"
                    fontWeight={FontWeightValues.MEDIUM}
                  >
                    1999.04.10
                  </Typography>
                </Box>
                {renderTags}
              </Box>
            </Card>
          </Grid>
          <Grid container spacing={2} size={isMobile ? 12 : 8}>
            <Grid container spacing={2} size={12}>
              <Grid size={6}>
                <Card
                  index={1}
                  bgcolor="primary.light"
                  display="flex"
                  alignItems="flex-end"
                  justifyContent="flex-end"
                  onClick={() => onClickNavigator(Sections.PROJECTS)}
                >
                  <Typography
                    variant="h3"
                    lineHeight={1}
                    color="text.primary"
                    fontWeight={FontWeightValues.EXTRA_BOLD}
                  >
                    프로젝트
                  </Typography>
                  <img
                    src="images/project.webp"
                    style={{
                      width: "60%",
                      position: "absolute",
                      top: 0,
                      left: 0,
                    }}
                  />
                </Card>
              </Grid>
              <Grid size={6}>
                <Card
                  index={2}
                  bgImage="images/me_grad.webp"
                  display="flex"
                  sx={{
                    backgroundImage:
                      "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)) , url(images/univ.webp)",
                  }}
                  onClick={() => onClickNavigator(Sections.EDUCATION)}
                >
                  <Box>
                    <Typography
                      variant="h3"
                      lineHeight={1}
                      color="primary.contrastText"
                    >
                      Suncheon Univ.
                    </Typography>
                    <Typography
                      variant="body1"
                      color="primary.contrastText"
                      sx={{ fontWeight: FontWeightValues.MEDIUM }}
                    >
                      우주항공공학과
                    </Typography>
                  </Box>
                </Card>
              </Grid>
            </Grid>
            <Grid size={12}>
              <Card index={3} sx={{ px: 0 }}>
                <img
                  src="images/memoji-lg.webp"
                  style={{
                    height: isMobile ? "70%" : "90%",
                    position: "absolute",
                    bottom: 0,
                    left: "-5%",
                  }}
                />
                <Typography
                  color="text.disabled"
                  fontSize={128}
                  overflow="auto"
                  textAlign="center"
                  fontWeight={FontWeightValues.BOLD}
                >
                  안녕하세요
                </Typography>
                <Typography
                  variant="h4"
                  right={32}
                  textAlign="end"
                  position="absolute"
                  color="text.primary"
                  whiteSpace="pre-wrap"
                  top={isMobile ? 32 : undefined}
                  bottom={isMobile ? undefined : 32}
                  fontWeight={FontWeightValues.EXTRA_BOLD}
                >
                  {"더 나은 팀플레이어로 성장중인\nFE 은동혁입니다"}
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Grid>

        {/* Section - Skill List */}
        <Grid container size={12}>
          <SkillList />
        </Grid>

        {/* Section - Bottom */}
        <Grid container spacing={2} size={12}>
          <Grid size={isMobile ? 12 : 8}>
            <Card
              index={4}
              bgcolor="#E7EFF6"
              onClick={() => onClickNavigator(Sections.EXPERIENCE)}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Typography variant="h3" color="text.primary">
                  멈추지 않는 성장 곡선
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  fontWeight={FontWeightValues.SEMI_BOLD}
                >
                  부트캠프를 시작으로 끊임없는 성장
                </Typography>
              </Box>
              <img src="images/arrow.webp" width="100%" alt="프로젝트 경험" />
            </Card>
          </Grid>
          <Grid size={isMobile ? 12 : 4}>
            <Card
              index={5}
              bgcolor="text.primary"
              onClick={() => onClickNavigator(Sections.CONTACTS)}
            >
              <Typography
                variant="h3"
                color="primary.contrastText"
                sx={{ mb: 2 }}
              >
                연락처
              </Typography>
              <ContactInfo />
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
