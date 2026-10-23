<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C02C&quot;,&quot;href&quot;:&quot;atc/C02C.md&quot;},{&quot;label&quot;:&quot;betanidine&quot;}]"></div>

# betanidine

- **generic name:** betanidine
- **ATC codes:** `C02CC01`
- **DrugBank:** [DB00217](https://go.drugbank.com/drugs/DB00217) · **PubChem:** not captured
- **groups:** approved

## About

Bethanidine is a peripherally acting antiadrenergic (sympatholytic) drug that has been used to treat arterial hypertension. It is an approved guanidine-derivative antihypertensive, though this older medicine is now only rarely used in practice.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q794152](https://www.wikidata.org/wiki/Q794152) and the WHO ATC classification; not checked by a person.</small>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Corder_1979_reference](drugs/drug_betanidine/Betanidine_Corder1979_reference.md) | — | 1-compartment (no model) | 0 | Corder CN, Bethanidine elimination from plasma, Journal of clinical pharmac… (1979) | [10.1002/j.1552-4604.1979.tb02504.x](https://doi.org/10.1002/j.1552-4604.1979.tb02504.x) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 13:22 | 0:52 | 0/1/0 | 0/0/0 | 0/0/0 | 7,701/1,647 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 5/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 1
- **scholar-agent fallback query used:** True

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Corder_1979.pdf` | Corder CN, Bethanidine elimination from plasma, Journal of clinical pharmac… (1979) | popPK | 10 | [10.1002/j.1552-4604.1979.tb02504.x](https://doi.org/10.1002/j.1552-4604.1979.tb02504.x) | [489762](https://pubmed.ncbi.nlm.nih.gov/489762) | The paper reports quantitative pharmacokinetic parameters (half-life, volume of distribution) for bethanidine in humans. |
| `Shen_1975.pdf` | Shen D et al., Pharmacokinetics of bethanidine in hype…, Clinical pharmacology and t… (1975) | popPK | 9 | [10.1002/cpt1975173363](https://doi.org/10.1002/cpt1975173363) | [1120401](https://pubmed.ncbi.nlm.nih.gov/1120401) | The study reports quantitative pharmacokinetic parameters (half-life, renal clearance, excretion percentages) for bethanidine in humans, though specific volume of distribution values are not explicitly listed. |
| `Chremos_1976.pdf` | Chremos AN et al., Time-dependent change in renal clearanc…, Journal of pharmaceutical s… (1976) | popPK | 8 | [10.1002/jps.2600650136](https://doi.org/10.1002/jps.2600650136) | [1255421](https://pubmed.ncbi.nlm.nih.gov/1255421) | The study reports pharmacokinetic modeling and renal clearance dynamics for bethanidine in humans, but no specific numeric parameter values (CL, V, t1/2) are present in the provided evidence. |

<sub>queue written 2026-10-06T13:21:31.714271+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Briant_1974 | irrelevant | 0 | 0 | The study focuses on a tricyclic antidepressant (Ciba 34276-Ba) and uses bethanidine (likely a typo for betanidine) only as a co-administered drug to assess blood pressure control, without reporting any pharmacokinetic parameters for betanidine. |
| popPK | Chremos_1976 | relevant | 8 | 0 | The study reports pharmacokinetic modeling and renal clearance dynamics for bethanidine in humans, but no specific numeric parameter values (CL, V, t1/2) are present in the provided evidence. |
| popPK | Dring_1977 | irrelevant | 0 | 0 | no_text gate: only 98 chars of text extracted (&lt; 400) |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-06 13:21 UTC</sub>
