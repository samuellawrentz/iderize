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

    self.solutions = [
        'Artificial Intelligence',
        'Augmented Reality Solutions',
        'Internet of Things',
        'Big Data Analytics',
        'Cloud Computing',
        'Blockchain Development'
    ];

    self.scrollTo = function(selector){
        $('html, body').animate({
            scrollTop: $($(selector)[0]).offset().top
        }, 1000);
    }
};

ko.applyBindings(new WebmailViewModel());

var sections = {},
_height  = $(window).height(),
i        = 0;

// Grab positions of our sections 
$('.slide').each(function(){
sections[$(this).attr('name')] = $(this).offset().top - 30;
});

$(document).scroll(function(){
var pos = $(this).scrollTop();

// Look in the sections object and see if any section is viewable on the screen. 
// If two are viewable, the lower one will be the active one. 
for(i in sections){
    if(pos > sections[i] && pos < sections[i] + _height){
        $('header li').removeClass('active');
        $('#'+i).addClass('active');
    }  
}
});