<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01B&quot;,&quot;href&quot;:&quot;atc/L01B.md&quot;},{&quot;label&quot;:&quot;tioguanine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tioguanine_Jiang2025_reference&quot;,&quot;label&quot;:&quot;Jiang_2025_reference&quot;,&quot;href&quot;:&quot;drugs/drug_tioguanine/Tioguanine_Jiang2025_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tioguanine_Leblond2023_reference&quot;,&quot;label&quot;:&quot;Leblond_2023_reference&quot;,&quot;href&quot;:&quot;drugs/drug_tioguanine/Tioguanine_Leblond2023_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tioguanine_Bayoumy2025_reference&quot;,&quot;label&quot;:&quot;Bayoumy_2025_reference&quot;,&quot;href&quot;:&quot;drugs/drug_tioguanine/Tioguanine_Bayoumy2025_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# tioguanine

- **generic name:** tioguanine
- **ATC codes:** `L01BB03`
- **DrugBank:** [DB00352](https://go.drugbank.com/drugs/DB00352)
- **groups:** approved, investigational

## About

**Description.** An antineoplastic compound which also has antimetabolite action. The drug is used in the therapy of acute leukemia.

**Indication.** For remission induction and remission consolidation treatment of acute nonlymphocytic leukemias.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-15 08:37 | 28:56 | 2/1/0 | 0/0/1 | 6/0/8 | 337,469/43,436 | ollama / qwen3.8:27b-mtp-q8_0 | 26 | 2/21 | 23/0 | 1 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Jiang_2025_reference](drugs/drug_tioguanine/Tioguanine_Jiang2025_reference.md) | Jiang L et al., Drug-Drug Interactions and Individualiz…, Drug design, development an… (2025) | [10.2147/dddt.s547878](https://doi.org/10.2147/dddt.s547878) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: T6_deviations</sub><br><sub>route_to: `engineer`</sub> | [Leblond_2023_reference](drugs/drug_tioguanine/Tioguanine_Leblond2023_reference.md) | Leblond P et al., Phase I Study of a Combination of Fluva…, Cancers (2023) | [10.3390/cancers15072020](https://doi.org/10.3390/cancers15072020) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Bayoumy_2025_reference](drugs/drug_tioguanine/Tioguanine_Bayoumy2025_reference.md) | Bayoumy AB et al., Population Pharmacokinetics Model of Th…, Clinical pharmacokinetics (2025) | [10.1007/s40262-025-01532-1](https://doi.org/10.1007/s40262-025-01532-1) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> | [Simsek_2019](drugs/drug_tioguanine/pd_Simsek_2019_CE.md) | Simsek M et al., Sustained effectiveness, safety and the…, Alimentary pharmacology & t… (2019) | [10.1111/apt.15280](https://doi.org/10.1111/apt.15280) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | **TPMT** | `safety` — adverse-reaction risk (HLA / safety allele) — no parameter shift | safety_allele | [Deben_2023](drugs/drug_tioguanine/pgx_Deben_2023_TPMT_safety.md) | Deben DS et al., Implications of Tioguanine Dosing in IB…, Metabolites (2023) | [10.3390/metabo13101054](https://doi.org/10.3390/metabo13101054) |
| <span class="pk-badge pk-badge--green">extracted</span> | **NUDT15** | `safety` — adverse-reaction risk (HLA / safety allele) — no parameter shift | safety_allele | [Maillard_2026](drugs/drug_tioguanine/pgx_Maillard_2026_NUDT15_safety.md) | Maillard Maud et al., Clinical Pharmacogenetics Implementatio…, Clinical pharmacology and t… (2026) | [10.1002/cpt.70209](https://doi.org/10.1002/cpt.70209) |
| <span class="pk-badge pk-badge--green">extracted</span> | **TPMT** | `safety` — adverse-reaction risk (HLA / safety allele) — no parameter shift | safety_allele | [Maillard_2026](drugs/drug_tioguanine/pgx_Maillard_2026_TPMT_safety.md) | Maillard Maud et al., Clinical Pharmacogenetics Implementatio…, Clinical pharmacology and t… (2026) | [10.1002/cpt.70209](https://doi.org/10.1002/cpt.70209) |
| <span class="pk-badge pk-badge--green">extracted</span> | **TPMT** | `safety` — adverse-reaction risk (HLA / safety allele) — no parameter shift | safety_allele | [PMID21270794_2011](drugs/drug_tioguanine/pgx_PMID21270794_2011_TPMT_safety.md) | PMID21270794, Clinical Pharmacogenetics Implementatio… (2011) | [10.1038/clpt.2010.320](https://doi.org/10.1038/clpt.2010.320) |
| <span class="pk-badge pk-badge--green">extracted</span> | **NUDT15** | `safety` — adverse-reaction risk (HLA / safety allele) — no parameter shift | safety_allele | [PMID30447069_2019](drugs/drug_tioguanine/pgx_PMID30447069_2019_NUDT15_safety.md) | PMID30447069, Clinical Pharmacogenetics Implementatio… (2019) | [10.1002/cpt.1304](https://doi.org/10.1002/cpt.1304) |
| <span class="pk-badge pk-badge--green">extracted</span> | **TPMT** | `safety` — adverse-reaction risk (HLA / safety allele) — no parameter shift | safety_allele | [PMID30447069_2019](drugs/drug_tioguanine/pgx_PMID30447069_2019_TPMT_safety.md) | PMID30447069, Clinical Pharmacogenetics Implementatio… (2019) | [10.1002/cpt.1304](https://doi.org/10.1002/cpt.1304) |
| <span class="pk-badge pk-badge--neutral">guideline_estimate</span> | **NUDT15** | `Q27` · CL | metabolism | [guideline](drugs/drug_tioguanine/pgx_guideline_NUDT15_PA166184612_6.md) | guideline | — |
| <span class="pk-badge pk-badge--neutral">guideline_estimate</span> | **NUDT15** | `Q27` · CL | metabolism | [guideline](drugs/drug_tioguanine/pgx_guideline_NUDT15_PA166184612_7.md) | guideline | — |
| <span class="pk-badge pk-badge--neutral">guideline_estimate</span> | **TPMT** | `Q27` · CL | metabolism | [guideline](drugs/drug_tioguanine/pgx_guideline_TPMT_PA166104960_0.md) | guideline | — |
| <span class="pk-badge pk-badge--neutral">guideline_estimate</span> | **TPMT** | `Q27` · CL | metabolism | [guideline](drugs/drug_tioguanine/pgx_guideline_TPMT_PA166104960_1.md) | guideline | — |
| <span class="pk-badge pk-badge--neutral">guideline_estimate</span> | **TPMT** | `Q27` · CL | metabolism | [guideline](drugs/drug_tioguanine/pgx_guideline_TPMT_PA166104960_2.md) | guideline | — |
| <span class="pk-badge pk-badge--neutral">guideline_estimate</span> | **TPMT** | `Q27` · CL | metabolism | [guideline](drugs/drug_tioguanine/pgx_guideline_TPMT_PA166104960_3.md) | guideline | — |
| <span class="pk-badge pk-badge--neutral">guideline_estimate</span> | **TPMT** | `Q27` · CL | metabolism | [guideline](drugs/drug_tioguanine/pgx_guideline_TPMT_PA166104960_4.md) | guideline | — |
| <span class="pk-badge pk-badge--neutral">guideline_estimate</span> | **TPMT** | `Q27` · CL | metabolism | [guideline](drugs/drug_tioguanine/pgx_guideline_TPMT_PA166104960_5.md) | guideline | — |

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Coverage

- **PubMed hits:** 217 matched, 65 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 3  ·  extracted 1  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lu_1982.pdf` | Lu K et al., Pharmacokinetics and metabolism of beta…, Cancer chemotherapy and pha… (1982) | popPK | 9 | [10.1007/BF00292882](https://doi.org/10.1007/BF00292882) | [7094197](https://pubmed.ncbi.nlm.nih.gov/7094197) | The paper reports quantitative pharmacokinetic parameters (initial and terminal half-lives) for 6-thioguanine in humans, with values explicitly stated in the text. |
| `Deben_2023.pdf` | Deben DS et al., Implications of Tioguanine Dosing in IB…, Metabolites (2023) | pgx | 8 | [10.3390/metabo13101054](https://doi.org/10.3390/metabo13101054) | [37887379](https://www.ncbi.nlm.nih.gov/pubmed/37887379) | metadata signals extractable PGX data (TPMT, PK/PD-context) |
| `Armstrong_2011.pdf` | Armstrong L et al., Evaluating the use of metabolite measur…, Alimentary pharmacology & t… (2011) | pgx | 5 | [10.1111/j.1365-2036.2011.04848.x](https://doi.org/10.1111/j.1365-2036.2011.04848.x) | [21929546](https://www.ncbi.nlm.nih.gov/pubmed/21929546) | metadata signals extractable PGX data (TPMT) |
| `Silva_2008.pdf` | Silva MR et al., Thiopurine S-methyltransferase (TPMT) g…, Therapeutic drug monitoring (2008) | pgx | 5 | [10.1097/FTD.0b013e31818b0f31](https://doi.org/10.1097/FTD.0b013e31818b0f31) | [19057372](https://www.ncbi.nlm.nih.gov/pubmed/19057372) | metadata signals extractable PGX data (TPMT) |

<sub>queue written 2026-09-15T08:21:37.801171+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Allegra_1988 | irrelevant | 0 | 0 | The text is a general review of antimetabolites (MTX, 5-FU, ara-C) and does not report quantitative pharmacokinetic parameters for tioguanine. |
| PD | Armstrong_2011 | not_relevant | 0 | 0 | The paper focuses on the utility of metabolite measurement (6-MMP, 6-TGN) for toxicity prediction and does not report a pharmacodynamic exposure-response model or numeric PD parameters (e.g., Emax, EC50) for tioguanine. |
| PGx | Armstrong_2011 | not_relevant | 4 | 5 | The paper reports an association between TPMT genotype and 6-TGN levels (PK parameter) but does not provide a fitted quantitative effect size (e.g., fold-change or regression coefficient) for the pharmacogenomic effect. |
| popPK | Balis_1987 | irrelevant | 0 | 0 | The study focuses on 6-mercaptopurine, not tioguanine, and does not report quantitative PK parameters for the target drug. |
| PD | Bayoumy_2025 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PopPK) model for thioguanine but does not include any pharmacodynamic (PD) modeling, exposure-response analysis, or dose-effect relationship. |
| popPK | Bevers_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of infliximab, and tioguanine is only mentioned as a concomitant immunomodulator without any PK parameters reported for it. |
| PD | Bevers_2024 | not_relevant | 0 | 0 | The paper evaluates population pharmacokinetic (PK) models for infliximab, not pharmacodynamic (PD) or exposure-response relationships, and does not report any PD parameters. |
| popPK | Burton_1986 | irrelevant | 0 | 0 | The study investigates 6-mercaptopurine, not tioguanine, and does not report quantitative PK parameters for the target drug. |
| popPK | Casini_2023 | irrelevant | 0 | 0 | The study focuses on azathioprine (a prodrug) and its metabolite 6-TGN levels in Crohn's disease, but does not report quantitative pharmacokinetic parameters (CL, V, ka, etc.) for tioguanine itself. |
| PGx | Coenen_2025 | not_relevant | 5 | 2 | The paper is a clinical guideline providing dosing recommendations based on genotype, but it does not report primary pharmacokinetic or pharmacodynamic parameter data (e.g., AUC, Cmax) or fitted effect sizes. |
| popPK | Covell_1985 | irrelevant | 0 | 0 | The study focuses on 6-mercaptopurine, not tioguanine. |
| PD | Czaja_2020 | not_relevant | 2 | 0 | The paper is a review article discussing metabolic pathways and therapeutic opportunities for thiopurines, but it does not present original data, specific numeric PD parameters, or extractable concentration-effect curves. |
| PGx | Dassopoulos_2014 | not_relevant | 2 | 5 | The paper reports clinical outcomes and 6TGN levels in a dosing trial but does not quantify the specific pharmacokinetic or pharmacodynamic effect size of a gene variant (TPMT) on the drug's parameters. |
| PD | Deben_2021 | not_relevant | 2 | 0 | The paper is a review discussing the rationale and limitations of therapeutic drug monitoring for thiopurines, mentioning pharmacodynamics qualitatively but not reporting specific numeric PD parameters or exposure-response models for tioguanine. |
| PGx | Deben_2021 | not_relevant | 2 | 0 | The paper is a review discussing therapeutic drug monitoring and general pharmacogenetics of thiopurines, but it does not report specific quantitative pharmacogenomic effects on PK/PD parameters for tioguanine. |
| PD | Deben_2022 | not_relevant | 2 | 1 | The study compares protein levels (Rac1/pSTAT3) between clinical groups (treated vs. untreated) but does not correlate these markers with drug concentrations or doses to derive a quantitative exposure-response or dose-response curve. |
| popPK | Elferink_2022 | irrelevant | 1 | 0 | The paper is a prodrug chemistry study where tioguanine is only a substrate for conjugation, and no quantitative pharmacokinetic parameters (CL, V, etc.) for tioguanine are reported. |
| popPK | Ergin_2023 | irrelevant | 0 | 0 | The study focuses on 6-mercaptopurine (a different drug) and is an in-vitro formulation/cytotoxicity study, not a pharmacokinetic study of tioguanine. |
| popPK | Flesner_2014 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of demethylation and cell survival in canine cell lines, reporting no pharmacokinetic parameters for tioguanine. |
| PGx | Gilissen_2005_2 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (mesalazine) rather than a pharmacogenomic effect, and all participants had wild-type TPMT genotypes. |
| popPK | Hefti_2016 | irrelevant | 2 | 0 | The paper is a review that discusses altered pharmacokinetics of thioguanine in Down syndrome patients but does not provide original quantitative parameter values. |
| PD | Hefti_2016 | not_relevant | 1 | 0 | The text is a review focusing on pharmacokinetics (PK) alterations in Down Syndrome patients and does not report any pharmacodynamic (PD) or exposure-response models or numeric PD parameters for thioguanine. |
| popPK | Hermann_1985 | irrelevant | 0 | 0 | The study investigates 6-mercaptopurine, not tioguanine. |
| PD | Jena_2023 | not_relevant | 2 | 1 | The paper is a systematic review and meta-analysis that reports pooled clinical response rates and a qualitative meta-regression finding regarding dose and toxicity, but it does not provide a quantitative exposure-response model or specific numeric PD parameters (e.g., EC50, Emax) for thioguanine. |
| popPK | Jiang_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of clozapine, not tioguanine. |
| PD | Jiang_2025 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics (PK) of clozapine and drug-drug interactions, reporting no pharmacodynamic (PD) or exposure-response relationship for tioguanine or any other drug. |
| popPK | Jost_2020 | irrelevant | 0 | 0 | The study focuses on 6-mercaptopurine (6MP) and methotrexate, not tioguanine, which is the required subject drug. |
| popPK | Kong_2024 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of mercaptopurine (6-MP), not tioguanine, which is the required subject drug. |
| popPK | Kumar_2015 | irrelevant | 0 | 0 | The study focuses on 6-mercaptopurine, not tioguanine. |
| popPK | Larsen_2020 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of 6-mercaptopurine, not tioguanine. |
| popPK | Leblond_2023 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of fluvastatin and celecoxib, not tioguanine, which is only mentioned as a prior therapy in the background. |
| PD | Leblond_2023 | not_relevant | 0 | 0 | The paper reports PK parameters and clinical safety/efficacy outcomes for fluvastatin and celecoxib, but contains no pharmacodynamic modeling, exposure-response analysis, or numeric PD parameters (e.g., Emax, EC50) for tioguanine or any other drug. |
| popPK | Lu_2021 | irrelevant | 0 | 0 | The paper focuses on 6-mercaptopurine nanomedicine and does not report pharmacokinetic parameters for tioguanine. |
| popPK | Maddocks_1979 | irrelevant | 2 | 1 | The study focuses on 6-mercaptopurine (a metabolite of azathioprine) rather than tioguanine, and only reports a single half-life value without a full PK model. |
| popPK | Martin_2017 | irrelevant | 0 | 0 | The paper is a clinical study of voriconazole in pediatric patients and does not report pharmacokinetic parameters for tioguanine. |
| PD | Martin_2017 | not_relevant | 4 | 3 | The paper is about voriconazole, not tioguanine, and while it contains exposure-response analysis for voriconazole, it does not provide the specific drug requested. |
| popPK | Murrell_1986 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of allopurinol, not tioguanine, and contains no quantitative PK parameters for the subject drug. |
| popPK | Patten_2022 | irrelevant | 0 | 0 | The paper is a virology study screening compounds for SARS-CoV-2 inhibition and does not report pharmacokinetic parameters for tioguanine. |
| PD | Patten_2022 | not_relevant | 0 | 0 | The paper does not mention tioguanine or report any pharmacodynamic parameters for it. |
| PGx | Peyrin-Biroulet_2008 | not_relevant | 2 | 5 | The paper reports a drug-drug interaction (ribavirin and azathioprine) affecting metabolite levels, but explicitly states all patients had normal thiopurine methyltransferase genotype, so it does not report a pharmacogenomic effect of a gene variant on PK/PD. |
| popPK | Rendina_2025 | irrelevant | 0 | 0 | The paper is a bioinformatic study on gut microbiome homology and does not report pharmacokinetic parameters for tioguanine. |
| PD | Rendina_2025 | not_relevant | 0 | 0 | The paper is a bioinformatics study on gut microbiome homology and does not report any pharmacodynamic or exposure-response data for tioguanine. |
| popPK | Rivard_1989 | irrelevant | 0 | 0 | The study focuses on 6-mercaptopurine (6-MP), not tioguanine, and reports in-vitro degradation data rather than pharmacokinetic parameters. |
| PGx | Roblin_2005 | not_relevant | 2 | 0 | The study evaluates the clinical efficacy of 6-tioguanine levels in IBD patients and mentions TPMT genotyping in some patients, but it does not report a pharmacogenomic effect (i.e., how a specific genotype changes a PK/PD parameter) for tioguanine. |
| PGx | Silva_2008 | not_relevant | 5 | 2 | The paper reports a single case observation of metabolite levels in a heterozygous patient but explicitly states there was no significant association between genotype and clinical/laboratory data, failing to report a general pharmacogenomic effect. |
| popPK | Sullivan_1988 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of DON (6-diazo-5-oxo-L-norleucine), not tioguanine. |
| PGx | Swen_2011 | not_relevant | 0 | 0 | The paper is a general guideline update for multiple drugs and genes, not a study reporting specific pharmacokinetic or pharmacodynamic data for tioguanine. |
| popPK | Toksvang_2022 | irrelevant | 1 | 0 | The paper is a review of maintenance therapy for ALL that discusses 6-thioguanine (6-TG) as a comparator or add-on agent to 6-MP, but it does not report original quantitative population pharmacokinetic parameters (CL, V, Q, ka) for tioguanine. |
| popPK | Tolbert_2017 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of 6-mercaptopurine, not tioguanine. |
| popPK | Tterlikkis_1983 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of 6-mercaptopurine, not tioguanine. |
| popPK | Wang_2015 | irrelevant | 0 | 0 | The study focuses on 6-mercaptopurine (6-MP), not tioguanine, and does not report quantitative PK parameters for the target drug. |
| popPK | Xu_2023 | irrelevant | 0 | 0 | The study focuses on a polymer nanodrug delivery system for chlorambucil and 6-mercaptopurine, not tioguanine, and does not report pharmacokinetic parameters for tioguanine. |
| popPK | Yan_2023 | irrelevant | 0 | 0 | The study focuses on the mechanism of azathioprine therapy failure via gut microbiota and 6-mercaptopurine bioavailability, not on the pharmacokinetic parameters of tioguanine. |
| PD | Yan_2023 | not_relevant | 0 | 0 | The paper investigates the mechanism of azathioprine therapy failure via microbiome interactions (reduced 6-MP bioavailability) but does not report any pharmacokinetic data, concentration-effect curves, or numeric PD parameters (e.g., Emax, EC50) for tioguanine or its metabolites. |
| popPK | Zou_2021 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of 6-mercaptopurine (6-MP) and its metabolites, not tioguanine, which is only mentioned as a related metabolite or in references. |
| popPK | Zou_2023 | irrelevant | 2 | 3 | The study focuses on 6-mercaptopurine (6-MP), not tioguanine, and primarily reports non-compartmental parameters (AUC, Cmax, t1/2) rather than compartmental PK parameters like clearance or volume. |
| PD | de_2013 | not_relevant | 2 | 1 | The paper reports clinical outcomes and metabolite levels (6-TGN/6-MMP) but does not provide a concentration-effect or dose-response model with numeric PD parameters (e.g., Emax, EC50) for tioguanine. |
| popPK | unknown_2018 | irrelevant | 0 | 0 | The evidence consists only of conference metadata and contains no pharmacokinetic data or study content. |
| PD | unknown_2018 | not_relevant | 0 | 0 | The provided text is only a conference header and contains no data, analysis, or mention of tioguanine pharmacodynamics. |
| PGx | van_2022 | not_relevant | 0 | 0 | The paper is a cost-effectiveness decision-analytic model that estimates mortality risk and costs, not a study reporting specific pharmacokinetic or pharmacodynamic parameter changes (e.g., AUC, Cmax, response rate) for tioguanine based on genotype. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_tioguanine`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
