<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01C&quot;,&quot;href&quot;:&quot;atc/C01C.md&quot;},{&quot;label&quot;:&quot;prenalterol&quot;}]"></div>

# prenalterol

- **generic name:** prenalterol
- **ATC codes:** `C01CA13`
- **DrugBank:** [DB13777](https://go.drugbank.com/drugs/DB13777) · **PubChem:** not captured
- **molar mass:** 225.288 g/mol (C12H19NO3) — DrugBank
- **groups:** experimental

## About

Prenalterol is a sympathomimetic, beta-1 adrenergic agonist that was investigated as a cardiotonic agent for heart conditions. It is considered experimental and does not appear to be an approved medicine today.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7240518](https://www.wikidata.org/wiki/Q7240518) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-13 12:53 | 1:09 | 0/0/0 | 0/1/0 | 0/0/0 | 48,236/2,412 | einfracz / qwen3.8-27b | 1 | 1/0 | 1/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.8). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span> | [Carlsöö_1981_amylase_secretion](drugs/drug_prenalterol/pd_Carls_1981_amylase_secretion.md) | amylase secretion biomarker turnover ← prenalterol | — | Carlsöö B et al., Characterization of the rat parotid bet…, British journal of pharmaco… (1981) | [10.1111/j.1476-5381.1981.tb09124.x](https://doi.org/10.1111/j.1476-5381.1981.tb09124.x) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=prenalterol).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: ADRB3 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 49 matched, 49 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_11 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Sainsbury_1985.pdf` | Sainsbury EJ et al., Pharmacokinetics and plasma-concentrati…, European journal of clinica… (1985) | popPK | 10 | [10.1007/BF00544357](https://doi.org/10.1007/BF00544357) | [2863151](https://pubmed.ncbi.nlm.nih.gov/2863151) | The title indicates a pharmacokinetic study of prenalterol, but the provided evidence contains only the title and no numeric parameter values. |
| `Klein_1982.pdf` | Klein G et al., Compartment model of prenalterol, Acta medica Scandinavica. S… (1982) | popPK | 9 | [10.1111/j.0954-6820.1982.tb00839.x](https://doi.org/10.1111/j.0954-6820.1982.tb00839.x) | [6127903](https://pubmed.ncbi.nlm.nih.gov/6127903) | The paper describes a compartmental PK model for prenalterol in humans, but the specific numeric parameter values (CL, V, Q) are not present in the provided evidence, only qualitative descriptions of half-lives from previous studies. |
| `Advenier_1985.pdf` | Advenier C et al., The guinea-pig isolated bronchus for th…, British journal of pharmaco… (1985) | pd | 4 | [10.1111/j.1476-5381.1985.tb08905.x](https://doi.org/10.1111/j.1476-5381.1985.tb08905.x) | [4052734](https://www.ncbi.nlm.nih.gov/pubmed/4052734) | metadata signals extractable PD data (EC50) |
| `Ek_1982.pdf` | Ek B et al., Characterization of the beta-adrenergic…, European journal of pharmac… (1982) | pd | 4 | [10.1016/0014-2999(82)90530-1](https://doi.org/10.1016/0014-2999(82)90530-1) | [6120845](https://www.ncbi.nlm.nih.gov/pubmed/6120845) | metadata signals extractable PD data (EC50) |
| `Ek_1985.pdf` | Ek B, Studies on mechanisms for beta-adrenoce…, Acta physiologica Scandinav… (1985) | pd | 4 | not captured | [2869641](https://www.ncbi.nlm.nih.gov/pubmed/2869641) | metadata signals extractable PD data (concentration-effect) |
| `Golf_1986.pdf` | Golf S et al., Relative potencies of various beta-adre…, Scandinavian journal of cli… (1986) | pd | 4 | [10.3109/00365518609083647](https://doi.org/10.3109/00365518609083647) | [2872714](https://www.ncbi.nlm.nih.gov/pubmed/2872714) | metadata signals extractable PD data (IC50) |
| `Mattsson_1983.pdf` | Mattsson H et al., Intrinsic sympathomimetic activity of t…, The Journal of pharmacology… (1983) | pd | 4 | not captured | [6131123](https://www.ncbi.nlm.nih.gov/pubmed/6131123) | metadata signals extractable PD data (EC50) |
| `McElroy_1988.pdf` | McElroy JF et al., Discriminative stimulus properties of c…, The Journal of pharmacology… (1988) | pd | 4 | not captured | [2834535](https://www.ncbi.nlm.nih.gov/pubmed/2834535) | metadata signals extractable PD data (IC50) |
| `Seiler_2008.pdf` | Seiler R et al., Role of selective alpha and beta adrene…, Journal of gastrointestinal… (2008) | pd | 4 | [10.1007/s11605-007-0327-4](https://doi.org/10.1007/s11605-007-0327-4) | [17879122](https://www.ncbi.nlm.nih.gov/pubmed/17879122) | metadata signals extractable PD data (EC50) |
| `Vigholt-Sørensen_1991.pdf` | Vigholt-Sørensen E et al., Comparative effects of beta-adrenocepto…, Pharmacology & toxicology (1991) | pd | 4 | [10.1111/j.1600-0773.1991.tb01309.x](https://doi.org/10.1111/j.1600-0773.1991.tb01309.x) | [1687080](https://www.ncbi.nlm.nih.gov/pubmed/1687080) | metadata signals extractable PD data (EC50) |
| `Wilson_1984.pdf` | Wilson C et al., The rat lipolytic beta-adrenoceptor: st…, European journal of pharmac… (1984) | pd | 4 | [10.1016/0014-2999(84)90007-4](https://doi.org/10.1016/0014-2999(84)90007-4) | [6145597](https://www.ncbi.nlm.nih.gov/pubmed/6145597) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-13T12:52:38.819091+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Advenier_1985 | irrelevant | 0 | 0 | no_text gate: only 90 chars of text extracted (&lt; 400) |
| PD | Advenier_1985 | not_relevant | 0 | 0 | The provided text is a title describing an in vitro study setup and does not contain any data, results, or numeric parameters for prenalterol. |
| popPK | Awan_1982 | irrelevant | 0 | 0 | The study reports hemodynamic effects of prenalterol in heart failure patients but contains no pharmacokinetic parameters (e.g., clearance, volume of distribution, half-life). |
| popPK | Baumann_1984 | irrelevant | 0 | 0 | The study is a mechanistic investigation of receptor binding and cardiac contractility in animal models, not a pharmacokinetic study, and prenalterol is used only as a therapeutic comparator. |
| PD | Baumann_1984 | not_relevant | 2 | 1 | The paper describes qualitative changes in dose-response curves (depression of isoproterenol response) and receptor binding characteristics but does not provide numeric PD parameters (Emax, EC50) or extractable concentration-effect data for prenalterol. |
| popPK | Bristow_1989 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of receptor-mediated adenylate cyclase stimulation and does not report pharmacokinetic parameters for prenalterol. |
| popPK | Carlsöö_1981 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of amylase secretion in rat parotid glands, reporting ED50 values and receptor potency rather than pharmacokinetic disposition parameters. |
| popPK | Ek_1982 | irrelevant | 0 | 0 | no_text gate: only 82 chars of text extracted (&lt; 400) |
| PD | Ek_1982 | not_relevant | 0 | 0 | The paper studies beta-adrenergic inhibition in cat colon strips and does not mention prenalterol or report any exposure-response or dose-response data for it. |
| popPK | Ek_1985 | irrelevant | 0 | 0 | The study is a mechanistic investigation of beta-adrenoceptor mediated colon motility in vitro, containing no pharmacokinetic disposition parameters. |
| popPK | Fitzpatrick_1983 | irrelevant | 2 | 0 | The study reports steady-state plasma concentrations and hemodynamic effects but does not provide quantitative pharmacokinetic disposition parameters such as clearance, volume of distribution, or half-life. |
| popPK | Golf_1986 | irrelevant | 0 | 0 | The paper focuses on the relative potencies and intrinsic sympathomimetic activity of beta-adrenoceptor antagonists, not the pharmacokinetics of prenalterol. |
| PD | Golf_1986 | not_relevant | 0 | 0 | The paper focuses on beta-adrenoceptor antagonists and does not report pharmacodynamic or exposure-response data for prenalterol. |
| popPK | Heaslip_1986 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of tracheal relaxation mechanisms, not a pharmacokinetic study, and reports no disposition parameters for prenalterol. |
| popPK | Hedberg_1981 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of beta-adrenoceptor interactions and does not report any pharmacokinetic parameters for prenalterol. |
| popPK | Hendry_1984 | irrelevant | 0 | 0 | The paper is a clinical dose-response study focusing on efficacy (exercise tolerance) and safety, reporting no quantitative pharmacokinetic parameters such as clearance, volume, or half-life values. |
| PD | Hendry_1984 | not_relevant | 4 | 2 | The paper reports a qualitative dose-response relationship (improvement up to 100 mg) but does not provide numeric PD parameters (e.g., EC50, Emax) or a quantitative concentration-effect curve in the provided text. |
| popPK | Imhof_1987 | irrelevant | 0 | 0 | The study is a pharmacodynamic profiling of cardiovascular effects (hemodynamics) and does not report any pharmacokinetic parameters for prenalterol. |
| PD | Imhof_1987 | not_relevant | 2 | 1 | The paper describes a qualitative pharmacological profiling study to distinguish drug effects but does not report numeric PD parameters (Emax, EC50) or quantitative exposure-response curves for prenalterol. |
| popPK | Johansson_1988 | irrelevant | 0 | 0 | The study focuses on cardiovascular reactivity and dose-response relationships (CD50) rather than pharmacokinetic disposition parameters like clearance or volume. |
| popPK | Johnsson_1982 | irrelevant | 0 | 0 | The paper focuses on pharmacodynamic effects (myocardial contractility, heart rate, lipolysis) and does not report quantitative pharmacokinetic parameters such as clearance, volume, or half-life. |
| PD | Johnsson_1982 | not_relevant | 3 | 1 | The text describes qualitative dose-dependent effects and a 10-fold dose increase with beta-blockers, but provides no numeric concentration-effect data, Emax, EC50, or derivable PD parameters. |
| popPK | Keenan_1995 | irrelevant | 0 | 0 | The study investigates magnesium homeostasis in rats using prenalterol only as a pharmacological probe/comparator, not for pharmacokinetic parameter estimation. |
| PD | Keenan_1995 | not_relevant | 4 | 5 | The paper reports numeric PD parameters (Emax, EC50) for isoproterenol, but explicitly states that prenalterol did not induce the effect, so no PD relationship is reported for the target drug. |
| popPK | Kirby_1990 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of plasma renin activity in rats, and while prenalterol is used as an agent, no pharmacokinetic parameters (clearance, volume, half-life, etc.) for prenalterol are reported. |
| popPK | Klein_1982 | relevant | 9 | 2 | The paper describes a compartmental PK model for prenalterol in humans, but the specific numeric parameter values (CL, V, Q) are not present in the provided evidence, only qualitative descriptions of half-lives from previous studies. |
| popPK | Löfdahl_1982 | irrelevant | 0 | 0 | The study focuses on bronchial and hemodynamic effects (FEV1, heart rate) rather than pharmacokinetic disposition parameters. |
| PD | Löfdahl_1982 | not_relevant | 4 | 2 | The paper describes a dose-response shift for terbutaline after inhaled prenalterol, but the provided text contains no numeric PD parameters (EC50, Emax, shift factors) or data points to derive them. |
| popPK | Makhay_1999 | irrelevant | 0 | 0 | This is a behavioral pharmacology study on discriminative stimulus effects in rats, not a pharmacokinetic study reporting disposition parameters for prenalterol. |
| popPK | Malinowska_1996 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of adrenoceptor mediation in pithed rats and does not report any pharmacokinetic parameters for prenalterol. |
| popPK | Malinowska_2003 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of beta-adrenoceptor antagonism in rats, and prenalterol is used only as a probe agonist, with no pharmacokinetic parameters reported. |
| PD | Malinowska_2003 | not_relevant | 3 | 2 | The paper reports dose-response data for CGP 12177 and bupranolol analogues, but only qualitatively describes the effect of prenalterol (antagonized by BK-26/BEV) without providing numeric PD parameters or a concentration-effect curve for prenalterol itself. |
| popPK | Mattsson_1983 | irrelevant | 0 | 0 | no_text gate: only 143 chars of text extracted (&lt; 400) |
| popPK | McElroy_1988 | irrelevant | 0 | 0 | This is a behavioral pharmacology study on rats measuring discriminative stimulus properties, not a pharmacokinetic study, and prenalterol is used only as a comparator agent. |
| popPK | Morris_1985 | irrelevant | 0 | 0 | Prenalterol is used only as an ineffective beta-1 control agent in a neuropharmacology study on ornithine decarboxylase, with no pharmacokinetic data provided. |
| popPK | Naito_1985 | irrelevant | 0 | 0 | The study characterizes receptor binding affinity (Ki) of denopamine with prenalterol as a comparator, not pharmacokinetic disposition parameters. |
| PD | Naito_1985 | not_relevant | 0 | 0 | The paper reports in vitro receptor binding affinities (Ki values) for denopamine and prenalterol, not pharmacodynamic exposure-response or dose-response relationships in a physiological or clinical context. |
| popPK | ODonnell_1990 | irrelevant | 0 | 0 | The study is a behavioral pharmacology experiment in rats focusing on receptor down-regulation and does not report any pharmacokinetic parameters for prenalterol. |
| PD | ODonnell_1990 | not_relevant | 1 | 0 | The paper reports that prenalterol's effects were unaltered by clenbuterol treatment but provides no numeric dose-response parameters or concentration-effect data for prenalterol. |
| popPK | Ogilvie_1982 | irrelevant | 0 | 0 | The study investigates hemodynamic effects (arterial resistance, venous compliance) rather than pharmacokinetic disposition parameters (CL, V, ka) for prenalterol. |
| popPK | Rasmussen_1984 | irrelevant | 2 | 0 | The study focuses on acute hemodynamic effects and dose-response, mentioning plasma concentrations only qualitatively without providing quantitative pharmacokinetic parameters like clearance or volume. |
| popPK | Rothwell_1986 | irrelevant | 0 | 0 | The study investigates thermogenic responses and adrenoceptor binding densities in rats using prenalterol as a pharmacological probe, rather than measuring its pharmacokinetic disposition parameters. |
| popPK | Sainsbury_1985 | relevant | 10 | 0 | The title indicates a pharmacokinetic study of prenalterol, but the provided evidence contains only the title and no numeric parameter values. |
| popPK | Seiler_2008 | irrelevant | 0 | 0 | no_text gate: only 112 chars of text extracted (&lt; 400) |
| PD | Seiler_2008 | not_relevant | 0 | 0 | The paper investigates the role of adrenergic receptors in rat jejunal muscle contractility and does not mention prenalterol or report any exposure-response or dose-response data for it. |
| popPK | Sørensen_1990 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic investigation of isolated atria and does not report any pharmacokinetic parameters for prenalterol. |
| PD | Sørensen_1990 | not_relevant | 2 | 1 | The paper discusses dose-activity relationships qualitatively and mentions prenalterol's response time, but it does not provide numeric PD parameters (e.g., EC50, Emax) or extractable concentration-effect curves for prenalterol. |
| popPK | Tan_1983 | irrelevant | 0 | 0 | The paper describes in vitro receptor binding/lipolysis studies in rat adipose tissue, not a pharmacokinetic study of prenalterol. |
| popPK | Vigholt-Sørensen_1991 | irrelevant | 0 | 0 | no_text gate: only 80 chars of text extracted (&lt; 400) |
| PD | Vigholt-Sørensen_1991 | not_relevant | 0 | 0 | The paper studies beta-adrenoceptor partial agonists on isolated rat atrium but does not report specific pharmacodynamic or exposure-response data for prenalterol. |
| popPK | Wangemann_1999 | irrelevant | 0 | 0 | The study is a pharmacological investigation of receptor function in inner ear cells, not a pharmacokinetic study, and reports no disposition parameters for prenalterol. |
| popPK | Wesslau_1992 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of receptor signaling in rat adipocytes and does not report pharmacokinetic disposition parameters. |
| popPK | Wilson_1984 | irrelevant | 0 | 0 | no_text gate: only 83 chars of text extracted (&lt; 400) |
| PD | Wilson_1984 | not_relevant | 0 | 0 | The paper focuses on the characterization of beta-adrenoceptors in rat adipocytes using various agonists, but does not report a pharmacokinetic-pharmacodynamic (PK/PD) model or exposure-response relationship for prenalterol with numeric PD parameters. |
| popPK | Winther_1985 | irrelevant | 0 | 0 | The study is a mechanistic in-vitro investigation of platelet beta-adrenoceptors and does not report any pharmacokinetic parameters for prenalterol. |
| PD | Winther_1985 | not_relevant | 1 | 0 | The paper reports that prenalterol did not stimulate cAMP formation (a qualitative negative result) and provides IC50 values for antagonists, but it does not report a dose-response curve or numeric PD parameters (like Emax or EC50) for prenalterol. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
