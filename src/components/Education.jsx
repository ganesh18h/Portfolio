import { useState } from 'react'
import { Box, Container, Typography, Grid, Collapse } from '@mui/material'
import { motion } from 'framer-motion'
const MotionDiv = motion.div
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import FieldLabel from './FieldLabel'
import * as data from '../data/resumeData'

const MONO = "'IBM Plex Mono', monospace"

// reading from the data file this way means the page still loads even if
// one of these lists is missing from resumeData.js (it just shows nothing for it)
const { education = [], certifications = [] } = data

// finds the link to the actual certificate no matter what the field is called in
// resumeData.js: first the usual names, then any value that looks like a web link
// or a pdf/image file. local files (e.g. 'certs/sql.pdf' in /public) get the site's
// base path added so they also work after deploying to github pages
const LINK_KEYS = ['url', 'link', 'credentialUrl', 'credential', 'href', 'certificate', 'pdf', 'file', 'src']
const looksLikeLink = (v) => typeof v === 'string' && (/^https?:\/\//i.test(v) || /\.(pdf|png|jpe?g|webp)$/i.test(v))
const linkOf = (c) => {
  const raw = LINK_KEYS.map((k) => c[k]).find(looksLikeLink) || Object.values(c).find(looksLikeLink)
  if (!raw) return ''
  if (/^https?:\/\//i.test(raw)) return raw
  return `${import.meta.env.BASE_URL}${raw.replace(/^\/+/, '')}`
}

// turns a string into a fake 7-char "commit hash" so every cert gets a stable one
const shortHash = (s) => {
  let h = 5381
  for (let i = 0; i < s.length; i += 1) h = ((h << 5) + h + s.charCodeAt(i)) >>> 0
  return h.toString(16).padStart(8, '0').slice(0, 7)
}

// certifications shown like `git log --oneline`: one slim line each,
// click a line to expand its details. stays short no matter how many certs there are
function CertLog() {
  const [openIdx, setOpenIdx] = useState(null)

  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: '4px',
        p: { xs: 1.5, md: 2 },
        fontFamily: MONO,
      }}
    >
      <Typography sx={{ fontFamily: MONO, fontSize: '0.8rem', mb: 1 }}>
        <Box component="span" sx={{ color: 'secondary.main' }}>
          ganesh@portfolio
        </Box>
        <Box component="span" sx={{ color: 'text.secondary' }}>
          :~$
        </Box>{' '}
        <Box component="span" sx={{ color: 'text.primary' }}>
          git log --oneline certs/
        </Box>
      </Typography>

      {certifications.map((c, idx) => {
        const isOpen = openIdx === idx
        const href = linkOf(c)
        const toggle = () => setOpenIdx(isOpen ? null : idx)

        // shared look for the clickable title (link when there is one, button when there isn't)
        const titleSx = {
          all: 'unset',
          boxSizing: 'border-box',
          flexGrow: 1,
          minWidth: 0,
          cursor: 'pointer',
          color: 'text.primary',
          textDecoration: 'none',
          transition: 'color 0.15s ease',
          '&:hover': { color: 'primary.main' },
          '&:focus-visible': { outline: '1px solid', outlineColor: 'primary.main' },
        }
        const titleContent = (
          <>
            <Box component="span" sx={{ color: 'secondary.main' }}>
              ({c.issuer})
            </Box>{' '}
            {c.name}
            {href && <OpenInNewIcon sx={{ fontSize: '0.85rem', ml: 0.6, verticalAlign: '-0.1em', color: 'text.secondary' }} />}
          </>
        )

        return (
          <Box key={c.name} sx={{ borderTop: '1px solid', borderColor: 'divider' }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'baseline',
                gap: 1.2,
                py: 0.9,
                fontFamily: MONO,
                fontSize: { xs: '0.74rem', sm: '0.8rem' },
              }}
            >
              <Box component="span" sx={{ color: 'primary.main', flexShrink: 0 }}>
                {shortHash(c.name)}
              </Box>

              {/* clicking the certification name goes straight to the certificate */}
              {href ? (
                <Box component="a" href={href} target="_blank" rel="noopener noreferrer" sx={titleSx}>
                  {titleContent}
                </Box>
              ) : (
                <Box component="button" type="button" onClick={toggle} sx={titleSx}>
                  {titleContent}
                </Box>
              )}

              {/* the +/- only controls the short description */}
              <Box
                component="button"
                type="button"
                aria-expanded={isOpen}
                aria-label={isOpen ? 'hide details' : 'show details'}
                onClick={toggle}
                sx={{
                  all: 'unset',
                  cursor: 'pointer',
                  flexShrink: 0,
                  px: 0.8,
                  color: 'text.secondary',
                  '&:hover': { color: 'primary.main' },
                  '&:focus-visible': { outline: '1px solid', outlineColor: 'primary.main' },
                }}
              >
                {isOpen ? '−' : '+'}
              </Box>
            </Box>
            <Collapse in={isOpen} unmountOnExit>
              <Typography
                sx={{
                  fontSize: '0.82rem',
                  color: 'text.secondary',
                  lineHeight: 1.6,
                  pl: 1.5,
                  pb: 1.2,
                  ml: 0.5,
                  borderLeft: '2px solid',
                  borderColor: 'primary.main',
                }}
              >
                {c.detail}
              </Typography>
            </Collapse>
          </Box>
        )
      })}
    </Box>
  )
}

// education on the left, certifications (as a git log) on the right
export default function Education() {
  const hasCerts = certifications.length > 0

  return (
    <Box id="education" sx={{ py: { xs: 8, md: 12 }, borderTop: '1px solid', borderColor: 'divider' }}>
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid item xs={12} md={hasCerts ? 5 : 12}>
            <FieldLabel>education</FieldLabel>
            <Box>
              {education.map((e, idx) => (
                <MotionDiv
                  key={e.school}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.06 }}
                >
                  <Box sx={{ py: 1.8, borderTop: idx === 0 ? 'none' : '1px solid', borderColor: 'divider' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: 1 }}>
                      <Typography sx={{ fontWeight: 600, color: 'text.primary', fontSize: '1rem' }}>{e.school}</Typography>
                      <Typography sx={{ fontFamily: MONO, fontSize: '0.75rem', color: 'text.secondary' }}>{e.period}</Typography>
                    </Box>
                    <Typography sx={{ fontSize: '0.9rem', color: 'secondary.main', mt: 0.3 }}>{e.degree}</Typography>
                    <Typography sx={{ fontSize: '0.85rem', color: 'text.secondary', mt: 0.3 }}>
                      {e.location} · {e.detail}
                    </Typography>
                  </Box>
                </MotionDiv>
              ))}
            </Box>
          </Grid>

          {hasCerts && (
            <Grid item xs={12} md={7}>
              <FieldLabel>certifications</FieldLabel>
              <MotionDiv initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }}>
                <CertLog />
                <Typography sx={{ fontFamily: MONO, fontSize: '0.7rem', color: 'text.secondary', mt: 1 }}>
                  # click a name to open the certificate · + for details
                </Typography>
              </MotionDiv>
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  )
}