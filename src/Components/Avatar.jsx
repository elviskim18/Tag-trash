import React from 'react';
import { styled } from '@stitches/react';
import { violet, blackA } from '@radix-ui/colors';
import * as AvatarPrimitive from '@radix-ui/react-avatar';

const StyledAvatar = styled(AvatarPrimitive.Root, {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  overflow: 'hidden',
  userSelect: 'none',
  width: 20,
  height: 20,
  borderRadius: '50%',
  backgroundColor: blackA.blackA3,
});

const StyledImage = styled(AvatarPrimitive.Image, {
  width: '50%',
  height: '50%',
  objectFit: 'cover',
  borderRadius: 'inherit',
});

const StyledFallback = styled(AvatarPrimitive.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'white',
  color: violet.violet11,
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
});

// Exports
export const Avatar = StyledAvatar;
export const AvatarImage = StyledImage;
export const AvatarFallback = StyledFallback;
