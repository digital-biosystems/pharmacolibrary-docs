<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;navitoclax&quot;}]"></div>

# navitoclax

- **generic name:** navitoclax
- **ATC codes:** `L01XX78`
- **DrugBank:** [DB12340](https://go.drugbank.com/drugs/DB12340) · **PubChem:** [CID 24978538](https://pubchem.ncbi.nlm.nih.gov/compound/24978538)
- **molar mass:** 974.613 g/mol (C47H55ClF3N5O6S3) — DrugBank
- **groups:** investigational

## About

Navitoclax is an investigational anticancer drug being studied as a treatment for cancer. It is not approved for general use and remains under clinical investigation.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q18002993](https://www.wikidata.org/wiki/Q18002993) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| navitoclax | parent | 974.613 | C47H55ClF3N5O6S3 | DrugBank | [24978538](https://pubchem.ncbi.nlm.nih.gov/compound/24978538) | Polepally_2026 |

## Parameters across studies

| parameter | as named | value | unit | as reported | population | species | status | record |
|---|---|---|---|---|---|---|---|---|
| CL | CL/F | 5.708 | L/h | 137 L/day | patients with myelofibrosis | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Polepally_2026_navitoclax](drugs/drug_navitoclax/Navitoclax_Polepally2026_navitoclax.md) |
| V | V1/F | 38.3 | L | 38.3 L | patients with myelofibrosis | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Polepally_2026_navitoclax](drugs/drug_navitoclax/Navitoclax_Polepally2026_navitoclax.md) |
| ka | kabs | 0.1958 | 1/h | 4.7 1/day | patients with myelofibrosis | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Polepally_2026_population_estimate](drugs/drug_navitoclax/Navitoclax_Polepally2026_population_estimate.md) |
| ka | kabs | — | 1/h | 4.70 | patients with myelofibrosis | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Polepally_2026_navitoclax](drugs/drug_navitoclax/Navitoclax_Polepally2026_navitoclax.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. — the reported unit did not convert; the value is listed as reported. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q49, Q31 — no SI value to build from</sub> | [Polepally_2026_navitoclax](drugs/drug_navitoclax/Navitoclax_Polepally2026_navitoclax.md) | — | 2-compartment (no model) | 7 | Polepally AR et al., Semi-Mechanistic PK/PD Modeling of Plat…, CPT: pharmacometrics & syst… (2026) | [10.1002/psp4.70260](https://doi.org/10.1002/psp4.70260) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [↳ population_estimate](drugs/drug_navitoclax/Navitoclax_Polepally2026_population_estimate.md) | — | 1-compartment (no model) | 3 (+2 cov.) |  |  |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span> | [Jegatheeson_2023_viability](drugs/drug_navitoclax/pd_Jegatheeson_2023_viability.md) | viability ← NAV · direct sigmoid Emax (Hill) effect | — | Jegatheeson S et al., Sensitivity of canine hematological can…, Journal of veterinary inter… (2023) | [10.1111/jvim.16587](https://doi.org/10.1111/jvim.16587) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Kaefer_2014_PLT](drugs/drug_navitoclax/pd_Kaefer_2014_PLT.md) | platelet counts ← navitoclax · disease-progression model | — | Kaefer A et al., Mechanism-based pharmacokinetic/pharmac…, Cancer chemotherapy and pha… (2014) | [10.1007/s00280-014-2530-9](https://doi.org/10.1007/s00280-014-2530-9) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Polepally_2026_PLT](drugs/drug_navitoclax/pd_Polepally_2026_PLT.md) | platelet count ← navitoclax · inhibition effect | — | Polepally AR et al., Semi-Mechanistic PK/PD Modeling of Plat…, CPT: pharmacometrics & syst… (2026) | [10.1002/psp4.70260](https://doi.org/10.1002/psp4.70260) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Polepally_2026_SV](drugs/drug_navitoclax/pd_Polepally_2026_SV.md) | spleen volume ← navitoclax · indirect response — drug inhibits the loss of spleen volume | — | Polepally AR et al., Semi-Mechanistic PK/PD Modeling of Plat…, CPT: pharmacometrics & syst… (2026) | [10.1002/psp4.70260](https://doi.org/10.1002/psp4.70260) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=navitoclax).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: BAD (unknown), BCL2 (inhibitor), BCL2L1 (inhibitor), BCL2L2 (inhibitor), CCND1 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 21:09 | 1:42 | 2/0/0 | 3/0/0 | 0/0/0 | 121,087/11,524 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 2  ·  extracted 0  ·  needs review 2  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kaefer_2014.pdf` | Kaefer A et al., Mechanism-based pharmacokinetic/pharmac…, Cancer chemotherapy and pha… (2014) | popPK | 10 | [10.1007/s00280-014-2530-9](https://doi.org/10.1007/s00280-014-2530-9) | [25053389](https://pubmed.ncbi.nlm.nih.gov/25053389) | The study reports a population PK/PD model for navitoclax in humans, but the specific quantitative parameter estimates (CL, V, ka, etc.) are not present in the provided evidence text, likely residing in tables or supplementary material. |

<sub>queue written 2026-10-06 21:07 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Jegatheeson_2023 | irrelevant | 1 | 0 | The study is an in vitro cytotoxicity assessment (EC50) of BH3 mimetics, not a pharmacokinetic study, and does not report disposition parameters (CL, V, ka, etc.) for navitoclax. |
| popPK | Kaefer_2014 | relevant | 10 | 1 | The study reports a population PK/PD model for navitoclax in humans, but the specific quantitative parameter estimates (CL, V, ka, etc.) are not present in the provided evidence text, likely residing in tables or supplementary material. |
| popPK | Witzens-Harig_2016 | irrelevant | 0 | 0 | The study focuses on in-vitro sensitivity (EC50) and molecular mechanisms (Bax/Bcl-2) of ATL cells, not pharmacokinetic disposition parameters like clearance or volume. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bnavitoclax%5D&body=Drug%3A%20navitoclax%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_navitoclax/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-06 21:07 UTC</sub>
