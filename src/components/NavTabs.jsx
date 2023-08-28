// Using object destructuring assignment to pluck off our variables from the props object
// Assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div className="navbar">
      <div className="navbar-brand">
        <h1>Kristine Kim</h1>
      </div>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a
            href="#aboutMe"
            // When 'AboutMe' is clicked on, handlePageChange function from PortfolionContainer.jsx sets 'AboutMe' as its currentPage
            onClick={() => handlePageChange('AboutMe')}
            // This is a conditional (ternary) operator that checks to see if the current page is "AboutMe"
            // If it is, the current page is set to 'nav-link-active', otherwise it is set to 'nav-link'
            className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
          >
            About Me
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#portfolio"
            onClick={() => handlePageChange('Portfolio')}
            // Check to see if the currentPage is `Portfolio`, and if so the active link class is used from bootstrap. Otherwise, it is set to a normal nav-link
            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#resume"
            // When 'Resume' is clicked on, handlePageChange function from PortfolionContainer.jsx sets 'Resume' as its currentPage
            onClick={() => handlePageChange('Resume')}
            // Check to see if the currentPage is `Resume`, and if so the active link class is used from bootstrap. Otherwise, it is set to a normal nav-link
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
          >
            Resume
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => handlePageChange('Contact')}
            // Check to see if the currentPage is `Contact`, and if so the active link class is used from bootstrap. Otherwise, it is set to a normal nav-link
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavTabs;
