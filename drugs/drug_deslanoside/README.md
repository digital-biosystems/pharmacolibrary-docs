<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01A&quot;,&quot;href&quot;:&quot;atc/C01A.md&quot;},{&quot;label&quot;:&quot;deslanoside&quot;}]"></div>

# deslanoside

- **generic name:** deslanoside
- **ATC codes:** `C01AA07`
- **DrugBank:** [DB01078](https://go.drugbank.com/drugs/DB01078) · **PubChem:** [CID 28620](https://pubchem.ncbi.nlm.nih.gov/compound/28620)
- **molar mass:** 943.0791 g/mol (C47H74O19) — DrugBank
- **groups:** approved

## About

Deslanoside is a digitalis glycoside used to treat atrial fibrillation, supraventricular tachycardia, and congestive heart failure. It is an approved medicine, though it appears to be little used today and is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5264583](https://www.wikidata.org/wiki/Q5264583) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=deslanoside).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: ATP1A1 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 01:59 | 0:15 | 0/0/0 | 0/0/0 | 0/0/0 | 7,053/353 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 1/1 | 1/1 | 0 |

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bakke_1981.pdf` | Bakke OM et al., Pharmacokinetics and serum concentratio…, Journal of cardiovascular p… (1981) | popPK | 8 | [10.1097/00005344-198109000-00012](https://doi.org/10.1097/00005344-198109000-00012) | [6168847](https://pubmed.ncbi.nlm.nih.gov/6168847) | The study reports quantitative PK parameters (half-life) and concentration-effect data for deslanoside in humans, but lacks explicit clearance or volume values. |

<sub>queue written 2026-10-06 01:59 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abady_2024 | irrelevant | 0 | 0 | The paper describes a bioanalytical method validation for quantifying deslanoside in dried blood spots and does not report any pharmacokinetic parameters (CL, V, t1/2, etc.). |
| popPK | Gao_2012 | irrelevant | 0 | 0 | The study investigates the effects of ethanol on arrhythmia using deslanoside as an inducing agent, not as the subject of a pharmacokinetic analysis, and reports no PK parameters. |
| PD | Gao_2012 | not_relevant | 3 | 2 | The paper reports qualitative dose-response effects of ethanol on deslanoside-induced arrhythmia (increased cumulative dosage required) but does not provide numeric PD parameters (e.g., EC50, Emax) or a concentration-effect curve for deslanoside itself. |
| popPK | Goldsmith_1992 | irrelevant | 0 | 0 | The study investigates the effect of deslanoside on norepinephrine kinetics, not the pharmacokinetic parameters of deslanoside itself. |
| popPK | Gökçe_2026 | irrelevant | 0 | 0 | The study is an in vitro/in silico investigation of enzyme inhibition (PON1) and does not report any pharmacokinetic parameters for deslanoside. |
| PD | Gökçe_2026 | not_relevant | 0 | 0 | The study reports in vitro enzyme inhibition (IC50) of PON1 by deslanoside, which is a pharmacological mechanism study, not a pharmacodynamic exposure-response or dose-response relationship for the drug's clinical effect. |
| popPK | Huang_2026 | irrelevant | 0 | 0 | The study analyzes factors influencing serum digoxin concentrations and lists deslanoside only as a concomitant medication variable, without reporting any pharmacokinetic parameters for deslanoside. |
| PD | Huang_2026 | not_relevant | 0 | 0 | The study analyzes factors influencing serum digoxin concentration (PK) using logistic regression, not the pharmacodynamic effect of deslanoside or digoxin; no exposure-response or dose-response relationship for a drug effect is reported. |
| popPK | Li_2015 | irrelevant | 0 | 0 | The study focuses on digoxin pharmacokinetics in rats, with deslanoside only mentioned as a compound tested for method optimization, not as the subject of PK analysis. |
| popPK | Marzo_1982 | irrelevant | 0 | 0 | no_text gate: only 78 chars of text extracted (&lt; 400) |
| popPK | Tada_1982 | irrelevant | 0 | 0 | The provided evidence contains only software metadata and no scientific content regarding deslanoside pharmacokinetics. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdeslanoside%5D&body=Drug%3A%20deslanoside%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_deslanoside/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
