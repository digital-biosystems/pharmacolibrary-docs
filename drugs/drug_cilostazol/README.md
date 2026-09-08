# cilostazol

- **generic name:** cilostazol
- **ATC codes:** `B01AC23`
- **DrugBank:** [DB01166](https://go.drugbank.com/drugs/DB01166)
- **groups:** approved, investigational

## About

**Description.** Cilostazol is a quinolinone derivative and antiplatelet agent with vasodilating properties that has been used in the symptomatic treatment of intermittent claudication in patients with peripheral ischaemia. It is marketed under the brand name Pletal by Otsuka Pharmaceutical Co.. Cilostazol works by inhibiting both primary and secondary aggregation and reducing calcium-induced contractions.

**Indication.** Indicated for the alleviation of symptoms of intermittent claudication (pain in the legs that occurs with walking and disappears with rest).

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-05 15:33 | 2:09 | 0/2/0 | 0/0/0 | 0/0/0 | 70,761/5,000 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 0/2 | 2/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Lee_2014](drugs/drug_cilostazol/Cilostazol_Lee2014_reference.md) | Lee D et al., Population pharmacokinetic analysis of…, Therapeutic drug monitoring (2014) | [10.1097/FTD.0000000000000077](https://doi.org/10.1097/FTD.0000000000000077) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Yoo_2010](drugs/drug_cilostazol/Cilostazol_Yoo2010_reference.md) | Yoo HD et al., Population pharmacokinetic analysis of…, British journal of clinical… (2010) | [10.1111/j.1365-2125.2009.03558.x](https://doi.org/10.1111/j.1365-2125.2009.03558.x) |

## Coverage

- **PubMed hits:** 19 matched, 18 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Cui_2020.pdf` | Cui A et al., Pharmacokinetic modeling analysis of ci…, Xenobiotica; the fate of fo… (2020) | popPK | 10 | [10.1080/00498254.2019.1629042](https://doi.org/10.1080/00498254.2019.1629042) | [31181990](https://pubmed.ncbi.nlm.nih.gov/31181990) | The paper describes a population PK study for cilostazol, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |
| `Lee_2014.pdf` | Lee D et al., Population pharmacokinetic analysis of…, Therapeutic drug monitoring (2014) | popPK | 10 | [10.1097/FTD.0000000000000077](https://doi.org/10.1097/FTD.0000000000000077) | [24739664](https://pubmed.ncbi.nlm.nih.gov/24739664) | The paper is a population PK study of cilostazol and provides specific numeric values for absorption rate constants and relative changes in clearance in the text. |
| `Yoo_2010.pdf` | Yoo HD et al., Population pharmacokinetic analysis of…, British journal of clinical… (2010) | popPK | 10 | [10.1111/j.1365-2125.2009.03558.x](https://doi.org/10.1111/j.1365-2125.2009.03558.x) | [20078610](https://pubmed.ncbi.nlm.nih.gov/20078610) | The paper is a population pharmacokinetic study of cilostazol that explicitly reports numeric values for CL/F, V1, V2, Q, and ka in the text. |
| `Woo_2002.pdf` | Woo SK et al., Pharmacokinetic and pharmacodynamic mod…, Clinical pharmacology and t… (2002) | popPK | 8 | [10.1067/mcp.2002.122474](https://doi.org/10.1067/mcp.2002.122474) | [11956507](https://pubmed.ncbi.nlm.nih.gov/11956507) | The study is a PK/PD modeling study for cilostazol, but the evidence only provides summary statistics (Cmax, Tmax) and lacks specific quantitative disposition parameters like clearance, volume, or rate constants. |

<sub>queue written 2026-09-06T16:09:13.087978+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cui_2020 | relevant | 10 | 0 | The paper describes a population PK study for cilostazol, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |
| popPK | Jung_2018 | irrelevant | 2 | 0 | The study reports population pharmacodynamic (PD) parameters (Kout, Emax, EC50) rather than pharmacokinetic (PK) parameters (CL, V, ka), and the PK model values are not provided in the evidence. |
| popPK | Woo_2002 | relevant | 8 | 2 | The study is a PK/PD modeling study for cilostazol, but the evidence only provides summary statistics (Cmax, Tmax) and lacks specific quantitative disposition parameters like clearance, volume, or rate constants. |
| popPK | Yoon_2022 | irrelevant | 0 | 0 | The paper is a neuroimaging study on cerebral microbleeds where cilostazol is only a comparator antiplatelet agent, and no pharmacokinetic parameters are reported. |
| popPK | Yoon_2023 | irrelevant | 0 | 0 | The study investigates the association between ACE polymorphisms and cerebral microbleed progression, using cilostazol only as a comparator drug in the underlying trial, and reports no pharmacokinetic parameters. |
| popPK | Yu_2016 | irrelevant | 0 | 0 | The paper describes a clinical trial design for cognitive outcomes in stroke patients and does not report any pharmacokinetic parameters for cilostazol. |
| popPK | Yun_2014 | irrelevant | 2 | 0 | The paper describes a PK/PD model for cilostazol but the provided evidence contains no quantitative PK parameter values (CL, V, etc.), only a description of the modeling approach. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_cilostazol`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
