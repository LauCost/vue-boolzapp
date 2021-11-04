const app = new Vue({

    el: "#data",

    data: {
        contacts: [
            {
                name: 'Michele',
                avatar: './img/avatar_1.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    },

                ],
            },
            {
                name: 'Fabio',
                avatar: './img/avatar_2.jpg',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: './img/avatar_3.jpg',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: './img/avatar_4.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: './img/avatar_5.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: './img/avatar_6.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ],

        counter: 0,

        messaggioNuovo: '',

        searchBar: '',
    },

    methods: {

        selezionaChat(i) {
            this.counter = i;

            console.log(i);
        },

        nuovoMessaggio() {

            var today = new Date();

            var date = today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + today.getDate();

            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

            var dateTime = date + ' ' + time;

            if (this.messaggioNuovo != "") {

                this.contacts[this.counter].messages.push({
                    date: dateTime,
                    text: this.messaggioNuovo,
                    status: 'sent'
                })

            }

            this.messaggioNuovo = "";



            setTimeout(() => {
                var today = new Date();

                var date = today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + today.getDate();

                var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

                var dateTime2 = date + ' ' + time;

                this.contacts[this.counter].messages.push({
                    date: dateTime2,
                    text: 'Ok!',
                    status: 'received',
                });
            }, 1000)


        },


        cerca() {

            /* console.log(this.searchBar); */

            this.contacts.forEach(contatto => {
                if (contatto.name.toLowerCase().includes(this.searchBar.toLowerCase())) {
                    contatto.visible = true
                } else {
                    contatto.visible = false
                }
            });

        },

    }
})