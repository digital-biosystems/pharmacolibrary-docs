# aprindine

- **generic name:** aprindine
- **ATC codes:** `C01BB04`
- **DrugBank:** [DB01429](https://go.drugbank.com/drugs/DB01429)
- **groups:** experimental

## About

**Description.** Aprindine is a cardiac depressant used in arrhythmias.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-09 08:08 | 3:02 | 0/1/0 | 0/0/0 | 0/0/1 | 27,246/1,143 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 2/0 | 2/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Kobari_1984](drugs/drug_aprindine/Aprindine_Kobari1984_reference.md) | Kobari T et al., Dose-dependent pharmacokinetics of apri…, European journal of clinica… (1984) | [10.1007/BF00546721](https://doi.org/10.1007/BF00546721) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **CYP2D6** | `Q27` · CL/F | metabolism | [Ebner_1993](drugs/drug_aprindine/pgx_Ebner_1993_CYP2D6_Q27.md) | Ebner T et al., The metabolism of aprindine in relation…, British journal of clinical… (1993) | [10.1111/j.1365-2125.1993.tb04161.x](https://doi.org/10.1111/j.1365-2125.1993.tb04161.x) |

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Coverage

- **PubMed hits:** 13 matched, 13 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kobari_1984.pdf` | Kobari T et al., Dose-dependent pharmacokinetics of apri…, European journal of clinica… (1984) | popPK | 10 | [10.1007/BF00546721](https://doi.org/10.1007/BF00546721) | [6714286](https://pubmed.ncbi.nlm.nih.gov/6714286) | The study reports quantitative PK parameters (half-life, clearance, volume) for aprindine, with specific numeric values for half-life provided in the text. |
| `de_1981.pdf` | de Suray JM et al., Pharmacokinetic study of aprindine and…, International journal of cl… (1981) | popPK | 9 | not captured | [7251236](https://pubmed.ncbi.nlm.nih.gov/7251236) | The paper is a relevant pharmacokinetic study of aprindine in dogs, but the specific numeric parameter values (CL, V, ka, etc.) are not present in the provided text, which only describes qualitative similarities and relative differences. |
| `Wirth_1983.pdf` | Wirth KE et al., [Detection of aprindine and its metabol…, Herz (1983) | popPK | 8 | not captured | [6642401](https://pubmed.ncbi.nlm.nih.gov/6642401) | The study reports a two-compartment model and elimination half-lives (37h plasma, 31h urine) for aprindine, but lacks explicit values for clearance, volume of distribution, or absorption rate constants. |
| `Kobayashi_1998.pdf` | Kobayashi K et al., Inhibitory effects of antiarrhythmic dr…, British journal of clinical… (1998) | pgx | 7 | [10.1046/j.1365-2125.1998.t01-1-00692.x](https://doi.org/10.1046/j.1365-2125.1998.t01-1-00692.x) | [9578183](https://www.ncbi.nlm.nih.gov/pubmed/9578183) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |

<sub>queue written 2026-09-09T08:07:51.115200+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Kobayashi_1998 | not_relevant | 0 | 0 | The paper reports in vitro CYP1A2 inhibition by aprindine, not a pharmacogenomic effect (gene variant) on aprindine's PK or PD. |
| popPK | Matsuo_2000 | irrelevant | 0 | 0 | The study focuses on propiverine and receptor binding in mice, with aprindine mentioned only as a prior comparator for inducing catalepsy, and no PK parameters for aprindine are reported. |
| PD | Matsuo_2000 | not_relevant | 2 | 1 | The paper focuses on propiverine and other drugs, mentioning aprindine only in the context of previous work; it provides qualitative rankings of catalepsy intensity and in vitro binding affinities (Ki/Kd) rather than a quantitative exposure-response or dose-response curve with PD parameters (Emax, EC50) for aprindine. |
| popPK | Taguchi_2006 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for bepridil, with aprindine serving only as a co-administered inhibitor/comparator, not as the subject drug. |
| PGx | Taguchi_2006 | not_relevant | 0 | 0 | The paper reports pharmacokinetic parameters for bepridil, not aprindine; aprindine is only mentioned as a co-administered drug affecting bepridil clearance. |
| popPK | Tanaka_1990 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of aprindine's mechanism of action on ion channels, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Wirth_1983 | relevant | 8 | 4 | The study reports a two-compartment model and elimination half-lives (37h plasma, 31h urine) for aprindine, but lacks explicit values for clearance, volume of distribution, or absorption rate constants. |
| popPK | de_1981 | relevant | 9 | 2 | The paper is a relevant pharmacokinetic study of aprindine in dogs, but the specific numeric parameter values (CL, V, ka, etc.) are not present in the provided text, which only describes qualitative similarities and relative differences. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_aprindine`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
