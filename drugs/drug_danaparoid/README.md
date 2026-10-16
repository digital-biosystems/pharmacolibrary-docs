<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;danaparoid&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Danaparoid_Stiekema1990_reference&quot;,&quot;label&quot;:&quot;Stiekema_1990_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_danaparoid/Danaparoid_Stiekema1990_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Danaparoid_de1991v2_reference&quot;,&quot;label&quot;:&quot;de_1991_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_danaparoid/Danaparoid_de1991v2_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Danaparoid_De1991v4_reference&quot;,&quot;label&quot;:&quot;De_1991_4_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_danaparoid/Danaparoid_De1991v4_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# danaparoid

- **generic name:** danaparoid
- **ATC codes:** `B01AB09`
- **DrugBank:** [DB06754](https://go.drugbank.com/drugs/DB06754) · **PubChem:** not captured
- **groups:** approved, withdrawn

## About

Danaparoid is an anticoagulant of the heparin group used to prevent and treat blood clots. It was approved at one time but has since been withdrawn and is no longer in general use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q906271](https://www.wikidata.org/wiki/Q906271) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 22:58 | 7:59 | 2/1/1 | 0/0/0 | 0/0/0 | 571,146/39,964 | einfracz / qwen3.8-27b | 22 | 17/4 | 6/16 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Stiekema_1990_reference](drugs/drug_danaparoid/Danaparoid_Stiekema1990_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Stiekema JC et al., Interaction of the combined medication…, Haemostasis (1990) | [10.1159/000216120](https://doi.org/10.1159/000216120) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [de_1991_2_reference](drugs/drug_danaparoid/Danaparoid_de1991v2_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | de Boer A et al., Studies of interaction of a low-molecul…, Antimicrobial agents and ch… (1991) | [10.1128/AAC.35.10.2110](https://doi.org/10.1128/AAC.35.10.2110) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: unreported model parameter default(s): ka</sub><br><sub>route_to: `scholar`</sub> | [De_1991_4_reference](drugs/drug_danaparoid/Danaparoid_De1991v4_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | De Boer A et al., The influence of Org 10172, a low molec…, British journal of clinical… (1991) | [10.1111/j.1365-2125.1991.tb05608.x](https://doi.org/10.1111/j.1365-2125.1991.tb05608.x) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Stiekema_1993_reference](drugs/drug_danaparoid/Danaparoid_Stiekema1993_reference.md) | — | 1-compartment (no model) | 0 | Stiekema JC et al., A cross-over comparison of the anti-clo…, British journal of clinical… (1993) | [10.1111/j.1365-2125.1993.tb05891.x](https://doi.org/10.1111/j.1365-2125.1993.tb05891.x) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=danaparoid).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: SERPINC1 (positive allosteric modulator).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 30 matched, 53 returned
- **screened:** 5  ·  **relevant:** 4
- **records:** 4  ·  extracted 2  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ishida_1998.pdf` | Ishida M et al., Pharmacokinetics of danaparoid sodium,…, Arzneimittel-Forschung (1998) | popPK | 9 | not captured | [9748709](https://pubmed.ncbi.nlm.nih.gov/9748709) | The study reports quantitative pharmacokinetic parameters including elimination half-life (9.90 h) and AUC for danaparoid in rabbits, with values explicitly provided in the abstract. |

<sub>queue written 2026-10-14T22:51:24.148696+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Acostamadiedo_2000 | irrelevant | 0 | 0 | The text is a general pharmacological overview/review of danaparoid that lacks any quantitative pharmacokinetic parameters (e.g., clearance, volume, half-life). |
| popPK | Alban_2008 | irrelevant | 0 | 0 | The paper is a review discussing the molecular characteristics and general profiles of glycosaminoglycan anticoagulants, including danaparoid, but does not report specific quantitative pharmacokinetic parameter values (CL, V, etc.) for danaparoid. |
| PD | Alban_2008 | not_relevant | 1 | 0 | The text is a qualitative review of glycosaminoglycan anticoagulants and mentions danaparoid's pharmacodynamics only in general terms without providing any numeric PD parameters or exposure-response data. |
| popPK | Bevilacqua_2025 | irrelevant | 2 | 1 | This is a clinical case report describing the management of HIT rather than a pharmacokinetic study, and while it cites a half-life range (19.2-24.5h) in the discussion, it does not present original quantitative compartmental parameters (CL, V, Q) or a population-PK model for danaparoid. |
| popPK | Boneu_1996 | irrelevant | 0 | 0 | The paper is a review of clinical uses of glycosaminoglycans (including Orgaran/danaparoid) and does not report any pharmacokinetic parameters. |
| popPK | Chong_1991 | irrelevant | 0 | 0 | The paper is a review of drug-induced immune thrombocytopenia and does not report any pharmacokinetic parameters for danaparoid. |
| popPK | Cornet_2011 | irrelevant | 0 | 0 | Danaparoid is used as a comparative therapeutic agent in a pneumonia model, and the study measures coagulation parameters rather than reporting quantitative pharmacokinetic disposition parameters for the drug. |
| popPK | Danhof_1992 | irrelevant | 0 | 0 | The provided evidence contains only metadata and extraction software logs, with no scientific content regarding danaparoid pharmacokinetics. |
| popPK | Davenport_2007 | irrelevant | 0 | 0 | The paper is a clinical review discussing anticoagulation options in HIT and mentions danaparoid only as a treatment option without providing quantitative pharmacokinetic parameters or disposition models. |
| popPK | De_1991_4 | relevant | 4 | 8 | The study reports quantitative pharmacokinetic parameters (clearance, half-life) for Org 10172 (danaparoid) based on anti-Xa activity, although the primary focus is on drug-drug interactions and antipyrine metabolism. |
| popPK | Eikelboom_2002 | irrelevant | 0 | 0 | The paper is a clinical review of LMWHs and heparinoids that provides no quantitative pharmacokinetic parameters for danaparoid. |
| popPK | Exner_2019 | irrelevant | 0 | 0 | The study is an in-vitro investigation of the specificity of an activated charcoal product on anticoagulants and does not report any pharmacokinetic parameters for danaparoid. |
| PD | Exner_2019 | not_relevant | 0 | 0 | The paper reports that the charcoal product had no effect on danaparoid, but it does not provide any numeric pharmacodynamic parameters (e.g., Emax, EC50) or exposure-response data for danaparoid itself. |
| popPK | Garcia_2012 | irrelevant | 1 | 0 | The paper is a general review of the pharmacology of parenteral anticoagulants and does not report specific quantitative population pharmacokinetic parameters (CL, V, Q, ka) for danaparoid. |
| PD | Garcia_2012 | not_relevant | 1 | 0 | The text is a qualitative review of the pharmacology of parenteral anticoagulants and does not report any numeric PD parameters or exposure-response data for danaparoid. |
| popPK | Gordon_1990 | irrelevant | 0 | 0 | The paper is a review discussing the clinical use and efficacy of danaparoid (Org 10172) in stroke without reporting any quantitative pharmacokinetic parameters. |
| popPK | GrandMaison_2005 | irrelevant | 0 | 0 | This is a review article that explicitly acknowledges the lack of pharmacokinetic data and provides only qualitative dosing recommendations without reporting any quantitative PK parameters. |
| popPK | Harenberg_1985 | irrelevant | 0 | 0 | The study investigates the pharmacodynamics of low molecular weight heparin, not danaparoid. |
| popPK | Harenberg_1998 | irrelevant | 0 | 0 | The paper is a review of sulodexide, not danaparoid, and reports pharmacokinetic parameters for sulodexide only. |
| popPK | He_2010 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of fibrin network structure and does not report any pharmacokinetic parameters for danaparoid. |
| PD | He_2010 | not_relevant | 3 | 2 | The paper describes qualitative dose-response trends (steep vs. shallow curves) and effects at therapeutic concentrations but does not provide numeric PD parameters (Emax, EC50) or extractable concentration-effect data points. |
| popPK | Hirsh_2008 | irrelevant | 1 | 0 | The paper is a clinical practice guideline review that discusses danaparoid's pharmacology qualitatively but does not report original quantitative pharmacokinetic parameter values. |
| PD | Hirsh_2008 | not_relevant | 1 | 0 | The text is a clinical practice guideline summary that provides qualitative pharmacological descriptions of danaparoid and other anticoagulants but does not report any numeric PD parameters, concentration-effect curves, or dose-response data. |
| popPK | Hobbelen_1987 | irrelevant | 0 | 0 | The paper studies the pharmacokinetic profile of Org 10172 (a low molecular weight heparinoid) in rats, not the drug danaparoid. |
| popPK | Ishihara_1995 | irrelevant | 0 | 0 | The study investigates chitin derivatives' effect on RBC clearance, not danaparoid pharmacokinetics. |
| popPK | Lehot_2006 | irrelevant | 0 | 0 | Danaparoid is only mentioned as a diagnostic agent for platelet aggregation, not as the subject of a pharmacokinetic study. |
| popPK | Lubenow_2001 | irrelevant | 1 | 0 | This is a clinical review that mentions a half-life but does not provide quantitative PK parameters or compartmental models for danaparoid. |
| popPK | Lubenow_2002 | irrelevant | 0 | 0 | The paper is a clinical review regarding the use of lepirudin for heparin-induced thrombocytopenia and mentions danaparoid only as a therapeutic alternative without providing any pharmacokinetic parameters for it. |
| PD | Lubenow_2002 | not_relevant | 1 | 0 | The text is a clinical review of hirudin in HIT that mentions danaparoid only as an alternative agent without providing any pharmacodynamic data, exposure-response analysis, or numeric PD parameters. |
| popPK | Lubenow_2003 | irrelevant | 0 | 0 | The paper is a case report on argatroban, and danaparoid is only mentioned as a less suitable alternative anticoagulant without any pharmacokinetic data. |
| popPK | McKee_1992 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of heparin and heparan sulphate, not danaparoid. |
| popPK | Niksic_2006 | irrelevant | 0 | 0 | The text is a clinical review discussing dosing considerations and monitoring for anticoagulants, containing no quantitative pharmacokinetic parameters for danaparoid. |
| popPK | Peacock_2016 | irrelevant | 0 | 0 | The paper is a review of direct-acting oral anticoagulants (DOACs) and does not contain any pharmacokinetic data for danaparoid. |
| popPK | Polkinghorne_2002 | irrelevant | 4 | 2 | The study reports time-course anti-Factor Xa activity levels rather than quantitative compartmental PK parameters (CL, V, t1/2) for danaparoid, and the provided text appears truncated, missing any detailed pharmacokinetic modeling results. |
| popPK | SCHOEN_1963 | irrelevant | 0 | 0 | no_text gate: only 61 chars of text extracted (&lt; 400) |
| popPK | Schneider_2000 | irrelevant | 0 | 0 | The study focuses on lepirudin as the subject drug for anticoagulation, with danaparoid mentioned only as a failed comparator agent without any pharmacokinetic data. |
| popPK | Schoemaker_1996 | irrelevant | 0 | 0 | The study focuses on the methodology of NONMEM modeling using enoxaparin and dalteparin as examples, not danaparoid. |
| PD | Schoemaker_1996 | not_relevant | 0 | 0 | The paper discusses danaparoid (or similar LMWHs like enoxaparin/dalteparin) only as a methodological example for NONMEM fitting and does not report specific numeric PD parameters or extractable exposure-response relationships for danaparoid. |
| popPK | Selleng_2016 | irrelevant | 0 | 0 | The paper is a clinical review of Heparin-Induced Thrombocytopenia (HIT) management and does not report quantitative pharmacokinetic parameters (CL, V, etc.) for danaparoid. |
| popPK | Shan_2019 | irrelevant | 0 | 0 | The paper is a review of Propylene glycol alginate sodium sulfate (PSS), not danaparoid. |
| popPK | Stiekema_1989 | irrelevant | 1 | 1 | The paper studies the pharmacokinetics of Org 10172 (dalteparin), not danaparoid. |
| popPK | Stiekema_1990 | relevant | 9 | 3 | The study reports a compartmental PK model (two-compartment) for Org 10172 (danaparoid), but the specific numeric parameter values (CL, V, etc.) are in Table 2 which is not fully transcribed with data in the provided evidence. |
| popPK | Tardy-Poncet_2015 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics and clinical management of argatroban, with danaparoid only mentioned as a comparator or contraindicated agent. |
| popPK | Tomer_1999 | irrelevant | 0 | 0 | The study focuses on the diagnostic utility of a flow cytometric assay for heparin-induced thrombocytopenia, using danaparoid only as a test substance in an in vitro compatibility assay, and contains no pharmacokinetic parameters. |
| PD | Tomer_1999 | not_relevant | 1 | 0 | The paper describes a diagnostic assay for HIT and mentions a qualitative dose-response neutralization by antibodies, but it does not report any pharmacodynamic exposure-response or dose-response relationship for danaparoid itself with numeric parameters. |
| popPK | WAGENER_1964 | irrelevant | 0 | 0 | no_text gate: only 67 chars of text extracted (&lt; 400) |
| popPK | Weltermann_2003 | irrelevant | 0 | 0 | The paper is a review of novel anticoagulants and does not report original quantitative pharmacokinetic parameters for danaparoid. |
| PD | Weltermann_2003 | not_relevant | 1 | 0 | The text is a general review of novel anticoagulants and mentions danaparoid only in the context of its approval status, without providing any specific pharmacodynamic data, exposure-response relationships, or numeric parameters. |
| popPK | Yu_2017 | irrelevant | 0 | 0 | The paper is a meta-analysis of clinical efficacy (mortality, disease progression) of heparinoids in diabetic kidney disease, not a pharmacokinetic study; danaparoid is only one of several interventions studied for clinical outcomes. |
| popPK | Zeng_2016 | irrelevant | 0 | 0 | The paper is a review of Propylene Glycol Alginate Sodium Sulfate (PSS), a different drug, and does not report pharmacokinetic parameters for danaparoid. |
| popPK | de_1991 | irrelevant | 3 | 4 | The study investigates Org 10172 (lomoparan), not danaparoid, although both are low molecular weight heparinoids with similar PK profiles; danaparoid is not the subject drug. |
| popPK | de_1991_3 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of Org 10172 (Lomoparan), not danaparoid. |
| popPK | de_2007 | irrelevant | 6 | 2 | The study reports PK data for danaparoid (half-life 8h, model parameters) during CVVH in humans, but the quantitative parameters are limited to a single median half-life value and a mathematical model formula, lacking standard compartmental PK parameters (CL, V, Q) typically required for population-PK extraction, and the primary data are presented as ranges/medians rather than individual estimates. |
| popPK | ten_1985 | irrelevant | 0 | 0 | The subject drug is Org 10172 (danaparoid precursor/analogue), not danaparoid, and the study is primarily pharmacodynamic (haemostatic/platelet) rather than reporting quantitative PK parameters like clearance or volume for danaparoid. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 22:51 UTC</sub>
