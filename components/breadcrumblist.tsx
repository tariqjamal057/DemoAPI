import Link from "next/link"
import React from "react"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"


interface BreadcrumbWithCustomSeparatorProps {
  label: string
  href: string
}


export function BreadcrumbWithCustomSeparator({items }: {items: BreadcrumbWithCustomSeparatorProps[]}) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href={item.href}>{item.label}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            {index < items.length - 1 && (
              <BreadcrumbSeparator />
            )}
          </React.Fragment>
        ))}
        
      </BreadcrumbList>
    </Breadcrumb>
  )
}
