# alvimopan

- **generic name:** alvimopan
- **ATC codes:** `A06AH02`
- **DrugBank:** [DB06274](https://go.drugbank.com/drugs/DB06274)
- **groups:** approved, investigational

## About

**Description.** Alvimopan is a peripherally acting μ opioid antagonist. It is used to avoid postoperative ileus following small or large bowel resection and accelerates the gastrointestinal recovery period.

**Indication.** Used to accelerate the time to upper and lower gastrointestinal recovery following partial large or small bowel resection surgery with primary anastomosis. Also investigated for use in the treatment of pain (acute or chronic).

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-11 06:34 | 4:01 | 0/0/0 | 0/0/0 | 0/0/0 | 28,412/1,427 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/0 | 1/0 | 0 |

## popPK records

_not available_

## Coverage

- **PubMed hits:** 10 matched, 14 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Foss_2008.pdf` | Foss JF et al., Pharmacokinetics of alvimopan and its m…, Clinical pharmacology and t… (2008) | popPK | 10 | [10.1038/sj.clpt.6100292](https://doi.org/10.1038/sj.clpt.6100292) | [17653140](https://pubmed.ncbi.nlm.nih.gov/17653140) | The paper describes a population PK model for alvimopan but the provided evidence contains only qualitative descriptions and relative percentage changes, lacking the specific numeric parameter values (CL, V, etc.). |

<sub>queue written 2026-09-11T06:34:30.332077+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Armstrong_2013 | irrelevant | 0 | 0 | The study is a preclinical pharmacodynamic comparison where alvimopan serves only as a comparator agent, with no pharmacokinetic parameters reported. |
| PD | Armstrong_2013 | not_relevant | 1 | 0 | The text is an abstract describing qualitative efficacy comparisons in preclinical models without reporting specific numeric PD parameters (e.g., ED50, IC50) or concentration-effect curves for alvimopan. |
| popPK | Bream-Rouwenhorst_2009 | irrelevant | 1 | 0 | The paper is a clinical review of efficacy and safety that does not report original quantitative pharmacokinetic parameter values (e.g., CL, V, ka) for alvimopan. |
| PD | Bream-Rouwenhorst_2009 | not_relevant | 1 | 0 | The text is a clinical review summarizing efficacy and safety outcomes without reporting specific pharmacokinetic data, concentration-effect curves, or numeric pharmacodynamic parameters (e.g., Emax, EC50). |
| popPK | Foss_2008 | relevant | 10 | 0 | The paper describes a population PK model for alvimopan but the provided evidence contains only qualitative descriptions and relative percentage changes, lacking the specific numeric parameter values (CL, V, etc.). |
| popPK | Holzer_2008 | irrelevant | 0 | 0 | The paper is a narrative review discussing the mechanism and clinical development of alvimopan, containing no original pharmacokinetic data or quantitative disposition parameters. |
| PD | Holzer_2008 | not_relevant | 1 | 0 | The text is a qualitative review of the mechanism and clinical development of alvimopan, containing no numeric PD parameters, concentration-effect data, or dose-response curves. |
| popPK | Holzer_2010 | irrelevant | 0 | 0 | The paper is a narrative review of opioid antagonists and does not report original quantitative pharmacokinetic parameters for alvimopan. |
| popPK | Kraft_2008 | irrelevant | 0 | 0 | The paper is a review of methylnaltrexone for postoperative ileus and mentions alvimopan only as an approved comparator, providing no pharmacokinetic parameters for alvimopan. |
| PD | Kraft_2008 | not_relevant | 0 | 0 | The text is a review of methylnaltrexone and only mentions alvimopan's approval without providing any pharmacodynamic data, exposure-response analysis, or numeric PD parameters. |
| popPK | Leslie_2005 | irrelevant | 2 | 0 | The paper is a narrative review of alvimopan's pharmacology and clinical efficacy, and the provided evidence contains no quantitative pharmacokinetic parameter values (e.g., CL, V, ka). |
| PD | Leslie_2005 | not_relevant | 1 | 0 | The text is a review article summarizing clinical efficacy and safety without providing specific numeric pharmacodynamic parameters (e.g., Emax, EC50) or exposure-response data. |
| popPK | Neary_2005 | irrelevant | 1 | 0 | The paper is a review discussing clinical efficacy and receptor affinity (Ki) but does not report quantitative pharmacokinetic disposition parameters (CL, V, ka, etc.) for alvimopan. |
| popPK | Power_2011 | irrelevant | 0 | 0 | The paper is a general review of analgesics that mentions alvimopan only as a clinical example without providing any pharmacokinetic data or quantitative disposition parameters. |
| PD | Power_2011 | not_relevant | 1 | 0 | The text is a general review article that mentions alvimopan qualitatively but provides no numeric PD parameters, concentration-effect data, or dose-response analysis. |
| popPK | Tan_2007 | irrelevant | 0 | 0 | The paper is a clinical efficacy meta-analysis reporting hazard ratios for gastrointestinal endpoints, not a pharmacokinetic study with quantitative disposition parameters. |
| popPK | Webster_2008 | irrelevant | 0 | 0 | The paper is a clinical efficacy study for opioid-induced bowel dysfunction and does not report any pharmacokinetic parameters for alvimopan. |
| popPK | Wu_2025 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of tramadol and its metabolite in breast cancer cells, where alvimopan is used only as a receptor antagonist probe, and no pharmacokinetic parameters are reported. |
| PD | Wu_2025 | not_relevant | 0 | 0 | The paper reports IC50 values for tramadol and O-desmethyltramadol, but alvimopan is used only as a qualitative antagonist to demonstrate a non-opioid mechanism; no exposure-response or dose-response relationship for alvimopan itself is reported. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_alvimopan`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
