# betaxolol

- **generic name:** betaxolol
- **ATC codes:** `C07AB05`, `S01ED02`
- **DrugBank:** [DB00195](https://go.drugbank.com/drugs/DB00195)
- **groups:** approved, investigational

## About

**Description.** A cardioselective beta-1-adrenergic antagonist with no partial agonist activity.

**Indication.** For the management of hypertension.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| not captured | not captured | 0/0/0 | 0/1/0 | 0/0/5 | not captured | not captured | 17 | 1/0 | 9/8 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Lieberman_1996](drugs/drug_betaxolol/pd_Lieberman_1996_BP.md) | Lieberman R et al., Role of pharmacokinetic-pharmacodynamic…, Therapeutic drug monitoring (1996) | [10.1097/00007691-199608000-00019](https://doi.org/10.1097/00007691-199608000-00019) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **ADRB1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Messina_2014](drugs/drug_betaxolol/pgx_Messina_2014_ADRB1_Q100.md) | Messina Baas O et al., ADRB1 and ADBR2 gene polymorphisms and…, Current eye research (2014) | [10.3109/02713683.2014.900807](https://doi.org/10.3109/02713683.2014.900807) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **ADRB2** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Messina_2014](drugs/drug_betaxolol/pgx_Messina_2014_ADRB2_Q100.md) | Messina Baas O et al., ADRB1 and ADBR2 gene polymorphisms and…, Current eye research (2014) | [10.3109/02713683.2014.900807](https://doi.org/10.3109/02713683.2014.900807) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **ADRA1A** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Schwartz_2005](drugs/drug_betaxolol/pgx_Schwartz_2005_ADRA1A_Q100.md) | Schwartz SG et al., Beta1-adrenergic receptor polymorphisms…, Ophthalmology (2005) | [10.1016/j.ophtha.2005.08.014](https://doi.org/10.1016/j.ophtha.2005.08.014) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **ADRB1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Zateyshchikov_2007](drugs/drug_betaxolol/pgx_Zateyshchikov_2007_ADRB1_Q100.md) | Zateyshchikov DA et al., Association of CYP2D6 and ADRB1 genes w…, Fundamental & clinical phar… (2007) | [10.1111/j.1472-8206.2007.00518.x](https://doi.org/10.1111/j.1472-8206.2007.00518.x) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **CYP2D6** | `Q27` · CL/F | metabolism | [Zateyshchikov_2007](drugs/drug_betaxolol/pgx_Zateyshchikov_2007_CYP2D6_Q27.md) | Zateyshchikov DA et al., Association of CYP2D6 and ADRB1 genes w…, Fundamental & clinical phar… (2007) | [10.1111/j.1472-8206.2007.00518.x](https://doi.org/10.1111/j.1472-8206.2007.00518.x) |

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Coverage

- **PubMed hits:** 84 matched, 43 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_7 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lieberman_1996.pdf` | Lieberman R et al., Role of pharmacokinetic-pharmacodynamic…, Therapeutic drug monitoring (1996) | pd | 5 | [10.1097/00007691-199608000-00019](https://doi.org/10.1097/00007691-199608000-00019) | [8857562](https://www.ncbi.nlm.nih.gov/pubmed/8857562) | metadata signals extractable PD data (PK-PD) |
| `Crider_2002.pdf` | Crider JY et al., Adenylyl cyclase activity mediated by b…, Journal of ocular pharmacol… (2002) | pd | 4 | [10.1089/108076802760116142](https://doi.org/10.1089/108076802760116142) | [12099543](https://www.ncbi.nlm.nih.gov/pubmed/12099543) | metadata signals extractable PD data (EC50) |
| `Hernando_2004.pdf` | Hernando MD et al., Analysis by liquid chromatography-elect…, Journal of chromatography. A (2004) | pd | 4 | not captured | [15387181](https://www.ncbi.nlm.nih.gov/pubmed/15387181) | metadata signals extractable PD data (EC50) |
| `Hester_1994.pdf` | Hester RK et al., The direct vascular relaxing action of…, Survey of ophthalmology (1994) | pd | 4 | [10.1016/0039-6257(94)90056-6](https://doi.org/10.1016/0039-6257(94)90056-6) | [7940134](https://www.ncbi.nlm.nih.gov/pubmed/7940134) | metadata signals extractable PD data (EC50) |
| `Klockow_1986.pdf` | Klockow M et al., Studies on the receptor profile of biso…, Arzneimittel-Forschung (1986) | pd | 4 | not captured | [2870719](https://www.ncbi.nlm.nih.gov/pubmed/2870719) | metadata signals extractable PD data (IC50) |
| `Maideen_2021.pdf` | Maideen NMP et al., A Review on Pharmacokinetic and Pharmac…, Current drug metabolism (2021) | pgx | 7 | [10.2174/1389200222666210614112529](https://doi.org/10.2174/1389200222666210614112529) | [34182907](https://www.ncbi.nlm.nih.gov/pubmed/34182907) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Minushkina_2008.pdf` | Minushkina LO et al., [Genetic aspects of individual sensitiv…, Kardiologiia (2008) | pgx | 5 | not captured | [18429752](https://www.ncbi.nlm.nih.gov/pubmed/18429752) | metadata signals extractable PGX data (Cyp2D6) |

<sub>queue written 2026-08-02T12:46:19.830317+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Ardestani_2017 | not_relevant | 0 | 0 | The paper investigates the pharmacological effects of xamoterol in a mouse model of Alzheimer's disease and uses betaxolol only as an in vitro antagonist control; it does not report any human pharmacogenomic studies or genotype-dependent PK/PD parameters for betaxolol. |
| PD | Beresford_1986 | not_relevant | 0 | 0 | The text is a narrative review of pharmacodynamic and pharmacokinetic properties, not a primary research article reporting population PD modeling or exposure-response analysis with estimated parameters. |
| PD | Egginger_1993 | not_relevant | 0 | 0 | The paper is a review of enantioselective bioanalytical methods (HPLC) and does not report any population pharmacodynamic or exposure-response modeling. |
| popPK | Fayyaz_2021 | irrelevant | not captured | not captured | The study uses non-compartmental analysis to report tissue exposure metrics in rabbits but lacks compartmental or population-PK models and key disposition parameters like clearance or volume of distribution. |
| popPK | Henry_1990 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological characterization of receptor affinity (pA2 values) in mouse trachea, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PD | Henry_1990 | not_relevant | 0 | 0 | The paper describes in vitro receptor characterization using isolated mouse trachea and Schild analysis, not population pharmacodynamic or exposure-response modeling in humans or animals with systemic drug administration. |
| PD | Huang_2016 | not_relevant | 2 | 1 | The paper reports standard pharmacokinetic and pharmacodynamic comparisons (e.g., IOP reduction) between formulations but does not describe or estimate a population exposure-response model with specific PD parameters. |
| popPK | Huang_2017 | irrelevant | 2 | 0 | The study focuses on in vitro release and precorneal retention of a novel liposomal formulation, lacking systemic population-pharmacokinetic parameters like clearance or volume of distribution. |
| PD | Huang_2017 | not_relevant | 1 | 0 | The paper describes a formulation study with descriptive pharmacodynamic results (IOP reduction) but does not report a population pharmacodynamic or exposure-response model with estimated parameters. |
| popPK | Jankovic_2014 | irrelevant | not captured | not captured | This is a narrative review summarizing existing literature and does not present original quantitative pharmacokinetic parameters or population models for betaxolol. |
| PGx | Jankovic_2014 | not_relevant | 2 | 1 | The paper is a review that explicitly states betaxolol was under-investigated and does not report specific pharmacogenomic data or effect sizes for it. |
| popPK | Kuwahara_2005 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on UVB protection and does not report any pharmacokinetic parameters for betaxolol. |
| PD | Kuwahara_2005 | not_relevant | 0 | 0 | The paper is an in vitro mechanistic study on cell viability and radical scavenging, not a population pharmacodynamic or exposure-response modeling study. |
| popPK | Lieberman_1996 | irrelevant | 2 | 0 | The paper is a review discussing PK-PD principles using betaxolol as an example of PD modeling efficiency, but it does not report quantitative population-pharmacokinetic parameters (e.g., CL, V) for betaxolol. |
| PD | Liu_2021 | not_relevant | 1 | 0 | The paper describes a formulation study comparing pharmacokinetics and intraocular pressure reduction of microspheres versus commercial eye drops, but does not employ population pharmacodynamic modeling or estimate exposure-response parameters. |
| PD | Maideen_2021 | not_relevant | 0 | 0 | The paper is a narrative review of drug interactions and does not report original population pharmacodynamic modeling or estimated PD parameters for betaxolol. |
| PGx | Maideen_2021 | not_relevant | 0 | 0 | The paper reviews drug-drug interactions involving CYP enzymes but does not report specific pharmacogenomic effects of gene variants on betaxolol PK/PD parameters. |
| popPK | Maselli_2014 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of receptor agonists using betaxolol only as a tool antagonist, with no population-pharmacokinetic parameters reported. |
| PD | Maselli_2014 | not_relevant | 0 | 0 | The paper reports in vitro concentration-response experiments on human tissue strips, not a population pharmacodynamic or exposure-response model for betaxolol in vivo. |
| PD | Miki_2003 | not_relevant | 2 | 1 | This is a single case report using literature-derived parameters for simulation, not a population pharmacodynamic study estimating PD parameters from new data. |
| PGx | PMID38951961_2024 | not_relevant | 0 | 0 | The paper is a CPIC guideline for beta-blockers that explicitly states there is insufficient evidence to make recommendations for betaxolol, and it does not report specific PK/PD effects of gene variants on betaxolol. |
| popPK | Sambol_1991 | irrelevant | 2 | 0 | The study reports pharmacodynamic dose-response parameters (Emax, D50) and variability, but does not report quantitative pharmacokinetic disposition parameters (CL, V, ka) for betaxolol. |
| popPK | Sidorova_2022 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of anticancer effects (EC50, apoptosis) rather than a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PD | Sidorova_2022 | not_relevant | 1 | 1 | The paper reports in vitro cell viability and clonogenic assays with EC50 values, but does not perform population pharmacodynamic or exposure-response modeling. |
| popPK | Simpson_1985 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of adrenergic receptor signaling in cultured cells, not a pharmacokinetic study, and betaxolol is used only as a pharmacological antagonist. |
| PD | Simpson_1985 | not_relevant | 0 | 0 | The paper is an in vitro mechanistic study on cultured rat heart cells using betaxolol as a pharmacological tool, not a population pharmacodynamic or exposure-response modeling study. |
| popPK | Stevens_1998 | irrelevant | 0 | 0 | The paper is an in-vitro molecular pharmacology study on receptor efficacy, not a pharmacokinetic study, and contains no disposition parameters for betaxolol. |
| PD | Stevens_1998 | not_relevant | 0 | 0 | The paper describes in vitro molecular pharmacology experiments on cell lines to characterize inverse agonist efficacy, not a population pharmacodynamic or exposure-response model in humans or animals. |
| PD | Vinceneux_1986 | not_relevant | 1 | 0 | The study is a small crossover trial (n=6) reporting descriptive PK/PD observations without fitting a population pharmacodynamic model or estimating PD parameters. |
| PGx | Vranjkovic_2012 | not_relevant | 0 | 0 | The study investigates the role of adrenergic receptor subtypes in stress-induced cocaine reinstatement using knockout mice and pharmacological agents, but does not report on how genetic variants affect the pharmacokinetic or pharmacodynamic parameters of betaxolol itself. |
| PD | Wong_2016 | not_relevant | 0 | 0 | This is a Cochrane systematic review comparing clinical outcomes (blood pressure) across different beta-blockers, not a population pharmacodynamic modeling study estimating exposure-response parameters for betaxolol. |
| PGx | Zheng_2023 | not_relevant | 0 | 0 | The study investigates the role of ADRB1 in transgenerational methamphetamine addiction sensitivity using betaxolol as a pharmacological tool, but does not report how genetic variants affect the PK or PD parameters of betaxolol itself. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_betaxolol`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
