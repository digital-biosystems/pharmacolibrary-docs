<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;vestronidase alfa&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;VestronidaseAlfa_Qi2019_reference&quot;,&quot;label&quot;:&quot;Qi_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_vestronidase_alfa/VestronidaseAlfa_Qi2019_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

# vestronidase alfa

- **generic name:** vestronidase alfa
- **ATC codes:** `A16AB18`
- **DrugBank:** [DB12366](https://go.drugbank.com/drugs/DB12366) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Vestronidase alfa is an enzyme replacement therapy used to treat mucopolysaccharidosis VII, also known as Sly syndrome. It is authorised in the European Union and is used mainly for this rare metabolic disorder.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q48970976](https://www.wikidata.org/wiki/Q48970976) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Start here

> **Qi_2019_reference** — <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> adult and pediatric subjects with MPS VII, n = &gt;=23. [Run it in the simulator](drugs/drug_vestronidase_alfa/VestronidaseAlfa_Qi2019_reference.md?tab=Simulation) · [record](drugs/drug_vestronidase_alfa/VestronidaseAlfa_Qi2019_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | 1.99 | L/h | 1.99 L/h | adult and pediatric subjects with MPS VII | &gt;=23 | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> | [Qi_2019_reference](drugs/drug_vestronidase_alfa/VestronidaseAlfa_Qi2019_reference.md) |
| V | V1 | 1.49 | L | 1.49 L | adult and pediatric subjects with MPS VII | &gt;=23 | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> | [Qi_2019_reference](drugs/drug_vestronidase_alfa/VestronidaseAlfa_Qi2019_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Not simulated" data-sim="yes"></span><span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Not simulated</sub> | [Qi_2019_reference](drugs/drug_vestronidase_alfa/VestronidaseAlfa_Qi2019_reference.md) | ▶ model + simulator | 2-compartment, IV | 4 | Qi Y et al., Pharmacokinetic and Pharmacodynamic Mod…, Clinical pharmacokinetics (2019) | [10.1007/s40262-018-0721-y](https://doi.org/10.1007/s40262-018-0721-y) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Qi_2019_uCS](drugs/drug_vestronidase_alfa/pd_Qi_2019_uCS.md) | Urinary chondroitin sulfate ← vestronidase alfa · direct Emax (saturable) effect | model (no simulator) | Qi Y et al., Pharmacokinetic and Pharmacodynamic Mod…, Clinical pharmacokinetics (2019) | [10.1007/s40262-018-0721-y](https://doi.org/10.1007/s40262-018-0721-y) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Qi_2019_uDS](drugs/drug_vestronidase_alfa/pd_Qi_2019_uDS.md) | Urinary dermatan sulfate ← vestronidase alfa · direct Emax (saturable) effect | model (no simulator) | Qi Y et al., Pharmacokinetic and Pharmacodynamic Mod…, Clinical pharmacokinetics (2019) | [10.1007/s40262-018-0721-y](https://doi.org/10.1007/s40262-018-0721-y) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=vestronidase_alfa).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: GUSB (modulator).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 12:18 | 6:48 | 1/0/0 | 1/0/0 | 0/0/0 | 72,846/22,162 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 1/1 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Qi_2019_2 | irrelevant | 0 | 0 | The provided text is a correction notice for a clinical trial identifier and contains no pharmacokinetic data or parameters for vestronidase_alfa. |
| PD | Qi_2019_2 | not_relevant | 0 | 0 | The provided text is only a correction notice and contains no vestronidase alfa PK/PD, dose-response, concentration-effect analysis, or numeric PD parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-05 12:12 UTC</sub>
