# Data & downloads

The site ships three SQLite databases. Each runs in the browser (the Query and Sites pages load them on demand) and can be downloaded and opened with any SQLite client. File names carry a content hash; the links below always point at the current file.

| Database | File | Size | Contents | Licence |
|---|---|---|---|---|
| Query database | [pharmacolibrary-bc94bf86d4.sqlite](data/pharmacolibrary-bc94bf86d4.sqlite) | 19.0 MB | 17,446 records, 38,918 parameters, 2,200 drugs | licence not set yet; each record cites its source paper |
| Passage database | [knowledge-8bd0c9550d.sqlite](data/knowledge-8bd0c9550d.sqlite) | 61.0 MB | 46,759 passages for 2,196 drugs: DrugBank 16,794, ClinPGx guideline 2,476, ClinPGx clinical 1,698, PubMed abstracts 25,791 | DrugBank CC BY-NC 4.0; ClinPGx CC BY-SA 4.0; abstracts per paper |
| ADME sites database | [adme-022c2280ad.sqlite](data/adme-022c2280ad.sqlite) | 7.3 MB | 12,084 drugs, 35,925 enzyme/transporter/target links, 7,155 organ mentions | DrugBank-derived links CC BY-NC 4.0; tissue table licence not set yet |

## Query database

Tables `drug`, `drug_alias`, `paper`, `record`, `parameter`, `pd_record`, `pgx_record`, `qcode` and `search_doc`. A parameter keeps the paper's `value` and `unit_verbatim` (cite these) and a converted `value_si` in `unit_si` (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time) for comparison across studies. `record.status_label` is the record's status in the site's vocabulary (*Curated (human-checked)*, *Reproduces paper*, *Reproduces with caveats*, *Simulated*, *Not simulated*, *Needs review*, *Rejected*; see the status definitions on any record page); `record.status` keeps the pipeline's own value.

## Passage database

The text the Query page's optional language model reads: DrugBank prose (description, indication, mechanism, ADME fields), ClinPGx guideline and level 1A–2B clinical annotations, and the PubMed abstracts of the papers behind the records, with a full-text index `passage_fts`. Every DrugBank passage names its DrugBank id; commercial reuse needs a DrugBank licence.

## ADME sites database

Where each drug's absorption, distribution, metabolism and excretion happen: the enzymes, transporters and targets DrugBank lists for it, mapped to tissues and processes (`adme_site`), and organ words in DrugBank's ADME text. The Sites page draws it as a heat map and an anatomogram.

> These are research data extracted by software from published papers. They are not clinically validated and must not be used for dosing decisions.
