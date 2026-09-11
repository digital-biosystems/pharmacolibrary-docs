# tegoprazan

- **generic name:** tegoprazan
- **ATC codes:** `A02BC09`
- **DrugBank:** [DB16690](https://go.drugbank.com/drugs/DB16690)
- **groups:** investigational

## About

**Description.** Tegoprazan (also known as CJ-12420) is a novel therapeutic developed by CJ Healthcare Corp for treating acid-related gastrointestinal diseases.[A234215, A234220] This drug is a potent and high-selective potassium-competitive acid blocker (P-CAB) with a fast onset of action and the ability to control gastric pH for a prolonged period of time.[A234215, A234220] Tegoprazan’s strong and sustained effect is due to its ability to be slowly cleared from the gastric glands and exertion of effects independent of acid levels.[A234220] It has also been observed to be efficacious independent of food intake.[A234220]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-10 21:08 | 11:49 | 2/0/0 | 1/1/0 | 0/0/1 | 280,641/17,737 | ollama / qwen3.8:27b-mtp-q8_0 | 18 | 0/18 | 18/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [He_2021](drugs/drug_tegoprazan/Tegoprazan_He2021_reference.md) | He J et al., Safety, Tolerability and Pharmacokineti…, Clinical drug investigation (2021) | [10.1007/s40261-020-00986-4](https://doi.org/10.1007/s40261-020-00986-4) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Kim_2024](drugs/drug_tegoprazan/Tegoprazan_Kim2024_reference.md) | Kim HS et al., Enhancing drug administration flexibili…, Translational and clinical… (2024) | [10.12793/tcp.2024.32.e9](https://doi.org/10.12793/tcp.2024.32.e9) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Jeong_2022](drugs/drug_tegoprazan/pd_Jeong_2022_pH.md) | Jeong HC et al., Integration of a Physiologically Based…, Pharmaceutics (2022) | [10.3390/pharmaceutics14061298](https://doi.org/10.3390/pharmaceutics14061298) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Jung_2026](drugs/drug_tegoprazan/pd_Jung_2026_intragastric_pH.md) | Jung W et al., A Mechanism-Based Multi-Level Populatio…, CPT: pharmacometrics & syst… (2026) | [10.1002/psp4.70181](https://doi.org/10.1002/psp4.70181) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **CYP2C19** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | metabolism | [Yang_2022](drugs/drug_tegoprazan/pgx_Yang_2022_CYP2C19_Q100.md) | Yang E et al., Night-time gastric acid suppression by…, British journal of clinical… (2022) | [10.1111/bcp.15268](https://doi.org/10.1111/bcp.15268) |

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Coverage

- **PubMed hits:** 35 matched, 35 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 2  ·  extracted 2  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `He_2021.pdf` | He J et al., Safety, Tolerability and Pharmacokineti…, Clinical drug investigation (2021) | popPK | 9 | [10.1007/s40261-020-00986-4](https://doi.org/10.1007/s40261-020-00986-4) | [33355910](https://pubmed.ncbi.nlm.nih.gov/33355910) | The study reports key PK parameters (Cmax, AUC, t1/2) for tegoprazan, but specific compartmental model parameters (CL, V, Q, ka) are not explicitly listed in the provided text. |
| `Wang_2025.pdf` | Wang W et al., Tegoprazan: a novel, highly selective,…, European journal of clinica… (2025) | pgx | 8 | [10.1007/s00228-025-03850-6](https://doi.org/10.1007/s00228-025-03850-6) | [40442337](https://www.ncbi.nlm.nih.gov/pubmed/40442337) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Carrasco-Portugal_2026.pdf` | Carrasco-Portugal MDC et al., Pharmacokinetics of the potassium-compe…, International journal of cl… (2026) | pgx | 7 | [10.5414/CP204709](https://doi.org/10.5414/CP204709) | [41553168](https://www.ncbi.nlm.nih.gov/pubmed/41553168) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Lee_2025.pdf` | Lee J et al., Potassium-competitive acid blocker vs p…, American heart journal (2025) | pgx | 5 | [10.1016/j.ahj.2025.04.001](https://doi.org/10.1016/j.ahj.2025.04.001) | [40188976](https://www.ncbi.nlm.nih.gov/pubmed/40188976) | metadata signals extractable PGX data (CYP2C19) |

<sub>queue written 2026-09-10T20:59:08.116304+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Ahn_2023 | not_relevant | 0 | 0 | The paper discusses CYP2C19 polymorphism in the context of PPIs and mentions it as a factor for future studies on tegoprazan, but it does not report any pharmacogenomic effect on tegoprazan's PK or PD parameters. |
| PGx | Bandyopadhyay_2026 | not_relevant | 0 | 0 | The paper is a systematic review of clinical efficacy and safety, and while it mentions CYP2C19 independence, it does not report specific pharmacogenomic effect sizes on PK/PD parameters. |
| PGx | Carrasco-Portugal_2026 | not_relevant | 0 | 0 | The study compares pharmacokinetics between two ethnic populations (Mexicans vs. Koreans) but does not report specific gene variants, genotypes, or pharmacogenomic effects. |
| PGx | Cho_2023 | not_relevant | 2 | 0 | The paper reports a clinical trial comparing efficacy and safety, noting that tegoprazan's efficacy is consistent across CYP2C19 genotypes, but it does not report pharmacokinetic or pharmacodynamic parameters (like AUC, Cmax, or pH metrics) stratified by genotype. |
| PGx | Choi_2022 | not_relevant | 2 | 0 | The paper is a review that mentions tegoprazan is not metabolized by CYP2C19 and shows consistent efficacy regardless of genotype, but it does not report specific pharmacokinetic or pharmacodynamic parameter changes (e.g., AUC, Cmax, pH metrics) stratified by genotype. |
| PGx | Choi_2022_2 | not_relevant | 0 | 0 | The paper reports clinical efficacy (H. pylori eradication rates) stratified by CYP2C19 genotype, but does not report pharmacokinetic or pharmacodynamic parameters (e.g., AUC, Cmax, pH levels) for tegoprazan. |
| PGx | Hussaini_2025 | not_relevant | 0 | 0 | The paper is a meta-analysis of clinical efficacy and safety outcomes (healing rates, adverse events) and does not report pharmacokinetic or pharmacodynamic parameters or specific pharmacogenomic effect sizes. |
| popPK | Jung_2026 | relevant | 10 | 0 | The paper describes a population PK/PD model for tegoprazan, but the specific numeric parameter values (CL, V, etc.) are located in Table 2, which is not included in the provided evidence. |
| PGx | Lee_2025 | not_relevant | 0 | 0 | The paper is a trial design/rationale document for a clinical trial comparing tegoprazan and rabeprazole, and does not report pharmacogenomic effects on PK or PD parameters. |
| PGx | Liu_2025 | not_relevant | 0 | 0 | The paper is a systematic review of drug-drug and food-drug interactions for P-CABs and does not report pharmacogenomic effects (gene variants) on tegoprazan PK/PD. |
| PGx | Ngo_2023 | not_relevant | 0 | 0 | The paper focuses on drug-drug interactions (DDI) with CYP3A4 inhibitors/inducers and PBPK modeling, not on pharmacogenomic effects of gene variants on tegoprazan PK/PD. |
| PGx | Ranbhise_2026 | not_relevant | 0 | 0 | The paper is a review that discusses the general pharmacokinetic advantages of P-CABs (like tegoprazan) over PPIs, specifically noting that P-CABs are metabolized by CYP3A4 and are less affected by CYP2C19 polymorphisms, but it does not report specific quantitative pharmacogenomic data or fitted effect sizes for tegoprazan. |
| PGx | Remes-Troche_2024 | not_relevant | 0 | 0 | The paper is a general review of P-CABs and does not report specific pharmacogenomic effects on the PK/PD of tegoprazan. |
| PGx | Shin_2025 | not_relevant | 2 | 5 | The paper reports clinical efficacy (healing rates) stratified by CYP2C19 genotype, but does not report pharmacokinetic (PK) or pharmacodynamic (PD) parameters (e.g., AUC, Cmax, pH) or fitted effect sizes for the drug. |
| PGx | Wang_2025 | not_relevant | 2 | 0 | The paper is a general review that mentions CYP2C19 polymorphism does not affect Tegoprazan, but it does not report specific pharmacogenomic effect sizes or detailed PK/PD parameter changes driven by genetic variants. |
| popPK | Wei_2023 | relevant | 8 | 4 | The paper is a PBPK modeling study for tegoprazan that reports specific PK parameters (ka, Vss, intrinsic clearance) in the text, but lacks a full population PK parameter table (e.g., CL, Q) and relies on external references for the core model structure. |
| PD | Wei_2023 | not_relevant | 4 | 3 | The paper uses a PBPK/PD model to predict DDI effects on intragastric pH, but the provided text only contains qualitative descriptions of the fit and references to tables/figures without listing the specific numeric PD parameters (e.g., Emax, EC50) or the actual pH values required to derive a concentration-effect relationship. |
| PGx | Wei_2023 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (DDI) using PBPK/PD modeling, not pharmacogenomic effects of gene variants on PK/PD parameters. |
| PGx | Yang_2023 | not_relevant | 0 | 0 | The study evaluates the effect of tegoprazan on the PK of a CYP2C19 substrate (proguanil) in a fixed genotype group, rather than how a gene variant changes the PK/PD of tegoprazan itself. |
| PGx | Yoon_2021 | not_relevant | 0 | 0 | The paper focuses on drug-drug interactions (DDIs) with CYP3A4 inhibitors/inducers and PBPK modeling, not on pharmacogenomic effects (gene variants) on PK/PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_tegoprazan`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
