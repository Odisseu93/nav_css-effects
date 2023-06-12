import styled from 'styled-components';

interface NavButtonProps {
  isOpened: boolean
}

export const NavButton = styled.button<NavButtonProps>`
  background-color: transparent;
  
  margin: 0.5rem;
  border: none;
  padding: 0.25rem;

  cursor: pointer;

  .hamburger-icon, .close-icon {
    color: #FFF;

    width: 60px;
    height: 30px;
  }

  .hamburger-icon {
    transition: all  0.3s ease-in-out;
    opacity: ${({ isOpened }) => !isOpened ? 1 : 0};
  }

  .close-icon {
    position: relative;
    left: -3.9rem;
    transition: all  0.3s ease-in-out;
    opacity: ${({ isOpened }) => isOpened ? 1 : 0};
  }
  
  @media (min-width: 768px) {

    &:hover {
        transform: scale(1.01);  
    }

    .hamburger-icon, .close-icon {
      color: #FFF;

      width: 30px;
      height: 20px;
  }
  .close-icon {
    left: -1.9rem;
  }
}
`;