import Either from '@sweet-monads/either';

type QueryMap = Map<string, <L,T>()=> Either<L,T>>
