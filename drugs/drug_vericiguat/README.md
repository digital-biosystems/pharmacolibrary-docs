<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01D&quot;,&quot;href&quot;:&quot;atc/C01D.md&quot;},{&quot;label&quot;:&quot;vericiguat&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Vericiguat_Ruehs2021_reference&quot;,&quot;label&quot;:&quot;Ruehs_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_vericiguat/Vericiguat_Ruehs2021_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

# vericiguat

- **generic name:** vericiguat
- **ATC codes:** `C01DX22`
- **DrugBank:** [DB15456](https://go.drugbank.com/drugs/DB15456) · **PubChem:** none
- **molar mass:** 426.388 g/mol (C19H16F2N8O2) — DrugBank
- **groups:** approved, investigational

## About

Vericiguat is a vasodilator used to treat heart failure. It is approved and authorised in the European Union, though it also remains investigational for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27283201](https://www.wikidata.org/wiki/Q27283201) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| vericiguat | parent | 426.388 | C19H16F2N8O2 | DrugBank | — | Fritsch_2024, Ruehs_2021 |

## Start here

> **Ruehs_2021_reference** — <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> adults with heart failure and reduced ejection fraction, n = 454. [Run it in the simulator](drugs/drug_vericiguat/Vericiguat_Ruehs2021_reference.md?tab=Simulation) · [record](drugs/drug_vericiguat/Vericiguat_Ruehs2021_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | 1.62 | L/h | 1.62 L/h | adults with heart failure with reduced ejection fraction (HFrEF) |  | human | <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> | [Fritsch_2024_reference](drugs/drug_vericiguat/Vericiguat_Fritsch2024_reference.md) |
| CL | CL/F | 1.3 | L/h | 1.3 L/h | adults with heart failure and reduced ejection fraction | 454 | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> | [Ruehs_2021_reference](drugs/drug_vericiguat/Vericiguat_Ruehs2021_reference.md) |
| V | V/F | 38.9 | L | 38.9 L | adults with heart failure and reduced ejection fraction | 454 | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> | [Ruehs_2021_reference](drugs/drug_vericiguat/Vericiguat_Ruehs2021_reference.md) |
| ka | kabs | 1.5 | 1/h | 1.5 1/h | adults with heart failure and reduced ejection fraction | 454 | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> | [Ruehs_2021_reference](drugs/drug_vericiguat/Vericiguat_Ruehs2021_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

<div class="pk-forest-row"><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="80" viewBox="0 0 560 80" role="img" aria-label="CL across studies"><text x="190" y="14" font-size="12" font-weight="600">CL (L/h, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="58" stroke="#ddd"/><text x="190.0" y="72" font-size="10" text-anchor="middle">1</text><line x1="540.0" y1="18" x2="540.0" y2="58" stroke="#ddd"/><text x="540.0" y="72" font-size="10" text-anchor="middle">10</text><text x="184" y="34.0" font-size="11" text-anchor="end">Fritsch_2024 · CL</text><circle cx="263.3" cy="30.0" r="4" fill="#ef6c00"><title>Fritsch_2024 · CL: 1.62 L/h</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Ruehs_2021 · CL/F</text><circle cx="229.9" cy="46.0" r="4" fill="#78909c"><title>Ruehs_2021 · CL/F: 1.3 L/h</title></circle></svg></div>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Not simulated" data-sim="yes"></span><span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Not simulated</sub> | [Ruehs_2021_reference](drugs/drug_vericiguat/Vericiguat_Ruehs2021_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 (+4 cov.) | Ruehs H et al., Population Pharmacokinetics and Pharmac…, Clinical pharmacokinetics (2021) | [10.1007/s40262-021-01024-y](https://doi.org/10.1007/s40262-021-01024-y) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Needs review</sub><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Fritsch_2024_reference](drugs/drug_vericiguat/Vericiguat_Fritsch2024_reference.md) | — | 1-compartment (no model) | 1 | Fritsch A et al., Clinical Pharmacokinetic and Pharmacody…, Clinical pharmacokinetics (2024) | [10.1007/s40262-024-01384-1](https://doi.org/10.1007/s40262-024-01384-1) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=vericiguat).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| distribution | blood | `ALB` binder | DrugBank actor |
| distribution | blood-brain barrier | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| distribution | mammary gland | `ABCG2` substrate | DrugBank actor |
| distribution | placenta | `ABCB1` substrate | DrugBank actor |
| distribution | testis | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| metabolism | kidney | `UGT1A9` substrate | DrugBank actor |
| metabolism | liver | `UGT1A1` substrate, `UGT1A9` substrate | DrugBank actor |
| metabolism | small intestine | `UGT1A1` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `ABCB1` substrate | DrugBank actor |
| excretion | liver | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: GUCY1B1 (stimulator), GUCY2D (modulator).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 10:40 | 8:28 | 2/0/0 | 0/0/0 | 0/0/0 | 156,139/24,829 | ollama / qwen3.8:27b-mtp-q8_0 | 5 | 0/4 | 5/0 | 0 |

## Coverage

- **PubMed hits:** 18 matched, 16 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 1  ·  needs review 1  ·  rejected 0  ·  stale 2
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Trujillo_2022.pdf` | Trujillo ME et al., Population Pharmacokinetics of Vericigu…, Clinical pharmacology and t… (2022) | popPK | 10 | [10.1002/cpt.2712](https://doi.org/10.1002/cpt.2712) | [35841202](https://pubmed.ncbi.nlm.nih.gov/35841202) | The paper describes a population PK model for vericiguat in humans, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |

<sub>queue written 2026-10-06 10:32 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Butler_2022 | irrelevant | 0 | 0 | The paper reports health-related quality of life outcomes (KCCQ scores) and clinical endpoints, not pharmacokinetic parameters. |
| popPK | Ruehs_2023 | irrelevant | 0 | 0 | The study focuses on concentration-QTc (pharmacodynamic) modeling to assess cardiac safety, not on estimating pharmacokinetic disposition parameters like clearance or volume. |
| popPK | Shi_2026 | irrelevant | 0 | 0 | The study is a clinical efficacy trial evaluating cardiovascular outcomes and quality of life, reporting no pharmacokinetic parameters (CL, V, ka, etc.) for vericiguat. |
| popPK | Trujillo_2022 | relevant | 10 | 0 | The paper describes a population PK model for vericiguat in humans, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bvericiguat%5D&body=Drug%3A%20vericiguat%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_vericiguat/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-06 10:33 UTC</sub>
