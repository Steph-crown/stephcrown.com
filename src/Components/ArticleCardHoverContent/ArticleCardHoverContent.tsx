import { ArrowIcon } from 'Assets/Svgs'
import { ArticleType } from 'Types'
import { FC } from 'react'

type Props = Omit<ArticleType, 'bgImage' | 'name'>

const ArticleCardHoverContent: FC<Props> = ({ platform, url, description, hasLightBg }) => {
  return (
    <a href={url} rel='noreferrer' target='_blank' className='p-6 flex flex-col h-full justify-between'>
      <div className='flex justify-between '>
        <span
          className={`inline-block text-left break-all font-MSMediumWide text-sm leading-[160%]  rounded-[4px] w-max max-w-[12rem]  border border-solid p-2 ${
            hasLightBg ? 'border-fg/50-light text-fg/100-light' : 'border-fg/50-dark text-fg/100-dark'
          }`}
        >
          {platform}
        </span>

        <a href={url} rel='noreferrer' target='_blank' className={`${hasLightBg ? 'text-fg/80-light' : 'text-fg/80-dark'} hover:scale-150`}>
          <ArrowIcon className='h-8 w-8' />
        </a>
      </div>

      <p className={`font-MSMediumWide text-sm ${hasLightBg ? 'text-fg/80-light' : 'text-fg/80-dark'}`}>{description}</p>
    </a>
  )
}

export default ArticleCardHoverContent
