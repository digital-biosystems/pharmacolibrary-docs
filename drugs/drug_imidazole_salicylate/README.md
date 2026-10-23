<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02B&quot;,&quot;href&quot;:&quot;atc/N02B.md&quot;},{&quot;label&quot;:&quot;imidazole salicylate&quot;}]"></div>

# imidazole salicylate

- **generic name:** imidazole salicylate
- **ATC codes:** `N02BA16`
- **DrugBank:** [DB13860](https://go.drugbank.com/drugs/DB13860) · **PubChem:** not captured
- **molar mass:** 206.201 g/mol (C10H10N2O3) — DrugBank
- **groups:** experimental

## About

Imidazole salicylate is a salicylic acid derivative classified as a non-steroidal anti-inflammatory drug, used as an analgesic and antipyretic for pain relief. It is listed only as an experimental drug and does not appear to be an approved medicine today.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27259796](https://www.wikidata.org/wiki/Q27259796) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 06:15 | 0:10 | 0/0/0 | 0/0/0 | 0/0/0 | 35,896/465 | einfracz / qwen3.8-27b | 0 | 0/2 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 5 matched, 6 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kuemmerle_1984.pdf` | Kuemmerle HP et al., Pharmacokinetic pilot study with imidaz…, International journal of cl… (1984) | popPK | 8 | not captured | [6334657](https://pubmed.ncbi.nlm.nih.gov/6334657) | The study reports pharmacokinetics of imidazole salicylate in humans, but the specific numeric parameter values are not included in the provided evidence text. |
| `Kuemmerle_1986.pdf` | Kuemmerle HP et al., Pharmacokinetic profile of imidazole 2-…, International journal of cl… (1986) | popPK | 8 | not captured | [3793293](https://pubmed.ncbi.nlm.nih.gov/3793293) | The study reports quantitative PK parameters (half-life, bioavailability, protein binding) for imidazole and salicylic acid, which are the components of the subject drug imidazole salicylate, in humans. |

<sub>queue written 2026-10-07T06:15:33.755790+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Khanppnavar_2022 | irrelevant | 0 | 0 | The paper is a structural biology study on the organic cation transporter 3 (OCT3) and does not report pharmacokinetic parameters for imidazole_salicylate. |
| PD | Khanppnavar_2022 | not_relevant | 0 | 0 | The paper focuses on the structural basis of OCT3 inhibition using cryo-EM and does not report pharmacodynamic parameters for imidazole salicylate. |
| popPK | Kuemmerle_1984 | relevant | 8 | 0 | The study reports pharmacokinetics of imidazole salicylate in humans, but the specific numeric parameter values are not included in the provided evidence text. |
| popPK | Lorenzano_1992 | irrelevant | 0 | 0 | The study focuses on renal function (blood flow, filtration, electrolyte excretion) rather than pharmacokinetic disposition parameters for imidazole salicylate. |
| popPK | McCune_2023 | irrelevant | 0 | 0 | The study investigates busulfan pharmacokinetics and is unrelated to imidazole salicylate. |
| PD | McCune_2023 | not_relevant | 0 | 0 | The paper focuses on predicting busulfan clearance using metabolomics and reports a population PK model for busulfan, but contains no pharmacodynamic (PD) or exposure-response analysis for imidazole salicylate or any other drug. |
| popPK | Salerno_1993 | irrelevant | 0 | 0 | The study evaluates renal function and prostaglandin/thromboxane effects, not quantitative pharmacokinetic parameters (clearance, volume, half-life) for imidazole_salicylate. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
