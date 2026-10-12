<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B06A&quot;,&quot;href&quot;:&quot;atc/B06A.md&quot;},{&quot;label&quot;:&quot;ecallantide&quot;}]"></div>

# ecallantide

- **generic name:** ecallantide
- **ATC codes:** `B06AC03`
- **DrugBank:** [DB05311](https://go.drugbank.com/drugs/DB05311) · **PubChem:** not captured
- **groups:** approved

## About

Ecallantide is a drug used to treat hereditary angioedema. It is an approved medicine, mainly used in the United States, and carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1280166](https://www.wikidata.org/wiki/Q1280166) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 01:45 | 0:42 | 0/0/0 | 0/0/0 | 0/0/0 | 30,325/454 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 0/2 | 2/0 | 0 |

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=ecallantide).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: KLKB1 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 10 matched, 9 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Al-Adimi_2024.pdf` | Al-Adimi G et al., Extension of the circulatory half-life…, Journal of biotechnology (2024) | popPK | 8 | [10.1016/j.jbiotec.2024.06.002](https://doi.org/10.1016/j.jbiotec.2024.06.002) | [38844246](https://pubmed.ncbi.nlm.nih.gov/38844246) | The study reports in vivo PK parameters (AUC, half-life) for ecallantide fusion proteins in mice, with specific fold-change values provided in the text. |

<sub>queue written 2026-10-06T01:44:51.044757+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Al-Adimi_2024 | relevant | 8 | 4 | The study reports in vivo PK parameters (AUC, half-life) for ecallantide fusion proteins in mice, with specific fold-change values provided in the text. |
| popPK | Bernstein_2010 | irrelevant | 2 | 0 | The provided text is a qualitative review summary that mentions pharmacokinetics but contains no quantitative disposition parameters (CL, V, t1/2, etc.) for ecallantide. |
| popPK | Cole_2013 | irrelevant | 0 | 0 | The paper is a review of icatibant, and ecallantide is only mentioned as a cost comparator without any pharmacokinetic data. |
| popPK | Craig_2009 | irrelevant | 0 | 0 | The paper is a review discussing the clinical indication for prophylaxis and mentions ecallantide's short half-life qualitatively, but it does not report quantitative pharmacokinetic parameters or models. |
| popPK | Kafil_2020 | irrelevant | 0 | 0 | The paper is a review of antibody scaffolds for cancer therapy and mentions ecallantide only as an example of a mimetic antibody without providing any pharmacokinetic data. |
| PD | Kafil_2020 | not_relevant | 1 | 0 | The text is a review discussing antibody scaffolds and mentions ecallantide only as an example of a mimetic antibody with improved properties, without providing any specific numeric PD parameters or exposure-response data. |
| popPK | Longhurst_2017 | irrelevant | 0 | 0 | The paper is a clinical consensus review focusing on efficacy and safety outcomes (time to improvement/resolution) rather than reporting quantitative pharmacokinetic parameters (CL, V, t1/2) for ecallantide. |
| PD | Longhurst_2017 | not_relevant | 1 | 0 | The paper is a qualitative expert consensus review that mentions ecallantide's efficacy and safety but does not report any numeric pharmacodynamic parameters, concentration-effect curves, or dose-response data. |
| popPK | Martello_2012 | irrelevant | 2 | 0 | This is a narrative review of ecallantide that discusses pharmacokinetics qualitatively but does not provide specific quantitative disposition parameters (CL, V, t1/2) in the text. |
| popPK | Sabharwal_2015 | irrelevant | 0 | 0 | The paper is a review discussing the mechanism and clinical use of ecallantide as a comparator, without reporting any original quantitative pharmacokinetic parameters. |
| popPK | Sanhajariya_2020 | irrelevant | 0 | 0 | The study is an in silico simulation of snake venom toxins and does not involve the drug ecallantide. |
| PD | Sanhajariya_2020 | not_relevant | 0 | 0 | The paper is an in silico pharmacokinetic (PK) simulation study of snake venom components and does not report any pharmacodynamic (PD) or exposure-response relationships for ecallantide or any other drug. |
| popPK | Stolz_2010 | irrelevant | 0 | 0 | The text is a clinical review of ecallantide's efficacy and safety in HAE and contains no pharmacokinetic parameters or quantitative disposition data. |
| popPK | Sun_2024 | irrelevant | 0 | 0 | The study focuses on a novel factor XIa inhibitor (DX-88mut) and does not report pharmacokinetic parameters for ecallantide. |
| PD | Sun_2024 | not_relevant | 0 | 0 | The paper studies a novel peptide (DX-88mut), not ecallantide, and does not report PD parameters for ecallantide. |
| popPK | unknown_2018 | irrelevant | 0 | 0 | no_text gate: only 112 chars of text extracted (&lt; 400) |
| PD | unknown_2018 | not_relevant | 0 | 0 | The provided text is only a citation header for a conference abstract and contains no data, results, or PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
