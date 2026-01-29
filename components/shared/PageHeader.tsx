interface PageHeaderProps {
  title: string
  subtitle?: string
  breadcrumbs?: { label: string; href?: string }[]
}

export default function PageHeader({ title, subtitle, breadcrumbs }: PageHeaderProps) {
  return (
    <div className="bg-gray-50 py-12">
      <div className="p-5.5 lg:py-6.75   lg:px-27.5">
        {breadcrumbs && (
          <nav className="mb-4">
            <ol className="flex space-x-2 text-sm text-gray-600">
              {breadcrumbs.map((crumb, index) => (
                <li key={index} className="flex items-center">
                  {index > 0 && <span className="mx-2">/</span>}
                  {crumb.href ? (
                    <a href={crumb.href} className="hover:text-blue-600">
                      {crumb.label}
                    </a>
                  ) : (
                    <span>{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
        {subtitle && (
          <p className="text-xl text-gray-600 max-w-3xl">{subtitle}</p>
        )}
      </div>
    </div>
  )
}