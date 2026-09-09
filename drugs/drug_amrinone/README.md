# amrinone

- **generic name:** amrinone
- **ATC codes:** `C01CE01`
- **DrugBank:** [DB01427](https://go.drugbank.com/drugs/DB01427)
- **groups:** approved, withdrawn

## About

**Description.** Amrinone (or inamrinone) is a type 3 pyridine phosphodiesterase inhibitor. It is used in the treatment of congestive heart failure.

**Indication.** Used in the treatment of congestive heart failure.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-09 12:40 | 6:05 | 0/1/0 | 1/1/0 | 0/0/0 | 93,026/6,588 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 3/0 | 2/1 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Park_1983](drugs/drug_amrinone/Amrinone_Park1983_reference.md) | Park GB et al., Oral bioavailability and intravenous ph…, Journal of pharmaceutical s… (1983) | [10.1002/jps.2600720726](https://doi.org/10.1002/jps.2600720726) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Shahid_1989](drugs/drug_amrinone/pd_Shahid_1989_cAMP.md) | Shahid M et al., Chronotropic and inotropic actions of a…, British journal of pharmaco… (1989) | [10.1111/j.1476-5381.1989.tb16894.x](https://doi.org/10.1111/j.1476-5381.1989.tb16894.x) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Shahid_1989](drugs/drug_amrinone/pd_Shahid_1989_cGMP.md) | Shahid M et al., Chronotropic and inotropic actions of a…, British journal of pharmaco… (1989) | [10.1111/j.1476-5381.1989.tb16894.x](https://doi.org/10.1111/j.1476-5381.1989.tb16894.x) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Shahid_1989](drugs/drug_amrinone/pd_Shahid_1989_unknown.md) | Shahid M et al., Chronotropic and inotropic actions of a…, British journal of pharmaco… (1989) | [10.1111/j.1476-5381.1989.tb16894.x](https://doi.org/10.1111/j.1476-5381.1989.tb16894.x) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Rump_1994](drugs/drug_amrinone/pd_Rump_1994_coronary_flow.md) | Rump AF et al., A quantitative comparison of functional…, British journal of pharmaco… (1994) | [10.1111/j.1476-5381.1994.tb13143.x](https://doi.org/10.1111/j.1476-5381.1994.tb13143.x) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Rump_1994](drugs/drug_amrinone/pd_Rump_1994_heart_rate.md) | Rump AF et al., A quantitative comparison of functional…, British journal of pharmaco… (1994) | [10.1111/j.1476-5381.1994.tb13143.x](https://doi.org/10.1111/j.1476-5381.1994.tb13143.x) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Rump_1994](drugs/drug_amrinone/pd_Rump_1994_ischaemic_area.md) | Rump AF et al., A quantitative comparison of functional…, British journal of pharmaco… (1994) | [10.1111/j.1476-5381.1994.tb13143.x](https://doi.org/10.1111/j.1476-5381.1994.tb13143.x) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Rump_1994](drugs/drug_amrinone/pd_Rump_1994_left_ventricular_pressure.md) | Rump AF et al., A quantitative comparison of functional…, British journal of pharmaco… (1994) | [10.1111/j.1476-5381.1994.tb13143.x](https://doi.org/10.1111/j.1476-5381.1994.tb13143.x) |

## Coverage

- **PubMed hits:** 25 matched, 16 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Park_1983.pdf` | Park GB et al., Oral bioavailability and intravenous ph…, Journal of pharmaceutical s… (1983) | popPK | 9 | [10.1002/jps.2600720726](https://doi.org/10.1002/jps.2600720726) | [6886991](https://pubmed.ncbi.nlm.nih.gov/6886991) | The study reports quantitative PK parameters for amrinone, including bioavailability, terminal elimination rate constant (beta), and half-life, derived from a two-compartment model. |
| `Hellinger_1995.pdf` | Hellinger A et al., Elimination of amrinone during continuo…, European journal of clinica… (1995) | popPK | 8 | [10.1007/BF00202173](https://doi.org/10.1007/BF00202173) | [7621849](https://pubmed.ncbi.nlm.nih.gov/7621849) | The study reports PK parameters for amrinone, but specific numeric values for clearance, volume, or half-life are not present in the provided evidence, only summary statistics like AUC reduction and sieving coefficient. |
| `Goto_1992.pdf` | Goto Y et al., Effects of amrinone and isoproterenol o…, The American journal of phy… (1992) | pd | 4 | [10.1152/ajpheart.1992.262.3.H719](https://doi.org/10.1152/ajpheart.1992.262.3.H719) | [1558181](https://www.ncbi.nlm.nih.gov/pubmed/1558181) | metadata signals extractable PD data (Emax) |
| `Harada_1996.pdf` | Harada K et al., Influence of age on venodilator effect…, European journal of clinica… (1996) | pd | 4 | [10.1007/s002280050066](https://doi.org/10.1007/s002280050066) | [8739809](https://www.ncbi.nlm.nih.gov/pubmed/8739809) | metadata signals extractable PD data (Emax) |
| `Hayes_1984.pdf` | Hayes JS et al., Molecular basis for the cardiovascular…, The Journal of pharmacology… (1984) | pd | 4 | not captured | [6086873](https://www.ncbi.nlm.nih.gov/pubmed/6086873) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-09-09T12:37:55.130763+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Bailey_1997 | not_relevant | 0 | 0 | The paper compares hemodynamic effects of amrinone and sodium nitroprusside in infants but does not report any pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| popPK | Brown_1984 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of inotropic effects on cat papillary muscles and does not report pharmacokinetic parameters. |
| popPK | Davidenko_1984 | irrelevant | 0 | 0 | The study focuses on the electrophysiologic effects of milrinone (an analogue) in canine tissue, not the pharmacokinetics of amrinone. |
| popPK | Davidenko_1985 | irrelevant | 0 | 0 | The study focuses on the electrophysiologic effects of milrinone (an analogue) on isolated myocardial fibers, not the pharmacokinetics of amrinone. |
| popPK | Edelson_1986 | irrelevant | 2 | 0 | The study focuses on milrinone as the subject drug, with amrinone serving only as a comparator for which no quantitative parameters are reported in the evidence. |
| popPK | Goto_1992 | irrelevant | 0 | 0 | The study focuses on the mechanoenergetics of the heart in an animal model and does not report pharmacokinetic parameters for amrinone. |
| popPK | Harada_1996 | irrelevant | 0 | 0 | The paper title indicates a study on venodilator effects (pharmacodynamics) rather than pharmacokinetic parameters, and no quantitative PK data is present in the evidence. |
| PD | Harada_1996 | not_relevant | 0 | 0 | The provided text is only the title of a study and does not contain the full text, data, or numeric PD parameters required to assess the exposure-response relationship. |
| popPK | Hayes_1984 | irrelevant | 0 | 0 | The title indicates a mechanistic study on molecular basis of cardiovascular activities, not a pharmacokinetic study, and no PK data is present. |
| PD | Hayes_1984 | not_relevant | 0 | 0 | The paper focuses on the molecular basis and receptor binding of amrinone, not on pharmacodynamic exposure-response or dose-response modeling with numeric PD parameters. |
| popPK | Hellinger_1995 | relevant | 8 | 2 | The study reports PK parameters for amrinone, but specific numeric values for clearance, volume, or half-life are not present in the provided evidence, only summary statistics like AUC reduction and sieving coefficient. |
| popPK | Kikura_2000 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of platelet disaggregation and does not report any pharmacokinetic parameters for amrinone. |
| popPK | Mansouri_2008 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of PDE3 inhibitors in isolated rat atria and does not report any pharmacokinetic parameters for amrinone. |
| popPK | Rezende_1994 | irrelevant | 0 | 0 | The paper is an in-vitro enzymology study of alkaline phosphatase where amrinone is used only as a competitive inhibitor, not as a subject drug for pharmacokinetic analysis. |
| PD | Rezende_1994 | not_relevant | 0 | 0 | The paper investigates the enzymatic kinetics of alkaline phosphatase and mentions amrinone only as a reagent source, without reporting any pharmacodynamic or exposure-response data for the drug. |
| popPK | Rump_1994 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic investigation of functional effects (inotropy, vasodilation) in isolated hearts, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Shahid_1989 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of cardiac effects (inotropy/chronotropy) and enzyme inhibition, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Wallace_2000 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of vasodilation mechanisms, not a pharmacokinetic study, and reports no disposition parameters for amrinone. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_amrinone`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
