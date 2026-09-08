# fitusiran

- **generic name:** fitusiran
- **ATC codes:** `B02BX12`
- **DrugBank:** [DB15002](https://go.drugbank.com/drugs/DB15002)
- **groups:** approved, investigational

## About

**Description.** Fitusiran is an antithrombin-directed double-stranded small interfering ribonucleic acid (siRNA) that is covalently linked to a ligand containing a triantennary N-acetylgalactosamine (GalNAc) moiety.[L52860] Fitusiran was first approved by the FDA on March 28, 2025, as routine prophylaxis therapy to prevent or reduce the frequency of bleeding episodes associated with hemophilia A or B.[L52865] By causing the degradation of antithrombin mRNA and promoting thrombin generation, fitusiran works to restore hemostasis in patients with hemophilia.[A273770]

**Indication.** Fitusiran is indicated for routine prophylaxis to prevent or reduce the frequency of bleeding episodes in adult and pediatric patients aged 12 years and older with hemophilia A or B with or without factor VIII or IX inhibitors.[L52860]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-06 12:21 | 21:51 | 0/0/0 | 0/0/0 | 0/0/0 | 215,399/8,853 | ollama / qwen3.8:27b-mtp-q8_0 | 8 | 0/1 | 8/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">None</span> | [Fan_2026](drugs/drug_fitusiran/Fitusiran_Fan2026_0_38.md) | Fan X et al., A computational model-powered platform…, Molecular therapy. Nucleic… (2026) | [10.1016/j.omtn.2026.102936](https://doi.org/10.1016/j.omtn.2026.102936) |
| <span class="pk-badge pk-badge--neutral">None</span> | [Fan_2026](drugs/drug_fitusiran/Fitusiran_Fan2026_0_71_9_45.md) | Fan X et al., A computational model-powered platform…, Molecular therapy. Nucleic… (2026) | [10.1016/j.omtn.2026.102936](https://doi.org/10.1016/j.omtn.2026.102936) |
| <span class="pk-badge pk-badge--neutral">None</span> | [Fan_2026](drugs/drug_fitusiran/Fitusiran_Fan2026_1_48_21_16.md) | Fan X et al., A computational model-powered platform…, Molecular therapy. Nucleic… (2026) | [10.1016/j.omtn.2026.102936](https://doi.org/10.1016/j.omtn.2026.102936) |
| <span class="pk-badge pk-badge--neutral">None</span> | [Fan_2026](drugs/drug_fitusiran/Fitusiran_Fan2026_humansa.md) | Fan X et al., A computational model-powered platform…, Molecular therapy. Nucleic… (2026) | [10.1016/j.omtn.2026.102936](https://doi.org/10.1016/j.omtn.2026.102936) |
| <span class="pk-badge pk-badge--neutral">None</span> | [Fan_2026](drugs/drug_fitusiran/Fitusiran_Fan2026_micea.md) | Fan X et al., A computational model-powered platform…, Molecular therapy. Nucleic… (2026) | [10.1016/j.omtn.2026.102936](https://doi.org/10.1016/j.omtn.2026.102936) |
| <span class="pk-badge pk-badge--neutral">None</span> | [Fan_2026](drugs/drug_fitusiran/Fitusiran_Fan2026_monkeysc.md) | Fan X et al., A computational model-powered platform…, Molecular therapy. Nucleic… (2026) | [10.1016/j.omtn.2026.102936](https://doi.org/10.1016/j.omtn.2026.102936) |
| <span class="pk-badge pk-badge--neutral">None</span> | [Fan_2026](drugs/drug_fitusiran/Fitusiran_Fan2026_ratsb.md) | Fan X et al., A computational model-powered platform…, Molecular therapy. Nucleic… (2026) | [10.1016/j.omtn.2026.102936](https://doi.org/10.1016/j.omtn.2026.102936) |

## Coverage

- **PubMed hits:** 24 matched, 19 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 7  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ayyar_2021.pdf` | Ayyar VS et al., Minimal Physiologically Based Pharmacok…, The Journal of pharmacology… (2021) | popPK | 8 | [10.1124/jpet.121.000805](https://doi.org/10.1124/jpet.121.000805) | [34413198](https://pubmed.ncbi.nlm.nih.gov/34413198) | The paper describes a PBPK model for fitusiran and mentions specific allometric exponents, but the primary quantitative PK parameters (CL, V, etc.) are not explicitly listed in the provided text. |

<sub>queue written 2026-09-06T12:15:08.808058+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ayyar_2021 | relevant | 8 | 2 | The paper describes a PBPK model for fitusiran and mentions specific allometric exponents, but the primary quantitative PK parameters (CL, V, etc.) are not explicitly listed in the provided text. |
| popPK | Berk_2021 | irrelevant | 1 | 0 | The study focuses on a novel siRNA targeting Lin28B, and fitusiran is only used as a comparator for stability and sequence reference without reporting its quantitative PK parameters. |
| popPK | Di_2019 | irrelevant | 0 | 0 | The paper is a review discussing adherence and ultrasound monitoring in haemophilia, mentioning fitusiran only as a therapeutic option without reporting any pharmacokinetic parameters. |
| popPK | Giuffrida_2026 | irrelevant | 0 | 0 | The paper is a narrative review of hemophilia A therapies that mentions fitusiran only as a therapeutic agent without reporting any quantitative pharmacokinetic parameters. |
| popPK | Hermans_2021 | irrelevant | 0 | 0 | The paper is a review of surgical protocols and mentions fitusiran only as a context for non-replacement therapy, without reporting any quantitative pharmacokinetic parameters. |
| popPK | Jiménez-Yuste_2025 | irrelevant | 0 | 0 | The paper is a narrative review of non-factor therapies that mentions fitusiran but does not report any original quantitative pharmacokinetic parameters or disposition data. |
| popPK | Kaczmarek_2018 | irrelevant | 0 | 0 | The paper is a general review of hemophilia treatments and gene therapy that mentions fitusiran only as a non-substitutional therapy in a table, without reporting any quantitative pharmacokinetic parameters for it. |
| popPK | Lillicrap_2020 | irrelevant | 0 | 0 | The paper is a clinical review of hemophilia management that mentions fitusiran only as a keyword or in passing, without reporting any pharmacokinetic parameters or quantitative disposition data for the drug. |
| popPK | Mancuso_2022 | irrelevant | 0 | 0 | The paper is a review of surgical management strategies and does not report any quantitative pharmacokinetic parameters for fitusiran. |
| popPK | Mancuso_2024 | irrelevant | 0 | 0 | The paper is a narrative review discussing clinical benefits and risks of non-factor therapies, containing no original pharmacokinetic data or quantitative disposition parameters for fitusiran. |
| popPK | Okaygoun_2021 | irrelevant | 2 | 1 | The paper is a review that mentions fitusiran but only reports a qualitative half-life range (2.6–5.3 h) without clearance, volume, or compartmental model parameters. |
| popPK | Pelland-Marcotte_2019 | irrelevant | 0 | 0 | The paper is a general review of hemophilia treatment landscape and does not report any quantitative pharmacokinetic parameters for fitusiran. |
| popPK | Pipe_2025 | irrelevant | 2 | 0 | The paper is a long-term safety and efficacy study that mentions PK characterization as a secondary objective, but the provided evidence contains no quantitative PK parameter values (CL, V, etc.) for fitusiran. |
| popPK | Rajabi_2026 | irrelevant | 0 | 0 | The paper is a review of RNA therapeutics and delivery methods that mentions fitusiran only as an example of an siRNA strategy without reporting any quantitative pharmacokinetic parameters. |
| popPK | Rodriguez-Merchan_2023 | irrelevant | 0 | 0 | The paper is a review of hemophilic arthropathy and mentions fitusiran only as a prophylactic agent without reporting any pharmacokinetic parameters. |
| popPK | Sten_2023 | irrelevant | 2 | 0 | The paper is a comparative analysis of nine GalNAc-siRNAs where fitusiran is one of the subjects, but it reports only aggregate regression slopes and allometric scaling parameters, not specific quantitative disposition parameters (CL, V, Q, ka) for fitusiran. |
| popPK | Tian_2025 | irrelevant | 2 | 0 | The study focuses on a different drug (RBD5044) and uses fitusiran only as a comparator for mechanistic modeling without providing extractable quantitative PK parameter values for fitusiran in the evidence. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_fitusiran`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
