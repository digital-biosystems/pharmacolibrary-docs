<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N07C&quot;,&quot;href&quot;:&quot;atc/N07C.md&quot;},{&quot;label&quot;:&quot;acetylleucine&quot;}]"></div>

# acetylleucine

- **generic name:** acetylleucine
- **ATC codes:** `N07CA04`
- **DrugBank:** [DB13226](https://go.drugbank.com/drugs/DB13226) · **PubChem:** not captured
- **molar mass:** 173.212 g/mol (C8H15NO3) — DrugBank
- **groups:** investigational

## About

Acetylleucine is a chemical compound classified as an antivertigo preparation, used against vertigo. It is considered investigational and is not an approved medicine in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2823840](https://www.wikidata.org/wiki/Q2823840) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 03:54 | 3:00 | 0/0/0 | 0/0/0 | 0/0/0 | 200,080/1,613 | ollama / glm-5.3-flash | 12 | 7/5 | 12/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 8285 matched, 15 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Loiseau_1998.pdf` | Loiseau PM et al., In vitro antifilarial activity of organ…, International journal for p… (1998) | pd | 5 | [10.1016/s0020-7519(98)00072-1](https://doi.org/10.1016/s0020-7519(98)00072-1) | [9762575](https://www.ncbi.nlm.nih.gov/pubmed/9762575) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-07T03:54:08.882218+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bräm_2026 | irrelevant | 0 | 0 | This is a methods paper on NODE-LASSO automated model development using simulated PK data, neonatal weight, and warfarin — acetylleucine is not mentioned at all. |
| popPK | Chen_2026 | irrelevant | 0 | 0 | This is a population-PK study of rivaroxaban, not acetylleucine; no acetylleucine parameters are reported. |
| popPK | Jia_2026 | irrelevant | 0 | 0 | This is a population-PK study of rivaroxaban in post-TIPS patients, not acetylleucine; no acetylleucine parameters are present. |
| popPK | Karlsen_2026 | irrelevant | 0 | 0 | This is a simulated popPK benchmarking framework for an unnamed Sanofi molecule, not acetylleucine; no acetylleucine PK parameters are reported. |
| popPK | Kwack_2026 | irrelevant | 0 | 0 | This is an LLM-automation methods paper modeling warfarin, theophylline, and tobramycin — acetylleucine is not studied at all. |
| popPK | Loiseau_1998 | irrelevant | 0 | 0 | In vitro antifilarial activity study of organometallic complexes; acetylleucine is only a ligand in a Pt complex, no PK parameters. |
| popPK | Serkland_2026 | irrelevant | 0 | 0 | This is a population PKPD study of ocrelizumab, not acetylleucine; no acetylleucine parameters appear. |
| popPK | Suthahar_2026 | irrelevant | 0 | 0 | This is a systematic review of population-PK models for 5-fluorouracil, not acetylleucine; no acetylleucine parameters are reported. |
| PGx | Szuch_2018 | not_relevant | 0 | 0 | Paper describes MSUD (BCKDHB variants) and N-acetylleucine as a metabolic biomarker, not a pharmacogenomic effect on PK/PD of a drug. |
| popPK | Vicente_2026 | irrelevant | 0 | 0 | This is a population-PK study of subcutaneous infliximab, not acetylleucine; no acetylleucine parameters are present. |
| popPK | Wang_2026 | irrelevant | 0 | 0 | This is a population-PK model library for polymyxin B, not acetylleucine; acetylleucine is not mentioned at all. |
| popPK | Wanika_2026 | irrelevant | 0 | 0 | This is a methodological UQ paper using simulated Monolix demo data for an unnamed drug; acetylleucine is not the subject and no acetylleucine PK parameters are reported. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
