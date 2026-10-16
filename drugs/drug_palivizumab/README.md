<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J06B&quot;,&quot;href&quot;:&quot;atc/J06B.md&quot;},{&quot;label&quot;:&quot;palivizumab&quot;}]"></div>

# palivizumab

- **generic name:** palivizumab
- **ATC codes:** `J06BD01`
- **DrugBank:** [DB00110](https://go.drugbank.com/drugs/DB00110) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Palivizumab is a monoclonal antibody used to help prevent serious respiratory syncytial virus infection, particularly in children at high risk such as those with heart or lung disease. It is an approved medicine and is authorised in the European Union, where it is used widely as a preventive treatment during the RSV season.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q412765](https://www.wikidata.org/wiki/Q412765) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 22:54 | 9:24 | 0/4/0 | 1/0/0 | 0/0/0 | 530,796/38,991 | einfracz / qwen3.8-27b | 20 | 12/8 | 10/10 | 1 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [La_2013_reference](drugs/drug_palivizumab/Palivizumab_La2013_reference.md) | — | 1-compartment (no model) | 0 | La Via WV et al., Three monthly doses of palivizumab are…, Pulmonary pharmacology & th… (2013) | [10.1016/j.pupt.2013.03.007](https://doi.org/10.1016/j.pupt.2013.03.007) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.727), gpt-oss:120b (not confirmed, agreement 0.7). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Madhi_2025_reference](drugs/drug_palivizumab/Palivizumab_Madhi2025_reference.md) | — | 1-compartment (no model) | 2 | Madhi SA et al., A Phase 1b/2a Trial of a Half-life Exte…, The Journal of infectious d… (2025) | [10.1093/infdis/jiae581](https://doi.org/10.1093/infdis/jiae581) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5), gpt-oss:120b (confirmed, agreement 1.0). Primary extraction retained.">cross-check: disputed 1/2</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Reuter_2019_reference](drugs/drug_palivizumab/Palivizumab_Reuter2019_reference.md) | — | nonlinear / manual (no model) | 0 | Reuter SE et al., Reducing Palivizumab Dose Requirements…, CPT: pharmacometrics & syst… (2019) | [10.1002/psp4.12364](https://doi.org/10.1002/psp4.12364) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.7), gpt-oss:120b (not confirmed, agreement 0.154). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Robbie_2012_reference](drugs/drug_palivizumab/Palivizumab_Robbie2012_reference.md) | — | 2-compartment (no model) | 7 (+3 cov.) | Robbie GJ et al., Population pharmacokinetics of palivizu…, Antimicrobial agents and ch… (2012) | [10.1128/AAC.06446-11](https://doi.org/10.1128/AAC.06446-11) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Broadbent_2020_RSV](drugs/drug_palivizumab/pd_Broadbent_2020_RSV.md) | viral titers ← palivizumab · direct Emax (saturable) effect | — | Broadbent L et al., Comparative Therapeutic Potential of AL…, Antimicrobial agents and ch… (2020) | [10.1128/AAC.02034-19](https://doi.org/10.1128/AAC.02034-19) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=palivizumab).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: C1QA (activator), C1QB (activator), C1QC (activator), C1R (activator), FCGR1A (binder), FCGR2B (binder), FCGR3A (binder), FCGR3B (binder).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 49 matched, 33 returned
- **screened:** 8  ·  **relevant:** 1
- **records:** 4  ·  extracted 0  ·  needs_review 0  ·  rejected 4  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Anandhan_2023 | not_relevant | 0 | 0 | The paper focuses on in silico prediction of T-cell epitopes for RSV vaccine design, not on pharmacogenomics of palivizumab. |
| PD | Gazumyan_2000 | not_relevant | 0 | 0 | The paper is a review of novel small-molecule RSV inhibitors and does not report pharmacodynamic or exposure-response data for palivizumab. |
| popPK | Hu_2026 | irrelevant | 0 | 0 | The paper reports population pharmacokinetic parameters for clesrovimab, not palivizumab; palivizumab is only mentioned as a comparator or for context regarding maturation models. |
| PD | Hu_2026 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for clesrovimab, not palivizumab, and contains no pharmacodynamic (PD) or exposure-response modeling. |
| popPK | Huang_2017 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for the drug VRC01 (an anti-HIV monoclonal antibody), not palivizumab. |
| PD | Huang_2017 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (popPK) analysis for VRC01, not palivizumab, and contains no pharmacodynamic or exposure-response modeling. |
| popPK | Johnson_2022 | irrelevant | 0 | 0 | The paper is a review of PBPK modeling applications; while palivizumab is mentioned as a case study for which AUC predictions were compared to observed data, no quantitative PK parameters (CL, V, Q, ka, half-life) for palivizumab are reported. |
| PD | Johnson_2022 | not_relevant | 0 | 0 | The paper is a bibliometric review of pediatric PBPK modeling applications and does not report specific pharmacodynamic or exposure-response data for palivizumab. |
| PGx | Jorgensen_2023 | not_relevant | 0 | 0 | The paper reviews nirsevimab's pharmacology and does not report pharmacogenomic effects on palivizumab. |
| popPK | Kwon_2016 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of HIV-1 neutralizing antibody 10E8, not palivizumab. |
| PD | Kwon_2016 | not_relevant | 0 | 0 | The paper focuses on the structural optimization and solubility of HIV-1 neutralizing antibody 10E8, not on the pharmacodynamics of palivizumab. |
| popPK | La_2013 | relevant | 7 | 2 | The paper uses a population PK model to simulate palivizumab concentrations, but specific quantitative PK parameter values (CL, V, etc.) are referenced from a previous publication (Ref 32) rather than listed in the text, which only provides concentration metrics (trough levels). |
| popPK | Li_2021 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of VRC01, a different drug, and contains no data or parameters for palivizumab. |
| PD | Li_2021 | not_relevant | 0 | 0 | The paper focuses exclusively on population pharmacokinetics (PK) of VRC01 (not palivizumab) and uses a fixed target concentration (50 μg/mL) for simulations without modeling a pharmacodynamic (PD) response curve or estimating PD parameters like Emax or EC50. |
| popPK | Madhi_2025 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of clesrovimab, not palivizumab (which is only mentioned as background/comparator). |
| PD | Madhi_2025 | not_relevant | 3 | 2 | The paper reports PK and dose-dependent SNA titers/efficacy trends but does not provide a formal PD model or numeric PD parameters (e.g., EC50, Emax) linking exposure to effect. |
| PGx | McSweeney_2024 | not_relevant | 0 | 0 | The paper reports on the efficacy of a novel inhalable anti-RSV antibody (Mota-MT) in animal models and does not report any pharmacogenomic effects (gene variants affecting PK/PD) for palivizumab. |
| popPK | Moreno-Galdó_2020 | irrelevant | 0 | 0 | This is a clinical epidemiological cohort study investigating respiratory outcomes (wheezing) in preterm infants; it mentions palivizumab use as a covariate but does not report any pharmacokinetic parameters for the drug. |
| popPK | Perron_2015 | irrelevant | 0 | 0 | The study is an in-vitro antiviral characterization of GS-5806, where palivizumab is used only as a comparator for resistance selection, and no pharmacokinetic parameters are reported. |
| PD | Perron_2015 | not_relevant | 0 | 0 | The paper focuses on the antiviral activity of GS-5806; palivizumab is only mentioned as a comparator or reference standard, and no pharmacodynamic or exposure-response data for palivizumab are reported. |
| PD | Phillips_2025 | not_relevant | 1 | 0 | The paper is a review of clesrovimab that only qualitatively mentions pharmacodynamics and efficacy compared to palivizumab, without providing any numeric PD parameters or exposure-response data. |
| PGx | Phillips_2025 | not_relevant | 0 | 0 | The paper reviews the clinical utility and PK/PD of clesrovimab (and briefly mentions palivizumab) but does not report any gene variant or genotype effects on drug parameters. |
| popPK | Reuter_2019 | relevant | 7 | 2 | The paper is a PK simulation study based on a population PK model for palivizumab, and the model structure with starting parameters (0,198,) is present in the supplement, but the actual estimated typical values for CL, V, etc., are not explicitly provided as numeric results. |
| PD | Reuter_2019 | not_relevant | 0 | 0 | The paper performs a population PK simulation to optimize dosing regimens based on a minimum protective concentration threshold, but it does not model or report a pharmacodynamic (concentration-effect) relationship or numeric PD parameters (e.g., Emax, EC50). |
| PD | Robbie_2012 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for palivizumab but does not include any pharmacodynamic (PD) or exposure-response analysis, nor does it report numeric PD parameters. |
| PD | Shambaugh_2017 | not_relevant | 0 | 0 | The paper describes the development and validation of an in vitro microneutralization assay for RSV, not a pharmacokinetic or pharmacodynamic analysis of palivizumab in vivo. |
| popPK | Simões_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and efficacy of nirsevimab; palivizumab is only mentioned as a comparator in the MEDLEY trial and for background context, with no PK parameters reported for palivizumab. |
| popPK | Wang_2015 | irrelevant | 0 | 0 | The study focuses on the development of small-molecule nucleoside RSV inhibitors (e.g., ALS-8176) and only mentions palivizumab in the introduction as context for existing prophylaxis without reporting any pharmacokinetic parameters for it. |
| PD | Wang_2015 | not_relevant | 0 | 0 | The paper focuses on the discovery and characterization of a new small-molecule RSV polymerase inhibitor (ALS-8176) and does not report any pharmacodynamic or exposure-response analysis for palivizumab. |
| popPK | Wang_2016 | irrelevant | 0 | 0 | The study focuses on novel antibody-toxin fusion proteins (e.g., Syn-Vm24-CDR3L) as Kv1.3 inhibitors, not on the pharmacokinetics of palivizumab (Synagis) as a clinical drug; Synagis is only used as a structural scaffold. |
| PGx | Wu_2007 | not_relevant | 0 | 0 | The paper reports on the development of a new antibody (motavizumab) and its protein engineering, not on pharmacogenomic effects of gene variants on palivizumab's PK/PD. |
| PD | Xun_2021 | not_relevant | 0 | 0 | The paper focuses on the discovery and characterization of new single-domain antibodies (m17 and m35) against RSV, reporting their neutralization IC50 values, but does not provide any pharmacodynamic or exposure-response data for palivizumab. |
| PD | Yang_2026 | not_relevant | 0 | 0 | The paper focuses on the antiviral compound Rhein and only mentions palivizumab in the context of resistance mutations, providing no pharmacodynamic or exposure-response data for palivizumab. |
| PGx | Yang_2026 | not_relevant | 0 | 0 | The paper reports on Rhein as an antiviral inhibitor of RSV, with no data on gene variants affecting the PK or PD of palivizumab. |
| popPK | Yoneyama_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of emicizumab; palivizumab is mentioned only as a reference for a clearance maturation function and is not the subject of the PK analysis. |
| PD | Yoneyama_2022 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics (PK) of emicizumab and dose selection based on exposure targets; it does not report a pharmacodynamic (PD) model or numeric PD parameters (e.g., Emax, EC50) for emicizumab, nor does it provide a PD analysis for palivizumab (which is only cited as a reference for a PK maturation function). |
| PGx | unknown_2023 | not_relevant | 0 | 0 | The paper is a clinical consensus statement for cystic fibrosis and only suggests the use of palivizumab for RSV prevention; it does not report any pharmacogenomic data or effect of gene variants on the PK/PD of palivizumab. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 22:45 UTC</sub>
