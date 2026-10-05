<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10A&quot;,&quot;href&quot;:&quot;atc/A10A.md&quot;},{&quot;label&quot;:&quot;insulin aspart&quot;}]"></div>

# insulin aspart

- **generic name:** insulin aspart
- **ATC codes:** `A10AB05`, `A10AD05`, `A10AD06`
- **DrugBank:** [DB01306](https://go.drugbank.com/drugs/DB01306) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Insulin aspart is a fast-acting insulin analogue used to treat diabetes, including type-1 diabetes and high blood sugar. It is widely used and authorised in the European Union, available both alone and in combination with longer-acting insulins.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2754775](https://www.wikidata.org/wiki/Q2754775) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| insulin aspart (insulin_aspart) | parent | 5831.65 | C256H387N65O79S6 | PubChem | [16132418](https://pubchem.ncbi.nlm.nih.gov/compound/16132418) | Clausen_2006 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 21:50 | 21:03 | 0/0/1 | 3/0/0 | 0/0/0 | 410,361/61,892 | ollama / qwen3.8:27b-mtp-q8_0 | 14 | 0/12 | 14/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.105). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q88, Q189 — no SI value to build fr…</sub><br><sub>route_to: `human_review`</sub> | [Clausen_2006_reference](drugs/drug_insulin_aspart/InsulinAspart_Clausen2006_reference.md) | — | 1-compartment (no model) | 6 | Clausen WH et al., Within-patient variation of the pharmac…, Diabetologia (2006) | [10.1007/s00125-006-0327-z](https://doi.org/10.1007/s00125-006-0327-z) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span> | [Haahr_2016_GIR](drugs/drug_insulin_aspart/pd_Haahr_2016_GIR.md) | glucose infusion rate ← insulin aspart · stimulation effect | — | Haahr H et al., Insulin degludec/insulin aspart in Japa…, Journal of diabetes investi… (2016) | [10.1111/jdi.12461](https://doi.org/10.1111/jdi.12461) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Heise_2014_GIR](drugs/drug_insulin_aspart/pd_Heise_2014_GIR.md) | glucose infusion rate ← insulin aspart · indirect response — drug inhibits the loss of glucose infusion rate | — | Heise T et al., Distinct Prandial and Basal Glucose-Low…, Diabetes therapy : research… (2014) | [10.1007/s13300-014-0070-2](https://doi.org/10.1007/s13300-014-0070-2) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Rüppel_2017_GIR](drugs/drug_insulin_aspart/pd_R_ppel_2017_GIR.md) | glucose infusion rate ← insulin · direct sigmoid Emax (Hill) effect | — | Rüppel D et al., A Population Dose-Response Model for In…, CPT: pharmacometrics & syst… (2017) | [10.1002/psp4.12189](https://doi.org/10.1002/psp4.12189) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Rüppel_2017_GIRAUC](drugs/drug_insulin_aspart/pd_R_ppel_2017_GIRAUC.md) | AUC of GIR ← insulin · direct sigmoid Emax (Hill) effect | — | Rüppel D et al., A Population Dose-Response Model for In…, CPT: pharmacometrics & syst… (2017) | [10.1002/psp4.12189](https://doi.org/10.1002/psp4.12189) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=insulin_aspart) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP1A2` inducer | DrugBank actor |

<sub>Actors without a tissue in the table: IGF1R (activator), INS (modulator), INSR (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 207 matched, 53 returned
- **screened:** 12  ·  **relevant:** 5
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 1
- **scholar-agent fallback query used:** True

## Full text wanted

_10 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kulesh_2022.pdf` | Kulesh VS et al., Modeling of Pharmacokinetic Profiles of…, Journal of clinical pharmac… (2022) | popPK | 10 | [10.1002/jcph.2049](https://doi.org/10.1002/jcph.2049) | [35320591](https://pubmed.ncbi.nlm.nih.gov/35320591) | The paper describes a population PK model for insulin aspart, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |
| `Østerberg_2003.pdf` | Østerberg O et al., Pharmacokinetic and pharmacodynamic pro…, Journal of pharmacokinetics… (2003) | popPK | 9 | [10.1023/a:1025594110558](https://doi.org/10.1023/a:1025594110558) | [14571692](https://pubmed.ncbi.nlm.nih.gov/14571692) | The study reports quantitative compartmental PK parameters (elimination rate constant, absorption sigmoidicity) for insulin aspart in humans, with specific numeric values provided in the text. |
| `Herzig_2020.pdf` | Herzig D et al., Pharmacokinetics of Faster and Standard…, Diabetes technology & thera… (2020) | popPK | 8 | [10.1089/dia.2019.0477](https://doi.org/10.1089/dia.2019.0477) | [31999478](https://pubmed.ncbi.nlm.nih.gov/31999478) | The study reports pharmacokinetic parameters (Tmax, metabolic clearance rate) for insulin aspart in humans, but specific numeric values for clearance or volume are not explicitly listed in the provided text, only statistical comparisons and Tmax. |
| `Rasmussen_2014.pdf` | Rasmussen CH et al., Insulin aspart pharmacokinetics: an ass…, European journal of pharmac… (2014) | popPK | 8 | [10.1016/j.ejps.2014.05.010](https://doi.org/10.1016/j.ejps.2014.05.010) | [24878388](https://pubmed.ncbi.nlm.nih.gov/24878388) | The paper describes a population PK analysis of insulin aspart in humans, but the specific numeric parameter values are not present in the provided evidence, which only contains the abstract and qualitative descriptions of the mechanisms. |
| `Wilinska_2017.pdf` | Wilinska ME et al., Modeling Day-to-Day Variability of Gluc…, IEEE transactions on bio-me… (2017) | popPK | 8 | [10.1109/TBME.2016.2590498](https://doi.org/10.1109/TBME.2016.2590498) | [28113240](https://pubmed.ncbi.nlm.nih.gov/28113240) | The study reports a compartmental model for insulin aspart action (time-to-peak, sensitivity) in humans, but specific numeric parameter values are not explicitly listed in the provided text. |
| `Chang_2025.pdf` | Chang YC et al., Comparing the Efficacy of Various Insul…, Journal of clinical pharmac… (2025) | pd | 5 | [10.1002/jcph.70010](https://doi.org/10.1002/jcph.70010) | [39982761](https://www.ncbi.nlm.nih.gov/pubmed/39982761) | metadata signals extractable PD data (PharmacodynamicModel) |
| `Hövelmann_2024.pdf` | Hövelmann U et al., Pharmacokinetic and pharmacodynamic pro…, Diabetes, obesity & metabol… (2024) | pd | 5 | [10.1111/dom.15510](https://doi.org/10.1111/dom.15510) | [38379002](https://www.ncbi.nlm.nih.gov/pubmed/38379002) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Li_2021.pdf` | Li T et al., Interindividual Variability in the Phar…, Clinical therapeutics (2021) | pd | 5 | [10.1016/j.clinthera.2021.01.008](https://doi.org/10.1016/j.clinthera.2021.01.008) | [33558076](https://www.ncbi.nlm.nih.gov/pubmed/33558076) | metadata signals extractable PD data (PK/PD) |
| `Petrov_2022.pdf` | Petrov AV et al., PKPD Modeling and Simulations to Suppor…, Clinical pharmacology in dr… (2022) | pd | 5 | [10.1002/cpdd.1152](https://doi.org/10.1002/cpdd.1152) | [35980375](https://www.ncbi.nlm.nih.gov/pubmed/35980375) | metadata signals extractable PD data (PKPD) |
| `Zhu_2026.pdf` | Zhu D et al., Pharmacokinetics and pharmacodynamics s…, Journal of pharmaceutical s… (2026) | pd | 5 | [10.1016/j.xphs.2026.104424](https://doi.org/10.1016/j.xphs.2026.104424) | [42457027](https://www.ncbi.nlm.nih.gov/pubmed/42457027) | metadata signals extractable PD data (Sigmoid) |

<sub>queue written 2026-10-04T21:31:11.485248+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bleshøy_2026 | irrelevant | 0 | 0 | The study focuses on intracellular trafficking and mechanistic imaging in live cells, not on quantitative pharmacokinetic disposition parameters (CL, V, ka) for insulin aspart. |
| PD | Bleshøy_2026 | not_relevant | 0 | 0 | The paper focuses on intracellular trafficking and diffusion dynamics using single-particle tracking and machine learning, not on pharmacodynamic exposure-response or dose-response relationships. |
| PGx | Bozek_2017 | not_relevant | 0 | 0 | The study investigates the pharmacogenomic effect of COMT and DBH polymorphisms on insulin detemir, not insulin aspart. |
| popPK | Chang_2025 | irrelevant | 0 | 0 | no_text gate: only 140 chars of text extracted (&lt; 400) |
| popPK | Chen_2025 | irrelevant | 1 | 0 | The study focuses on a novel premixed insulin (GZR101) and its basal component (GZR33), using insulin aspart only as a control or component without reporting specific quantitative PK parameters (CL, V, ka) for insulin aspart itself. |
| PD | Dorotenko_2023 | not_relevant | 3 | 2 | The study reports PK bioequivalence and qualitative PD safety/comparability via clamp, but does not provide numeric PD parameters (Emax, EC50) or an explicit concentration-effect curve in the provided text. |
| PD | Faingold_2022 | not_relevant | 2 | 0 | The text is a qualitative summary describing a left-shifted concentration-time profile and improved early glycemic control, but it does not provide specific numeric PD parameters (e.g., Emax, EC50) or a quantitative exposure-response curve. |
| PD | Gammeltoft_1999 | not_relevant | 1 | 0 | The text is a qualitative review/summary that mentions superior pharmacodynamic profiles but does not provide any numeric PD parameters, concentration-effect curves, or specific dose-response data. |
| PD | Ghade_2024 | not_relevant | 1 | 0 | The paper focuses on physicochemical and structural characterization for biosimilarity and mentions PK/PD bioequivalence in clinical trials but does not report any numeric PD parameters or exposure-response data. |
| popPK | Haahr_2016 | irrelevant | 2 | 0 | The study reports pharmacodynamic parameters (GIR) for a combination product (IDegAsp) and explicitly states that pharmacokinetic data for insulin aspart are "not shown" in the provided text. |
| popPK | Heise_2014 | irrelevant | 4 | 2 | The study focuses on the pharmacodynamics of the IDegAsp co-formulation and reports only AUC and tmax for insulin aspart, lacking the specific compartmental PK parameters (CL, V, ka) required for extraction. |
| popPK | Hemmingsen_2021 | irrelevant | 0 | 0 | The paper is a clinical review of long-acting insulin analogues (detemir, glargine, degludec) and does not report pharmacokinetic parameters for insulin_aspart. |
| PD | Hemmingsen_2021 | not_relevant | 0 | 0 | The paper is a systematic review of clinical outcomes (HbA1c, hypoglycemia) and does not report pharmacokinetic or pharmacodynamic modeling, exposure-response relationships, or numeric PD parameters for insulin aspart. |
| popPK | Herzig_2020 | relevant | 8 | 4 | The study reports pharmacokinetic parameters (Tmax, metabolic clearance rate) for insulin aspart in humans, but specific numeric values for clearance or volume are not explicitly listed in the provided text, only statistical comparisons and Tmax. |
| PD | Hövelmann_2024 | not_relevant | 0 | 0 | The paper focuses on insulin icodec, not insulin aspart, and does not report PD parameters for the requested drug. |
| popPK | Kiss_2014 | irrelevant | 0 | 0 | The study investigates insulin degludec, not insulin aspart. |
| PD | Kiss_2014 | not_relevant | 0 | 0 | The paper reports pharmacokinetic parameters (AUC, Cmax, CL/F) for insulin degludec in renal impairment but does not report any pharmacodynamic (exposure-response or dose-response) analysis or numeric PD parameters. |
| popPK | Kulesh_2022 | relevant | 10 | 0 | The paper describes a population PK model for insulin aspart, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |
| PD | Kulesh_2022 | not_relevant | 0 | 0 | The paper focuses exclusively on pharmacokinetic (PK) modeling of insulin aspart and does not report any pharmacodynamic (PD) or exposure-response relationships. |
| popPK | Leal_2023 | irrelevant | 0 | 0 | The study is a population-wide analysis of dosage modifications in polypharmacy and does not report pharmacokinetic parameters for insulin_aspart. |
| PD | Leal_2023 | not_relevant | 0 | 0 | The paper is a population-wide observational study of polypharmacy and dosage adjustments using electronic health records; it does not report pharmacokinetic or pharmacodynamic modeling, concentration-effect relationships, or numeric PD parameters for insulin aspart. |
| popPK | Lehmann_2009 | irrelevant | 2 | 0 | The paper describes a simulation model for insulin absorption and disposition but does not report original quantitative PK parameter values (CL, V, ka) for insulin aspart, only simulated profiles. |
| PD | Mathiesen_2023 | not_relevant | 0 | 0 | The paper is a clinical trial comparing the efficacy and safety of two basal insulins (degludec vs detemir) in pregnancy and does not report any pharmacokinetic or pharmacodynamic modeling, exposure-response analysis, or numeric PD parameters for insulin aspart. |
| PD | Meneilly_2007 | not_relevant | 2 | 1 | The study compares PK/PD profiles qualitatively and reports AUCs, but does not provide numeric PD parameters (e.g., Emax, EC50) or a concentration-effect curve. |
| popPK | Muddather_2026 | irrelevant | 0 | 0 | The paper is a review of DPP-4 inhibitors in cancer and does not report pharmacokinetic parameters for insulin_aspart. |
| PD | Muddather_2026 | not_relevant | 0 | 0 | The paper is a review on DPP-4 inhibitors in cancer and does not report any pharmacodynamic or exposure-response data for insulin aspart. |
| PD | Nasrallah_2012 | not_relevant | 1 | 0 | The paper is a narrative review of insulin degludec that summarizes clinical trial outcomes (A1c, hypoglycemia rates) and qualitative pharmacokinetic properties, but it does not report any numeric pharmacodynamic parameters (e.g., Emax, EC50) or concentration-effect curves for insulin aspart or any other drug. |
| PD | Nosrati_2023 | not_relevant | 0 | 0 | The paper is a pharmacoeconomic evaluation comparing cost-effectiveness and does not report any pharmacokinetic or pharmacodynamic modeling or numeric PD parameters. |
| PD | Paquot_2018 | not_relevant | 2 | 1 | The text is a qualitative summary of clinical trial outcomes and general PK/PD profiles without providing specific numeric PD parameters (e.g., Emax, EC50) or extractable concentration-effect curves. |
| popPK | Pereira_2025 | irrelevant | 0 | 0 | The paper is a review of hydrazone scaffolds for anti-leishmanial activity and does not contain any pharmacokinetic data for insulin_aspart. |
| PD | Pereira_2025 | not_relevant | 0 | 0 | The paper is a review of hydrazone-containing scaffolds for anti-leishmanial activity and does not contain any pharmacodynamic or exposure-response data for insulin aspart. |
| popPK | Petrov_2022 | irrelevant | 0 | 0 | no_text gate: only 93 chars of text extracted (&lt; 400) |
| popPK | Rasmussen_2014 | relevant | 8 | 2 | The paper describes a population PK analysis of insulin aspart in humans, but the specific numeric parameter values are not present in the provided evidence, which only contains the abstract and qualitative descriptions of the mechanisms. |
| PD | Rasmussen_2014 | not_relevant | 0 | 0 | The paper focuses exclusively on the pharmacokinetics and variability of insulin aspart, with no reported pharmacodynamic or exposure-response analysis. |
| popPK | Rendell_2013 | irrelevant | 0 | 0 | The paper focuses on insulin degludec, and insulin aspart is only mentioned as a co-formulated comparator without specific PK parameter values. |
| PD | Rendell_2013 | not_relevant | 1 | 0 | The text is a qualitative review of insulin degludec that mentions insulin aspart only in the context of co-formulation and general pharmacodynamic predictability, without providing any numeric PD parameters or exposure-response data. |
| popPK | Rüppel_2017 | irrelevant | 2 | 8 | The study reports population PK parameters for Technosphere Insulin (inhaled human insulin) and Regular Human Insulin, not insulin aspart. |
| PD | Simpson_1999 | not_relevant | 2 | 1 | The text provides a qualitative summary of PK/PD differences (e.g., faster onset, lower variability) but does not report specific numeric PD parameters (Emax, EC50) or extractable concentration-effect curves. |
| popPK | Sokolov_2023 | irrelevant | 0 | 0 | The paper focuses on a mechanistic model of dapagliflozin (an SGLT2 inhibitor) in type 1 diabetes and does not report pharmacokinetic parameters for insulin_aspart. |
| PD | Sokolov_2023 | not_relevant | 0 | 0 | The paper focuses on a mechanistic systems pharmacology model for dapagliflozin in T1DM; while it includes PK models for insulin aspart, it does not report a pharmacodynamic (exposure-response) relationship or numeric PD parameters for insulin aspart itself. |
| popPK | Solovyov_2024 | irrelevant | 0 | 0 | The paper is a review of condensed matter physics and radiation effects, containing no pharmacokinetic data for insulin_aspart. |
| PD | Solovyov_2024 | not_relevant | 0 | 0 | The paper is a roadmap on condensed matter physics and radiation effects, containing no pharmacological data or PD models for insulin aspart. |
| PD | Tamás_2001 | not_relevant | 1 | 0 | The paper reports clinical efficacy outcomes (HbA1c, blood glucose levels) comparing two insulin types but does not provide a pharmacodynamic model, exposure-response analysis, or numeric PD parameters (e.g., Emax, EC50). |
| popPK | Wilinska_2017 | relevant | 8 | 2 | The study reports a compartmental model for insulin aspart action (time-to-peak, sensitivity) in humans, but specific numeric parameter values are not explicitly listed in the provided text. |
| popPK | Yang_2025 | irrelevant | 0 | 0 | The paper is a narrative review of real-world evidence regarding adherence and cost-effectiveness, containing no pharmacokinetic parameters or quantitative disposition data for insulin aspart. |
| PD | Yang_2025 | not_relevant | 0 | 0 | The paper is a narrative review on real-world evidence, adherence, and cost-effectiveness of insulin and biosimilars, containing no pharmacokinetic or pharmacodynamic modeling or numeric exposure-response parameters. |
| popPK | Zhu_2026 | irrelevant | 0 | 0 | no_text gate: only 108 chars of text extracted (&lt; 400) |
| PD | von_2002 | not_relevant | 3 | 2 | The paper reports comparative PK and PD profiles (time-course data) for two insulins but does not fit a concentration-effect model or provide numeric PD parameters like Emax or EC50. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-04 21:31 UTC</sub>
