<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C08C&quot;,&quot;href&quot;:&quot;atc/C08C.md&quot;},{&quot;label&quot;:&quot;benidipine&quot;}]"></div>

# benidipine

- **generic name:** benidipine
- **ATC codes:** `C08CA15`
- **DrugBank:** [DB09231](https://go.drugbank.com/drugs/DB09231) · **PubChem:** [CID 656668](https://pubchem.ncbi.nlm.nih.gov/compound/656668)
- **molar mass:** 505.571 g/mol (C28H31N3O6) — DrugBank
- **groups:** investigational

## About

Benidipine is a dihydropyridine calcium channel blocker developed for treating high blood pressure and related cardiovascular conditions. It is not approved in the European Union and remains investigational in major drug databases, with use limited to certain Asian markets.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q113514884](https://www.wikidata.org/wiki/Q113514884) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by qwen3.8:27b-mtp-q8_0, p(non-human) 1.00).">in vitro</span> | [Inomata_2003_LDH](drugs/drug_benidipine/pd_Inomata_2003_LDH.md) | LDH release ← benidipine · direct Emax (saturable) effect | — | Inomata K et al., Protective effect of benidipine against…, Journal of pharmacological… (2003) | [10.1254/jphs.93.163](https://doi.org/10.1254/jphs.93.163) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from an LLM reading of the title and abstract by qwen3.8:27b-mtp-q8_0, p(non-human) 1.00).">pig</span> | [Yamamoto_1990_ICa](drugs/drug_benidipine/pd_Yamamoto_1990_ICa.md) | Ca current (ICa) ← benidipine · direct Emax (saturable) effect | — | Yamamoto M et al., Mechanisms of long-lasting effects of b…, British journal of pharmaco… (1990) | [10.1111/j.1476-5381.1990.tb14074.x](https://doi.org/10.1111/j.1476-5381.1990.tb14074.x) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Yun_2005_DBP](drugs/drug_benidipine/pd_Yun_2005_DBP.md) | diastolic blood pressure ← benidipine · target-mediated drug disposition | — | Yun HY et al., Pharmacokinetics and pharmacodynamics o…, Journal of clinical pharmac… (2005) | [10.1111/j.1365-2710.2005.00682.x](https://doi.org/10.1111/j.1365-2710.2005.00682.x) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Yun_2005_HR](drugs/drug_benidipine/pd_Yun_2005_HR.md) | heart rate ← benidipine · target-mediated drug disposition | — | Yun HY et al., Pharmacokinetics and pharmacodynamics o…, Journal of clinical pharmac… (2005) | [10.1111/j.1365-2710.2005.00682.x](https://doi.org/10.1111/j.1365-2710.2005.00682.x) |
| <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Canbolat_2018_relaxation](drugs/drug_benidipine/pd_Canbolat_2018_relaxation.md) | relaxation ← benidipine · direct Emax (saturable) effect | — | Canbolat S et al., Moderate hypothermia and responses to c…, Physiology international (2018) | [10.1556/2060.105.2018.1.2](https://doi.org/10.1556/2060.105.2018.1.2) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Kobayashi_1997_BP](drugs/drug_benidipine/pd_Kobayashi_1997_BP.md) | blood pressure ← benidipine · direct sigmoid Emax (Hill) effect | — | Kobayashi H et al., Relationship between plasma concentrati…, The Journal of pharmacy and… (1997) | [10.1111/j.2042-7158.1997.tb06070.x](https://doi.org/10.1111/j.2042-7158.1997.tb06070.x) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=benidipine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP3A4` inhibitor/substrate, `CYP3A5` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: CACNA1B (target), CACNA1C (target), CACNA1G (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 02:16 | 1:46 | 0/0/0 | 4/1/0 | 0/0/0 | 52,561/2,823 | ollama / qwen3.8:27b-mtp-q8_0 | 6 | 10/2 | 5/1 | 0 |

## Coverage

- **PubMed hits:** 43 matched, 45 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_11 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Yun_2005.pdf` | Yun HY et al., Pharmacokinetics and pharmacodynamics o…, Journal of clinical pharmac… (2005) | popPK | 9 | [10.1111/j.1365-2710.2005.00682.x](https://doi.org/10.1111/j.1365-2710.2005.00682.x) | [16336286](https://pubmed.ncbi.nlm.nih.gov/16336286) | The study reports a two-compartment PK model for benidipine in humans, but the specific numeric parameter values (CL, V, ka, etc.) are not listed in the provided abstract text. |
| `Kobayashi_1997.pdf` | Kobayashi H et al., Relationship between plasma concentrati…, The Journal of pharmacy and… (1997) | popPK | 8 | [10.1111/j.2042-7158.1997.tb06070.x](https://doi.org/10.1111/j.2042-7158.1997.tb06070.x) | [9466343](https://pubmed.ncbi.nlm.nih.gov/9466343) | The study reports a one-compartment PK model and hysteresis analysis for benidipine in rats, but specific numeric parameter values (CL, V, ka) are not present in the provided abstract text. |
| `Yi_2025.pdf` | Yi D et al., Effects of antihypertensive drugs on th…, Drug metabolism and disposi… (2025) | pd | 5 | [10.1016/j.dmd.2025.100094](https://doi.org/10.1016/j.dmd.2025.100094) | [40482432](https://www.ncbi.nlm.nih.gov/pubmed/40482432) | metadata signals extractable PD data (IC50) |
| `Gotoh_1991.pdf` | Gotoh Y et al., Inhibition of transient outward K+ curr…, The American journal of phy… (1991) | pd | 4 | [10.1152/ajpheart.1991.260.5.H1737](https://doi.org/10.1152/ajpheart.1991.260.5.H1737) | [1709794](https://www.ncbi.nlm.nih.gov/pubmed/1709794) | metadata signals extractable PD data (IC50) |
| `Katoh_2000.pdf` | Katoh M et al., Inhibitory potencies of 1,4-dihydropyri…, Pharmaceutical research (2000) | pd | 4 | [10.1023/a:1007568811691](https://doi.org/10.1023/a:1007568811691) | [11145223](https://www.ncbi.nlm.nih.gov/pubmed/11145223) | metadata signals extractable PD data (IC50) |
| `Mathew_2017.pdf` | Mathew SK et al., Inhibition by Benidipine of Contractili…, International journal of ap… (2017) | pd | 4 | [10.4103/ijabmr.IJABMR_87_16](https://doi.org/10.4103/ijabmr.IJABMR_87_16) | [28904913](https://www.ncbi.nlm.nih.gov/pubmed/28904913) | metadata signals extractable PD data (EC50) |
| `Qu_1996.pdf` | Qu YL et al., Slow association of positively charged…, General pharmacology (1996) | pd | 4 | [10.1016/0306-3623(95)00085-2](https://doi.org/10.1016/0306-3623(95)00085-2) | [8742511](https://www.ncbi.nlm.nih.gov/pubmed/8742511) | metadata signals extractable PD data (IC50) |
| `Uchida_2003.pdf` | Uchida S et al., Altered pharmacokinetics and excessive…, Clinical pharmacology and t… (2003) | pgx | 8 | [10.1016/j.clpt.2003.08.001](https://doi.org/10.1016/j.clpt.2003.08.001) | [14586391](https://www.ncbi.nlm.nih.gov/pubmed/14586391) | metadata signals extractable PGX data (CYP2C91, PK/PD-context) |
| `Furuta_2001.pdf` | Furuta S et al., Inhibition of drug metabolism in human…, Xenobiotica; the fate of fo… (2001) | pgx | 7 | [10.1080/00498250110035615](https://doi.org/10.1080/00498250110035615) | [11334262](https://www.ncbi.nlm.nih.gov/pubmed/11334262) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |
| `Sugiyama_2007.pdf` | Sugiyama Y et al., Effect of benidipine on simvastatin met…, Drug metabolism and pharmac… (2007) | pgx | 7 | [10.2133/dmpk.22.199](https://doi.org/10.2133/dmpk.22.199) | [17603221](https://www.ncbi.nlm.nih.gov/pubmed/17603221) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Yoon_2007.pdf` | Yoon YJ et al., Characterization of benidipine and its…, Drug metabolism and disposi… (2007) | pgx | 7 | [10.1124/dmd.106.013607](https://doi.org/10.1124/dmd.106.013607) | [17537876](https://www.ncbi.nlm.nih.gov/pubmed/17537876) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |

<sub>queue written 2026-10-07 02:15 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Buddhadev_2024 | irrelevant | 1 | 0 | The study focuses on formulation development and pharmacodynamics (blood pressure) without reporting quantitative pharmacokinetic parameters (CL, V, ka) for benidipine. |
| PD | Buddhadev_2024 | not_relevant | 2 | 1 | The paper reports a qualitative pharmacodynamic observation (decreased blood pressure) in rats but does not provide numeric concentration-effect data, dose-response curves, or PD parameters (Emax, EC50) for benidipine. |
| popPK | Cabré_2026 | irrelevant | 0 | 0 | The paper is a narrative review of cardiovascular pharmacotherapy and does not report quantitative pharmacokinetic parameters for benidipine. |
| PD | Cabré_2026 | not_relevant | 0 | 0 | The text is a narrative review of cardiovascular pharmacotherapy and does not contain specific data, models, or numeric parameters for benidipine. |
| popPK | Canbolat_2018 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of vascular smooth muscle relaxation (pIC50) in calf cardiac veins, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PGx | Furuta_2001 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (inhibition by omeprazole/cimetidine) in vitro, not pharmacogenomic effects of gene variants on benidipine PK/PD. |
| popPK | Gotoh_1989 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of calcium blocking action in rat tissues, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Gotoh_1991 | irrelevant | 0 | 0 | The paper is an in-vitro electrophysiology study on rabbit myocytes focusing on ion channel inhibition, not a pharmacokinetic study, and benidipine is only mentioned as a comparator in a potency rank order without any PK parameters. |
| PD | Gotoh_1991 | not_relevant | 4 | 2 | The paper reports an IC50 for nicardipine but only provides a qualitative rank order for benidipine without specific numeric PD parameters. |
| popPK | Ide_1994 | irrelevant | 0 | 0 | The provided evidence contains only software metadata and no scientific content regarding benidipine pharmacokinetics. |
| PD | Ide_1994 | not_relevant | 0 | 0 | The provided text is metadata from a document processing tool (GROBID) and does not contain the scientific content of the paper, nor any information regarding benidipine or pharmacodynamic parameters. |
| popPK | Ikemura_2019 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of CYP2J2 inhibition by antihypertensive drugs, not a pharmacokinetic study reporting disposition parameters for benidipine. |
| PD | Ikemura_2019 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition kinetics (IC50, Ki) for CYP2J2, which is a pharmacokinetic/metabolic property, not a pharmacodynamic exposure-response relationship for the drug's clinical effect. |
| popPK | Inomata_2003 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on cell death and does not report pharmacokinetic parameters for benidipine. |
| popPK | Katoh_2000 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of P-glycoprotein inhibition and does not report pharmacokinetic disposition parameters for benidipine. |
| PGx | Katoh_2000 | not_relevant | 0 | 0 | The study investigates in vitro inhibitory effects of benidipine on P-glycoprotein transport and does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Katoh_2000_2 | not_relevant | 0 | 0 | The paper investigates in vitro CYP inhibition by benidipine to predict drug-drug interactions, but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Kobayashi_1997 | relevant | 8 | 2 | The study reports a one-compartment PK model and hysteresis analysis for benidipine in rats, but specific numeric parameter values (CL, V, ka) are not present in the provided abstract text. |
| popPK | Maier-Lenz_1988 | irrelevant | 2 | 0 | The provided abstract describes pharmacodynamic effects (heart rate, blood pressure) and dose-finding but does not contain any quantitative pharmacokinetic parameters (CL, V, t1/2) for benidipine. |
| PD | Maier-Lenz_1988 | not_relevant | 2 | 1 | The text describes qualitative changes in heart rate and blood pressure at specific doses but does not provide numeric concentration-effect data, dose-response curves, or fitted PD parameters (Emax, EC50). |
| popPK | Mathew_2017 | irrelevant | 0 | 0 | no_text gate: only 88 chars of text extracted (&lt; 400) |
| popPK | Miyata_1993 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of a different drug (CD-832) using benidipine only as a comparator, with no pharmacokinetic parameters reported. |
| PD | Miyata_1993 | not_relevant | 0 | 0 | The paper focuses on the pharmacology of CD-832; benidipine is only used as a reference compound in a single concentration range without reporting specific numeric PD parameters or a fitted dose-response curve for it. |
| popPK | Ogihara_2009 | irrelevant | 0 | 0 | The study is a mechanistic in-vitro pharmacophore modeling analysis of calcium channel inhibition, not a pharmacokinetic study, and reports no disposition parameters for benidipine. |
| PD | Ogihara_2009 | not_relevant | 1 | 0 | The paper reports an IC50 for cilnidipine but explicitly states that benidipine did not inhibit N-type calcium channels and provides no numeric PD parameters or concentration-effect data for benidipine. |
| popPK | Qu_1996 | irrelevant | 0 | 0 | no_text gate: only 130 chars of text extracted (&lt; 400) |
| PD | Qu_1996 | not_relevant | 0 | 0 | The paper focuses on the binding kinetics of amlodipine, not benidipine, and does not report pharmacodynamic exposure-response or dose-response relationships. |
| popPK | Ren_2022 | irrelevant | 0 | 0 | The paper is a theoretical/methodological study on pharmacodynamic modeling (SRB) using a generic drug or noberastine as an example, not a PK study of benidipine. |
| popPK | Shimada_1996 | irrelevant | 2 | 0 | The study focuses on pharmacodynamics (effect compartment, EC50, binding affinity) rather than reporting quantitative pharmacokinetic disposition parameters (CL, V, ka) for benidipine. |
| PD | Shimada_1996 | not_relevant | 0 | 0 | The provided text is metadata from a document processing tool (GROBID) and does not contain the scientific content of the paper, nor any information regarding benidipine or pharmacodynamic parameters. |
| popPK | Shimizu_2021 | irrelevant | 0 | 0 | The paper is a cross-sectional epidemiological study on intracranial aneurysms that uses benidipine as a comparator drug for rupture risk, not a pharmacokinetic study. |
| PD | Shimizu_2021 | not_relevant | 3 | 2 | The study reports an epidemiological dose-response association (odds ratios for rupture risk by dose) rather than a pharmacodynamic exposure-response relationship with numeric PD parameters like Emax or EC50. |
| PGx | Shinozaki_2010 | not_relevant | 0 | 0 | The paper discusses QT interval monitoring for drug safety but does not report any pharmacogenomic effects of gene variants on the PK or PD of benidipine. |
| popPK | Sugawara_1996 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of antioxidant effects on lipid peroxidation, not a pharmacokinetic study, and reports no disposition parameters for benidipine. |
| PD | Sugawara_1996 | not_relevant | 0 | 0 | The text describes in vitro lipid peroxidation assays and lists benidipine as a reagent, but contains no pharmacokinetic or pharmacodynamic modeling, exposure-response analysis, or numeric PD parameters. |
| PGx | Sugiyama_2007 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (inhibition of CYP3A4 by benidipine) rather than the effect of a gene variant or genotype on benidipine's PK/PD parameters. |
| PGx | Takara_2012 | not_relevant | 0 | 0 | The study examines the effect of benidipine on ABCG2/BCRP transport in cell lines, not the effect of a gene variant on benidipine's PK or PD. |
| PGx | Uchida_2003 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects for candesartan, not benidipine. |
| popPK | Yamamoto_1990 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of calcium channel binding in guinea-pig cells, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Yao_2000 | irrelevant | 0 | 0 | The provided evidence contains only software metadata and no scientific content regarding benidipine pharmacokinetics. |
| PD | Yao_2000 | not_relevant | 0 | 0 | The provided text is metadata from a document processing tool (GROBID) and does not contain the scientific content of the paper, nor any information regarding benidipine or pharmacodynamic parameters. |
| popPK | Yi_2025 | irrelevant | 0 | 0 | no_text gate: only 101 chars of text extracted (&lt; 400) |
| PD | Yi_2025 | not_relevant | 0 | 0 | The paper focuses on the metabolic interaction between antihypertensive drugs and mobocertinib, not on the pharmacodynamic or exposure-response relationship of benidipine. |
| PGx | Yoon_2007 | not_relevant | 0 | 0 | The study characterizes the metabolic enzymes (CYP3A4/5) and enantiomer metabolism in vitro but does not report any pharmacogenomic effects of specific gene variants or genotypes on PK/PD parameters. |
| popPK | Yun_2005 | relevant | 9 | 2 | The study reports a two-compartment PK model for benidipine in humans, but the specific numeric parameter values (CL, V, ka, etc.) are not listed in the provided abstract text. |
| PGx | Zhou_2014 | not_relevant | 0 | 0 | The paper is a review of drug-drug interactions between DHP-CCBs and statins, and does not report pharmacogenomic effects on benidipine PK/PD. |
| PGx | Štěpánková_2016 | not_relevant | 0 | 0 | The paper investigates the effect of benidipine enantiomers on CYP450 expression and activity in vitro, rather than the effect of a patient's genetic variant on benidipine's PK or PD. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbenidipine%5D&body=Drug%3A%20benidipine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_benidipine/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
