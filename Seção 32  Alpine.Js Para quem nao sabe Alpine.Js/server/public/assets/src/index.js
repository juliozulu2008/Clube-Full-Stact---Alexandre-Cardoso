
function app() {
    return {
        show: false,
        users:[],
        data() {
            this.users = [
                {
                    id: 1,
                    firsName: 'Julio',
                    lastName: 'Santos',
                },
                {
                    id: 2,
                    firsName: 'Kelly',
                    lastName: 'Dias',
                },
                {
                    id: 3,
                    firsName: 'Laura',
                    lastName: 'Dias',
                },
                {
                    id: 4,
                    firsName: 'Ravi',
                    lastName: 'Dias',
                }
            ]
        }
    }
}