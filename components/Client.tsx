import Dropbox from '@/assets/svg/Dropbox'
import Monday from '@/assets/svg/Monday'
import Slack from '@/assets/svg/Slack'
import Stripe from '@/assets/svg/Stripe'
import Zoom from '@/assets/svg/Zoom'
import React from 'react'

const Client = () =>
(
    <div className='lg:h-[158px] h-[60px] bg-lighterblue grid grid-cols-4'>
        <Zoom />
        <Stripe />
        <Monday />
        <Slack />
        <Dropbox />
    </div>
);

export default Client