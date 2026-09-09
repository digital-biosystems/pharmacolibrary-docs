# oliceridine

- **generic name:** oliceridine
- **ATC codes:** `N02AX07`
- **DrugBank:** [DB14881](https://go.drugbank.com/drugs/DB14881)
- **groups:** approved, investigational

## About

**Description.** Severe acute pain occurs through nociceptive signalling involving both ascending and descending spinal pathways, in which nerve conductance is mediated in part by the action of opioid receptors.[A218041, A218046] Opioid receptors are seven-transmembrane G-protein-coupled receptors (GPCRs), of which the μ-opioid receptor subtype is predominantly targeted by and is responsible for the effects of opioid agonists.[A218031, A218046] However, due to the ability of some opioid agonists to bind to other targets, as well as activation of additional downstream pathways from opioid receptors such as those involving β-arrestin, the beneficial analgesic effects of opioids are coupled with severe adverse effects such as constipation and respiratory depression.[A218026, A218031, A218036, A218041, A218046]

Oliceridine (formerly known as TRV130) is a "biased agonist" at the μ-opioid receptor by preferentially activating the G-protein pathway with minimal receptor phosphorylation and recruitment of β-arrestin.[A218026, A218031] By acting as a biased agonist, oliceridine provides comparable analgesia compared with traditional opioids such as [morphine] at a comparable or decreased risk of opioid-related adverse effects such as constipation and respiratory depression.[A218026, A218031, A218051, A218056, A218061, A218066, A218071, L15516]

Oliceridine was first reported in 2013,[A218026, A218086] but was initially not approved by the FDA due to concerns raised by the Anesthetic and Analgesic Drug Products Advisory Committee.[A218041] Oliceridine gained FDA approval on August 7, 2020, and is currently marketed by Trevena Inc as OLINVYK™.[L15516]

**Indication.** Oliceridine is indicated for the management of acute pain in adults severe enough to require intravenous opioid analgesics and for whom no acceptable alternative treatments exist.[L15516]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-08-28 06:09 | 15:23 | 0/0/0 | 0/4/2 | 0/0/1 | 388,115/5,521 | ollama / qwen3.8:27b-mtp-q8_0 | 12 | 2/10 | 12/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> | [Song_2025](drugs/drug_oliceridine/pd_Song_2025_NA.md) | Song CZ et al., Determination of the 90% Effective Dose…, Drug design, development an… (2025) | [10.2147/DDDT.S546489](https://doi.org/10.2147/DDDT.S546489) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Wu_2025](drugs/drug_oliceridine/pd_Wu_2025_bronchoscopy_response.md) | Wu D et al., Estimation of ED50 and ED95 of Olicerid…, Drug design, development an… (2025) | [10.2147/DDDT.S535435](https://doi.org/10.2147/DDDT.S535435) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Buchwald_2023](drugs/drug_oliceridine/pd_Buchwald_2023_Gprt.md) | Buchwald P, Quantitative receptor model for respons…, Frontiers in pharmacology (2023) | [10.3389/fphar.2023.1274065](https://doi.org/10.3389/fphar.2023.1274065) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Buchwald_2023](drugs/drug_oliceridine/pd_Buchwald_2023_betaArr.md) | Buchwald P, Quantitative receptor model for respons…, Frontiers in pharmacology (2023) | [10.3389/fphar.2023.1274065](https://doi.org/10.3389/fphar.2023.1274065) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Pedersen_2020](drugs/drug_oliceridine/pd_Pedersen_2020_unknown.md) | Pedersen MF et al., Biased agonism of clinically approved μ…, Neuropharmacology (2020) | [10.1016/j.neuropharm.2019.107718](https://doi.org/10.1016/j.neuropharm.2019.107718) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Simons_2023](drugs/drug_oliceridine/pd_Simons_2023_V_E55.md) | Simons P et al., Respiratory Effects of Biased Ligand Ol…, Anesthesiology (2023) | [10.1097/ALN.0000000000004473](https://doi.org/10.1097/ALN.0000000000004473) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Zhao_2026](drugs/drug_oliceridine/pd_Zhao_2026_unknown.md) | Zhao Z et al., EC50 of Remifentanil for Inhibiting Car…, Drug design, development an… (2026) | [10.2147/DDDT.S571007](https://doi.org/10.2147/DDDT.S571007) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **CYP2D6** | `Q27` · CL/F | metabolism | [Simons_2023](drugs/drug_oliceridine/pgx_Simons_2023_CYP2D6_Q27.md) | Simons P et al., Respiratory Effects of Biased Ligand Ol…, Anesthesiology (2023) | [10.1097/ALN.0000000000004473](https://doi.org/10.1097/ALN.0000000000004473) |

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Coverage

- **PubMed hits:** 42 matched, 42 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lu_2026.pdf` | Lu ZQ et al., Oliceridine Reduces the EC50 of Remifen…, Neuro endocrinology letters (2026) | pd | 5 | not captured | [42460910](https://www.ncbi.nlm.nih.gov/pubmed/42460910) | metadata signals extractable PD data (EC50) |
| `Fossler_2018.pdf` | Fossler MJ et al., Oliceridine (TRV130), a Novel G Protein…, Journal of clinical pharmac… (2018) | pgx | 8 | [10.1002/jcph.1076](https://doi.org/10.1002/jcph.1076) | [29412458](https://www.ncbi.nlm.nih.gov/pubmed/29412458) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |

<sub>queue written 2026-08-28T06:02:47.397659+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Buchwald_2023 | irrelevant | 0 | 0 | The paper is a mechanistic pharmacodynamic study using the SABRE receptor model to analyze oliceridine's signaling bias at the mu-opioid receptor, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Goudra_2021 | irrelevant | 1 | 0 | The paper is a review that discusses oliceridine's mechanism and clinical use but explicitly states that pharmacokinetic data (such as context-sensitive half-times) are not yet available for oliceridine, providing no quantitative PK parameters. |
| PD | Goudra_2021 | not_relevant | 1 | 0 | The text is a qualitative review discussing the mechanism of action and general dose-dependent effects of oliceridine without providing specific numeric PD parameters or exposure-response data. |
| popPK | Miao_2026 | irrelevant | 0 | 0 | The study reports ED50 values for analgesia (pharmacodynamics) but explicitly states that blood drug concentrations were not monitored, so no pharmacokinetic parameters are reported. |
| popPK | Ok_2018 | relevant | 4 | 3 | The paper is a review that reports some quantitative PK parameters (half-life 1.6-2.7 h, clearance ~34 L/h) for oliceridine, but lacks a full compartmental or population PK model with volume of distribution or intercompartmental clearance. |
| PD | Ok_2018 | not_relevant | 2 | 0 | The paper is a review article describing the mechanism of action and general pharmacodynamics of oliceridine without reporting specific numeric PD parameters or concentration-effect curves. |
| popPK | Pedersen_2020 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of receptor binding kinetics and biased agonism, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Simons_2023 | relevant | 10 | 0 | The paper is a population PK/PD study of oliceridine, but the specific numeric parameter estimates are located in Table 1, which is not included in the provided evidence. |
| popPK | Song_2025 | irrelevant | 0 | 0 | The study is a pharmacodynamic dose-finding trial (ED90) for anesthesia efficacy and safety, not a pharmacokinetic study, and reports no disposition parameters (CL, V, t1/2, etc.) for oliceridine. |
| popPK | Wallach_2023 | irrelevant | 0 | 0 | The paper is a mechanistic study on 5-HT2A receptor signaling and psychedelic potential, mentioning oliceridine only as a background example of a biased opioid agonist without reporting any pharmacokinetic parameters. |
| PD | Wallach_2023 | not_relevant | 0 | 0 | The paper focuses on 5-HT2A receptor signaling and psychedelic potential of various ligands (e.g., 25N series, DOI, LSD) and does not mention or analyze oliceridine. |
| popPK | Wu_2025 | irrelevant | 0 | 0 | The study reports pharmacodynamic parameters (ED50/ED95) for oliceridine, not pharmacokinetic disposition parameters (CL, V, ka, etc.). |
| popPK | Ye_2023 | irrelevant | 0 | 0 | The study evaluates the subacute toxicity and toxicokinetics of LPM3480392, not oliceridine, which is only mentioned as a comparator or lead compound. |
| PD | Ye_2023 | not_relevant | 2 | 1 | The paper is a subacute toxicity study reporting qualitative dose-dependent adverse effects and PK parameters, but it does not provide a quantitative exposure-response or dose-response model with numeric PD parameters (e.g., Emax, EC50). |
| popPK | Zhao_2026 | irrelevant | 0 | 0 | The study is a pharmacodynamic trial measuring the EC50 of remifentanil, not a pharmacokinetic study reporting disposition parameters for oliceridine. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_oliceridine`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
