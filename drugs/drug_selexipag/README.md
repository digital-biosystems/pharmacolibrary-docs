# selexipag

- **generic name:** selexipag
- **ATC codes:** `B01AC27`
- **DrugBank:** [DB11362](https://go.drugbank.com/drugs/DB11362)
- **groups:** approved, investigational

## About

**Description.** Selexipag was approved by the United States FDA on December 22, 2015 for the treatment of pulmonary arterial hypertension (PAH) to delay disease progression and reduce risk of hospitalization. PAH is a relatively rare disease with usually a poor prognosis requiring more treatment options to prolong long-term outcomes. Marketed by Actelion Pharmaceuticals under brand name Uptravi, selexipag and its active metabolite, ACT-333679 (MRE-269), act as agonists of the prostacyclin receptor to increase vasodilation in the pulmonary circulation and decrease elevated pressure in the blood vessels supplying blood to the lungs.

**Indication.** Selexipag is indicated for the treatment of pulmonary arterial hypertension (PAH) to delay disease progression and reduce risk of hospitalization.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-06 05:25 | 2:44 | 0/0/0 | 0/1/0 | 1/0/1 | 21,553/965 | ollama / qwen3.8:27b-mtp-q8_0 | 6 | 2/4 | 6/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Ruehs_2021](drugs/drug_selexipag/pd_Ruehs_2021_NT_proBNP.md) | Ruehs H et al., Population Pharmacokinetics and Pharmac…, Clinical pharmacokinetics (2021) | [10.1007/s40262-021-01024-y](https://doi.org/10.1007/s40262-021-01024-y) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | **CYP2C9** | `safety` — adverse-reaction risk (HLA / safety allele) — no parameter shift | safety_allele | [Lattanzio_2022](drugs/drug_selexipag/pgx_Lattanzio_2022_CYP2C9_safety.md) | Lattanzio M et al., Pharmacological counseling in hepatotox…, Journal of medical case rep… (2022) | [10.1186/s13256-022-03571-9](https://doi.org/10.1186/s13256-022-03571-9) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **CYP2C8** | `Q27` · CL/F | metabolism | [Lattanzio_2022](drugs/drug_selexipag/pgx_Lattanzio_2022_CYP2C8_Q27.md) | Lattanzio M et al., Pharmacological counseling in hepatotox…, Journal of medical case rep… (2022) | [10.1186/s13256-022-03571-9](https://doi.org/10.1186/s13256-022-03571-9) |

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Coverage

- **PubMed hits:** 33 matched, 33 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_8 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Axelsen_2024.pdf` | Axelsen LN et al., Population pharmacokinetics of selexipa…, CPT: pharmacometrics & syst… (2024) | popPK | 10 | [10.1002/psp4.13231](https://doi.org/10.1002/psp4.13231) | [39570749](https://pubmed.ncbi.nlm.nih.gov/39570749) | The paper is a population PK study for selexipag, but the specific numeric parameter values are not present in the provided evidence text. |
| `Krause_2017.pdf` | Krause A et al., Population Modeling of Selexipag Pharma…, CPT: pharmacometrics & syst… (2017) | popPK | 10 | [10.1002/psp4.12202](https://doi.org/10.1002/psp4.12202) | [28556581](https://pubmed.ncbi.nlm.nih.gov/28556581) | The paper is a population PK study of selexipag, but the provided evidence contains only qualitative summaries and no numeric parameter values. |
| `Bruderer_2014.pdf` | Bruderer S et al., Multiple-dose up-titration study to eva…, Pharmacology (2014) | popPK | 8 | [10.1159/000367630](https://doi.org/10.1159/000367630) | [25277144](https://pubmed.ncbi.nlm.nih.gov/25277144) | The study reports quantitative PK parameters (half-life) for selexipag, but lacks other key disposition parameters like clearance or volume of distribution. |
| `Hoch_2015.pdf` | Hoch M et al., A thorough QT study in the context of a…, Drug design, development an… (2015) | pd | 5 | [10.2147/DDDT.S75565](https://doi.org/10.2147/DDDT.S75565) | [25552906](https://www.ncbi.nlm.nih.gov/pubmed/25552906) | metadata signals extractable PD data (exposure-response) |
| `Axelsen_2021.pdf` | Axelsen LN et al., Clopidogrel, a CYP2C8 inhibitor, causes…, British journal of clinical… (2021) | pgx | 8 | [10.1111/bcp.14365](https://doi.org/10.1111/bcp.14365) | [32415684](https://www.ncbi.nlm.nih.gov/pubmed/32415684) | metadata signals extractable PGX data (CYP2C8, PK/PD-context) |
| `Gnerre_2018.pdf` | Gnerre C et al., The metabolism and drug-drug interactio…, Xenobiotica; the fate of fo… (2018) | pgx | 7 | [10.1080/00498254.2017.1357088](https://doi.org/10.1080/00498254.2017.1357088) | [28737453](https://www.ncbi.nlm.nih.gov/pubmed/28737453) | metadata signals extractable PGX data (CYP2C8, PK/PD-context) |
| `Juif_2017.pdf` | Juif PE et al., A pharmacokinetic drug-drug interaction…, European journal of clinica… (2017) | pgx | 7 | [10.1007/s00228-017-2282-7](https://doi.org/10.1007/s00228-017-2282-7) | [28639119](https://www.ncbi.nlm.nih.gov/pubmed/28639119) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Kaufmann_2015.pdf` | Kaufmann P et al., Effect of lopinavir/ritonavir on the ph…, British journal of clinical… (2015) | pgx | 7 | [10.1111/bcp.12650](https://doi.org/10.1111/bcp.12650) | [25851691](https://www.ncbi.nlm.nih.gov/pubmed/25851691) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-09-06T05:25:30.895024+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Axelsen_2021 | irrelevant | 2 | 0 | The study reports only relative fold-changes in exposure (AUC/Cmax) for a drug interaction, lacking absolute quantitative disposition parameters (CL, V, ka) or a population PK model for selexipag. |
| PD | Axelsen_2021 | not_relevant | 0 | 0 | The study reports only pharmacokinetic (PK) parameters (AUC, Cmax) and drug-drug interaction ratios; it does not report any pharmacodynamic (PD) or exposure-response relationship for selexipag. |
| PGx | Axelsen_2021 | not_relevant | 0 | 0 | The study reports a drug-drug interaction (clopidogrel) and explicitly states that the effect was comparable across CYP2C8 genotypes, meaning no pharmacogenomic effect was reported. |
| popPK | Axelsen_2024 | relevant | 10 | 0 | The paper is a population PK study for selexipag, but the specific numeric parameter values are not present in the provided evidence text. |
| PD | Axelsen_2024 | not_relevant | 0 | 0 | The paper focuses exclusively on population pharmacokinetics (PK) and dose selection based on exposure matching, with no pharmacodynamic (PD) or exposure-response modeling or numeric PD parameters reported. |
| popPK | Bruderer_2014 | relevant | 8 | 4 | The study reports quantitative PK parameters (half-life) for selexipag, but lacks other key disposition parameters like clearance or volume of distribution. |
| PD | Bruderer_2014 | not_relevant | 2 | 1 | The study reports PK parameters and qualitative safety data, but explicitly states that platelet aggregation effects were variable without an obvious dose-dependent pattern, providing no numeric PD parameters or extractable exposure-response relationship. |
| popPK | Bruderer_2016 | irrelevant | 2 | 0 | The study is a drug-drug interaction trial that reports only geometric mean ratios and qualitative statements about steady-state AUC, lacking specific quantitative PK parameter values (e.g., CL, V, t1/2) for selexipag. |
| PD | Bruderer_2016 | not_relevant | 0 | 0 | The study reports a lack of interaction (GMRs for INR and PK parameters) but does not provide a concentration-effect or dose-response model with numeric PD parameters (e.g., Emax, EC50) for selexipag. |
| popPK | Gatfield_2017 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study focusing on the pharmacodynamics of selexipag's metabolite, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Genecand_2021 | irrelevant | 2 | 0 | The paper is a review article that discusses selexipag's pharmacokinetics but does not provide original quantitative disposition parameters or numeric values in the provided evidence. |
| PD | Genecand_2021 | not_relevant | 2 | 1 | The text is a review article summary that mentions pharmacodynamics qualitatively but does not provide specific numeric PD parameters or exposure-response data. |
| popPK | Ghosh_2017 | irrelevant | 2 | 0 | The paper is a review summarizing existing studies and does not present original quantitative pharmacokinetic parameter values for selexipag in the provided evidence. |
| PD | Ghosh_2017 | not_relevant | 2 | 1 | The text is a review summary that qualitatively describes efficacy outcomes (e.g., 6-minute walk distance, mortality) but does not provide specific numeric PD parameters (Emax, EC50) or concentration-effect curves. |
| PGx | Gnerre_2018 | not_relevant | 0 | 0 | The paper describes the metabolic pathways and drug-drug interaction potential of selexipag but does not report any pharmacogenomic effects (gene variants) on its PK or PD parameters. |
| popPK | Hoch_2015 | irrelevant | 1 | 0 | The paper is a thorough QT study focused on cardiac repolarization and does not report quantitative pharmacokinetic disposition parameters (CL, V, etc.) for selexipag. |
| PD | Hoch_2015 | not_relevant | 3 | 2 | The paper reports a qualitative conclusion that no exposure-response relationship was demonstrated for selexipag, without providing numeric PD parameters or a derivable concentration-effect curve. |
| popPK | Honorato_2017 | irrelevant | 1 | 0 | The paper is a pharmacology review that discusses selexipag's pharmacokinetics qualitatively but does not provide original quantitative disposition parameters or numeric values. |
| PD | Honorato_2017 | not_relevant | 2 | 1 | The text is a qualitative pharmacology review summary that discusses general pharmacodynamic properties and safety but does not provide specific numeric PD parameters (e.g., EC50, Emax) or exposure-response data for selexipag. |
| PGx | Juif_2017 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (selexipag and midazolam) in healthy subjects and does not report any pharmacogenomic effects (gene variants) on selexipag's PK or PD parameters. |
| PGx | Kaufmann_2015 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (lopinavir/ritonavir) rather than a pharmacogenomic effect (gene variant/genotype). |
| popPK | Krause_2017 | relevant | 10 | 0 | The paper is a population PK study of selexipag, but the provided evidence contains only qualitative summaries and no numeric parameter values. |
| PGx | Lattanzio_2022 | not_relevant | 5 | 2 | The paper is a case report describing a clinical adverse event (hepatotoxicity) and genotyping, but it does not report quantitative pharmacokinetic or pharmacodynamic parameters (e.g., AUC, Cmax, PD response) for selexipag. |
| popPK | Lindegaard_2020 | irrelevant | 0 | 0 | The paper is a review focused on treprostinil, and selexipag is only mentioned as a comparator drug without any quantitative pharmacokinetic parameters provided. |
| PD | Lindegaard_2020 | not_relevant | 1 | 0 | The paper is a mini-review of treprostinil and only mentions selexipag as a comparator without providing any specific pharmacodynamic data or exposure-response parameters for it. |
| popPK | Najjar_2020 | irrelevant | 0 | 0 | The paper is a review of prodrugs and does not report quantitative pharmacokinetic parameters for selexipag. |
| PD | Najjar_2020 | not_relevant | 0 | 0 | The paper is a general review of prodrugs and does not contain specific pharmacodynamic or exposure-response data for selexipag. |
| popPK | Oriaku_2020 | irrelevant | 0 | 0 | This is a clinical case report describing a drug transition and hemodynamic changes, not a pharmacokinetic study, and it contains no quantitative PK parameters (CL, V, ka, etc.) for selexipag. |
| PD | Oriaku_2020 | not_relevant | 1 | 0 | The paper is a single case report describing a drug transition with qualitative and percentage-based hemodynamic improvements, but it does not report any concentration-effect data, dose-response curves, or numeric PD parameters (e.g., Emax, EC50) for selexipag. |
| popPK | Ruehs_2021 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for vericiguat, not selexipag. |
| popPK | Sardana_2016 | irrelevant | 2 | 0 | The paper is a review article discussing the development and clinical trials of selexipag, but the provided evidence contains no original quantitative pharmacokinetic parameter values (e.g., CL, V, t1/2). |
| PD | Sardana_2016 | not_relevant | 2 | 1 | The text is an abstract of a review article that discusses the pharmacodynamics of selexipag qualitatively but does not provide specific numeric PD parameters or exposure-response data. |
| popPK | Skoro-Sajer_2014 | irrelevant | 0 | 0 | The paper is a Phase 3 clinical efficacy and safety trial (GRIPHON) reporting clinical endpoints, not a pharmacokinetic study with disposition parameters. |
| PD | Skoro-Sajer_2014 | not_relevant | 0 | 0 | The paper is a Phase 3 clinical trial (GRIPHON) reporting clinical efficacy and safety outcomes (time-to-event, 6MWD) but does not contain pharmacokinetic data, concentration-effect modeling, or numeric PD parameters (e.g., Emax, EC50). |
| popPK | Varian_2024 | irrelevant | 0 | 0 | The paper is a clinical trial protocol for pulmonary arterial hypertension that uses selexipag as a therapeutic agent but does not report any pharmacokinetic parameters or disposition data. |
| PD | Varian_2024 | not_relevant | 0 | 0 | The text is a study protocol for a clinical trial comparing therapeutic strategies and does not report any pharmacokinetic or pharmacodynamic data, exposure-response relationships, or numeric PD parameters. |
| PGx | Wu_2022 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions (CYP2C8 inhibitors) for selexipag, not pharmacogenomic effects of gene variants on PK/PD parameters. |
| popPK | Zhang_2024 | irrelevant | 0 | 0 | The paper is a pharmacovigilance study on PDE5 inhibitors and hearing impairment, where selexipag is only listed as a concomitant medication, and no PK parameters for selexipag are reported. |
| PD | Zhang_2024 | not_relevant | 0 | 0 | The paper is a pharmacovigilance study analyzing adverse event reports (hearing impairment) for PDE5 inhibitors using disproportionality analysis; it does not report any pharmacodynamic, exposure-response, or dose-response relationships or numeric PD parameters for selexipag. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_selexipag`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
