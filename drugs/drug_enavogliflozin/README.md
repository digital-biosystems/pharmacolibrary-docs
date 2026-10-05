<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;enavogliflozin&quot;}]"></div>

# enavogliflozin

- **generic name:** enavogliflozin
- **ATC codes:** `A10BK09`
- **DrugBank:** [DB18970](https://go.drugbank.com/drugs/DB18970) · **PubChem:** not captured
- **molar mass:** 446.92 g/mol (C24H27ClO6) — DrugBank
- **groups:** investigational

## About

Enavogliflozin is an SGLT2 inhibitor, a class of blood glucose lowering drugs, investigated for treating diabetes. It remains investigational and is not an approved medicine in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q123598885](https://www.wikidata.org/wiki/Q123598885) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 23:46 | 0:59 | 0/0/0 | 0/0/0 | 0/0/0 | 17,069/1,304 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 9 matched, 11 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Jang_2024.pdf` | Jang M et al., Ocular and Plasma Pharmacokinetics of E…, Pharmaceuticals (Basel, Swi… (2024) | popPK | 9 | [10.3390/ph17010111](https://doi.org/10.3390/ph17010111) | [38256944](https://pubmed.ncbi.nlm.nih.gov/38256944) | The study reports quantitative PK parameters (half-life, Tmax, bioavailability) for enavogliflozin in preclinical species, though specific clearance and volume values are not explicitly listed in the provided text. |
| `Kang_2025.pdf` | Kang DW et al., Physiologically-based pharmacokinetic m…, Biomedicine & pharmacothera… (2025) | popPK | 9 | [10.1016/j.biopha.2025.118722](https://doi.org/10.1016/j.biopha.2025.118722) | [41172957](https://pubmed.ncbi.nlm.nih.gov/41172957) | The study reports a PBPK model for enavogliflozin with specific half-life and Tmax values for rat tissues, but lacks explicit clearance (CL) or volume (V) parameters. |
| `Pang_2022.pdf` | Pang M et al., Pharmacokinetics and Tissue Distributio…, Pharmaceutics (2022) | popPK | 9 | [10.3390/pharmaceutics14061210](https://doi.org/10.3390/pharmaceutics14061210) | [35745783](https://pubmed.ncbi.nlm.nih.gov/35745783) | The study reports quantitative PK parameters (bioavailability, AUC ratios, half-life) for enavogliflozin in mice and rats, though specific clearance and volume values are not explicitly listed in the provided text. |
| `Choi_2025.pdf` | Choi YS et al., Pharmacokinetics and Safety of Fixed-Do…, Clinical and translational… (2025) | popPK | 8 | [10.1111/cts.70376](https://doi.org/10.1111/cts.70376) | [41084226](https://pubmed.ncbi.nlm.nih.gov/41084226) | The study reports quantitative PK parameters (Tmax, t1/2) for enavogliflozin in humans, but lacks clearance (CL) and volume (V) values which are typically required for full population PK characterization. |
| `Jeong_2024.pdf` | Jeong SI et al., The effect of renal function on the pha…, Diabetes, obesity & metabol… (2024) | popPK | 8 | [10.1111/dom.15573](https://doi.org/10.1111/dom.15573) | [38618974](https://pubmed.ncbi.nlm.nih.gov/38618974) | The study reports PK parameters (AUC, Cmax) for enavogliflozin in humans, but specific numeric values are not present in the provided text, only qualitative trends and correlations. |
| `Kim_2023.pdf` | Kim MS et al., Physiologically Based Pharmacokinetic M…, Pharmaceutics (2023) | popPK | 8 | [10.3390/pharmaceutics15030942](https://doi.org/10.3390/pharmaceutics15030942) | [36986803](https://pubmed.ncbi.nlm.nih.gov/36986803) | The paper describes a PBPK model for enavogliflozin, but the specific quantitative parameter values (CL, V, etc.) are not present in the provided abstract text. |

<sub>queue written 2026-10-04T23:46:10.985263+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Jang_2024 | not_relevant | 3 | 2 | The paper reports PK parameters and mentions that retinal concentrations remained above the IC50, but it does not provide the numeric value of the IC50 or any concentration-effect curve/relationship for enavogliflozin. |
| popPK | Jeong_2024 | relevant | 8 | 2 | The study reports PK parameters (AUC, Cmax) for enavogliflozin in humans, but specific numeric values are not present in the provided text, only qualitative trends and correlations. |
| PD | Jeong_2024 | not_relevant | 3 | 2 | The paper reports correlations between renal function (CrCL) and PD endpoints (UGE) but does not provide a concentration-effect or dose-response model with numeric PD parameters (e.g., Emax, EC50) for enavogliflozin. |
| popPK | Kang_2025 | relevant | 9 | 4 | The study reports a PBPK model for enavogliflozin with specific half-life and Tmax values for rat tissues, but lacks explicit clearance (CL) or volume (V) parameters. |
| popPK | Kim_2023 | relevant | 8 | 2 | The paper describes a PBPK model for enavogliflozin, but the specific quantitative parameter values (CL, V, etc.) are not present in the provided abstract text. |
| popPK | Kim_2026 | irrelevant | 2 | 0 | The study is a bioequivalence comparison reporting only geometric mean ratios (GMRs) and confidence intervals, without providing absolute quantitative disposition parameters (CL, V, t1/2) or a compartmental model for enavogliflozin. |
| popPK | Lee_2026 | irrelevant | 2 | 0 | The study reports bioequivalence ratios (GMR) for Cmax and AUC but does not provide absolute quantitative disposition parameters (CL, V, ka, t1/2) or a compartmental model. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
