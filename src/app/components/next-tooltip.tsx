'use client';
import { Tooltip } from 'react-tooltip';

interface props {
  tooltipId: string;
  className?: string;
}

export function NextTooltip({tooltipId, className}: props) {
  return (
    <Tooltip id={tooltipId} noArrow={true} className={className}/>
  );
}

