<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C10A&quot;,&quot;href&quot;:&quot;atc/C10A.md&quot;},{&quot;label&quot;:&quot;evinacumab&quot;}]"></div>

# evinacumab

- **generic name:** evinacumab
- **ATC codes:** `C10AX17`
- **DrugBank:** [DB15354](https://go.drugbank.com/drugs/DB15354) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Evinacumab is a monoclonal antibody used as a lipid-modifying agent for hypercholesterolemia and type I hyperlipoproteinemia. It is authorised in the European Union and is also being investigated for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q19904115](https://www.wikidata.org/wiki/Q19904115) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | species | status | record |
|---|---|---|---|---|---|---|---|---|
| CL | CL | 0.003979 | L/h | 0.0955 L/day | patients with homozygous familial hypercholesterolemia | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Dingman_2024_reference](drugs/drug_evinacumab/Evinacumab_Dingman2024_reference.md) |
| V | V | 4.7 | L | 4.7 L | patients with homozygous familial hypercholesterolemia | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Dingman_2024_reference](drugs/drug_evinacumab/Evinacumab_Dingman2024_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — volume from this paper; review-gap-filled from other p…</sub> | [Dingman_2024_reference](drugs/drug_evinacumab/Evinacumab_Dingman2024_reference.md) | — | 1-compartment (no model) | 2 | Dingman R et al., Evinacumab: Mechanism of action, clinic…, Clinical and translational… (2024) | [10.1111/cts.13836](https://doi.org/10.1111/cts.13836) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">Reproduces with caveats</span> | [Bihorel_2025_LDL_C](drugs/drug_evinacumab/pd_Bihorel_2025_LDL_C.md) | LDL-C ← evinacumab · indirect response — drug inhibits the production of LDL-C | — | Bihorel S et al., Population Pharmacokinetics and Exposur…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.70016](https://doi.org/10.1002/psp4.70016) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Pu_2021_LDL_C](drugs/drug_evinacumab/pd_Pu_2021_LDL_C.md) | low-density lipoprotein cholesterol ← evinacumab · indirect response — drug inhibits the production of low-density lipoprotein cholesterol | — | Pu X et al., Population pharmacokinetics and exposur…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12711](https://doi.org/10.1002/psp4.12711) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=evinacumab).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: ANGPTL3 (antibody), ANGPTL3 (binder), ANGPTL3 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:07 | 4:33 | 1/0/0 | 2/0/0 | 0/0/0 | 96,706/8,985 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 0/3 | 3/0 | 0 |

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 10:04 UTC</sub>
