#!/usr/bin/env node

'use strict';

const q = 'text_data:((("Dear " OR "To " OR "") AND ("Chairman Pai" OR "Mr Pai") AND (", " OR ": ") AND "I" AND ("would like to comment on" OR "have concerns about" OR "am a voter worried about" OR "concerned about") AND ("net neutrality" OR "Network Neutrality" OR "Internet regulation" OR "the FCC rules on the Internet") AND "I" AND ("urge" OR "encourage" OR "ask" OR "recommend" OR "request" OR "advocate") AND ("the commission" OR "the commissioners" OR "Ajit Pai" OR "government") AND "to" AND ("reverse" OR "repeal" OR "undo")) OR "The unprecedented regulatory power")';

process.stdout.write(q.replace(/"/g, '&quot;'));
