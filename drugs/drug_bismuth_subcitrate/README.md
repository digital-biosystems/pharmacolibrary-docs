# bismuth subcitrate

- **generic name:** bismuth subcitrate
- **ATC codes:** `A02BX05`
- **DrugBank:** not captured
- **groups:** not captured

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-10 14:33 | 4:51 | 0/3/0 | 0/1/0 | 0/0/0 | 43,926/1,595 | ollama / qwen3.8:27b-mtp-q8_0 | 5 | 2/3 | 5/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Benet_1991](drugs/drug_bismuth_subcitrate/BismuthSubcitrate_Benet1991_reference.md) | Benet LZ, Safety and pharmacokinetics: colloidal…, Scandinavian journal of gas… (1991) | [10.3109/00365529109093217](https://doi.org/10.3109/00365529109093217) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Dresow_1991](drugs/drug_bismuth_subcitrate/BismuthSubcitrate_Dresow1991_reference.md) | Dresow B et al., Bioavailability of bismuth from 205Bi-l…, Archives of toxicology (1991) | [10.1007/BF02098030](https://doi.org/10.1007/BF02098030) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Leussink_2000](drugs/drug_bismuth_subcitrate/BismuthSubcitrate_Leussink2000_reference.md) | Leussink BT et al., Bismuth biokinetics and kidney histopat…, Archives of toxicology (2000) | [10.1007/s002040000150](https://doi.org/10.1007/s002040000150) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Jin_2004](drugs/drug_bismuth_subcitrate/pd_Jin_2004_unknown.md) | Jin L et al., Inhibition of alcohol dehydrogenase by…, Journal of inorganic bioche… (2004) | [10.1016/j.jinorgbio.2004.03.016](https://doi.org/10.1016/j.jinorgbio.2004.03.016) |

## Coverage

- **PubMed hits:** 20 matched, 20 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 0  ·  needs_review 0  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Benet_1991.pdf` | Benet LZ, Safety and pharmacokinetics: colloidal…, Scandinavian journal of gas… (1991) | popPK | 9 | [10.3109/00365529109093217](https://doi.org/10.3109/00365529109093217) | [1957122](https://pubmed.ncbi.nlm.nih.gov/1957122) | The text explicitly reports quantitative pharmacokinetic parameters for bismuth subcitrate, including blood clearance (50-95 ml/min), bioavailability (0.16-0.28%), and half-life (5-11 days). |
| `Leussink_2000.pdf` | Leussink BT et al., Bismuth biokinetics and kidney histopat…, Archives of toxicology (2000) | popPK | 9 | [10.1007/s002040000150](https://doi.org/10.1007/s002040000150) | [11043489](https://pubmed.ncbi.nlm.nih.gov/11043489) | The study reports quantitative biokinetic parameters (absorption half-life, elimination half-life, peak concentration) for bismuth subcitrate in rats using a one-compartment model. |
| `Dresow_1991.pdf` | Dresow B et al., Bioavailability of bismuth from 205Bi-l…, Archives of toxicology (1991) | popPK | 8 | [10.1007/BF02098030](https://doi.org/10.1007/BF02098030) | [1747063](https://pubmed.ncbi.nlm.nih.gov/1747063) | The study reports quantitative PK parameters (half-lives, bioavailability) for bismuth subcitrate in rats using a compartmental model. |
| `Beil_1993.pdf` | Beil W et al., Studies on the mechanism of action of c…, Pharmacology (1993) | pd | 4 | [10.1159/000139088](https://doi.org/10.1159/000139088) | [8395060](https://www.ncbi.nlm.nih.gov/pubmed/8395060) | metadata signals extractable PD data (IC50) |
| `Kuo_2009.pdf` | Kuo CH et al., Efficacy of levofloxacin-based rescue t…, The Journal of antimicrobia… (2009) | pgx | 5 | [10.1093/jac/dkp034](https://doi.org/10.1093/jac/dkp034) | [19246508](https://www.ncbi.nlm.nih.gov/pubmed/19246508) | metadata signals extractable PGX data (CYP2C19) |
| `Kuo_2013.pdf` | Kuo CH et al., Comparison of 10 day bismuth quadruple…, The Journal of antimicrobia… (2013) | pgx | 5 | [10.1093/jac/dks361](https://doi.org/10.1093/jac/dks361) | [22984204](https://www.ncbi.nlm.nih.gov/pubmed/22984204) | metadata signals extractable PGX data (CYP2C19) |

<sub>queue written 2026-09-10T14:31:10.477805+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Bakulina_2019 | not_relevant | 0 | 0 | The paper reports the effect of gene variants on the clinical outcome (H. pylori eradication rate), not on the pharmacokinetic or pharmacodynamic parameters of bismuth subcitrate. |
| PD | Beil_1993 | not_relevant | 0 | 0 | The paper investigates the biochemical mechanism of action (interaction with sulfhydryls) in vitro and does not report pharmacokinetic or pharmacodynamic exposure-response relationships or numeric PD parameters. |
| PGx | Kuo_2009 | not_relevant | 0 | 0 | The paper reports clinical efficacy and predictors of treatment failure (including CYP2C19 genotype) but does not report pharmacokinetic or pharmacodynamic parameters of bismuth subcitrate. |
| PGx | Kuo_2013 | not_relevant | 0 | 0 | The paper reports that CYP2C19 polymorphism did not influence the eradication effect (clinical outcome), but does not report any pharmacokinetic or pharmacodynamic parameters of bismuth subcitrate. |
| PD | Lee_1982 | not_relevant | 1 | 0 | The paper describes a qualitative mechanism of action (diffusion barrier) and qualitative tissue accumulation but provides no numeric concentration-effect or dose-response parameters. |
| PD | Li_2026 | not_relevant | 1 | 0 | The text is a mechanistic review describing molecular targets and qualitative therapeutic potential, lacking any quantitative exposure-response data, dose-effect curves, or numeric PD parameters. |
| PD | Nishimura_1993 | not_relevant | 1 | 0 | The study reports qualitative/percentage outcomes of a fixed-dose clinical trial without measuring drug concentrations or fitting a dose-response model to derive numeric PD parameters. |
| PD | Phillips_2000 | not_relevant | 3 | 2 | The paper reports in vitro MICs and in vivo eradication rates but does not provide a concentration-effect curve or numeric PD parameters (e.g., EC50, Emax) linking exposure to effect. |
| PGx | Veliev_2019 | not_relevant | 0 | 0 | The paper reports a clinical trial comparing H. pylori eradication regimens and mentions CYP2C19 genotype as a risk factor for treatment failure, but it does not report pharmacokinetic or pharmacodynamic parameters of bismuth subcitrate. |
| PGx | Wang_2022 | not_relevant | 0 | 0 | The paper reports pharmacokinetic changes induced by a drug-drug interaction (NAC), not by a gene variant or genotype. |
| PD | Woo_2024 | not_relevant | 3 | 3 | The paper reports static MIC values (MIC50/MIC90) and FIC indices for in vitro susceptibility, which are standard microbiological endpoints rather than dynamic pharmacodynamic (exposure-response) parameters like Emax, EC50, or slope derived from a concentration-effect model. |
| PGx | Wu_2011 | not_relevant | 0 | 0 | The paper compares two rescue therapies for H. pylori and mentions CYP2C19 genotyping, but it does not report any pharmacokinetic or pharmacodynamic parameters of bismuth subcitrate or how genetic variants affect them. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_bismuth_subcitrate`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
