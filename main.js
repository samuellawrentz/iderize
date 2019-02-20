function WebmailViewModel() {
    // Data
    var self = this;
    self.services = [
        {
            title: 'Transform',
            content: ['Agile', 'Devops', 'Digital Security']
        },
        {
            title: 'Advance',
            content: ['Enterprise Software', 'Full-Stack Web', 'Mobile', 'Systems Integration']
        },
        {
            title: 'Execute',
            content: ['Quality Engineering','Intelligent Automation', 'Data Analytics', 'Cloud Computing']
        },
        {
            title: 'Evolve',
            content: ['Artificial Intelligence', 'Machine Learning', 'Design Thinking', 'Software Consulting']
        }
    ];
};

ko.applyBindings(new WebmailViewModel());