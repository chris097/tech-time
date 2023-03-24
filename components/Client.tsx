import Dropbox from '@/assets/svg/Dropbox'
import Monday from '@/assets/svg/Monday'
import Slack from '@/assets/svg/Slack'
import Stripe from '@/assets/svg/Stripe'
import Zoom from '@/assets/svg/Zoom'
import React from 'react'

const Client = () =>
(
    <div className='h-[158px] bg-lighterblue z-50 flex items-center justify-center space-x-16'>
        <Zoom />
        <Stripe />
        <Monday />
        <Slack />
        <Dropbox />
    </div>
);

export default Client