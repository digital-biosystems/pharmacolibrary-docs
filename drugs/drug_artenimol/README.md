<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;artenimol&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Artenimol_Ding2024_reference&quot;,&quot;label&quot;:&quot;Ding_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_artenimol/Artenimol_Ding2024_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# artenimol

- **generic name:** artenimol
- **ATC codes:** `P01BE05`, `P01BF05`
- **DrugBank:** [DB11638](https://go.drugbank.com/drugs/DB11638) · **PubChem:** none
- **groups:** approved, investigational

## About

Artenimol is an antimalarial medication used to treat malaria. It is given orally as film-coated or soluble tablets. This compound serves as a common intermediate in manufacturing other antimalarial treatments.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q5276420](https://www.wikidata.org/wiki/Q5276420), [Wikipedia](https://en.wikipedia.org/wiki/Dihydroartemisinin?oldid=1369637980) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| artenimol (dihydroartemisinin) | parent | 284.352 | C15H24O5 | PubChem | [3000518](https://pubchem.ncbi.nlm.nih.gov/compound/3000518) | Chotsiri_2017, Kang_2024 |
| artesunate | metabolite | 384.425 | C19H28O8 | PubChem | [6917864](https://pubchem.ncbi.nlm.nih.gov/compound/6917864) | Kang_2024 |
| dihydroartemisinin (artenimol) | metabolite | 284.352 | C15H24O5 | PubChem | [107770](https://pubchem.ncbi.nlm.nih.gov/compound/107770) | Chotsiri_2017 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="rat" data-age="unknown" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q49 — no SI value to build from</sub> | [Kang_2024_reference](drugs/drug_artenimol/Artenimol_Kang2024_reference.md) | — | parent + metabolite (no model) | 10 | Kang DW et al., Inter-Species Pharmacokinetic Modeling…, International journal of mo… (2024) | [10.3390/ijms25136998](https://doi.org/10.3390/ijms25136998) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Chotsiri_2017_reference](drugs/drug_artenimol/Artenimol_Chotsiri2017_reference.md) | — | 1-compartment (no model) | 0 | Chotsiri P et al., Population pharmacokinetics and electro…, British journal of clinical… (2017) | [10.1111/bcp.13372](https://doi.org/10.1111/bcp.13372) |
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Rejected" data-sim="yes"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: paper_subject_is_other_drug</sub> | [Ding_2024_reference](drugs/drug_artenimol/Artenimol_Ding2024_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Ding J et al., Population pharmacokinetics of amodiaqu…, CPT: pharmacometrics & syst… (2024) | [10.1002/psp4.13211](https://doi.org/10.1002/psp4.13211) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 06:37 | 2:32 | 1/2/0 | 0/0/0 | 0/0/0 | 84,679/12,372 | ollama / glm-5.3-flash | 8 | 0/4 | 8/0 | 0 |

## Coverage

- **PubMed hits:** 263 matched, 15 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 3  ·  extracted 0  ·  needs review 1  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ding_2024 | irrelevant | 0 | 0 | The population PK models and parameters (CL/F, V/F, Q/F, ka) are for amodiaquine/desethylamodiaquine and piperaquine; dihydroartemisinin (artenimol) is only the co-administered artemisinin component and is not modeled. |
| popPK | Hoglund_2017 | irrelevant | 1 | 0 | This is a population-PK study of piperaquine; dihydroartemisinin (artenimol) is only the co-administered partner drug and no artenimol disposition parameters are reported. |
| popPK | Vanachayangkul_2017 | irrelevant | 0 | 0 | This is a population PK model of piperaquine, not artenimol; artenimol (dihydroartemisinin) is only part of the co-formulated therapy and no artenimol parameters are reported. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bartenimol%5D&body=Drug%3A%20artenimol%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_artenimol/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-10-07 06:35 UTC</sub>
