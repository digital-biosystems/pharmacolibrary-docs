# eptifibatide

- **generic name:** eptifibatide
- **ATC codes:** `B01AC16`
- **DrugBank:** [DB00063](https://go.drugbank.com/drugs/DB00063)
- **groups:** approved, investigational

## About

**Description.** Synthetic cyclic hexapeptide that binds to platelet receptor glycoprotein and inhibits platelet aggregation. Derived from venom of the Southeastern pygmy rattlesnake (Sistrurus miliarus barbouri), eptifibatide is a cyclic heptapeptide that belongs to the class of arginin-glycin-aspartat-mimetics.

**Indication.** For treatment of myocardial infarction and acute coronary syndrome.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-05 22:04 | 3:50 | 0/2/0 | 0/0/0 | 0/0/0 | 19,179/1,479 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Liu_2020](drugs/drug_eptifibatide/Eptifibatide_Liu2020_reference.md) | Liu L et al., Clinical Evaluation of the Tolerability…, Clinical pharmacology in dr… (2020) | [10.1002/cpdd.717](https://doi.org/10.1002/cpdd.717) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Wang_2015](drugs/drug_eptifibatide/Eptifibatide_Wang2015_reference.md) | Wang XP et al., Population pharmacokinetics and safety…, International journal of cl… (2015) | [10.5414/CP202196](https://doi.org/10.5414/CP202196) |

## Coverage

- **PubMed hits:** 17 matched, 17 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Liu_2020.pdf` | Liu L et al., Clinical Evaluation of the Tolerability…, Clinical pharmacology in dr… (2020) | popPK | 10 | [10.1002/cpdd.717](https://doi.org/10.1002/cpdd.717) | [31197974](https://pubmed.ncbi.nlm.nih.gov/31197974) | The study reports quantitative PK parameters for eptifibatide, including a 3-compartment model, clearance (0.11 L/min), and half-life (148.19 minutes). |
| `Wang_2015.pdf` | Wang XP et al., Population pharmacokinetics and safety…, International journal of cl… (2015) | popPK | 10 | [10.5414/CP202196](https://doi.org/10.5414/CP202196) | [26104033](https://pubmed.ncbi.nlm.nih.gov/26104033) | The paper reports a population PK model for eptifibatide with explicit numeric values for CL, V1, Q, and V2 in the text. |
| `Cox_2004.pdf` | Cox DS et al., Pharmacokinetics and pharmacodynamics o…, Journal of clinical pharmac… (2004) | pd | 5 | [10.1177/0091270004267651](https://doi.org/10.1177/0091270004267651) | [15317826](https://www.ncbi.nlm.nih.gov/pubmed/15317826) | metadata signals extractable PD data (PK-PD) |

<sub>queue written 2026-09-05T22:03:56.255588+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bourdon_2006 | irrelevant | 0 | 0 | The paper is a mechanistic study on P2Y1 receptor desensitization where eptifibatide is used only as a comparator agent, and no pharmacokinetic parameters are reported. |
| PD | Bourdon_2006 | not_relevant | 0 | 0 | The paper focuses on the pharmacology of MRS2365 (a P2Y1 agonist) and only mentions eptifibatide qualitatively as a control for shape change, without reporting any exposure-response or dose-response data for eptifibatide. |
| popPK | Cox_2004 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of argatroban, with eptifibatide serving only as a co-administered comparator agent without reported PK parameters. |
| popPK | Fatma_2020 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on antiviral activity, not a pharmacokinetic study, and reports no PK parameters for eptifibatide. |
| PGx | Gao_2009 | not_relevant | 0 | 0 | The paper investigates the mechanism of eptifibatide-induced thrombocytopenia involving Fc receptors and integrin signaling, but does not report pharmacogenomic effects on standard PK or PD parameters. |
| popPK | Gilchrist_2003 | irrelevant | 2 | 0 | The text is a narrative review describing the mechanism and history of eptifibatide without providing any quantitative pharmacokinetic parameter values (e.g., CL, V, t1/2). |
| PD | Gilchrist_2003 | not_relevant | 2 | 0 | The text is a qualitative review of eptifibatide's mechanism and clinical development history, mentioning PK modeling and dose optimization but providing no numeric PD parameters, concentration-effect curves, or specific exposure-response data. |
| popPK | Hantgan_2002 | irrelevant | 0 | 0 | The study is a biophysical/mechanistic investigation of tirofiban's effect on GpIIb/IIIa structure, with eptifibatide mentioned only as a comparator, and no pharmacokinetic parameters are reported. |
| popPK | Marciniak_2001 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of platelet inhibition and receptor binding, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PGx | Meisel_2004 | not_relevant | 2 | 0 | The text is a review abstract discussing the general role of platelet glycoprotein polymorphisms in cardiovascular disease and drug response, but it does not report specific quantitative pharmacokinetic or pharmacodynamic effects of a genotype on eptifibatide. |
| PGx | Nordeen_2013 | not_relevant | 0 | 0 | The paper focuses on clopidogrel resistance and CYP2C19 genotyping, not eptifibatide pharmacogenomics. |
| PGx | Schrör_2003 | not_relevant | 0 | 0 | The paper explicitly states there is no clear evidence that the biological activity of the agents is modified by gene polymorphism (HPA-1). |
| popPK | Stephens_1998 | irrelevant | 0 | 0 | The paper is a mechanistic study on platelet aggregation signaling and does not report any pharmacokinetic parameters for eptifibatide. |
| PD | Stephens_1998 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of a synthetic peptide (Ppep) mimicking GpIIb, not the drug eptifibatide. |
| PGx | Toljan_2019 | not_relevant | 0 | 0 | The paper focuses on clopidogrel pharmacogenetics and a case of thrombosis; eptifibatide is only mentioned as a rescue therapy without any analysis of its PK/PD parameters or genetic influence. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_eptifibatide`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
