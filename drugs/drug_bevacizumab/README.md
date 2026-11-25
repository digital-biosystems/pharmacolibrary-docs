<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;bevacizumab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Bevacizumab_Turner2014_reference&quot;,&quot;label&quot;:&quot;Turner_2014_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_bevacizumab/Bevacizumab_Turner2014_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Bevacizumab_Caulet2016_estimate&quot;,&quot;label&quot;:&quot;Caulet_2016_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_bevacizumab/Bevacizumab_Caulet2016_estimate.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# bevacizumab

- **generic name:** bevacizumab
- **ATC codes:** `L01FG01`, `L01XC07`, `S01LA08`
- **DrugBank:** [DB00112](https://go.drugbank.com/drugs/DB00112) · **PubChem:** none
- **groups:** approved, investigational

## About

Bevacizumab is a monoclonal antibody that acts as an angiogenesis inhibitor to treat various cancers and certain eye conditions. It is administered intravenously for systemic cancers and by injection into the eye for macular degeneration.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q413299](https://www.wikidata.org/wiki/Q413299), [Wikipedia](https://en.wikipedia.org/wiki/Bevacizumab?oldid=1384835572) (CC BY-SA 4.0), DrugBank's routes and dosage forms, the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Start here

> **Turner_2014_reference** — <span class="pk-badge pk-badge--blue">Simulated</span> children with osteosarcoma. [Run it in the simulator](drugs/drug_bevacizumab/Bevacizumab_Turner2014_reference.md?tab=Simulation) · [record](drugs/drug_bevacizumab/Bevacizumab_Turner2014_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

<div class="pk-forest-row"><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="96" viewBox="0 0 560 96" role="img" aria-label="CL across studies"><text x="190" y="14" font-size="12" font-weight="600">CL (L/h, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="74" stroke="#ddd"/><text x="190.0" y="88" font-size="10" text-anchor="middle">0.001</text><line x1="306.7" y1="18" x2="306.7" y2="74" stroke="#ddd"/><text x="306.7" y="88" font-size="10" text-anchor="middle">0.01</text><line x1="423.3" y1="18" x2="423.3" y2="74" stroke="#ddd"/><text x="423.3" y="88" font-size="10" text-anchor="middle">0.1</text><line x1="540.0" y1="18" x2="540.0" y2="74" stroke="#ddd"/><text x="540.0" y="88" font-size="10" text-anchor="middle">1</text><text x="184" y="34.0" font-size="11" text-anchor="end">Caulet_2016 · CL</text><circle cx="294.8" cy="30.0" r="4" fill="#ef6c00"><title>Caulet_2016 · CL: 0.007917 L/h</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Han_2016 · CL</text><circle cx="299.0" cy="46.0" r="4" fill="#ef6c00"><title>Han_2016 · CL: 0.0086 L/h</title></circle><text x="184" y="66.0" font-size="11" text-anchor="end">Caulet_2016 · CL</text><circle cx="455.9" cy="62.0" r="4" fill="#ef6c00"><title>Caulet_2016 · CL: 0.19 L/h</title></circle></svg><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="96" viewBox="0 0 560 96" role="img" aria-label="V across studies"><text x="190" y="14" font-size="12" font-weight="600">V (L, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="74" stroke="#ddd"/><text x="190.0" y="88" font-size="10" text-anchor="middle">1</text><line x1="540.0" y1="18" x2="540.0" y2="74" stroke="#ddd"/><text x="540.0" y="88" font-size="10" text-anchor="middle">10</text><text x="184" y="34.0" font-size="11" text-anchor="end">Turner_2014 · V ·/kg</text><circle cx="377.7" cy="30.0" r="4" fill="#78909c"><title>Turner_2014 · V ·/kg: 3.437 L</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Han_2016 · V1</text><circle cx="339.7" cy="46.0" r="4" fill="#ef6c00"><title>Han_2016 · V1: 2.678 L</title></circle><text x="184" y="66.0" font-size="11" text-anchor="end">Caulet_2016 · V1</text><circle cx="408.1" cy="62.0" r="4" fill="#ef6c00"><title>Caulet_2016 · V1: 4.2 L</title></circle></svg></div>

<sub>One dot per record, coloured by status; values converted from the record's SI value to one unit per parameter. ·/kg: given per kg in the paper, shown for a 70 kg adult. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Simulated" data-sim="yes"></span><span class="pk-badge pk-badge--blue">Simulated</span> | [Turner_2014_reference](drugs/drug_bevacizumab/Bevacizumab_Turner2014_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Turner DC et al., Population pharmacokinetics of bevacizu…, Clinical cancer research :… (2014) | [10.1158/1078-0432.CCR-13-2364](https://doi.org/10.1158/1078-0432.CCR-13-2364) |
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub><br><sub>blocking: cross_check_disputed</sub> | [Caulet_2016_estimate](drugs/drug_bevacizumab/Bevacizumab_Caulet2016_estimate.md) | ▶ model + simulator | 2-compartment, IV | 7 (+1 cov.) | Caulet M et al., Bevacizumab Pharmacokinetics Influence…, Clinical pharmacokinetics (2016) | [10.1007/s40262-016-0406-3](https://doi.org/10.1007/s40262-016-0406-3) |
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: model_quarantined: Vd left at base-class defaults</sub> | [↳ p_value_a](drugs/drug_bevacizumab/Bevacizumab_Caulet2016_p_value_a.md) | held back | 1-compartment, IV | 3 |  |  |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q23 — no SI value to build from</sub> | [Han_2016_reference](drugs/drug_bevacizumab/Bevacizumab_Han2016_reference.md) | — | 2-compartment (no model) | 5 | Han K et al., Population pharmacokinetics of bevacizu…, Cancer chemotherapy and pha… (2016) | [10.1007/s00280-016-3079-6](https://doi.org/10.1007/s00280-016-3079-6) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Lobet_2024_reference](drugs/drug_bevacizumab/Bevacizumab_Lobet2024_reference.md) | — | general linear (no model) | 2 | Lobet S et al., Confounding mitigation for the exposure…, British journal of clinical… (2024) | [10.1111/bcp.15983](https://doi.org/10.1111/bcp.15983) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Del_2023_BCVA](drugs/drug_bevacizumab/pd_Del_2023_BCVA.md) | change of BCVA from the baseline of nAMD patients ← bevacizumab · indirect response — drug stimulates the production of change of BCVA from the baseline of nAMD patients | — | Del Amo EM et al., Towards a population pharmacokinetic/ph…, European journal of pharmac… (2023) | [10.1016/j.ejpb.2023.05.007](https://doi.org/10.1016/j.ejpb.2023.05.007) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Ferl_2015_KEnF](drugs/drug_bevacizumab/pd_Ferl_2015_KEnF.md) | KEnF ← bevacizumab · indirect response — drug inhibits the production of KEnF | — | Ferl GZ et al., Mixed-effects modeling of clinical DCE-…, Journal of magnetic resonan… (2015) | [10.1002/jmri.24514](https://doi.org/10.1002/jmri.24514) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Park_2023_OS](drugs/drug_bevacizumab/pd_Park_2023_OS.md) | Overall survival ← bevacizumab (SB8 and bevacizumab-EU) · time-to-event model | — | Park S et al., Exposure-response analysis using time-t…, Frontiers in pharmacology (2023) | [10.3389/fphar.2023.1288308](https://doi.org/10.3389/fphar.2023.1288308) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Park_2023_PFS](drugs/drug_bevacizumab/pd_Park_2023_PFS.md) | Progression-free survival ← bevacizumab (SB8 and bevacizumab-EU) · time-to-event model | — | Park S et al., Exposure-response analysis using time-t…, Frontiers in pharmacology (2023) | [10.3389/fphar.2023.1288308](https://doi.org/10.3389/fphar.2023.1288308) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 19:42 | 0:04 | 4/1/0 | 4/0/0 | 0/0/0 | 4,159/172 | einfracz / qwen3.8-27b | 5 | 2/3 | 5/0 | 0 |

## Coverage

- **PubMed hits:** 79 matched, 20 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 5  ·  extracted 1  ·  needs review 3  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Allegaert_2013 | irrelevant | 0 | 0 | The paper is an educational review discussing the need for neonatal pharmacologists and does not report original quantitative pharmacokinetic parameters for bevacizumab. |
| PGx | Allegaert_2013 | not_relevant | 0 | 0 | The paper is an educational review on neonatal pharmacology and mentions bevacizumab only as a case study; it does not report any pharmacogenomic effect. |
| popPK | Del_2023 | relevant | 7 | 0 | The study develops a bevacizumab popPKPD model, but no numeric disposition parameters are present in the provided evidence. |
| popPK | Eskander_2015 | irrelevant | 1 | 0 | The paper is a clinical review focusing on survival outcomes and toxicology, with no mention or data regarding the pharmacokinetic parameters (CL, V, t1/2) of bevacizumab. |
| PGx | Eskander_2015 | not_relevant | 0 | 0 | The text discusses clinical outcomes and general pharmacodynamic modeling of bevacizumab in cervical cancer but does not report any pharmacogenomic (genetic variant) effects on PK or PD parameters. |
| popPK | Ferl_2015 | irrelevant | 0 | 0 | The study models DCE-MRI imaging biomarkers (Ktrans/EnF) to assess tumor response, not the pharmacokinetic disposition parameters (CL, V, t1/2) of the drug bevacizumab itself. |
| PGx | Ferl_2015 | not_relevant | 0 | 0 | The paper describes a statistical modeling approach for DCE-MRI data in response to bevacizumab but does not report any pharmacogenomic effects or gene variants. |
| popPK | Huynh-Le_2019 | irrelevant | 0 | 0 | The paper investigates amygdala atrophy after radiotherapy, with bevacizumab only listed as a covariate in a volume model, containing no pharmacokinetic parameters. |
| PGx | Huynh-Le_2019 | not_relevant | 0 | 0 | The paper studies amygdala atrophy after radiotherapy and only lists bevacizumab as a covariate in the model; it does not report pharmacogenomic effects on PK or PD parameters of bevacizumab. |
| PGx | Lobet_2024 | not_relevant | 0 | 0 | The study analyzes the pharmacokinetics and pharmacodynamics of bevacizumab using target-mediated drug disposition models but does not report any analysis of gene variants, genotypes, or pharmacogenomic factors. |
| popPK | Park_2023 | irrelevant | 1 | 0 | This human exposure-response analysis reports no bevacizumab disposition parameters; its numeric values are exposure-response estimates. |
| popPK | Petitcollin_2021 | relevant | 10 | 2 | The paper is a population PK study of bevacizumab in humans, but the specific numeric parameter values (CL, V, Q) are not present in the text, likely residing in tables or figures not included in the evidence. |
| PGx | Petitcollin_2021 | not_relevant | 0 | 0 | The study investigates the pharmacokinetics of bevacizumab and trastuzumab but focuses on clinical covariates like body surface area and tumor SUV, containing no data on genetic variants or pharmacogenomic effects. |
| popPK | Peña-Cabia_2021 | irrelevant | 2 | 1 | This is an exposure-response study reporting only trough concentrations and clinical outcomes, with no derivation of pharmacokinetic parameters such as clearance or volume. |
| PGx | Peña-Cabia_2021 | not_relevant | 0 | 0 | The study evaluates the exposure-response relationship for bevacizumab but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Rietveld_2024 | irrelevant | 2 | 0 | Human bevacizumab exposure ratios are reported, but no quantitative disposition parameters are provided. |
| popPK | Rietveld_2024_2 | irrelevant | 0 | 0 | Bevacizumab is only co-administered; the reported PK parameters are for irinotecan and SN-38. |
| popPK | Rocchetti_2013 | irrelevant | 4 | 0 | The study focuses on PK-PD modeling of tumor growth in mice without reporting specific numerical PK disposition parameters (CL, V, t1/2) for bevacizumab. |
| PGx | Rocchetti_2013 | not_relevant | 0 | 0 | The paper describes preclinical PK-PD modeling in mice without any analysis of genetic variants or pharmacogenomic factors. |
| PGx | Turner_2014 | not_relevant | 0 | 0 | The paper investigates the impact of body composition (BMI percentile) on bevacizumab pharmacokinetics, but does not report on any gene variants, genotypes, or pharmacogenomic factors. |
| popPK | Wang_2014 | irrelevant | 0 | 0 | Bevacizumab is a comparator in binding and efficacy experiments, with no quantitative disposition or population-PK parameters reported. |
| popPK | Xin_2012 | irrelevant | 0 | 0 | The study focuses on the PK/PD of MNRP1685A, with bevacizumab serving only as a co-administered comparator for biomarker analysis rather than being the subject of the PK modeling. |
| PGx | Xin_2012 | not_relevant | 0 | 0 | The paper investigates the PK/PD of a novel anti-NRP1 antibody (MNRP1685A), not the pharmacogenomics of bevacizumab. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbevacizumab%5D&body=Drug%3A%20bevacizumab%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_bevacizumab/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-23 19:41 UTC</sub>
