<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M09A&quot;,&quot;href&quot;:&quot;atc/M09A.md&quot;},{&quot;label&quot;:&quot;hydroquinine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Hydroquinine_van2000_reference&quot;,&quot;label&quot;:&quot;van_2000_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_hydroquinine/Hydroquinine_van2000_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# hydroquinine

- **generic name:** hydroquinine
- **ATC codes:** `M09AA01`
- **DrugBank:** [DB13718](https://go.drugbank.com/drugs/DB13718) · **PubChem:** not captured
- **molar mass:** 326.44 g/mol (C20H26N2O2) — DrugBank
- **groups:** experimental

## About

Hydroquinine, a quinine derivative, is classified among drugs for disorders of the musculo-skeletal system. It is not an established marketed medicine; it is listed only as an experimental compound, so its current clinical use is unclear.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5276450](https://www.wikidata.org/wiki/Q5276450) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| hydroquinine | parent | 326.44 | C20H26N2O2 | DrugBank | — | van_2000 |

## Start here

> **van_2000_reference** — <span class="pk-badge pk-badge--green">Reproduces paper</span> adult patients with muscle cramps, n = 16. [Run it in the simulator](drugs/drug_hydroquinine/Hydroquinine_van2000_reference.md?tab=Simulation) · [record](drugs/drug_hydroquinine/Hydroquinine_van2000_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | 6.7 | L/h | 6.7 l/h | adult patients with muscle cramps | 16 | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [van_2000_reference](drugs/drug_hydroquinine/Hydroquinine_van2000_reference.md) |
| V | V | 86.8 ‡ | L | 1.24 l/kg | adult patients with muscle cramps | 16 | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [van_2000_reference](drugs/drug_hydroquinine/Hydroquinine_van2000_reference.md) |
| t½ | t1/2z | 10.9 | h | 10.9 h | adult patients with muscle cramps | 16 | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [van_2000_reference](drugs/drug_hydroquinine/Hydroquinine_van2000_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. ‡ given per kg in the paper; shown for a 70 kg adult. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Reproduces paper" data-sim="yes"></span><span class="pk-badge pk-badge--green">Reproduces paper</span> | [van_2000_reference](drugs/drug_hydroquinine/Hydroquinine_van2000_reference.md) | ▶ model + simulator | 1-compartment, IV | 3 | van Kan HJ et al., Hydroquinine pharmacokinetics after ora…, European journal of clinica… (2000) | [10.1007/s002280000128](https://doi.org/10.1007/s002280000128) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 03:36 | 0:50 | 1/0/0 | 0/0/0 | 0/0/0 | 11,991/728 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `van_2000.pdf` | van Kan HJ et al., Hydroquinine pharmacokinetics after ora…, European journal of clinica… (2000) | popPK | 10 | [10.1007/s002280000128](https://doi.org/10.1007/s002280000128) | [10952483](https://pubmed.ncbi.nlm.nih.gov/10952483) | The study reports quantitative pharmacokinetic parameters (CL, V, t1/2, Cmax, Tmax) for hydroquinine in humans, with all numeric values present in the abstract. |

<sub>queue written 2026-10-07T03:36:28.758335+00:00</sub>


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 03:36 UTC</sub>
