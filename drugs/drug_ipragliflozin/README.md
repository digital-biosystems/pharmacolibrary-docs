<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;ipragliflozin&quot;}]"></div>

# ipragliflozin

- **generic name:** ipragliflozin
- **ATC codes:** `A10BK05`
- **DrugBank:** [DB11698](https://go.drugbank.com/drugs/DB11698) · **PubChem:** [CID 10453870](https://pubchem.ncbi.nlm.nih.gov/compound/10453870)
- **molar mass:** 404.45 g/mol (C21H21FO5S) — DrugBank
- **groups:** investigational

## About

Ipragliflozin is a sodium-glucose co-transporter 2 inhibitor, a class of blood glucose-lowering drugs developed for diabetes. It is not authorised in the European Union and is considered investigational, though it has been used in Japan.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q17193526](https://www.wikidata.org/wiki/Q17193526) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| ipragliflozin | parent | 404.45 | C21H21FO5S | DrugBank | [10453870](https://pubchem.ncbi.nlm.nih.gov/compound/10453870) | Saito_2019 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 21:21 | 1:00 | 0/0/1 | 1/0/2 | 0/0/0 | 116,815/4,860 | einfracz / qwen3.8-27b | 8 | 2/5 | 7/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.2). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Saito_2019_reference](drugs/drug_ipragliflozin/Ipragliflozin_Saito2019_reference.md) | — | 1-compartment (no model) | 2 | Saito M et al., Pharmacokinetic and pharmacodynamic mod…, British journal of clinical… (2019) | [10.1111/bcp.13972](https://doi.org/10.1111/bcp.13972) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Demin_2014_SGLT2_inhibition_level](drugs/drug_ipragliflozin/pd_Demin_2014_SGLT2_inhibition_level.md) | Inhibition of glucose reabsorption mediated by SGLT2 ← ipragliflozin · direct sigmoid Emax (Hill) effect | — | Demin O et al., Analysis of the efficacy of SGLT2 inhib…, Frontiers in pharmacology (2014) | [10.3389/fphar.2014.00218](https://doi.org/10.3389/fphar.2014.00218) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Saito_2019_UGE24h](drugs/drug_ipragliflozin/pd_Saito_2019_UGE24h.md) | change from baseline in UGE for 24 hours biomarker turnover ← ipragliflozin | — | Saito M et al., Pharmacokinetic and pharmacodynamic mod…, British journal of clinical… (2019) | [10.1111/bcp.13972](https://doi.org/10.1111/bcp.13972) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Toyoshima_2020_renal_glucose_clearance](drugs/drug_ipragliflozin/pd_Toyoshima_2020_renal_glucose_clearance.md) | renal glucose clearance ← ipragliflozin · direct Emax (saturable) effect | — | Toyoshima J et al., Comparison of the Pharmacokinetic and P…, Clinical therapeutics (2020) | [10.1016/j.clinthera.2020.07.009](https://doi.org/10.1016/j.clinthera.2020.07.009) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=ipragliflozin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| — | kidney | `SLC5A2` modulator | DrugBank actor |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 42 matched, 40 returned
- **screened:** 2  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 1
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Toyoshima_2020.pdf` | Toyoshima J et al., Comparison of the Pharmacokinetic and P…, Clinical therapeutics (2020) | popPK | 8 | [10.1016/j.clinthera.2020.07.009](https://doi.org/10.1016/j.clinthera.2020.07.009) | [32839028](https://pubmed.ncbi.nlm.nih.gov/32839028) | Reports PK/PD parameters (AUC24h, Emax, EX50) for ipragliflozin in humans, though specific clearance/volume values are not explicitly detailed. |

<sub>queue written 2026-10-07T21:20:44.695586+00:00</sub>

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
| popPK | Inoue_2019 | irrelevant | 0 | 0 | The paper is a model-based meta-analysis of efficacy (glucose lowering) for SGLT2 inhibitors and others, reporting no pharmacokinetic parameters (CL, V, ka) for ipragliflozin. |
| PD | Inoue_2019 | not_relevant | 0 | 0 | The paper is a model-based meta-analysis of efficacy (FPG/HbA1c) and does not report pharmacokinetic data or exposure-response/PD parameters for ipragliflozin. |
| popPK | Jiang_2024 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of empagliflozin, not ipragliflozin. |
| PD | Jiang_2024 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) study comparing two formulations of empagliflozin, with no pharmacodynamic (PD) or exposure-response analysis. |
| popPK | Kadokura_2014 | relevant | 4 | 2 | The study reports standard non-compartmental PK parameters (AUC, Cmax, tmax) for ipragliflozin, but lacks the specific compartmental or population PK parameters (CL, V, Q, ka) required for the extraction task, and specific numeric values are not explicitly listed in the provided text. |
| popPK | Kadokura_2014_2 | irrelevant | 2 | 0 | The paper is a review that summarizes qualitative trends and relative changes (e.g., AUC increases) but does not report specific quantitative disposition parameters (CL, V, ka) or population PK model values for ipragliflozin. |
| PD | Kadokura_2014_2 | not_relevant | 3 | 2 | The text is a review that qualitatively describes dose-dependent effects and saturation (max effect at 50-100 mg) but does not provide specific numeric PD parameters (e.g., EC50, Emax values) or a formal PK/PD model fit. |
| popPK | Kaku_2019 | irrelevant | 2 | 0 | The study reports only summary PK metrics (AUC, Cmax) and renal clearance without specific numeric values or compartmental/population PK parameters (CL, V, ka) for ipragliflozin. |
| popPK | Kashiwagi_2014 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial reporting glycemic control outcomes (HbA1c, glucose) and does not contain pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Kong_2023 | irrelevant | 0 | 0 | The paper is an in silico molecular docking study where ipragliflozin is used only as a reference compound with an IC50 value, and no pharmacokinetic disposition parameters are reported. |
| PD | Kong_2023 | not_relevant | 1 | 0 | The paper is an in silico study using molecular docking and dynamics; it cites a literature IC50 for ipragliflozin but does not report or derive any exposure-response or dose-response relationship for the drug. |
| popPK | Lo_2018 | irrelevant | 0 | 0 | This is a systematic review of clinical efficacy and safety of glucose-lowering agents, not a pharmacokinetic study, and it does not report PK parameters for ipragliflozin. |
| PD | Lo_2018 | not_relevant | 0 | 0 | The paper is a systematic review of clinical trials in CKD and reports aggregate efficacy/safety outcomes (e.g., HbA1c reduction) without any pharmacokinetic data, exposure-response modeling, or numeric PD parameters for ipragliflozin. |
| popPK | Maurer_2011 | irrelevant | 0 | 0 | The study focuses on dapagliflozin (a different SGLT2 inhibitor), not ipragliflozin. |
| PD | Maurer_2011 | not_relevant | 0 | 0 | The paper focuses on the pharmacodynamic modeling of dapagliflozin, not ipragliflozin. |
| popPK | Saito_2020 | irrelevant | 2 | 0 | The study reports population pharmacodynamic (PD) parameters for glucose-lowering effects (Emax, EC50) and disease progression, not quantitative pharmacokinetic (PK) disposition parameters like clearance or volume. |
| popPK | Sato_2024 | irrelevant | 1 | 0 | The study is a model-based meta-analysis of HbA1c reduction (pharmacodynamics) and does not report quantitative pharmacokinetic disposition parameters (CL, V, Q, ka) for ipragliflozin. |
| popPK | Scheen_2015 | irrelevant | 1 | 0 | The paper is a narrative review that describes general pharmacokinetic characteristics qualitatively but does not report specific quantitative disposition parameters (CL, V, etc.) for ipragliflozin. |
| PD | Scheen_2015 | not_relevant | 1 | 0 | The text is a qualitative review summarizing general PK/PD trends of SGLT2 inhibitors in CKD without providing specific numeric PD parameters or concentration-effect curves for ipragliflozin. |
| popPK | Scheen_2015_2 | irrelevant | 0 | 0 | The paper is a review of SGLT2 inhibitors that provides only qualitative descriptions of pharmacokinetic characteristics without reporting any quantitative disposition parameters for ipragliflozin. |
| PD | Scheen_2015_2 | not_relevant | 1 | 0 | The text is a general review of SGLT2 inhibitors that describes the mechanism of action and clinical efficacy qualitatively but does not provide specific numeric pharmacodynamic parameters (e.g., Emax, EC50) or exposure-response data for ipragliflozin. |
| popPK | Schwartz_2011 | irrelevant | 2 | 0 | The study reports qualitative PK descriptions (rapid absorption, dose linearity) but lacks quantitative disposition parameters (CL, V, ka) or compartmental model values in the provided evidence. |
| popPK | Tahara_2016 | irrelevant | 2 | 0 | The study is an animal (mouse) pharmacodynamic comparison that classifies drugs by duration of effect but does not report quantitative human PK parameters (CL, V, ka) for ipragliflozin in the provided evidence. |
| PD | Tahara_2016 | not_relevant | 2 | 1 | The text is an abstract describing a comparative study in mice that classifies drugs by duration of action but does not provide specific numeric PD parameters (e.g., Emax, EC50) or explicit concentration-effect curves for ipragliflozin. |
| popPK | Tahara_2016_2 | irrelevant | 1 | 0 | The study focuses on antidiabetic pharmacodynamic effects in mice and does not report quantitative pharmacokinetic parameters for ipragliflozin. |
| PD | Tahara_2016_2 | not_relevant | 2 | 1 | The text describes qualitative antidiabetic effects and relative potency comparisons in mice but does not provide numeric PD parameters (e.g., EC50, Emax) or specific concentration-effect data for ipragliflozin. |
| popPK | Tanaka_2023 | irrelevant | 0 | 0 | The paper reports clinical outcomes (fluid volume parameters) from a trial and does not contain pharmacokinetic disposition parameters for ipragliflozin. |
| PGx | Toyoki_2017 | not_relevant | 0 | 0 | The paper studies the mechanism of insulin on uric acid transporters and does not investigate pharmacogenomics or PK/PD parameters of ipragliflozin. |
| popPK | Toyoshima_2020 | relevant | 8 | 4 | Reports PK/PD parameters (AUC24h, Emax, EX50) for ipragliflozin in humans, though specific clearance/volume values are not explicitly detailed. |
| popPK | Veltkamp_2011 | relevant | 4 | 2 | The study reports basic PK parameters (tmax, t1/2) for ipragliflozin, but lacks quantitative disposition parameters like clearance (CL) or volume (V) required for population-PK modeling. |
| popPK | Veltkamp_2012 | irrelevant | 2 | 0 | The study focuses on the safety of combination therapy and the effect of ipragliflozin on metformin PK, without reporting quantitative disposition parameters (CL, V, etc.) for ipragliflozin itself. |
| PD | Veltkamp_2012 | not_relevant | 2 | 1 | The study reports a single dose (300 mg) effect on urinary glucose excretion (UGE) but does not provide a concentration-effect curve, multiple dose levels, or formal PK/PD modeling parameters (e.g., Emax, EC50). |
| popPK | Wang_2022 | irrelevant | 1 | 0 | The study models the pharmacodynamic effect of SGLT-2 inhibitors on body weight (Emax model), not pharmacokinetic disposition parameters (CL, V, etc.). |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 21:20 UTC</sub>
