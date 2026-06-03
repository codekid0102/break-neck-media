
export default function RootLayout({children}:{children:React.ReactNode}) {
  return (
    <html lang="en">
      <body style={{background:'#050505',color:'white',fontFamily:'sans-serif'}}>{children}</body>
    </html>
  )
}
