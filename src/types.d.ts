import { Process } from './constants'

export interface ImageData {
    src: string
    alt: string
    caption?: string
    className?: string;
}

export interface CategoryData {
    name: string
    icon: string
}

export interface ProjectData {
    title: string
    description: string
    details: JSX.Element
    imageSet: ImageData[]
    name: string
    tags?: string[]
    process?: Process
    type?: string
}

export interface TopperProperties {
    src: string
    srcLabeled: string
    alt: string
    link: string
    percentage: number
}
