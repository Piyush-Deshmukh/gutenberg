<?php

class WP_HTML_Processor extends WP_HTML_Tag_Processor {
	public function get_content_inside_balanced_tags() {
		static $start_name = null;
		static $end_name = null;

		if ( null === $start_name || array_key_exists( $start_name, $this->bookmarks ) ) {
			$rand_id = rand( 1, PHP_INT_MAX );
			$start_name = "start_{$rand_id}";
		}

		if ( null === $end_name || array_key_exists( $end_name, $this->bookmarks ) ) {
			$rand_id = rand( 1, PHP_INT_MAX );
			$end_name = "start_{$rand_id}";
		}

		$this->set_bookmark( $start_name );
		$tag_name = $this->get_tag();
		$depth = 1;

		if ( self::is_html_void_element( $tag_name ) ) {
			return '';
		}

		while ( $this->next_tag( [ 'tag_closers' => 'visit' ] ) ) {
			if ( $this->get_tag() !== $tag_name ) {
				continue;
			}

			if ( $this->is_tag_closer() && $depth === 1 ) {
				$this->set_bookmark( $end_name );
				break;
			}

			$depth += $this->is_tag_closer() ? -1 : 1;
		}

		$content = $this->content_inside_bookmarks( $start_name, $end_name );

		$this->release_bookmark( $start_name );
		$this->release_bookmark( $end_name );

		return $content;
	}

	private function content_inside_bookmarks( $start_bookmark, $end_bookmark ) {
		if ( ! isset( $this->bookmarks[ $start_bookmark ], $this->bookmarks[ $end_bookmark ] ) ) {
			return null;
		}

		$start = $this->bookmarks[ $start_bookmark ];
		$end   = $this->bookmarks[ $end_bookmark ];

		return substr( $this->get_updated_html(), $start->end + 1, $end->start - $start->end - 2 );
	}

	/*
	 * HTML-related Utility Functions
	 */

	/**
	 * @see https://html.spec.whatwg.org/#elements-2
	 */
	public static function is_html_void_element( $tag_name ) {
		switch ( $tag_name ) {
			case 'AREA':
			case 'BASE':
			case 'BR':
			case 'COL':
			case 'EMBED':
			case 'HR':
			case 'IMG':
			case 'INPUT':
			case 'LINK':
			case 'META':
			case 'SOURCE':
			case 'TRACK':
			case 'WBR':
				return true;

			default:
				return false;
		}
	}
}
