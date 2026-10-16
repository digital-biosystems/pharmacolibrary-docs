<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;ipragliflozin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ipragliflozin_Saito2019_reference&quot;,&quot;label&quot;:&quot;Saito_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ipragliflozin/Ipragliflozin_Saito2019_reference.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Saito_2019_UGE24h&quot;,&quot;label&quot;:&quot;Saito_2019 \u00b7 \u0394UGE24h&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_ipragliflozin/pd_Saito_2019_UGE24h.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# ipragliflozin

- **generic name:** ipragliflozin
- **ATC codes:** `A10BK05`
- **DrugBank:** [DB11698](https://go.drugbank.com/drugs/DB11698) · **PubChem:** [CID 10453870](https://pubchem.ncbi.nlm.nih.gov/compound/10453870)
- **molar mass:** 404.45 g/mol (C21H21FO5S) — DrugBank
- **groups:** investigational

## About

Ipragliflozin is a sodium-glucose co-transporter 2 inhibitor, a class of blood glucose-lowering drugs developed for diabetes. It is not authorised in the European Union and is considered investigational, though it has been used in Japan.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q17193526](https://www.wikidata.org/wiki/Q17193526) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| ipragliflozin | parent | 404.45 | C21H21FO5S | DrugBank | [10453870](https://pubchem.ncbi.nlm.nih.gov/compound/10453870) | Saito_2019 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 23:39 | 2:33 | 1/0/0 | 1/0/1 | 0/0/0 | 211,619/12,252 | einfracz / qwen3.8-27b | 8 | 2/5 | 7/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.167), gpt-oss:120b (not confirmed, agreement 0.2). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub> | [Saito_2019_reference](drugs/drug_ipragliflozin/Ipragliflozin_Saito2019_reference.md) | ▶ model + simulator | 2-compartment, oral | 6 (+1 cov.) | Saito M et al., Pharmacokinetic and pharmacodynamic mod…, British journal of clinical… (2019) | [10.1111/bcp.13972](https://doi.org/10.1111/bcp.13972) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.8). Primary extraction retained.">cross-check: disputed</span> | [Demin_2014_SGLT2_inhibition_level](drugs/drug_ipragliflozin/pd_Demin_2014_SGLT2_inhibition_level.md) | Inhibition of glucose reabsorption mediated by SGLT2 ← ipragliflozin · direct Emax (saturable) effect | — | Demin O et al., Analysis of the efficacy of SGLT2 inhib…, Frontiers in pharmacology (2014) | [10.3389/fphar.2014.00218](https://doi.org/10.3389/fphar.2014.00218) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span> | [Saito_2019_UGE24h](drugs/drug_ipragliflozin/pd_Saito_2019_UGE24h.md) | change from baseline in UGE for 24 hours ← ipragliflozin · direct Emax (saturable) effect | ▶ model + simulator | Saito M et al., Pharmacokinetic and pharmacodynamic mod…, British journal of clinical… (2019) | [10.1111/bcp.13972](https://doi.org/10.1111/bcp.13972) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=ipragliflozin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| — | kidney | `SLC5A2` modulator | DrugBank actor |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 42 matched, 40 returned
- **screened:** 2  ·  **relevant:** 1
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Toyoshima_2020.pdf` | Toyoshima J et al., Comparison of the Pharmacokinetic and P…, Clinical therapeutics (2020) | popPK | 8 | [10.1016/j.clinthera.2020.07.009](https://doi.org/10.1016/j.clinthera.2020.07.009) | [32839028](https://pubmed.ncbi.nlm.nih.gov/32839028) | The paper reports PK/PD parameters (AUC, Emax, EX50) for ipragliflozin in humans, but the specific compartmental disposition parameters (CL, V, ka) are not provided in the extracted text, only summary PK metrics. |

<sub>queue written 2026-10-14T23:37:37.559206+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alkabbani_2021 | irrelevant | 2 | 0 | The paper is a narrative review summarizing efficacy and safety, and while it mentions the pharmacokinetic profile, it does not provide original quantitative disposition parameters (CL, V, etc.) in the provided evidence. |
| PD | Alkabbani_2021 | not_relevant | 2 | 0 | The paper is a narrative review summarizing clinical efficacy and safety, and while it mentions the pharmacodynamic profile, it does not provide specific numeric PD parameters (e.g., Emax, EC50) or exposure-response curves in the provided text. |
| popPK | Bardaweel_2022 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on cancer cell lines reporting IC50 values, not a pharmacokinetic study with disposition parameters. |
| popPK | Choi_2020 | irrelevant | 2 | 0 | The paper compares a novel drug (DWP16001) with ipragliflozin, making ipragliflozin a comparator rather than the primary subject, and no quantitative PK parameter values for ipragliflozin are present in the provided evidence. |
| PD | Choi_2020 | not_relevant | 0 | 0 | The provided text is only the title of a comparative study and does not contain the full text, data, or numeric PD parameters required to assess the pharmacodynamic relationship for ipragliflozin. |
| popPK | Demin_2014 | relevant | 8 | 2 | The paper presents a semi-mechanistic PK/PD model for ipragliflozin and reports a specific renal clearance value (1.88 mL/min) in the text, but the full set of compartmental parameters (CL, V, Q, ka) is located in Supplementary Table 1 which is not provided. |
| popPK | Faillie_2017 | irrelevant | 0 | 0 | The paper is a review of the pharmacological safety of gliflozins and does not report original quantitative pharmacokinetic parameters for ipragliflozin. |
| PD | Faillie_2017 | not_relevant | 1 | 0 | The paper is a qualitative review of the pharmacological safety of gliflozins and does not report specific numeric PD parameters or exposure-response data for ipragliflozin. |
| popPK | Ferrannini_2013 | irrelevant | 1 | 0 | The study focuses on pharmacodynamics (glycosuria) and renal function, reporting no quantitative pharmacokinetic parameters (CL, V, ka, etc.) for ipragliflozin. |
| popPK | Guo_2025 | irrelevant | 2 | 0 | The study is a PBPK modeling simulation for multiple SGLT2 inhibitors and does not report original quantitative disposition parameters (CL, V, Q, ka) for ipragliflozin in the provided evidence. |
| PD | Guo_2025 | not_relevant | 4 | 2 | The paper describes a PBPK/PD simulation study that validates the model against observed data but does not report specific numeric PD parameters (e.g., Emax, EC50) or an explicit concentration-effect curve for ipragliflozin in the provided text. |
| popPK | Hedrington_2015 | irrelevant | 2 | 0 | The paper is a review/perspective that discusses PK qualitatively but does not provide original quantitative disposition parameters or numeric values in the provided evidence. |
| PD | Hedrington_2015 | not_relevant | 2 | 1 | The text is a review summary that qualitatively mentions pharmacodynamics and efficacy (HbA1c reduction) but does not provide specific numeric PD parameters, concentration-effect curves, or dose-response data. |
| popPK | Inoue_2019 | irrelevant | 0 | 0 | The study is a model-based meta-analysis of glycaemic efficacy (FPG/HbA1c) for various drug classes and does not report pharmacokinetic parameters (CL, V, etc.) for ipragliflozin. |
| PD | Inoue_2019 | not_relevant | 0 | 0 | The paper is a model-based meta-analysis of efficacy (FPG/HbA1c) and does not report pharmacokinetic data or exposure-response/PD parameters for ipragliflozin. |
| popPK | Jiang_2024 | irrelevant | 0 | 0 | The study focuses on empagliflozin, not ipragliflozin. |
| PD | Jiang_2024 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) study comparing two formulations of empagliflozin, with no pharmacodynamic (PD) or exposure-response analysis. |
| popPK | Kadokura_2014 | relevant | 4 | 2 | The study reports standard non-compartmental PK parameters (AUC, Cmax, tmax) for ipragliflozin, but lacks the specific compartmental or population PK parameters (CL, V, Q, ka) required for the extraction task, and specific numeric values are not explicitly listed in the provided text. |
| popPK | Kadokura_2014_2 | irrelevant | 2 | 0 | The paper is a review that summarizes qualitative trends and relative changes (e.g., AUC increases) but does not report specific quantitative disposition parameters (CL, V, ka) or population PK model values for ipragliflozin. |
| PD | Kadokura_2014_2 | not_relevant | 3 | 2 | The text is a review that qualitatively describes dose-dependent effects and saturation (max effect at 50-100 mg) but does not provide specific numeric PD parameters (e.g., EC50, Emax values) or a formal PK/PD model fit. |
| popPK | Kaku_2019 | irrelevant | 2 | 0 | The study reports only summary PK metrics (AUC, Cmax) and renal clearance without specific numeric values or compartmental/population PK parameters (CL, V, ka) for ipragliflozin. |
| popPK | Kashiwagi_2014 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial reporting glycemic control outcomes (HbA1c, glucose) and does not contain pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Kong_2023 | irrelevant | 0 | 0 | The paper is an in silico molecular docking study where ipragliflozin is used only as a reference compound with an IC50 value, and no pharmacokinetic disposition parameters are reported. |
| PD | Kong_2023 | not_relevant | 1 | 0 | The paper is an in silico study using molecular docking and dynamics; it cites a literature IC50 for ipragliflozin but does not report or derive any exposure-response or dose-response relationship for the drug. |
| popPK | Lo_2018 | irrelevant | 0 | 0 | The paper is a clinical review of glucose-lowering agents (efficacy/safety) in diabetes and CKD, not a pharmacokinetic study of ipragliflozin. |
| PD | Lo_2018 | not_relevant | 0 | 0 | The paper is a systematic review of clinical trials in CKD and reports aggregate efficacy/safety outcomes (e.g., HbA1c reduction) without any pharmacokinetic data, exposure-response modeling, or numeric PD parameters for ipragliflozin. |
| popPK | Maurer_2011 | irrelevant | 0 | 0 | The study focuses on the PK/PD model of dapagliflozin, not ipragliflozin. |
| PD | Maurer_2011 | not_relevant | 0 | 0 | The paper focuses on the pharmacodynamic modeling of dapagliflozin, not ipragliflozin. |
| popPK | Saito_2020 | irrelevant | 0 | 0 | The paper presents a pharmacodynamic (PD) and disease progression model for ipragliflozin's glucose-lowering effects, not a population pharmacokinetic (PK) model, and does not report PK parameters like CL or V. |
| popPK | Sato_2024 | irrelevant | 0 | 0 | The study is a model-based meta-analysis of HbA1c reduction (pharmacodynamics/efficacy) rather than a pharmacokinetic study, and it does not report quantitative PK parameters (CL, V, ka) for ipragliflozin. |
| popPK | Scheen_2015 | irrelevant | 1 | 0 | The paper is a narrative review that describes general pharmacokinetic characteristics qualitatively but does not report specific quantitative disposition parameters (CL, V, etc.) for ipragliflozin. |
| PD | Scheen_2015 | not_relevant | 1 | 0 | The text is a qualitative review summarizing general PK/PD trends of SGLT2 inhibitors in CKD without providing specific numeric PD parameters or concentration-effect curves for ipragliflozin. |
| popPK | Scheen_2015_2 | irrelevant | 0 | 0 | The paper is a review of SGLT2 inhibitors that provides only qualitative descriptions of pharmacokinetic characteristics without reporting any quantitative disposition parameters for ipragliflozin. |
| PD | Scheen_2015_2 | not_relevant | 1 | 0 | The text is a general review of SGLT2 inhibitors that describes the mechanism of action and clinical efficacy qualitatively but does not provide specific numeric pharmacodynamic parameters (e.g., Emax, EC50) or exposure-response data for ipragliflozin. |
| popPK | Schwartz_2011 | irrelevant | 2 | 0 | The study reports qualitative PK descriptions (rapid absorption, dose linearity) but lacks quantitative disposition parameters (CL, V, ka) or compartmental model values in the provided evidence. |
| popPK | Tahara_2016 | irrelevant | 2 | 0 | The study is an animal (mouse) pharmacodynamic comparison that classifies drugs by duration of effect but does not report quantitative human PK parameters (CL, V, ka) for ipragliflozin in the provided evidence. |
| PD | Tahara_2016 | not_relevant | 2 | 1 | The text is an abstract describing a comparative study in mice that classifies drugs by duration of action but does not provide specific numeric PD parameters (e.g., Emax, EC50) or explicit concentration-effect curves for ipragliflozin. |
| popPK | Tahara_2016_2 | irrelevant | 1 | 0 | The study focuses on antidiabetic pharmacodynamic effects in mice and does not report quantitative pharmacokinetic parameters for ipragliflozin. |
| PD | Tahara_2016_2 | not_relevant | 2 | 1 | The text describes qualitative antidiabetic effects and relative potency comparisons in mice but does not provide numeric PD parameters (e.g., EC50, Emax) or specific concentration-effect data for ipragliflozin. |
| popPK | Tanaka_2023 | irrelevant | 0 | 0 | The study reports clinical outcomes regarding estimated fluid volume (hemodynamics) rather than pharmacokinetic disposition parameters (CL, V, ka) for ipragliflozin. |
| PGx | Toyoki_2017 | not_relevant | 0 | 0 | The paper investigates the mechanism by which insulin affects uric acid transporters (URAT1, ABCG2) and does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of ipragliflozin. |
| popPK | Toyoshima_2020 | relevant | 8 | 2 | The paper reports PK/PD parameters (AUC, Emax, EX50) for ipragliflozin in humans, but the specific compartmental disposition parameters (CL, V, ka) are not provided in the extracted text, only summary PK metrics. |
| popPK | Veltkamp_2011 | relevant | 4 | 2 | The study reports basic PK parameters (tmax, t1/2) for ipragliflozin, but lacks quantitative disposition parameters like clearance (CL) or volume (V) required for population-PK modeling. |
| popPK | Veltkamp_2012 | irrelevant | 2 | 0 | The study focuses on the safety of combination therapy and the effect of ipragliflozin on metformin PK, without reporting quantitative disposition parameters (CL, V, etc.) for ipragliflozin itself. |
| PD | Veltkamp_2012 | not_relevant | 2 | 1 | The study reports a single dose (300 mg) effect on urinary glucose excretion (UGE) but does not provide a concentration-effect curve, multiple dose levels, or formal PK/PD modeling parameters (e.g., Emax, EC50). |
| popPK | Wang_2022 | irrelevant | 0 | 0 | The study reports pharmacodynamic parameters (E_max, ET50) for body weight changes, not pharmacokinetic parameters (CL, V, ka) for ipragliflozin. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 23:37 UTC</sub>
