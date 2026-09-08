# dalteparin

- **generic name:** dalteparin
- **ATC codes:** `B01AB04`
- **DrugBank:** [DB06779](https://go.drugbank.com/drugs/DB06779)
- **groups:** approved, investigational

## About

**Description.** Dalteparin, a low molecular weight heparin (LMWH) prepared by nitrous acid degradation of unfractionated heparin of porcine intestinal mucosa origin, is an anticoagulant. It is composed of strongly acidic sulphated polysaccharide chains with an average molecular weight of 5000 and about 90% of the material within the range of 2000-9000. LMWHs have a more predictable response, a greater bioavailability, and a longer anti-Xa half life than unfractionated heparin. Dalteparin can also be safely used in most pregnant women. Low molecular weight heparins are less effective at inactivating factor IIa due to their shorter length compared to unfractionated heparin.

**Indication.** Dalteparin is used as a prophylaxis for deep-vein thrombosis and pulmonary embolisms in patients undergoing general surgery (e.g., abdominal, gynecologic, urologic), and in patients with acute medical conditions (e.g. cancer, bed rest, heart failure, severe lung disease). It is also used in patients who have severely restricted mobility, which poses a risk for thromboembolic complications. 

Dalteparin is also used concomitantly with aspirin and/or other therapy (e.g., nitrates, β-adrenergic blockers, clopidogrel, platelet glycoprotein [GP] IIb/IIIa-receptor inhibitors) to reduce the risk of acute cardiac ischemic events. The patients who undergo this treatment combination have unstable angina or non-ST-segment elevation/non-Q-wave myocardial infarction (i.e., non-ST-segment elevation acute coronary syndromes).

It is also used in the prevention of clotting during hemodialysis and hemofiltration in connection with acute renal failure or chronic renal insufficiency.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-05 18:03 | 39:18 | 0/2/0 | 0/0/0 | 0/0/0 | 58,824/9,348 | ollama / qwen3.8:27b-mtp-q8_0 | 6 | 0/3 | 3/3 | 1 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Damle_2021](drugs/drug_dalteparin/Dalteparin_Damle2021_reference.md) | Damle B et al., Population Pharmacokinetic Analysis of…, Journal of clinical pharmac… (2021) | [10.1002/jcph.1716](https://doi.org/10.1002/jcph.1716) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [van_2022](drugs/drug_dalteparin/Dalteparin_van2022_reference.md) | van der Heijden CDCC et al., Effects of dalteparin on anti-Xa activi…, British journal of clinical… (2022) | [10.1111/bcp.15208](https://doi.org/10.1111/bcp.15208) |

## Coverage

- **PubMed hits:** 14 matched, 14 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Abe_2013.pdf` | Abe S et al., Low-molecular-weight heparin pharmacoki…, International journal of cl… (2013) | popPK | 10 | [10.5414/CP201858](https://doi.org/10.5414/CP201858) | [23587152](https://pubmed.ncbi.nlm.nih.gov/23587152) | The paper describes a population PK model for dalteparin, but the specific numeric parameter values (CL, V, Q, ka) are not present in the provided abstract text. |
| `Yu_2018.pdf` | Yu L et al., Pharmacodynamic properties and bioequiv…, Xenobiotica; the fate of fo… (2018) | pd | 4 | [10.1080/00498254.2017.1316021](https://doi.org/10.1080/00498254.2017.1316021) | [28375032](https://www.ncbi.nlm.nih.gov/pubmed/28375032) | metadata signals extractable PD data (Emax) |
| `Risselada_2013.pdf` | Risselada AJ et al., [Pulmonary embolism due to interaction…, Nederlands tijdschrift voor… (2013) | pgx | 7 | not captured | [24382036](https://www.ncbi.nlm.nih.gov/pubmed/24382036) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-09-06T16:28:41.133841+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abe_2013 | relevant | 10 | 2 | The paper describes a population PK model for dalteparin, but the specific numeric parameter values (CL, V, Q, ka) are not present in the provided abstract text. |
| popPK | Bergqvist_2004 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of melagatran/ximelagatran, with dalteparin serving only as a comparator agent for which no PK parameters are reported. |
| PGx | Mälarstig_2006 | not_relevant | 2 | 5 | The paper reports a genetic association with a biomarker (sCD40L) and its prognostic value, but does not report a pharmacogenomic effect on the pharmacokinetics or pharmacodynamics of dalteparin itself. |
| PGx | Mälarstig_2008 | not_relevant | 0 | 0 | The paper investigates the association between IL-10 gene variants and IL-10 plasma levels/outcomes in ACS patients, not the pharmacokinetics or pharmacodynamics of dalteparin. |
| popPK | Nylander_2003 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of platelet activation and does not report pharmacokinetic parameters for dalteparin. |
| PGx | Risselada_2013 | not_relevant | 0 | 0 | The paper describes a drug-drug interaction (carbamazepine and rivaroxaban) and does not report any pharmacogenomic effects on dalteparin. |
| popPK | Schoemaker_1996 | relevant | 9 | 0 | The paper describes a population PK study for dalteparin, but the provided evidence contains only the abstract/methodology description without any numeric parameter values. |
| popPK | Schwarzwald_2002 | relevant | 8 | 0 | The paper is a pharmacokinetic study of dalteparin in horses reporting a 1-compartment model, but the specific numeric parameter values (CL, V, t1/2) are not present in the provided evidence text. |
| PGx | Verso_2021 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions with anticancer agents, not pharmacogenomic effects of gene variants on dalteparin PK/PD. |
| popPK | Yu_2018 | irrelevant | 2 | 2 | The study reports pharmacodynamic parameters (Anti-Xa/IIa activity) and bioequivalence ratios, not pharmacokinetic disposition parameters (CL, V, Q) for dalteparin itself. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_dalteparin`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
