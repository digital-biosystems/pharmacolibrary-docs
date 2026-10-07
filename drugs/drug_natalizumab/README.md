<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L03A&quot;,&quot;href&quot;:&quot;atc/L03A.md&quot;},{&quot;label&quot;:&quot;natalizumab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Natalizumab_Moes2022_reference&quot;,&quot;label&quot;:&quot;Moes_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_natalizumab/Natalizumab_Moes2022_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Natalizumab_Quan2025_reference&quot;,&quot;label&quot;:&quot;Quan_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_natalizumab/Natalizumab_Quan2025_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Natalizumab_Rosario2017_reference&quot;,&quot;label&quot;:&quot;Rosario_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_natalizumab/Natalizumab_Rosario2017_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Natalizumab_Wang2022_reference&quot;,&quot;label&quot;:&quot;Wang_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_natalizumab/Natalizumab_Wang2022_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# natalizumab

- **generic name:** natalizumab
- **ATC codes:** `L03AD`, `L04AG03`
- **DrugBank:** [DB00108](https://go.drugbank.com/drugs/DB00108) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Natalizumab is a monoclonal antibody used to treat multiple sclerosis, including relapsing-remitting forms, and Crohn's disease. It is authorised in the European Union and prescribed under medical supervision, carrying a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q386119](https://www.wikidata.org/wiki/Q386119) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:02 | 16:24 | 4/3/0 | 3/1/0 | 0/0/0 | 808,886/31,905 | einfracz / qwen3.8-27b | 47 | 9/25 | 46/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Moes_2022_reference](drugs/drug_natalizumab/Natalizumab_Moes2022_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Moes DJAR et al., Towards Fixed Dosing of Tocilizumab in…, Clinical pharmacokinetics (2022) | [10.1007/s40262-021-01074-2](https://doi.org/10.1007/s40262-021-01074-2) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Quan_2025_reference](drugs/drug_natalizumab/Natalizumab_Quan2025_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Quan C et al., Safety of teriflunomide in Chinese adul…, Chinese medical journal (2025) | [10.1097/cm9.0000000000002990](https://doi.org/10.1097/cm9.0000000000002990) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Rosario_2017_reference](drugs/drug_natalizumab/Natalizumab_Rosario2017_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Rosario M et al., A Review of the Clinical Pharmacokineti…, Clinical pharmacokinetics (2017) | [10.1007/s40262-017-0546-0](https://doi.org/10.1007/s40262-017-0546-0) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Wang_2022_reference](drugs/drug_natalizumab/Natalizumab_Wang2022_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Wang B et al., Mechanistic modeling of a human IgG&lt;sub…, CPT: pharmacometrics & syst… (2022) | [10.1002/psp4.12738](https://doi.org/10.1002/psp4.12738) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Moein_2025_reference](drugs/drug_natalizumab/Natalizumab_Moein2025_reference.md) | — | 2-compartment (no model) | 4 | Moein A et al., Population Pharmacokinetics and Exposur…, Journal of clinical pharmac… (2025) | [10.1002/jcph.70043](https://doi.org/10.1002/jcph.70043) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Wang_2020_reference](drugs/drug_natalizumab/Natalizumab_Wang2020_reference.md) | — | 2-compartment (no model) | 6 | Wang Y et al., Population Pharmacokinetics and Pharmac…, Journal of clinical pharmac… (2020) | [10.1002/jcph.1590](https://doi.org/10.1002/jcph.1590) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [van_2025_reference](drugs/drug_natalizumab/Natalizumab_van2025_reference.md) | — | 2-compartment (no model) | 8 (+2 cov.) | van den Berg SPH et al., Pharmacokinetic Model-Informed Precisio…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.70014](https://doi.org/10.1002/psp4.70014) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Muralidharan_2017_alpha_4_integrin_saturation](drugs/drug_natalizumab/pd_Muralidharan_2017_alpha_4_integrin_saturation.md) | alpha-4 integrin saturation ← natalizumab · direct sigmoid Emax (Hill) effect | — | Muralidharan KK et al., Population Pharmacokinetics and Target…, Journal of clinical pharmac… (2017) | [10.1002/jcph.894](https://doi.org/10.1002/jcph.894) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Serra_2021_RO](drugs/drug_natalizumab/pd_Serra_2021_RO.md) | occupancy of α4-integrin receptor ← natalizumab · direct linear effect | — | Serra López-Matencio JM et al., Evaluation of Natalizumab Pharmacokinet…, Frontiers in neurology (2021) | [10.3389/fneur.2021.716548](https://doi.org/10.3389/fneur.2021.716548) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Zhovtis_2020_4_integrin](drugs/drug_natalizumab/pd_Zhovtis_2020_4_integrin.md) | α4-integrin receptor saturation biomarker turnover ← natalizumab | — | Zhovtis Ryerson L et al., Pharmacodynamics of natalizumab extende…, Neurology(R) neuroimmunolog… (2020) | [10.1212/NXI.0000000000000672](https://doi.org/10.1212/NXI.0000000000000672) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">mouse</span> | [Hanf_2014_Cytotoxicity](drugs/drug_natalizumab/pd_Hanf_2014_Cytotoxicity.md) | Cytotoxicity biomarker turnover ← endogenous kinetics | — | Hanf KJ et al., Antibody humanization by redesign of co…, Methods (San Diego, Calif.) (2014) | [10.1016/j.ymeth.2013.06.024](https://doi.org/10.1016/j.ymeth.2013.06.024) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=natalizumab) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: FCGR1A (target), FCGR3B (target), ICAM1 (target), ITGA4 (antibody).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 140 matched, 100 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 7  ·  extracted 4  ·  needs_review 0  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Muralidharan_2017.pdf` | Muralidharan KK et al., Population Pharmacokinetics and Target…, Journal of clinical pharmac… (2017) | popPK | 10 | [10.1002/jcph.894](https://doi.org/10.1002/jcph.894) | [28398628](https://pubmed.ncbi.nlm.nih.gov/28398628) | The abstract describes a population PK model and covariates but contains no specific numeric parameter values, which are likely in the main text or tables not provided in the evidence. |
| `Singh_2015.pdf` | Singh AP et al., Quantitative prediction of human pharma…, The AAPS journal (2015) | popPK | 5 | [10.1208/s12248-014-9690-8](https://doi.org/10.1208/s12248-014-9690-8) | [25445845](https://pubmed.ncbi.nlm.nih.gov/25445845) | The paper is a preclinical translational modeling study using monkey data to predict human PK for six mAbs (including natalizumab), but no specific numeric PK parameter values for natalizumab are provided in the evidence. |

<sub>queue written 2026-10-06T22:57:29.126599+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Bedri_2018 | not_relevant | 4 | 3 | The paper reports gene-drug interactions on biomarkers (cytokine receptor levels) but lacks specific pharmacokinetic data (AUC, CL, Cmax) and does not provide fitted quantitative effect sizes for the PK parameters of natalizumab. |
| popPK | Berkovich_2026 | irrelevant | 2 | 1 | The paper reports observational serum concentrations (trough levels) over time but does not derive or report quantitative pharmacokinetic parameters (CL, Vd, half-life) or a compartmental/population-PK model. |
| popPK | Block_2025 | irrelevant | 0 | 0 | The study analyzes step count changes associated with anti-CD20 therapy in MS patients and does not report any pharmacokinetic parameters for natalizumab. |
| PGx | Cardoso_2026 | not_relevant | 3 | 5 | The paper reports an association between genotypes and binary clinical outcome (treatment failure) and cytokine levels, but does not report specific pharmacokinetic (e.g., AUC, Cmax) or quantified pharmacodynamic parameter changes. |
| popPK | Chang_2021 | irrelevant | 2 | 1 | The paper is a simulation study using published PK/PD models to assess efficacy outcomes, not a primary PK study reporting new quantitative disposition parameters (CL, V, etc.) for natalizumab. |
| popPK | Chen_2024 | irrelevant | 0 | 0 | The paper analyzes molecular determinants of antibody polyreactivity and clearance generally but does not report specific quantitative pharmacokinetic parameters for natalizumab. |
| PGx | Clarelli_2024 | not_relevant | 0 | 0 | The study investigates genetic predictors of clinical efficacy (relapse risk), a pharmacodynamic outcome, but does not report effects on pharmacokinetic parameters or explicit PK parameters like drug concentration or clearance. |
| PGx | Clarelli_2025 | not_relevant | 0 | 0 | The text is a correction notice for an author name and a missing table in an original article, and does not contain the pharmacogenomic data or results itself. |
| PGx | Comabella_2011 | not_relevant | 0 | 0 | The text is an abstract of a review paper discussing the general landscape of pharmacogenomics in MS, not a study reporting specific quantitative effects of variants on natalizumab PK/PD. |
| PGx | De_2025 | not_relevant | 4 | 1 | The paper is a mini-review discussing the potential for ITGA4 variants to predict therapeutic response, but it does not report new data or quantify specific pharmacokinetic or pharmacodynamic parameter changes. |
| popPK | Ganelin-Cohen_2026 | irrelevant | 0 | 0 | The study is a retrospective clinical cohort comparing cladribine to other therapies in pediatric MS, with no pharmacokinetic data or parameters for natalizumab reported. |
| popPK | Gelissen_2026 | irrelevant | 0 | 0 | The study investigates patient-reported treatment satisfaction using questionnaires and does not report quantitative pharmacokinetic disposition parameters for natalizumab. |
| popPK | Ginwala_2019 | irrelevant | 0 | 0 | The paper is a review on the anti-inflammatory properties of flavonoids and contains no pharmacokinetic data for natalizumab. |
| popPK | Gomez-Figueroa_2025 | irrelevant | 0 | 0 | The paper is a clinical observational study on treatment switching outcomes in MS patients and does not report any pharmacokinetic parameters for natalizumab. |
| popPK | Gong_2026 | irrelevant | 0 | 0 | The paper is a review on AI in medication timing and only mentions a study on natalizumab PBPK in a reference table without reporting any original quantitative PK parameters. |
| PGx | Gontika_2022 | not_relevant | 0 | 0 | The paper reports HLA associations with clinical response to fingolimod in MS patients, but it does not report a pharmacokinetic or pharmacodynamic parameter for natalizumab. |
| PGx | Gontika_2022_2 | not_relevant | 1 | 3 | The study reports an association between specific HLA genotypes and the occurrence of adverse events (safety), not the alteration of pharmacokinetic or pharmacodynamic parameters. |
| popPK | Guo_2026 | irrelevant | 0 | 0 | The study analyzes cognitive trajectories (SDMT scores) in MS patients and does not report any pharmacokinetic parameters for natalizumab. |
| popPK | Hanf_2014 | irrelevant | 0 | 0 | The paper describes a structural method for antibody humanization of anti-alpha-4 integrin antibodies, reporting no pharmacokinetic data for natalizumab. |
| popPK | He_2020 | irrelevant | 0 | 0 | The study is a retrospective observational cohort analyzing disability outcomes (EDSS scores) and treatment timing, with no pharmacokinetic parameters or values reported. |
| popPK | Hersh_2024 | irrelevant | 0 | 0 | The study investigates brain atrophy outcomes and treatment effects in multiple sclerosis, not the pharmacokinetic parameters (CL, V, etc.) of natalizumab. |
| PGx | Hočevar_2019 | not_relevant | 0 | 0 | The paper is a systematic review that does not report a specific pharmacogenomic effect on the PK/PD parameters of natalizumab, focusing instead on clinical outcomes like relapse rate and EDSS scores. |
| PGx | Jelcic_2016 | not_relevant | 0 | 0 | The paper discusses immune mechanisms and viral escape in PML patients, not pharmacogenomic effects on natalizumab's pharmacokinetics or pharmacodynamics. |
| popPK | Kivisäkk_2009 | irrelevant | 0 | 0 | The study investigates immunological effects (T cell surface markers and cytokines) rather than pharmacokinetic disposition parameters. |
| PGx | Koetzier_2020 | not_relevant | 2 | 5 | This paper studies the biological effects of natalizumab on T-cell subsets (MDR1/GR expression) in MS, not the effect of a specific human gene variant/genotype on the pharmacokinetics or pharmacodynamics of natalizumab itself. |
| popPK | Kosa_2022 | irrelevant | 0 | 0 | The paper is a machine learning study on CSF proteomic biomarkers for multiple sclerosis severity and contains no pharmacokinetic parameters for natalizumab. |
| PGx | Kowalec_2013 | not_relevant | 0 | 0 | The paper is a narrative review discussing the potential of pharmacogenomics for adverse drug reactions (specifically PML for natalizumab) and does not report specific genetic variants altering PK or PD parameters of natalizumab. |
| PGx | Leung_2009 | not_relevant | 0 | 0 | The text discusses concomitant immunosuppressant therapy and TPMT pharmacogenomics for thiopurines, but does not report a pharmacogenomic effect on the PK or PD of natalizumab. |
| popPK | Li_2015 | irrelevant | 0 | 0 | The study reports PK parameters for AMG 181, not natalizumab, which is only mentioned as a background comparator. |
| popPK | Liampas_2025 | irrelevant | 0 | 0 | The study is a systematic review regarding oligoclonal bands in CSF and does not report any pharmacokinetic parameters such as clearance or volume of distribution. |
| popPK | Liu_2025 | irrelevant | 0 | 0 | The paper is a Cochrane systematic review evaluating the clinical efficacy and safety of natalizumab for multiple sclerosis, and it does not report any pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| PGx | Martinez-Forero_2008 | not_relevant | 3 | 2 | The paper is a review discussing pharmacogenetic studies for multiple sclerosis therapies, but the provided text does not report specific pharmacokinetic or pharmacodynamic data for natalizumab linked to a gene variant. |
| popPK | Moein_2025 | irrelevant | 0 | 0 | The study characterizes the population pharmacokinetics of etrolizumab, not natalizumab. |
| popPK | Moes_2022 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for tocilizumab, not natalizumab. |
| popPK | Muralidharan_2017 | relevant | 10 | 0 | The abstract describes a population PK model and covariates but contains no specific numeric parameter values, which are likely in the main text or tables not provided in the evidence. |
| popPK | Muralidharan_2017_2 | irrelevant | 4 | 0 | The paper focuses on exposure-response modeling and uses a pre-existing PK model without reporting the quantitative PK parameter estimates (CL, V, Q, etc.) in the provided text. |
| popPK | Nakamura_2024 | irrelevant | 0 | 0 | The study reports neuroimaging outcomes (brain volume) and does not measure or report pharmacokinetic parameters. |
| popPK | Nicolò_2023 | irrelevant | 0 | 0 | The paper describes a mechanistic disease simulation platform for multiple sclerosis where natalizumab is used as a treatment option to model relapse rates, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Pitzalis_2021 | irrelevant | 0 | 0 | The study evaluates the immunological impact of natalizumab on vaccine antibody response, not its pharmacokinetic parameters. |
| PGx | Prandota_2010 | not_relevant | 1 | 0 | The paper mentions natalizumab as a therapeutic agent in a general review of pharmacogenomics in gastroenterology but does not report any specific gene variant affecting its pharmacokinetic or pharmacodynamic parameters. |
| popPK | Quan_2025 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for teriflunomide, not natalizumab (natalizumab is only mentioned as an excluded co-administered drug). |
| popPK | Rosario_2015 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for vedolizumab, not natalizumab, which is only mentioned as a comparator. |
| popPK | Rosario_2017 | irrelevant | 0 | 0 | The paper is a review of the pharmacokinetics of vedolizumab, not natalizumab; while natalizumab is mentioned as a comparator regarding CNS penetration, no PK parameters for natalizumab are reported. |
| PGx | Schultz_2017 | not_relevant | 0 | 0 | The study investigates in vitro T cell immunogenicity (CD4+ T cell response) of natalizumab, not the pharmacokinetic or pharmacodynamic effects of genetic variants on the drug's therapeutic activity or exposure. |
| PGx | Shapiro_2011 | not_relevant | 0 | 0 | The paper reports assay development for quantifying natalizumab half-antibody exchange, not the effect of a specific gene variant/genotype on PK/PD parameters. |
| popPK | Singh_2015 | irrelevant | 5 | 0 | The paper is a preclinical translational modeling study using monkey data to predict human PK for six mAbs (including natalizumab), but no specific numeric PK parameter values for natalizumab are provided in the evidence. |
| popPK | Soler_2009 | irrelevant | 0 | 0 | The paper describes the binding specificity and mechanism of action of vedolizumab, not the pharmacokinetics of natalizumab. |
| popPK | Spahn_2025 | irrelevant | 0 | 0 | The paper is a review on pharmacovigilance and pharmacogenomics that mentions natalizumab only as an example of a drug label update regarding safety, containing no pharmacokinetic data. |
| popPK | Toukam_2026 | irrelevant | 0 | 0 | The study reports PK parameters for BIIB107, a different monoclonal antibody, rather than natalizumab. |
| popPK | Valignat_2026 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of natalizumab's binding affinity and effect on cell adhesion, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Virupakshaiah_2026 | irrelevant | 0 | 0 | The paper investigates the effect of ocrelizumab on anti-JCV antibody indices in MS patients, not the pharmacokinetic parameters of natalizumab. |
| popPK | Wang_2020 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for ontamalimab, not natalizumab. |
| popPK | Wang_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of tralokinumab (an IgG4 antibody), not natalizumab, which is only mentioned as a comparator. |
| popPK | You_2021 | irrelevant | 0 | 0 | The study measures retinal nerve fiber layer thickness as a biomarker of neurodegeneration in MS patients, not pharmacokinetic parameters for natalizumab. |
| popPK | Yu_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ofatumumab, a different drug, rather than natalizumab. |
| PGx | Zarzuelo_2021 | not_relevant | 2 | 1 | The paper discusses genetic influences on clinical response (efficacy/outcome) rather than specific pharmacokinetic or pharmacodynamic parameters of natalizumab. |
| popPK | unknown_2017 | irrelevant | 0 | 0 | no_text gate: only 20 chars of text extracted (&lt; 400) |
| popPK | von_2022 | irrelevant | 0 | 0 | The study focuses on B-cell reconstitution and immunology after stem cell transplantation, and natalizumab is only mentioned as a prior therapy without any pharmacokinetic data. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 22:57 UTC</sub>
