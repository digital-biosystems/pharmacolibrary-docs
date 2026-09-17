<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;dorzagliatin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Dorzagliatin_Wang2023_reference&quot;,&quot;label&quot;:&quot;Wang_2023_reference&quot;,&quot;href&quot;:&quot;drugs/drug_dorzagliatin/Dorzagliatin_Wang2023_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# dorzagliatin

- **generic name:** dorzagliatin
- **ATC codes:** `A10BX18`
- **DrugBank:** [DB15123](https://go.drugbank.com/drugs/DB15123)
- **groups:** investigational

## About

**Description.** Dorzagliatin is under investigation in clinical trial NCT03173391 (Long-term Efficacy and Safety of HMS5552 in T2DM).

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-15 17:25 | 5:25 | 1/0/0 | 0/0/0 | 0/0/1 | 60,056/7,940 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 0/1 | 2/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Wang_2023_reference](drugs/drug_dorzagliatin/Dorzagliatin_Wang2023_reference.md) | Wang K et al., Population Pharmacokinetic Analysis of…, Clinical pharmacokinetics (2023) | [10.1007/s40262-023-01286-8](https://doi.org/10.1007/s40262-023-01286-8) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **ABCC8** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Nair_2026](drugs/drug_dorzagliatin/pgx_Nair_2026_ABCC8_Q100.md) | Nair AK et al., Modelling the effects of human SUR1 R14…, Diabetologia (2026) | [10.1007/s00125-025-06605-1](https://doi.org/10.1007/s00125-025-06605-1) |

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Jin_2025.pdf` | Jin G et al., In Vivo PK-PD and Drug-Drug Interaction…, Pharmaceuticals (Basel, Swi… (2025) | popPK | 8 | [10.3390/ph18060927](https://doi.org/10.3390/ph18060927) | [40573322](https://pubmed.ncbi.nlm.nih.gov/40573322) | The study reports in vivo PK parameters for dorzagliatin in mice, but the evidence only provides relative percentage changes in AUC and Cmax rather than absolute quantitative values for clearance, volume, or half-life. |

<sub>queue written 2026-09-15T17:21:28.369842+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Ji_2025 | not_relevant | 0 | 0 | The paper reports that dorzagliatin improved glucose tolerance in a mouse model, but it does not report a pharmacogenomic effect (i.e., how a specific gene variant changes the drug's PK or PD parameters). |
| popPK | Jin_2025 | relevant | 8 | 2 | The study reports in vivo PK parameters for dorzagliatin in mice, but the evidence only provides relative percentage changes in AUC and Cmax rather than absolute quantitative values for clearance, volume, or half-life. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_dorzagliatin`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
