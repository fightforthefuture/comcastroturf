#!/usr/bin/env node

'use strict';

const q = 'text_data:((("Dear " OR "To " OR "") AND ("Chairman Pai" OR "Mr Pai") AND (", " OR ": ") AND "I would like to comment on" AND ("net neutrality" OR "net neutrality regulations" OR "NET NEUTRALITY" OR "Network Neutrality" OR "Internet regulation" OR "the FCC rules on the Internet") AND "I" AND ("urge" OR "encourage" OR "ask" OR "recommend" OR "request") AND ("the commission" OR "the commissioners" OR "Ajit Pai") AND "to" AND ("reverse" OR "repeal" OR "undo")) OR "The unprecedented regulatory power")';

process.stdout.write(q.replace(/"/g, '&quot;'));
