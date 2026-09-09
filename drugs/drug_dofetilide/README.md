# dofetilide

- **generic name:** dofetilide
- **ATC codes:** `C01BD04`
- **DrugBank:** [DB00204](https://go.drugbank.com/drugs/DB00204)
- **groups:** approved, investigational

## About

**Description.** Dofetilide is a class III antiarrhythmic agent that is approved by the Food and Drug Administration (FDA) for the maintenance of sinus rhythm in individuals prone to the formation of atrial fibrillation and flutter, and for the chemical cardioversion to sinus rhythm from atrial fibrillation and flutter.

**Indication.** For the maintenance of normal sinus rhythm (delay in time to recurrence of atrial fibrillation/atrial flutter [AF/AFl]) in patients with atrial fibrillation/atrial flutter of greater than one week duration who have been converted to normal sinus rhythm

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-09 09:09 | 12:43 | 0/1/0 | 1/1/0 | 0/0/1 | 144,490/15,410 | ollama / qwen3.8:27b-mtp-q8_0 | 6 | 2/4 | 5/1 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Gotta_2015](drugs/drug_dofetilide/Dofetilide_Gotta2015_reference.md) | Gotta V et al., Inter-study variability of preclinical…, British journal of pharmaco… (2015) | [10.1111/bph.13218](https://doi.org/10.1111/bph.13218) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Gotta_2015](drugs/drug_dofetilide/pd_Gotta_2015_QTc.md) | Gotta V et al., Inter-study variability of preclinical…, British journal of pharmaco… (2015) | [10.1111/bph.13218](https://doi.org/10.1111/bph.13218) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Aguado-Sierra_2024](drugs/drug_dofetilide/pd_Aguado_Sierra_2024_QT.md) | Aguado-Sierra J et al., Virtual clinical QT exposure-response s…, Journal of pharmacological… (2024) | [10.1016/j.vascn.2024.107498](https://doi.org/10.1016/j.vascn.2024.107498) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **SLC47A1** | `Q27` · CL/F | transport | [Uddin_2022](drugs/drug_dofetilide/pgx_Uddin_2022_SLC47A1_Q27.md) | Uddin ME et al., MATE1 Deficiency Exacerbates Dofetilide…, International journal of mo… (2022) | [10.3390/ijms23158607](https://doi.org/10.3390/ijms23158607) |

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Coverage

- **PubMed hits:** 52 matched, 29 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_9 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Le_1995.pdf` | Le Coz F et al., Pharmacokinetic and pharmacodynamic mod…, Clinical pharmacology and t… (1995) | popPK | 10 | [10.1016/0009-9236(95)90038-1](https://doi.org/10.1016/0009-9236(95)90038-1) | [7768076](https://pubmed.ncbi.nlm.nih.gov/7768076) | The title indicates a PK/PD modeling study of dofetilide, but the provided evidence contains only the title and no numeric parameter values. |
| `Tunblad_2008.pdf` | Tunblad K et al., The use of clinical irrelevance criteri…, Journal of pharmacokinetics… (2008) | popPK | 10 | [10.1007/s10928-008-9099-z](https://doi.org/10.1007/s10928-008-9099-z) | [19011957](https://pubmed.ncbi.nlm.nih.gov/19011957) | The paper describes a population PK study for dofetilide, but the provided evidence contains only the abstract and methodology, with no specific numeric parameter values (CL, V, etc.) present. |
| `Jonker_2005.pdf` | Jonker DM et al., A pharmacokinetic-pharmacodynamic model…, Clinical pharmacology and t… (2005) | popPK | 9 | [10.1016/j.clpt.2005.02.004](https://doi.org/10.1016/j.clpt.2005.02.004) | [15961988](https://pubmed.ncbi.nlm.nih.gov/15961988) | The paper describes a population PK model for dofetilide, but the specific numeric parameter values (CL, V, Q, ka) are not present in the provided evidence, only qualitative model descriptions and PD parameters. |
| `Ollerstam_2006.pdf` | Ollerstam A et al., Pharmacokinetic-pharmacodynamic modelin…, Journal of pharmacological… (2006) | popPK | 8 | [10.1016/j.vascn.2005.07.002](https://doi.org/10.1016/j.vascn.2005.07.002) | [16140023](https://pubmed.ncbi.nlm.nih.gov/16140023) | The study reports a two-compartment PK model for dofetilide in dogs, but specific numeric values for clearance, volume, or half-life are not provided in the text, only PD parameters (EC50, Emax) and equilibrium half-life. |
| `Parkinson_2013.pdf` | Parkinson J et al., Translational pharmacokinetic-pharmacod…, Journal of pharmacological… (2013) | pd | 5 | [10.1016/j.vascn.2013.03.007](https://doi.org/10.1016/j.vascn.2013.03.007) | [23567074](https://www.ncbi.nlm.nih.gov/pubmed/23567074) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Sahli_2019.pdf` | Sahli Costabal F et al., Predicting critical drug concentrations…, Progress in biophysics and… (2019) | pd | 5 | [10.1016/j.pbiomolbio.2018.10.003](https://doi.org/10.1016/j.pbiomolbio.2018.10.003) | [30482568](https://www.ncbi.nlm.nih.gov/pubmed/30482568) | metadata signals extractable PD data (exposure-response) |
| `Wallman_2022.pdf` | Wallman M et al., An integrative pharmacokinetic-cardiova…, Journal of pharmacological… (2022) | pd | 5 | [10.1016/j.vascn.2022.107171](https://doi.org/10.1016/j.vascn.2022.107171) | [35398273](https://www.ncbi.nlm.nih.gov/pubmed/35398273) | metadata signals extractable PD data (EC50) |
| `Walker_1996.pdf` | Walker DK et al., Significance of metabolism in the dispo…, Drug metabolism and disposi… (1996) | pgx | 7 | not captured | [8801060](https://www.ncbi.nlm.nih.gov/pubmed/8801060) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Yamreudeewong_2003.pdf` | Yamreudeewong W et al., Potentially significant drug interactio…, Drug safety (2003) | pgx | 7 | [10.2165/00002018-200326060-00004](https://doi.org/10.2165/00002018-200326060-00004) | [12688833](https://www.ncbi.nlm.nih.gov/pubmed/12688833) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |

<sub>queue written 2026-09-09T09:03:08.051438+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aguado-Sierra_2024 | irrelevant | 0 | 0 | The paper is an in silico cardiac electrophysiology study using dofetilide as a reference compound for QT prolongation modeling, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Black-Maier_2015 | not_relevant | 0 | 0 | The paper focuses on bucindolol and its pharmacogenetics, not dofetilide. |
| popPK | Brockway_2018 | irrelevant | 2 | 2 | The study is an ECG biomarker comparison where dofetilide is a probe drug, and while a half-life is mentioned, no quantitative disposition parameters (CL, V, Q, ka) or compartmental models are reported. |
| popPK | Bystricky_2020 | irrelevant | 0 | 0 | The paper is a cardiac safety study analyzing ECG repolarization dynamics (T vector velocity) and does not report pharmacokinetic disposition parameters (CL, V, etc.) for dofetilide. |
| PGx | Deneer_2011 | not_relevant | 0 | 0 | The paper is a review of age-related changes in antiarrhythmic pharmacokinetics and explicitly states that dofetilide clearance is not affected by age, without reporting any specific pharmacogenomic effects on dofetilide. |
| popPK | Jonker_2005 | relevant | 9 | 2 | The paper describes a population PK model for dofetilide, but the specific numeric parameter values (CL, V, Q, ka) are not present in the provided evidence, only qualitative model descriptions and PD parameters. |
| PGx | Kinney_2018 | not_relevant | 4 | 2 | The study reports an association between microsatellite markers and QTc response (a PD parameter) but lacks a fitted quantitative effect size and is a very small pilot study (n=14) without specific genotype-phenotype effect estimates. |
| popPK | Komatsu_2019 | irrelevant | 2 | 0 | The study focuses on exposure-response analysis for QT prolongation in monkeys and does not report quantitative pharmacokinetic disposition parameters (CL, V, etc.) for dofetilide. |
| popPK | Le_1995 | relevant | 10 | 0 | The title indicates a PK/PD modeling study of dofetilide, but the provided evidence contains only the title and no numeric parameter values. |
| popPK | Oboh_2023 | irrelevant | 0 | 0 | The paper is a structure-activity relationship study for anti-Cryptosporidium compounds where dofetilide is used only as a radioligand for binding assays, not as the subject of a pharmacokinetic study. |
| PD | Oboh_2023 | not_relevant | 0 | 0 | The paper reports structure-activity relationships (SAR) and EC50 values for anti-Cryptosporidium compounds, not a pharmacodynamic or exposure-response relationship for dofetilide. |
| popPK | Ollerstam_2006 | relevant | 8 | 2 | The study reports a two-compartment PK model for dofetilide in dogs, but specific numeric values for clearance, volume, or half-life are not provided in the text, only PD parameters (EC50, Emax) and equilibrium half-life. |
| popPK | Parkinson_2013 | irrelevant | 0 | 0 | The provided evidence contains only the title and no quantitative pharmacokinetic parameter values for dofetilide. |
| popPK | Sahli_2019 | irrelevant | 0 | 0 | The provided evidence contains only the paper title and no quantitative pharmacokinetic parameters or data for dofetilide. |
| popPK | San_2026 | irrelevant | 0 | 0 | The study focuses on the association between sex hormones and ECG repolarization dynamics (QT interval) in patients taking dofetilide, and does not report any pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| popPK | Stabenau_2020 | irrelevant | 1 | 0 | The study focuses on electrocardiographic effects (GEH) and pharmacodynamics rather than reporting quantitative pharmacokinetic disposition parameters (CL, V, etc.) for dofetilide. |
| popPK | Tunblad_2008 | relevant | 10 | 0 | The paper describes a population PK study for dofetilide, but the provided evidence contains only the abstract and methodology, with no specific numeric parameter values (CL, V, etc.) present. |
| PGx | Walker_1996 | not_relevant | 0 | 0 | The paper characterizes the metabolic pathway (CYP3A4) and metabolite activity but does not report any pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| popPK | Wallman_2021 | irrelevant | 1 | 0 | The study is a pharmacodynamic analysis of cardiovascular biomarkers (QT, HR, BP) in rats, reporting potency and efficacy parameters rather than quantitative pharmacokinetic disposition parameters (CL, V, ka) for dofetilide. |
| popPK | Wallman_2022 | irrelevant | 0 | 0 | The paper focuses on an integrative modeling approach using five reference compounds in dogs and does not report quantitative PK parameters for dofetilide. |
| PD | Wallman_2022 | not_relevant | 0 | 0 | The paper focuses on an integrative PK-cardiovascular physiology modeling approach in dogs using five reference compounds and does not report specific pharmacodynamic or exposure-response parameters for dofetilide. |
| popPK | Watson_2011 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and QTc effects of Moxifloxacin, with Dofetilide serving only as a comparator in an in-vitro hERG channel blockade assay, and no PK parameters for Dofetilide are reported. |
| PGx | Yamreudeewong_2003 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions (DDIs) involving CYP3A4 and renal transporters, but does not report any pharmacogenomic effects (gene variants/genotypes) on dofetilide PK or PD. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_dofetilide`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
