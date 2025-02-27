import React, { useRef, type WheelEvent } from 'react'
import { Link } from 'react-router-dom'

import { useAppContext } from '@/app/App.context'
import { topperProperties, type Category } from '@/pages/categories/categories'
import { cn } from '@/lib/tailwind.utils'

export const Hero: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null)
    const { setCategory, scrollToCategory } = useAppContext()

    const onWheel = (e: WheelEvent<HTMLDivElement>) => {
        const element = ref.current
        if (element) {
            if (e.deltaY === 0) return
            element.scrollTo({
                left: element.scrollLeft + e.deltaY,
            })
        }
    }

    // No idea if this actually works since I am not sure how to tab to focus it...
    const handleFocus = (category: Category) => {
        scrollToCategory({ category, horizontal: true })
    }

    return (
        <div className="w-full overflow-x-scroll" ref={ref} onWheel={onWheel}>
            <div
                className={`
                mx-auto my-0
                sticky bottom-0
                min-w-[1050px] w-[227.5vh] max-w-[2800px]
                min-h-[300px] h-[65vh] max-h-[800px]
            `}
            >
                {Object.entries(topperProperties).map(
                    ([key, { srcLabeled, alt, style }]) => {
                        const category = key as Category
                        return (
                            <Link
                                id={category}
                                key={category}
                                to={`/about`}
                                onClick={() => setCategory(category)}
                                onFocus={() => handleFocus(category)}
                            >
                                <img
                                    className={cn(
                                        `
                                            absolute bottom-0 h-full 
                                            saturate-0 hover:saturate-100
                                        `,
                                        style,
                                    )}
                                    src={srcLabeled}
                                    alt={alt}
                                />
                            </Link>
                        )
                    },
                )}
            </div>
        </div>
    )
}
