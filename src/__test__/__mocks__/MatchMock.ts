import { match } from 'react-router-dom';

export class MatchMock implements match {
    public constructor(
        public isExact = true,
        public params = { },
        public path = '',
        public url = '',
    ) { }
}
