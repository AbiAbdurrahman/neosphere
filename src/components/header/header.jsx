import Link from 'next/link';

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'center', gap: '1rem' }}>
        <img
          src="/ndm-logo.png"
          alt="Logo"
        />
      </div>
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
    backgroundColor: '#7F1416',
    padding: '1rem',
    color: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nav: {
    display: 'flex',
    gap: '2rem',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1.2rem',
  },
};

export default Header;