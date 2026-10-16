<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;lonafarnib&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Lonafarnib_Canini2017_reference&quot;,&quot;label&quot;:&quot;Canini_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lonafarnib/Lonafarnib_Canini2017_reference.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Canini_2017_HDV&quot;,&quot;label&quot;:&quot;Canini_2017 \u00b7 HDV&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_lonafarnib/pd_Canini_2017_HDV.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# lonafarnib

- **generic name:** lonafarnib
- **ATC codes:** `A16AX20`
- **DrugBank:** [DB06448](https://go.drugbank.com/drugs/DB06448) · **PubChem:** [CID 148195](https://pubchem.ncbi.nlm.nih.gov/compound/148195)
- **molar mass:** 638.822 g/mol (C27H31Br2ClN4O2) — DrugBank
- **groups:** approved

## About

Lonafarnib is a farnesyltransferase enzyme inhibitor used to treat progeria and certain laminopathies. It is an approved medicine, authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3258910](https://www.wikidata.org/wiki/Q3258910) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| lonafarnib | parent | 638.822 | C27H31Br2ClN4O2 | DrugBank | [148195](https://pubchem.ncbi.nlm.nih.gov/compound/148195) | Canini_2017 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-15 03:24 | 3:45 | 0/0/1 | 0/0/1 | 0/0/0 | 336,696/21,220 | einfracz / qwen3.8-27b | 10 | 3/8 | 8/2 | 1 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0), gpt-oss:120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓ 2/2</span><br><sub>blocking: model_quarantined: CLelim[central] left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Canini_2017_reference](drugs/drug_lonafarnib/Lonafarnib_Canini2017_reference.md) | ▶ model + simulator | 1-compartment general linear | 3 | Canini L et al., Pharmacokinetics and pharmacodynamics m…, Hepatology communications (2017) | [10.1002/hep4.1043](https://doi.org/10.1002/hep4.1043) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Canini_2017_HDV](drugs/drug_lonafarnib/pd_Canini_2017_HDV.md) | HDV RNA ← lonafarnib · direct sigmoid Emax (Hill) effect | ▶ model + simulator | Canini L et al., Pharmacokinetics and pharmacodynamics m…, Hepatology communications (2017) | [10.1002/hep4.1043](https://doi.org/10.1002/hep4.1043) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=lonafarnib).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor | DrugBank actor |
| absorption | mammary gland | `ABCG2` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor | DrugBank actor |
| metabolism | kidney | `CYP3A5` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` substrate, `CYP2A6` substrate, `CYP2C19` inhibitor/substrate, `CYP2C8` inhibitor/substrate, `CYP2C9` substrate, `CYP2E1` substrate, `CYP3A4` inhibitor/substrate, `CYP3A5` inhibitor/substrate, `SLCO1B1` inhibitor, `SLCO1B3` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate, `CYP3A5` inhibitor/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `ABCC2` inhibitor | DrugBank actor |
| excretion | liver | `ABCC2` inhibitor | DrugBank actor |
| excretion | small intestine | `ABCC2` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: FNTA (inhibitor), FNTB (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 50 matched, 53 returned
- **screened:** 7  ·  **relevant:** 3
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_5 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Awada_2002.pdf` | Awada A et al., Phase I and pharmacological study of th…, European journal of cancer… (2002) | popPK | 8 | [10.1016/s0959-8049(02)00379-9](https://doi.org/10.1016/s0959-8049(02)00379-9) | [12441264](https://pubmed.ncbi.nlm.nih.gov/12441264) | The paper reports pharmacokinetic parameters (half-life, accumulation, Vss qualitative) for SCH 66336 (lonafarnib) in humans, but specific numeric values for CL, V, or ka are not listed in the provided abstract text. |
| `Kieran_2007.pdf` | Kieran MW et al., Phase I and pharmacokinetic study of th…, Journal of clinical oncolog… (2007) | popPK | 8 | [10.1200/JCO.2006.09.4243](https://doi.org/10.1200/JCO.2006.09.4243) | [17634493](https://pubmed.ncbi.nlm.nih.gov/17634493) | The study describes a PK assessment but the provided evidence contains no quantitative parameter values (e.g., CL, V, t1/2) for lonafarnib. |
| `Wong_2011.pdf` | Wong NS et al., A phase I multicenter study of continuo…, Cancer investigation (2011) | popPK | 8 | [10.3109/07357907.2011.621912](https://doi.org/10.3109/07357907.2011.621912) | [22011284](https://pubmed.ncbi.nlm.nih.gov/22011284) | The study reports PK parameters (half-life, Tmax) for lonafarnib in a phase I trial, but lacks detailed population PK model parameters like CL and V in the provided text. |
| `Khuri_2004.pdf` | Khuri FR et al., Phase I study of the farnesyltransferas…, Clinical cancer research :… (2004) | popPK | 5 | [10.1158/1078-0432.ccr-03-0412](https://doi.org/10.1158/1078-0432.ccr-03-0412) | [15131032](https://pubmed.ncbi.nlm.nih.gov/15131032) | The study characterizes the pharmacokinetics of lonafarnib in humans, but no quantitative disposition parameters (CL, V, ka, etc.) are provided in the text, and the specific concentration data or model parameters are not included in the evidence. |
| `Yu_2022.pdf` | Yu J et al., Pharmacokinetic Drug-Drug Interactions…, Drug metabolism and disposi… (2022) | pgx | 8 | [10.1124/dmd.121.000401](https://doi.org/10.1124/dmd.121.000401) | [34620694](https://www.ncbi.nlm.nih.gov/pubmed/34620694) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |

<sub>queue written 2026-10-15T03:21:44.436682+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Appels_2011 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic characterization of a different drug (AZD3409) where lonafarnib serves only as a comparator, and no pharmacokinetic parameters are reported. |
| popPK | Asselah_2020 | irrelevant | 0 | 0 | The paper is a review of HDV treatments that mentions lonafarnib but contains no pharmacokinetic data or quantitative disposition parameters. |
| popPK | Balmus_2018 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of Remodelin (a NAT10 inhibitor), not lonafarnib, which is only mentioned as a comparator drug for HGPS treatment. |
| PD | Balmus_2018 | not_relevant | 0 | 0 | The paper studies Remodelin (a NAT10 inhibitor), not lonafarnib, and reports only qualitative efficacy and basic PK data without any exposure-response or dose-response modeling. |
| popPK | Bjorkli_2022 | irrelevant | 0 | 0 | The study is a preclinical efficacy investigation of lonafarnib in an Alzheimer's disease mouse model, focusing on pathological changes (Aβ, tau) and cognitive performance, without reporting any pharmacokinetic parameters (CL, V, ka, etc.). |
| popPK | Castaneda_2011 | irrelevant | 3 | 0 | The paper describes a Phase I PK study of lonafarnib in humans, but the provided evidence contains only qualitative descriptions (e.g., "exposure increased," "accumulation was higher") without any specific numeric PK parameter values (CL, V, T1/2, etc.). |
| popPK | Caviglia_2020 | irrelevant | 0 | 0 | The paper is a review of hepatitis D therapies that mentions lonafarnib mechanistically but contains no pharmacokinetic data or quantitative disposition parameters. |
| popPK | Chow_2008 | irrelevant | 1 | 0 | The study mentions pharmacokinetics were analyzed but reports no quantitative PK parameter values (CL, V, t1/2) in the provided evidence. |
| popPK | Cortes_2007 | relevant | 4 | 0 | The study is a Phase 1 PK/PD trial in humans, but the abstract only provides qualitative statements regarding pharmacokinetics without specific numeric disposition parameters (CL, V, etc.). |
| PD | Feldman_2008 | not_relevant | 3 | 1 | The paper reports PK data and a binary pharmacodynamic marker (HDJ-2 farnesylation shift) but explicitly states that no clear correlation between the PD marker and clinical effect could be made, and no numeric PD parameters (Emax, EC50, etc.) are provided. |
| popPK | Foo_2024 | irrelevant | 0 | 0 | The study investigates the mechanistic role of farnesylation and the drug lonafarnib (FTI) in cellular turnover of lamin A/progerin in vitro, but does not report pharmacokinetic disposition parameters (CL, V, etc.) for lonafarnib. |
| popPK | Gabriel_2017 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of cellular effects in fibroblasts and does not report any pharmacokinetic parameters for lonafarnib. |
| popPK | Ghosal_2006 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study identifying CYP enzymes responsible for lonafarnib metabolism and does not report quantitative pharmacokinetic disposition parameters (CL, V, etc.). |
| PD | Ghosal_2006 | not_relevant | 0 | 0 | The paper describes in vitro metabolic pathways and CYP enzyme identification, not pharmacodynamic exposure-response or dose-response relationships. |
| PGx | Ghosal_2006 | not_relevant | 0 | 0 | The paper identifies the CYP enzymes responsible for lonafarnib metabolism but does not report any pharmacogenomic data (gene variants or genotypes) affecting PK or PD parameters. |
| popPK | Hahn_2020 | irrelevant | 0 | 0 | The paper is an in-vitro efficacy study evaluating the activity of lonafarnib against the parasite Naegleria fowleri and does not contain any pharmacokinetic data or disposition parameters. |
| PD | Hahn_2020 | not_relevant | 0 | 0 | The paper evaluates a farnesyltransferase inhibitor against Naegleria fowleri in vitro and does not mention lonafarnib or report any pharmacodynamic parameters for it. |
| popPK | Hongnak_2023 | irrelevant | 0 | 0 | The paper is a structure-activity relationship (SAR) and in-vitro cytotoxicity study of lonafarnib derivatives, reporting no pharmacokinetic parameters such as clearance, volume, or half-life. |
| PD | Hongnak_2023 | not_relevant | 3 | 3 | The paper reports IC50 values for lonafarnib and its derivatives in cell lines, which are single-point potency metrics rather than a full exposure-response or dose-response curve with derived PD parameters (e.g., Emax, slope, EC50 from a fitted model). |
| popPK | Hsieh_2003 | irrelevant | 0 | 0 | The study is a method development paper for HPLC-APPI-MS/MS and does not report specific quantitative disposition parameters (CL, V, etc.) for lonafarnib in the evidence provided. |
| PGx | Jung_2023 | not_relevant | 0 | 0 | The paper is a review on the regulation of protein prenylation and does not report any pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of lonafarnib. |
| popPK | Keskin_2023 | irrelevant | 0 | 0 | The paper is a narrative review of emerging drugs for hepatitis D and does not report quantitative pharmacokinetic parameters for lonafarnib. |
| popPK | Khuri_2004 | relevant | 5 | 0 | The study characterizes the pharmacokinetics of lonafarnib in humans, but no quantitative disposition parameters (CL, V, ka, etc.) are provided in the text, and the specific concentration data or model parameters are not included in the evidence. |
| popPK | Kieran_2007 | irrelevant | 8 | 0 | The study describes a PK assessment but the provided evidence contains no quantitative parameter values (e.g., CL, V, t1/2) for lonafarnib. |
| popPK | Kim_1999 | irrelevant | 0 | 0 | The study concerns the pharmacokinetics of SCH 66336, not lonafarnib. |
| popPK | Lempp_2019 | irrelevant | 0 | 0 | The paper is an in-vitro virology study reporting antiviral IC50 values for lonafarnib in cell culture, not pharmacokinetic disposition parameters (CL, V, etc.). |
| popPK | Medeiros_2007 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of tipifarnib's P-glycoprotein inhibitory properties, and lonafarnib is only mentioned as a comparator in the introduction without any pharmacokinetic data. |
| popPK | Milojkovic_2013 | irrelevant | 2 | 0 | While this Phase I study includes pharmacokinetics, the provided evidence contains no quantitative disposition parameters (CL, V, Ka, t1/2) for lonafarnib. |
| popPK | Moorthy_2013 | irrelevant | 0 | 0 | The paper is a comprehensive review of farnesyltransferase inhibitors focusing on structural analysis and does not report original quantitative pharmacokinetic parameters for lonafarnib. |
| PD | Moorthy_2013 | not_relevant | 1 | 0 | The text is a structural review of farnesyltransferase inhibitors that mentions lonafarnib clinical studies but provides no numeric pharmacodynamic parameters, exposure-response data, or dose-effect curves. |
| popPK | Negro_2023 | irrelevant | 0 | 0 | The paper is a review of Hepatitis D treatments and mentions lonafarnib's clinical efficacy (virological response rates) but does not report any pharmacokinetic parameters. |
| PGx | Okawa_2025 | not_relevant | 0 | 0 | The paper is a nationwide epidemiological survey of HGPS patients in Japan and does not analyze the impact of specific pharmacogenetic variants on lonafarnib pharmacokinetics or pharmacodynamics. |
| popPK | Ready_2007 | irrelevant | 2 | 0 | The study mentions pharmacokinetics were characterized but the provided text contains no quantitative PK parameter values (e.g., CL, V, T1/2) for lonafarnib, only qualitative statements about lack of interaction. |
| popPK | Reinshagen_2025 | irrelevant | 0 | 0 | The paper describes data integration pipelines for drug repurposing and does not report any pharmacokinetic parameters for lonafarnib. |
| PD | Reinshagen_2025 | not_relevant | 0 | 0 | The paper describes bioinformatics pipelines for drug repurposing and does not report any pharmacodynamic or exposure-response data for lonafarnib. |
| popPK | Rizzetto_2018 | irrelevant | 0 | 0 | The paper is a clinical review/overview of hepatitis D treatments that mentions lonafarnib's mechanism and qualitative efficacy but reports no pharmacokinetic parameters or quantitative disposition data. |
| popPK | Sake_2024 | irrelevant | 0 | 0 | The paper is a virology study characterizing lonafarnib's antiviral mechanism against RSV, containing only pharmacodynamic data (IC50, binding kinetics) and no pharmacokinetic parameters. |
| popPK | Saracco_2022 | irrelevant | 0 | 0 | This is a narrative review on chronic viral hepatitis therapies that mentions lonafarnib as a treatment but provides no pharmacokinetic parameters, numerical data, or models for lonafarnib. |
| popPK | Soriano_2017 | irrelevant | 0 | 0 | This is a review article discussing hepatitis delta and HIV comorbidity, mentioning lonafarnib only as a therapeutic option without providing any pharmacokinetic parameters or data. |
| popPK | Soriano_2023 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics and clinical trials of bulevirtide, and mentions lonafarnib only as a potential future combination agent without providing any PK parameters for it. |
| popPK | Soriano_2023_2 | irrelevant | 0 | 0 | The paper is a clinical review discussing the treatment of hepatitis delta and HIV, mentioning lonafarnib only as an approved drug for progeria and potential HDV therapy, without providing any pharmacokinetic data. |
| popPK | Taylor_2008 | irrelevant | 0 | 0 | The study focuses on pharmacodynamic effects (growth inhibition, apoptosis, biomarkers) and does not report quantitative pharmacokinetic parameters for lonafarnib. |
| PD | Taylor_2008 | not_relevant | 2 | 1 | The paper reports qualitative pharmacodynamic effects (growth inhibition, apoptosis, biomarker shifts) of a drug combination but does not provide numeric concentration-effect curves, dose-response parameters (Emax, EC50), or a formal PK/PD model fit. |
| popPK | Theodore_2005 | irrelevant | 0 | 0 | The study focuses on SCH66336 (tipifarnib), not lonafarnib, and only reports PK data for the co-administered drug gemcitabine. |
| PGx | Tong_2006 | not_relevant | 0 | 0 | The paper describes analytical methods for characterizing unstable metabolites of lonafarnib using mass spectrometry and does not report pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Wang_2017 | not_relevant | 0 | 0 | The paper reports the in vitro pharmacological effects of lonafarnib on cell viability and resistance, but it does not report how a specific gene variant or genotype alters the PK or PD parameters of the drug. |
| PGx | Wang_2021 | not_relevant | 1 | 5 | The paper reports that lonafarnib has pan-genotypic activity against HDV, but it does not report how host gene variants or genotypes change PK/PD parameters of lonafarnib. |
| popPK | Wong_2011 | relevant | 8 | 4 | The study reports PK parameters (half-life, Tmax) for lonafarnib in a phase I trial, but lacks detailed population PK model parameters like CL and V in the provided text. |
| PD | Wong_2011 | not_relevant | 1 | 0 | The text mentions pharmacodynamics as an endpoint but provides no numeric PD parameters, concentration-effect data, or dose-response curves. |
| PGx | Yu_2022 | not_relevant | 0 | 0 | The paper analyzes drug-drug interactions (DDIs) and CYP3A substrate sensitivity, not pharmacogenomic effects of genetic variants on PK/PD parameters. |
| popPK | Zhu_2007 | irrelevant | 4 | 2 | The paper reports only relative bioavailability and variability percentages for food effects, lacking explicit numeric values for standard disposition parameters like clearance (CL), volume of distribution (V), or half-life (t1/2). |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-15 03:21 UTC</sub>
