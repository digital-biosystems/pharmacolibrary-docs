<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01B&quot;,&quot;href&quot;:&quot;atc/C01B.md&quot;},{&quot;label&quot;:&quot;prajmaline&quot;}]"></div>

# prajmaline

- **generic name:** prajmaline
- **ATC codes:** `C01BA08`
- **DrugBank:** [DB13555](https://go.drugbank.com/drugs/DB13555) · **PubChem:** not captured
- **molar mass:** 369.528 g/mol (C23H33N2O2) — DrugBank
- **groups:** experimental

## About

Prajmaline is a class Ia antiarrhythmic drug used to treat abnormal heart rhythms. It is not an approved medicine and has only been given experimentally, so its current use is unclear.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7238143](https://www.wikidata.org/wiki/Q7238143) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from the LLM popPK screen).">pig</span> | [Honerjäger_1986_Fc](drugs/drug_prajmaline/pd_Honerj_ger_1986_Fc.md) | peak force of contraction ← prajmalium bitartrate · direct sigmoid Emax (Hill) effect | — | Honerjäger P et al., Negative inotropic effects of tetrodoto…, Naunyn-Schmiedeberg's archi… (1986) | [10.1007/BF00511411](https://doi.org/10.1007/BF00511411) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-08 20:19 | 2:16 | 0/0/0 | 1/0/0 | 0/0/0 | 47,752/3,638 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/0 | 0/1 | 0 |

## Coverage

- **PubMed hits:** 8 matched, 9 returned
- **screened:** 2  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Trompler_1983.pdf` | Trompler AT et al., [Pharmacokinetics and Antiarrhythmic ef…, Arzneimittel-Forschung (1983) | popPK | 10 | not captured | [6683519](https://pubmed.ncbi.nlm.nih.gov/6683519) | The text explicitly reports quantitative pharmacokinetic parameters for prajmaline, including half-life (7.3 h), total clearance (344 ml/min), and distribution volume (204 l). |
| `Breuel_1991.pdf` | Breuel HP et al., Pharmacokinetics and relative bioavaila…, Arzneimittel-Forschung (1991) | popPK | 8 | not captured | [1815520](https://pubmed.ncbi.nlm.nih.gov/1815520) | The study reports pharmacokinetic parameters for prajmaline in humans, but the specific numeric values for clearance, volume, or half-life are not present in the provided evidence, only qualitative descriptions and relative bioavailability. |

<sub>queue written 2026-10-08T20:18:45.097769+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alvarez_1992 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of electrophysiological effects in rabbit cardiomyocytes and does not report pharmacokinetic parameters. |
| PGx | Berecz_1997 | not_relevant | 5 | 2 | The paper discusses a pharmacogenetic explanation for an interaction but does not report specific quantitative PK/PD parameter changes linked to a genotype in the provided text. |
| popPK | Breuel_1991 | relevant | 8 | 2 | The study reports pharmacokinetic parameters for prajmaline in humans, but the specific numeric values for clearance, volume, or half-life are not present in the provided evidence, only qualitative descriptions and relative bioavailability. |
| popPK | Brogden_1987 | irrelevant | 0 | 0 | The paper is a review of disopyramide, and prajmaline is only mentioned as a comparator without any pharmacokinetic data provided. |
| PD | Brogden_1987 | not_relevant | 1 | 0 | The text is a qualitative review of disopyramide that mentions prajmaline only in the context of comparative efficacy, without providing any numeric PD parameters or exposure-response data. |
| popPK | Hinse_2000 | irrelevant | 0 | 0 | The paper focuses on the chemical structure and tautomeric equilibrium of prajmaline using HPLC and spectroscopy, without reporting any quantitative pharmacokinetic parameters. |
| popPK | Honerjäger_1986 | irrelevant | 0 | 0 | no_text gate: only 120 chars of text extracted (&lt; 400) |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
