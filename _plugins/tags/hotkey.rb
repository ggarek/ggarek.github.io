module Jekyll
  class RenderTimeTag < Liquid::Tag

    def initialize(tag_name, text, tokens)
      super
      @text = text
    end

    def render(context)
      "<span class=\"hotkey-tag\">#{@text.strip}</span>"
    end
  end
end

Liquid::Template.register_tag('hotkey', Jekyll::RenderTimeTag)
