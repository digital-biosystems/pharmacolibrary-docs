<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;amivantamab&quot;}]"></div>

# amivantamab

- **generic name:** amivantamab
- **ATC codes:** `L01FX18`
- **DrugBank:** [DB16695](https://go.drugbank.com/drugs/DB16695) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Amivantamab is a monoclonal antibody used to treat non-small-cell lung cancer. It is an approved anticancer medicine authorised in the European Union, and is also being studied for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q106957199](https://www.wikidata.org/wiki/Q106957199) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 09:19 | 0:52 | 0/0/0 | 0/0/0 | 0/0/0 | 26,415/2,754 | openai / gpt-6-luna | 4 | 0/3 | 4/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=amivantamab) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: EGFR (antibody), EGFR (downregulator), FCGR3A (inducer), MET (antibody), MET (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 13 matched, 13 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Haddish-Berhane_2024.pdf` | Haddish-Berhane N et al., Determination and Confirmation of Recom…, Clinical pharmacology and t… (2024) | popPK | 10 | [10.1002/cpt.3064](https://doi.org/10.1002/cpt.3064) | [37776107](https://pubmed.ncbi.nlm.nih.gov/37776107) | A human amivantamab PopPK model is reported, but numeric disposition parameter values are not present in the evidence. |
| `Minchom_2026.pdf` | Minchom A et al., Subcutaneous Delivery of Amivantamab in…, Clinical lung cancer (2026) | popPK | 8 | [10.1016/j.cllc.2026.02.001](https://doi.org/10.1016/j.cllc.2026.02.001) | [41807198](https://pubmed.ncbi.nlm.nih.gov/41807198) | Population pharmacokinetic modeling is reported, but no numeric disposition parameters are provided in the evidence. |

<sub>queue written 2026-10-07T09:19:33.958513+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Haddish-Berhane_2024 | relevant | 10 | 0 | A human amivantamab PopPK model is reported, but numeric disposition parameter values are not present in the evidence. |
| popPK | Minchom_2026 | relevant | 8 | 0 | Population pharmacokinetic modeling is reported, but no numeric disposition parameters are provided in the evidence. |
| popPK | Ter_2023 | relevant | 8 | 1 | The study simulates amivantamab using a population-PK model, but its numeric parameter values and detailed results are not provided here. |
| popPK | Ter_2025 | irrelevant | 0 | 0 | The simulations quantify lazertinib exposure, not amivantamab pharmacokinetic parameters. |
| popPK | Tomasini_2026 | irrelevant | 0 | 0 | This human clinical outcomes study reports no quantitative pharmacokinetic parameters for amivantamab. |
| popPK | Yuan_2026 | relevant | 10 | 2 | The human population-PK model is relevant, but its numeric parameter values are only referenced in Table S3, which is not provided. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
