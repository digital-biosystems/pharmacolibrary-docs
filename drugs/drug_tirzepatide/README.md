# tirzepatide

- **generic name:** tirzepatide
- **ATC codes:** `A10BX16`
- **DrugBank:** [DB15171](https://go.drugbank.com/drugs/DB15171)
- **groups:** approved, investigational

## About

**Description.** Tirzepatide is a novel dual glucose-dependent insulinotropic polypeptide (GIP) and glucagon-like peptide-1 (GLP-1) receptor agonist. Dual GIP/GLP-1 agonists gained increasing attention as new therapeutic agents for glycemic and weight control as they demonstrated better glucose control and weight loss compared to selective GLP-1 receptor agonists in preclinical and clinical trials.[A246260]

Tirzepatide comprises a 39 amino acid linear synthetic peptide conjugated to a C20 fatty diacid moiety.[A246260] Its protein sequence was based on the sequence of endogenous GIP, and its pharmacological action on GLP-1 receptors is comparable to endogenous GIP; however, the long half-life of tirzepatide allows for once-weekly dosing.[A246265] Tirzepatide was approved by the FDA on May 13, 2022, under the brand name MOUNJARO by the FDA for the treatment of adults with type 2 diabetes, making it the first and only GIP and GLP-1 receptor agonist for this indication.[L41820] Later, it was approved under a different brand name ZEPBOUND on November 8, 2023, for the chronic weight management in adults with obesity or overweight with at least one weight-related condition.[L48766] On September 15, 2022, tirzepatide was also approved by the European Commission.[L44386]. On November 02, 2023, tirzepatide was also approved by the Health Canada [L52800]

**Indication.** Tirzepatide is indicated as an adjunct to diet and exercise to improve glycemic control in adults with type 2 diabetes mellitus or for chronic weight management in obese or overweight adult patients with at least one weight-related comorbid condition.[L41815,L44376,L52325] In Europe, it may be used as monotherapy or in combination with other drugs used to treat diabetes.[L44376]

Tirzepatide is also indicated for the treatment of moderate-to-severe obstructive sleep apnea in adult patients with obesity.[L52325]

This drug has not been studied in patients with a history of pancreatitis. Tirzepatide is not indicated for use in patients with type 1 diabetes mellitus.[L41815]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-08-26 20:34 | 8:37 | 0/1/0 | 1/0/0 | 0/0/5 | 88,572/9,081 | ollama / qwen3.8:27b-mtp-q8_0 | 10 | 0/10 | 10/0 | 1 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Schneck_2024](drugs/drug_tirzepatide/Tirzepatide_Schneck2024_reference.md) | Schneck K et al., Population pharmacokinetics of the GIP/…, CPT: pharmacometrics & syst… (2024) | [10.1002/psp4.13099](https://doi.org/10.1002/psp4.13099) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Chigutsa_2025](drugs/drug_tirzepatide/pd_Chigutsa_2025_FAT.md) | Chigutsa E et al., A Pharmacometric Method for Quantitativ…, Clinical pharmacology and t… (2025) | [10.1002/cpt.3750](https://doi.org/10.1002/cpt.3750) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Chigutsa_2025](drugs/drug_tirzepatide/pd_Chigutsa_2025_FFM.md) | Chigutsa E et al., A Pharmacometric Method for Quantitativ…, Clinical pharmacology and t… (2025) | [10.1002/cpt.3750](https://doi.org/10.1002/cpt.3750) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **APOE** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Song_2025](drugs/drug_tirzepatide/pgx_Song_2025_APOE_Q100.md) | Song Z et al., Pharmacogenomics of Tirzepatide: Genomi…, Pharmaceuticals (Basel, Swi… (2025) | [10.3390/ph18091261](https://doi.org/10.3390/ph18091261) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **GLP1R** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Song_2025](drugs/drug_tirzepatide/pgx_Song_2025_GLP1R_Q100.md) | Song Z et al., Pharmacogenomics of Tirzepatide: Genomi…, Pharmaceuticals (Basel, Swi… (2025) | [10.3390/ph18091261](https://doi.org/10.3390/ph18091261) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **IL6** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Song_2025](drugs/drug_tirzepatide/pgx_Song_2025_IL6_Q100.md) | Song Z et al., Pharmacogenomics of Tirzepatide: Genomi…, Pharmaceuticals (Basel, Swi… (2025) | [10.3390/ph18091261](https://doi.org/10.3390/ph18091261) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **GIPR** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Su_2026](drugs/drug_tirzepatide/pgx_Su_2026_GIPR_Q100.md) | Su QJ et al., Genetic predictors of GLP1 receptor ago…, Nature (2026) | [10.1038/s41586-026-10330-z](https://doi.org/10.1038/s41586-026-10330-z) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **GLP1R** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Su_2026](drugs/drug_tirzepatide/pgx_Su_2026_GLP1R_Q100.md) | Su QJ et al., Genetic predictors of GLP1 receptor ago…, Nature (2026) | [10.1038/s41586-026-10330-z](https://doi.org/10.1038/s41586-026-10330-z) |

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Coverage

- **PubMed hits:** 19 matched, 19 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aminorroaya_2025 | irrelevant | 0 | 0 | The paper is a meta-analysis of cardiometabolic efficacy outcomes (metabolic syndrome, BMI, etc.) and does not report any pharmacokinetic parameters such as clearance, volume, or half-life for tirzepatide. |
| popPK | Chigutsa_2025 | irrelevant | 2 | 0 | The paper focuses on pharmacodynamic exposure-response modeling for body composition and references a previously published PK model without providing the specific quantitative PK parameter values (CL, V, ka) in the text. |
| PGx | Lang_2026 | not_relevant | 0 | 0 | The paper is a clinical case series on the efficacy of tirzepatide in hypothalamic obesity and does not report any pharmacogenomic effects on PK or PD parameters. |
| PGx | Nicze_2026 | not_relevant | 2 | 0 | The paper discusses pharmacogenomic factors for anti-obesity therapy generally and cites studies on GLP-1RAs (liraglutide, exenatide), but does not report specific pharmacogenomic effects on the PK or PD of tirzepatide. |
| PGx | Shin_2026 | not_relevant | 2 | 0 | The paper is a narrative review discussing genetic predictors of clinical response (efficacy) but does not report specific pharmacokinetic or pharmacodynamic parameter changes driven by gene variants. |
| popPK | Sikorska_2026 | irrelevant | 0 | 0 | The paper is a clinical service evaluation reporting weight loss and metabolic outcomes, containing no pharmacokinetic parameters or disposition data for tirzepatide. |
| PGx | Song_2025 | not_relevant | 5 | 2 | The paper is a review discussing potential pharmacogenomic variants (e.g., GLP1R, GIPR) and their theoretical impact on tirzepatide response, but it explicitly states that direct clinical evidence specific to tirzepatide is limited or lacking, and does not report fitted effect sizes for PK/PD parameters. |
| PGx | Yamanouchi_2025 | not_relevant | 0 | 0 | The paper is a general review of incretin physiology and cardiovascular benefits, and does not report any pharmacogenomic effects on the PK or PD of tirzepatide. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_tirzepatide`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
