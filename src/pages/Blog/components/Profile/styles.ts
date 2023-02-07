import styled from 'styled-components'

export const ProfileContainer = styled.section`
  width: 100%;
  min-height: 13.25rem;
  padding: 2rem 2.5rem;
  margin-top: -5.5rem;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors['base-profile']};
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`

export const ProfileAvatar = styled.img`
  width: 9.25rem;
  height: 9.25rem;
  border-radius: 8px;
  object-fit: cover;
`

export const ProfileInfo = styled.div`
  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      border: none;
      background: none;
      color: ${({ theme }) => theme.colors['brand-blue']};
      font-size: ${({ theme }) => theme.textSizes['components-link']};
      text-transform: uppercase;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-weight: 700;
      transition: 0.4s;
      border-bottom: 1px solid transparent;
      height: 19px;
      line-height: 19px;
      color: ${({ theme }) => theme.colors['brand-blue']};
      font-weight: bold;

      svg {
        width: 0.75rem;
        height: 0.75rem;
      }

      &:hover {
        border-color: ${({ theme }) => theme.colors['brand-blue']};
      }
    }
  }

  p {
    font-size: ${({ theme }) => theme.textSizes['text-m']};
    color: ${({ theme }) => theme.colors['base-text']};
    margin-top: 0.5rem;
  }

  ul {
    display: flex;
    gap: 1.5rem;
    align-items: center;
    margin-top: 1.5rem;
    color: ${({ theme }) => theme.colors['base-subtitle']};

    li {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      svg {
        width: 1.125rem;
        height: 1.125rem;
        color: ${({ theme }) => theme.colors['base-label']};
      }
    }
  }
`
