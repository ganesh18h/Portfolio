import { useMemo, useState } from 'react'
import { Box, Container, Grid, Typography, Tooltip } from '@mui/material'
import { motion } from 'framer-motion'
const MotionDiv = motion.div
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined'
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined'
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import FieldLabel from './FieldLabel'
import * as data from '../data/resumeData'

const MONO = "'IBM Plex Mono', monospace"

// the data file has `achievements` (badges, milestones...) and, separately,
// `certifications`. reading both this way means the page still loads if one is missing
const { achievements: baseAchievements = [], certifications = [] } = data

// finds the certificate link whatever the field is called (same idea as Education.jsx)
const LINK_KEYS = ['url', 'link', 'credentialUrl', 'credential', 'href', 'certificate', 'pdf', 'file', 'src']
const looksLikeLink = (v) => typeof v === 'string' && (/^https?:\/\//i.test(v) || /\.(pdf|png|jpe?g|webp)$/i.test(v))
const linkOf = (c) => {
  const raw = LINK_KEYS.map((k) => c[k]).find(looksLikeLink) || Object.values(c).find(looksLikeLink)
  if (!raw) return ''
  if (/^https?:\/\//i.test(raw)) return raw
  return `${import.meta.env.BASE_URL}${raw.replace(/^\/+/, '')}`
}

// turn every certification into a tile of type "certificate", so the
// `certificate` filter shows ALL of them. anything already listed in
// achievements under the same name is skipped, so nothing shows twice
const norm = (s) => String(s || '').toLowerCase().replace(/[^a-z0-9]/g, '')
const achievements = [
  ...baseAchievements,
  ...certifications
    .filter((c) => !baseAchievements.some((a) => norm(a.title) === norm(c.name)))
    .map((c) => ({ type: 'certificate', title: c.name, issuer: c.issuer, date: '', detail: c.detail, url: linkOf(c) })),
]

// each achievement has a `type` - this maps it to a small icon + label.
// anything with an unknown type is treated as a milestone
const TYPE_META = {
  badge: { label: 'badge', icon: WorkspacePremiumOutlinedIcon },
  certificate: { label: 'certificate', icon: VerifiedOutlinedIcon },
  milestone: { label: 'milestone', icon: FlagOutlinedIcon },
}
const typeOf = (a) => (TYPE_META[a.type] ? a.type : 'milestone')

// compact achievements wall.
// - the filter bar is a fake terminal command: click a word to "grep" by type
// - each tile is only ~3 lines tall; the long description shows in a tooltip
//   (hover on desktop, tap on mobile) instead of taking up space on the page
// adding a new item is still just one object in resumeData.js
export default function Achievements() {
  const [filter, setFilter] = useState('all')

  // only offer filters for types that actually exist in the data
  const filters = useMemo(() => ['all', ...Object.keys(TYPE_META).filter((t) => achievements.some((a) => typeOf(a) === t))], [])
  const shown = filter === 'all' ? achievements : achievements.filter((a) => typeOf(a) === filter)

  return (
    <Box id="achievements" sx={{ py: { xs: 8, md: 12 }, borderTop: '1px solid', borderColor: 'divider' }}>
      <Container maxWidth="lg">
        <FieldLabel>achievements</FieldLabel>

        {/* terminal-style filter bar */}
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: { xs: 0.8, sm: 1.2 },
            mb: 2.5,
            fontFamily: MONO,
            fontSize: { xs: '0.78rem', sm: '0.85rem' },
          }}
        >
          <Box component="span" sx={{ color: 'secondary.main' }}>
            ganesh@portfolio
          </Box>
          <Box component="span" sx={{ color: 'text.secondary', ml: -0.8 }}>
            :~$ ls achievements/ | grep
          </Box>
          {filters.map((f) => {
            const active = f === filter
            return (
              <Box
                key={f}
                component="button"
                type="button"
                onClick={() => setFilter(f)}
                aria-pressed={active}
                sx={{
                  all: 'unset',
                  cursor: 'pointer',
                  fontFamily: MONO,
                  fontSize: 'inherit',
                  px: 1,
                  py: 0.2,
                  borderRadius: '2px',
                  border: '1px solid',
                  borderColor: active ? 'primary.main' : 'divider',
                  color: active ? 'primary.main' : 'text.secondary',
                  transition: 'all 0.15s ease',
                  '&:hover': { color: 'primary.main' },
                  '&:focus-visible': { outline: '1px solid', outlineColor: 'primary.main' },
                }}
              >
                {f}
              </Box>
            )
          })}
          <Box component="span" sx={{ color: 'text.secondary', ml: 'auto', fontSize: '0.75rem' }}>
            {shown.length} found
          </Box>
        </Box>

        <Grid container spacing={1.5}>
          {shown.map((a, idx) => {
            const meta = TYPE_META[typeOf(a)]
            const Icon = meta.icon
            const linkProps = a.url ? { component: 'a', href: a.url, target: '_blank', rel: 'noopener noreferrer' } : {}
            return (
              <Grid item xs={12} sm={6} md={3} key={a.title}>
                <MotionDiv
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.04 }}
                  style={{ height: '100%' }}
                >
                  <Tooltip title={a.detail || ''} arrow placement="top" enterTouchDelay={0}>
                    <Box
                      {...linkProps}
                      sx={{
                        height: '100%',
                        minHeight: 104,
                        boxSizing: 'border-box',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 0.6,
                        p: 1.6,
                        border: '1px solid',
                        borderColor: 'divider',
                        borderRadius: '4px',
                        bgcolor: 'background.paper',
                        textDecoration: 'none',
                        transition: 'border-color 0.15s ease, transform 0.15s ease',
                        '&:hover': { borderColor: 'primary.main', transform: 'translateY(-2px)' },
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.6 }}>
                        <Icon sx={{ fontSize: '0.9rem', color: 'primary.main' }} />
                        <Typography
                          sx={{ fontFamily: MONO, fontSize: '0.64rem', letterSpacing: '0.1em', color: 'primary.main', textTransform: 'uppercase' }}
                        >
                          {meta.label}
                        </Typography>
                        {a.url && <OpenInNewIcon sx={{ fontSize: '0.8rem', color: 'text.secondary', ml: 'auto' }} />}
                      </Box>

                      <Typography
                        sx={{
                          fontWeight: 600,
                          color: 'text.primary',
                          fontSize: '0.88rem',
                          lineHeight: 1.3,
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                        }}
                      >
                        {a.title}
                      </Typography>

                      <Typography sx={{ fontFamily: MONO, fontSize: '0.68rem', color: 'secondary.main', mt: 'auto' }}>
                        {[a.issuer, a.date].filter(Boolean).join(' · ')}
                      </Typography>
                    </Box>
                  </Tooltip>
                </MotionDiv>
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </Box>
  )
}