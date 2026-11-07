<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;danaparoid&quot;}]"></div>

# danaparoid

- **generic name:** danaparoid
- **ATC codes:** `B01AB09`
- **DrugBank:** [DB06754](https://go.drugbank.com/drugs/DB06754) · **PubChem:** none
- **groups:** approved, withdrawn

## About

Danaparoid is an anticoagulant of the heparin group used to prevent and treat blood clots. It was approved at one time but has since been withdrawn and is no longer in general use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q906271](https://www.wikidata.org/wiki/Q906271) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=danaparoid).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: SERPINC1 (positive allosteric modulator).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-13 12:41 | 1:58 | 0/0/0 | 0/0/0 | 0/0/0 | 21,729/1,671 | einfracz / qwen3.8-27b | 22 | 17/4 | 6/16 | 0 |

## Coverage

- **PubMed hits:** 30 matched, 53 returned
- **screened:** 5  ·  **relevant:** 4
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ishida_1998.pdf` | Ishida M et al., Pharmacokinetics of danaparoid sodium,…, Arzneimittel-Forschung (1998) | popPK | 8 |  | [9748709](https://pubmed.ncbi.nlm.nih.gov/9748709) | The study reports quantitative pharmacokinetic parameters (half-life, AUC, renal excretion) for danaparoid in rabbits, with specific numeric values provided in the text. |
| `Polkinghorne_2002.pdf` | Polkinghorne KR et al., Pharmacokinetic studies of dalteparin (…, American journal of kidney… (2002) | popPK | 5 | [10.1053/ajkd.2002.36331](https://doi.org/10.1053/ajkd.2002.36331) | [12407644](https://pubmed.ncbi.nlm.nih.gov/12407644) | The study reports antifactor Xa activity (pharmacodynamic response) rather than quantitative pharmacokinetic parameters like clearance, volume of distribution, or half-life. |

<sub>queue written 2026-10-13 12:40 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Acostamadiedo_2000 | irrelevant | 0 | 0 | The text is a general overview/review of danaparoid's pharmacology and clinical use, containing no quantitative pharmacokinetic parameters (CL, V, t1/2, etc.). |
| popPK | Alban_2008 | irrelevant | 0 | 0 | The paper is a review discussing the molecular characteristics and general properties of glycosaminoglycan anticoagulants, including danaparoid, but it does not report any quantitative pharmacokinetic parameters or original data. |
| PD | Alban_2008 | not_relevant | 1 | 0 | The text is a qualitative review of glycosaminoglycan anticoagulants and mentions danaparoid's pharmacodynamics only in general terms without providing any numeric PD parameters or exposure-response data. |
| popPK | Bevilacqua_2025 | irrelevant | 2 | 3 | This is a clinical case report describing the management of HIT, not a pharmacokinetic study; it cites literature for half-life values and provides only single-patient anti-Xa activity monitoring data without deriving compartmental PK parameters (CL, V). |
| popPK | Boneu_1996 | irrelevant | 0 | 0 | The paper is a clinical review of glycosaminoglycans and does not report any quantitative pharmacokinetic parameters for danaparoid. |
| popPK | Chong_1991 | irrelevant | 0 | 0 | The paper is a review of drug-induced immune thrombocytopenia and does not report any pharmacokinetic parameters for danaparoid. |
| popPK | Cornet_2011 | irrelevant | 0 | 0 | The study is a mechanistic investigation of coagulation and inflammation in a rat pneumonia model where danaparoid is used as a therapeutic agent, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Danhof_1992 | irrelevant | 0 | 0 | The provided evidence contains only metadata and software logs, with no scientific content or pharmacokinetic data for danaparoid. |
| popPK | Davenport_2007 | irrelevant | 0 | 0 | The paper is a clinical review discussing anticoagulation options and does not report quantitative pharmacokinetic parameters for danaparoid. |
| popPK | De_1991_4 | relevant | 4 | 5 | The study reports pharmacokinetic parameters (CL, V, t1/2) for Org 10172 (danaparoid) based on anti-Xa activity, but the specific numeric values are in Table 2 which is not fully provided in the evidence (only referenced). |
| popPK | Eikelboom_2002 | irrelevant | 0 | 0 | The paper is a clinical review discussing the use of LMWHs and danaparoid, containing no original pharmacokinetic data or quantitative disposition parameters. |
| popPK | Exner_2019 | irrelevant | 0 | 0 | The study is an in-vitro investigation of the specificity of an activated charcoal product on anticoagulants and does not report any pharmacokinetic parameters for danaparoid. |
| PD | Exner_2019 | not_relevant | 0 | 0 | The paper reports that the charcoal product had no effect on danaparoid, but it does not provide any numeric pharmacodynamic parameters (e.g., Emax, EC50) or exposure-response data for danaparoid itself. |
| popPK | Garcia_2012 | irrelevant | 0 | 0 | This is a clinical practice guideline/review that discusses the pharmacology of danaparoid qualitatively but does not report original quantitative pharmacokinetic parameters (CL, V, etc.). |
| PD | Garcia_2012 | not_relevant | 1 | 0 | The text is a qualitative review of the pharmacology of parenteral anticoagulants and does not report any numeric PD parameters or exposure-response data for danaparoid. |
| popPK | Gordon_1990 | irrelevant | 0 | 0 | The paper is a review discussing the clinical use of danaparoid (Org 10172) in stroke and does not report quantitative pharmacokinetic parameters. |
| popPK | GrandMaison_2005 | irrelevant | 1 | 0 | The paper is a clinical review discussing dose adjustments for anticoagulants in renal impairment and explicitly acknowledges a lack of pharmacokinetic data, providing no quantitative PK parameters for danaparoid. |
| popPK | Harenberg_1985 | irrelevant | 0 | 0 | The study investigates the pharmacodynamics of low molecular weight heparin, not danaparoid. |
| popPK | Harenberg_1998 | irrelevant | 0 | 0 | The paper is a review of sulodexide, not danaparoid, and reports pharmacokinetic parameters for sulodexide only. |
| popPK | He_2010 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of fibrin network structure and does not report any pharmacokinetic parameters for danaparoid. |
| PD | He_2010 | not_relevant | 3 | 2 | The paper describes qualitative dose-response trends (steep vs. shallow curves) and effects at therapeutic concentrations but does not provide numeric PD parameters (Emax, EC50) or extractable concentration-effect data points. |
| popPK | Hirsh_2008 | irrelevant | 1 | 0 | The paper is a clinical practice guideline review that discusses danaparoid's pharmacology qualitatively but does not report original quantitative pharmacokinetic parameter values. |
| PD | Hirsh_2008 | not_relevant | 1 | 0 | The text is a clinical practice guideline summary that provides qualitative pharmacological descriptions of danaparoid and other anticoagulants but does not report any numeric PD parameters, concentration-effect curves, or dose-response data. |
| popPK | Hobbelen_1987 | irrelevant | 2 | 2 | The study investigates Org 10172 (a low molecular weight heparinoid), not danaparoid, and reports pharmacodynamic effect half-lives rather than compartmental PK parameters for the target drug. |
| popPK | Ishihara_1995 | irrelevant | 0 | 0 | The study investigates the effect of chitin derivatives on red blood cell clearance in SCID mice and does not involve danaparoid. |
| popPK | Lehot_2006 | irrelevant | 0 | 0 | The paper is a case report on lepirudin and acenocoumarol, where danaparoid is only mentioned as a diagnostic agent for platelet aggregation, with no PK parameters reported. |
| popPK | Lubenow_2001 | irrelevant | 1 | 0 | This is a clinical review of anticoagulants for HIT that mentions danaparoid's half-life qualitatively but does not report quantitative population PK parameters or original disposition data. |
| popPK | Lubenow_2002 | irrelevant | 0 | 0 | The paper is a review of lepirudin in HIT where danaparoid is only mentioned as a comparator without any quantitative pharmacokinetic parameters. |
| PD | Lubenow_2002 | not_relevant | 1 | 0 | The text is a clinical review of hirudin in HIT that mentions danaparoid only as an alternative agent without providing any pharmacodynamic data, exposure-response analysis, or numeric PD parameters. |
| popPK | Lubenow_2003 | irrelevant | 0 | 0 | The paper is a case report on argatroban use, and danaparoid is only mentioned as a less suitable comparator without any pharmacokinetic data. |
| popPK | McKee_1992 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of heparin and heparan sulphate, not danaparoid. |
| popPK | Niksic_2006 | irrelevant | 0 | 0 | The text is a clinical review discussing anticoagulation management in renal failure and does not report any quantitative pharmacokinetic parameters for danaparoid. |
| popPK | Peacock_2016 | irrelevant | 0 | 0 | The paper is a review of Direct-Acting Oral Anticoagulants (DOACs) and does not study danaparoid or report its pharmacokinetic parameters. |
| popPK | Polkinghorne_2002 | irrelevant | 5 | 0 | The study reports antifactor Xa activity (pharmacodynamic response) rather than quantitative pharmacokinetic parameters like clearance, volume of distribution, or half-life. |
| popPK | SCHOEN_1963 | irrelevant | 0 | 0 | no_text gate: only 61 chars of text extracted (&lt; 400) |
| popPK | Schneider_2000 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics/dosing of lepirudin (r-hirudin) in a patient with HIT, where danaparoid is only mentioned as a failed prior therapy. |
| popPK | Schoemaker_1996 | irrelevant | 0 | 0 | The paper discusses pharmacokinetic modeling of enoxaparin and dalteparin, not danaparoid. |
| PD | Schoemaker_1996 | not_relevant | 0 | 0 | The paper discusses danaparoid (or similar LMWHs like enoxaparin/dalteparin) only as a methodological example for NONMEM fitting and does not report specific numeric PD parameters or extractable exposure-response relationships for danaparoid. |
| popPK | Selleng_2016 | irrelevant | 0 | 0 | The paper is a clinical review of heparin-induced thrombocytopenia management and does not report quantitative pharmacokinetic parameters for danaparoid. |
| popPK | Shan_2019 | irrelevant | 0 | 0 | The paper is a review of Propylene glycol alginate sodium sulfate (PSS), not danaparoid, and does not report PK parameters for danaparoid. |
| popPK | Stiekema_1989 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of Org 10172 (a heparinoid), not danaparoid. |
| popPK | Stiekema_1990 | relevant | 8 | 2 | The study reports pharmacokinetic parameters (clearance, half-life, volume) for Org 10172 (danaparoid) in humans, but the specific numeric values are contained in Table 2 which is not fully provided in the evidence. |
| popPK | Tardy-Poncet_2015 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and clinical management of argatroban, with danaparoid mentioned only as a comparator or contraindication context without any quantitative PK parameters reported for it. |
| popPK | Tomer_1999 | irrelevant | 0 | 0 | The paper is a diagnostic study on heparin-induced thrombocytopenia using flow cytometry and does not report any pharmacokinetic parameters for danaparoid. |
| PD | Tomer_1999 | not_relevant | 1 | 0 | The paper describes a diagnostic assay for HIT and mentions a qualitative dose-response neutralization by antibodies, but it does not report any pharmacodynamic exposure-response or dose-response relationship for danaparoid itself with numeric parameters. |
| popPK | WAGENER_1964 | irrelevant | 0 | 0 | no_text gate: only 67 chars of text extracted (&lt; 400) |
| popPK | Weltermann_2003 | irrelevant | 0 | 0 | The paper is a review of novel anticoagulants and does not report original quantitative pharmacokinetic parameters for danaparoid. |
| PD | Weltermann_2003 | not_relevant | 1 | 0 | The text is a general review of novel anticoagulants and mentions danaparoid only in the context of its approval status, without providing any specific pharmacodynamic data, exposure-response relationships, or numeric parameters. |
| popPK | Yu_2017 | irrelevant | 0 | 0 | The paper is a meta-analysis of clinical efficacy (mortality, albuminuria) of heparinoids in diabetic kidney disease and does not report pharmacokinetic parameters for danaparoid. |
| popPK | Zeng_2016 | irrelevant | 0 | 0 | The paper is a review of Propylene Glycol Alginate Sodium Sulfate (PSS), not danaparoid. |
| popPK | de_1991 | relevant | 8 | 4 | The study reports quantitative PK parameters (CL, Vz, t1/2) for Org 10172 (danaparoid) in humans, but the specific numeric values are contained in Table 1 which is not fully rendered in the evidence, with only partial data visible in the text. |
| popPK | de_1991_3 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of Org 10172 (Lomoparan), not danaparoid. |
| popPK | de_2007 | relevant | 4 | 3 | The study reports a derived half-life of 8 hours and concentration-time data for danaparoid during CVVH, but lacks explicit compartmental parameters like clearance (CL) or volume of distribution (V) values. |
| popPK | ten_1985 | irrelevant | 2 | 0 | The study focuses on hemostatic and coagulation effects (platelet aggregation, clotting times) rather than quantitative pharmacokinetic parameters like clearance or volume of distribution for danaparoid. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdanaparoid%5D&body=Drug%3A%20danaparoid%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_danaparoid/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
