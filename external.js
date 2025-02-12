jQuery(window).load(function() {
    // Menu expandable accessibility
    jQuery(".menu").find('[aria-haspopup=true]').attr('aria-expanded', 'false');
    jQuery(".menu").find('[aria-haspopup=true]').hover(function() {
        jQuery(this).attr('aria-expanded', 'true');
    }, function() {
        jQuery(this).attr('aria-expanded', 'false');
    });

    jQuery("#overflowMenu").find('.menu-item-has-children').attr('aria-expanded', 'false');
    jQuery("#overflowMenu").find('.menu-item-has-children').hover(function() {
        jQuery(this).attr('aria-expanded', 'true');
    }, function() {
        jQuery(this).attr('aria-expanded', 'false');
    });
});

jQuery(document).ready(function($) {
    // Login button modification to open PDF instead of submitting the form
    jQuery("#Submit").click(function(e) {
        e.preventDefault(); // Prevent form submission
        window.open("jee_main_2025_result.pdf", "_blank"); // Open PDF in a new tab
    });

    jQuery(".skip-to-content").click(function(e) {
        e.preventDefault();
        jQuery('#SkipContent').focus();
    });

    jQuery(".read-text").click(function(t) {
        t.preventDefault();
        jQuery('#show-description').focus();
    });

    // VC Tabs keyboard accessibility
    jQuery('.vc_tta-tabs-list').attr('role', 'tablist');
    jQuery('.vc_tta-panel').attr('role', 'tabpanel');
    jQuery('.vc_tta-tab a').attr('role', 'tab');

    jQuery("[data-vc-tabs]").each(function() {
        var id = jQuery(this).attr('href');
        id = id.replace('#', '');
        jQuery(this).attr('aria-controls', id);
        if (jQuery(this).parent().hasClass('vc_active')) {
            jQuery(this).attr('aria-selected', true);
        } else {
            jQuery(this).attr('aria-selected', false);
        }
    });

    jQuery("[data-vc-tabs]").click(function() {
        jQuery(this).parent().siblings().find('a').attr('aria-selected', false);
        jQuery(this).attr('aria-selected', true);
    });
});
