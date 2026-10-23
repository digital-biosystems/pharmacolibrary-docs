<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01B&quot;,&quot;href&quot;:&quot;atc/C01B.md&quot;},{&quot;label&quot;:&quot;ethacizine&quot;}]"></div>

# ethacizine

- **generic name:** ethacizine
- **ATC codes:** `C01BC09`
- **DrugBank:** [DB13645](https://go.drugbank.com/drugs/DB13645) · **PubChem:** not captured
- **molar mass:** 413.54 g/mol (C22H27N3O3S) — DrugBank
- **groups:** experimental

## About

Ethacizine is an antiarrhythmic agent of the class Ic type, developed for the treatment of heart arrhythmia. It appears to remain experimental and is not an approved medicine in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q15408408](https://www.wikidata.org/wiki/Q15408408) and the WHO ATC classification; not checked by a person.</small>

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
| 2026-10-08 17:56 | 0:32 | 0/0/0 | 0/0/0 | 0/0/0 | 1,306/114 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Beloborodov_1986.pdf` | Beloborodov VL et al., [Clinical pharmacokinetics and hemodyna…, Farmakologiia i toksikologi… (1986) | popPK | 9 | not captured | [3770172](https://pubmed.ncbi.nlm.nih.gov/3770172) | The paper describes a population PK study of ethacizine in humans using a three-compartment model, but the specific numeric parameter values are not present in the provided evidence. |
| `Ratner_1992.pdf` | Ratner EI et al., Effect of moracizine and ethacizine on…, Arzneimittel-Forschung (1992) | pd | 4 | not captured | [1326968](https://www.ncbi.nlm.nih.gov/pubmed/1326968) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-08T17:56:22.056556+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Beloborodov_1986 | relevant | 9 | 0 | The paper describes a population PK study of ethacizine in humans using a three-compartment model, but the specific numeric parameter values are not present in the provided evidence. |
| popPK | Kedrov_1988 | irrelevant | 0 | 0 | The study focuses on pharmacodynamics (anti-arrhythmic effects) in rabbits and does not report any pharmacokinetic parameters for ethacizine. |
| PD | Kedrov_1988 | not_relevant | 1 | 0 | The text provides only a qualitative summary of pharmacodynamic changes in an animal model without reporting any numeric concentration-effect data, dose-response curves, or PD parameters. |
| popPK | Lozinskiĭ_1990 | irrelevant | 1 | 0 | The study focuses on Bonnecor (disopyramide), not ethacizine, and only mentions ethacizine as a comparator without providing its specific quantitative PK parameters. |
| PD | Lozinskiĭ_1990 | not_relevant | 3 | 2 | The text mentions that ranges of effective concentrations are given but does not provide specific numeric PD parameters (like Emax, EC50) or a quantitative concentration-effect curve in the provided abstract. |
| popPK | Ratner_1992 | irrelevant | 0 | 0 | no_text gate: only 116 chars of text extracted (&lt; 400) |
| PD | Ratner_1992 | not_relevant | 0 | 0 | The paper investigates the effect of ethacizine on calcium channel receptors and binding proteins, which is a pharmacological mechanism study, not a pharmacokinetic-pharmacodynamic (PK/PD) exposure-response or dose-response analysis with numeric PD parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
