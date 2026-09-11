# rabeprazole

- **generic name:** rabeprazole
- **ATC codes:** `A02BC04`
- **DrugBank:** [DB01129](https://go.drugbank.com/drugs/DB01129)
- **groups:** approved, investigational

## About

**Description.** Rabeprazole is an antiulcer drug in the class of proton pump inhibitors. It is a prodrug - in the acid environment of the parietal cells it turns into active sulphenamide form. Rabeprazole inhibits the H+, K+ATPase of the coating gastric cells and dose-dependent oppresses basal and stimulated gastric acid secretion.

**Indication.** For the treatment of acid-reflux disorders (GERD), peptic ulcer disease, H. pylori eradication, and prevention of gastroinetestinal bleeds with NSAID use.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-10 20:37 | 6:15 | 0/2/0 | 1/0/0 | 0/0/0 | 131,252/9,937 | ollama / qwen3.8:27b-mtp-q8_0 | 17 | 2/1 | 3/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Sheng_2010](drugs/drug_rabeprazole/Rabeprazole_Sheng2010_reference.md) | Sheng YC et al., Effect of CYP2C19 genotypes on the phar…, European journal of clinica… (2010) | [10.1007/s00228-010-0892-4](https://doi.org/10.1007/s00228-010-0892-4) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Yang_2009](drugs/drug_rabeprazole/Rabeprazole_Yang2009_reference.md) | Yang JC et al., Pharmacokinetic- pharmacodynamic analys…, British journal of clinical… (2009) | [10.1111/j.1365-2125.2009.03393.x](https://doi.org/10.1111/j.1365-2125.2009.03393.x) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Yang_2009](drugs/drug_rabeprazole/pd_Yang_2009_gastrin.md) | Yang JC et al., Pharmacokinetic- pharmacodynamic analys…, British journal of clinical… (2009) | [10.1111/j.1365-2125.2009.03393.x](https://doi.org/10.1111/j.1365-2125.2009.03393.x) |

## Coverage

- **PubMed hits:** 18 matched, 16 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_7 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Chen_2006.pdf` | Chen ZY et al., Pharmacokinetic and pharmacodynamic pop…, European journal of drug me… (2006) | popPK | 10 | [10.1007/BF03190639](https://doi.org/10.1007/BF03190639) | [16715780](https://pubmed.ncbi.nlm.nih.gov/16715780) | The paper is a population PK-PD study of rabeprazole, but the evidence only provides PD parameters (E0, Emax, EC50, Hill) and lacks the specific numeric PK values (CL, V, ka) required for extraction. |
| `Jeong_2023.pdf` | Jeong SH et al., Exploring Differences in Pharmacometric…, Biomedicines (2023) | popPK | 10 | [10.3390/biomedicines11113021](https://doi.org/10.3390/biomedicines11113021) | [38002021](https://pubmed.ncbi.nlm.nih.gov/38002021) | The paper describes a population PK/PD study for rabeprazole, but the specific numeric parameter values are not present in the provided abstract text. |
| `McLeay_2014.pdf` | McLeay SC et al., Population pharmacokinetics of rabepraz…, Clinical pharmacokinetics (2014) | popPK | 10 | [10.1007/s40262-014-0168-8](https://doi.org/10.1007/s40262-014-0168-8) | [25168707](https://pubmed.ncbi.nlm.nih.gov/25168707) | The paper describes a population PK model for rabeprazole, but the specific numeric parameter values (CL, V, ka, etc.) are not present in the provided evidence text. |
| `Sheng_2010.pdf` | Sheng YC et al., Effect of CYP2C19 genotypes on the phar…, European journal of clinica… (2010) | popPK | 10 | [10.1007/s00228-010-0892-4](https://doi.org/10.1007/s00228-010-0892-4) | [20838991](https://pubmed.ncbi.nlm.nih.gov/20838991) | The paper reports a population PK model for rabeprazole and provides specific numeric clearance values for different CYP2C19 genotypes in the abstract. |
| `Srinivas_2011.pdf` | Srinivas NR, PK/PD modeling of rabeprazole in CYP2C1…, European journal of clinica… (2011) | popPK | 10 | [10.1007/s00228-011-1027-2](https://doi.org/10.1007/s00228-011-1027-2) | [21424385](https://pubmed.ncbi.nlm.nih.gov/21424385) | The title indicates a PK/PD modeling study for rabeprazole, but the provided evidence contains only the title and no numeric parameter values. |
| `Ma_2016.pdf` | Ma Z et al., Pharmacokinetics and bioavailability in…, International journal of cl… (2016) | popPK | 8 | [10.5414/CP202265](https://doi.org/10.5414/CP202265) | [26249765](https://pubmed.ncbi.nlm.nih.gov/26249765) | The study reports non-compartmental PK parameters (Cmax, AUC) for rabeprazole, but lacks specific clearance (CL) or volume (V) values required for compartmental/population PK modeling. |
| `Patel_2019.pdf` | Patel H et al., Pharmacokinetic evaluation of different…, Drug development and indust… (2019) | popPK | 8 | [10.1080/03639045.2019.1628249](https://doi.org/10.1080/03639045.2019.1628249) | [31216902](https://pubmed.ncbi.nlm.nih.gov/31216902) | The study reports PK parameters for rabeprazole in dogs, but the evidence only provides qualitative descriptions (e.g., "longer half-life") and relative bioavailability percentages, lacking specific numeric values for CL, V, or t1/2. |

<sub>queue written 2026-09-10T20:32:36.986541+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chen_2006 | relevant | 10 | 2 | The paper is a population PK-PD study of rabeprazole, but the evidence only provides PD parameters (E0, Emax, EC50, Hill) and lacks the specific numeric PK values (CL, V, ka) required for extraction. |
| popPK | Hayato_2012 | irrelevant | 2 | 0 | The study focuses on pharmacodynamics (gastric pH) and genotype effects, and while it mentions plasma concentrations, no quantitative pharmacokinetic parameters (CL, V, ka, etc.) are reported in the evidence. |
| popPK | Jeong_2023 | relevant | 10 | 0 | The paper describes a population PK/PD study for rabeprazole, but the specific numeric parameter values are not present in the provided abstract text. |
| popPK | Kirchheiner_2009_2 | irrelevant | 0 | 0 | The paper is a pharmacodynamic meta-analysis focusing on gastric pH and dose equivalence, not a pharmacokinetic study reporting disposition parameters like clearance or volume for rabeprazole. |
| popPK | Litalien_2005 | irrelevant | 0 | 0 | The paper is a review that explicitly states no pharmacokinetic data are available for rabeprazole in children, and it does not report any quantitative parameters for rabeprazole. |
| popPK | McLeay_2014 | relevant | 10 | 0 | The paper describes a population PK model for rabeprazole, but the specific numeric parameter values (CL, V, ka, etc.) are not present in the provided evidence text. |
| popPK | Ollier_2015 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of dabigatran, with rabeprazole serving only as a co-administered proton pump inhibitor to evaluate drug-drug interactions, and no PK parameters for rabeprazole are reported. |
| popPK | Patel_2019 | relevant | 8 | 2 | The study reports PK parameters for rabeprazole in dogs, but the evidence only provides qualitative descriptions (e.g., "longer half-life") and relative bioavailability percentages, lacking specific numeric values for CL, V, or t1/2. |
| popPK | Ruiz-Garcia_2020 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of dacomitinib, with rabeprazole serving only as a co-administered proton pump inhibitor to assess its effect on dacomitinib absorption, not as the subject drug. |
| popPK | Srinivas_2011 | relevant | 10 | 0 | The title indicates a PK/PD modeling study for rabeprazole, but the provided evidence contains only the title and no numeric parameter values. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_rabeprazole`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
