<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C07A&quot;,&quot;href&quot;:&quot;atc/C07A.md&quot;},{&quot;label&quot;:&quot;labetalol&quot;}]"></div>

# labetalol

- **generic name:** labetalol
- **ATC codes:** `C07AG01`, `C07BG01`, `C07CG01`
- **DrugBank:** [DB00598](https://go.drugbank.com/drugs/DB00598) · **PubChem:** [CID 3869](https://pubchem.ncbi.nlm.nih.gov/compound/3869)
- **molar mass:** 328.4055 g/mol (C19H24N2O3) — DrugBank
- **groups:** approved, investigational

## About

Labetalol is a beta blocker with alpha-blocking activity used to treat high blood pressure, including severe forms, as well as heart-related conditions such as angina, heart attack, and heart failure. It is an approved medicine and remains in general clinical use, often in hospital settings for hypertensive emergencies.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q958087](https://www.wikidata.org/wiki/Q958087) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| labetalol | parent | 328.406 | C19H24N2O3 | DrugBank | [3869](https://pubchem.ncbi.nlm.nih.gov/compound/3869) | Lalonde_1990_2, Maronde_1983 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-01 16:25 | 2:18 | 0/1/3 | 4/0/1 | 0/0/0 | 107,786/9,445 | ollama / glm-5.3-flash | 23 | 23/0 | 7/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.429). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Elliott_1984_reference](drugs/drug_labetalol/Labetalol_Elliott1984_reference.md) | — | 1-compartment (no model) | 2 | Elliott HL et al., Comparison of the clinical pharmacokine…, British journal of clinical… (1984) | [10.1111/j.1365-2125.1984.tb02392.x](https://doi.org/10.1111/j.1365-2125.1984.tb02392.x) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.857). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Lalonde_1990_2_reference](drugs/drug_labetalol/Labetalol_Lalonde1990v2_reference.md) | — | 1-compartment (no model) | 2 | Lalonde RL et al., Labetalol pharmacokinetics and pharmaco…, Clinical pharmacology and t… (1990) | [10.1038/clpt.1990.187](https://doi.org/10.1038/clpt.1990.187) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.833). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Maronde_1983_reference](drugs/drug_labetalol/Labetalol_Maronde1983_reference.md) | — | 1-compartment (no model) | 2 | Maronde RF et al., Study of single and multiple dose pharm…, The American journal of med… (1983) | [10.1016/0002-9343(83)90135-3](https://doi.org/10.1016/0002-9343(83)90135-3) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Chung_1986_reference](drugs/drug_labetalol/Labetalol_Chung1986_reference.md) | — | 1-compartment (no model) | 0 | Chung M et al., Rising multiple-dose pharmacokinetics o…, Journal of clinical pharmac… (1986) | [10.1002/j.1552-4604.1986.tb03518.x](https://doi.org/10.1002/j.1552-4604.1986.tb03518.x) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from an LLM reading of the title and abstract by glm-5.3-flash, p(non-human) 1.00).">mouse</span> | [Hassanain_2013_vessel_relaxation](drugs/drug_labetalol/pd_Hassanain_2013_vessel_relaxation.md) | vasodilation of phenylephrine-pre-constricted mesenteric arteries (percentage of basal tone) ← labetalol · direct Emax (saturable) effect | — | Hassanain HH et al., In vitro assessment of clevidipine usin…, Pharmaceuticals (Basel, Swi… (2013) | [10.3390/ph6050623](https://doi.org/10.3390/ph6050623) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Hong_1984_human_sperm_motility_of_control](drugs/drug_labetalol/pd_Hong_1984_human_sperm_motility_of_control.md) | human sperm motility (% of control) ← labetalol · direct sigmoid Emax (Hill) effect | — | Hong CY et al., Local anaesthetic effect of antiarrhyth…, British journal of clinical… (1984) | [10.1111/j.1365-2125.1984.tb02404.x](https://doi.org/10.1111/j.1365-2125.1984.tb02404.x) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Lalonde_1990_2_beta_blockade_pharmacologic_response_during_standardized_treadmill_tests](drugs/drug_labetalol/pd_Lalonde_1990_2_beta_blockade_pharmacologic_response_during_s.md) | beta-blockade (pharmacologic response during standardized treadmill tests) ← labetalol · direct Emax (saturable) effect | — | Lalonde RL et al., Labetalol pharmacokinetics and pharmaco…, Clinical pharmacology and t… (1990) | [10.1038/clpt.1990.187](https://doi.org/10.1038/clpt.1990.187) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Saotome_1993_DBP](drugs/drug_labetalol/pd_Saotome_1993_DBP.md) | diastolic blood pressure ← labetalol · direct sigmoid Emax (Hill) effect | — | Saotome T et al., Labetalol in hypertension during the th…, Journal of clinical pharmac… (1993) | [10.1002/j.1552-4604.1993.tb01933.x](https://doi.org/10.1002/j.1552-4604.1993.tb01933.x) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Saotome_1993_SBP](drugs/drug_labetalol/pd_Saotome_1993_SBP.md) | systolic blood pressure ← labetalol · direct sigmoid Emax (Hill) effect | — | Saotome T et al., Labetalol in hypertension during the th…, Journal of clinical pharmac… (1993) | [10.1002/j.1552-4604.1993.tb01933.x](https://doi.org/10.1002/j.1552-4604.1993.tb01933.x) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span> | [Shawkat_2018_DBP](drugs/drug_labetalol/pd_Shawkat_2018_DBP.md) | diastolic blood pressure ← labetalol · indirect response — drug inhibits the production of diastolic blood pressure | — | Shawkat E et al., The effect of labetalol and nifedipine…, Pregnancy hypertension (2018) | [10.1016/j.preghy.2017.12.007](https://doi.org/10.1016/j.preghy.2017.12.007) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span> | [Shawkat_2018_HR](drugs/drug_labetalol/pd_Shawkat_2018_HR.md) | heart rate ← labetalol · indirect response — drug inhibits the production of heart rate | — | Shawkat E et al., The effect of labetalol and nifedipine…, Pregnancy hypertension (2018) | [10.1016/j.preghy.2017.12.007](https://doi.org/10.1016/j.preghy.2017.12.007) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span> | [Shawkat_2018_SBP](drugs/drug_labetalol/pd_Shawkat_2018_SBP.md) | systolic blood pressure ← labetalol · indirect response — drug inhibits the production of systolic blood pressure | — | Shawkat E et al., The effect of labetalol and nifedipine…, Pregnancy hypertension (2018) | [10.1016/j.preghy.2017.12.007](https://doi.org/10.1016/j.preghy.2017.12.007) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=labetalol) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` substrate, `ORM1` substrate | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor/substrate | DrugBank actor |
| metabolism | kidney | `UGT1A9` substrate, `UGT2B7` substrate | DrugBank actor |
| metabolism | liver | `CYP2C19` substrate, `CYP2D6` inhibitor/substrate, `UGT1A1` substrate, `UGT1A9` substrate, `UGT2B7` substrate | DrugBank actor |
| metabolism | small intestine | `UGT1A1` substrate, `UGT2B7` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ABCB5 (unknown), ADRA1A (target), ADRB1 (target), ADRB2 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 19 matched, 19 returned
- **screened:** 23  ·  **relevant:** 7
- **records:** 4  ·  extracted 0  ·  needs_review 3  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_7 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Fischer_2014.pdf` | Fischer JH et al., Influence of gestational age and body w…, Clinical pharmacokinetics (2014) | popPK | 10 | [10.1007/s40262-013-0123-0](https://doi.org/10.1007/s40262-013-0123-0) | [24297680](https://pubmed.ncbi.nlm.nih.gov/24297680) | The paper is a population PK study of labetalol, but the evidence only provides relative fold-changes (e.g., 1.4-fold, 1.9-fold) rather than absolute numeric parameter values (CL, V) which are likely in the full text or tables not provided. |
| `Chung_1986.pdf` | Chung M et al., Rising multiple-dose pharmacokinetics o…, Journal of clinical pharmac… (1986) | popPK | 9 | [10.1002/j.1552-4604.1986.tb03518.x](https://doi.org/10.1002/j.1552-4604.1986.tb03518.x) | [3700682](https://pubmed.ncbi.nlm.nih.gov/3700682) | The study reports quantitative PK parameters (half-lives) for labetalol, but specific clearance and volume values are not explicitly listed in the provided text. |
| `Lalonde_1990_2.pdf` | Lalonde RL et al., Labetalol pharmacokinetics and pharmaco…, Clinical pharmacology and t… (1990) | popPK | 9 | [10.1038/clpt.1990.187](https://doi.org/10.1038/clpt.1990.187) | [2225711](https://pubmed.ncbi.nlm.nih.gov/2225711) | The evidence explicitly reports quantitative pharmacokinetic parameters for labetalol, including oral clearance (58.7 to 32.9 ml/min/kg) and systemic clearance (23.2 to 17.7 ml/min/kg). |
| `Maronde_1983.pdf` | Maronde RF et al., Study of single and multiple dose pharm…, The American journal of med… (1983) | popPK | 9 | [10.1016/0002-9343(83)90135-3](https://doi.org/10.1016/0002-9343(83)90135-3) | [6356898](https://pubmed.ncbi.nlm.nih.gov/6356898) | The study reports quantitative PK parameters for labetalol, including elimination half-life (7.65 and 7.92 hours) and steady-state plasma concentrations, though specific clearance and volume values are not explicitly listed in the provided text. |
| `Saotome_1993.pdf` | Saotome T et al., Labetalol in hypertension during the th…, Journal of clinical pharmac… (1993) | popPK | 9 | [10.1002/j.1552-4604.1993.tb01933.x](https://doi.org/10.1002/j.1552-4604.1993.tb01933.x) | [8227470](https://pubmed.ncbi.nlm.nih.gov/8227470) | The study reports quantitative pharmacokinetic parameters for labetalol, including elimination half-life (4.3-6.9 h) and apparent oral clearance (31.9-73.3 mL/min/kg), directly in the text. |
| `Wagner_1991.pdf` | Wagner JG et al., Stepwise determination of multicompartm…, Journal of pharmacokinetics… (1991) | popPK | 9 | [10.1007/BF01061665](https://doi.org/10.1007/BF01061665) | [1920088](https://pubmed.ncbi.nlm.nih.gov/1920088) | The paper describes a pharmacokinetic study estimating disposition and absorption parameters for labetalol, but the specific numeric values are not present in the provided abstract text. |
| `Tenero_1989.pdf` | Tenero DM et al., Pharmacokinetics and pharmacodynamics o…, Clinical pharmacology and t… (1989) | popPK | 8 | [10.1038/clpt.1989.201](https://doi.org/10.1038/clpt.1989.201) | [2598569](https://pubmed.ncbi.nlm.nih.gov/2598569) | The study reports quantitative PK parameters (CL, V, t1/2) for dilevalol, the R,R stereoisomer of labetalol, which is a specific component of the labetalol drug. |

<sub>queue written 2026-10-01T16:24:22.659691+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bhamidipaty-Pelosi_2025 | relevant | 7 | 2 | This is a labetalol pregnancy PopPK study, but the evidence shown contains study-design text and only background half-life values, not readable model parameter estimates. |
| PD | Bhamidipaty-Pelosi_2025 | not_relevant | 0 | 0 | The text is a study protocol describing planned methods and recruitment; it does not report any results, data, or numeric PD parameters. |
| popPK | Fischer_2014 | relevant | 10 | 2 | The paper is a population PK study of labetalol, but the evidence only provides relative fold-changes (e.g., 1.4-fold, 1.9-fold) rather than absolute numeric parameter values (CL, V) which are likely in the full text or tables not provided. |
| popPK | Hassanain_2013 | irrelevant | 0 | 0 | The study is an in-vitro wire myograph experiment assessing vasodilator potency (EC50) where labetalol is a comparator, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Hong_1984 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological assay measuring sperm immobilization (local anesthetic effect) and does not report any pharmacokinetic parameters for labetalol. |
| popPK | Maciag_2022 | irrelevant | 0 | 0 | The study uses labetalol only as a comparator to validate the zebrafish model's physiological response and does not report any pharmacokinetic parameters. |
| PD | Maciag_2022 | not_relevant | 2 | 1 | The paper mentions labetalol as a βAR antagonist that inhibited heart rate but provides no numeric concentration-effect data, dose-response curve, or PD parameters for labetalol. |
| popPK | Scalzo_1993 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of cocaine, with labetalol serving only as a co-administered agent to test for interactions, and no quantitative PK parameters for labetalol itself are reported. |
| popPK | Shawkat_2018 | irrelevant | 1 | 0 | The study is a pharmacodynamic analysis of blood pressure lowering effects using an indirect response model, not a pharmacokinetic study reporting quantitative disposition parameters like clearance or volume for labetalol. |
| popPK | Smith_2024 | irrelevant | 0 | 0 | The study is a comparative efficacy analysis of blood pressure management, not a pharmacokinetic study, and reports no disposition parameters for labetalol. |
| popPK | Wagner_1991 | relevant | 9 | 0 | The paper describes a pharmacokinetic study estimating disposition and absorption parameters for labetalol, but the specific numeric values are not present in the provided abstract text. |
| popPK | de_2000 | irrelevant | 0 | 0 | The paper is a pharmacodynamic study on beta-adrenergic receptor activity in bovine tracheal smooth muscle, not a pharmacokinetic study, and labetalol is used only as a comparator antagonist. |
| PD | de_2000 | not_relevant | 2 | 1 | The paper investigates beta-2 adrenergic receptor constitutive activity in bovine tracheal smooth muscle; labetalol is only mentioned as a beta-blocker in a rank order of inverse agonism efficacy, with no specific exposure-response or dose-response PD parameters reported for it. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-29 03:50 UTC</sub>
