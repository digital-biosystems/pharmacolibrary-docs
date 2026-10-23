<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;Betamipron&quot;}]"></div>

# Betamipron

- **generic name:** Betamipron
- **ATC codes:** `J01DH55`
- **DrugBank:** [DB19858](https://go.drugbank.com/drugs/DB19858) · **PubChem:** not captured
- **groups:** experimental

## About

Betamipron is a component of the combination antibiotic panipenem/betamipron, which belongs to the carbapenem class of antibacterial drugs. It is considered experimental and has no authorisation from the European Medicines Agency.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q607051](https://www.wikidata.org/wiki/Q607051) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:21 | 2:50 | 0/0/0 | 0/0/0 | 0/0/0 | 144,777/763 | einfracz / qwen3.8-27b | 5 | 1/4 | 5/0 | 0 |

## Coverage

- **PubMed hits:** 16 matched, 12 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Tajima_2006.pdf` | Tajima N et al., Population pharmacokinetic analysis of…, Chemotherapy (2006) | popPK | 8 | [10.1159/000094745](https://doi.org/10.1159/000094745) | [16864999](https://pubmed.ncbi.nlm.nih.gov/16864999) | The study reports a population PK model for the combination drug panipenem/betamipron in humans, but specific numeric parameter values for betamipron (CL, V, etc.) are not present in the provided text. |
| `Mikamo_2002.pdf` | Mikamo H et al., [Investigation on administration method…, The Japanese journal of ant… (2002) | pd | 5 | not captured | [12621741](https://www.ncbi.nlm.nih.gov/pubmed/12621741) | metadata signals extractable PD data (PK/PD) |

<sub>queue written 2026-10-07T10:20:34.239975+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Behsaz_2026 | irrelevant | 0 | 0 | The paper describes the discovery of a novel natural product (edaphochelin A) using a bioinformatics platform and does not mention betamipron or its pharmacokinetics. |
| popPK | Joun_2025 | irrelevant | 0 | 0 | The paper is a study on glioblastoma persister cells and PRDM9, not a pharmacokinetic study of betamipron. |
| popPK | Kimura_2000 | irrelevant | 1 | 0 | The study is about the pharmacokinetics of the beta-lactam antibiotic panipenem, while batamipron is only mentioned as its co-formulated beta-lactamase inhibitor, and no parameters for batamipron (or betamipron) are provided. |
| popPK | Niki_2009 | irrelevant | 0 | 0 | The paper investigates the antimicrobial susceptibility and PK/PD break points of beta-lactam and carbapenem antibiotics, mentioning betamipron only as a component of a drug combination (panipenem/betamipron) used for resistance, without reporting any pharmacokinetic parameters for betamipron itself. |
| popPK | Rusu_2026 | irrelevant | 0 | 0 | The paper is a review of pyrrolidine-containing antibiotics and only mentions betamipron as a DHP-I inhibitor co-administered with panipenem, without providing any pharmacokinetic parameters for betamipron itself. |
| popPK | Tajima_2005 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of panipenem, and betamipron is only administered as a co-drug to protect renal function without any PK parameters reported for it. |
| popPK | Tajima_2006 | relevant | 8 | 0 | The study reports a population PK model for the combination drug panipenem/betamipron in humans, but specific numeric parameter values for betamipron (CL, V, etc.) are not present in the provided text. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
