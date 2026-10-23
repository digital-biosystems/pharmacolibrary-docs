<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J06B&quot;,&quot;href&quot;:&quot;atc/J06B.md&quot;},{&quot;label&quot;:&quot;nebacumab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Nebacumab_Romano1993_reference&quot;,&quot;label&quot;:&quot;Romano_1993_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nebacumab/Nebacumab_Romano1993_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# nebacumab

- **generic name:** nebacumab
- **ATC codes:** `J06BC01`
- **DrugBank:** [DB13535](https://go.drugbank.com/drugs/DB13535) · **PubChem:** not captured
- **groups:** experimental

## About

Nebacumab is an antibacterial monoclonal antibody, an immune globulin-type medicine intended to fight bacterial infections. It remains experimental and has not reached routine clinical use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q6984546](https://www.wikidata.org/wiki/Q6984546) and the WHO ATC classification; not checked by a person.</small>

## Start here

> **Romano_1993_reference** — <span class="pk-badge pk-badge--green">Reproduces paper</span> pediatric patients with sepsis syndrome or septic shock, n = .. [Run it in the simulator](drugs/drug_nebacumab/Nebacumab_Romano1993_reference.md?tab=Simulation) · [record](drugs/drug_nebacumab/Nebacumab_Romano1993_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | 6.1 | L/h | 6.1 L/h | pediatric patients with sepsis syndrome or septic shock | . | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Romano_1993_reference](drugs/drug_nebacumab/Nebacumab_Romano1993_reference.md) |
| t½ | t1/2z | 14.5 | h | 14.5 hours | pediatric patients with sepsis syndrome or septic shock | . | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Romano_1993_reference](drugs/drug_nebacumab/Nebacumab_Romano1993_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Reproduces paper" data-sim="yes"></span><span class="pk-badge pk-badge--green">Reproduces paper</span> | [Romano_1993_reference](drugs/drug_nebacumab/Nebacumab_Romano1993_reference.md) | ▶ model + simulator | 1-compartment, IV | 4 | Romano MJ et al., Single-dose pharmacokinetics and safety…, The Journal of pediatrics (1993) | [10.1016/s0022-3476(09)90031-2](https://doi.org/10.1016/s0022-3476(09)90031-2) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 14:39 | 0:36 | 1/0/0 | 0/0/0 | 0/0/0 | 10,998/949 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Romano_1993.pdf` | Romano MJ et al., Single-dose pharmacokinetics and safety…, The Journal of pediatrics (1993) | popPK | 10 | [10.1016/s0022-3476(09)90031-2](https://doi.org/10.1016/s0022-3476(09)90031-2) | [8501580](https://pubmed.ncbi.nlm.nih.gov/8501580) | The abstract explicitly reports quantitative one- and two-compartment PK parameters (clearance, volume of distribution, half-life) for nebacumab (HA-1A). |

<sub>queue written 2026-10-07T14:39:22.552367+00:00</sub>


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 14:39 UTC</sub>
