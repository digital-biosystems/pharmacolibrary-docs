# resmetirom

- **generic name:** resmetirom
- **ATC codes:** `A05BA11`
- **DrugBank:** [DB12914](https://go.drugbank.com/drugs/DB12914)
- **groups:** approved, investigational

## About

**Description.** Resmetirom is a thyroid hormone receptor-beta (THR-beta) agonist. On March 14, 2024, it was approved by the FDA as the first treatment of liver fibrosis due to noncirrhotic non-alcoholic steatohepatitis (NASH), which is a form of non-alcoholic fatty liver disease (NAFLD).[L50336] 

Thyroid hormones directly regulate lipid metabolism in the liver; thus, impaired thyroid function, such as low serum thyroid hormone levels, is often observed in NAFLD.[A263461] Resmetirom works to reduce liver fat by stimulating fatty acid degradation and oxidation.[L50336]

**Indication.** Resmetirom is indicated in conjunction with diet and exercise for the treatment of adults with noncirrhotic nonalcoholic steatohepatitis (NASH) with moderate to advanced liver fibrosis (consistent with stages F2 to F3 fibrosis). Its use should be avoided in patients with decompensated cirrhosis.[L50331]

This indication is approved under accelerated approval based on the improvement of NASH and fibrosis. Continued approval for this indication may be contingent upon verification and description of clinical benefit in confirmatory trials.[L50331]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-11 08:46 | 12:41 | 0/0/0 | 0/1/0 | 0/0/1 | 179,184/3,271 | ollama / qwen3.8:27b-mtp-q8_0 | 19 | 0/0 | 18/1 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Luong_2020](drugs/drug_resmetirom/pd_Luong_2020_ANGPTL4.md) | Luong XG et al., Regulation of gene transcription by thy…, PloS one (2020) | [10.1371/journal.pone.0240338](https://doi.org/10.1371/journal.pone.0240338) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Luong_2020](drugs/drug_resmetirom/pd_Luong_2020_CPT1A.md) | Luong XG et al., Regulation of gene transcription by thy…, PloS one (2020) | [10.1371/journal.pone.0240338](https://doi.org/10.1371/journal.pone.0240338) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Luong_2020](drugs/drug_resmetirom/pd_Luong_2020_DIO1.md) | Luong XG et al., Regulation of gene transcription by thy…, PloS one (2020) | [10.1371/journal.pone.0240338](https://doi.org/10.1371/journal.pone.0240338) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Luong_2020](drugs/drug_resmetirom/pd_Luong_2020_LDL_C.md) | Luong XG et al., Regulation of gene transcription by thy…, PloS one (2020) | [10.1371/journal.pone.0240338](https://doi.org/10.1371/journal.pone.0240338) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Luong_2020](drugs/drug_resmetirom/pd_Luong_2020_TC.md) | Luong XG et al., Regulation of gene transcription by thy…, PloS one (2020) | [10.1371/journal.pone.0240338](https://doi.org/10.1371/journal.pone.0240338) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **PNPLA3** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Xia_2024_2](drugs/drug_resmetirom/pgx_Xia_2024_2_PNPLA3_Q100.md) | Xia (2024) | — |

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Coverage

- **PubMed hits:** 33 matched, 46 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hennan_2026.pdf` | Hennan JK et al., Pharmacokinetics, mass balance and meta…, Xenobiotica; the fate of fo… (2026) | popPK | 10 | [10.1080/00498254.2026.2687126](https://doi.org/10.1080/00498254.2026.2687126) | [42265836](https://pubmed.ncbi.nlm.nih.gov/42265836) | The title indicates a primary PK study for resmetirom, but the provided evidence contains only the title with no numeric parameter values. |
| `Liang_2026.pdf` | Liang S et al., Determination and pharmacokinetic study…, Journal of pharmaceutical a… (2026) | popPK | 8 | [10.1016/j.jpba.2025.117249](https://doi.org/10.1016/j.jpba.2025.117249) | [41232432](https://pubmed.ncbi.nlm.nih.gov/41232432) | The paper reports quantitative PK parameters (Cmax, t1/2) for resmetirom in beagle dogs, but lacks compartmental model parameters (CL, V, Q) and population-level statistics. |

<sub>queue written 2026-09-11T08:43:52.659306+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ahmed_2026 | irrelevant | 0 | 0 | The study investigates the renoprotective mechanisms and molecular docking of resmetirom in rats, reporting no pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Alkhouri_2026 | irrelevant | 0 | 0 | The paper is a machine learning study for fibrosis prediction in MASLD and does not report any pharmacokinetic parameters for resmetirom. |
| popPK | Babaalizadeh_2026 | irrelevant | 0 | 0 | The study investigates quercetin-chitosan nanoparticles in a rat model of NAFLD, and resmetirom is only mentioned in the introduction as background context without any pharmacokinetic data. |
| PGx | Baptista_2026 | not_relevant | 0 | 0 | The paper discusses the molecular mechanisms of cytochrome P450 reductase in MASLD and does not report pharmacogenomic effects on the PK/PD of resmetirom. |
| popPK | Caddeo_2023 | irrelevant | 0 | 0 | The study focuses on the therapeutic efficacy of TG68 in a rat model, with resmetirom serving only as a comparator agent, and no pharmacokinetic parameters are reported. |
| PGx | Crespo_2026 | not_relevant | 0 | 0 | The paper is a review of MASLD genetics and does not report pharmacogenomic effects on the PK or PD of resmetirom. |
| popPK | Du_2026 | irrelevant | 0 | 0 | The study focuses on the mechanism of byakangelicin in MASH, and resmetirom is only listed as an abbreviation without any pharmacokinetic data or quantitative disposition parameters. |
| popPK | Foster_2026 | irrelevant | 0 | 0 | The paper is a mechanistic in-vitro study on platelet production where resmetirom is used as a thyroid hormone analogue, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Ha_2026 | not_relevant | 0 | 0 | The paper is a general review of MASLD/HCC biomarkers and therapies that mentions resmetirom's approval but does not report specific pharmacogenomic effects on its PK or PD parameters. |
| PGx | He_2026 | not_relevant | 0 | 0 | The paper evaluates the therapeutic efficacy of exosomes and resmetirom in a liver-on-a-chip model but does not report any pharmacogenomic effects or gene variant analyses. |
| popPK | Hennan_2026 | relevant | 10 | 0 | The title indicates a primary PK study for resmetirom, but the provided evidence contains only the title with no numeric parameter values. |
| PGx | Hennan_2026 | not_relevant | 0 | 0 | The paper describes general pharmacokinetics and metabolism in healthy subjects and animals but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Hönes_2022 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of resmetirom (MGL-3196) focusing on cellular transport and receptor selectivity, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Li_2026 | irrelevant | 0 | 0 | The paper is a diagnostic imaging study for MASH stratification and does not report any pharmacokinetic parameters for resmetirom. |
| popPK | Liang_2025 | irrelevant | 1 | 0 | The paper focuses on the discovery of a new compound (12) with resmetirom serving only as a comparator, and no quantitative PK parameters for resmetirom are provided. |
| PD | Liang_2025 | not_relevant | 1 | 0 | The paper reports in vitro EC50 for a new compound (12) and qualitative efficacy comparisons, but does not provide an exposure-response or dose-response analysis with numeric PD parameters for resmetirom. |
| popPK | Liu_2024 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study using a liver-on-a-chip model to assess therapeutic effects on inflammation and lipid accumulation, and it does not report any pharmacokinetic parameters for resmetirom. |
| popPK | Luong_2020 | irrelevant | 0 | 0 | The paper is an in-vitro and in-vivo mechanistic study focusing on gene transcription and receptor binding, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PD | Malakar_2026 | not_relevant | 0 | 0 | The paper is a narrative review of nor-ursodeoxycholic acid and only mentions resmetirom in passing without providing any pharmacodynamic data or parameters. |
| popPK | Parveen_2026 | irrelevant | 0 | 0 | The paper is a narrative review of the thyroid-liver axis that mentions resmetirom only as a therapeutic agent for MASH, without reporting any quantitative pharmacokinetic parameters. |
| popPK | Shan_2025 | irrelevant | 0 | 0 | The study is a developmental toxicity assessment in zebrafish and does not report any quantitative pharmacokinetic parameters for resmetirom. |
| popPK | Shi_2026 | irrelevant | 0 | 0 | The paper is a review of nanomedicines for MASLD that mentions resmetirom only as a recently approved drug in the introduction, without reporting any pharmacokinetic parameters or quantitative disposition data for it. |
| popPK | Stefanakis_2025 | irrelevant | 0 | 0 | The paper focuses on diagnostic machine learning models for MASH detection and does not report any pharmacokinetic parameters for resmetirom. |
| popPK | Stefanakis_2026 | irrelevant | 0 | 0 | The paper is a diagnostic study on machine learning models for MASH detection and contains no pharmacokinetic data for resmetirom. |
| popPK | Suganami_2026 | irrelevant | 0 | 0 | The paper is a mechanistic study on cell death and inflammation in MASH, mentioning resmetirom only as an approved therapy without reporting any pharmacokinetic parameters. |
| popPK | Tran_2026 | irrelevant | 0 | 0 | The paper is a model-based meta-analysis of pioglitazone's efficacy on histological outcomes and liver enzymes in MASH, not a pharmacokinetic study of resmetirom. |
| PD | Tran_2026 | not_relevant | 0 | 0 | The paper analyzes the pharmacodynamics of pioglitazone, not resmetirom. |
| popPK | Wang_2025 | irrelevant | 0 | 0 | The paper is a bioinformatics and molecular docking study where resmetirom is used only as a ligand for in-silico binding analysis, with no pharmacokinetic parameters reported. |
| popPK | Wyszynski_2026 | irrelevant | 0 | 0 | The paper is a narrative review of MASLD in pregnancy that mentions resmetirom only as a recently approved agent without providing any pharmacokinetic data or quantitative disposition parameters. |
| PD | Wyszynski_2026 | not_relevant | 1 | 0 | The paper is a narrative review of MASLD in pregnancy that mentions resmetirom only as a recently approved agent lacking pregnancy safety data, without reporting any specific pharmacodynamic or exposure-response parameters. |
| PGx | Xia_2024 | not_relevant | 2 | 5 | The paper reports a pharmacodynamic difference in disease metrics (steatosis, fibrosis) between genotypes, but does not report pharmacokinetic parameters or a fitted pharmacogenomic effect size. |
| popPK | Yang_2025 | irrelevant | 0 | 0 | The paper focuses on physicochemical characterization and quantitative analysis of crystal forms using spectroscopy, not pharmacokinetic disposition parameters. |
| PGx | Yang_2025 | not_relevant | 0 | 0 | The paper focuses on analytical chemistry methods (PXRD, FTIR, Raman) for quantifying crystal forms of resmetirom, not on pharmacogenomics or genetic variants affecting PK/PD. |
| popPK | Yang_2026 | irrelevant | 0 | 0 | The study focuses on cocrystal engineering and solubility enhancement, reporting no pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Yu_2026 | irrelevant | 1 | 0 | The paper is a review of drug-drug interactions where resmetirom is discussed only as a perpetrator (inhibitor) of CYP2C8, not as the subject drug for which disposition parameters (CL, V, etc.) are reported. |
| PGx | Yu_2026 | not_relevant | 0 | 0 | The paper reports drug-drug interactions (DDIs) involving CYP enzymes and transporters, not pharmacogenomic effects (gene variants) on resmetirom's PK/PD. |
| popPK | Zacharia_2025 | irrelevant | 0 | 0 | The paper is a narrative review focused on semaglutide, and resmetirom is only mentioned as a comparator/approved drug without any pharmacokinetic data provided. |
| PD | Zhao_2026 | not_relevant | 0 | 0 | The paper is a narrative review of Ganzaoning Granule and only mentions resmetirom in the context of FDA approval without providing any pharmacodynamic data, exposure-response analysis, or numeric PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_resmetirom`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
