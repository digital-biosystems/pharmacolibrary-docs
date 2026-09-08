# butorphanol

- **generic name:** butorphanol
- **ATC codes:** `N02AF01`
- **DrugBank:** [DB00611](https://go.drugbank.com/drugs/DB00611)
- **groups:** approved, illicit, investigational, vet_approved

## About

**Description.** A synthetic morphinan analgesic with narcotic antagonist action. It is used in the management of severe pain.

**Indication.** For the relief of moderate to severe pain.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-08-27 14:00 | 16:45 | 3/1/0 | 0/2/0 | 0/0/1 | 180,663/20,340 | ollama / qwen3.8:27b-mtp-q8_0 | 9 | 4/5 | 8/1 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Knych_2024](drugs/drug_butorphanol/Butorphanol_Knych2024_estimate.md) | Knych HK et al., Population pharmacokinetics of butorpha…, Journal of veterinary pharm… (2024) | [10.1111/jvp.13450](https://doi.org/10.1111/jvp.13450) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Knych_2024](drugs/drug_butorphanol/Butorphanol_Knych2024_shrinkage.md) | Knych HK et al., Population pharmacokinetics of butorpha…, Journal of veterinary pharm… (2024) | [10.1111/jvp.13450](https://doi.org/10.1111/jvp.13450) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Pypendop_2021](drugs/drug_butorphanol/Butorphanol_Pypendop2021_reference.md) | Pypendop BH et al., Pharmacokinetics of butorphanol in male…, Journal of veterinary pharm… (2021) | [10.1111/jvp.13014](https://doi.org/10.1111/jvp.13014) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Saeed_2026](drugs/drug_butorphanol/Butorphanol_Saeed2026_reference.md) | Saeed AM et al., Butorphanol Pharmacokinetics Across Spe…, CPT: pharmacometrics & syst… (2026) | [10.1002/psp4.70293](https://doi.org/10.1002/psp4.70293) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Guo_2023](drugs/drug_butorphanol/pd_Guo_2023_unknown.md) | Guo F et al., Efficacy and safety of propofol target-…, World journal of clinical c… (2023) | [10.12998/wjcc.v11.i3.610](https://doi.org/10.12998/wjcc.v11.i3.610) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Vandeputte_2020](drugs/drug_butorphanol/pd_Vandeputte_2020_betaarr2.md) | Vandeputte MM et al., In vitro functional characterization of…, Archives of toxicology (2020) | [10.1007/s00204-020-02855-7](https://doi.org/10.1007/s00204-020-02855-7) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Vandeputte_2020](drugs/drug_butorphanol/pd_Vandeputte_2020_mini_Gi.md) | Vandeputte MM et al., In vitro functional characterization of…, Archives of toxicology (2020) | [10.1007/s00204-020-02855-7](https://doi.org/10.1007/s00204-020-02855-7) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **ABCB1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | transport | [Nelson_2025](drugs/drug_butorphanol/pgx_Nelson_2025_ABCB1_Q100.md) | Nelson TS et al., Case Report: Adverse reaction to butorp…, Frontiers in veterinary sci… (2025) | [10.3389/fvets.2025.1603375](https://doi.org/10.3389/fvets.2025.1603375) |

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Coverage

- **PubMed hits:** 27 matched, 25 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 4  ·  extracted 3  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Groenendaal_2008.pdf` | Groenendaal D et al., Pharmacokinetic/pharmacodynamic modelli…, European journal of pharmac… (2008) | pd | 5 | [10.1016/j.ejps.2008.03.003](https://doi.org/10.1016/j.ejps.2008.03.003) | [18467078](https://www.ncbi.nlm.nih.gov/pubmed/18467078) | metadata signals extractable PD data (pharmacodynamicmodel) |

<sub>queue written 2026-08-27T13:49:10.327599+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Basler_2026 | irrelevant | 0 | 0 | The study focuses on ventilation distribution in alpacas using EIT, and butorphanol is only used as a sedative agent without any pharmacokinetic parameter reporting. |
| popPK | Guo_2023 | irrelevant | 0 | 0 | The study is a clinical trial evaluating the efficacy of butorphanol as an adjunct to propofol for sedation, reporting no pharmacokinetic parameters (CL, V, etc.) for butorphanol. |
| popPK | Su_2026 | irrelevant | 0 | 0 | The study is a clinical trial determining the EC50 of ropivacaine with butorphanol as an adjuvant, and it does not report any pharmacokinetic parameters (CL, V, ka, etc.) for butorphanol. |
| popPK | Vandeputte_2020 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of MOR receptor activation (EC50/Emax) and does not report any pharmacokinetic disposition parameters for butorphanol. |
| PGx | Wen_2015 | not_relevant | 0 | 0 | The paper investigates butorphanol as an inhibitor of the ABCB1 transporter in leukemia cells, not the effect of a gene variant on butorphanol's pharmacokinetics or pharmacodynamics. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_butorphanol`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
