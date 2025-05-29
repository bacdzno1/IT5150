(function($) {
    $.fn.CustomSelect = function(options) {
        var settings = $.extend({
            placeholder: 'Select an option',
            searchPlaceholder: 'Search...',
            maxItems: 1,
            multiple: false
        }, options);

        return this.each(function() {
            var $select = $(this);
            var $wrapper = $('<div>', { class: 'custom-select-wrapper' });
            var $input = $('<div>', { class: 'custom-select-input' })
                .append($('<input>', { type: 'text', class: 'selected-text', readonly: true, placeholder: settings.placeholder }));
            var $selectedOptionsContainer = $('<div>', { class: 'selected-options-container' });
            var $customSelect = $('<div>', { class: 'custom-select' });
            var $searchInput = $('<input>', { type: 'text', class: 'custom-select-search', placeholder: settings.searchPlaceholder });
            var $noResults = $('<div>', { class: 'custom-select-no-results', text: 'No results found' }).hide();

            var initializeOptions = function() {
                $customSelect.empty();
                $customSelect.prepend($searchInput);

                $select.find('option').each(function() {
                    var $option = $(this);
                    if ($option.val() !== "") {
                        var $customOption = $('<div>', { 'data-id': $option.attr('id'), class: 'custom-select-option', 'data-value': $option.val(), text: $option.text() });

                        if ($option.is(':selected')) {
                            $customOption.addClass('selected');
                            if (settings.multiple) {
                                addSelectedOption($option.val(), $option.text());
                            }
                        }

                        $customSelect.append($customOption);
                    }
                });

                $customSelect.append($noResults);
                updatePlaceholder();

                $searchInput.on('input', function() {
                    var searchTerm = $(this).val().toLowerCase();
                    var hasResults = false;
                    $customSelect.find('.custom-select-option').each(function() {
                        var $option = $(this);
                        var matches = $option.text().toLowerCase().indexOf(searchTerm) > -1;
                        $option.toggle(matches);
                        if (matches) {
                            hasResults = true;
                        }
                    });
                    $noResults.toggle(!hasResults);
                });
            };

            var updateSelectedText = function() {
                if (!settings.multiple) {
                    var selectedTexts = [];
                    $customSelect.find('.custom-select-option.selected').each(function() {
                        selectedTexts.push($(this).text());
                    });
                    $input.find('.selected-text').val(selectedTexts.join(', '));
                }
            };

            var addSelectedOption = function(value, text) {
                var $selectedOption = $('<div>', { class: 'selected-option', 'data-value': value, text: text });
                var $removeButton = $('<span>', { class: 'remove-option', text: '✕' }).on('click', function() {
                    removeSelectedOption(value);
                });
                $selectedOption.append($removeButton);
                $selectedOptionsContainer.append($selectedOption);
                updatePlaceholder();
                $customSelect.removeClass('open');
            };

            var removeSelectedOption = function(value) {
                $customSelect.find('.custom-select-option[data-value="' + value + '"]').removeClass('selected');
                $selectedOptionsContainer.find('.selected-option[data-value="' + value + '"]').remove();
                updateSelectedText();
                updatePlaceholder();
                $select.val($customSelect.find('.custom-select-option.selected').map(function() {
                    return $(this).data('value');
                }).get()).change();
            };

            var updatePlaceholder = function() {
                if ($selectedOptionsContainer.children().length > 0) {
                    $input.hide();
                } else {
                    $input.show();
                }
            };

            initializeOptions();

            $select.hide().after($wrapper.append($selectedOptionsContainer, $input, $customSelect));

            $wrapper.on('click', function() {
                $('.custom-select').not($customSelect).removeClass('open');
                $('.custom-select-input').not($input).removeClass('active');
                $customSelect.toggleClass('open');
                $input.toggleClass('active');
                if ($customSelect.hasClass('open')) {
                    $customSelect.find('.custom-select-search').val('').trigger('input').focus();
                }
            });

            $customSelect.on('click', '.custom-select-option', function(e) {
                var $option = $(this);

                if (settings.multiple) {
                    if ($option.hasClass('selected')) {
                        $option.removeClass('selected');
                        removeSelectedOption($option.data('value'));
                    } else {
                        if ($customSelect.find('.custom-select-option.selected').length < settings.maxItems) {
                            $option.addClass('selected');
                            addSelectedOption($option.data('value'), $option.text());
                        }
                    }
                    updateSelectedText();
                    $select.val($customSelect.find('.custom-select-option.selected').map(function() {
                        return $(this).data('value');
                    }).get()).change();
                } else {
                    if (!$option.hasClass('selected')) {
                        $customSelect.find('.custom-select-option').removeClass('selected');
                        $option.addClass('selected');
                        $select.val($option.data('value')).change();
                        $customSelect.removeClass('open');
                        $input.removeClass('active');
                    }
                }

                updatePlaceholder();
                e.stopPropagation();
            });

            $(document).on('click', function(e) {
                var $target = $(e.target);
                var $wrapper = $target.closest('.custom-select-wrapper');
                if (!$wrapper.length) {
                    $('.custom-select').removeClass('open');
                    $('.custom-select-input').removeClass('active');
                }
            });

            $select.on('change', function() {
                if (!settings.multiple) {
                    var selectedText = $select.find('option:selected').text();
                    $input.find('.selected-text').val(selectedText);
                }
                updatePlaceholder();
                $wrapper.trigger('update');
            });

            $select.on('update', function() {
                initializeOptions();
                updateSelectedText();
                var searchTerm = $customSelect.find('.custom-select-search').val().toLowerCase();
                $customSelect.find('.custom-select-option').each(function() {
                    var $option = $(this);
                    var matches = $option.text().toLowerCase().indexOf(searchTerm) > -1;
                    $option.toggle(matches);
                });
                $noResults.toggle(!$customSelect.find('.custom-select-option:visible').length);
                updatePlaceholder();
            });

            $customSelect.on('click', '.custom-select-option.selected', function(e) {
                var $option = $(this);
                $option.removeClass('selected');
                removeSelectedOption($option.data('value'));
                e.stopPropagation();
                updatePlaceholder();
            });
        });
    };
})(jQuery);
