<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06B&quot;,&quot;href&quot;:&quot;atc/N06B.md&quot;},{&quot;label&quot;:&quot;idebenone&quot;}]"></div>

# idebenone

- **generic name:** idebenone
- **ATC codes:** `N06BX13`
- **DrugBank:** [DB09081](https://go.drugbank.com/drugs/DB09081) · **PubChem:** [CID 12881464](https://pubchem.ncbi.nlm.nih.gov/compound/12881464)
- **molar mass:** 338.444 g/mol (C19H30O5) — DrugBank
- **groups:** approved, investigational

## About

Idebenone, an antioxidant drug, is used to treat Leber hereditary optic atrophy and has also been studied for Friedreich ataxia. It is authorised in the European Union for this eye condition, though other marketing applications there were withdrawn or refused.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4197874](https://www.wikidata.org/wiki/Q4197874) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 00:32 | 0:24 | 0/0/0 | 0/0/0 | 0/0/0 | 39,500/643 | ollama / glm-5.3-flash | 2 | 2/0 | 2/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=idebenone) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Back_1999 | irrelevant | 0 | 0 | Idebenone is only used as a free radical scavenger reagent in an in vitro cell viability assay; no PK parameters reported. |
| popPK | Kaneko_1991 | irrelevant | 0 | 0 | In-vitro pharmacology study of NMDA channel effects; idebenone is only a tested compound with no PK parameters. |
| popPK | Mariotti_2012 | irrelevant | 0 | 0 | Idebenone is only background co-medication; the study drug is erythropoietin and no PK parameters are reported. |
| popPK | Miyauchi_2019 | irrelevant | 0 | 0 | In-vitro cell study where idebenone is only a positive-control comparator; no PK parameters reported. |
| popPK | Oka_1993 | irrelevant | 0 | 0 | In-vitro rat oligodendroglia glutamate toxicity study; idebenone only mentioned as a free radical scavenger reagent, no PK parameters. |
| popPK | Ono_1995 | irrelevant | 0 | 0 | The evidence contains only a GROBID processing header with no actual paper text, parameters, or species information. |
| popPK | Yonezawa_1996 | irrelevant | 0 | 0 | In-vitro neuroprotection study where idebenone is only a free radical scavenger tested; no PK parameters reported. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
