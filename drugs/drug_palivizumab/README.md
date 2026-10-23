<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J06B&quot;,&quot;href&quot;:&quot;atc/J06B.md&quot;},{&quot;label&quot;:&quot;palivizumab&quot;}]"></div>

# palivizumab

- **generic name:** palivizumab
- **ATC codes:** `J06BD01`
- **DrugBank:** [DB00110](https://go.drugbank.com/drugs/DB00110) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Palivizumab is a monoclonal antibody used to help prevent serious respiratory syncytial virus infection, particularly in children at high risk such as those with heart or lung disease. It is an approved medicine and is authorised in the European Union, where it is used widely as a preventive treatment during the RSV season.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q412765](https://www.wikidata.org/wiki/Q412765) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [La_2013_reference](drugs/drug_palivizumab/Palivizumab_La2013_reference.md) | — | 1-compartment (no model) | 0 | La Via WV et al., Three monthly doses of palivizumab are…, Pulmonary pharmacology & th… (2013) | [10.1016/j.pupt.2013.03.007](https://doi.org/10.1016/j.pupt.2013.03.007) |
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub> | [Madhi_2025_reference](drugs/drug_palivizumab/Palivizumab_Madhi2025_reference.md) | — | 1-compartment (no model) | 2 | Madhi SA et al., A Phase 1b/2a Trial of a Half-life Exte…, The Journal of infectious d… (2025) | [10.1093/infdis/jiae581](https://doi.org/10.1093/infdis/jiae581) |
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Reuter_2019_reference](drugs/drug_palivizumab/Palivizumab_Reuter2019_reference.md) | — | nonlinear / manual (no model) | 0 | Reuter SE et al., Reducing Palivizumab Dose Requirements…, CPT: pharmacometrics & syst… (2019) | [10.1002/psp4.12364](https://doi.org/10.1002/psp4.12364) |
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub> | [Robbie_2012_reference](drugs/drug_palivizumab/Palivizumab_Robbie2012_reference.md) | — | 2-compartment (no model) | 7 (+3 cov.) | Robbie GJ et al., Population pharmacokinetics of palivizu…, Antimicrobial agents and ch… (2012) | [10.1128/AAC.06446-11](https://doi.org/10.1128/AAC.06446-11) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Broadbent_2020_TCID50](drugs/drug_palivizumab/pd_Broadbent_2020_TCID50.md) | apically released RSV titers ← palivizumab · direct sigmoid Emax (Hill) effect | — | Broadbent L et al., Comparative Therapeutic Potential of AL…, Antimicrobial agents and ch… (2020) | [10.1128/AAC.02034-19](https://doi.org/10.1128/AAC.02034-19) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=palivizumab).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: C1QA (activator), C1QB (activator), C1QC (activator), C1R (activator), FCGR1A (binder), FCGR2B (binder), FCGR3A (binder), FCGR3B (binder).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-22 13:37 | 25:48 | 0/4/0 | 1/0/0 | 0/0/0 | 540,970/44,285 | einfracz / qwen3.8-27b | 20 | 12/8 | 10/10 | 1 |

## Coverage

- **PubMed hits:** 49 matched, 33 returned
- **screened:** 8  ·  **relevant:** 2
- **records:** 4  ·  extracted 0  ·  needs_review 0  ·  rejected 4  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Anandhan_2023 | not_relevant | 0 | 0 | The paper focuses on in silico prediction of RSV vaccine epitopes and mentions palivizumab only as background context, without reporting any pharmacogenomic effects on PK/PD. |
| PD | Gazumyan_2000 | not_relevant | 0 | 0 | The paper is a review of novel small-molecule RSV inhibitors and does not report pharmacodynamic or exposure-response data for palivizumab. |
| popPK | Hu_2026 | irrelevant | 0 | 0 | The study focuses on the population pharmacokinetics of clesrovimab, not palivizumab, which is only mentioned as a historical comparator or for covariate modeling similarity. |
| PD | Hu_2026 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for clesrovimab, not palivizumab, and contains no pharmacodynamic (PD) or exposure-response modeling. |
| popPK | Huang_2017 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for the monoclonal antibody VRC01, not palivizumab. |
| PD | Huang_2017 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (popPK) analysis for VRC01, not palivizumab, and contains no pharmacodynamic or exposure-response modeling. |
| popPK | Johnson_2022 | irrelevant | 2 | 0 | This is a review of pediatric PBPK modeling trends; while it mentions a PBPK study for palivizumab (Basu et al.), it only reports AUC prediction/observed ratios (0.75-1.56) and does not provide original quantitative disposition parameters like CL, V, or Q for palivizumab itself. |
| PD | Johnson_2022 | not_relevant | 0 | 0 | The paper is a bibliometric review of pediatric PBPK modeling applications and does not report specific pharmacodynamic or exposure-response data for palivizumab. |
| PGx | Jorgensen_2023 | not_relevant | 0 | 0 | The paper is a review of nirsevimab and does not report pharmacogenomic effects on PK/PD parameters for palivizumab. |
| popPK | Kwon_2016 | irrelevant | 0 | 0 | The study investigates pharmacokinetics of HIV-1 antibody 10E8 variants, not palivizumab. |
| PD | Kwon_2016 | not_relevant | 0 | 0 | The paper focuses on the structural optimization and solubility of HIV-1 neutralizing antibody 10E8, not on the pharmacodynamics of palivizumab. |
| popPK | La_2013 | relevant | 7 | 2 | The paper utilizes a population PK model to simulate palivizumab concentrations and discusses PK behavior (2-compartment model, half-life), but specific numeric parameter estimates (CL, V) are not explicitly listed in the text or tables; the model details are cited from a previous study [32]. |
| popPK | Li_2021 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for the antibody VRC01, not palivizumub. |
| PD | Li_2021 | not_relevant | 0 | 0 | The paper focuses exclusively on population pharmacokinetics (PK) of VRC01 (not palivizumab) and uses a fixed target concentration (50 μg/mL) for simulations without modeling a pharmacodynamic (PD) response curve or estimating PD parameters like Emax or EC50. |
| popPK | Madhi_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of clesrovimab, not palivizumab, which is only mentioned as an existing prophylactic standard or exclusion criterion. |
| PD | Madhi_2025 | not_relevant | 3 | 2 | The paper reports PK and dose-dependent SNA titers/efficacy trends but does not provide a formal PD model or numeric PD parameters (e.g., EC50, Emax) linking exposure to effect. |
| PGx | McSweeney_2024 | not_relevant | 0 | 0 | The paper describes the development and efficacy of an inhaled RSV monoclonal antibody (Mota-MT) in animal models and does not report any pharmacogenomic effects of gene variants on the PK or PD of palivizumab. |
| popPK | Moreno-Galdó_2020 | irrelevant | 0 | 0 | This is an epidemiological cohort study examining respiratory morbidity and risk factors (including palivizumab prophylaxis as a covariate), and does not report any pharmacokinetic parameters (CL, V, t1/2) for palivizumab. |
| popPK | Perron_2015 | irrelevant | 0 | 0 | This study evaluates GS-5806 as a new antiviral and only mentions palivizumab as a standard comparator in in vitro assays, reporting no PK parameters for palivizumab. |
| PD | Perron_2015 | not_relevant | 0 | 0 | The paper focuses on the antiviral activity of GS-5806; palivizumab is only mentioned as a comparator or reference standard, and no pharmacodynamic or exposure-response data for palivizumab are reported. |
| PD | Phillips_2025 | not_relevant | 1 | 0 | The paper is a review of clesrovimab that only qualitatively mentions pharmacodynamics and efficacy compared to palivizumab, without providing any numeric PD parameters or exposure-response data. |
| PGx | Phillips_2025 | not_relevant | 0 | 0 | The paper discusses clesrovimab and compares it to palivizumab but does not report any pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| PD | Reuter_2019 | not_relevant | 0 | 0 | The paper performs a population PK simulation to optimize dosing regimens based on a minimum protective concentration threshold, but it does not model or report a pharmacodynamic (concentration-effect) relationship or numeric PD parameters (e.g., Emax, EC50). |
| PD | Robbie_2012 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for palivizumab but does not include any pharmacodynamic (PD) or exposure-response analysis, nor does it report numeric PD parameters. |
| PD | Shambaugh_2017 | not_relevant | 0 | 0 | The paper describes the development and validation of an in vitro microneutralization assay for RSV, not a pharmacokinetic or pharmacodynamic analysis of palivizumab in vivo. |
| popPK | Simões_2023 | irrelevant | 0 | 0 | The paper is a pooled efficacy analysis of nirsevimab, and while it mentions palivizumab as a comparator in the MEDLEY trial, it does not provide population pharmacokinetic parameters (clearance, volume, etc.) for palivizumab itself. |
| popPK | Wang_2015 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of small-molecule RSV polymerase inhibitors (compounds 2c and 71), while palivizumab is mentioned only as a background comparator in the introduction. |
| PD | Wang_2015 | not_relevant | 0 | 0 | The paper focuses on the discovery and characterization of a new small-molecule RSV polymerase inhibitor (ALS-8176) and does not report any pharmacodynamic or exposure-response analysis for palivizumab. |
| popPK | Wang_2016 | irrelevant | 2 | 2 | The study measures the PK of a novel Kv1.3 fusion protein (Syn-Vm24-CDR3L) in rats, using Palivizumab (Synagis) only as a scaffold/comparator, not as the subject drug for quantitative PK parameter estimation. |
| PGx | Wu_2007 | not_relevant | 0 | 0 | The paper focuses on the structural engineering and pharmacokinetics of a new antibody (motavizumab) and contains no information on genetic variants or pharmacogenomic effects. |
| PD | Xun_2021 | not_relevant | 0 | 0 | The paper focuses on the discovery and characterization of new single-domain antibodies (m17 and m35) against RSV, reporting their neutralization IC50 values, but does not provide any pharmacodynamic or exposure-response data for palivizumab. |
| PD | Yang_2026 | not_relevant | 0 | 0 | The paper focuses on the antiviral compound Rhein and only mentions palivizumab in the context of resistance mutations, providing no pharmacodynamic or exposure-response data for palivizumab. |
| PGx | Yang_2026 | not_relevant | 0 | 0 | The paper investigates the antiviral mechanism of Rhein, a novel compound, and does not report pharmacogenomic effects on the PK or PD parameters of palivizumab. |
| popPK | Yoneyama_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of emicizumab; palivizumab is only mentioned as a reference for a clearance maturation model, not as the subject drug. |
| PD | Yoneyama_2022 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics (PK) of emicizumab and dose selection based on exposure targets; it does not report a pharmacodynamic (PD) model or numeric PD parameters (e.g., Emax, EC50) for emicizumab, nor does it provide a PD analysis for palivizumab (which is only cited as a reference for a PK maturation function). |
| PGx | unknown_2023 | not_relevant | 0 | 0 | This is a clinical consensus statement on the diagnosis and treatment of cystic fibrosis that only mentions using palivizumab for RSV prevention without reporting any pharmacogenomic effects on its PK or PD. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-22 13:12 UTC</sub>
