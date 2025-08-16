import Link from 'next/link'

const Navigation = ({ flex_direction = 'flex-row', onClick = () => {} }) => {
  return(
      <ul className={`flex ${flex_direction} justify-center [&>li>a]:px-3 [&>li>a]:py-2 [&>li>a:hover]:font-bold gap-7`}>
        <li>
          <Link href="/" onClick={ onClick } style={styles.link}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" onClick={ onClick } style={styles.link}>
            About
          </Link>
        </li>
        <li>
          <Link href="/our-team" onClick={ onClick } style={styles.link}>
            Our Team
          </Link>
        </li>
        <li>
          <Link href="/contact" onClick={ onClick } style={styles.link}>
            Contact
          </Link>
          {/* <Link onClick={ onClick } href='/coming-soon'>{ 'Contact' }</Link> */}
        </li>

      </ul>
  )
}

const styles = {
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1.2rem',
  }
}

export default Navigation