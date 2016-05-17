block('mailchimp-subscribe')(
    content()(function() {
        var self = this;

        return [
            {
                elem: 'form',
                tag: 'form',
                attrs: {
                    action: '//theprotein.us10.list-manage.com/subscribe/post?u=d1fd7d30d340277d1c75179a7&amp;id=9d1b54e6b1',
                    method: 'POST',
                    name: 'mc-embedded-subscribe-form',
                    target: '_blank'
                },
                content: [
                    {
                        block: 'input',
                        mods: { theme: 'p' },
                        mix: { block: self.block, elem: 'input' },
                        attrs: {
                            type: 'email',
                            required: 'required'
                        },
                        name: 'MERGE0',
                        placeholder: 'Enter your email address'
                    },
                    {
                        tag: 'input',
                        attrs: {
                            type: 'hidden',
                            name: 'b_d1fd7d30d340277d1c75179a7_9d1b54e6b1'
                        }
                    },
                    {
                        block: 'button',
                        mix: { block: self.block, elem: 'button' },
                        mods: { type: 'sumbit', theme: 'p', size: 'm' },
                        text: 'Subscribe'
                    }
                ]
            }
        ]
    })
);
