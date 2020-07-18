$(document).ready(function()
{
  update();

  $(window).bind('load', update);

  $(window).bind('scroll', update);

  $(window).bind('resize', update);

  function update()
  {
    stickUnstickNavBar();
  }

  function stickUnstickNavBar()
  {
    var initialNavBarTop = $('.heading').position().top + $('.heading').height();
    var winTop = $(window).scrollTop();
    var navBarPosition = $('nav:first').position();
    var navBarTop = navBarPosition.top;

    if (initialNavBarTop <= winTop + 48)
    {
      stickNavBar();
    }
    else
    {
      unstickNavBar();
    }
  }

  function stickNavBar()
  {
    if ($('nav:first').hasClass('sticky'))
    {
      return;
    }

    $('nav:first').addClass('sticky');
    $('nav:first').removeClass('standard-shadow');
    $('.navbar-brand:first').fadeIn();
  }

  function unstickNavBar()
  {
    if (!$('nav:first').hasClass('sticky'))
    {
      return;
    }

    $('nav:first').removeClass('sticky');
    $('nav:first').addClass('standard-shadow');
    $('.navbar-brand:first').fadeOut();
  }

  /*smooth scroll page links*/
  $('.nav-link').click(function(event)
  {
    event.preventDefault();

    var navBarHeight = 85;
    var id = $(this).attr('href');
    var offset = $('' + id).offset();
    var offsetTop = offset.top - navBarHeight-8;

    $('html, body').animate({scrollTop: offsetTop}, 'slow');

    setTimeout(function(){ $('.navbar-collapse').collapse('hide'); }, 400);
  });
});
