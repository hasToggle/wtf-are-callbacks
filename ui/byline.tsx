import { Logo } from '@/ui/logo'
import { IconLink, YouTubeIcon, GitHubIcon } from '@/ui/icons'

export default function Byline() {
  return (
    <div className="inset-x-0 bottom-3 mx-3 rounded-lg bg-ht-border-gradient p-px shadow-lg shadow-black/20">
      <div className="flex flex-row items-center justify-between space-y-2 rounded-lg bg-black p-3.5 lg:px-5 lg:py-3">
        <IconLink
          href="https://github.com/hasToggle/how-usestate-works"
          target="_blank"
          icon={GitHubIcon}
          className="flex-none"
          large
        >
          Code
        </IconLink>
        <IconLink
          href="https://youtu.be/tH5ABw8Avxc"
          target="_blank"
          icon={YouTubeIcon}
          className="flex-none"
          large
        >
          How useState works in React
        </IconLink>

        <div className="flex items-center gap-x-1.5">
          <div className="text-sm text-gray-400">By</div>
          <a
            href="https://hastoggle.dev"
            title="hasToggle"
            target="_blank"
            rel="noreferrer"
          >
            <div className="">
              <Logo className="inline-block h-3 w-auto" />
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
