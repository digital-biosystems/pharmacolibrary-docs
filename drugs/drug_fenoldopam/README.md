# fenoldopam

- **generic name:** fenoldopam
- **ATC codes:** `C01CA19`
- **DrugBank:** [DB00800](https://go.drugbank.com/drugs/DB00800)
- **groups:** approved

## About

**Description.** A dopamine D1 receptor agonist that is used as an antihypertensive agent. It lowers blood pressure through arteriolar vasodilation.

**Indication.** For the in-hospital, short-term (up to 48 hours) management of severe hypertension when rapid, but quickly reversible, emergency reduction of blood pressure is clinically indicated, including malignant hypertension with deteriorating end-organ function.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-09 19:47 | 18:36 | 0/1/0 | 0/0/0 | 0/0/0 | 22,301/1,582 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Ziemniak_1989](drugs/drug_fenoldopam/Fenoldopam_Ziemniak1989_reference.md) | Ziemniak JA et al., A retrospective analysis of fenoldopam…, Pharmaceutical research (1989) | [10.1023/a:1015990506743](https://doi.org/10.1023/a:1015990506743) |

## Coverage

- **PubMed hits:** 18 matched, 14 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ziemniak_1989.pdf` | Ziemniak JA et al., A retrospective analysis of fenoldopam…, Pharmaceutical research (1989) | popPK | 9 | [10.1023/a:1015990506743](https://doi.org/10.1023/a:1015990506743) | [2573048](https://pubmed.ncbi.nlm.nih.gov/2573048) | The paper reports quantitative population pharmacokinetic parameters for fenoldopam, including specific renal clearance values and saturation model constants (Emax, AUC50), which are present in the text. |
| `Ziemniak_1988.pdf` | Ziemniak JA et al., Continuous intragastric delivery of fen…, British journal of clinical… (1988) | pd | 5 | [10.1111/j.1365-2125.1988.tb03315.x](https://doi.org/10.1111/j.1365-2125.1988.tb03315.x) | [2896014](https://www.ncbi.nlm.nih.gov/pubmed/2896014) | metadata signals extractable PD data (Emax) |
| `Zeng_2004.pdf` | Zeng C et al., Aberrant D1 and D3 dopamine receptor tr…, Hypertension (Dallas, Tex.… (2004) | pd | 4 | [10.1161/01.HYP.0000114601.30306.bf](https://doi.org/10.1161/01.HYP.0000114601.30306.bf) | [14732731](https://www.ncbi.nlm.nih.gov/pubmed/14732731) | metadata signals extractable PD data (Emax) |

<sub>queue written 2026-09-09T19:47:01.867996+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Baxter_1991 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of vascular reactivity in horses, not a pharmacokinetic study, and reports no disposition parameters for fenoldopam. |
| popPK | Grenader_1991 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of fenoldopam's receptor activity in cell lines and does not report pharmacokinetic parameters. |
| popPK | Grenader_1992 | irrelevant | 0 | 0 | The paper is an in-vitro pharmacological study of receptor agonism (EC50/intrinsic activity) and does not report pharmacokinetic disposition parameters for fenoldopam. |
| popPK | Gretler_1992 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of receptor activity in canine tracheal smooth muscle and does not report any pharmacokinetic parameters for fenoldopam. |
| popPK | Permeisari_2022 | irrelevant | 1 | 0 | The paper is a review of pharmacological strategies for AKI prevention that discusses fenoldopam's mechanism but does not report any original quantitative pharmacokinetic parameters (CL, V, etc.) for the drug. |
| PD | Permeisari_2022 | not_relevant | 1 | 0 | The paper is a narrative review discussing renal protective agents including fenoldopam but does not present original data, specific numeric PD parameters, or extractable concentration-effect curves. |
| popPK | Rump_1995 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of neurotransmission in human atria, not a pharmacokinetic study, and reports no disposition parameters for fenoldopam. |
| PD | Rump_1995 | not_relevant | 2 | 1 | The study is an in vitro electrophysiology/pharmacology experiment on human atrial tissue, not a clinical PK/PD study; fenoldopam is only tested at discrete concentrations without a fitted concentration-response curve or derivable PD parameters like Emax/EC50. |
| PGx | Shi_2025 | not_relevant | 0 | 0 | The paper discusses fenoldopam only as a drug with a high pathway-pairing score for disease targets, without reporting any specific pharmacogenomic effects on its PK or PD parameters. |
| popPK | Shulman_1996 | irrelevant | 0 | 0 | The study is a mechanistic in-vitro investigation of dopamine's effect on photoreceptor Na+,K+-ATPase, using fenoldopam only as a D1 agonist probe, and reports no pharmacokinetic parameters. |
| popPK | Stephan_1995 | irrelevant | 0 | 0 | The study is a mechanistic vascular reactivity experiment where fenoldopam is used only as a comparator agent to test endothelium-independent relaxation, with no pharmacokinetic parameters reported. |
| PGx | Tanaka_2004 | not_relevant | 0 | 0 | The paper reports in vitro pharmacodynamic effects of fenoldopam on human arteries but does not investigate any gene variants, genotypes, or pharmacogenomic factors. |
| popPK | Zeng_2004 | irrelevant | 0 | 0 | The paper title indicates a mechanistic study on dopamine receptor transregulation in hypertension, with no evidence of pharmacokinetic parameter reporting for fenoldopam. |
| PD | Zeng_2004 | not_relevant | 0 | 0 | The paper discusses dopamine receptor transregulation in hypertension and does not report any pharmacokinetic or pharmacodynamic data, exposure-response relationships, or numeric PD parameters for fenoldopam. |
| popPK | Ziemniak_1988 | irrelevant | 0 | 0 | The provided evidence contains only the title of the paper, with no quantitative pharmacokinetic parameters or data available for extraction. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_fenoldopam`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
