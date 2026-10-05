<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;danaparoid&quot;}]"></div>

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
| 2026-10-05 14:20 | 2:59 | 0/0/0 | 0/0/0 | 0/0/0 | 120,264/2,376 | ollama / qwen3.8:27b-mtp-q8_0 | 21 | 16/3 | 5/16 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=danaparoid) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: SERPINC1 (positive allosteric modulator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 50 matched, 40 returned
- **screened:** 5  ·  **relevant:** 4
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

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
| popPK | De_1991 | relevant | 4 | 5 | The study reports pharmacokinetic parameters (CL, V, t1/2) for Org 10172 (danaparoid) based on anti-Xa activity, but the specific numeric values are in Table 2 which is not fully provided in the evidence (only referenced). |
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
| popPK | McKee_1992 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of heparin and heparan sulphate, not danaparoid. |
| popPK | Niksic_2006 | irrelevant | 0 | 0 | The text is a clinical review discussing anticoagulation management in renal failure and does not report any quantitative pharmacokinetic parameters for danaparoid. |
| popPK | SCHOEN_1963 | irrelevant | 0 | 0 | no_text gate: only 61 chars of text extracted (&lt; 400) |
| popPK | Schneider_2000 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics/dosing of lepirudin (r-hirudin) in a patient with HIT, where danaparoid is only mentioned as a failed prior therapy. |
| popPK | Schoemaker_1996 | irrelevant | 0 | 0 | The paper discusses pharmacokinetic modeling of enoxaparin and dalteparin, not danaparoid. |
| PD | Schoemaker_1996 | not_relevant | 0 | 0 | The paper discusses danaparoid (or similar LMWHs like enoxaparin/dalteparin) only as a methodological example for NONMEM fitting and does not report specific numeric PD parameters or extractable exposure-response relationships for danaparoid. |
| popPK | Selleng_2016 | irrelevant | 0 | 0 | The paper is a clinical review of heparin-induced thrombocytopenia management and does not report quantitative pharmacokinetic parameters for danaparoid. |
| popPK | Stiekema_1989 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of Org 10172 (a heparinoid), not danaparoid. |
| popPK | Stiekema_1990 | relevant | 8 | 2 | The study reports pharmacokinetic parameters (clearance, half-life, volume) for Org 10172 (danaparoid) in humans, but the specific numeric values are contained in Table 2 which is not fully provided in the evidence. |
| popPK | Tardy-Poncet_2015 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and clinical management of argatroban, with danaparoid mentioned only as a comparator or contraindication context without any quantitative PK parameters reported for it. |
| popPK | Tomer_1999 | irrelevant | 0 | 0 | The paper is a diagnostic study on heparin-induced thrombocytopenia using flow cytometry and does not report any pharmacokinetic parameters for danaparoid. |
| PD | Tomer_1999 | not_relevant | 1 | 0 | The paper describes a diagnostic assay for HIT and mentions a qualitative dose-response neutralization by antibodies, but it does not report any pharmacodynamic exposure-response or dose-response relationship for danaparoid itself with numeric parameters. |
| popPK | WAGENER_1964 | irrelevant | 0 | 0 | no_text gate: only 67 chars of text extracted (&lt; 400) |
| popPK | Weltermann_2003 | irrelevant | 0 | 0 | The paper is a review of novel anticoagulants and does not report original quantitative pharmacokinetic parameters for danaparoid. |
| PD | Weltermann_2003 | not_relevant | 1 | 0 | The text is a general review of novel anticoagulants and mentions danaparoid only in the context of its approval status, without providing any specific pharmacodynamic data, exposure-response relationships, or numeric parameters. |
| popPK | Yu_2017 | irrelevant | 0 | 0 | The paper is a meta-analysis of clinical efficacy (mortality, albuminuria) of heparinoids in diabetic kidney disease and does not report pharmacokinetic parameters for danaparoid. |
| popPK | de_1991 | relevant | 8 | 4 | The study reports quantitative PK parameters (CL, Vz, t1/2) for Org 10172 (danaparoid) in humans, but the specific numeric values are contained in Table 1 which is not fully rendered in the evidence, with only partial data visible in the text. |
| popPK | de_1991_3 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of Org 10172 (Lomoparan), not danaparoid. |
| popPK | de_2007 | relevant | 4 | 3 | The study reports a derived half-life of 8 hours and concentration-time data for danaparoid during CVVH, but lacks explicit compartmental parameters like clearance (CL) or volume of distribution (V) values. |
| popPK | ten_1985 | irrelevant | 2 | 0 | The study focuses on hemostatic and coagulation effects (platelet aggregation, clotting times) rather than quantitative pharmacokinetic parameters like clearance or volume of distribution for danaparoid. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
