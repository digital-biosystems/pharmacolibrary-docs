# linerixibat

- **generic name:** linerixibat
- **ATC codes:** `A05AX08`
- **DrugBank:** [DB11729](https://go.drugbank.com/drugs/DB11729)
- **groups:** investigational

## About

**Description.** GSK2330672 has been investigated for the treatment of Diabetes Mellitus, Type 2.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-11 04:16 | 4:38 | 0/0/0 | 2/0/0 | 0/0/0 | 54,892/1,748 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 0/0 | 3/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Billo_2025](drugs/drug_linerixibat/pd_Billo_2025_ASBT.md) | Billo V et al., Carrier cross-reactivities of the bile…, Journal of lipid research (2025) | [10.1016/j.jlr.2025.100910](https://doi.org/10.1016/j.jlr.2025.100910) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Billo_2025](drugs/drug_linerixibat/pd_Billo_2025_NTCP.md) | Billo V et al., Carrier cross-reactivities of the bile…, Journal of lipid research (2025) | [10.1016/j.jlr.2025.100910](https://doi.org/10.1016/j.jlr.2025.100910) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Billo_2025](drugs/drug_linerixibat/pd_Billo_2025_OATP1B1.md) | Billo V et al., Carrier cross-reactivities of the bile…, Journal of lipid research (2025) | [10.1016/j.jlr.2025.100910](https://doi.org/10.1016/j.jlr.2025.100910) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Billo_2025](drugs/drug_linerixibat/pd_Billo_2025_OATP1B3.md) | Billo V et al., Carrier cross-reactivities of the bile…, Journal of lipid research (2025) | [10.1016/j.jlr.2025.100910](https://doi.org/10.1016/j.jlr.2025.100910) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Billo_2025](drugs/drug_linerixibat/pd_Billo_2025_OATP2B1.md) | Billo V et al., Carrier cross-reactivities of the bile…, Journal of lipid research (2025) | [10.1016/j.jlr.2025.100910](https://doi.org/10.1016/j.jlr.2025.100910) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Billo_2025](drugs/drug_linerixibat/pd_Billo_2025_SOAT.md) | Billo V et al., Carrier cross-reactivities of the bile…, Journal of lipid research (2025) | [10.1016/j.jlr.2025.100910](https://doi.org/10.1016/j.jlr.2025.100910) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Carreño_2025](drugs/drug_linerixibat/pd_Carre_o_2025_C4.md) | Carreño F et al., Analysis of C4 Concentrations to Predic…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.13300](https://doi.org/10.1002/psp4.13300) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Carreño_2025](drugs/drug_linerixibat/pd_Carre_o_2025_GSRS_diarrhea.md) | Carreño F et al., Analysis of C4 Concentrations to Predic…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.13300](https://doi.org/10.1002/psp4.13300) |

## Coverage

- **PubMed hits:** 14 matched, 14 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Zamek-Gliszczynski_2021.pdf` | Zamek-Gliszczynski MJ et al., Pharmacokinetics and ADME Characterizat…, Drug metabolism and disposi… (2021) | popPK | 10 | [10.1124/dmd.121.000595](https://doi.org/10.1124/dmd.121.000595) | [34625435](https://pubmed.ncbi.nlm.nih.gov/34625435) | The title confirms a PK study of linerixibat, but the provided evidence contains only the title and no numeric parameter values. |
| `Karatza_2024.pdf` | Karatza E et al., Serum bile acid change correlates with…, Liver international : offic… (2024) | pd | 4 | [10.1111/liv.15982](https://doi.org/10.1111/liv.15982) | [38780109](https://www.ncbi.nlm.nih.gov/pubmed/38780109) | metadata signals extractable PD data (pharmacodynamicmodel) |

<sub>queue written 2026-09-11T04:15:56.782066+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Billo_2025 | irrelevant | 0 | 0 | The paper is an in-vitro transporter inhibition study (IC50 values) and does not report pharmacokinetic disposition parameters (CL, V, t1/2) for linerixibat. |
| popPK | Carreño_2024 | irrelevant | 2 | 0 | The paper describes a kinetic-pharmacodynamic (k-PD) analysis for dose selection but does not report quantitative population pharmacokinetic parameters (CL, V, Q, ka) for linerixibat in the provided evidence. |
| popPK | Carreño_2025 | irrelevant | 2 | 0 | The study models the pharmacodynamics of C4 (a biomarker) and diarrhea bother, not the pharmacokinetic disposition parameters (CL, V, ka) of linerixibat itself. |
| popPK | Karatza_2024 | irrelevant | 0 | 0 | The provided evidence contains only the title of a clinical study focusing on pruritus and bile acid changes, with no pharmacokinetic parameters or numeric values for linerixibat. |
| popPK | Levy_2023 | irrelevant | 0 | 0 | The paper is a Phase 2b clinical efficacy trial for pruritus and does not report any pharmacokinetic parameters or disposition data for linerixibat. |
| popPK | Tanaka_2023 | irrelevant | 0 | 0 | The paper is a clinical efficacy and safety analysis (Phase IIb) reporting itch scores and adverse events, with no pharmacokinetic parameters or disposition data for linerixibat. |
| PD | Tanaka_2023 | not_relevant | 3 | 2 | The paper reports clinical dose-response outcomes (itch score reduction) and mentions PD biomarkers qualitatively, but does not provide numeric PD parameters (e.g., Emax, EC50) or concentration-effect curves. |
| popPK | Zamek-Gliszczynski_2021 | relevant | 10 | 0 | The title confirms a PK study of linerixibat, but the provided evidence contains only the title and no numeric parameter values. |
| PGx | Zamek-Gliszczynski_2021 | not_relevant | 0 | 0 | The study characterizes the PK of linerixibat in healthy volunteers but does not report any pharmacogenomic effects or genotype-stratified data. |
| popPK | Zhou_2026 | irrelevant | 0 | 0 | Linerixibat is used only as an ASBT inhibitor to probe the mechanism of andrographolide absorption, not as the subject drug for PK parameter estimation. |
| popPK | unknown_2025 | irrelevant | 0 | 0 | The paper focuses on pharmacodynamic biomarkers and mediators of pruritus, not pharmacokinetic disposition parameters. |
| PD | unknown_2025 | not_relevant | 0 | 0 | The provided text is only the title of the paper and does not contain the full text, data, or numeric PD parameters required to assess the exposure-response relationship. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_linerixibat`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
