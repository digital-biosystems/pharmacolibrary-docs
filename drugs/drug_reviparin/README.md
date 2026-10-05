<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;reviparin&quot;}]"></div>

# reviparin

- **generic name:** reviparin
- **ATC codes:** `B01AB08`
- **DrugBank:** [DB09259](https://go.drugbank.com/drugs/DB09259) · **PubChem:** not captured
- **groups:** approved

## About

Reviparin is a low molecular weight heparin, an anticoagulant used to prevent and treat blood clots. It is an approved medicine, though it is not authorised in the European Union and its use is limited to certain countries.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7318417](https://www.wikidata.org/wiki/Q7318417) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 15:42 | 0:32 | 0/0/0 | 0/0/0 | 0/0/0 | 23,104/437 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 2/1 | 2/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 10 matched, 9 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alex_2013 | irrelevant | 0 | 0 | The paper is a case report on carvedilol-induced thrombocytopenia and does not report pharmacokinetic parameters for reviparin. |
| popPK | Andrassy_1996 | irrelevant | 2 | 0 | The paper is a review discussing general LMWH properties and clinical efficacy without reporting specific quantitative population-pharmacokinetic parameters (CL, V, Q, ka) for reviparin. |
| popPK | Atkinson_2000 | irrelevant | 0 | 0 | The paper is a clinical review of acute venous thromboembolism management and does not report any pharmacokinetic parameters for reviparin. |
| popPK | Bara_1988 | irrelevant | 0 | 0 | The paper discusses low molecular weight heparins (specifically enoxaparin) and does not report pharmacokinetic parameters for reviparin. |
| popPK | Chilbert_2024 | irrelevant | 0 | 0 | The paper is a systematic review of enoxaparin dosing in obesity and does not report pharmacokinetic parameters for reviparin. |
| popPK | Chong_1991 | irrelevant | 0 | 0 | The paper is a review of drug-induced immune thrombocytopenia and does not report any pharmacokinetic parameters for reviparin. |
| popPK | Follea_1986 | irrelevant | 0 | 0 | The study investigates standard heparin and a different LMW heparin (PK 10169), not reviparin. |
| popPK | Garcia_2012 | irrelevant | 0 | 0 | The paper is a general review of parenteral anticoagulants and does not report specific quantitative pharmacokinetic parameters for reviparin. |
| popPK | Gouin-Thibault_2024 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for tinzaparin, not reviparin. |
| popPK | Guo_2020 | irrelevant | 0 | 0 | The paper focuses on the formulation and efficacy of a gemcitabine prodrug using low-molecular-weight heparin (LMWH) as a component, not on the pharmacokinetics of reviparin. |
| popPK | Hao_2019 | irrelevant | 0 | 0 | The paper is a general review of low molecular weight heparins and does not report specific quantitative pharmacokinetic parameters for reviparin. |
| popPK | Harenberg_1985 | irrelevant | 0 | 0 | The study investigates a generic 4000 dalton LMW heparin fraction, not the specific drug reviparin, and reports pharmacodynamic effects rather than population PK parameters. |
| PGx | Helft_2006 | not_relevant | 0 | 0 | The text is a general review of 2005 thrombosis research and mentions reviparin only in the context of clinical trial outcomes (mortality/recurrence), without reporting any pharmacogenomic effects on PK or PD parameters. |
| popPK | Hory_1991 | irrelevant | 0 | 0 | The study investigates Cy 222, a different low molecular weight heparin, not reviparin. |
| popPK | Huang_1998 | irrelevant | 0 | 0 | The paper is a general review of low-molecular-weight heparins and does not report specific quantitative pharmacokinetic parameters for reviparin. |
| popPK | Huisman_2018 | irrelevant | 0 | 0 | The paper discusses the pharmacokinetics of betrixaban, not reviparin. |
| popPK | Hull_1992 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial comparing low-molecular-weight heparin to unfractionated heparin and does not report quantitative pharmacokinetic parameters for reviparin. |
| popPK | Klinkhardt_2001 | irrelevant | 1 | 0 | The study is a pharmacodynamic interaction trial measuring platelet function and coagulation times, not a pharmacokinetic study reporting disposition parameters like clearance or volume for reviparin. |
| PD | Klinkhardt_2001 | not_relevant | 2 | 1 | The study reports qualitative pharmacodynamic interactions (attenuation of GPIIb/IIIa effects by UFH vs. no effect by reviparin) but does not provide numeric PD parameters (Emax, EC50) or a concentration-effect model for reviparin. |
| popPK | Kroneman_1991 | irrelevant | 0 | 0 | The study investigates low-molecular-weight heparin and unfractionated heparin, not reviparin, and does not report specific quantitative PK parameters for the target drug. |
| popPK | Lassen_1999 | irrelevant | 0 | 0 | The paper is a clinical review discussing thrombosis prophylaxis and does not report any quantitative pharmacokinetic parameters for reviparin. |
| PD | Lassen_1999 | not_relevant | 1 | 0 | The text is a qualitative review discussing clinical trial comparisons and regulatory positions regarding LMWHs, without providing any numeric PD parameters, concentration-effect curves, or dose-response data for reviparin. |
| popPK | Lin_2022 | irrelevant | 0 | 0 | The paper is a clinical study on hypertriglyceridemic acute pancreatitis and does not report pharmacokinetic parameters for reviparin. |
| popPK | MacFarlane_1995 | irrelevant | 0 | 0 | The paper is a general review of low-molecular-weight heparins and does not report specific quantitative pharmacokinetic parameters for reviparin. |
| popPK | Maddineni_2006 | irrelevant | 0 | 0 | The paper is a review discussing the chemical individuality of LMWHs and does not report any quantitative pharmacokinetic parameters for reviparin. |
| PD | Maddineni_2006 | not_relevant | 0 | 0 | The paper is a review discussing the chemical and biological uniqueness of LMWHs and the need for PD testing in generic equivalence, but it does not report any specific PD data, exposure-response relationships, or numeric PD parameters for reviparin. |
| popPK | Moon_2018 | irrelevant | 0 | 0 | The study investigates the biodistribution of a different drug (LHT7) in mice, not reviparin. |
| popPK | Mousa_2002 | irrelevant | 0 | 0 | The paper is a review focused on tinzaparin, and reviparin is only mentioned as a comparator without any quantitative pharmacokinetic parameters provided. |
| PD | Mousa_2002 | not_relevant | 0 | 0 | The text is a general review introduction discussing the history and pharmacology of LMWHs, specifically tinzaparin, and does not report any specific pharmacodynamic data, exposure-response relationships, or numeric PD parameters for reviparin. |
| popPK | Nunnelee_1997 | irrelevant | 0 | 0 | The paper is a general review of low-molecular-weight heparins and does not report specific quantitative pharmacokinetic parameters for reviparin. |
| popPK | Nutescu_2009 | irrelevant | 0 | 0 | The paper is a clinical review of LMWHs in renal impairment and obesity that does not report quantitative pharmacokinetic parameters for reviparin. |
| popPK | Obi_2014 | irrelevant | 0 | 0 | The study investigates the mechanistic effects of LMWH on vein wall fibrosis in mice and does not report any pharmacokinetic parameters for reviparin. |
| popPK | Parul_2025 | irrelevant | 0 | 0 | The paper is a critical review of anticoagulation in CKD/ESRD that does not focus on reviparin as the subject drug and contains no quantitative pharmacokinetic parameter values for it. |
| popPK | Penner_2020 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of neublastin (BG00010), not reviparin. |
| popPK | Samama_2000 | irrelevant | 2 | 1 | The paper is a review comparing multiple LMWHs and lists a single clearance value for reviparin (19 mL/min) without providing a full PK model, volume of distribution, or half-life specific to reviparin, and lacks the quantitative depth required for population PK extraction. |
| PD | Samama_2000 | not_relevant | 2 | 1 | The text is a general review comparing PK parameters (clearance, half-life) and qualitative PD profiles (aXa/aIIa ratios) of various LMWHs, but it does not report specific numeric PD parameters (like Emax, EC50) or an exposure-response curve for reviparin. |
| popPK | Singer_2010 | irrelevant | 0 | 0 | The study focuses on enoxaparin, not reviparin, and reports anti-factor Xa levels rather than compartmental PK parameters. |
| popPK | Stiekema_1993 | irrelevant | 0 | 0 | The study investigates low molecular weight heparins (Fragmin, Fraxiparine, Clexane) and Orgaran, not reviparin. |
| popPK | Sánchez-Ferrer_2010 | irrelevant | 0 | 0 | The paper describes the pharmacokinetics of bemiparin, not reviparin. |
| popPK | Vinazzer_1986 | irrelevant | 0 | 0 | The study focuses on PK 10169 (a different LMWH fragment) and does not report quantitative PK parameters for reviparin. |
| popPK | Wolf_1994 | irrelevant | 0 | 0 | The text is a general overview of low-molecular-weight heparins and does not report specific quantitative pharmacokinetic parameters for reviparin. |
| popPK | Wong_2018 | irrelevant | 0 | 0 | The study investigates nadroparin, not reviparin, and reports anti-Xa levels rather than compartmental PK parameters for the target drug. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
