<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J06B&quot;,&quot;href&quot;:&quot;atc/J06B.md&quot;},{&quot;label&quot;:&quot;palivizumab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Palivizumab_Huang2017_reference&quot;,&quot;label&quot;:&quot;Huang_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_palivizumab/Palivizumab_Huang2017_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Palivizumab_Li2021_reference&quot;,&quot;label&quot;:&quot;Li_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_palivizumab/Palivizumab_Li2021_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

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
| 2026-10-07 14:51 | 9:15 | 2/3/1 | 1/0/0 | 0/0/0 | 495,957/37,796 | einfracz / qwen3.8-27b | 20 | 12/8 | 10/10 | 1 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.833). The first reading is what the record holds.">cross-check: disputed</span> | [Huang_2017_reference](drugs/drug_palivizumab/Palivizumab_Huang2017_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Huang Y et al., Population pharmacokinetics analysis of…, mAbs (2017) | [10.1080/19420862.2017.1311435](https://doi.org/10.1080/19420862.2017.1311435) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Li_2021_reference](drugs/drug_palivizumab/Palivizumab_Li2021_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Li J et al., Model Informed Development of VRC01 in…, Clinical pharmacology and t… (2021) | [10.1002/cpt.2026](https://doi.org/10.1002/cpt.2026) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.154). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Robbie_2012_reference](drugs/drug_palivizumab/Palivizumab_Robbie2012_reference.md) | — | 2-compartment (no model) | 5 | Robbie GJ et al., Population pharmacokinetics of palivizu…, Antimicrobial agents and ch… (2012) | [10.1128/AAC.06446-11](https://doi.org/10.1128/AAC.06446-11) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [La_2013_reference](drugs/drug_palivizumab/Palivizumab_La2013_reference.md) | — | 1-compartment (no model) | 0 | La Via WV et al., Three monthly doses of palivizumab are…, Pulmonary pharmacology & th… (2013) | [10.1016/j.pupt.2013.03.007](https://doi.org/10.1016/j.pupt.2013.03.007) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.7). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Madhi_2025_reference](drugs/drug_palivizumab/Palivizumab_Madhi2025_reference.md) | — | 1-compartment (no model) | 2 | Madhi SA et al., A Phase 1b/2a Trial of a Half-life Exte…, The Journal of infectious d… (2025) | [10.1093/infdis/jiae581](https://doi.org/10.1093/infdis/jiae581) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Reuter_2019_reference](drugs/drug_palivizumab/Palivizumab_Reuter2019_reference.md) | — | nonlinear / manual (no model) | 0 | Reuter SE et al., Reducing Palivizumab Dose Requirements…, CPT: pharmacometrics & syst… (2019) | [10.1002/psp4.12364](https://doi.org/10.1002/psp4.12364) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Broadbent_2020_TCID50](drugs/drug_palivizumab/pd_Broadbent_2020_TCID50.md) | apically released RSV titers ← palivizumab · direct sigmoid Emax (Hill) effect | — | Broadbent L et al., Comparative Therapeutic Potential of AL…, Antimicrobial agents and ch… (2020) | [10.1128/AAC.02034-19](https://doi.org/10.1128/AAC.02034-19) |

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
- **screened:** 8  ·  **relevant:** 2
- **records:** 6  ·  extracted 2  ·  needs_review 1  ·  rejected 3  ·  stale 4
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Anandhan_2023 | not_relevant | 0 | 0 | The paper focuses on in silico prediction of cytotoxic T cell epitopes for RSV vaccine design and does not report pharmacogenomic effects on the PK or PD parameters of palivizumab. |
| PD | Gazumyan_2000 | not_relevant | 0 | 0 | The paper is a review of novel small-molecule RSV inhibitors and does not report pharmacodynamic or exposure-response data for palivizumab. |
| popPK | Hu_2026 | irrelevant | 0 | 0 | The paper reports population PK parameters for clesrovimab, not palivizumab, which is only mentioned as a historical context or comparator for maturation models. |
| PD | Hu_2026 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for clesrovimab, not palivizumab, and contains no pharmacodynamic (PD) or exposure-response modeling. |
| popPK | Huang_2017 | irrelevant | 0 | 0 | The paper reports population PK parameters for the drug VRC01 (an anti-HIV monoclonal antibody), not for the target drug palivizumab (which is only mentioned as a precedent in the discussion). |
| PD | Huang_2017 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (popPK) analysis for VRC01, not palivizumab, and contains no pharmacodynamic or exposure-response modeling. |
| popPK | Johnson_2022 | irrelevant | 1 | 0 | The paper is a review of PBPK modeling trends and only briefly cites a specific study (Basu et al.) that modeled palivizumab, but does not provide original quantitative disposition parameters (CL, V, etc.) for the drug itself. |
| PD | Johnson_2022 | not_relevant | 0 | 0 | The paper is a bibliometric review of pediatric PBPK modeling applications and does not report specific pharmacodynamic or exposure-response data for palivizumab. |
| PGx | Jorgensen_2023 | not_relevant | 0 | 0 | The paper discusses the pharmacology and pharmacokinetics of nirsevimab (and palivizumab), but does not report any pharmacogenomic effects on a PK or PD parameter for palivizumab. |
| popPK | Kwon_2016 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of HIV-1 neutralizing antibody 10E8 variants, not palivizumab. |
| PD | Kwon_2016 | not_relevant | 0 | 0 | The paper focuses on the structural optimization and solubility of HIV-1 neutralizing antibody 10E8, not on the pharmacodynamics of palivizumab. |
| popPK | Li_2021 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of the antibody VRC01, not the drug palivizumab. |
| PD | Li_2021 | not_relevant | 0 | 0 | The paper focuses exclusively on population pharmacokinetics (PK) of VRC01 (not palivizumab) and uses a fixed target concentration (50 μg/mL) for simulations without modeling a pharmacodynamic (PD) response curve or estimating PD parameters like Emax or EC50. |
| popPK | Madhi_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of clesrovimab, not palivizumab, which is only mentioned as a comparator in the background. |
| PD | Madhi_2025 | not_relevant | 3 | 2 | The paper reports PK and dose-dependent SNA titers/efficacy trends but does not provide a formal PD model or numeric PD parameters (e.g., EC50, Emax) linking exposure to effect. |
| PGx | McSweeney_2024 | not_relevant | 0 | 0 | The paper evaluates the PK/PD of a novel monoclonal antibody (Mota-MT) in animal models and does not investigate how human gene variants affect the pharmacokinetics or pharmacodynamics of palivizumab. |
| popPK | Moreno-Galdó_2020 | irrelevant | 0 | 0 | The study is an epidemiological cohort analysis of respiratory morbidity and palivizumab's protective effect on wheezing incidence, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Perron_2015 | irrelevant | 0 | 0 | The paper is an in-vitro antiviral study of GS-5806 and other RSV inhibitors, with palivizumab used only as a comparator agent for susceptibility testing; no pharmacokinetic parameters for palivizumab are reported. |
| PD | Perron_2015 | not_relevant | 0 | 0 | The paper focuses on the antiviral activity of GS-5806; palivizumab is only mentioned as a comparator or reference standard, and no pharmacodynamic or exposure-response data for palivizumab are reported. |
| PD | Phillips_2025 | not_relevant | 1 | 0 | The paper is a review of clesrovimab that only qualitatively mentions pharmacodynamics and efficacy compared to palivizumab, without providing any numeric PD parameters or exposure-response data. |
| PGx | Phillips_2025 | not_relevant | 0 | 0 | The paper discusses the clinical utility and PK of clesrovimab and does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Reuter_2019 | relevant | 6 | 2 | The study applies an existing population PK model to design dose regimens and reports the model structure with initial bounds in the supplementary material, but does not report the final estimated quantitative parameter values (CL, V, etc.) derived from the original data. |
| PD | Reuter_2019 | not_relevant | 0 | 0 | The paper performs a population PK simulation to optimize dosing regimens based on a minimum protective concentration threshold, but it does not model or report a pharmacodynamic (concentration-effect) relationship or numeric PD parameters (e.g., Emax, EC50). |
| PD | Robbie_2012 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for palivizumab but does not include any pharmacodynamic (PD) or exposure-response analysis, nor does it report numeric PD parameters. |
| PD | Shambaugh_2017 | not_relevant | 0 | 0 | The paper describes the development and validation of an in vitro microneutralization assay for RSV, not a pharmacokinetic or pharmacodynamic analysis of palivizumab in vivo. |
| popPK | Simões_2023 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of nirsevimab, with palivizumab mentioned only as a comparator or background context, and no quantitative PK parameters for palivizumab are reported. |
| popPK | Wang_2015 | irrelevant | 0 | 0 | The paper studies small molecule RSV nucleoside inhibitors (e.g., ALS-8176), and palivizumab is only mentioned as background for RSV prophylaxis with no pharmacokinetic data reported. |
| PD | Wang_2015 | not_relevant | 0 | 0 | The paper focuses on the discovery and characterization of a new small-molecule RSV polymerase inhibitor (ALS-8176) and does not report any pharmacodynamic or exposure-response analysis for palivizumab. |
| popPK | Wang_2016 | irrelevant | 0 | 0 | The study uses palivizumab (Synagis) only as a protein engineering scaffold to create a novel Kv1.3 inhibitor fusion, and the reported pharmacokinetic data (half-life) pertains to the new fusion protein in rats, not palivizumab itself. |
| PGx | Wu_2007 | not_relevant | 0 | 0 | The paper reports on the engineering of a new antibody (motavizumab) and its efficacy in animal models, with no data on human genetic variants affecting pharmacokinetics or pharmacodynamics. |
| PD | Xun_2021 | not_relevant | 0 | 0 | The paper focuses on the discovery and characterization of new single-domain antibodies (m17 and m35) against RSV, reporting their neutralization IC50 values, but does not provide any pharmacodynamic or exposure-response data for palivizumab. |
| PD | Yang_2026 | not_relevant | 0 | 0 | The paper focuses on the antiviral compound Rhein and only mentions palivizumab in the context of resistance mutations, providing no pharmacodynamic or exposure-response data for palivizumab. |
| PGx | Yang_2026 | not_relevant | 0 | 0 | The paper reports the antiviral efficacy and pharmacokinetics of a small molecule inhibitor (Rhein) for RSV, containing no data on gene variants affecting palivizumab. |
| popPK | Yoneyama_2022 | irrelevant | 1 | 0 | The study is a population PK modeling study for emicizumab (a bispecific antibody for hemophilia A), not palivizumab; palivizumab is only mentioned as a reference for a clearance maturation function, with no quantitative PK parameters reported for it. |
| PD | Yoneyama_2022 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics (PK) of emicizumab and dose selection based on exposure targets; it does not report a pharmacodynamic (PD) model or numeric PD parameters (e.g., Emax, EC50) for emicizumab, nor does it provide a PD analysis for palivizumab (which is only cited as a reference for a PK maturation function). |
| PGx | unknown_2023 | not_relevant | 0 | 0 | The paper is a clinical consensus statement on cystic fibrosis diagnosis and treatment, with no pharmacogenomic analysis of palivizumab PK/PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 14:44 UTC</sub>
