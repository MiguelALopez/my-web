'use client';
import { PiCopySimpleThin } from 'react-icons/pi';
import { Tooltip } from 'react-tooltip';
import { toast } from 'react-toastify';

export function PasteIcon() {
  return (
    <><a className="cursor-pointer"
         data-tooltip-id="rt-email"
         data-tooltip-content="Copy"
         data-tooltip-place="right"
         data-tooltip-offset={-5}
         onClick={() => myFunction()}>
      <PiCopySimpleThin
        className="mx-2.5"
        color="#64748b" size="23"/>
    </a>
      <Tooltip id="rt-email" noArrow={true} className="!px-1.5 !py-1 !text-xs"/></>
  );
}

function myFunction() {
  toast('Copied to clipboard!');
  navigator.clipboard.writeText('miguel123dr@gmail.com');
}
