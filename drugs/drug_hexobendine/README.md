# hexobendine

- **generic name:** hexobendine
- **ATC codes:** `C01DX06`
- **DrugBank:** [DB13265](https://go.drugbank.com/drugs/DB13265)
- **groups:** approved

## About

**Description.** Hexobendine is a medication used to cause vasodilation, to treat several conditions including angina pectoris. It has not been approved in the United States or the United Kingdom, but has been used widely in Austria and Germany [T478].

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-09 22:20 | 7:04 | 0/1/0 | 0/0/0 | 0/0/0 | 46,849/6,893 | ollama / qwen3.8:27b-mtp-q8_0 | 4 | 4/0 | 4/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Kolassa_1975](drugs/drug_hexobendine/Hexobendine_Kolassa1975_reference.md) | Kolassa (1975) | — |

## Coverage

- **PubMed hits:** 32 matched, 29 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kolassa_1975.pdf` | Kolassa N et al., [Studies on the pharmacokinetics of hex…, Arzneimittel-Forschung (1975) | popPK | 8 | not captured | [1242664](https://pubmed.ncbi.nlm.nih.gov/1242664) | The study reports quantitative pharmacokinetic parameters for hexobendine in rats, including specific half-lives (7 min distribution, 45 min elimination) and serum concentrations, which are present in the text. |
| `Wiemer_1982.pdf` | Wiemer G et al., Energy-dependent extrusion of cyclic 3'…, Naunyn-Schmiedeberg's archi… (1982) | pd | 5 | [10.1007/BF00498507](https://doi.org/10.1007/BF00498507) | [6300698](https://www.ncbi.nlm.nih.gov/pubmed/6300698) | metadata signals extractable PD data (EC50) |
| `Bender_1986.pdf` | Bender AS et al., Similarities of adenosine uptake system…, Neurochemical research (1986) | pd | 4 | [10.1007/BF00965770](https://doi.org/10.1007/BF00965770) | [2891057](https://www.ncbi.nlm.nih.gov/pubmed/2891057) | metadata signals extractable PD data (IC50) |
| `Striessnig_1985.pdf` | Striessnig J et al., Human red-blood-cell Ca2+-antagonist bi…, European journal of biochem… (1985) | pd | 4 | [10.1111/j.1432-1033.1985.tb08989.x](https://doi.org/10.1111/j.1432-1033.1985.tb08989.x) | [2990927](https://www.ncbi.nlm.nih.gov/pubmed/2990927) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-09-09T22:20:28.389437+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bender_1981 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of adenosine uptake in rat synaptosomes where hexobendine is used only as an inhibitor, not as the subject drug for PK parameter estimation. |
| PD | Bender_1986 | not_relevant | 0 | 0 | The paper discusses adenosine uptake systems in astrocytes and neurons and does not mention hexobendine or report any pharmacodynamic or exposure-response data for it. |
| popPK | Bester_1971 | irrelevant | 2 | 0 | The study focuses on the functional and metabolic effects of hexobendine on isolated rat hearts rather than reporting quantitative pharmacokinetic disposition parameters. |
| popPK | Deckert_1987 | irrelevant | 0 | 0 | The study is an in-vitro receptor binding/autoradiography study using hexobendine as a competitive inhibitor, not a pharmacokinetic study reporting disposition parameters. |
| PD | Deckert_1987 | not_relevant | 3 | 4 | The paper reports in vitro binding affinity (Ki) for hexobendine, which is a pharmacological parameter but not a pharmacodynamic (exposure-response) relationship in the context of drug effect modeling. |
| popPK | Hayashi_1978 | irrelevant | 0 | 0 | The paper is a pharmacological study on cholinergic nerves in guinea pig ileum where hexobendine is used as a tool compound, not a PK study. |
| popPK | IJzerman_1990 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on nucleoside transporter binding affinity and ionization, not a pharmacokinetic study reporting disposition parameters for hexobendine. |
| popPK | Iwata_1978 | irrelevant | 0 | 0 | The paper is a mechanistic study investigating the effects of hexobendine on adenosine metabolism and myocardial metabolites, not a pharmacokinetic study reporting disposition parameters. |
| PD | Jiménez_2000 | not_relevant | 1 | 1 | The paper reports a qualitative ranking of inhibitors (including hexobendine) for adenosine uptake but provides no numeric IC50 or dose-response parameters for hexobendine. |
| popPK | Kolassa_1975_2 | irrelevant | 2 | 0 | The paper discusses methodological shortcomings in radioactive tracer studies and reports recovery percentages, but does not provide quantitative pharmacokinetic parameters (CL, V, t1/2) for hexobendine. |
| popPK | Kolassa_1977 | irrelevant | 0 | 0 | The evidence provided contains only the title of the paper, with no quantitative pharmacokinetic parameters or data for hexobendine. |
| popPK | Kraupp_1969 | irrelevant | 0 | 0 | The paper focuses on cerebral blood flow and metabolism (mechanism of action) rather than pharmacokinetic disposition parameters, and no numeric PK values are provided in the evidence. |
| popPK | Królikowska-Prasał_1979 | irrelevant | 0 | 0 | The study is a histochemical investigation of enzyme activity in rat aortas and does not report any pharmacokinetic parameters for hexobendine. |
| popPK | Kukovetz_1976 | irrelevant | 0 | 0 | The study focuses on the pharmacological properties of fendiline in isolated tissues, with hexobendine mentioned only as a comparator agent without any pharmacokinetic parameter reporting. |
| popPK | Maj_1980 | irrelevant | 0 | 0 | The paper focuses on the pharmacological properties of Craviten, with hexobendine mentioned only as a comparator agent without any pharmacokinetic parameter reporting. |
| popPK | McInnes_1969 | irrelevant | 0 | 0 | The paper is a pharmacodynamic study focusing on myocardial blood flow, contractility, and metabolic heat production, and does not report any pharmacokinetic parameters (e.g., clearance, volume, half-life) for hexobendine. |
| popPK | Meghji_1985 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on adenosine transport in neonatal rat heart cells, using hexobendine as a transport inhibitor rather than reporting its pharmacokinetic disposition parameters. |
| popPK | Meghji_1988 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of adenosine transport in chick heart cells where hexobendine is used only as a transport inhibitor, not as the subject of a pharmacokinetic analysis. |
| popPK | Meyer_1970 | irrelevant | 0 | 0 | The paper focuses on cerebral blood flow and metabolism, not pharmacokinetic disposition parameters for hexobendine. |
| popPK | Meyer_1971 | irrelevant | 0 | 0 | The paper focuses on cerebral hemodynamics and metabolism rather than pharmacokinetic disposition parameters. |
| popPK | Rothaul_1981 | irrelevant | 0 | 0 | The study is a mechanistic pharmacological investigation using hexobendine as a probe to identify a coronary vasodilator metabolite, and it does not report any pharmacokinetic parameters for hexobendine. |
| PD | Schmitt_1967 | not_relevant | 0 | 0 | The provided text is only a title and lacks the full content required to verify the presence of numeric PD parameters or an extractable exposure-response relationship. |
| popPK | Shibata_1977 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on isolated rabbit tissues investigating calcium influx inhibition, not a pharmacokinetic study reporting disposition parameters. |
| PD | Striessnig_1985 | not_relevant | 0 | 0 | The paper focuses on the characterization of Ca2+-antagonist binding sites on red blood cells and does not report pharmacodynamic or exposure-response relationships for hexobendine. |
| popPK | Wiemer_1982 | irrelevant | 0 | 0 | The paper concerns the extrusion of cAMP in rat erythrocytes and does not involve hexobendine or its pharmacokinetics. |
| PD | Wiemer_1982 | not_relevant | 0 | 0 | The paper focuses on the mechanism of cAMP extrusion in rat erythrocytes and does not report any pharmacodynamic or exposure-response data for hexobendine. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_hexobendine`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
