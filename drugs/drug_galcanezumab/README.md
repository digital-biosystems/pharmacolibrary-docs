# galcanezumab

- **generic name:** galcanezumab
- **ATC codes:** `N02CD02`
- **DrugBank:** [DB14042](https://go.drugbank.com/drugs/DB14042)
- **groups:** approved, investigational

## About

**Description.** Galcanezumab is a humanized monoclonal antibody developed by Eli Lilly and Company against human calcitonin gene-related peptide (CGRP).[A33105] Although several small-molecule CGRP receptor antagonists have been developed, humanized monoclonal antibodies like galcanezumab are specifically designed to selectively bind to CGRP entities with high potency.[A33112] Given this target specificity, lack of off-target toxicity, and characteristic proteolysis profile of immunoglobulin antibodies to not undergo metabolism by liver enzymes, galcanezumab possesses favourable and promising safety and tolerability.[A33112] Galcanezumab was approved by the FDA in September 2018, and is indicated for the preventive treatment of migraine and the treatment of episodic cluster headache.[L42060] It is unknown if galcanezumab has an effect on pregnancy outcomes. A pregnancy exposure registry has been established to evaluate the safety of this drug in pregnant women.[L42060]

**Indication.** Galcanezumab is indicated in adults for the preventive treatment of migraine and the treatment of episodic cluster headache.[L42060]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-08-29 20:32 | 4:20 | 1/2/0 | 0/0/0 | 1/0/5 | 77,930/2,960 | ollama / qwen3.8:27b-mtp-q8_0 | 4 | 0/4 | 4/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Kielbasa_2020](drugs/drug_galcanezumab/Galcanezumab_Kielbasa2020_final.md) | Kielbasa W et al., Population Pharmacokinetics of Galcanez…, Journal of clinical pharmac… (2020) | [10.1002/jcph.1511](https://doi.org/10.1002/jcph.1511) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Fiedler-Kelly_2021](drugs/drug_galcanezumab/Galcanezumab_FiedlerKelly2021_reference.md) | Fiedler-Kelly J et al., Relationship of the Calcitonin Gene-Rel…, Clinical pharmacology in dr… (2021) | [10.1002/cpdd.929](https://doi.org/10.1002/cpdd.929) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Kielbasa_2020](drugs/drug_galcanezumab/Galcanezumab_Kielbasa2020_base.md) | Kielbasa W et al., Population Pharmacokinetics of Galcanez…, Journal of clinical pharmac… (2020) | [10.1002/jcph.1511](https://doi.org/10.1002/jcph.1511) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | **MTSS1** | `safety` — adverse-reaction risk (HLA / safety allele) — no parameter shift | safety_allele | [An_2024](drugs/drug_galcanezumab/pgx_An_2024_MTSS1_safety.md) | An YC et al., Genetic variants associated with respon…, The journal of headache and… (2024) | [10.1186/s10194-024-01850-y](https://doi.org/10.1186/s10194-024-01850-y) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **ACOX2** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | unknown | [An_2024](drugs/drug_galcanezumab/pgx_An_2024_ACOX2_Q100.md) | An YC et al., Genetic variants associated with respon…, The journal of headache and… (2024) | [10.1186/s10194-024-01850-y](https://doi.org/10.1186/s10194-024-01850-y) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **ATAD2B** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | unknown | [An_2024](drugs/drug_galcanezumab/pgx_An_2024_ATAD2B_Q100.md) | An YC et al., Genetic variants associated with respon…, The journal of headache and… (2024) | [10.1186/s10194-024-01850-y](https://doi.org/10.1186/s10194-024-01850-y) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **LRRC4C** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | unknown | [An_2024](drugs/drug_galcanezumab/pgx_An_2024_LRRC4C_Q100.md) | An YC et al., Genetic variants associated with respon…, The journal of headache and… (2024) | [10.1186/s10194-024-01850-y](https://doi.org/10.1186/s10194-024-01850-y) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **OXR1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | unknown | [An_2024](drugs/drug_galcanezumab/pgx_An_2024_OXR1_Q100.md) | An YC et al., Genetic variants associated with respon…, The journal of headache and… (2024) | [10.1186/s10194-024-01850-y](https://doi.org/10.1186/s10194-024-01850-y) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **TMEM92-AS1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | unknown | [An_2024](drugs/drug_galcanezumab/pgx_An_2024_TMEM92_AS1_Q100.md) | An YC et al., Genetic variants associated with respon…, The journal of headache and… (2024) | [10.1186/s10194-024-01850-y](https://doi.org/10.1186/s10194-024-01850-y) |

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 3  ·  extracted 1  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Fiedler-Kelly_2021.pdf` | Fiedler-Kelly J et al., Relationship of the Calcitonin Gene-Rel…, Clinical pharmacology in dr… (2021) | popPK | 10 | [10.1002/cpdd.929](https://doi.org/10.1002/cpdd.929) | [33740315](https://pubmed.ncbi.nlm.nih.gov/33740315) | The evidence explicitly reports quantitative PK parameters (CL, V, ka, tlag, t1/2) for galcanezumab in the text. |

<sub>queue written 2026-08-29T20:30:43.063811+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cho_2026 | irrelevant | 0 | 0 | The paper is a real-world effectiveness and safety study reporting clinical outcomes (headache days) and does not contain any pharmacokinetic parameters for galcanezumab. |
| popPK | Martín-Yeves_2026 | irrelevant | 0 | 0 | The paper is a clinical effectiveness study comparing migraine outcomes and does not report any pharmacokinetic parameters for galcanezumab. |
| PGx | Szkutnik-Fiedler_2020 | not_relevant | 0 | 0 | The paper is a review of drug-drug interactions and general pharmacokinetics for anti-migraine drugs, but it does not report any pharmacogenomic effects (gene variants) on the PK or PD of galcanezumab. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_galcanezumab`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
