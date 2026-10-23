<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D01A&quot;,&quot;href&quot;:&quot;atc/D01A.md&quot;},{&quot;label&quot;:&quot;undecylenic acid&quot;}]"></div>

# undecylenic acid

- **generic name:** undecylenic acid
- **ATC codes:** `D01AE04`
- **DrugBank:** [DB11117](https://go.drugbank.com/drugs/DB11117) · **PubChem:** none
- **molar mass:** 184.2753 g/mol (C11H20O2) — DrugBank
- **groups:** approved

## About

Undecylenic acid is a topical antifungal used to treat fungal skin infections. It is an approved medicine, applied to the skin as a topical treatment.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q420346](https://www.wikidata.org/wiki/Q420346) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=undecylenic_acid).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skin | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: CAPN1 (other/unknown).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 14:02 | 5:39 | 0/0/0 | 0/0/0 | 0/0/0 | 57,108/8,933 | ollama / qwen3.8:27b-mtp-q8_0 | 5 | 0/2 | 5/0 | 0 |

## Coverage

- **PubMed hits:** 16 matched, 16 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Monson_2025.pdf` | Monson EA et al., GS-1 blocks entry of herpes viruses and…, Antiviral research (2025) | pd | 4 | [10.1016/j.antiviral.2025.106136](https://doi.org/10.1016/j.antiviral.2025.106136) | [40043780](https://www.ncbi.nlm.nih.gov/pubmed/40043780) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-07 13:59 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Almeida_2014 | irrelevant | 0 | 0 | The paper describes a nanomaterial synthesis where undecylenic acid is used as a surface modifier for silicon nanoparticles, not as a drug subject to pharmacokinetic analysis. |
| popPK | Altamura_2003 | irrelevant | 0 | 0 | The paper is a review of antipsychotic formulations and does not report pharmacokinetic parameters for undecylenic acid. |
| popPK | Bednarczyk-Cwynar_2026 | irrelevant | 0 | 0 | The paper focuses on the synthesis and in vitro pharmacological evaluation of oleanolic acid derivatives, not the pharmacokinetics of undecylenic acid. |
| popPK | Bilici_2025 | irrelevant | 0 | 0 | The paper describes the physicochemical characterization (particle size, zeta potential) of a plasma-condensed mixture of fluconazole and zinc undecylenate, containing no pharmacokinetic data for undecylenic acid. |
| popPK | Monson_2025 | irrelevant | 0 | 0 | no_text gate: only 79 chars of text extracted (&lt; 400) |
| popPK | Spanarello_2014 | irrelevant | 0 | 0 | The paper is a review of depot antipsychotics and mentions "pipotiazine undecylenate" (a different drug) but does not study undecylenic acid itself. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bundecylenic_acid%5D&body=Drug%3A%20undecylenic_acid%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_undecylenic_acid/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
