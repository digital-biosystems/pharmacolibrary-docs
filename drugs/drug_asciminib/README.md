<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;asciminib&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Asciminib_Darstein2025_reference&quot;,&quot;label&quot;:&quot;Darstein_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_asciminib/Asciminib_Darstein2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# asciminib

- **generic name:** asciminib
- **ATC codes:** `L01EA06`
- **DrugBank:** [DB12597](https://go.drugbank.com/drugs/DB12597) · **PubChem:** [CID 72165228](https://pubchem.ncbi.nlm.nih.gov/compound/72165228)
- **molar mass:** 449.84 g/mol (C20H18ClF2N5O3) — DrugBank
- **groups:** approved, investigational

## About

Asciminib is a BCR-ABL tyrosine kinase inhibitor used to treat chronic myeloid leukemia. It is authorised in the European Union for BCR-ABL positive chronic myelogenous leukemia.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27074535](https://www.wikidata.org/wiki/Q27074535) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| asciminib | parent | 449.84 | C20H18ClF2N5O3 | DrugBank | [72165228](https://pubchem.ncbi.nlm.nih.gov/compound/72165228) | Darstein_2025 |

## Start here

> **Darstein_2025_reference** — <span class="pk-badge pk-badge--orange">Needs review</span> patients with CML and Ph+ acute lymphoblastic leukemia. [Run it in the simulator](drugs/drug_asciminib/Asciminib_Darstein2025_reference.md?tab=Simulation) · [record](drugs/drug_asciminib/Asciminib_Darstein2025_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | species | status | record |
|---|---|---|---|---|---|---|---|---|
| CL | CL/F | 6.84 | L/h | 6.84 L/h | patients with CML and Ph+ acute lymphoblastic leukemia | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Darstein_2025_reference](drugs/drug_asciminib/Asciminib_Darstein2025_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: unreported model parameter default(s): ka</sub> | [Darstein_2025_reference](drugs/drug_asciminib/Asciminib_Darstein2025_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Darstein C et al., Population pharmacokinetic modeling of…, Cancer chemotherapy and pha… (2025) | [10.1007/s00280-025-04755-y](https://doi.org/10.1007/s00280-025-04755-y) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Sy_2025_MMR](drugs/drug_asciminib/pd_Sy_2025_MMR.md) | week-48 major molecular response ← asciminib · direct linear effect | — | Sy SKB et al., Exposure-response analysis of asciminib…, Cancer chemotherapy and pha… (2025) | [10.1007/s00280-025-04806-4](https://doi.org/10.1007/s00280-025-04806-4) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Sy_2025_worsening_event_for_grade_3_lipase_increase](drugs/drug_asciminib/pd_Sy_2025_worsening_event_for_grade_3_lipase_increase.md) | worsening event for grade ≥ 3 lipase increase ← asciminib · direct linear effect | — | Sy SKB et al., Exposure-response analysis of asciminib…, Cancer chemotherapy and pha… (2025) | [10.1007/s00280-025-04806-4](https://doi.org/10.1007/s00280-025-04806-4) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 21:32 | 1:43 | 0/0/1 | 1/0/0 | 0/0/0 | 33,413/8,256 | openai / gpt-6-luna | 2 | 1/1 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Darstein_2025.pdf` | Darstein C et al., Population pharmacokinetic modeling of…, Cancer chemotherapy and pha… (2025) | popPK | 10 | [10.1007/s00280-025-04755-y](https://doi.org/10.1007/s00280-025-04755-y) | [40019625](https://pubmed.ncbi.nlm.nih.gov/40019625) | The human popPK model reports numeric apparent clearance and steady-state volume of distribution for asciminib. |
| `Li_2022.pdf` | Li YF et al., Population Pharmacokinetics of Ascimini…, Clinical pharmacokinetics (2022) | popPK | 10 | [10.1007/s40262-022-01148-9](https://doi.org/10.1007/s40262-022-01148-9) | [35764773](https://pubmed.ncbi.nlm.nih.gov/35764773) | This is a human asciminib population-PK study, but numeric disposition parameter values are not present in the evidence. |

<sub>queue written 2026-10-06T21:31:26.300469+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Combes_2022 | irrelevant | 2 | 0 | The model describes leukemic cell populations and exposure-efficacy, with no asciminib disposition parameters or numeric values reported. |
| popPK | Combes_2024 | relevant | 9 | 2 | Human PopPK analysis reports AUC and relative Cmax/Cmin, but detailed disposition-model values are referred to a prior publication. |
| popPK | Li_2022 | relevant | 10 | 0 | This is a human asciminib population-PK study, but numeric disposition parameter values are not present in the evidence. |
| popPK | Li_2022_2 | relevant | 9 | 1 | The evidence indicates a population-PK model with CL and ka, but provides no numeric parameter values. |
| popPK | Sy_2025 | irrelevant | 2 | 0 | The study reports exposure-response relationships but no numeric disposition parameters for asciminib. |
| popPK | Sy_2025_2 | irrelevant | 0 | 0 | The study models nilotinib, and reports no quantitative pharmacokinetic parameters for asciminib. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-06 21:31 UTC</sub>
