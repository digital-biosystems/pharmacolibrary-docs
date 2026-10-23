<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01A&quot;,&quot;href&quot;:&quot;atc/L01A.md&quot;},{&quot;label&quot;:&quot;nimustine&quot;}]"></div>

# nimustine

- **generic name:** nimustine
- **ATC codes:** `L01AD06`
- **DrugBank:** [DB13069](https://go.drugbank.com/drugs/DB13069) · **PubChem:** [CID 39214](https://pubchem.ncbi.nlm.nih.gov/compound/39214)
- **molar mass:** 272.69 g/mol (C9H13ClN6O2) — DrugBank
- **groups:** investigational

## About

Nimustine is a nitrosourea alkylating agent with antineoplastic (cancer-treating) activity. It is classed as investigational and has no European Union authorisation.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q907623](https://www.wikidata.org/wiki/Q907623) and the WHO ATC classification; not checked by a person.</small>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Hori_1987_reference](drugs/drug_nimustine/Nimustine_Hori1987_reference.md) | — | 1-compartment (no model) | 0 | Hori T et al., Influence of modes of ACNU administrati…, Journal of neurosurgery (1987) | [10.3171/jns.1987.66.3.0372](https://doi.org/10.3171/jns.1987.66.3.0372) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **ADGRG2** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Udagawa_2018](drugs/drug_nimustine/pgx_Udagawa_2018_ADGRG2_Q100.md) | Udagawa C et al., Targeted sequencing reveals genetic var…, Experimental and therapeuti… (2018) | [10.3892/etm.2017.5533](https://doi.org/10.3892/etm.2017.5533) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **LIFR** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Udagawa_2018](drugs/drug_nimustine/pgx_Udagawa_2018_LIFR_Q100.md) | Udagawa C et al., Targeted sequencing reveals genetic var…, Experimental and therapeuti… (2018) | [10.3892/etm.2017.5533](https://doi.org/10.3892/etm.2017.5533) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 16:18 | 2:54 | 0/1/0 | 0/0/0 | 0/0/2 | 63,500/3,235 | einfracz / qwen3.8-27b | 3 | 1/2 | 3/0 | 0 |

## Coverage

- **PubMed hits:** 96 matched, 59 returned
- **screened:** 3  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hori_1987.pdf` | Hori T et al., Influence of modes of ACNU administrati…, Journal of neurosurgery (1987) | popPK | 9 | [10.3171/jns.1987.66.3.0372](https://doi.org/10.3171/jns.1987.66.3.0372) | [3469331](https://pubmed.ncbi.nlm.nih.gov/3469331) | The paper reports quantitative pharmacokinetic parameters (half-life, clearance, volume) for ACNU (nimustine) in human brain tumor patients. |
| `Levin_1989.pdf` | Levin VA et al., Phase I/II study of intraventricular an…, Cancer chemotherapy and pha… (1989) | popPK | 9 | [10.1007/BF00292408](https://doi.org/10.1007/BF00292408) | [2706735](https://pubmed.ncbi.nlm.nih.gov/2706735) | The study reports quantitative PK parameters (clearance, elimination rate constant, AUC) for ACNU (nimustine) in human patients, and the values are present in the text. |

<sub>queue written 2026-10-07T16:18:00.858306+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bartussek_1999 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on p53 mutations and glioma cell sensitivity to various drugs (including BCNU, not nimustine specifically as a PK subject) and contains no pharmacokinetic parameters. |
| popPK | Blasberg_1975 | irrelevant | 0 | 0 | The study investigates intrathecal pharmacokinetics of other drugs (BCNU, etc.) in rhesus monkeys and does not report data for nimustine. |
| popPK | Chamberlain_2002 | irrelevant | 0 | 0 | The study investigates CPT-11 (irinotecan) and lists BCNU (lomustine, not nimustine) as prior therapy, containing no pharmacokinetic data for nimustine. |
| popPK | Choi_2005 | irrelevant | 0 | 0 | The study focuses on dihydroisoxazole derivatives as inhibitors of transglutaminase 2, and nimustine is not mentioned or studied. |
| popPK | Clemons_2003 | irrelevant | 3 | 0 | Nimustine (BCNU) is mentioned only as a co-administered agent in a combination therapy study where the primary pharmacokinetic focus is on DTIC and its metabolite AIC, with no quantitative PK parameters reported for nimustine itself. |
| popPK | Dorr_1989 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of carmustine (BCNU), not nimustine, and nimustine is not mentioned. |
| PGx | Evers_2010 | not_relevant | 1 | 0 | The paper describes the differential efficacy (antitumor activity) of nimustine in BRCA2-deficient models compared to controls, which is a pharmacodynamic outcome, but it does not report changes in specific PK parameters (like AUC, Cmax) or quantified PD biomarkers attributable to the genetic status in a pharmacogenomic context. |
| popPK | Freed_1982 | irrelevant | 0 | 0 | The paper studies the distribution of BCNU (carmustine), not nimustine. |
| popPK | Gabelman_1986 | irrelevant | 0 | 0 | The study investigates the cytotoxic effects and morphological changes of BCNU (a different nitrosourea) on murine cells in vitro, not the pharmacokinetics of nimustine. |
| popPK | Greenberg_1984 | irrelevant | 0 | 0 | The study is a clinical efficacy report on intra-arterial BCNU (carmustine), not nimustine, and lacks quantitative PK parameter values. |
| PD | Gröhn_1992 | not_relevant | 0 | 0 | The paper is a clinical phase II trial reporting response rates and survival outcomes without any pharmacokinetic or pharmacodynamic modeling or numeric exposure-response parameters. |
| PD | Guo_2016 | not_relevant | 1 | 1 | The paper reports a single IC50 value for nimustine as a positive control in a cell viability assay, which is a static potency metric rather than an extractable pharmacodynamic (exposure-response) relationship or model. |
| popPK | Hamstra_2005 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of BCNU (carmustine), not nimustine. |
| popPK | Hartley-Asp_1988 | irrelevant | 0 | 0 | The paper investigates tauromustine (TCNU), not nimustine (CCNU); nimustine is only mentioned as a comparator. |
| PD | He_2017 | not_relevant | 3 | 2 | The paper reports a qualitative ranking of drug activity and mentions IC50 values from MTT assays, but does not provide the specific numeric PD parameters or concentration-effect curves for nimustine in the text. |
| popPK | Henner_1986 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for carmustine (BCNU), not nimustine (CCNU), and nimustine is not mentioned as the subject drug. |
| popPK | Honmane_2023 | irrelevant | 0 | 0 | The study is an in-vitro formulation and drug release study for BCNU (carmustine), which is a different drug from nimustine, and does not report in-vivo pharmacokinetic parameters. |
| popPK | Huang_1999 | irrelevant | 1 | 0 | This is a tissue distribution (autoradiography) study, not a systemic pharmacokinetic study, and it does not report compartmental PK parameters like clearance (CL), volume (V), or half-life derived from plasma concentrations. |
| PD | Imaizumi_1993 | not_relevant | 1 | 0 | The paper describes a standardized screening method using single fixed doses to determine maximum tolerance and qualitative tumor growth inhibition, without reporting any concentration-effect data, dose-response curves, or numeric PD parameters for nimustine. |
| popPK | Jeremic_1996 | irrelevant | 0 | 0 | The study is an in-vitro cytogenetic assay (micronucleus induction) assessing chemosensitivity and does not report pharmacokinetic parameters for nimustine. |
| popPK | Jeremić_1996 | irrelevant | 0 | 0 | The study is an in-vitro cytotoxicity/micronucleus assay, not a pharmacokinetic study reporting disposition parameters. |
| PD | Kabuto_1995 | not_relevant | 1 | 0 | The paper focuses on the PD of MX2 (providing IC50 values for MX2) and only qualitatively states that MX2's IC50 is lower than nimustine's, without providing numeric PD parameters or a dose-response curve for nimustine. |
| popPK | Kergueris_1994 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for melphalan, not nimustine. |
| popPK | Kitamura_1996 | irrelevant | 0 | 0 | The study focuses on BCNU (lomustine), not nimustine, and only reports relative half-lives without quantitative population PK parameters for the subject drug. |
| popPK | Kohno_1985 | irrelevant | 0 | 0 | This is an in-vitro cytotoxicity study of nimustine on cell spheroids and does not report any pharmacokinetic parameters. |
| popPK | Köhl_1992 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of etoposide, not nimustine. |
| popPK | Lee_2005 | irrelevant | 1 | 0 | The study focuses on the antitumor activity and release kinetics of BCNU (lomustine) from PLGA wafers, not the pharmacokinetics of nimustine (CCNU). |
| popPK | Levin_1978 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for BCNU (carmustine), not nimustine (CCNU). |
| popPK | Levin_1979 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of BCNU, CCNU, and PCNU, not nimustine. |
| popPK | Lu_2012 | irrelevant | 1 | 0 | This is an in-vitro study on drug delivery formulations and stability, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Merouani_1996 | irrelevant | 0 | 0 | The study focuses on renal and hepatic complications in breast cancer patients receiving high-dose chemotherapy, with no pharmacokinetic parameters reported for nimustine. |
| PD | Morikawa_1999 | not_relevant | 0 | 0 | The paper reports pharmacokinetic parameters (AUC, Cmax, half-life) for methotrexate, not pharmacodynamic or exposure-response relationships for nimustine. |
| PD | Ohtsu_1989 | not_relevant | 0 | 0 | The paper reports IC50 values for various drugs including nimustine to characterize multidrug resistance phenotypes, but it does not report a pharmacodynamic (exposure-response or dose-response) relationship with numeric PD parameters (e.g., Emax, EC50, slope) for nimustine specifically in the context of PK/PD modeling. |
| popPK | Qiu_2003 | irrelevant | 0 | 0 | The paper studies the pharmacology and in-vitro kinetics of a novel nitrosourea (FD137), not nimustine, and provides no population pharmacokinetic parameters for nimustine. |
| PD | Saito_2020 | not_relevant | 2 | 0 | The paper is a Phase I dose-escalation trial reporting safety and qualitative efficacy (radiographic changes/survival) but does not provide numeric concentration-effect data, PK/PD modeling, or specific PD parameters like Emax or EC50. |
| popPK | Schacht_1981 | irrelevant | 0 | 0 | The study focuses on the nephrotoxicity of BCNU and methyl CCNU, not nimustine, and contains no pharmacokinetic parameters. |
| popPK | Schold_1984 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics and efficacy of diaziquone, not nimustine. |
| popPK | Schold_2000 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters only for temozolomide, while nimustine is a different drug not analyzed in this paper. |
| popPK | Sipos_1997 | irrelevant | 0 | 0 | The study focuses on the delivery kinetics and efficacy of a different drug (BCNU/carmustine), not nimustine. |
| PD | Sukhbaatar_2023 | not_relevant | 1 | 0 | The text describes a delivery system study with qualitative improvements in accumulation and efficacy but provides no numeric PD parameters, dose-response curves, or exposure-response analysis. |
| popPK | Supko_2001 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of SarCNU, a different nitrosourea drug, and does not report any data for nimustine. |
| PD | Takahashi_2014 | not_relevant | 2 | 1 | The paper is a Phase I dose-escalation study reporting MTD and toxicity grades (neutropenia/thrombocytopenia) but does not provide a quantitative exposure-response or dose-response model with numeric PD parameters (e.g., Emax, EC50) or concentration-effect curves. |
| PD | Tanioka_2010 | not_relevant | 1 | 0 | The paper reports qualitative chemosensitivity percentages (0% for nimustine) from an in vitro assay but does not provide numeric PD parameters (e.g., IC50, Emax) or a concentration-effect curve for nimustine. |
| popPK | Tserng_2003 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for O6-benzylguanine and its metabolite, not for nimustine. |
| PGx | Udagawa_2018 | not_relevant | 6 | 3 | The paper reports associations between SNVs and tumor response (PD) to nimustine in xenografts, but does not provide fitted effect sizes or quantitative PK/PD parameter changes. |
| popPK | Ueda-Kawamitsu_2002 | irrelevant | 0 | 0 | The study investigates BCNU, not nimustine, and is an in-vitro mechanistic study, not a clinical PK study for the subject drug. |
| popPK | Wilson_1982 | irrelevant | 0 | 0 | The study focuses on antipyrine metabolism in mice, not nimustine. |
| PD | Wolff_1999 | not_relevant | 3 | 5 | The paper is a meta-analysis reporting a single summary LC50 value (48.9 mg/l) for nimustine, which is a static potency metric rather than a dynamic exposure-response or dose-response relationship with derivable PD parameters like Emax or slope. |
| popPK | Yang_1989 | irrelevant | 0 | 0 | The paper studies BCNU (lomustine), not nimustine. |
| PD | Zenke_1996 | not_relevant | 1 | 0 | The paper reports a qualitative increase in intra-tumor nimustine concentration due to diltiazem co-administration but provides no numeric concentration-effect or dose-response parameters for nimustine itself. |
| popPK | unknown_2018 | irrelevant | 0 | 0 | no_text gate: only 83 chars of text extracted (&lt; 400) |
| PD | unknown_2018 | not_relevant | 0 | 0 | The provided text is only a conference header and does not contain any data, analysis, or parameters regarding nimustine pharmacodynamics. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 16:18 UTC</sub>
