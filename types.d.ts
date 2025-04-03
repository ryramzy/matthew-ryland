import { ReactNode } from 'react'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any
    }
  }
}

export interface LayoutProps {
  children: ReactNode
}

export interface PageProps {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
} 