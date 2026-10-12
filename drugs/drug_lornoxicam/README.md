<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M01A&quot;,&quot;href&quot;:&quot;atc/M01A.md&quot;},{&quot;label&quot;:&quot;lornoxicam&quot;}]"></div>

# lornoxicam

- **generic name:** lornoxicam
- **ATC codes:** `M01AC05`
- **DrugBank:** [DB06725](https://go.drugbank.com/drugs/DB06725) · **PubChem:** [CID 54690031](https://pubchem.ncbi.nlm.nih.gov/compound/54690031)
- **molar mass:** 371.81 g/mol (C13H10ClN3O4S2) — DrugBank
- **groups:** approved

## About

It is an approved medicine, though it is not authorised across the whole European Union and is used mainly in some countries.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2734874](https://www.wikidata.org/wiki/Q2734874) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 14:48 | 0:47 | 0/0/0 | 0/0/0 | 0/0/0 | 34,411/1,631 | einfracz / qwen3.8-27b | 24 | 9/1 | 10/0 | 0 |

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=lornoxicam).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `CYP2C9` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: PTGS1 (inhibitor), PTGS2 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 23 matched, 23 returned
- **screened:** 6  ·  **relevant:** 4
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_7 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Radhofer-Welte_2008.pdf` | Radhofer-Welte S et al., Comparative bioavailability of lornoxic…, Clinical drug investigation (2008) | popPK | 10 | [10.2165/00044011-200828060-00002](https://doi.org/10.2165/00044011-200828060-00002) | [18479176](https://pubmed.ncbi.nlm.nih.gov/18479176) | The study is a Phase I PK comparison of lornoxicam formulations in humans, but the specific numeric parameter values (e.g., actual t1/2, CL, V) are not listed in the provided text, only ratios and qualitative comparisons. |
| `Choi_2011.pdf` | Choi CI et al., Effects of the CYP2C9*1/*13 genotype on…, Basic & clinical pharmacolo… (2011) | popPK | 9 | [10.1111/j.1742-7843.2011.00751.x](https://doi.org/10.1111/j.1742-7843.2011.00751.x) | [21726410](https://pubmed.ncbi.nlm.nih.gov/21726410) | Study reports quantitative PK parameters (CL, t1/2, AUC) for lornoxicam in humans, but specific numeric values are likely in tables not provided in the evidence text. |
| `Idkaidek_2012.pdf` | Idkaidek N et al., Saliva versus plasma pharmacokinetics:…, Molecular pharmaceutics (2012) | popPK | 8 | [10.1021/mp300250r](https://doi.org/10.1021/mp300250r) | [22784220](https://pubmed.ncbi.nlm.nih.gov/22784220) | The study reports pharmacokinetics for lornoxicam, but no specific numeric parameter values (e.g., CL, V, t1/2) are provided in the evidence text. |
| `Liu_2006.pdf` | Liu YL et al., Effect of the CYP2C9*3 allele on lornox…, Clinica chimica acta; inter… (2006) | popPK | 6 | [10.1016/j.cca.2005.07.013](https://doi.org/10.1016/j.cca.2005.07.013) | [16182270](https://pubmed.ncbi.nlm.nih.gov/16182270) | The study reports relative changes in AUC and t1/2 for lornoxicam in humans but lacks absolute numeric values for clearance (CL) or volume (V). |
| `Baviskar_2013_2.pdf` | Baviskar DT et al., Development of matrix-type transdermal…, PDA journal of pharmaceutic… (2013) | popPK | 5 | [10.5731/pdajpst.2013.00898](https://doi.org/10.5731/pdajpst.2013.00898) | [23385560](https://pubmed.ncbi.nlm.nih.gov/23385560) | The study involves pharmacokinetic modeling of lornoxicam in rats, but specific numeric values for clearance, volume, or rate constants are not provided in the extracted evidence. |
| `Diakonis_2013.pdf` | Diakonis VF et al., Evaluation of vitreous clearance and po…, Journal of ocular pharmacol… (2013) | popPK | 5 | [10.1089/jop.2012.0194](https://doi.org/10.1089/jop.2012.0194) | [23556534](https://pubmed.ncbi.nlm.nih.gov/23556534) | The study measures PK parameters (half-life) for lornoxicam in rabbits, but reports only the half-life without explicit volume/clearance values or a compartmental model. |
| `Zaid_2017.pdf` | Zaid AN et al., Lornoxicam Immediate-Release Tablets: F…, Clinical pharmacology in dr… (2017) | popPK | 5 | [10.1002/cpdd.333](https://doi.org/10.1002/cpdd.333) | [28176487](https://pubmed.ncbi.nlm.nih.gov/28176487) | The study reports lornoxicam bioequivalence in humans but provides only Cmax and AUC values without explicit clearance (CL) or volume (V) parameter estimates. |

<sub>queue written 2026-10-07T14:48:06.831901+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Baviskar_2013_2 | relevant | 5 | 2 | The study involves pharmacokinetic modeling of lornoxicam in rats, but specific numeric values for clearance, volume, or rate constants are not provided in the extracted evidence. |
| popPK | Bonnabry_1996 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of CYP2C9 kinetics, not a pharmacokinetic study reporting disposition parameters like clearance, volume, or half-life for the subject drug. |
| popPK | Choi_2011 | relevant | 9 | 2 | Study reports quantitative PK parameters (CL, t1/2, AUC) for lornoxicam in humans, but specific numeric values are likely in tables not provided in the evidence text. |
| popPK | Diakonis_2013 | relevant | 5 | 2 | The study measures PK parameters (half-life) for lornoxicam in rabbits, but reports only the half-life without explicit volume/clearance values or a compartmental model. |
| popPK | Dittrich_1990 | relevant | 3 | 0 | The study is a PK interaction study in humans for lornoxicam, but the abstract states parameters (t1/2, Cmax, etc.) were not significantly changed and provides no specific numeric values for clearance or volume. |
| popPK | Freestone_1991 | irrelevant | 0 | 0 | This paper is about tenoxicam, not lornoxicam, and no lornoxicam PK parameters are present. |
| popPK | Guo_2005 | irrelevant | 3 | 2 | This is a mechanistic pharmacogenetic study reporting in vitro kinetic parameters (Km, Vmax) and relative changes in AUC/CL/F for a specific genotype, rather than a quantitative population PK study with absolute parameter estimates (CL, V, ka). |
| popPK | Guo_2005_2 | irrelevant | 1 | 0 | The paper reports in-vitro catalytic properties (Km, Vmax) of CYP2C9 isoforms using lornoxicam as a substrate, which is a mechanistic study and not a pharmacokinetic study reporting disposition parameters for lornoxicam. |
| popPK | Hartmann_1990 | irrelevant | 0 | 0 | The paper is about tenoxicam, with lornoxicam not mentioned as a subject drug and no lornoxicam PK values present. |
| popPK | Idkaidek_2012 | relevant | 8 | 0 | The study reports pharmacokinetics for lornoxicam, but no specific numeric parameter values (e.g., CL, V, t1/2) are provided in the evidence text. |
| popPK | Iida_2004 | irrelevant | 2 | 0 | The study is an in-vitro mechanistic investigation of metabolic enzymes (CYP2C9 variants) and does not report systemic pharmacokinetic parameters (CL, V, t1/2) for lornoxicam in humans or animals. |
| popPK | Jeong_2022 | relevant | 10 | 2 | This is a PBPK pharmacokinetic study of lornoxicam, but the evidence shown only gives exposure ratios and mentions clinical PK results, not readable numeric disposition parameters. |
| popPK | Jones_2000 | irrelevant | 1 | 8 | This is a renal safety study of tenoxicam with no pharmacokinetic disposition model or PK parameters for lornoxicam, and the numeric values shown are renal function measures rather than PK. |
| popPK | Kim_2009_2 | irrelevant | 0 | 0 | The study is an in vitro receptor binding assay where lornoxicam is used as a co-administered agent, and no quantitative pharmacokinetic parameters for lornoxicam are reported. |
| popPK | Kohl_2000 | irrelevant | 2 | 0 | The study is an in vitro mechanistic investigation of CYP2C9 inhibition for drug-drug interaction prediction, not a pharmacokinetic study reporting disposition parameters (CL, V, t1/2) for lornoxicam. |
| popPK | Liu_2006 | relevant | 6 | 4 | The study reports relative changes in AUC and t1/2 for lornoxicam in humans but lacks absolute numeric values for clearance (CL) or volume (V). |
| popPK | Nagaya_2025 | irrelevant | 2 | 0 | Lornoxicam is used only as a probe substrate for CYP2C9 in an in vitro mechanistic study, not as the subject of a pharmacokinetic parameter analysis. |
| popPK | Naumov_2019 | irrelevant | 2 | 1 | This is a clinical review/pilot safety piece with only non-PK statements about lornoxicam; no quantitative disposition parameters are provided, and any detailed data are not shown here. |
| popPK | Pruss_1990 | irrelevant | 3 | 1 | Only a review/overview with a human plasma half-life mentioned; no readable numeric PK disposition parameters or population model values are provided here. |
| popPK | Radhofer-Welte_2008 | relevant | 10 | 4 | The study is a Phase I PK comparison of lornoxicam formulations in humans, but the specific numeric parameter values (e.g., actual t1/2, CL, V) are not listed in the provided text, only ratios and qualitative comparisons. |
| popPK | Ravic_1993_2 | irrelevant | 0 | 0 | no_text gate: only 340 chars of text extracted (&lt; 400) |
| popPK | Said_2024 | irrelevant | 0 | 0 | The study focuses on nanocarrier formulation and in-vivo anti-inflammatory efficacy in rats, with no pharmacokinetic parameter extraction or reporting for lornoxicam. |
| popPK | Si_2004 | irrelevant | 1 | 0 | The paper is a pharmacogenetic study identifying a CYP2C9 allele and does not report quantitative pharmacokinetic parameters (CL, V, etc.) for lornoxicam. |
| popPK | Stoeckel_1985 | irrelevant | 0 | 0 | The paper is about glibornuride and tenoxicam, not lornoxicam, and no lornoxicam PK values are present. |
| popPK | Teaima_2021 | relevant | 3 | 8 | This is a rat study that reports standard non-compartmental PK parameters (Cmax, AUC, half-life, MRT) for lornoxicam, but does not report the specific disposition parameters (CL, V, Q, ka) or compartmental models requested for population PK screening. |
| popPK | Turner_1990 | relevant | 4 | 4 | This is a PK paper on lornoxicam with one numeric half-life value in the text, but it is a brief review and no full compartmental/population parameters are provided. |
| popPK | Varghese_2016_2 | irrelevant | 3 | 0 | The study reports PK parameters only for the comparator drug Daunorubicin, while Lornoxicam is evaluated only for pharmacodynamic (anti-inflammatory) activity and in vitro release. |
| popPK | Zaid_2017 | relevant | 5 | 2 | The study reports lornoxicam bioequivalence in humans but provides only Cmax and AUC values without explicit clearance (CL) or volume (V) parameter estimates. |
| popPK | Zhou_2006 | irrelevant | 1 | 0 | The paper is a molecular dynamics simulation study of CYP2C9*13 using lornoxicam as a substrate, and it does not report quantitative pharmacokinetic parameters (CL, V, ka, etc.) for lornoxicam. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
