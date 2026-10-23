<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;lorlatinib&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Lorlatinib_Hibma2022_reference&quot;,&quot;label&quot;:&quot;Hibma_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lorlatinib/Lorlatinib_Hibma2022_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# lorlatinib

- **generic name:** lorlatinib
- **ATC codes:** `L01ED05`
- **DrugBank:** [DB12130](https://go.drugbank.com/drugs/DB12130) · **PubChem:** [CID 71731823](https://pubchem.ncbi.nlm.nih.gov/compound/71731823)
- **molar mass:** 406.421 g/mol (C21H19FN6O2) — DrugBank
- **groups:** approved, investigational

## About

Lorlatinib is an ALK inhibitor used to treat non-small-cell lung carcinoma. It is an approved medicine and is authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27285820](https://www.wikidata.org/wiki/Q27285820) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| lorlatinib | parent | 406.421 | C21H19FN6O2 | DrugBank | [71731823](https://pubchem.ncbi.nlm.nih.gov/compound/71731823) | Chen_2021, Damoiseaux_2022_2 |

## Start here

> **Hibma_2022_reference** — <span class="pk-badge pk-badge--orange">Needs review</span> review reference. [Run it in the simulator](drugs/drug_lorlatinib/Lorlatinib_Hibma2022_reference.md?tab=Simulation) · [record](drugs/drug_lorlatinib/Lorlatinib_Hibma2022_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | 9.035 | L/h | 9.035 L/h | patients with ALK-positive or ROS1-positive NSCLC and healthy participants | 425 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Chen_2021_reference](drugs/drug_lorlatinib/Lorlatinib_Chen2021_reference.md) |
| CL | CL/F | 11 | L/h | 11.0 L/h | review reference |  | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Hibma_2022_reference](drugs/drug_lorlatinib/Lorlatinib_Hibma2022_reference.md) |
| V | V/F | 380.9 | L | 380.8715 L | review reference |  | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Hibma_2022_reference](drugs/drug_lorlatinib/Lorlatinib_Hibma2022_reference.md) |
| ka | kabs | 3.113 | 1/h | 3.113 h−1 | patients with ALK-positive or ROS1-positive NSCLC and healthy participants | 425 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Chen_2021_reference](drugs/drug_lorlatinib/Lorlatinib_Chen2021_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

<div class="pk-forest-row"><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="80" viewBox="0 0 560 80" role="img" aria-label="CL across studies"><text x="190" y="14" font-size="12" font-weight="600">CL (L/h, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="58" stroke="#ddd"/><text x="190.0" y="72" font-size="10" text-anchor="middle">1</text><line x1="365.0" y1="18" x2="365.0" y2="58" stroke="#ddd"/><text x="365.0" y="72" font-size="10" text-anchor="middle">10</text><line x1="540.0" y1="18" x2="540.0" y2="58" stroke="#ddd"/><text x="540.0" y="72" font-size="10" text-anchor="middle">100</text><text x="184" y="34.0" font-size="11" text-anchor="end">Chen_2021 · CL</text><circle cx="357.3" cy="30.0" r="4" fill="#ef6c00"><title>Chen_2021 · CL: 9.035 L/h</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Hibma_2022 · CL/F</text><circle cx="372.2" cy="46.0" r="4" fill="#ef6c00"><title>Hibma_2022 · CL/F: 11 L/h</title></circle></svg></div>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub><br><sub>blocking: model_quarantined: F, Vd, Tlag left at base-class defaults</sub> | [Chen_2021_reference](drugs/drug_lorlatinib/Lorlatinib_Chen2021_reference.md) | held back | 1-compartment, oral | 7 (+2 cov.) | Chen J et al., Population pharmacokinetic model with t…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12585](https://doi.org/10.1002/psp4.12585) |
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: unreported model parameter default(s): ka</sub> | [Hibma_2022_reference](drugs/drug_lorlatinib/Lorlatinib_Hibma2022_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Hibma JE et al., Evaluation of the absolute oral bioavai…, Cancer chemotherapy and pha… (2022) | [10.1007/s00280-021-04368-1](https://doi.org/10.1007/s00280-021-04368-1) |
| <span class="pk-rf" hidden data-species="mouse" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [Damoiseaux_2022_2_reference](drugs/drug_lorlatinib/Lorlatinib_Damoiseaux2022v2_reference.md) | — | 1-compartment (no model) | 1 | Damoiseaux D et al., Predictiveness of the Human-CYP3A4-Tran…, Pharmaceuticals (Basel, Swi… (2022) | [10.3390/ph15070860](https://doi.org/10.3390/ph15070860) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Chen_2021_2_Hypercholesterolemia_grade_3](drugs/drug_lorlatinib/pd_Chen_2021_2_Hypercholesterolemia_grade_3.md) | Hypercholesterolemia grade ≥ 3 ← lorlatinib · categorical (graded) response model | — | Chen J et al., Lorlatinib Exposure-Response Analyses f…, Clinical pharmacology and t… (2021) | [10.1002/cpt.2228](https://doi.org/10.1002/cpt.2228) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Chen_2021_2_TEAE](drugs/drug_lorlatinib/pd_Chen_2021_2_TEAE.md) | TEAE grade ≥ 3 ← lorlatinib · categorical (graded) response model | — | Chen J et al., Lorlatinib Exposure-Response Analyses f…, Clinical pharmacology and t… (2021) | [10.1002/cpt.2228](https://doi.org/10.1002/cpt.2228) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 02:51 | 4:50 | 0/1/2 | 0/0/1 | 0/0/0 | 112,164/24,126 | openai / gpt-6-luna | 5 | 0/5 | 5/0 | 0 |

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 0  ·  needs_review 2  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Damoiseaux_2022.pdf` | Damoiseaux D et al., Population Pharmacokinetic Modelling to…, Journal of pharmaceutical s… (2022) | popPK | 9 | [10.1016/j.xphs.2021.09.029](https://doi.org/10.1016/j.xphs.2021.09.029) | [34563535](https://pubmed.ncbi.nlm.nih.gov/34563535) | The mouse population-PK model is relevant, but no numeric parameter values are present in the provided evidence. |

<sub>queue written 2026-10-07T02:46:58.527003+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chen_2021_2 | irrelevant | 2 | 1 | This is a human exposure-response analysis that cites a prior population-PK model but provides no numeric lorlatinib disposition parameters. |
| popPK | Damoiseaux_2022 | relevant | 9 | 0 | The mouse population-PK model is relevant, but no numeric parameter values are present in the provided evidence. |
| popPK | Sun_2022 | relevant | 6 | 1 | Human lorlatinib concentrations and a population-PK-derived average are reported, but numeric disposition parameters are not provided. |
| popPK | Takahashi_2026 | irrelevant | 0 | 0 | The evidence does not identify lorlatinib or provide numeric lorlatinib disposition parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 02:47 UTC</sub>
