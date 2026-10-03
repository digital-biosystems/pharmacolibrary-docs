<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J06B&quot;,&quot;href&quot;:&quot;atc/J06B.md&quot;},{&quot;label&quot;:&quot;palivizumab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Palivizumab_Li2021_reference&quot;,&quot;label&quot;:&quot;Li_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_palivizumab/Palivizumab_Li2021_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# palivizumab

- **generic name:** palivizumab
- **ATC codes:** `J06BD01`
- **DrugBank:** [DB00110](https://go.drugbank.com/drugs/DB00110) · **PubChem:** not captured
- **groups:** approved, investigational

## About

**Description.** Humanized monoclonal antibody (IgG1k) produced by recombinant DNA technology, directed to an epitope in the A antigenic site of the F protein of respiratory syncytial virus (RSV). Synagis is a composite of human (95%) and murine (5%) antibody sequences. The human heavy chain sequence was derived from the constant domains of human IgG1 and the variable framework regions of the VH genes Cor (1) and Cess (2). The human lightchain sequence was derived from the constant domain of Ck and the variable framework regions of the VL gene K104 withJk-4. Palivizumab is expressed from a stable murine (mouse) myeloma cell line (NS0). Palivizumab is composed of to heavy chains (50.6 kDa each) and two light chains (27.6 kDa each), contains 1-2% carbohydrate by weight and has a molecular weight of 147.7 kDa +/- 1 kDa (MALDI-TOF)

**Indication.** For prophylaxis of respiratory diseases casued by respiratory syncytial virus.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-01 16:58 | 25:53 | 1/4/0 | 1/0/0 | 0/0/0 | 552,162/63,993 | ollama / qwen3.8:27b-mtp-q8_0 | 20 | 12/8 | 10/10 | 1 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Li_2021_reference](drugs/drug_palivizumab/Palivizumab_Li2021_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Li J et al., Model Informed Development of VRC01 in…, Clinical pharmacology and t… (2021) | [10.1002/cpt.2026](https://doi.org/10.1002/cpt.2026) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Huang_2017_reference](drugs/drug_palivizumab/Palivizumab_Huang2017_reference.md) | — | 2-compartment (no model) | 3 | Huang Y et al., Population pharmacokinetics analysis of…, mAbs (2017) | [10.1080/19420862.2017.1311435](https://doi.org/10.1080/19420862.2017.1311435) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.7). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Madhi_2025_reference](drugs/drug_palivizumab/Palivizumab_Madhi2025_reference.md) | — | 1-compartment (no model) | 2 | Madhi SA et al., A Phase 1b/2a Trial of a Half-life Exte…, The Journal of infectious d… (2025) | [10.1093/infdis/jiae581](https://doi.org/10.1093/infdis/jiae581) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Reuter_2019_reference](drugs/drug_palivizumab/Palivizumab_Reuter2019_reference.md) | — | nonlinear / manual (no model) | 0 | Reuter SE et al., Reducing Palivizumab Dose Requirements…, CPT: pharmacometrics & syst… (2019) | [10.1002/psp4.12364](https://doi.org/10.1002/psp4.12364) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.154). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Robbie_2012_reference](drugs/drug_palivizumab/Palivizumab_Robbie2012_reference.md) | — | 2-compartment (no model) | 5 | Robbie GJ et al., Population pharmacokinetics of palivizu…, Antimicrobial agents and ch… (2012) | [10.1128/AAC.06446-11](https://doi.org/10.1128/AAC.06446-11) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by openai:gpt-6-luna (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Broadbent_2020_TCID50_AUC](drugs/drug_palivizumab/pd_Broadbent_2020_TCID50_AUC.md) | Infectious RSV titer (area under the curve of TCID50 over time) ← palivizumab · direct sigmoid Emax (Hill) effect | — | Broadbent L et al., Comparative Therapeutic Potential of AL…, Antimicrobial agents and ch… (2020) | [10.1128/AAC.02034-19](https://doi.org/10.1128/AAC.02034-19) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=palivizumab) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: C1QA (activator), C1QB (activator), C1QC (activator), C1R (activator), FCGR1A (binder), FCGR2B (binder), FCGR3A (binder), FCGR3B (binder).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 49 matched, 33 returned
- **screened:** 7  ·  **relevant:** 2
- **records:** 5  ·  extracted 1  ·  needs_review 0  ·  rejected 4  ·  stale 4
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Anandhan_2023 | not_relevant | 0 | 0 | The paper focuses on in silico prediction of RSV vaccine epitopes and does not report pharmacogenomic effects on the PK or PD of palivizumab. |
| PD | Gazumyan_2000 | not_relevant | 0 | 0 | The paper is a review of novel small-molecule RSV inhibitors and does not report pharmacodynamic or exposure-response data for palivizumab. |
| popPK | Hu_2026 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for clesrovimab, not palivizumab, which is only mentioned as a comparator or historical context. |
| PD | Hu_2026 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for clesrovimab, not palivizumab, and contains no pharmacodynamic (PD) or exposure-response modeling. |
| popPK | Huang_2017 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for the drug VRC01, not palivizumab. |
| PD | Huang_2017 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (popPK) analysis for VRC01, not palivizumab, and contains no pharmacodynamic or exposure-response modeling. |
| popPK | Johnson_2022 | irrelevant | 0 | 0 | The paper is a review of pediatric PBPK modeling applications and only briefly mentions palivizumab as a case study without reporting original quantitative PK parameters for it. |
| PD | Johnson_2022 | not_relevant | 0 | 0 | The paper is a bibliometric review of pediatric PBPK modeling applications and does not report specific pharmacodynamic or exposure-response data for palivizumab. |
| PGx | Jorgensen_2023 | not_relevant | 0 | 0 | The paper reviews the pharmacology and PK of nirsevimab and mentions palivizumab only as a comparator, but does not report any pharmacogenomic effects on PK or PD parameters. |
| popPK | Kwon_2016 | irrelevant | 0 | 0 | The study focuses on the solubility and bioavailability of HIV-1 neutralizing antibody 10E8, not the pharmacokinetics of palivizumab. |
| PD | Kwon_2016 | not_relevant | 0 | 0 | The paper focuses on the structural optimization and solubility of HIV-1 neutralizing antibody 10E8, not on the pharmacodynamics of palivizumab. |
| popPK | La_2013 | relevant | 8 | 2 | The paper uses a population PK model for palivizumab and reports observed trough concentrations and half-life, but the specific quantitative model parameters (CL, V, Q) are in a referenced external study [32] or figures not provided. |
| popPK | Li_2021 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for VRC01, not palivizumab. |
| PD | Li_2021 | not_relevant | 0 | 0 | The paper focuses exclusively on population pharmacokinetics (PK) of VRC01 (not palivizumab) and uses a fixed target concentration (50 μg/mL) for simulations without modeling a pharmacodynamic (PD) response curve or estimating PD parameters like Emax or EC50. |
| popPK | Madhi_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of clesrovimab, not palivizumab, which is only mentioned as a comparator or exclusion criterion. |
| PD | Madhi_2025 | not_relevant | 3 | 2 | The paper reports PK and dose-dependent SNA titers/efficacy trends but does not provide a formal PD model or numeric PD parameters (e.g., EC50, Emax) linking exposure to effect. |
| PGx | McSweeney_2024 | not_relevant | 0 | 0 | The paper reports on the efficacy of an inhaled monoclonal antibody (Mota-MT) for RSV treatment and compares it to palivizumab, but it does not investigate the impact of gene variants or genotypes on the pharmacokinetics or pharmacodynamics of palivizumab. |
| popPK | Moreno-Galdó_2020 | irrelevant | 0 | 0 | The study is an epidemiological cohort analysis of respiratory morbidity in preterm infants where palivizumab is only a covariate for prophylaxis, not a subject of pharmacokinetic analysis. |
| popPK | Perron_2015 | irrelevant | 0 | 0 | The paper is an in-vitro antiviral study of GS-5806 where palivizumab is used only as a comparator agent, with no pharmacokinetic parameters reported. |
| PD | Perron_2015 | not_relevant | 0 | 0 | The paper focuses on the antiviral activity of GS-5806; palivizumab is only mentioned as a comparator or reference standard, and no pharmacodynamic or exposure-response data for palivizumab are reported. |
| PD | Phillips_2025 | not_relevant | 1 | 0 | The paper is a review of clesrovimab that only qualitatively mentions pharmacodynamics and efficacy compared to palivizumab, without providing any numeric PD parameters or exposure-response data. |
| PGx | Phillips_2025 | not_relevant | 0 | 0 | The paper discusses the pharmacokinetics and efficacy of clesrovimab and compares it to palivizumab, but it does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PD | Reuter_2019 | not_relevant | 0 | 0 | The paper performs a population PK simulation to optimize dosing regimens based on a minimum protective concentration threshold, but it does not model or report a pharmacodynamic (concentration-effect) relationship or numeric PD parameters (e.g., Emax, EC50). |
| PD | Robbie_2012 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for palivizumab but does not include any pharmacodynamic (PD) or exposure-response analysis, nor does it report numeric PD parameters. |
| PD | Shambaugh_2017 | not_relevant | 0 | 0 | The paper describes the development and validation of an in vitro microneutralization assay for RSV, not a pharmacokinetic or pharmacodynamic analysis of palivizumab in vivo. |
| popPK | Simões_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and efficacy of nirsevimab, with palivizumab serving only as a comparator in the MEDLEY trial, and no PK parameters for palivizumab are reported. |
| popPK | Wang_2015 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of novel small-molecule RSV nucleoside inhibitors (e.g., compound 2c and prodrug 71), while palivizumab is only mentioned in the introduction as background context for RSV prophylaxis. |
| PD | Wang_2015 | not_relevant | 0 | 0 | The paper focuses on the discovery and characterization of a new small-molecule RSV polymerase inhibitor (ALS-8176) and does not report any pharmacodynamic or exposure-response analysis for palivizumab. |
| popPK | Wang_2016 | irrelevant | 0 | 0 | The study focuses on a novel Kv1.3 inhibitor fusion protein (Syn-Vm24-CDR3L) where palivizumab (Synagis) is used only as a scaffold/comparator, and no PK parameters for palivizumab itself are reported. |
| PGx | Wu_2007 | not_relevant | 0 | 0 | The paper describes the development of a new antibody (motavizumab) and its PK/PD properties compared to palivizumab, but does not report any pharmacogenomic effects (gene variants) on these parameters. |
| PD | Xun_2021 | not_relevant | 0 | 0 | The paper focuses on the discovery and characterization of new single-domain antibodies (m17 and m35) against RSV, reporting their neutralization IC50 values, but does not provide any pharmacodynamic or exposure-response data for palivizumab. |
| PD | Yang_2026 | not_relevant | 0 | 0 | The paper focuses on the antiviral compound Rhein and only mentions palivizumab in the context of resistance mutations, providing no pharmacodynamic or exposure-response data for palivizumab. |
| PGx | Yang_2026 | not_relevant | 0 | 0 | The paper investigates the antiviral mechanism of Rhein against RSV and does not report any pharmacogenomic effects on the PK or PD of palivizumab. |
| popPK | Yoneyama_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of emicizumab, using palivizumab only as a reference for a clearance maturation function without reporting original quantitative PK parameters for palivizumab. |
| PD | Yoneyama_2022 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics (PK) of emicizumab and dose selection based on exposure targets; it does not report a pharmacodynamic (PD) model or numeric PD parameters (e.g., Emax, EC50) for emicizumab, nor does it provide a PD analysis for palivizumab (which is only cited as a reference for a PK maturation function). |
| PGx | unknown_2023 | not_relevant | 0 | 0 | The paper is a clinical consensus statement for cystic fibrosis and does not report pharmacogenomic effects on the PK/PD of palivizumab. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-01 16:35 UTC</sub>
