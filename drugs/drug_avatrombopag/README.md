# avatrombopag

- **generic name:** avatrombopag
- **ATC codes:** `B02BX08`
- **DrugBank:** [DB11995](https://go.drugbank.com/drugs/DB11995)
- **groups:** approved, investigational

## About

**Description.** Avatrombopag (_Doptelet_), is an orally administered, small molecule thrombopoietin receptor (c-Mpl) agonist that increases platelet number without increasing platelet activation,[A33097,L2824] thereby decreasing the need for blood transfusions.[L2824] Patients with thrombocytopenia and chronic liver disease often require platelet transfusions before surgical procedures to decrease the risk of bleeding.[A33095] Thrombocytopenia is a common complication in patients suffering from chronic liver disease, occurring as a result of liver disease or a consequence of interferon-based antiviral therapy.[F95]

Avatrombopag was first approved by the FDA in May 2018 for use in adults with chronic liver disease who are scheduled to undergo a procedure.[L2931] It is administered orally as the salt form avatrombopag maleate.[L2927] _Doptelet_ (Avatrombopag) is the first orally administered treatment option for patients with chronic liver disease,  allowing a large population of patients to avoid a platelet transfusion before a procedure by increasing platelet counts to the optimal level ≥50,000 per microliter.[L2932]

In July 2025, the FDA expanded approval to include a new pediatric formulation, Doptelet Sprinkle (avatrombopag oral granules), specifically designed for children aged one to less than six years, while the existing tablet formulation remains indicated for patients aged six years and older. This approval was supported by results from the AVA-PED-301 phase 3 study, which demonstrated durable platelet responses and favorable safety in children with persistent or chronic immune thrombocytopenia.[L53688, L53683]

**Indication.** Indicated for the treatment of thrombocytopenia in pediatric patients 1 year and older with persistent or chronic immune thrombocytopenia who have had an insufficient response to a previous treatment [L53683]. It is also indicated in adult patients with chronic liver disease who are scheduled to undergo a procedure [L49941], as well as in adult patients with chronic immune thrombocytopenia who have had an insufficient response to a previous treatment [L49941]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-06 04:35 | 7:34 | 0/0/1 | 0/0/0 | 1/0/1 | 50,823/15,328 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C1_half_life_beta failed (ratio 0.6843)</sub><br><sub>route_to: `human_review`</sub> | [Liu_2025_2](drugs/drug_avatrombopag/Avatrombopag_Liu2025v2_reference.md) | Liu X et al., Investigation of the ABCB1 Gene Polymor…, Pharmaceuticals (Basel, Swi… (2025) | [10.3390/ph18060903](https://doi.org/10.3390/ph18060903) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | **CYP2C9** | `safety` — adverse-reaction risk (HLA / safety allele) — no parameter shift | safety_allele | [Liu_2025_2](drugs/drug_avatrombopag/pgx_Liu_2025_2_CYP2C9_safety.md) | Liu X et al., Investigation of the ABCB1 Gene Polymor…, Pharmaceuticals (Basel, Swi… (2025) | [10.3390/ph18060903](https://doi.org/10.3390/ph18060903) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **ABCB1** | `Q27` · CL/F | transport | [Liu_2025_2](drugs/drug_avatrombopag/pgx_Liu_2025_2_ABCB1_Q27.md) | Liu X et al., Investigation of the ABCB1 Gene Polymor…, Pharmaceuticals (Basel, Swi… (2025) | [10.3390/ph18060903](https://doi.org/10.3390/ph18060903) |

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Coverage

- **PubMed hits:** 16 matched, 16 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Nomoto_2018.pdf` | Nomoto M et al., Population Pharmacokinetic/Pharmacodyna…, Journal of clinical pharmac… (2018) | popPK | 10 | [10.1002/jcph.1267](https://doi.org/10.1002/jcph.1267) | [29905956](https://pubmed.ncbi.nlm.nih.gov/29905956) | The paper describes a population PK model for avatrombopag, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |
| `Nomoto_2018_2.pdf` | Nomoto M et al., Pharmacokinetic/pharmacodynamic drug-dr…, British journal of clinical… (2018) | popPK | 8 | [10.1111/bcp.13517](https://doi.org/10.1111/bcp.13517) | [29341245](https://pubmed.ncbi.nlm.nih.gov/29341245) | The study reports quantitative PK parameters (AUC ratios, half-life values) for avatrombopag in a DDI context, but lacks full compartmental model parameters (CL, V, Q) typically required for population PK extraction. |
| `Liu_2025.pdf` | Liu X et al., Investigation of the ABCB1 Gene Polymor…, Pharmaceuticals (Basel, Swi… (2025) | pgx | 8 | [10.3390/ph18060903](https://doi.org/10.3390/ph18060903) | [40573298](https://www.ncbi.nlm.nih.gov/pubmed/40573298) | metadata signals extractable PGX data (ABCB1, PK/PD-context) |

<sub>queue written 2026-09-06T07:32:11.607044+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Ibrahim_2021 | not_relevant | 0 | 0 | The paper is an in silico study of ABCG2 inhibition and does not report pharmacogenomic effects on avatrombopag PK/PD. |
| PD | Liu_2025_2 | not_relevant | 4 | 3 | The paper reports a population PK model and PK/PD simulations, but the provided text does not contain the specific numeric PD parameters (e.g., Emax, EC50, slope) or the underlying PD model structure required to derive an extractable exposure-response relationship; it only presents qualitative conclusions and simulated outcome values. |
| popPK | Nomoto_2018 | relevant | 10 | 0 | The paper describes a population PK model for avatrombopag, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |
| PGx | Nomoto_2018 | not_relevant | 0 | 0 | The paper analyzes population PK/PD and the impact of CYP inhibitors, but does not report any pharmacogenomic effects (gene variants) on avatrombopag parameters. |
| PD | Nomoto_2018_2 | not_relevant | 3 | 2 | The paper reports qualitative changes in maximum platelet count (PD) relative to PK changes (AUC) for drug-drug interactions, but does not provide a concentration-effect curve, Emax/EC50 parameters, or a formal PK/PD model fit. |
| PGx | Nomoto_2018_2 | not_relevant | 0 | 0 | The paper reports drug-drug interactions (DDIs) involving CYP inhibitors/inducers, not pharmacogenomic effects based on genetic variants or genotypes. |
| PGx | Nomoto_2018_3 | not_relevant | 4 | 2 | The paper reports an association between CYP2C9 polymorphisms and increased PK variability, but does not provide fitted effect sizes or demonstrate a clinically important change in PK/PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_avatrombopag`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
