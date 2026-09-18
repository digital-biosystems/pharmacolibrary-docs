<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;vildagliptin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Vildagliptin_Tatosian2013_reference&quot;,&quot;label&quot;:&quot;Tatosian_2013_reference&quot;,&quot;href&quot;:&quot;drugs/drug_vildagliptin/Vildagliptin_Tatosian2013_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# vildagliptin

- **generic name:** vildagliptin
- **ATC codes:** `A10BD08`, `A10BH02`
- **DrugBank:** [DB04876](https://go.drugbank.com/drugs/DB04876)
- **groups:** approved, investigational

## About

**Description.** Vildagliptin (LAF237) is an orally active antihyperglycemic agent that selectively inhibits the dipeptidyl peptidase-4 (DPP-4) enzyme. It is used to manage type II diabetes mellitus, where GLP-1 secretion and insulinotropic effects are impaired.[A232488] By inhibiting DPP-4, vildagliptin prevents the degradation of glucagon-like peptide 1 (GLP-1) and glucose-dependent insulinotropic polypeptide (GIP), which are incretin hormones that promote insulin secretion and regulate blood glucose levels. Elevated levels of GLP-1 and GIP consequently results in improved glycemic control.[L32803] In clinical trials, vildagliptin has a relatively low risk of hypoglycemia.[A232488]

Oral vildagliptin was approved by the European Medicines Agency in 2008 for the treatment of type II diabetes mellitus in adults as monotherapy or in combination with [metformin], a sulfonylurea, or a thiazolidinedione in patients with inadequate glycemic control following monotherapy. It is marketed as Galvus.[L32803] Vildagliptin is also available as Eucreas, a fixed-dose formulation with metformin for adults in who do not adequately glycemic control from monotherapy.[L32813] Vildagliptin is currently under investigation in the US.

**Indication.** Vildagliptin is indicated in the treatment of type II diabetes mellitus in adults. As monotherapy, vildagliptin is indicated in adults inadequately controlled by diet and exercise alone and for whom metformin is inappropriate due to contraindications or intolerance.[L32803] It is also indicated as dual therapy in combination with metformin, a sulphonylurea, or a thiazolidinedione in adults patients with insufficient glycemic control despite maximal tolerated dose of monotherapy.[L32803] 

Vildagliptin is also marketed in a combination product with [metformin] for the treatment of adults with type II diabetes mellitus who inadequately respond to either monotherapy of vildagliptin or metformin. This fixed-dose formulation can be used in combination with a sulphonylurea or insulin (i.e., triple therapy) as an adjunct to diet and exercise in adults who do not achieve adequate glycemic control with monotherapy or dual therapy.[L32813]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-16 02:40 | 7:55 | 0/1/0 | 0/0/0 | 0/0/1 | 88,600/6,489 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 0/3 | 2/1 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Tatosian_2013_reference](drugs/drug_vildagliptin/Vildagliptin_Tatosian2013_reference.md) | Tatosian DA et al., Dipeptidyl peptidase-4 inhibition in pa…, Diabetes therapy : research… (2013) | [10.1007/s13300-013-0045-8](https://doi.org/10.1007/s13300-013-0045-8) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **CREBRF** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Toomata_2025](drugs/drug_vildagliptin/pgx_Toomata_2025_CREBRF_Q100.md) | Toomata ZLL et al., Reduced Weight Gain with Pioglitazone v…, Diabetes, metabolic syndrom… (2025) | [10.2147/DMSO.S500336](https://doi.org/10.2147/DMSO.S500336) |

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Coverage

- **PubMed hits:** 27 matched, 27 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `He_2007_2.pdf` | He YL et al., The absolute oral bioavailability and p…, Clinical pharmacokinetics (2007) | popPK | 10 | [10.2165/00003088-200746090-00006](https://doi.org/10.2165/00003088-200746090-00006) | [17713976](https://pubmed.ncbi.nlm.nih.gov/17713976) | The study reports quantitative population PK parameters for vildagliptin, including specific clearance values (41 L/h total, 13 L/h renal, 44.6 L/h male, 36.1 L/h female) and absorption lag times, though volume of distribution values are not explicitly listed in the text. |
| `Landersdorfer_2012.pdf` | Landersdorfer CB et al., Mechanism-based population pharmacokine…, British journal of clinical… (2012) | popPK | 10 | [10.1111/j.1365-2125.2011.04108.x](https://doi.org/10.1111/j.1365-2125.2011.04108.x) | [22442826](https://pubmed.ncbi.nlm.nih.gov/22442826) | The paper reports a population PK model for vildagliptin with explicit numeric values for clearance, volume of distribution, and half-lives in the results section. |
| `Dias_2026.pdf` | Dias BB et al., Preclinical Modeling and Simulation to…, CPT: pharmacometrics & syst… (2026) | popPK | 9 | [10.1002/psp4.70165](https://doi.org/10.1002/psp4.70165) | [41577632](https://pubmed.ncbi.nlm.nih.gov/41577632) | The paper describes a population PK model for vildagliptin, but the specific numeric parameter values are not present in the provided evidence text. |
| `Kalliokoski_2010.pdf` | Kalliokoski A et al., SLCO1B1 polymorphism and oral antidiabe…, Basic & clinical pharmacolo… (2010) | pgx | 8 | [10.1111/j.1742-7843.2010.00581.x](https://doi.org/10.1111/j.1742-7843.2010.00581.x) | [20406215](https://www.ncbi.nlm.nih.gov/pubmed/20406215) | metadata signals extractable PGX data (SLCO1B1, PK/PD-context) |
| `Golightly_2012.pdf` | Golightly LK et al., Comparative clinical pharmacokinetics o…, Clinical pharmacokinetics (2012) | pgx | 7 | [10.1007/BF03261927](https://doi.org/10.1007/BF03261927) | [22686547](https://www.ncbi.nlm.nih.gov/pubmed/22686547) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-09-16T02:37:37.289036+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chitnis_2016 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of metformin in a fixed-dose combination, with vildagliptin serving only as a co-administered component rather than the subject of PK parameter estimation. |
| popPK | Dias_2026 | relevant | 9 | 0 | The paper describes a population PK model for vildagliptin, but the specific numeric parameter values are not present in the provided evidence text. |
| popPK | Fang_2020 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on novel dual modulators, using vildagliptin only as a comparator in a glucose tolerance test without reporting any pharmacokinetic parameters. |
| PD | Fang_2020 | not_relevant | 1 | 0 | The paper reports in vitro potency (EC50) and a single-point in vivo efficacy comparison (AUC reduction) for a new compound against vildagliptin, but does not provide an exposure-response or dose-response curve or numeric PD parameters for vildagliptin. |
| popPK | Fang_2020_2 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on GPR119 agonists where vildagliptin is used only as a comparator for hypoglycemic efficacy, with no pharmacokinetic parameters reported. |
| PD | Fang_2020_2 | not_relevant | 2 | 1 | The paper reports in vitro EC50 values for novel GPR119 agonists and a single-point in vivo efficacy comparison against vildagliptin, but does not provide a dose-response curve or numeric PD parameters for vildagliptin itself. |
| popPK | Gibbs_2012 | irrelevant | 0 | 0 | The paper is a meta-analysis of efficacy (HbA1c response) and DPP-4 inhibition, not a pharmacokinetic study reporting disposition parameters like clearance or volume for vildagliptin. |
| PGx | Golightly_2012 | not_relevant | 0 | 0 | The paper is a comparative review of the pharmacokinetics of DPP-4 inhibitors and does not report any pharmacogenomic effects (gene variants) on vildagliptin PK or PD parameters. |
| popPK | Hayakawa_2025 | irrelevant | 0 | 0 | The study is a pharmacodynamic analysis of HbA1c dose-response relationships using machine learning, not a pharmacokinetic study, and reports no PK parameters for vildagliptin. |
| PGx | He_2012 | not_relevant | 0 | 0 | The paper describes general pharmacokinetics and pharmacodynamics of vildagliptin but does not report any effects of specific gene variants or genotypes on these parameters. |
| popPK | Horie_2014 | irrelevant | 0 | 0 | The study focuses on pharmacodynamic effects (insulin secretion and sensitivity) rather than reporting quantitative pharmacokinetic disposition parameters (CL, V, ka) for vildagliptin. |
| PGx | Kalliokoski_2010 | not_relevant | 0 | 0 | The paper explicitly states that SLCO1B1 polymorphism is unlikely to affect vildagliptin because the liver is not important for its elimination or action. |
| popPK | Landersdorfer_2012_2 | irrelevant | 2 | 0 | The study focuses on a mechanism-based population pharmacodynamic (PD) model for GLP-1, glucose, and insulin, and does not report quantitative pharmacokinetic (PK) disposition parameters (e.g., CL, V) for vildagliptin in the provided evidence. |
| popPK | Madny_2022 | irrelevant | 2 | 0 | The paper describes a physiologically based biopharmaceutics modeling (PBBM) study for a modified-release formulation, but the provided evidence contains no quantitative disposition parameters (CL, V, Q, ka) for vildagliptin. |
| PGx | Mostafa_2016 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamic interaction between vildagliptin and pravastatin on cholesterol efflux in cell lines, but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Scheen_2010 | not_relevant | 0 | 0 | The paper reviews drug-drug interactions for DPP-4 inhibitors and does not report any pharmacogenomic effects (gene variants) on vildagliptin PK or PD. |
| popPK | Tatosian_2013 | irrelevant | 2 | 0 | The study is a pharmacodynamic comparison of DPP-4 inhibition, and while PK parameters are mentioned, the specific numeric values for vildagliptin are in Table 2 which is cut off and not fully provided in the evidence. |
| popPK | Yang_2025 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on novel dual-target compounds, not a pharmacokinetic study of vildagliptin, and contains no PK parameters. |
| PD | Yang_2025 | not_relevant | 2 | 1 | The paper reports in vitro potency (IC50/EC50) for a new dual-target compound, not a pharmacodynamic exposure-response or dose-response relationship for vildagliptin itself. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_vildagliptin`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
