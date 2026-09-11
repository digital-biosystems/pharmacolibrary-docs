# eltrombopag

- **generic name:** eltrombopag
- **ATC codes:** `B02BX05`
- **DrugBank:** [DB06210](https://go.drugbank.com/drugs/DB06210)
- **groups:** approved, investigational

## About

**Description.** Eltrombopag is used to treat low blood platelet counts in adults with chronic immune (idiopathic) thrombocytopenia (ITP), when certain other medicines, or surgery to remove the spleen, have not worked well enough. ITP is a condition that may cause unusual bruising or bleeding due to an abnormally low number of platelets in the blood. Eltrombopag has also been recently approved (late 2012) for the treatment of thrombocytopenia (low blood platelet counts) in patients with chronic hepatitis C to allow them to initiate and maintain interferon-based therapy.

**Indication.** Thrombopoietin receptor agonists are pharmaceutical agents that stimulate platelet production in the bone marrow. In this, they differ from the previously discussed agents that act by attempting to curtail platelet destruction.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-06 10:27 | 7:19 | 1/0/2 | 1/0/0 | 0/0/0 | 81,418/14,839 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/0 | 1/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Gibiansky_2011](drugs/drug_eltrombopag/Eltrombopag_Gibiansky2011_reference.md) | Gibiansky E et al., Population pharmacokinetics of eltrombo…, Journal of clinical pharmac… (2011) | [10.1177/0091270010375427](https://doi.org/10.1177/0091270010375427) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Saleh_2019](drugs/drug_eltrombopag/Eltrombopag_Saleh2019_reference.md) | Saleh MI et al., Bayesian Population Pharmacokinetic Mod…, European journal of drug me… (2019) | [10.1007/s13318-018-0490-x](https://doi.org/10.1007/s13318-018-0490-x) |
| <span class="pk-badge pk-badge--neutral">not modelled</span> | [Farrell_2014](drugs/drug_eltrombopag/Eltrombopag_Farrell2014_reference.md) | Farrell C et al., Population pharmacokinetic/pharmacodyna…, British journal of clinical… (2014) | [10.1111/bcp.12244](https://doi.org/10.1111/bcp.12244) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Farrell_2014](drugs/drug_eltrombopag/pd_Farrell_2014_unknown.md) | Farrell C et al., Population pharmacokinetic/pharmacodyna…, British journal of clinical… (2014) | [10.1111/bcp.12244](https://doi.org/10.1111/bcp.12244) |

## Coverage

- **PubMed hits:** 18 matched, 17 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 0  ·  needs_review 2  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_8 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Gibiansky_2011.pdf` | Gibiansky E et al., Population pharmacokinetics of eltrombo…, Journal of clinical pharmac… (2011) | popPK | 10 | [10.1177/0091270010375427](https://doi.org/10.1177/0091270010375427) | [20663993](https://pubmed.ncbi.nlm.nih.gov/20663993) | The paper is a population PK study of eltrombopag and provides explicit numeric values for CL/F, Vc/F, Vp/F, and Q/F in the text. |
| `Hayes_2011.pdf` | Hayes S et al., Population PK/PD modeling of eltrombopa…, Journal of clinical pharmac… (2011) | popPK | 10 | [10.1177/0091270010383019](https://doi.org/10.1177/0091270010383019) | [21148042](https://pubmed.ncbi.nlm.nih.gov/21148042) | The paper describes a population PK/PD model for eltrombopag, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| `Hayes_2013.pdf` | Hayes S et al., Population PK/PD modeling of eltrombopa…, Cancer chemotherapy and pha… (2013) | popPK | 10 | [10.1007/s00280-013-2150-9](https://doi.org/10.1007/s00280-013-2150-9) | [23564375](https://pubmed.ncbi.nlm.nih.gov/23564375) | The paper describes a population PK model for eltrombopag, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| `Saleh_2019.pdf` | Saleh MI et al., Bayesian Population Pharmacokinetic Mod…, European journal of drug me… (2019) | popPK | 10 | [10.1007/s13318-018-0490-x](https://doi.org/10.1007/s13318-018-0490-x) | [29948848](https://pubmed.ncbi.nlm.nih.gov/29948848) | The paper reports a population PK model for eltrombopag with specific numeric values for clearance, volume of distribution, and absorption lag time directly in the text. |
| `Wire_2018.pdf` | Wire MB et al., Modeling and Simulation Support Eltromb…, Clinical pharmacology and t… (2018) | popPK | 10 | [10.1002/cpt.1066](https://doi.org/10.1002/cpt.1066) | [29536526](https://pubmed.ncbi.nlm.nih.gov/29536526) | The paper describes a population PK/PD model for eltrombopag, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| `Wu_2015.pdf` | Wu K et al., Population Pharmacokinetic and Pharmaco…, Clinical therapeutics (2015) | popPK | 10 | [10.1016/j.clinthera.2015.03.024](https://doi.org/10.1016/j.clinthera.2015.03.024) | [25929594](https://pubmed.ncbi.nlm.nih.gov/25929594) | The paper is a population PK study of eltrombopag, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| `Zhang_2015.pdf` | Zhang J et al., Modeling and simulation support eltromb…, Pharmaceutical research (2015) | popPK | 10 | [10.1007/s11095-014-1594-x](https://doi.org/10.1007/s11095-014-1594-x) | [25534682](https://pubmed.ncbi.nlm.nih.gov/25534682) | The paper describes a population PK model for eltrombopag, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| `Zhang_2024.pdf` | Zhang W et al., Efficacy, Safety, and Population Pharma…, Journal of clinical pharmac… (2024) | popPK | 9 | [10.1002/jcph.2430](https://doi.org/10.1002/jcph.2430) | [38497347](https://pubmed.ncbi.nlm.nih.gov/38497347) | The paper describes a population pharmacokinetic study of eltrombopag, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |

<sub>queue written 2026-09-06T10:20:18.340387+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Hayes_2011 | relevant | 10 | 0 | The paper describes a population PK/PD model for eltrombopag, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| popPK | Hayes_2013 | relevant | 10 | 0 | The paper describes a population PK model for eltrombopag, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| popPK | Wire_2018 | relevant | 10 | 0 | The paper describes a population PK/PD model for eltrombopag, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| popPK | Wu_2015 | relevant | 10 | 0 | The paper is a population PK study of eltrombopag, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| popPK | Zhang_2015 | relevant | 10 | 0 | The paper describes a population PK model for eltrombopag, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| popPK | Zhang_2024 | relevant | 9 | 2 | The paper describes a population pharmacokinetic study of eltrombopag, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| popPK | van_2023 | irrelevant | 0 | 0 | The study focuses on hemostatic and procoagulant parameters (platelet function, thrombin generation) rather than pharmacokinetic disposition parameters for eltrombopag. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_eltrombopag`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
