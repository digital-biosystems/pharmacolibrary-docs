# fremanezumab

- **generic name:** fremanezumab
- **ATC codes:** `N02CD03`
- **DrugBank:** [DB14041](https://go.drugbank.com/drugs/DB14041)
- **groups:** approved, investigational

## About

**Description.** Fremanezumab is a humanized monoclonal antibody targeted against human calcitonin gene-related peptide (CGRP) for the prevention of migraine headaches.[L11749] It was developed by Teva Pharmaceuticals USA and approved by the FDA in September 2018.[L11779] Along with other recently approved anti-CGRP therapies such as [galcanezumab], [erenumab], and the oral CGRP antagonist [ubrogepant], fremanezumab represents an important step forward in the treatment and prevention of migraine headaches.

**Indication.** Fremanezumab is indicated for the preventative treatment of migraine in adults.[L11749] It is also indicated for the preventive treatment of episodic migraine in pediatric patients who are 6 to 17 years of age and who weigh 45 kg or more.[L53633]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-08-29 22:23 | 12:21 | 2/3/0 | 1/0/0 | 1/0/5 | 133,657/8,080 | ollama / qwen3.8:27b-mtp-q8_0 | 9 | 4/5 | 7/2 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Jones_2021](drugs/drug_fremanezumab/Fremanezumab_Jones2021_pediatric_model_to_support_phase_3_de.md) | Jones A et al., Scaling Approaches for Pediatric Dose S…, Pharmaceutics (2021) | [10.3390/pharmaceutics13060785](https://doi.org/10.3390/pharmaceutics13060785) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Jones_2021](drugs/drug_fremanezumab/Fremanezumab_Jones2021_previously_developed_adult_model_appl.md) | Jones A et al., Scaling Approaches for Pediatric Dose S…, Pharmaceutics (2021) | [10.3390/pharmaceutics13060785](https://doi.org/10.3390/pharmaceutics13060785) |
| <span class="pk-badge pk-badge--neutral">not modelled</span> | [Jones_2021](drugs/drug_fremanezumab/Fremanezumab_Jones2021_pediatric_model_to_support_phase_3_de.md) | Jones A et al., Scaling Approaches for Pediatric Dose S…, Pharmaceutics (2021) | [10.3390/pharmaceutics13060785](https://doi.org/10.3390/pharmaceutics13060785) |
| <span class="pk-badge pk-badge--neutral">not modelled</span> | [Jones_2021](drugs/drug_fremanezumab/Fremanezumab_Jones2021_previously_developed_adult_model_appl.md) | Jones A et al., Scaling Approaches for Pediatric Dose S…, Pharmaceutics (2021) | [10.3390/pharmaceutics13060785](https://doi.org/10.3390/pharmaceutics13060785) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Fiedler-Kelly_2019](drugs/drug_fremanezumab/Fremanezumab_FiedlerKelly2019_reference.md) | Fiedler-Kelly JB et al., Population pharmacokinetic modelling an…, British journal of clinical… (2019) | [10.1111/bcp.14096](https://doi.org/10.1111/bcp.14096) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Iannone_2026](drugs/drug_fremanezumab/Fremanezumab_Iannone2026_adults.md) | Iannone LF et al., Pharmacokinetics and Pharmacodynamics,…, European journal of drug me… (2026) | [10.1007/s13318-026-00990-7](https://doi.org/10.1007/s13318-026-00990-7) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Iannone_2026](drugs/drug_fremanezumab/Fremanezumab_Iannone2026_adults_children_and_adolescents_wit.md) | Iannone LF et al., Pharmacokinetics and Pharmacodynamics,…, European journal of drug me… (2026) | [10.1007/s13318-026-00990-7](https://doi.org/10.1007/s13318-026-00990-7) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Iannone_2026](drugs/drug_fremanezumab/Fremanezumab_Iannone2026_children_adolescents_6_17_years.md) | Iannone LF et al., Pharmacokinetics and Pharmacodynamics,…, European journal of drug me… (2026) | [10.1007/s13318-026-00990-7](https://doi.org/10.1007/s13318-026-00990-7) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Iannone_2026](drugs/drug_fremanezumab/Fremanezumab_Iannone2026_children_adolescents_6_17_years_chi.md) | Iannone LF et al., Pharmacokinetics and Pharmacodynamics,…, European journal of drug me… (2026) | [10.1007/s13318-026-00990-7](https://doi.org/10.1007/s13318-026-00990-7) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Ohlsson_2018](drugs/drug_fremanezumab/pd_Ohlsson_2018_CGRP_induced_relaxation.md) | Ohlsson L et al., Fremanezumab blocks CGRP induced dilata…, The journal of headache and… (2018) | [10.1186/s10194-018-0905-8](https://doi.org/10.1186/s10194-018-0905-8) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | **MTSS1** | `safety` — adverse-reaction risk (HLA / safety allele) — no parameter shift | safety_allele | [An_2024](drugs/drug_fremanezumab/pgx_An_2024_MTSS1_safety.md) | An YC et al., Genetic variants associated with respon…, The journal of headache and… (2024) | [10.1186/s10194-024-01850-y](https://doi.org/10.1186/s10194-024-01850-y) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **ACOX2** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [An_2024](drugs/drug_fremanezumab/pgx_An_2024_ACOX2_Q100.md) | An YC et al., Genetic variants associated with respon…, The journal of headache and… (2024) | [10.1186/s10194-024-01850-y](https://doi.org/10.1186/s10194-024-01850-y) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **ATAD2B** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [An_2024](drugs/drug_fremanezumab/pgx_An_2024_ATAD2B_Q100.md) | An YC et al., Genetic variants associated with respon…, The journal of headache and… (2024) | [10.1186/s10194-024-01850-y](https://doi.org/10.1186/s10194-024-01850-y) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **LRRC4C** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [An_2024](drugs/drug_fremanezumab/pgx_An_2024_LRRC4C_Q100.md) | An YC et al., Genetic variants associated with respon…, The journal of headache and… (2024) | [10.1186/s10194-024-01850-y](https://doi.org/10.1186/s10194-024-01850-y) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **OXR1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [An_2024](drugs/drug_fremanezumab/pgx_An_2024_OXR1_Q100.md) | An YC et al., Genetic variants associated with respon…, The journal of headache and… (2024) | [10.1186/s10194-024-01850-y](https://doi.org/10.1186/s10194-024-01850-y) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **TMEM92-AS1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [An_2024](drugs/drug_fremanezumab/pgx_An_2024_TMEM92_AS1_Q100.md) | An YC et al., Genetic variants associated with respon…, The journal of headache and… (2024) | [10.1186/s10194-024-01850-y](https://doi.org/10.1186/s10194-024-01850-y) |

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Coverage

- **PubMed hits:** 17 matched, 17 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 9  ·  extracted 2  ·  needs_review 0  ·  rejected 5  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Fiedler-Kelly_2019.pdf` | Fiedler-Kelly JB et al., Population pharmacokinetic modelling an…, British journal of clinical… (2019) | popPK | 10 | [10.1111/bcp.14096](https://doi.org/10.1111/bcp.14096) | [31418911](https://pubmed.ncbi.nlm.nih.gov/31418911) | The paper is a population PK study for fremanezumab and explicitly reports numeric values for central clearance, central distribution volume, and absolute bioavailability in the text. |
| `Cohen-Barak_2021.pdf` | Cohen-Barak O et al., Dose selection for fremanezumab (AJOVY)…, Cephalalgia : an internatio… (2021) | popPK | 9 | [10.1177/03331024211007789](https://doi.org/10.1177/03331024211007789) | [34000848](https://pubmed.ncbi.nlm.nih.gov/34000848) | The paper describes a population PK model for fremanezumab but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |

<sub>queue written 2026-08-29T22:18:11.660600+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Bigal_2018 | not_relevant | 1 | 0 | The text is a narrative review summarizing the development and pharmacology of fremanezumab but does not present specific numeric PD parameters or extractable exposure-response data. |
| popPK | Cho_2026 | irrelevant | 0 | 0 | The paper is a real-world effectiveness and safety study reporting clinical outcomes (headache days) and does not contain any pharmacokinetic parameters for fremanezumab. |
| popPK | Cohen-Barak_2021 | relevant | 9 | 2 | The paper describes a population PK model for fremanezumab but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |
| PD | Cohen_2021 | not_relevant | 0 | 0 | The paper is a review of immunogenicity (anti-drug antibodies) for CGRP mAbs and does not report any pharmacodynamic or exposure-response modeling or numeric PD parameters for fremanezumab. |
| popPK | Fiedler-Kelly_2020 | irrelevant | 2 | 0 | The paper focuses on exposure-response modeling and efficacy simulations, referencing a separate population PK model (Ref 16) without reporting the specific quantitative PK parameter values (CL, V, Q, ka) for fremanezumab in the text. |
| PD | Grell_2019 | not_relevant | 2 | 0 | The paper describes a qualitative in vitro mechanistic study showing inhibition of vasodilation but does not provide numeric concentration-effect data, curves, or PD parameters (e.g., IC50, Emax) in the text. |
| PD | Kopruszinski_2020 | not_relevant | 1 | 0 | The paper focuses on a novel PAR2 antibody (PAR650097) and only qualitatively mentions fremanezumab's effect on allodynia without providing any numeric PD parameters, exposure-response curves, or dose-response data for fremanezumab. |
| PD | Pistolesi_2025 | not_relevant | 3 | 2 | The paper describes qualitative in vitro concentration-dependent effects and in vivo safety outcomes but does not provide numeric PD parameters (e.g., EC50, Emax) or a fitted exposure-response model for fremanezumab. |
| PD | Sung_2025 | not_relevant | 0 | 0 | The paper describes the development of an immunoassay for CGRP using fremanezumab as a reagent, not a pharmacodynamic or exposure-response analysis of fremanezumab's therapeutic effect. |
| PGx | Szkutnik-Fiedler_2020 | not_relevant | 0 | 0 | The paper is a review of drug-drug and drug-food interactions for migraine medications and does not report any pharmacogenomic effects on the PK or PD of fremanezumab. |
| popPK | Wang_2023 | irrelevant | 0 | 0 | The paper focuses on modeling monthly migraine days and quality of life for cost-effectiveness analysis, not pharmacokinetic parameters. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_fremanezumab`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
