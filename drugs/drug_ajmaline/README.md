# ajmaline

- **generic name:** ajmaline
- **ATC codes:** `C01BA05`
- **DrugBank:** [DB01426](https://go.drugbank.com/drugs/DB01426)
- **groups:** approved, withdrawn

## About

**Description.** An alkaloid found in the root of Rauwolfia serpentina, among other plant sources. It is a class Ia antiarrhythmic agent that apparently acts by changing the shape and threshold of cardiac action potentials. Ajmaline produces potent sodium channel blocking effects and a very short half-life which makes it a very useful drug for acute intravenous treatments. The drug has been very popular in some countries for the treatment of atrial fibrillation in patients with the Wolff–Parkinson–White syndrome and in well tolerated monomorphic ventricular tachycardias. It has also been used for many years as a drug to challenge the conduction system of the heart in cases of bundle branch block and syncope. In these cases, abnormal prolongation of the HV interval has been taken as a proof for infrahisian conduction defects tributary for permanent pacemaker implantation.

**Indication.** For use as an antiarrhythmic agent.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-09 07:30 | 4:34 | 0/1/0 | 1/0/0 | 0/0/0 | 65,458/4,023 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 1/2 | 3/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Iven_1977](drugs/drug_ajmaline/Ajmaline_Iven1977_reference.md) | Iven H, The pharmacokinetics and organ distribu…, Naunyn-Schmiedeberg's archi… (1977) | [10.1007/BF00510985](https://doi.org/10.1007/BF00510985) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Friedrich_2007](drugs/drug_ajmaline/pd_Friedrich_2007_I_K.md) | Friedrich O et al., NA+- and K+-channels as molecular targe…, British journal of pharmaco… (2007) | [10.1038/sj.bjp.0707194](https://doi.org/10.1038/sj.bjp.0707194) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Friedrich_2007](drugs/drug_ajmaline/pd_Friedrich_2007_I_Na.md) | Friedrich O et al., NA+- and K+-channels as molecular targe…, British journal of pharmaco… (2007) | [10.1038/sj.bjp.0707194](https://doi.org/10.1038/sj.bjp.0707194) |

## Coverage

- **PubMed hits:** 43 matched, 31 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Elfner_1987.pdf` | Elfner R et al., Pharmacokinetics of n-propyl-ajmaline-b…, European journal of drug me… (1987) | popPK | 10 | [10.1007/BF03189865](https://doi.org/10.1007/BF03189865) | [3609075](https://pubmed.ncbi.nlm.nih.gov/3609075) | The paper reports quantitative pharmacokinetic parameters (clearance and volume of distribution) for n-propyl-ajmaline, a specific ajmaline derivative, in a human study. |
| `Yasuhara_1987.pdf` | Yasuhara M et al., Kinetics of ajmaline disposition and ph…, Journal of pharmacokinetics… (1987) | popPK | 10 | [10.1007/BF01062938](https://doi.org/10.1007/BF01062938) | [3625478](https://pubmed.ncbi.nlm.nih.gov/3625478) | The title confirms a pharmacokinetic study of ajmaline in beagle dogs, but the provided evidence contains only the title and no numeric parameter values. |
| `Iven_1977.pdf` | Iven H, The pharmacokinetics and organ distribu…, Naunyn-Schmiedeberg's archi… (1977) | popPK | 9 | [10.1007/BF00510985](https://doi.org/10.1007/BF00510985) | [882146](https://pubmed.ncbi.nlm.nih.gov/882146) | The study reports quantitative pharmacokinetic parameters (t0.5alpha, t0.5beta, Vdbeta) for ajmaline in mice, and the specific numeric values are explicitly present in the provided text. |
| `Hori_1984.pdf` | Hori R et al., Quinidine-induced rise in ajmaline plas…, The Journal of pharmacy and… (1984) | popPK | 8 | [10.1111/j.2042-7158.1984.tb06942.x](https://doi.org/10.1111/j.2042-7158.1984.tb06942.x) | [6144760](https://pubmed.ncbi.nlm.nih.gov/6144760) | The study reports quantitative PK parameters (ka, elimination rate constant, AUC, Cmax) for ajmaline in humans, though specific clearance or volume values are not explicitly listed in the text. |
| `Spilker_1975.pdf` | Spilker B et al., Cardiovascular effects and blood concen…, Archives internationales de… (1975) | popPK | 8 | not captured | [1164107](https://pubmed.ncbi.nlm.nih.gov/1164107) | The study reports quantitative PK parameters for ajmaline in cats, specifically a half-life of 100 min and peak blood level timing, though full compartmental model parameters (CL, V) are not explicitly listed. |
| `Miao_2025.pdf` | Miao Z et al., Zebrafish embryos as a teratogenicity s…, Reproductive toxicology (El… (2025) | pd | 5 | [10.1016/j.reprotox.2025.108895](https://doi.org/10.1016/j.reprotox.2025.108895) | [40097051](https://www.ncbi.nlm.nih.gov/pubmed/40097051) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-09-09T07:28:19.015954+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alvarez_1992 | irrelevant | 0 | 0 | The study focuses on the electrophysiological mechanism of action of prajmalium (an ajmaline derivative) in rabbit cardiomyocytes and does not report pharmacokinetic parameters for ajmaline. |
| popPK | Bébarová_2005 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of ionic currents in rat myocytes, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Friedrich_2007 | irrelevant | 0 | 0 | The paper is an in-vitro electrophysiology study investigating ajmaline's effects on ion channels in skeletal muscle, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Miao_2025 | irrelevant | 0 | 0 | The paper title indicates a teratogenicity study in zebrafish, and the provided evidence contains no pharmacokinetic parameters or data for ajmaline. |
| PD | Miao_2025 | not_relevant | 0 | 0 | The paper focuses on zebrafish teratogenicity screening and does not report any pharmacodynamic or exposure-response analysis for ajmaline. |
| popPK | Rukachaisirikul_2017 | irrelevant | 0 | 0 | The paper is a phytochemical study on the isolation and structural elucidation of alkaloids, not a pharmacokinetic study. |
| PD | Rukachaisirikul_2017 | not_relevant | 0 | 0 | The paper is a phytochemical isolation study reporting the discovery of a new alkaloid and identifying known compounds; it does not report pharmacodynamic modeling or exposure-response relationships for ajmaline. |
| PGx | Sheludko_2020 | not_relevant | 0 | 0 | The paper investigates the biosynthesis of plant alkaloids using CYP3A4 and does not report pharmacogenomic effects on the PK or PD of the drug ajmaline. |
| PD | Si_0000 | not_relevant | 0 | 0 | The paper reports IC50 values for various natural product compounds (including ajmaline-type alkaloids) in cell assays, but does not report a pharmacodynamic (exposure-response) model or specific PD parameters (Emax, EC50, slope) for the drug ajmaline itself. |
| popPK | Yasuhara_1987 | relevant | 10 | 0 | The title confirms a pharmacokinetic study of ajmaline in beagle dogs, but the provided evidence contains only the title and no numeric parameter values. |
| PD | Yasuhara_1987 | not_relevant | 0 | 0 | The provided text is only the title of the paper and does not contain the full text, abstract, or data required to determine if numeric PD parameters or exposure-response relationships are reported. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_ajmaline`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
