<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;cefcapene&quot;}]"></div>

# cefcapene

- **generic name:** cefcapene
- **ATC codes:** `J01DD17`
- **DrugBank:** [DB13461](https://go.drugbank.com/drugs/DB13461) · **PubChem:** none
- **molar mass:** 453.49 g/mol (C17H19N5O6S2) — DrugBank
- **groups:** experimental

## About

Cefcapene is a third-generation cephalosporin antibiotic used to treat bacterial infections. It is not an approved medicine and remains at an experimental stage of development.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5057225](https://www.wikidata.org/wiki/Q5057225) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> | [Nakamura_2004_efficacy_rate](drugs/drug_cefcapene/pd_Nakamura_2004_efficacy_rate.md) | efficacy rate ← cefcapene · inhibition effect | — | Nakamura T et al., [Antibacterial activity of oral cephems…, The Japanese journal of ant… (2004) | — |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:18 | 1:35 | 0/0/0 | 0/1/0 | 0/0/0 | 23,852/14,676 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Toyonaga_2008.pdf` | Toyonaga Y et al., [PK/PD breakpoints and clinical/bacteri…, The Japanese journal of ant… (2008) | popPK | 8 |  | [18814800](https://pubmed.ncbi.nlm.nih.gov/18814800) | The study involves PK/PD simulation of cefcapene pivoxil in pediatric humans and reports a PK/PD breakpoint, but specific quantitative disposition parameters (CL, V, ka) are not explicitly listed in the provided text. |
| `Fujimoto_2001.pdf` | Fujimoto M, Pharmacokinetics of cefcapene pivoxil a…, International journal of an… (2001) | popPK | 7 | [10.1016/s0924-8579(01)00446-0](https://doi.org/10.1016/s0924-8579(01)00446-0) | [11711266](https://pubmed.ncbi.nlm.nih.gov/11711266) | The paper studies the pharmacokinetics of cefcapene in gastrectomized patients, but the provided evidence contains only qualitative descriptions and no numeric parameter values. |
| `Nakamura_2004.pdf` | Nakamura T et al., [Antibacterial activity of oral cephems…, The Japanese journal of ant… (2004) | pd | 5 |  | [15747584](https://www.ncbi.nlm.nih.gov/pubmed/15747584) | metadata signals extractable PD data (PK/PD) |

<sub>queue written 2026-10-07 10:17 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Fujimoto_2001 | relevant | 7 | 0 | The paper studies the pharmacokinetics of cefcapene in gastrectomized patients, but the provided evidence contains only qualitative descriptions and no numeric parameter values. |
| PGx | Hotomi_2006 | not_relevant | 0 | 0 | The study focuses on antimicrobial resistance mechanisms in bacteria (PBP mutations), not human pharmacogenomics affecting drug PK/PD. |
| popPK | Nakamura_2004 | irrelevant | 2 | 0 | The study compares antimicrobial activity and PK/PD efficacy rates (TAM) rather than reporting quantitative pharmacokinetic disposition parameters like clearance or volume for cefcapene. |
| popPK | Toyonaga_2008 | relevant | 8 | 3 | The study involves PK/PD simulation of cefcapene pivoxil in pediatric humans and reports a PK/PD breakpoint, but specific quantitative disposition parameters (CL, V, ka) are not explicitly listed in the provided text. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcefcapene%5D&body=Drug%3A%20cefcapene%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_cefcapene/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
