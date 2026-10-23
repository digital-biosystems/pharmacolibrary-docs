<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N04;&quot;,&quot;href&quot;:&quot;atc/N04;.md&quot;},{&quot;label&quot;:&quot;opicapone&quot;}]"></div>

# opicapone

- **generic name:** opicapone
- **ATC codes:** `N04;N04BX04`, `N04BX04`
- **DrugBank:** [DB11632](https://go.drugbank.com/drugs/DB11632) · **PubChem:** not captured
- **molar mass:** 413.17 g/mol (C15H10Cl2N4O6) — DrugBank
- **groups:** approved, investigational

## About

Opicapone is a drug used to treat Parkinson's disease. It is authorised in the European Union as an anti-Parkinson medicine.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27088208](https://www.wikidata.org/wiki/Q27088208) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=opicapone).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | liver | `SLCO2B1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate, `ABCG2` substrate, `SLCO2B1` substrate | DrugBank actor |
| distribution | blood-brain barrier | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| distribution | mammary gland | `ABCG2` substrate | DrugBank actor |
| distribution | placenta | `ABCB1` substrate | DrugBank actor |
| distribution | testis | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| metabolism | brain | `COMT` inhibitor | DrugBank actor |
| metabolism | kidney | `COMT` inhibitor | DrugBank actor |
| metabolism | liver | `COMT` inhibitor, `CYP1A2` inhibitor, `CYP2B6` inhibitor, `CYP2C19` inducer, `CYP2C8` inhibitor, `CYP2C9` inhibitor, `SLCO1B1` inhibitor, `SLCO1B3` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `ABCB1` substrate | DrugBank actor |
| excretion | liver | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| excretion | lung | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 07:12 | 0:18 | 0/0/0 | 0/0/0 | 0/0/0 | 24,778/662 | einfracz / qwen3.8-27b | 1 | 1/0 | 0/1 | 0 |

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Rocha_2013.pdf` | Rocha JF et al., Opicapone: a short lived and very long…, British journal of clinical… (2013) | popPK | 6 | [10.1111/bcp.12081](https://doi.org/10.1111/bcp.12081) | [23336248](https://pubmed.ncbi.nlm.nih.gov/23336248) | The study reports only a summary range for terminal half-life (1.0-1.4 h) and lacks specific quantitative clearance, volume, or compartmental model parameters required for extraction. |
| `Rocha_2014_2.pdf` | Rocha JF et al., Effect of moderate liver impairment on…, European journal of clinica… (2014) | popPK | 5 | [10.1007/s00228-013-1602-9](https://doi.org/10.1007/s00228-013-1602-9) | [24271646](https://pubmed.ncbi.nlm.nih.gov/24271646) | Study reports PK parameters (CL/F, AUC) for opicapone in humans, but only provides ratios and percentages rather than absolute values for clearance or volume. |

<sub>queue written 2026-10-07T07:12:28.672557+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ferreira_2015 | irrelevant | 0 | 0 | This study focuses on the pharmacokinetics of levodopa (the subject drug) in the presence of opicapone (a drug interaction/comparator), rather than modeling opicapone's own disposition parameters. |
| popPK | Kitajima_2018 | irrelevant | 3 | 0 | The study reports only qualitative pharmacokinetic findings (rapid absorption/elimination, no accumulation) without providing specific quantitative parameter values like CL, V, or half-life in the provided evidence. |
| popPK | Rocha_2013 | irrelevant | 6 | 2 | The study reports only a summary range for terminal half-life (1.0-1.4 h) and lacks specific quantitative clearance, volume, or compartmental model parameters required for extraction. |
| popPK | Rocha_2014 | irrelevant | 0 | 0 | The provided text contains only adverse event data from a clinical trial and lacks any pharmacokinetic parameters. |
| popPK | Rocha_2014_2 | relevant | 5 | 3 | Study reports PK parameters (CL/F, AUC) for opicapone in humans, but only provides ratios and percentages rather than absolute values for clearance or volume. |
| popPK | Rocha_2016 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of levodopa and the metabolic inhibitor 3-OMD, with opicapone acting as a co-administered mechanism probe; no population PK parameters (CL, V, ka) for opicapone itself are reported. |
| popPK | Rocha_2017 | irrelevant | 2 | 0 | The study reports pharmacokinetic parameters exclusively for the subject drug levodopa (and catechol-O-methyltransferase activity), not for opicapone itself. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
