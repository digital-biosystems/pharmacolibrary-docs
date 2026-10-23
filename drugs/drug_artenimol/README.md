<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;artenimol&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Artenimol_Ding2024_reference&quot;,&quot;label&quot;:&quot;Ding_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_artenimol/Artenimol_Ding2024_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# artenimol

- **generic name:** artenimol
- **ATC codes:** `P01BE05`, `P01BF05`
- **DrugBank:** [DB11638](https://go.drugbank.com/drugs/DB11638) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Artenimol (dihydroartemisinin) is an antimalarial medicine used to treat malaria. It is used both alone and in combination with other antimalarials, and is approved in some regions while still being studied for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5276420](https://www.wikidata.org/wiki/Q5276420) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| artenimol (dihydroartemisinin) | parent | 284.352 | C15H24O5 | PubChem | [3000518](https://pubchem.ncbi.nlm.nih.gov/compound/3000518) | Chotsiri_2017, Kang_2024 |
| artesunate | metabolite | 384.425 | C19H28O8 | PubChem | [6917864](https://pubchem.ncbi.nlm.nih.gov/compound/6917864) | Kang_2024 |
| dihydroartemisinin (artenimol) | metabolite | 284.352 | C15H24O5 | PubChem | [107770](https://pubchem.ncbi.nlm.nih.gov/compound/107770) | Chotsiri_2017 |

## Start here

> **Ding_2024_reference** — <span class="pk-badge pk-badge--green">Reproduces paper</span> review reference. [Run it in the simulator](drugs/drug_artenimol/Artenimol_Ding2024_reference.md?tab=Simulation) · [record](drugs/drug_artenimol/Artenimol_Ding2024_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | species | status | record |
|---|---|---|---|---|---|---|---|---|
| CL | CL | 55.4 | L/h | 55.4 L/h | review reference | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Ding_2024_reference](drugs/drug_artenimol/Artenimol_Ding2024_reference.md) |
| V | V | 11.2 ‡ | L | 0.16 L/kg | hamsters, rats, and dogs (preclinical allometric scaling to humans) | rat | <span class="pk-badge pk-badge--orange">Needs review</span> | [Kang_2024_reference](drugs/drug_artenimol/Artenimol_Kang2024_reference.md) |
| V | V | 2166 | L | 2165.9758 L | review reference | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Ding_2024_reference](drugs/drug_artenimol/Artenimol_Ding2024_reference.md) |
| ka | kabs | — | 1/h | 35.19 artesunate | hamsters, rats, and dogs (preclinical allometric scaling to humans) | rat | <span class="pk-badge pk-badge--orange">Needs review</span> | [Kang_2024_reference](drugs/drug_artenimol/Artenimol_Kang2024_reference.md) |
| F | Fab | 1.947 |  | 194.67 dihydroartemisinin | hamsters, rats, and dogs (preclinical allometric scaling to humans) | rat | <span class="pk-badge pk-badge--orange">Needs review</span> | [Kang_2024_reference](drugs/drug_artenimol/Artenimol_Kang2024_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. ‡ given per kg in the paper; shown for a 70 kg adult. — the reported unit did not convert; the value is listed as reported. Rejected records are left out.</sub>

<div class="pk-forest-row"><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="80" viewBox="0 0 560 80" role="img" aria-label="V across studies"><text x="190" y="14" font-size="12" font-weight="600">V (L, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="58" stroke="#ddd"/><text x="190.0" y="72" font-size="10" text-anchor="middle">10</text><line x1="306.7" y1="18" x2="306.7" y2="58" stroke="#ddd"/><text x="306.7" y="72" font-size="10" text-anchor="middle">100</text><line x1="423.3" y1="18" x2="423.3" y2="58" stroke="#ddd"/><text x="423.3" y="72" font-size="10" text-anchor="middle">1000</text><line x1="540.0" y1="18" x2="540.0" y2="58" stroke="#ddd"/><text x="540.0" y="72" font-size="10" text-anchor="middle">10000</text><text x="184" y="34.0" font-size="11" text-anchor="end">Kang_2024 · V ·/kg</text><circle cx="195.7" cy="30.0" r="4" fill="#ef6c00"><title>Kang_2024 · V ·/kg: 11.2 L</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Ding_2024 · V</text><circle cx="462.5" cy="46.0" r="4" fill="#2e7d32"><title>Ding_2024 · V: 2166 L</title></circle></svg></div>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Reproduces paper" data-sim="yes"></span><span class="pk-badge pk-badge--green">Reproduces paper</span> | [Ding_2024_reference](drugs/drug_artenimol/Artenimol_Ding2024_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Ding J et al., Population pharmacokinetics of amodiaqu…, CPT: pharmacometrics & syst… (2024) | [10.1002/psp4.13211](https://doi.org/10.1002/psp4.13211) |
| <span class="pk-rf" hidden data-species="rat" data-age="unknown" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q49 — no SI value to build from</sub> | [Kang_2024_reference](drugs/drug_artenimol/Artenimol_Kang2024_reference.md) | — | parent + metabolite (no model) | 10 | Kang DW et al., Inter-Species Pharmacokinetic Modeling…, International journal of mo… (2024) | [10.3390/ijms25136998](https://doi.org/10.3390/ijms25136998) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Chotsiri_2017_reference](drugs/drug_artenimol/Artenimol_Chotsiri2017_reference.md) | — | 1-compartment (no model) | 0 | Chotsiri P et al., Population pharmacokinetics and electro…, British journal of clinical… (2017) | [10.1111/bcp.13372](https://doi.org/10.1111/bcp.13372) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 06:37 | 2:32 | 1/1/1 | 0/0/0 | 0/0/0 | 84,679/12,372 | ollama / glm-5.3-flash | 8 | 0/4 | 8/0 | 0 |

## Coverage

- **PubMed hits:** 263 matched, 15 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 3  ·  extracted 1  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ding_2024 | irrelevant | 0 | 0 | The population PK models and parameters (CL/F, V/F, Q/F, ka) are for amodiaquine/desethylamodiaquine and piperaquine; dihydroartemisinin (artenimol) is only the co-administered artemisinin component and is not modeled. |
| popPK | Hoglund_2017 | irrelevant | 1 | 0 | This is a population-PK study of piperaquine; dihydroartemisinin (artenimol) is only the co-administered partner drug and no artenimol disposition parameters are reported. |
| popPK | Vanachayangkul_2017 | irrelevant | 0 | 0 | This is a population PK model of piperaquine, not artenimol; artenimol (dihydroartemisinin) is only part of the co-formulated therapy and no artenimol parameters are reported. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 06:35 UTC</sub>
