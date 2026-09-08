# antithrombin III

- **generic name:** antithrombin III
- **ATC codes:** `B01AB02`
- **DrugBank:** [DB11598](https://go.drugbank.com/drugs/DB11598)
- **groups:** approved, investigational

## About

**Description.** A plasma alpha 2 glycoprotein that accounts for the major antithrombin activity of normal plasma and also inhibits several other enzymes. It is a member of the serpin superfamily.

**Indication.** Antithrombin III human is a human antithrombin (AT) indicated in patients with hereditary antithrombin deficiency for the treatment and prevention of thromboembolism and prevention of peri-operative and peri-partum thromboembolism

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-05 17:09 | 0:48 | 0/4/0 | 0/0/0 | 0/0/0 | 19,352/1,011 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Carlson_1984](drugs/drug_antithrombin_iii/AntithrombinIii_Carlson1984_reference.md) | Carlson TH et al., In vivo behavior of radioiodinated rabb…, The Journal of clinical inv… (1984) | [10.1172/JCI111401](https://doi.org/10.1172/JCI111401) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Collen_1977](drugs/drug_antithrombin_iii/AntithrombinIii_Collen1977_reference.md) | Collen D et al., Metabolism of antithrombin III (heparin…, European journal of clinica… (1977) | [10.1111/j.1365-2362.1977.tb01566.x](https://doi.org/10.1111/j.1365-2362.1977.tb01566.x) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Kim_2020](drugs/drug_antithrombin_iii/AntithrombinIii_Kim2020_reference.md) | Kim BR et al., Pharmacokinetics of human antithrombin…, British journal of clinical… (2020) | [10.1111/bcp.14200](https://doi.org/10.1111/bcp.14200) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Knot_1987](drugs/drug_antithrombin_iii/AntithrombinIii_Knot1987_reference.md) | Knot EA et al., Antithrombin III: biodistribution in he…, Thrombosis and haemostasis (1987) | — |

## Coverage

- **PubMed hits:** 26 matched, 17 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 4  ·  extracted 0  ·  needs_review 0  ·  rejected 4  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Collen_1977.pdf` | Collen D et al., Metabolism of antithrombin III (heparin…, European journal of clinica… (1977) | popPK | 10 | [10.1111/j.1365-2362.1977.tb01566.x](https://doi.org/10.1111/j.1365-2362.1977.tb01566.x) | [65284](https://pubmed.ncbi.nlm.nih.gov/65284) | The paper reports quantitative pharmacokinetic parameters (half-life, fractional catabolic rate, intravascular fraction) for antithrombin III in a two-compartment model, with all numeric values explicitly present in the text. |
| `Kim_2020.pdf` | Kim BR et al., Pharmacokinetics of human antithrombin…, British journal of clinical… (2020) | popPK | 10 | [10.1111/bcp.14200](https://doi.org/10.1111/bcp.14200) | [31840271](https://pubmed.ncbi.nlm.nih.gov/31840271) | The paper reports a population PK model for antithrombin III with explicit numeric values for volume of distribution and clearance in the abstract. |
| `Aibiki_2007.pdf` | Aibiki M et al., Differences in antithrombin III activit…, Shock (Augusta, Ga.) (2007) | popPK | 9 | [10.1097/shk.0b013e31803422c4](https://doi.org/10.1097/shk.0b013e31803422c4) | [17515857](https://pubmed.ncbi.nlm.nih.gov/17515857) | The paper is a pharmacokinetic study of antithrombin III using a two-compartment model, but the specific numeric parameter values (CL, V, t1/2) are not present in the provided text, which only describes trends and statistical comparisons. |
| `Carlson_1984.pdf` | Carlson TH et al., In vivo behavior of radioiodinated rabb…, The Journal of clinical inv… (1984) | popPK | 9 | [10.1172/JCI111401](https://doi.org/10.1172/JCI111401) | [6376543](https://pubmed.ncbi.nlm.nih.gov/6376543) | The study reports quantitative compartmental fractions and fractional catabolic rates for antithrombin III in rabbits, providing specific numeric values for disposition parameters. |
| `Knot_1987.pdf` | Knot EA et al., Antithrombin III: biodistribution in he…, Thrombosis and haemostasis (1987) | popPK | 9 | not captured | [3445222](https://pubmed.ncbi.nlm.nih.gov/3445222) | The study reports quantitative PK parameters (half-life, catabolic rate constant) and biodistribution data for antithrombin III in humans using a three-compartment model. |

<sub>queue written 2026-09-06T16:22:37.903477+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aibiki_2007 | relevant | 9 | 2 | The paper is a pharmacokinetic study of antithrombin III using a two-compartment model, but the specific numeric parameter values (CL, V, t1/2) are not present in the provided text, which only describes trends and statistical comparisons. |
| popPK | Raner_2024 | irrelevant | 0 | 0 | The paper is a meta-analysis of heparin and protamine dosing where antithrombin III is only a secondary biomarker, not the subject drug for PK parameter extraction. |
| popPK | Schipper_1982 | irrelevant | 1 | 0 | The study reports pharmacokinetic parameters for fibrinogen, not antithrombin III, which is used only as a therapeutic agent to correct activity levels. |
| popPK | Suzuki_2021 | irrelevant | 0 | 0 | The paper is a clinical biomarker study where antithrombin III is only a measured outcome variable, not the subject of a pharmacokinetic analysis. |
| popPK | Völler_2018 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of recombinant asparaginase, and antithrombin III is only mentioned as a laboratory value that did not influence the PK of the subject drug. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_antithrombin_iii`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
