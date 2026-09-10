# bismuth subnitrate

- **generic name:** bismuth subnitrate
- **ATC codes:** `A02BX12`
- **DrugBank:** [DB13209](https://go.drugbank.com/drugs/DB13209)
- **groups:** approved, withdrawn

## About

**Description.** Bismuth subnitrate, also referred to as bismuth oxynitrate or bismuthyl nitrate, is a highly water-soluble crystalline compound that has been used as a treatment for duodenal ulcers and anti-diarrheic agent [A33012]. The use of bismuth substrate as an active ingredient in over-the-counter antacids is approved by the FDA.

**Indication.** Indicated for over-the-counter use as an antacid.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-10 14:35 | 2:34 | 0/0/0 | 0/0/0 | 0/0/0 | 12,936/1,096 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/0 | 0/1 | 0 |

## popPK records

_not available_

## Coverage

- **PubMed hits:** 6 matched, 10 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Morikawa_1990.pdf` | Morikawa T et al., [Alleviation of cisplatin toxicity by h…, Nihon Gan Chiryo Gakkai shi (1990) | popPK | 8 | not captured | [2398299](https://pubmed.ncbi.nlm.nih.gov/2398299) | The study reports pharmacokinetics of bismuth subnitrate in humans, but the provided evidence contains only qualitative descriptions without specific numeric parameter values. |

<sub>queue written 2026-09-10T14:35:24.930885+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chen_1987 | irrelevant | 0 | 0 | The study focuses on the clinical efficacy of bismuth subnitrate in reducing cisplatin toxicity and does not report any pharmacokinetic parameters for bismuth subnitrate. |
| popPK | Hadžiabdić_2015 | irrelevant | 0 | 0 | The paper focuses on the physical stability and formulation of bismuth subnitrate suspensions, not pharmacokinetic parameters. |
| PD | Hadžiabdić_2015 | not_relevant | 0 | 0 | The paper discusses the physical stability and formulation of bismuth subnitrate suspensions (sedimentation, flocculation) and contains no pharmacodynamic, exposure-response, or dose-response data. |
| popPK | Heckers_1994 | irrelevant | 2 | 0 | The study reports only peak concentrations and AUC values for bismuth subnitrate, lacking the specific quantitative disposition parameters (CL, V, ka, half-life) required for population pharmacokinetic modeling. |
| PD | Heckers_1994 | not_relevant | 0 | 0 | The paper reports PK parameters (serum concentrations, urinary excretion) and correlations between exposure metrics, but does not report any pharmacodynamic effect or dose-response relationship. |
| popPK | Jaggi_2005 | irrelevant | 0 | 0 | The paper studies the biodistribution of the radioactive isotope Bismuth-213 (213Bi) in the context of alpha-particle immunotherapy, not the pharmacokinetics of the drug bismuth subnitrate, which is only mentioned as a competitive antagonist. |
| popPK | Morikawa_1989 | irrelevant | 2 | 0 | The study focuses on cisplatin pharmacokinetics, and while bismuth subnitrate is co-administered, no quantitative PK parameters (CL, V, ka, etc.) for bismuth are reported in the evidence. |
| popPK | Morikawa_1990 | relevant | 8 | 0 | The study reports pharmacokinetics of bismuth subnitrate in humans, but the provided evidence contains only qualitative descriptions without specific numeric parameter values. |
| PGx | Nakajima_2012 | not_relevant | 0 | 0 | The paper reports a clinical case of H. pylori eradication using bismuth subnitrate, but it does not report any pharmacokinetic or pharmacodynamic parameters of bismuth subnitrate, nor does it analyze how genetic variants affect these parameters. |
| popPK | Slikkerveer_1989 | irrelevant | 2 | 0 | The paper is a review discussing general bismuth pharmacokinetics and toxicity without reporting specific quantitative compartmental parameters (CL, V, Q, ka) for bismuth subnitrate. |
| popPK | Takahashi_1989 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of cisplatin, with bismuth subnitrate used only as a co-administered agent to alleviate renal impairment, and no PK parameters for bismuth subnitrate are reported. |
| popPK | unknown_1991 | irrelevant | 0 | 0 | The provided evidence is only a conference header with no study data, parameters, or mention of bismuth_subnitrate. |
| PD | unknown_1991 | not_relevant | 0 | 0 | The provided text is only a citation header for a conference abstract collection and contains no scientific content, data, or PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_bismuth_subnitrate`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
