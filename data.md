# Data & downloads

The data are published on Zenodo, release 26.11. The three records are registered with their DOIs and will be published soon; a link works once its record is public.

| Record | Contents | Size | Licence | DOI |
|---|---|---|---|---|
| [Research dataset](https://zenodo.org/records/24119263) | Per-drug records of population pharmacokinetic, pharmacodynamic and pharmacogenomic models extracted from published papers, with the provenance of every value, the automatic reviewer's verdicts and the simulation models. Start here. | about 0.6 GB (1.5 GB unpacked) | CC BY 4.0 | [10.5281/zenodo.24119263](https://doi.org/10.5281/zenodo.24119263) |
| [Redistributable source corpus](https://zenodo.org/records/24125755) | Full texts of the relevant papers whose licences allow redistribution, commercial reuse included (about 10,000 papers, 2,769 drug folders). Unpacks beside the research dataset. | about 40 GB, 10 tar shards | CC BY 4.0 | [10.5281/zenodo.24125755](https://doi.org/10.5281/zenodo.24125755) |
| [Non-commercial source corpus](https://zenodo.org/records/24133749) | Full texts of the relevant papers whose licences allow redistribution for non-commercial purposes only. Unpacks beside the research dataset. | about 20 GB, 6 tar shards | CC BY-NC 4.0 | [10.5281/zenodo.24133749](https://doi.org/10.5281/zenodo.24133749) |

Cite the research dataset. The two source corpora are its supplements: each file keeps the licence of its paper, listed in `ATTRIBUTIONS.csv` and `MANIFEST.csv`. The non-commercial corpus is for non-commercial use only.

## Databases inside the site

The Query and Sites pages run on three SQLite databases loaded in the browser. They are not offered as downloads; the data are in the Zenodo records above.

### Query database

Tables `drug`, `drug_alias`, `paper`, `record`, `parameter`, `pd_record`, `pgx_record`, `qcode` and `search_doc`. A parameter keeps the paper's `value` and `unit_verbatim` (cite these) and a converted `value_si` in `unit_si` (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time) for comparison across studies. `record.status_label` is the record's status in the site's vocabulary (*Curated (human-checked)*, *Reproduces paper*, *Reproduces with caveats*, *Simulated*, *Not simulated*, *Needs review*, *Rejected*; see the status definitions on any record page); `record.status` keeps the pipeline's own value.

### Passage database

The text the Query page's optional language model reads: DrugBank prose (description, indication, mechanism, ADME fields), ClinPGx guideline and level 1A–2B clinical annotations, and the PubMed abstracts of the papers behind the records, with a full-text index `passage_fts`. Every DrugBank passage names its DrugBank id; commercial reuse needs a DrugBank licence.

### ADME sites database

Where each drug's absorption, distribution, metabolism and excretion happen: the enzymes, transporters and targets DrugBank lists for it, mapped to tissues and processes (`adme_site`), and organ words in DrugBank's ADME text. The Sites page draws it as a heat map and an anatomogram.

> These are research data extracted by software from published papers. They are not clinically validated and must not be used for dosing decisions.
