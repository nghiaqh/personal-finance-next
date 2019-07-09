import Link from 'next/link'

const Footer = () => {
  const date = new Date()
  const year = date.getFullYear()

  return (
    <>
      <footer className='global-footer'>
        <span className='logo'>
          <em>Personal Finance Dashboard &copy; {year}</em>
        </span>

        <nav>
          <Link href='/'>
            <a aria-label='go to home page'>Home</a>
          </Link>
          <Link href='/about'>
            <a aria-label='go to about page'>About</a>
          </Link>
        </nav>
      </footer>

      <style jsx>{`
        footer {
          border-top: 1px solid #cecece;
          margin: 20px 20px 0;
          padding: 20px 0;
        }

        nav a {
          display: block;
          margin: 10px 0;
        }

        @media (min-width: 600px) {
          footer {
            display: flex;
            justify-content: space-between;
          }

          nav a {
            display: inline-block;
            margin: 0 0 0 10px;
          }
        }
      `}</style>
    </>
  )
}

export default Footer