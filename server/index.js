/**
 * Create indices.
 */
'use strict';

var ensureIndex = function(coll, field) {
   db[coll].ensureIndex(field, { unique: true, background: true });
}

var collections = [
    'docs_en', 
    'docs_fa', 
    'docs_es', 
    'docs_ru',
    'docs_case_study_2014_12_02T1'
    ];

var fields = [{'perspective': 1, _id: 1},
              {'lms.score': 1, _id: 1},
              {'lms.target.lemma': 1, _id: 1},
              {'lms.target.form': 1, _id: 1},
              {'lms.source.lemma': 1, _id: 1},
              {'lms.source.form': 1, _id: 1},
              {'lms.source.concepts': 1, _id: 1},
              {'lms.source.schemanames': 1, _id: 1},
              {'lms.target.schemaname': 1, _id: 1},
              {'lms.target.concept': 1, _id: 1}];

collections.forEach(function (coll) {
   fields.forEach(function (field) {
      print('Creating index', field, 'on collection', coll);
      ensureIndex(coll, field, { background: true });
   });
});

