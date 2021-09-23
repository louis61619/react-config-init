import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  padding: 16px 0;
  display: flex;
  img {
    width: 50px;
    height: 50px;
  }

  .bar {
    margin-left: auto;
    display: flex;
    align-items: center;

    .tool {
      .anticon {
        font-size: 24px;
        font-weight: 300;
        margin-right: 12px;
      }
    }
  }
`
