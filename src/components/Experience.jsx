import { Box, Container, Typography, Stack } from '@mui/material'
import { motion } from 'framer-motion'
const MotionDiv = motion.div // same trick as other files, keeps eslint happy
import FieldLabel from './FieldLabel'

// the internship lives right here in this file (not in resumeData.js) so this
// section works no matter what is or isn't exported from the data file.
// to edit it later, just change the text below.
const EXPERIENCE = [
  {
    company: 'Mad Sensei Studios',
    role: 'Software Developer Intern',
    location: 'Remote',
    period: 'Jun 2026 — Oct 2026',
    bullets: [
      'Shipped 5+ front-end features to the live company website using JavaScript, HTML, and CSS, working closely with a cross-functional development team.',
      'Integrated a payment gateway module into the website, enabling secure online transactions and streamlining the checkout flow for end users.',
      'Built responsive UI components as part of a 4-person team, improving site functionality and delivering a consistent user experience across devices.',
      'Delivered iterative website updates in 2-week Agile sprints, using Git-based version control and peer code reviews to maintain code quality.',
    ],
  },
]

// work experience section - loops through the array above and makes a card for each job
export default function Experience() {
  return (
    <Box id="experience" sx={{ py: { xs: 8, md: 12 }, borderTop: '1px solid', borderColor: 'divider' }}>
      <Container maxWidth="lg">
        <FieldLabel>experience</FieldLabel>
        <Stack spacing={3}>
          {EXPERIENCE.map((job, idx) => (
            // idx * 0.08 makes each card fade in slightly after the one before it
            <MotionDiv
              key={job.company}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <Box
                sx={{
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: '4px',
                  bgcolor: 'background.paper',
                  overflow: 'hidden',
                }}
              >
                {/* top part of the card - role, company, dates */}
                <Box
                  sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    px: { xs: 2.5, md: 3 },
                    py: 2,
                    borderBottom: '1px solid',
                    borderColor: 'divider',
                    gap: 1,
                  }}
                >
                  <Box>
                    <Typography sx={{ fontSize: '1.1rem', fontWeight: 600, color: 'text.primary' }}>{job.role}</Typography>
                    <Typography sx={{ fontSize: '0.9rem', color: 'secondary.main' }}>
                      {job.company} · {job.location}
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: '0.78rem',
                      color: 'text.secondary',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {job.period}
                  </Typography>
                </Box>

                {/* bottom part - the actual bullet points of what I did */}
                <Box component="ul" sx={{ m: 0, px: { xs: 2.5, md: 3 }, py: 2.2, listStyle: 'none' }}>
                  {job.bullets.map((b) => (
                    <Box
                      component="li"
                      key={b}
                      sx={{
                        display: 'flex',
                        gap: 1.2,
                        mb: 1.2,
                        fontSize: '0.95rem',
                        color: 'text.secondary',
                        lineHeight: 1.65,
                        '&:last-child': { mb: 0 },
                      }}
                    >
                      {/* using a > symbol instead of the default bullet dot, matches the terminal theme */}
                      <Box component="span" sx={{ color: 'primary.main', fontFamily: "'IBM Plex Mono', monospace" }}>
                        ›
                      </Box>
                      {b}
                    </Box>
                  ))}
                </Box>
              </Box>
            </MotionDiv>
          ))}
        </Stack>
      </Container>
    </Box>
  )
}