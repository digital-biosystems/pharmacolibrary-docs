<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V09F&quot;,&quot;href&quot;:&quot;atc/V09F.md&quot;},{&quot;label&quot;:&quot;sodium iodide (131I)&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;SodiumIodide131i_Ly2023_reference&quot;,&quot;label&quot;:&quot;Ly_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sodium_iodide_131i/SodiumIodide131i_Ly2023_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false}]"></div>

# sodium iodide (131I)

- **generic name:** sodium iodide (131I)
- **ATC codes:** `V09FX03`, `V10XA01`
- **DrugBank:** [DB09293](https://go.drugbank.com/drugs/DB09293) · **PubChem:** [CID 167195](https://pubchem.ncbi.nlm.nih.gov/compound/167195)
- **molar mass:** 130.9067 g/mol (I) — DrugBank
- **groups:** approved, investigational

## About

Sodium iodide 131I is a radiopharmaceutical used for diagnosing and treating thyroid conditions. It is usually given as an oral capsule or an intravenous solution. It is an approved agent with ongoing investigational studies.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q27259563](https://www.wikidata.org/wiki/Q27259563), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| sodium_iodide_131i | metabolite | 130.907 | I | DrugBank | [167195](https://pubchem.ncbi.nlm.nih.gov/compound/167195) | Hardiansyah_2025 |

## Start here

> **Ly_2023_reference** — <span class="pk-badge pk-badge--blue">Simulated</span> review reference. [Run it in the simulator](drugs/drug_sodium_iodide_131i/SodiumIodide131i_Ly2023_reference.md?tab=Simulation) · [record](drugs/drug_sodium_iodide_131i/SodiumIodide131i_Ly2023_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Simulated" data-sim="yes"></span><span class="pk-badge pk-badge--blue">Simulated</span> | [Ly_2023_reference](drugs/drug_sodium_iodide_131i/SodiumIodide131i_Ly2023_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Ly NS et al., Population Pharmacokinetics and Exposur…, Clinical pharmacokinetics (2023) | [10.1007/s40262-023-01210-0](https://doi.org/10.1007/s40262-023-01210-0) |
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q67, Q68 — no SI value to build from</sub> | [Hardiansyah_2025_reference](drugs/drug_sodium_iodide_131i/SodiumIodide131i_Hardiansyah2025_reference.md) | — | 1-compartment (no model) | 3 | Hardiansyah D et al., Non-linear mixed-effects modelling and…, EJNMMI physics (2025) | [10.1186/s40658-025-00735-6](https://doi.org/10.1186/s40658-025-00735-6) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Fusella_2026_T_g](drugs/drug_sodium_iodide_131i/pd_Fusella_2026_T_g.md) | serum thyroglobulin ← radioactive iodine activity · disease-progression model | — | Fusella Giuntini M et al., A computational framework for optimizin…, Scientific reports (2026) | [10.1038/s41598-026-56267-1](https://doi.org/10.1038/s41598-026-56267-1) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Topić_2021_131I_therapy_response_in_patients_with_benign_thyroid_disease](drugs/drug_sodium_iodide_131i/pd_Topi_2021_131I_therapy_response_in_patients_with_benign_thyr.md) | 131I therapy response in patients with benign thyroid disease ← sodium_iodide_131i · categorical (graded) response model | — | Topić Vučenović V et al., Population exposure-response model of, European journal of pharmac… (2021) | [10.1016/j.ejps.2021.105942](https://doi.org/10.1016/j.ejps.2021.105942) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 04:37 | 0:12 | 2/0/0 | 2/0/0 | 0/0/0 | 6,132/1,487 | einfracz / qwen3.8-27b | 9 | 1/8 | 8/1 | 0 |

## Coverage

- **PubMed hits:** 58 matched, 19 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 2  ·  extracted 1  ·  needs review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Dong_2002 | irrelevant | 0 | 0 | The study describes the synthesis and receptor binding properties of a secretin analogue, not the pharmacokinetics of sodium iodide I-131. |
| PGx | Dong_2002 | not_relevant | 0 | 0 | The paper describes the development of a radioiodinated secretin analogue for photoaffinity labeling and does not involve pharmacogenomics or sodium iodide 131i. |
| popPK | Fusella_2026 | irrelevant | 1 | 0 | This is a mechanistic pharmacodynamic model of tumor response and thyroglobulin kinetics, not a study reporting pharmacokinetic disposition parameters (CL, V, ka, etc.) for sodium iodide I-131. |
| PGx | Fusella_2026 | not_relevant | 0 | 0 | The paper presents a pharmacokinetic/pharmacodynamic model for radioiodine therapy protocol optimization but does not report any pharmacogenomic effects or associations with gene variants/genotypes. |
| popPK | Gupta_2016 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of lenvatinib, not sodium iodide 131i. |
| PGx | Gupta_2016 | not_relevant | 0 | 0 | The paper analyzes the pharmacokinetics of lenvatinib, not sodium_iodide_131i, and does not report pharmacogenomic effects. |
| popPK | Hayato_2018 | irrelevant | 0 | 0 | The study models lenvatinib in human patients and reports no pharmacokinetic parameters for sodium_iodide_131i. |
| popPK | Hays_1985 | irrelevant | 2 | 0 | The study focuses on radiation dosimetry of radioiodinated thyroid hormones (T3/T4) rather than the disposition of sodium iodide 131i as a therapeutic/diagnostic agent, and it provides no quantitative PK parameters (CL, V, Q) for sodium iodide. |
| PGx | Hays_1985 | not_relevant | 0 | 0 | The paper describes a physiologically based pharmacokinetic model for radiation dosimetry using iodine isotopes but does not report any pharmacogenomic effects or genotype-phenotype associations. |
| popPK | Latia_2026 | irrelevant | 0 | 0 | This human thyroid cancer imaging case series reports radioiodine treatment activity, not sodium_iodide_131i pharmacokinetic parameters. |
| popPK | Louis_2024 | relevant | 8 | 0 | The paper develops a multi-compartment biokinetic model for I-131 in humans, but the specific numeric transfer coefficients or clearance values are not present in the provided evidence text. |
| PGx | Louis_2024 | not_relevant | 0 | 0 | The paper discusses radiation protection and biokinetic modeling for patients with end-stage renal disease, but does not report on pharmacogenomic variants or their effects on PK/PD parameters. |
| popPK | Ly_2023 | irrelevant | 0 | 0 | The reported population-PK parameters are for cabozantinib, not sodium_iodide_131i. |
| popPK | Majid_2024 | irrelevant | 0 | 0 | The paper reports population pharmacokinetic parameters for lenvatinib, not for sodium_iodide_131i. |
| PGx | Majid_2024 | not_relevant | 0 | 0 | The paper investigates the PK/PD of lenvatinib in thyroid cancer, not sodium iodide 131i, and does not report pharmacogenomic effects. |
| popPK | Menzel_2024 | irrelevant | 0 | 0 | This study reports clinical outcomes after radioiodine treatment in cats, not pharmacokinetic disposition parameters. |
| popPK | Reinfelder_2011 | irrelevant | 1 | 0 | The study focuses on the stimulation of radioiodine uptake by TSH analogs in FRTL-5 cells and mice, not on the population-pharmacokinetic parameters (CL, V, etc.) of sodium iodide 131I as a drug. |
| PGx | Reinfelder_2011 | not_relevant | 0 | 0 | The paper reports on pharmacological stimulation of radioiodide uptake by TSH analogs, not the effect of a gene variant on the PK/PD of sodium iodide 131I. |
| popPK | Shinohara_2018 | irrelevant | 0 | 0 | The paper is a Monte Carlo radiation dosimetry simulation study of I-131 labeled MIBG, not a pharmacokinetic study, and does not report PK parameters (CL, V, etc.) for sodium iodide I-131. |
| PGx | Shinohara_2018 | not_relevant | 0 | 0 | The paper discusses dosimetry and dose distribution of radiolabeled compounds in cell models but does not report pharmacogenomic effects on PK/PD parameters. |
| popPK | Tamai_2017 | irrelevant | 0 | 0 | The paper reports population PK parameters for lenvatinib, not sodium_iodide_131i. |
| PGx | Tamai_2017 | not_relevant | 0 | 0 | The study focuses on lenvatinib in hepatocellular carcinoma and does not involve sodium_iodide_131i or report pharmacogenomic effects. |
| popPK | Topić_2021 | irrelevant | 2 | 0 | The study is a population exposure-response analysis focusing on efficacy (treatment outcome probability) and absorbed dose metrics, not pharmacokinetic disposition parameters (CL, V, half-life) for the subject drug. |
| PGx | Topić_2021 | not_relevant | 0 | 0 | The paper models the pharmacodynamic response of radioactive iodine therapy as a function of clinical covariates (like thyroid volume and absorbed dose), but it does not report the influence of any specific gene variant, genotype, or pharmacogenomic phenotype on the PK or PD parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsodium_iodide_131i%5D&body=Drug%3A%20sodium_iodide_131i%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_sodium_iodide_131i/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-10-07 19:53 UTC</sub>
