import Loader from 'components/Loader'
import * as S from './styles'

interface Props {
  loading: boolean
}
const LoaderContainer = ({ loading }: Props) => (
  <>
    {loading && (
      <S.Container>
        <Loader />
      </S.Container>
    )}
  </>
)
export default LoaderContainer
