<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A03F&quot;,&quot;href&quot;:&quot;atc/A03F.md&quot;},{&quot;label&quot;:&quot;itopride&quot;}]"></div>

# itopride

- **generic name:** itopride
- **ATC codes:** `A03FA07`
- **DrugBank:** [DB04924](https://go.drugbank.com/drugs/DB04924) · **PubChem:** [CID 3792](https://pubchem.ncbi.nlm.nih.gov/compound/3792)
- **molar mass:** 358.4314 g/mol (C20H26N2O4) — DrugBank
- **groups:** investigational

## About

Itopride is a prokinetic drug used to treat functional gastrointestinal disorders. It is not approved in the European Union or the United States and remains investigational there, though it is used in some Asian countries.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4409774](https://www.wikidata.org/wiki/Q4409774) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 13:53 | 1:04 | 0/0/0 | 0/0/0 | 0/0/0 | 28,733/1,193 | ollama / qwen3.8:27b-mtp-q8_0 | 4 | 0/9 | 4/0 | 0 |

## Coverage

- **PubMed hits:** 38 matched, 31 returned
- **screened:** 5  ·  **relevant:** 4
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Zhou_2017.pdf` | Zhou W et al., Development of a physiologically based…, Biopharmaceutics & drug dis… (2017) | popPK | 9 | [10.1002/bdd.2074](https://doi.org/10.1002/bdd.2074) | [28255999](https://pubmed.ncbi.nlm.nih.gov/28255999) | The paper reports quantitative PK parameters (clearance 52-69 l/h, CLint) for itopride in humans within a PBPK model. |
| `Nasiri_2019.pdf` | Nasiri MI et al., Comparative pharmacokinetic evaluation…, Drug development and indust… (2019) | popPK | 8 | [10.1080/03639045.2018.1546312](https://doi.org/10.1080/03639045.2018.1546312) | [30457018](https://pubmed.ncbi.nlm.nih.gov/30457018) | The study reports PK parameters for itopride in humans, but the evidence only provides relative bioavailability ratios and qualitative statements about Cmax/AUC, lacking specific numeric values for clearance, volume, or half-life. |
| `Safhi_2023.pdf` | Safhi AY et al., Statistically Optimized Polymeric Bucca…, Pharmaceuticals (Basel, Swi… (2023) | popPK | 8 | [10.3390/ph16111551](https://doi.org/10.3390/ph16111551) | [38004417](https://pubmed.ncbi.nlm.nih.gov/38004417) | The study reports in vivo PK parameters (Cmax, AUC, t1/2) for itopride in rabbits, but specific numeric values for clearance, volume, or half-life are not explicitly listed in the provided text, only Cmax comparisons. |
| `Mushiroda_2000.pdf` | Mushiroda T et al., The involvement of flavin-containing mo…, Drug metabolism and disposi… (2000) | pgx | 7 | not captured | [10997945](https://www.ncbi.nlm.nih.gov/pubmed/10997945) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-04T13:53:01.349893+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Ahmed_2016 | not_relevant | 0 | 0 | The paper reports pharmacokinetic parameters (AUC, Cmax) and dissolution profiles but does not report any pharmacodynamic or exposure-response relationship for itopride. |
| PD | Alaithan_2022 | not_relevant | 0 | 0 | The paper focuses on the formulation and pharmacokinetics (AUC, half-life) of a gastro-retentive film, reporting no pharmacodynamic or exposure-response relationship for itopride. |
| popPK | Butt_2017 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic investigation of prokinetic effects on isolated rabbit duodenum and does not report any pharmacokinetic parameters for itopride. |
| popPK | Deolekar_2023 | irrelevant | 0 | 0 | The paper is a pharmacoeconomic analysis of drug prices and does not report any pharmacokinetic parameters for itopride. |
| PD | Deolekar_2023 | not_relevant | 0 | 0 | The paper is a pharmacoeconomic analysis of drug prices and contains no pharmacodynamic or exposure-response data. |
| popPK | Iwanaga_1994 | irrelevant | 0 | 0 | The paper describes in-vitro enzymatic inhibition (IC50) of acetylcholinesterase by itopride, not pharmacokinetic disposition parameters. |
| popPK | Jones_2017 | irrelevant | 2 | 0 | The study is an in vitro/in silico investigation of FMO substrates where itopride is one of ten compounds used to validate a clearance prediction model, and no specific quantitative PK parameters (CL, V, etc.) for itopride are reported in the evidence. |
| popPK | Kawachi_2011 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of acotiamide with itopride serving only as a comparator, and no quantitative pharmacokinetic parameters for itopride are reported. |
| PD | Kawachi_2011 | not_relevant | 3 | 2 | The paper reports an IC50 for acotiamide, but only provides qualitative dose-response observations for itopride without numeric PD parameters or a fitted concentration-effect curve. |
| popPK | Lim_2008 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of gastrointestinal motility in guinea pigs and does not report any pharmacokinetic parameters for itopride. |
| popPK | Mohamed_2015 | irrelevant | 0 | 0 | The paper describes spectrophotometric analytical methods for drug quantification, not pharmacokinetic studies or disposition parameters. |
| PD | Mohamed_2015 | not_relevant | 0 | 0 | The paper describes analytical methods for drug quantification and contains no pharmacodynamic or exposure-response data. |
| popPK | Mushiroda_2000 | irrelevant | 2 | 0 | The study is primarily mechanistic (enzyme identification) and while it mentions an in vivo rat study, it only reports qualitative changes (increased AUC/Cmax) for comparator drugs and states no significant effect for itopride without providing specific quantitative PK parameter values (CL, V, t1/2) for itopride. |
| PGx | Mushiroda_2000 | not_relevant | 0 | 0 | The study investigates enzyme involvement (FMO vs CYP3A4) and drug-drug interactions, but does not report any pharmacogenomic effects of specific gene variants on itopride PK/PD. |
| popPK | Naheed_2026 | irrelevant | 0 | 0 | The study is a pharmaceutical analysis using Raman spectroscopy and does not report any pharmacokinetic parameters for itopride. |
| PD | Naheed_2026 | not_relevant | 0 | 0 | The paper describes a Raman spectroscopy method for quantifying itopride in solid dosage forms and contains no pharmacodynamic, exposure-response, or dose-effect data. |
| popPK | Nasiri_2019 | relevant | 8 | 2 | The study reports PK parameters for itopride in humans, but the evidence only provides relative bioavailability ratios and qualitative statements about Cmax/AUC, lacking specific numeric values for clearance, volume, or half-life. |
| popPK | Perumal_2014 | irrelevant | 0 | 0 | The paper describes an analytical HPLC method for drug quantification and contains no pharmacokinetic data or disposition parameters for itopride. |
| PD | Perumal_2014 | not_relevant | 0 | 0 | The paper describes an analytical HPLC method for drug quantification and contains no pharmacodynamic or exposure-response data. |
| popPK | Pillai_2008 | irrelevant | 0 | 0 | The paper describes analytical methods (UV/HPLC) for quantifying drug content in formulations, not pharmacokinetic disposition parameters. |
| PD | Pillai_2008 | not_relevant | 0 | 0 | The paper describes analytical methods (UV and HPLC) for quantifying drug concentrations in formulations, not pharmacodynamic or exposure-response relationships. |
| popPK | Reddy_2018 | irrelevant | 2 | 0 | The paper is a PBPK modeling study using itopride as one of nine FMO substrates to validate a prediction method, and no specific quantitative PK parameter values (CL, V, etc.) for itopride are provided in the evidence. |
| PGx | Reddy_2018 | not_relevant | 0 | 0 | The paper focuses on PBPK modeling to predict PK parameters for FMO substrates (including itopride) but does not report specific pharmacogenomic effects (gene variant/genotype) on these parameters. |
| popPK | Safhi_2023 | relevant | 8 | 4 | The study reports in vivo PK parameters (Cmax, AUC, t1/2) for itopride in rabbits, but specific numeric values for clearance, volume, or half-life are not explicitly listed in the provided text, only Cmax comparisons. |
| PD | Safhi_2023 | not_relevant | 0 | 0 | The paper reports only pharmacokinetic parameters (AUC, Cmax, t1/2) and in vitro release kinetics, with no analysis of drug effect or exposure-response relationship. |
| popPK | Sahoo_2009 | irrelevant | 2 | 0 | The study reports only bioequivalence metrics (AUC, Cmax, relative bioavailability) for a fixed-dose combination and does not provide compartmental PK parameters (CL, V, ka, t1/2) for itopride. |
| popPK | Shimizu_2021 | irrelevant | 0 | 0 | no_text gate: only 126 chars of text extracted (&lt; 400) |
| popPK | Suganthi_2008 | irrelevant | 0 | 0 | The paper describes an HPTLC analytical method for quantifying itopride in tablets, not a pharmacokinetic study. |
| PD | Suganthi_2008 | not_relevant | 0 | 0 | The paper describes a pharmaceutical analysis method (HPTLC) for quantifying drug content in tablets, not a pharmacodynamic or exposure-response study. |
| popPK | Tan_2010 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of clebopride, using itopride only as an internal standard for quantification. |
| popPK | Taniguchi-Takizawa_2021 | irrelevant | 1 | 2 | The study is an in-vitro mechanistic investigation of enzyme-mediated metabolism (FMO3/CYP) in human liver microsomes, not a pharmacokinetic study reporting disposition parameters (CL, V, t1/2) for itopride in vivo. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
