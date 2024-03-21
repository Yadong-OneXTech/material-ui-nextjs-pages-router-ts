import React from 'react'
import type { FC, ReactNode } from 'react'

import { Global } from '@emotion/react'
import Box from '@mui/material/Box'
import { grey } from '@mui/material/colors'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import Typography from '@mui/material/Typography'

const drawerBleeding = 56

export interface MobileLoginDrawerProps {
  children: ReactNode
}

export const MobileLoginDrawer: FC<MobileLoginDrawerProps> = (props) => {
  const { children } = props

  return (
    <Box
      sx={(theme) => ({
        backgroundColor:
          theme.palette.mode === 'light'
            ? grey[100]
            : theme.palette.background.default,
        height: '100%',
      })}
    >
      <CssBaseline />
      <Global
        styles={{
          '.auth-login-swipe-drawer > .MuiPaper-root': {
            // minheight: `calc(50% - ${drawerBleeding}px)`,
            // maxHeight: '50%',
            minHeight: 310,
            maxHeight: 472,
            height: 'fit-content',
            // height: ref?.current?.clientHeight ? (ref?.current?.clientHeight + drawerBleeding) : '50%',
            overflow: 'visible',
          },
        }}
      />

      <SwipeableDrawer
        ModalProps={{
          keepMounted: true,
        }}
        anchor="bottom"
        className="auth-login-swipe-drawer"
        disableSwipeToOpen={false}
        onClose={() => {}}
        onOpen={() => {}}
        open
        swipeAreaWidth={drawerBleeding}
      >
        <Box
          sx={(theme) => ({
            backgroundColor:
              theme.palette.mode === 'light' ? '#fff' : grey[800],
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            left: 0,
            position: 'absolute',
            right: 0,
            top: -drawerBleeding,
            visibility: 'visible',
          })}
        >
          {/* Puller */}
          <Box
            sx={(theme) => ({
              backgroundColor:
                theme.palette.mode === 'light' ? grey[300] : grey[900],
              borderRadius: 50,
              height: 3,
              left: 'calc(50% - 15px)',
              position: 'absolute',
              top: 8,
              width: 60,
            })}
          />

          <Typography sx={{ color: 'text.secondary', display: 'flex', p: 2 }}>
            {/* <MobileLogo /> */}
            MobileLogo
          </Typography>

          <Divider />
        </Box>

        <Box
          sx={(theme) => ({
            backgroundColor:
              theme.palette.mode === 'light' ? '#fff' : grey[800],
            height: '100%',
            mt: 2,
            overflow: 'auto',
            pb: 2,
            px: 4,
          })}
        >
          {children}
        </Box>
      </SwipeableDrawer>
    </Box>
  )
}
