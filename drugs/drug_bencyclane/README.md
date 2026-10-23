<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C04A&quot;,&quot;href&quot;:&quot;atc/C04A.md&quot;},{&quot;label&quot;:&quot;bencyclane&quot;}]"></div>

# bencyclane

- **generic name:** bencyclane
- **ATC codes:** `C04AX11`
- **DrugBank:** [DB13488](https://go.drugbank.com/drugs/DB13488) · **PubChem:** not captured
- **molar mass:** 289.463 g/mol (C19H31NO) — DrugBank
- **groups:** experimental

## About

Bencyclane is a vasodilator and calcium channel blocker classified as a peripheral vasodilator, used for problems with blood flow in the limbs. It appears to be only experimental today and is not authorised in the European Union, so its current use is unclear.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q723117](https://www.wikidata.org/wiki/Q723117) and the WHO ATC classification; not checked by a person.</small>

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
| 2026-10-06 19:51 | 0:17 | 0/0/0 | 0/0/0 | 0/0/0 | 6,537/378 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Eckard_1985.pdf` | Eckard R et al., Pharmacokinetics of bencyclane after si…, Arzneimittel-Forschung (1985) | popPK | 10 | not captured | [4074419](https://pubmed.ncbi.nlm.nih.gov/4074419) | The abstract explicitly reports quantitative PK parameters including volume of distribution (~600 L), total clearance (~44 L/h), and elimination half-life (~12 h) for bencyclane in humans. |
| `Bock_1976.pdf` | Bock PR, A contribution to the pharmacokinetics…, International journal of cl… (1976) | popPK | 8 | not captured | [965131](https://pubmed.ncbi.nlm.nih.gov/965131) | The paper reports quantitative PK parameters for bencyclane in humans, including elimination half-life (360-480 min), Cmax, and protein binding, though specific clearance or volume values are not explicitly listed. |

<sub>queue written 2026-10-06T19:50:59.329296+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Auer_1980 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effect (vasodilation) of bencyclane in cats and does not report any pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Debröczi_1970 | irrelevant | 0 | 0 | no_text gate: only 127 chars of text extracted (&lt; 400) |
| popPK | Herrschaft_1975 | irrelevant | 0 | 0 | The study investigates the hemodynamic effect of bencyclane on cerebral blood flow, not its pharmacokinetic disposition parameters. |
| popPK | Kawamura_1985 | irrelevant | 0 | 0 | The study investigates the pharmacodynamics of cilostazol, and bencyclane is only mentioned as a comparator drug without any pharmacokinetic parameters reported. |
| popPK | Magdalan_2007 | irrelevant | 1 | 0 | This is a clinical case report of intoxication that mentions a qualitative property (large volume of distribution) but provides no quantitative pharmacokinetic parameters or model. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
