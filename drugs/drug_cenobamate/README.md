# cenobamate

- **generic name:** cenobamate
- **ATC codes:** `N03AX25`
- **DrugBank:** [DB06119](https://go.drugbank.com/drugs/DB06119)
- **groups:** approved, investigational

## About

**Description.** Cenobamate, or YKP-3089, is an antiepileptic drug developed by SK Pharmaceuticals and used to treat partial onset seizures.[A188442,L10653] The exact mechanism of action has not been described in the literature, though it positively modulates GABA<sub>A</sub> and inhibits voltage gated sodium channels.[L10653]

Cenobamate was granted FDA approval on 21 November 2019.[L10653]

**Indication.** Cenobamate is indicated for the treatment of partial onset seizures in adults.[L10653]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-10 00:11 | 15:24 | 0/0/0 | 2/1/0 | 0/0/6 | 249,495/4,993 | ollama / qwen3.8:27b-mtp-q8_0 | 20 | 3/17 | 19/1 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Choi_2026](drugs/drug_cenobamate/pd_Choi_2026_seizure_activity.md) | Choi YM et al., The Discovery of Cenobamate: A Drug wit…, CNS drugs (2026) | [10.1007/s40263-026-01290-z](https://doi.org/10.1007/s40263-026-01290-z) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Mateias_2024](drugs/drug_cenobamate/pd_Mateias_2024_APD90.md) | Mateias AL et al., Inhibitory Effects of Cenobamate on Mul…, Biomolecules (2024) | [10.3390/biom14121582](https://doi.org/10.3390/biom14121582) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Mateias_2024](drugs/drug_cenobamate/pd_Mateias_2024_ICaL.md) | Mateias AL et al., Inhibitory Effects of Cenobamate on Mul…, Biomolecules (2024) | [10.3390/biom14121582](https://doi.org/10.3390/biom14121582) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Mateias_2024](drugs/drug_cenobamate/pd_Mateias_2024_IKr.md) | Mateias AL et al., Inhibitory Effects of Cenobamate on Mul…, Biomolecules (2024) | [10.3390/biom14121582](https://doi.org/10.3390/biom14121582) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Mateias_2024](drugs/drug_cenobamate/pd_Mateias_2024_IKs.md) | Mateias AL et al., Inhibitory Effects of Cenobamate on Mul…, Biomolecules (2024) | [10.3390/biom14121582](https://doi.org/10.3390/biom14121582) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Mateias_2024](drugs/drug_cenobamate/pd_Mateias_2024_late_INa.md) | Mateias AL et al., Inhibitory Effects of Cenobamate on Mul…, Biomolecules (2024) | [10.3390/biom14121582](https://doi.org/10.3390/biom14121582) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Mateias_2024](drugs/drug_cenobamate/pd_Mateias_2024_peak_INa.md) | Mateias AL et al., Inhibitory Effects of Cenobamate on Mul…, Biomolecules (2024) | [10.3390/biom14121582](https://doi.org/10.3390/biom14121582) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Bettio_2025](drugs/drug_cenobamate/pd_Bettio_2025_unknown.md) | Bettio L et al., The Pharmacokinetic and Pharmacodynamic…, International journal of mo… (2025) | [10.3390/ijms26157029](https://doi.org/10.3390/ijms26157029) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **CYP2A6** | `Q27` · CL/F | metabolism | [dOrsi_2026](drugs/drug_cenobamate/pgx_dOrsi_2026_CYP2A6_Q27.md) | dOrsi (2026) | — |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **CYP2B6** | `Q27` · CL/F | metabolism | [dOrsi_2026](drugs/drug_cenobamate/pgx_dOrsi_2026_CYP2B6_Q27.md) | dOrsi (2026) | — |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **CYP2C19** | `Q27` · CL/F | metabolism | [dOrsi_2026](drugs/drug_cenobamate/pgx_dOrsi_2026_CYP2C19_Q27.md) | dOrsi (2026) | — |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **CYP2E1** | `Q27` · CL/F | metabolism | [dOrsi_2026](drugs/drug_cenobamate/pgx_dOrsi_2026_CYP2E1_Q27.md) | dOrsi (2026) | — |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **UGT2B4** | `Q27` · CL/F | metabolism | [dOrsi_2026](drugs/drug_cenobamate/pgx_dOrsi_2026_UGT2B4_Q27.md) | dOrsi (2026) | — |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **UGT2B7** | `Q27` · CL/F | metabolism | [dOrsi_2026](drugs/drug_cenobamate/pgx_dOrsi_2026_UGT2B7_Q27.md) | dOrsi (2026) | — |

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Coverage

- **PubMed hits:** 57 matched, 56 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Vashi_2023.pdf` | Vashi V et al., Pharmacokinetics of cenobamate as monot…, Epilepsy research (2023) | popPK | 8 | [10.1016/j.eplepsyres.2023.107185](https://doi.org/10.1016/j.eplepsyres.2023.107185) | [37429218](https://pubmed.ncbi.nlm.nih.gov/37429218) | The paper describes a population PK model for cenobamate and reports specific effects on clearance (CL/F) and AUC ratios, but does not provide the absolute numeric values for clearance, volume, or half-life required for parameter extraction. |
| `Falcicchio_2026.pdf` | Falcicchio G et al., Early sedation-related adverse events w…, Neurological sciences : off… (2026) | pgx | 8 | [10.1007/s10072-026-09048-7](https://doi.org/10.1007/s10072-026-09048-7) | [42014614](https://www.ncbi.nlm.nih.gov/pubmed/42014614) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Barbieri_2023.pdf` | Barbieri MA et al., Cenobamate: A Review of its Pharmacolog…, CNS & neurological disorder… (2023) | pgx | 7 | [10.2174/1871527321666220113110044](https://doi.org/10.2174/1871527321666220113110044) | [35049441](https://www.ncbi.nlm.nih.gov/pubmed/35049441) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Roberti_2021.pdf` | Roberti R et al., Pharmacology of Cenobamate: Mechanism o…, CNS drugs (2021) | pgx | 7 | [10.1007/s40263-021-00819-8](https://doi.org/10.1007/s40263-021-00819-8) | [33993416](https://www.ncbi.nlm.nih.gov/pubmed/33993416) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-09-10T00:05:50.876118+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abou-Khalil_2022 | irrelevant | 0 | 0 | The paper is a general review of antiseizure medications and does not report original quantitative pharmacokinetic parameters for cenobamate. |
| PD | Abou-Khalil_2022 | not_relevant | 0 | 0 | The provided text is only the title and publication history of a review article, containing no data, models, or numeric parameters. |
| PGx | Barbieri_2023 | not_relevant | 0 | 0 | The paper is a general review of cenobamate's pharmacology and clinical efficacy, reporting no specific pharmacogenomic effects of gene variants on its PK or PD parameters. |
| PGx | Becker_2024 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (cenobamate inducing CYP3A4 to lower everolimus levels), not a pharmacogenomic effect on cenobamate's PK/PD. |
| PGx | Bender_2025 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (Cenobamate inhibiting CYP2C19 affecting Brivaracetam levels) but explicitly states that no genetic testing was performed and does not report pharmacogenomic effects. |
| popPK | Bettio_2025 | irrelevant | 2 | 0 | The study reports EC50 and B/P ratios for cenobamate in rodents but does not provide quantitative disposition parameters like clearance, volume, or half-life. |
| PGx | Charlier_2022 | not_relevant | 0 | 0 | The paper describes the development and validation of an analytical method for quantifying cenobamate in plasma and reports preliminary PK data for two patients, but it does not investigate or report any pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| popPK | Choi_2026 | irrelevant | 1 | 0 | The paper is a review of the drug discovery and preclinical profile of cenobamate, focusing on efficacy in animal models and mechanism of action, without reporting quantitative human or animal population pharmacokinetic parameters (CL, V, Q, ka). |
| popPK | Ciullo_2026 | irrelevant | 0 | 0 | The study is a clinical effectiveness trial of clobazam add-on in patients with epilepsy and does not report any quantitative pharmacokinetic parameters (e.g., clearance, volume, half-life) for cenobamate. |
| PD | Ciullo_2026 | not_relevant | 3 | 2 | The study is a real-world clinical trial reporting seizure reduction outcomes and a descriptive relationship between clobazam dose and response, but it does not report a pharmacokinetic-pharmacodynamic model or numeric PD parameters (e.g., EC50, Emax) for cenobamate. |
| PGx | Cohen_2024 | not_relevant | 0 | 0 | The paper reports the enzyme-inducing potential of cenobamate on CYP3A substrates, not the effect of a gene variant on cenobamate's PK or PD. |
| PGx | Cohen_2026 | not_relevant | 0 | 0 | The paper reports drug-drug interactions (enzyme induction) involving cenobamate, not pharmacogenomic effects (gene variants) on its PK/PD. |
| popPK | Dono_2026 | irrelevant | 0 | 0 | The paper is a clinical effectiveness study reporting seizure outcomes and retention rates, containing no pharmacokinetic parameters (CL, V, ka, etc.) for cenobamate. |
| PGx | Falcicchio_2026 | not_relevant | 3 | 2 | The paper reports an association between CYP2C19 phenotype and adverse events (sedation) but does not report specific pharmacokinetic or pharmacodynamic parameter changes (e.g., AUC, Cmax, ED50) for cenobamate. |
| PGx | Greene_2022 | not_relevant | 0 | 0 | The study evaluates drug-drug interactions (CYP enzyme induction/inhibition) in a general healthy population, not pharmacogenomic effects based on specific gene variants or genotypes. |
| popPK | Henry_2025 | irrelevant | 0 | 0 | The paper is a meta-analysis of graphical representations of seizure frequency in clinical trials, not a pharmacokinetic study, and contains no PK parameters for cenobamate. |
| PD | Henry_2025 | not_relevant | 0 | 0 | The paper is a bibliometric analysis of graphical representations of seizure frequency increases in clinical trials and labels, containing no pharmacokinetic or pharmacodynamic modeling or numeric PD parameters for cenobamate. |
| popPK | Karaźniewicz-Łada_2021 | irrelevant | 2 | 0 | The paper is a review of drug-drug interactions that discusses cenobamate qualitatively (e.g., % changes in AUC/Cmax) but does not report original quantitative disposition parameters (CL, V, Q, ka) for cenobamate as the subject. |
| PD | Karaźniewicz-Łada_2021 | not_relevant | 1 | 0 | The paper is a review of pharmacokinetic drug-drug interactions and does not report any pharmacodynamic or exposure-response models for cenobamate. |
| popPK | Kawai_2026 | irrelevant | 0 | 0 | The paper is a clinical efficacy study reporting seizure frequency reductions and responder rates, containing no pharmacokinetic parameters (CL, V, ka, etc.) for cenobamate. |
| popPK | Krauss_2020 | irrelevant | 0 | 0 | The paper is a clinical efficacy and safety trial for focal seizures and does not report pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Krauss_2025 | irrelevant | 0 | 0 | The paper is a clinical review focusing on tolerability and dosing strategies, containing no quantitative pharmacokinetic parameters for cenobamate. |
| PD | Krauss_2025 | not_relevant | 1 | 0 | The text is a qualitative review of tolerability and dosing strategies for cenobamate and other ASMs, containing no numeric PD parameters, exposure-response data, or dose-effect curves. |
| popPK | Lee_2026 | irrelevant | 0 | 0 | The paper reports clinical efficacy and safety outcomes (seizure frequency reduction, adverse events) rather than pharmacokinetic parameters. |
| PD | Lee_2026 | not_relevant | 0 | 0 | The paper reports clinical efficacy outcomes (seizure frequency reduction) in an open-label extension study but does not provide pharmacokinetic data, concentration-effect analysis, or numeric PD parameters. |
| PGx | Martins_2026 | not_relevant | 0 | 0 | The paper is a review of the antiseizure medication pipeline and does not report specific pharmacogenomic effects on the PK/PD of cenobamate. |
| popPK | Mateias_2024 | irrelevant | 0 | 0 | The paper is an in-vitro cardiac safety pharmacology study (patch-clamp) reporting ion channel inhibition (IC50) and electrophysiological effects, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Osborn_2023 | irrelevant | 2 | 0 | The study focuses on the pharmacodynamic interaction and clinical response to clobazam, reporting only qualitative changes in the N-desmethylclobazam/clobazam ratio without providing quantitative pharmacokinetic parameters (CL, V, ka) for cenobamate. |
| PD | Osborn_2023 | not_relevant | 3 | 2 | The paper reports qualitative observations of sedation onset and seizure response at specific dose ranges (25-100 mg) but does not provide a quantitative concentration-effect curve, Emax, EC50, or other numeric PD parameters. |
| popPK | Poza_2026 | irrelevant | 0 | 0 | The paper is a narrative review discussing clinical efficacy and adverse effects, containing no quantitative pharmacokinetic parameters or models for cenobamate. |
| PD | Poza_2026 | not_relevant | 1 | 0 | The text is a qualitative review discussing clinical efficacy and general pharmacodynamic interactions without reporting any numeric PD parameters or exposure-response data. |
| popPK | Roberti_2021 | irrelevant | 0 | 0 | The provided evidence contains only the title of a review article and no quantitative pharmacokinetic parameter values for cenobamate. |
| PD | Roberti_2021 | not_relevant | 2 | 0 | The paper is a review of pharmacology, PK, and tolerability, and does not report specific numeric PD parameters (e.g., EC50, Emax) or an extractable exposure-response curve for cenobamate. |
| PGx | Roberti_2021 | not_relevant | 0 | 0 | The paper is a general review of cenobamate pharmacology and does not report specific pharmacogenomic effects of gene variants on PK or PD parameters. |
| popPK | Sammarra_2026 | irrelevant | 0 | 0 | The paper is a neuropsychological study assessing cognitive and psychopathological outcomes of cenobamate treatment, containing no pharmacokinetic parameters. |
| popPK | Serratosa_2026 | irrelevant | 0 | 0 | The paper is a clinical efficacy study reporting seizure-free days and retention rates, containing no pharmacokinetic parameters or disposition data for cenobamate. |
| PD | Serratosa_2026 | not_relevant | 0 | 0 | The paper reports clinical outcomes (seizure-free days) by responder groups but does not provide pharmacokinetic data, concentration-effect relationships, or numeric PD parameters. |
| popPK | Sharma_2020 | irrelevant | 0 | 0 | The paper describes in-vitro mechanistic studies on GABA receptors and does not report any pharmacokinetic parameters for cenobamate. |
| popPK | Smith_2022 | irrelevant | 0 | 0 | The paper is a clinical consensus guideline for dose adjustments of concomitant medications and does not report original quantitative pharmacokinetic parameters (CL, V, ka, etc.) for cenobamate. |
| PD | Smith_2022 | not_relevant | 1 | 0 | The paper is an expert consensus on dose adjustments for concomitant medications and does not report any quantitative pharmacodynamic or exposure-response analysis for cenobamate. |
| popPK | Steinhoff_2024 | irrelevant | 0 | 0 | The paper is a Delphi panel consensus on clinical management and titration strategies, not a pharmacokinetic study, and it does not report quantitative PK parameters (CL, V, ka, etc.) for cenobamate. |
| PD | Steinhoff_2024 | not_relevant | 0 | 0 | The paper is a Delphi consensus report on clinical management strategies and does not contain any pharmacodynamic modeling, exposure-response analysis, or numeric PD parameters. |
| popPK | Stoschus_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of phenobarbital, with cenobamate mentioned only as a potential covariate for comedication. |
| PD | Stoschus_2025 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for phenobarbital, not a pharmacodynamic (PD) or exposure-response model for cenobamate. |
| popPK | Strzelczyk_2020 | irrelevant | 2 | 0 | The paper is a review article summarizing existing data and does not present original quantitative pharmacokinetic parameter values for cenobamate in the provided evidence. |
| PD | Strzelczyk_2020 | not_relevant | 2 | 1 | The text is a review summary that mentions pharmacodynamics and efficacy ranges but does not provide specific numeric PD parameters (e.g., EC50, Emax) or detailed concentration-effect data. |
| popPK | Vashi_2023 | relevant | 8 | 2 | The paper describes a population PK model for cenobamate and reports specific effects on clearance (CL/F) and AUC ratios, but does not provide the absolute numeric values for clearance, volume, or half-life required for parameter extraction. |
| popPK | Vlakou_2025 | irrelevant | 0 | 0 | The paper is a clinical efficacy review and case report focusing on seizure outcomes, not a pharmacokinetic study reporting quantitative disposition parameters. |
| PD | Vlakou_2025 | not_relevant | 2 | 0 | The paper is a case report and systematic review summarizing clinical seizure outcomes (percentages of reduction/freedom) and adverse events, but it does not report any numeric pharmacodynamic parameters (e.g., Emax, EC50) or concentration-effect/dose-response curves. |
| popPK | Wu_2025 | irrelevant | 0 | 0 | The paper is a clinical efficacy study reporting seizure frequency and responder rates, not a pharmacokinetic study with disposition parameters. |
| PD | Wu_2025 | not_relevant | 3 | 2 | The paper reports clinical dose-response efficacy data (seizure frequency reduction by dose) but does not provide pharmacokinetic data or a formal PK/PD model with numeric parameters like EC50 or Emax. |
| PGx | Zaccara_2021 | not_relevant | 0 | 0 | The paper is a general review of cenobamate's pharmacokinetics and clinical efficacy, discussing drug-drug interactions and special populations, but it does not report any pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| PGx | Zillgitt_2025 | not_relevant | 2 | 1 | The paper reports a pharmacogenomic effect on the PK of clobazam (N-desmethylclobazam), not cenobamate. |
| PGx | dOrsi_2026_2 | not_relevant | 0 | 0 | The text is a correction notice regarding missing acknowledgements and does not contain any data or results regarding pharmacogenomic effects on PK/PD parameters. |
| popPK | unknown_2022 | irrelevant | 0 | 0 | The evidence consists only of a conference title with no specific study data, parameters, or mention of cenobamate. |
| PD | unknown_2022 | not_relevant | 0 | 0 | The provided text is only a title of a conference abstract collection and contains no specific data, models, or parameters for cenobamate. |
| popPK | Şulea_2025 | irrelevant | 0 | 0 | The paper is a mechanistic in-silico study on ion channel binding and does not report pharmacokinetic disposition parameters for cenobamate. |
| PD | Şulea_2025 | not_relevant | 3 | 2 | The paper reports in vitro IC50 values and computational binding affinities (Kd) for Nav1.5, but lacks an in vivo or clinical exposure-response (PK/PD) analysis with numeric PD parameters like Emax or EC50 derived from concentration-effect data. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_cenobamate`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
