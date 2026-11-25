<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;tafenoquine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tafenoquine_CherkaouiRbati2023_reference&quot;,&quot;label&quot;:&quot;Cherkaoui-Rbati_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tafenoquine/Tafenoquine_CherkaouiRbati2023_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# tafenoquine

- **generic name:** tafenoquine
- **ATC codes:** `P01BA07`
- **DrugBank:** [DB06608](https://go.drugbank.com/drugs/DB06608) · **PubChem:** none
- **molar mass:** 463.501 g/mol (C24H28F3N3O3) — DrugBank
- **groups:** approved, investigational

## About

Tafenoquine is an antimalarial medication used to prevent and treat malaria, including preventing relapse of vivax malaria. It is administered by mouth as a tablet. Tafenoquine is approved for medical use in Australia and the United States.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q2387553](https://www.wikidata.org/wiki/Q2387553), [Wikipedia](https://en.wikipedia.org/wiki/Tafenoquine?oldid=1370538097) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| tafenoquine | parent | 463.501 | C24H28F3N3O3 | DrugBank | — | Bachhav_2023, Charles_2007, Edstein_2001, Thakkar_2018_2, Watson_2022 |

## Parameters across studies

<div class="pk-forest-row"><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="80" viewBox="0 0 560 80" role="img" aria-label="CL across studies"><text x="190" y="14" font-size="12" font-weight="600">CL (L/h, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="58" stroke="#ddd"/><text x="190.0" y="72" font-size="10" text-anchor="middle">1</text><line x1="540.0" y1="18" x2="540.0" y2="58" stroke="#ddd"/><text x="540.0" y="72" font-size="10" text-anchor="middle">10</text><text x="184" y="34.0" font-size="11" text-anchor="end">Bachhav_2023 · CL</text><circle cx="376.0" cy="30.0" r="4" fill="#ef6c00"><title>Bachhav_2023 · CL: 3.4 L/h</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Watson_2022 · CL/F</text><circle cx="363.9" cy="46.0" r="4" fill="#ef6c00"><title>Watson_2022 · CL/F: 3.14 L/h</title></circle></svg><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="80" viewBox="0 0 560 80" role="img" aria-label="V across studies"><text x="190" y="14" font-size="12" font-weight="600">V (L, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="58" stroke="#ddd"/><text x="190.0" y="72" font-size="10" text-anchor="middle">1000</text><line x1="540.0" y1="18" x2="540.0" y2="58" stroke="#ddd"/><text x="540.0" y="72" font-size="10" text-anchor="middle">10000</text><text x="184" y="34.0" font-size="11" text-anchor="end">Charles_2007 · V/F ·/kg</text><circle cx="281.6" cy="30.0" r="4" fill="#ef6c00"><title>Charles_2007 · V/F ·/kg: 1827 L</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Watson_2022 · V1/F</text><circle cx="233.3" cy="46.0" r="4" fill="#ef6c00"><title>Watson_2022 · V1/F: 1330 L</title></circle></svg></div>

<sub>One dot per record, coloured by status; values converted from the record's SI value to one unit per parameter. ·/kg: given per kg in the paper, shown for a 70 kg adult. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Bachhav_2023_reference](drugs/drug_tafenoquine/Tafenoquine_Bachhav2023_reference.md) | — | 1-compartment (no model) | 3 | Bachhav SS et al., A pharmacometrics approach to assess th…, British journal of clinical… (2023) | [10.1111/bcp.15554](https://doi.org/10.1111/bcp.15554) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub><br><sub>blocking: model_quarantined: Cl, ka, Tlag left at base-class defaults</sub> | [Charles_2007_reference](drugs/drug_tafenoquine/Tafenoquine_Charles2007_reference.md) | held back | 1-compartment, oral | 3 (+1 cov.) | Charles BG et al., Population pharmacokinetics of tafenoqu…, Antimicrobial agents and ch… (2007) | [10.1128/AAC.01183-06](https://doi.org/10.1128/AAC.01183-06) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q81 — no SI value to build from</sub> | [Watson_2022_reference](drugs/drug_tafenoquine/Tafenoquine_Watson2022_reference.md) | — | 2-compartment (no model) | 7 | Watson JA et al., The clinical pharmacology of tafenoquin…, eLife 11 (2022) | [10.7554/eLife.83433](https://doi.org/10.7554/eLife.83433) |
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Rejected" data-sim="yes"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: paper_subject_is_other_drug</sub> | [Cherkaoui-Rbati_2023_reference](drugs/drug_tafenoquine/Tafenoquine_CherkaouiRbati2023_reference.md) | ▶ model + simulator | 2-compartment, IV | 5 | Cherkaoui-Rbati MH et al., A pharmacokinetic-pharmacodynamic model…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.12875](https://doi.org/10.1002/psp4.12875) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [Edstein_2001_reference](drugs/drug_tafenoquine/Tafenoquine_Edstein2001_reference.md) | — | 1-compartment (no model) | 0 | Edstein MD et al., Population pharmacokinetics of the new…, British journal of clinical… (2001) | [10.1046/j.0306-5251.2001.01482.x](https://doi.org/10.1046/j.0306-5251.2001.01482.x) |
| <span class="pk-rf" hidden data-species="human + animal" data-age="mixed" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.30).">human + animal</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Santos_2024_reference](drugs/drug_tafenoquine/Tafenoquine_Santos2024_reference.md) | — | 1-compartment (no model) | 0 | Santos LO et al., Pharmacokinetic Models of Tafenoquine:…, Pharmaceutics (2024) | [10.3390/pharmaceutics16091124](https://doi.org/10.3390/pharmaceutics16091124) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C7 apparent-parameter coherence violated (double correction)</sub> | [Thakkar_2018_2_reference](drugs/drug_tafenoquine/Tafenoquine_Thakkar2018v2_reference.md) | — | 1-compartment (no model) | 7 | Thakkar N et al., Population Pharmacokinetics of Tafenoqu…, Antimicrobial agents and ch… (2018) | [10.1128/AAC.00711-18](https://doi.org/10.1128/AAC.00711-18) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Watson_2022_recurrence](drugs/drug_tafenoquine/pd_Watson_2022_recurrence.md) | P. vivax recurrence within 4 months ← tafenoquine · direct Emax (saturable) effect | — | Watson JA et al., The clinical pharmacology of tafenoquin…, eLife 11 (2022) | [10.7554/eLife.83433](https://doi.org/10.7554/eLife.83433) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Tenero_2015_relapse](drugs/drug_tafenoquine/pd_Tenero_2015_relapse.md) | time to relapse ← tafenoquine · time-to-event model | — | Tenero D et al., Exposure-Response Analyses for Tafenoqu…, Antimicrobial agents and ch… (2015) | [10.1128/AAC.00718-15](https://doi.org/10.1128/AAC.00718-15) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Tenero_2015_relapse_free_at_6_months](drugs/drug_tafenoquine/pd_Tenero_2015_relapse_free_at_6_months.md) | clinical response ← tafenoquine · categorical (graded) response model | — | Tenero D et al., Exposure-Response Analyses for Tafenoqu…, Antimicrobial agents and ch… (2015) | [10.1128/AAC.00718-15](https://doi.org/10.1128/AAC.00718-15) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 07:23 | 1:12 | 3/4/0 | 3/0/0 | 0/0/0 | 5,444/172 | einfracz / qwen3.8-27b | 16 | 2/5 | 7/0 | 0 |

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 6  ·  **relevant:** 6
- **records:** 7  ·  extracted 0  ·  needs review 3  ·  rejected 4  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Vélez_2022.pdf` | Vélez ID et al., Tafenoquine exposure assessment, safety…, The Lancet. Child & adolesc… (2022) | popPK | 8 | [10.1016/S2352-4642(21)00328-X](https://doi.org/10.1016/S2352-4642(21)00328-X) | [34871570](https://pubmed.ncbi.nlm.nih.gov/34871570) | The paper describes a population PK model for tafenoquine in pediatric humans, but the specific numeric parameter estimates (CL, V, ka, etc.) are not provided in the evidence, only derived exposure metrics (AUC). |

<sub>queue written 2026-11-24 07:23 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Bachhav_2023 | not_relevant | 0 | 0 | The paper focuses on comparing sampling techniques (microsampling vs venous) for tafenoquine PK modeling and does not investigate gene variants or pharmacogenomic effects. |
| PGx | Charles_2007 | not_relevant | 1 | 0 | The study reports standard population pharmacokinetics of tafenoquine based on demographic and anthropometric covariates (e.g., weight, age) and does not investigate gene variants (e.g., CYP2C8, G6PD genotype) or their impact on PK parameters. |
| popPK | Cherkaoui-Rbati_2023 | irrelevant | 0 | 0 | The paper models DSM265, not tafenoquine; tafenoquine is only mentioned as a comparator prophylactic, and no tafenoquine PK parameters are reported. |
| PGx | Edstein_2001 | not_relevant | 0 | 0 | The study reports population pharmacokinetics influenced by age, weight, and malaria status, but does not investigate gene variants or genotypes. |
| popPK | Persoons_2021 | irrelevant | 0 | 0 | The paper reports in-vitro antiviral activity (EC50) and cytotoxicity of quinolines, not pharmacokinetic parameters. |
| PGx | Persoons_2021 | not_relevant | 0 | 0 | The paper investigates the antiviral activity of quinoline analogues against coronaviruses in vitro and does not report any pharmacogenomic effects on the PK or PD parameters of tafenoquine. |
| popPK | Ramharter_2002 | irrelevant | 0 | 0 | This is an in vitro pharmacodynamic study measuring anti-malarial activity (EC50/EC90), not a pharmacokinetic study. |
| PGx | Ramharter_2002 | not_relevant | 0 | 0 | The study assesses in vitro parasite susceptibility and drug combinations, but does not report any pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters in humans. |
| popPK | Tenero_2015 | irrelevant | 2 | 1 | This is an exposure-response analysis reporting AUC and clinical efficacy relationships, not a pharmacokinetic study reporting disposition parameters like clearance, volume, or rate constants. |
| PGx | Tenero_2015 | not_relevant | 0 | 0 | The paper focuses on the exposure-response relationship between tafenoquine AUC and clinical outcomes, and while it identifies region as a covariate, it does not report how specific gene variants or genotypes alter PK or PD parameters. |
| popPK | Vélez_2022 | relevant | 8 | 3 | The paper describes a population PK model for tafenoquine in pediatric humans, but the specific numeric parameter estimates (CL, V, ka, etc.) are not provided in the evidence, only derived exposure metrics (AUC). |
| PGx | Vélez_2022 | not_relevant | 0 | 0 | The study focuses on pediatric dosing based on body weight and safety in G6PD-normal patients, but it does not report pharmacokinetic or pharmacodynamic changes driven by genetic variants. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btafenoquine%5D&body=Drug%3A%20tafenoquine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_tafenoquine/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-24 07:21 UTC</sub>
