<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M01A&quot;,&quot;href&quot;:&quot;atc/M01A.md&quot;},{&quot;label&quot;:&quot;alminoprofen&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Alminoprofen_Tod1995_reference&quot;,&quot;label&quot;:&quot;Tod_1995_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_alminoprofen/Alminoprofen_Tod1995_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# alminoprofen

- **generic name:** alminoprofen
- **ATC codes:** `M01AE16`
- **DrugBank:** [DB13314](https://go.drugbank.com/drugs/DB13314) · **PubChem:** none
- **molar mass:** 219.284 g/mol (C13H17NO2) — DrugBank
- **groups:** experimental

## About

Alminoprofen is a propionic acid derivative that acts as a non-steroidal anti-inflammatory drug, a class used for pain and inflammatory conditions. It is not an approved medicine in major markets and appears only as an experimental compound, so its current availability is unclear.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3612806](https://www.wikidata.org/wiki/Q3612806) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| alminoprofen | parent | 219.284 | C13H17NO2 | DrugBank | — | Tod_1995 |

## Start here

> **Tod_1995_reference** — <span class="pk-badge pk-badge--orange">Needs review</span> patients with knee effusion, n = &gt;&lt;. [Run it in the simulator](drugs/drug_alminoprofen/Alminoprofen_Tod1995_reference.md?tab=Simulation) · [record](drugs/drug_alminoprofen/Alminoprofen_Tod1995_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | 0.0174 | L/h | 0.29 mL min-1 | patients with knee effusion | &gt;&lt; | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Tod_1995_reference](drugs/drug_alminoprofen/Alminoprofen_Tod1995_reference.md) |
| V | V | 11 | L | 11.0 L | patients with knee effusion | &gt;&lt; | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Tod_1995_reference](drugs/drug_alminoprofen/Alminoprofen_Tod1995_reference.md) |
| ka | kabs | 2.8 | 1/h | 2.8 h-1 | patients with knee effusion | &gt;&lt; | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Tod_1995_reference](drugs/drug_alminoprofen/Alminoprofen_Tod1995_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: unreported model parameter default(s): F</sub> | [Tod_1995_reference](drugs/drug_alminoprofen/Alminoprofen_Tod1995_reference.md) | ▶ model + simulator | 1-compartment, oral | 6 | Tod M et al., A population pharmacokinetic study of a…, Biopharmaceutics & drug dis… (1995) | [10.1002/bdd.2510160803](https://doi.org/10.1002/bdd.2510160803) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Shin_1992_reference](drugs/drug_alminoprofen/Alminoprofen_Shin1992_reference.md) | — | 1-compartment (no model) | 0 | Shin K et al., [Pharmacokinetics of oral alminoprofen…, Nihon Ronen Igakkai zasshi.… (1992) | [10.3143/geriatrics.29.881](https://doi.org/10.3143/geriatrics.29.881) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 00:38 | 0:30 | 1/1/0 | 0/0/0 | 0/0/0 | 43,379/3,920 | einfracz / qwen3.8-27b | 1 | 1/0 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Tod_1995.pdf` | Tod M et al., A population pharmacokinetic study of a…, Biopharmaceutics & drug dis… (1995) | popPK | 10 | [10.1002/bdd.2510160803](https://doi.org/10.1002/bdd.2510160803) | [8573683](https://pubmed.ncbi.nlm.nih.gov/8573683) | The paper reports a population pharmacokinetic study with explicit numeric values for volume of distribution, elimination rate constant, absorption rate constant, and clearances for alminoprofen. |

<sub>queue written 2026-10-07 00:38 UTC</sub>


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Balminoprofen%5D&body=Drug%3A%20alminoprofen%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_alminoprofen/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-07 00:38 UTC</sub>
