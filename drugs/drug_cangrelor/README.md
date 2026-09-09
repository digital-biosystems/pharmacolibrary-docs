# cangrelor

- **generic name:** cangrelor
- **ATC codes:** `B01AC25`
- **DrugBank:** [DB06441](https://go.drugbank.com/drugs/DB06441)
- **groups:** approved, investigational

## About

**Description.** Cangrelor is an intravenous, direct-acting, reversible P2Y12 inhibitor for patients undergoing percutaneous coronary intervention (PCI) who have not been yet treated by oral P2Y12 inhibitors. An advantage Cangrelor provides over oral P2Y12 inhibitors (such as prasugrel, ticagrelor, and clopidogrel) is that it is an active drug not requiring metabolic conversion therefore providing a rapid onset and offset of action. Cangrelor was approved by the FDA in June 2015 for intravenous application.

**Indication.** For use as an adjunct to percutaneous coronary intervention (PCI) for reducing the risk of periprocedural myocardial infarction (MI), repeat coronary revascularization, and stent thrombosis (ST) in patients in who have not been treated with a P2Y12 platelet inhibitor and are not being given a glycoprotein IIb/IIIa inhibitor.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-06 16:04 | 0:55 | 0/0/0 | 3/1/0 | 0/0/1 | 1,456/422 | ollama / qwen3.8:27b-mtp-q8_0 | 23 | 3/10 | 12/11 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Gelbenegger_2022_2](drugs/drug_cangrelor/pd_Gelbenegger_2022_2_ADP_induced_platelet_aggregation.md) | Gelbenegger (2022) | — |
| <span class="pk-badge pk-badge--green">extracted</span> | [Gelbenegger_2022_2](drugs/drug_cangrelor/pd_Gelbenegger_2022_2_Closure_time.md) | Gelbenegger (2022) | — |
| <span class="pk-badge pk-badge--green">extracted</span> | [Gelbenegger_2022_2](drugs/drug_cangrelor/pd_Gelbenegger_2022_2_Platelet_reactivity_index.md) | Gelbenegger (2022) | — |
| <span class="pk-badge pk-badge--green">extracted</span> | [Gupta_2020](drugs/drug_cangrelor/pd_Gupta_2020_Mpro_inhibitory_activity.md) | Gupta A et al., Structure-Based Virtual Screening and B…, ACS omega (2020) | [10.1021/acsomega.0c04808](https://doi.org/10.1021/acsomega.0c04808) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Vargas_2021](drugs/drug_cangrelor/pd_Vargas_2021_maximal_platelet_aggregation_inhibition.md) | Vargas D et al., Cangrelor PK/PD analysis in post-operat…, Journal of thrombosis and h… (2021) | [10.1111/jth.15141](https://doi.org/10.1111/jth.15141) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Gupta_2020](drugs/drug_cangrelor/pd_Gupta_2020_Mpro_activity.md) | Gupta A et al., Structure-Based Virtual Screening and B…, ACS omega (2020) | [10.1021/acsomega.0c04808](https://doi.org/10.1021/acsomega.0c04808) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Henrich_2021](drugs/drug_cangrelor/pd_Henrich_2021_IPA.md) | Henrich A et al., Pharmacokinetic/pharmacodynamic modelin…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12641](https://doi.org/10.1002/psp4.12641) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Henrich_2021](drugs/drug_cangrelor/pd_Henrich_2021_inhibition_of_platelet_aggregation.md) | Henrich A et al., Pharmacokinetic/pharmacodynamic modelin…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12641](https://doi.org/10.1002/psp4.12641) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **P2Y12** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Bouman_2010](drugs/drug_cangrelor/pgx_Bouman_2010_P2Y12_Q100.md) | Bouman HJ et al., The influence of variation in the P2Y12…, Thrombosis and haemostasis (2010) | [10.1160/TH09-06-0367](https://doi.org/10.1160/TH09-06-0367) |

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Coverage

- **PubMed hits:** 110 matched, 50 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abdennour_2020 | irrelevant | 0 | 0 | The paper is a clinical case series regarding the use of cangrelor for intracranial aneurysms and does not report any pharmacokinetic parameters or quantitative disposition data. |
| popPK | Alexopoulos_2018 | irrelevant | 0 | 0 | The paper is a clinical review discussing the use of cangrelor in PCI and does not report any quantitative pharmacokinetic parameters. |
| PD | Alexopoulos_2018 | not_relevant | 1 | 0 | The text is a narrative review summarizing clinical trial outcomes and guidelines, containing no specific pharmacodynamic models, concentration-effect curves, or numeric PD parameters (e.g., Emax, EC50). |
| popPK | Angiolillo_2017 | irrelevant | 0 | 0 | The paper is an expert consensus document on switching antiplatelet therapies and does not report original quantitative pharmacokinetic parameters for cangrelor. |
| PD | Angiolillo_2017 | not_relevant | 1 | 0 | The paper is an expert consensus document on switching therapies and does not report specific numeric PD parameters or exposure-response data for cangrelor. |
| popPK | Capranzano_2019 | irrelevant | 0 | 0 | The paper is a review of pharmacodynamic studies regarding P2Y12 inhibitor switching and does not report quantitative pharmacokinetic parameters for cangrelor. |
| PD | Capranzano_2019 | not_relevant | 1 | 0 | The text is a review overview of pharmacodynamic studies regarding P2Y12 inhibitor switching and does not present original data, numeric PD parameters, or specific exposure-response curves for cangrelor. |
| popPK | Capranzano_2019_2 | irrelevant | 0 | 0 | The paper is a review of switching strategies between P2Y12 inhibitors and does not report original quantitative pharmacokinetic parameters for cangrelor. |
| PD | Capranzano_2019_2 | not_relevant | 1 | 0 | The text is a qualitative review summarizing switching strategies and clinical consequences, without presenting specific numeric PD parameters or concentration-effect curves for cangrelor. |
| popPK | Cattaneo_2012 | irrelevant | 0 | 0 | The paper is a mechanistic hypothesis regarding dyspnea and does not report any quantitative pharmacokinetic parameters for cangrelor. |
| popPK | Chattaraj_2001 | irrelevant | 0 | 0 | The text is a drug development overview that mentions cangrelor's mechanism and trial status but contains no pharmacokinetic parameters or quantitative disposition data. |
| PD | Chattaraj_2001 | not_relevant | 1 | 0 | The text is a drug development overview that mentions an IC50 for a derivative compound but provides no exposure-response or dose-response data for cangrelor itself. |
| PGx | Dash_2015 | not_relevant | 0 | 0 | The paper is a general review of antiplatelet therapy that mentions cangrelor's clinical outcomes but does not report any pharmacogenomic effects on its PK or PD parameters. |
| popPK | Droppa_2018 | irrelevant | 1 | 0 | The paper is a review article discussing the clinical role of cangrelor without reporting original quantitative pharmacokinetic parameter values. |
| popPK | Elhorany_2021 | irrelevant | 0 | 0 | The paper is a clinical case series regarding safety and efficacy in stroke patients, not a pharmacokinetic study, and does not report quantitative disposition parameters like clearance or volume. |
| PGx | Fabre_2010 | not_relevant | 0 | 0 | The paper is a general review of anti-platelet therapies and mentions cangrelor only as a reversible P2Y12 antagonist in trials, without reporting any pharmacogenomic effects on its PK or PD parameters. |
| popPK | Fahnhorst_2021 | irrelevant | 2 | 0 | The study is a clinical pilot cohort focusing on dosing and platelet function outcomes rather than reporting quantitative pharmacokinetic disposition parameters (CL, V, etc.) for cangrelor. |
| PGx | Fayaz_2012 | not_relevant | 2 | 1 | The paper is a general review of P2Y12 inhibitor evolution and does not report specific quantitative pharmacogenomic effects on cangrelor PK/PD parameters. |
| PGx | Ferri_2013 | not_relevant | 0 | 0 | The paper is a general review of P2Y12 inhibitors and does not report specific pharmacogenomic effects on cangrelor's PK or PD parameters. |
| popPK | Gargiulo_2025 | irrelevant | 0 | 0 | The study focuses exclusively on pharmacodynamic effects (platelet inhibition) and clinical outcomes, reporting no quantitative pharmacokinetic parameters such as clearance, volume, or half-life. |
| PD | Gargiulo_2025 | not_relevant | 3 | 2 | The paper reports descriptive pharmacodynamic outcomes (mean platelet inhibition percentages and rates of high residual platelet reactivity) at specific time points, but it does not provide a concentration-effect or dose-response model with numeric PD parameters (e.g., Emax, EC50) or an effect-vs-concentration curve. |
| popPK | Gargiulo_2026 | irrelevant | 0 | 0 | The study reports pharmacodynamic (platelet reactivity) parameters, not pharmacokinetic disposition parameters (CL, V, etc.) for cangrelor. |
| PD | Gargiulo_2026 | not_relevant | 3 | 2 | The study reports descriptive pharmacodynamic outcomes (platelet inhibition percentages) at fixed time points and compares groups, but it does not model an exposure-response or dose-response relationship, nor does it provide numeric PD parameters like Emax or EC50. |
| popPK | Gasecka_2019 | irrelevant | 1 | 0 | The paper is a narrative review discussing clinical switching strategies and pharmacological properties, containing no original quantitative pharmacokinetic parameter values for cangrelor. |
| PD | Gasecka_2019 | not_relevant | 2 | 1 | The text is a review introduction discussing switching strategies and mentions pharmacodynamics studies generally, but it does not present specific numeric PD parameters or concentration-effect curves for cangrelor. |
| popPK | Gelbenegger_2022 | irrelevant | 0 | 0 | The paper is a review of antiplatelet drugs and does not report original quantitative pharmacokinetic parameters for cangrelor. |
| PD | Gelbenegger_2022 | not_relevant | 1 | 0 | The text is a general review of antiplatelet drugs and does not contain specific numeric PD parameters or exposure-response data for cangrelor. |
| popPK | Gelbenegger_2022_2 | irrelevant | 2 | 1 | The study is a pharmacodynamic trial focusing on platelet function assays (MEA, VASP-P) rather than reporting quantitative pharmacokinetic disposition parameters (CL, V, Q) for cangrelor, with only a cited half-life mentioned in the supplementary rationale. |
| popPK | Gupta_2020 | irrelevant | 0 | 0 | The paper is a computational and in-vitro study on SARS-CoV-2 main protease inhibition, where cangrelor is used only as a comparator agent for binding affinity (KD/IC50), not for pharmacokinetic parameter estimation. |
| popPK | Henrich_2021 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of selatogrel, with cangrelor mentioned only as a comparator in the introduction without any reported PK parameters. |
| popPK | Hochholzer_2017 | irrelevant | 0 | 0 | The study is a clinical trial focused on platelet inhibition and transition strategies, not a pharmacokinetic study reporting quantitative disposition parameters for cangrelor. |
| popPK | Holden_2021 | irrelevant | 1 | 0 | The study focuses on platelet function testing and dose-response for antiplatelet effect, not on quantitative pharmacokinetic parameters like clearance or volume of distribution. |
| popPK | Kubica_2024 | irrelevant | 2 | 1 | The paper is a clinical review that discusses cangrelor's pharmacokinetics qualitatively (e.g., half-life, volume of distribution) but does not report quantitative disposition parameters like clearance (CL) or specific volume values, nor does it present a population-PK model. |
| PD | Kubica_2024 | not_relevant | 2 | 1 | The paper is a narrative review summarizing clinical trial outcomes and general pharmacological properties (e.g., &gt;90% inhibition, half-life) without presenting specific numeric PD parameters (Emax, EC50) or an exposure-response model. |
| PGx | Laine_2016 | not_relevant | 0 | 0 | The paper is a general review of antiplatelet therapy and does not report specific pharmacogenomic effects on cangrelor's PK or PD parameters. |
| popPK | Langer_2021 | irrelevant | 0 | 0 | The paper is a mechanistic study on VPAC receptor modulation where cangrelor is used only as an inactive comparator to ticagrelor, with no pharmacokinetic parameters reported. |
| popPK | Linfante_2021 | irrelevant | 0 | 0 | The paper is a clinical feasibility and safety study of cangrelor use in neuroendovascular procedures and does not report any quantitative pharmacokinetic parameters. |
| popPK | Liu_2024 | irrelevant | 1 | 0 | The paper is a case report discussing clinical management and guidelines, not a pharmacokinetic study, and only mentions a general half-life range without providing quantitative disposition parameters or model values. |
| popPK | Marnat_2021 | irrelevant | 0 | 0 | The paper is a clinical safety and efficacy study comparing cangrelor to glycoprotein IIb/IIIa inhibitors, reporting no pharmacokinetic parameters. |
| popPK | Masyuk_2018 | irrelevant | 2 | 0 | The study is a pharmacosimulation based on known parameters but does not report original quantitative PK values for cangrelor in the provided evidence. |
| PGx | Michelson_2009 | not_relevant | 0 | 0 | The paper is a general review of P2Y12 antagonists and discusses clopidogrel pharmacogenomics, but it does not report specific pharmacogenomic effects on the PK or PD parameters of cangrelor. |
| popPK | Milnerowicz_2026 | irrelevant | 0 | 0 | The paper is a clinical efficacy and safety study comparing cangrelor to GPIIb/IIIa inhibitors in stroke, reporting no pharmacokinetic parameters. |
| PD | Milnerowicz_2026 | not_relevant | 0 | 0 | The paper is a retrospective clinical trial comparing clinical outcomes (efficacy/safety) of cangrelor vs GPIIb/IIIa inhibitors, with no pharmacokinetic or pharmacodynamic modeling or numeric PD parameters reported. |
| popPK | Motovska_2024 | irrelevant | 0 | 0 | The paper is a clinical trial rationale and design document for a comparative efficacy study, containing no quantitative pharmacokinetic parameters or disposition data for cangrelor. |
| PD | Motovska_2024 | not_relevant | 0 | 0 | The paper is a trial protocol/rationale describing a future study design and endpoints, containing no actual data, PK/PD analysis, or numeric PD parameters. |
| popPK | Norgard_2009 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of platelet function reporting an IC50 value, not a pharmacokinetic study with disposition parameters. |
| popPK | Oestreich_2009 | irrelevant | 1 | 0 | The text is a qualitative overview of cangrelor's mechanism and clinical status without reporting any quantitative pharmacokinetic parameters. |
| popPK | Ortega-Paz_2024 | irrelevant | 0 | 0 | The paper is a review on switching P2Y12 inhibitors and does not report original quantitative pharmacokinetic parameters for cangrelor. |
| PD | Ortega-Paz_2024 | not_relevant | 1 | 0 | The text is a review providing qualitative guidance on switching therapies and does not report specific numeric PD parameters or concentration-effect curves for cangrelor. |
| popPK | Pampuch_2006 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic assay comparing platelet function tests and does not report pharmacokinetic parameters for cangrelor. |
| popPK | Percha_2015 | irrelevant | 0 | 0 | The paper is a bioinformatics study on text mining algorithms for drug-gene relationships and does not contain any pharmacokinetic data or parameters for cangrelor. |
| PD | Percha_2015 | not_relevant | 0 | 0 | The paper describes a text mining algorithm for extracting drug-gene relationships from biomedical literature and contains no pharmacodynamic data, exposure-response analysis, or numeric PD parameters for cangrelor. |
| PGx | Qureshi_2013 | not_relevant | 0 | 0 | The paper is a review of clopidogrel resistance and mentions cangrelor only as a newer agent in the search strategy, without reporting any pharmacogenomic effects on its PK or PD parameters. |
| popPK | Rollini_2017 | irrelevant | 0 | 0 | The paper is a review of clinical switching strategies for P2Y12 inhibitors and does not report original quantitative pharmacokinetic parameters for cangrelor. |
| PD | Rollini_2017 | not_relevant | 1 | 0 | The text is a review of switching strategies and does not report specific numeric PD parameters or concentration-effect curves for cangrelor. |
| popPK | Rymer_2024 | irrelevant | 0 | 0 | The paper is a clinical registry study focusing on dosing duration and clinical outcomes (MACE/bleeding) rather than pharmacokinetic parameters. |
| PD | Rymer_2024 | not_relevant | 0 | 0 | The paper is an observational registry analyzing clinical outcomes (MACE, bleeding) and infusion duration, reporting no concentration-effect data, PK/PD modeling, or numeric PD parameters. |
| popPK | Schneider_2014 | irrelevant | 0 | 0 | The study reports only pharmacodynamic effects (platelet aggregation) and does not provide any quantitative pharmacokinetic parameters for cangrelor. |
| PD | Schneider_2014 | not_relevant | 3 | 2 | The study reports qualitative pharmacodynamic outcomes (platelet reactivity) during drug transition but does not provide numeric PD parameters (e.g., Emax, EC50) or a quantitative concentration-effect model. |
| popPK | Schneider_2015 | irrelevant | 0 | 0 | The study reports only pharmacodynamic effects (platelet aggregation) and contains no quantitative pharmacokinetic parameters for cangrelor. |
| PD | Schneider_2015 | not_relevant | 3 | 2 | The study reports qualitative pharmacodynamic effects (platelet aggregation) and timing of recovery but does not provide numeric PD parameters (e.g., Emax, EC50) or a quantitative concentration-effect model. |
| popPK | Schneider_2015_2 | irrelevant | 0 | 0 | The study focuses on pharmacodynamic effects (platelet reactivity) and drug interaction timing, reporting no quantitative pharmacokinetic parameters for cangrelor. |
| PD | Schneider_2015_2 | not_relevant | 3 | 2 | The paper reports qualitative comparisons of platelet reactivity recovery times under different dosing schedules but does not provide numeric PD parameters (e.g., Emax, EC50) or a quantitative concentration-effect curve for cangrelor. |
| popPK | Seider_2019 | irrelevant | 1 | 0 | This is a clinical case report describing the use of cangrelor for anticoagulation, not a pharmacokinetic study reporting quantitative disposition parameters like clearance or volume. |
| popPK | Serhan_2013 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamic effects of cangrelor on HDL-cholesterol metabolism in mice and does not report quantitative pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| popPK | Shrestha_2022 | irrelevant | 1 | 0 | This is a clinical case series regarding the use of cangrelor as a bridge to surgery, not a pharmacokinetic study, and it does not report quantitative disposition parameters like clearance or volume. |
| popPK | Sible_2017 | irrelevant | 2 | 0 | The paper is a review article discussing cangrelor's mechanism and clinical use, and the provided evidence contains no quantitative pharmacokinetic parameter values. |
| PD | Sible_2017 | not_relevant | 2 | 1 | The text is a general review of cangrelor's mechanism and clinical trials, lacking specific numeric PD parameters or detailed exposure-response data. |
| popPK | Siller-Matula_2010 | irrelevant | 2 | 3 | The paper is a review of multiple antiplatelet agents, and while it mentions cangrelor's half-life and clearance, it does not provide a dedicated population-PK model or comprehensive disposition parameters for cangrelor as the primary subject. |
| PD | Siller-Matula_2010 | not_relevant | 2 | 1 | The paper is a review article summarizing the pharmacological profiles of various antiplatelet drugs, including cangrelor, but does not present original data, specific numeric PD parameters, or extractable concentration-effect curves for cangrelor. |
| popPK | Steinhubl_2008 | irrelevant | 0 | 0 | The study reports pharmacodynamic (platelet function) outcomes rather than quantitative pharmacokinetic parameters (CL, V, etc.) for cangrelor. |
| popPK | Storey_2016 | irrelevant | 3 | 4 | The paper is a review that cites PK parameters (clearance, half-life) from other studies rather than reporting original quantitative disposition data or compartmental models. |
| PD | Storey_2016 | not_relevant | 1 | 0 | The text is a narrative review describing the background and clinical evidence for cangrelor, but it does not present original pharmacodynamic modeling or specific numeric PD parameters (e.g., Emax, EC50) in the provided abstract or captions. |
| popPK | Södergren_2016 | irrelevant | 0 | 0 | The study is a mechanistic investigation of platelet lysosomal exocytosis where cangrelor is used only as a functional inhibitor, with no pharmacokinetic parameters reported. |
| popPK | Tamborini_2015 | irrelevant | 1 | 0 | The paper is a narrative review summarizing clinical data and pharmacological characteristics without reporting original quantitative pharmacokinetic parameter values. |
| PD | Tamborini_2015 | not_relevant | 2 | 1 | The text is a qualitative review summary that discusses the pharmacological characteristics and clinical outcomes of cangrelor but does not provide specific numeric PD parameters (e.g., EC50, Emax) or detailed concentration-effect data. |
| popPK | Tunströmer_2023 | irrelevant | 0 | 0 | The study is an ex vivo mechanistic investigation of thrombus remodelling and does not report pharmacokinetic parameters for cangrelor. |
| popPK | Valenti_2022 | irrelevant | 0 | 0 | The paper is a clinical review/consensus document on personalized antiplatelet bridging therapy and does not report any quantitative pharmacokinetic parameters for cangrelor. |
| PD | Valenti_2022 | not_relevant | 1 | 0 | The text is a review/consensus document proposing a clinical algorithm for personalized cangrelor bridging therapy and does not report any specific numeric PD parameters, concentration-effect curves, or dose-response data. |
| popPK | Van_2019 | irrelevant | 1 | 0 | The paper is a clinical review of perioperative bridging strategies and does not report original quantitative pharmacokinetic parameters for cangrelor. |
| popPK | Vargas_2021 | relevant | 8 | 2 | The study reports PK/PD data for cangrelor in neonates, but the evidence provided contains only qualitative descriptions (e.g., "3-fold higher", "undetectable") and lacks specific numeric values for clearance, volume, or half-life. |
| PGx | Wallentin_2009 | not_relevant | 2 | 0 | The text is an abstract of a systematic review that mentions pharmacogenetics as a topic but does not report specific gene variant effects on cangrelor PK/PD parameters. |
| PGx | Wichaiyo_2026 | not_relevant | 0 | 0 | The paper is a general review of antiplatelet drugs and does not report specific pharmacogenomic effects on cangrelor's PK or PD parameters. |
| popPK | Wzorek_2021 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of cangrelor binding to human serum albumin (reporting KD and thermodynamic parameters) and does not provide pharmacokinetic disposition parameters such as clearance, volume of distribution, or half-life. |
| PD | Wzorek_2021 | not_relevant | 2 | 1 | The paper focuses on in vitro protein binding interactions (HSA) and does not report a pharmacodynamic exposure-response or dose-response model with numeric PD parameters like Emax or EC50. |
| popPK | Xiao_2021 | irrelevant | 0 | 0 | The study is a pharmacodynamic cardioprotection experiment in rats where cangrelor is used only as a co-administered comparator agent, and no pharmacokinetic parameters for cangrelor are reported. |
| PD | Xiao_2021 | not_relevant | 0 | 0 | The paper investigates the cardioprotective efficacy of nicotinamide riboside in the presence of cangrelor, but does not report any pharmacodynamic parameters (e.g., Emax, EC50) or exposure-response relationship for cangrelor itself. |
| PGx | Yousuf_2011 | not_relevant | 0 | 0 | The paper is a general review of antiplatelet therapies and does not report specific pharmacogenomic effects on cangrelor's PK or PD parameters. |
| popPK | Yun_2022 | irrelevant | 0 | 0 | The study is a clinical safety and efficacy comparison of cangrelor versus eptifibatide for periprocedural bridging and does not report any pharmacokinetic parameters. |
| popPK | unknown_2015 | irrelevant | 0 | 0 | The evidence consists only of a conference title with no specific study data, parameters, or mention of cangrelor. |
| PD | unknown_2015 | not_relevant | 0 | 0 | The provided text is only a header for a conference abstract collection and contains no specific data, models, or parameters for cangrelor. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_cangrelor`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
