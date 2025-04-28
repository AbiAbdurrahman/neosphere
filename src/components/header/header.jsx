import Link from 'next/link';

const Header = () => {
  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        <Link href="/" style={styles.link}>
          Home
        </Link>
        <Link href="/about" style={styles.link}>
          About
        </Link>
        <Link href="/our-team" style={styles.link}>
          Our Team
        </Link>
        <Link href="/articles" style={styles.link}>
          Articles
        </Link>
        <Link href="/shop" style={styles.link}>
          Shop
        </Link>
        <Link href="/contact" style={styles.link}>
          Contact
        </Link>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#333',
    padding: '1rem',
    color: '#fff',
  },
  nav: {
    display: 'flex',
    justifyContent: 'right',
    alignItems: 'center',
    gap: '2rem',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1.2rem',
  },
};

export default Header;