<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A01A&quot;,&quot;href&quot;:&quot;atc/A01A.md&quot;},{&quot;label&quot;:&quot;sodium perborate&quot;}]"></div>

# sodium perborate

- **generic name:** sodium perborate
- **ATC codes:** `A01AB19`
- **DrugBank:** [DB13235](https://go.drugbank.com/drugs/DB13235) · **PubChem:** not captured
- **molar mass:** 59.82 g/mol (BHO3) — DrugBank
- **groups:** approved

## About

Sodium perborate is an antiseptic used for local oral treatment, for example in stomatological preparations for mouth conditions. It is an approved drug, though no European Union authorisation is recorded in the available facts.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q415507](https://www.wikidata.org/wiki/Q415507) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 03:36 | 1:03 | 0/0/0 | 0/0/0 | 0/0/0 | 48,814/613 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 1/2 | 1/1 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=sodium_perborate) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | blood | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 13 matched, 15 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Warne_1999.pdf` | Warne MS et al., Toxicity of laundry detergent component…, Ecotoxicology and environme… (1999) | pd | 4 | [10.1006/eesa.1999.1824](https://doi.org/10.1006/eesa.1999.1824) | [10571467](https://www.ncbi.nlm.nih.gov/pubmed/10571467) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-04T03:35:36.667774+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cebeci_2022 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of anti-cancer effects and does not report pharmacokinetic parameters. |
| popPK | Cebeci_2025 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of anti-cancer effects (apoptosis, cell cycle) and does not report any pharmacokinetic parameters. |
| PD | Cebeci_2025 | not_relevant | 3 | 1 | The study mentions treatment at IC50 concentrations but does not provide the numeric IC50 values, dose-response curves, or other quantitative PD parameters in the provided text. |
| popPK | Di_1996 | irrelevant | 0 | 0 | The study uses sodium perborate as a pro-oxidant stressor to measure tissue antioxidant capacity via luminescence, not to characterize the pharmacokinetics of sodium perborate. |
| popPK | Islek_2026 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of antileishmanial activity and does not report any pharmacokinetic parameters for sodium perborate. |
| popPK | Kinomoto_2001 | irrelevant | 0 | 0 | The study is an in-vitro cytotoxicity assessment of sodium perborate on periodontal ligament cells, not a pharmacokinetic study. |
| popPK | Omeroglu_2022 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic analysis of anti-proliferative effects and transcriptomics, reporting no pharmacokinetic parameters. |
| popPK | Schröder_2002 | irrelevant | 0 | 0 | The paper is an environmental fate modeling study of boron and LAS in a river, not a pharmacokinetic study of sodium perborate in a biological system. |
| popPK | Warne_1999 | irrelevant | 0 | 0 | no_text gate: only 112 chars of text extracted (&lt; 400) |
| PD | Warne_1999 | not_relevant | 0 | 0 | The paper focuses on the toxicity of laundry detergent components to cladocerans and does not report any pharmacodynamic or exposure-response relationship for sodium perborate. |
| popPK | Xiang_2020 | irrelevant | 0 | 0 | The study analyzes the pharmacokinetics of bemarituzumab, not sodium_perborate. |
| PD | Xiang_2020 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) analysis for bemarituzumab, not sodium perborate, and does not provide a pharmacodynamic (PD) model or numeric PD parameters (e.g., Emax, EC50) for the drug in question. |
| popPK | Xiang_2021 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for bemarituzumab, not sodium_perborate. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
