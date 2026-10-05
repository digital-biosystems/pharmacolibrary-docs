<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;betrixaban&quot;}]"></div>

# betrixaban

- **generic name:** betrixaban
- **ATC codes:** `B01AF04`
- **DrugBank:** [DB12364](https://go.drugbank.com/drugs/DB12364) · **PubChem:** [CID 10275777](https://pubchem.ncbi.nlm.nih.gov/compound/10275777)
- **molar mass:** 451.91 g/mol (C23H22ClN5O3) — DrugBank
- **groups:** approved

## About

Betrixaban is a direct factor Xa inhibitor anticoagulant intended for the prevention of venous thromboembolism. It is approved for use in some countries, but a marketing application in the European Union was refused, so it is not authorised there.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4898219](https://www.wikidata.org/wiki/Q4898219) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 14:11 | 2:19 | 0/0/0 | 0/0/0 | 0/0/0 | 102,721/1,443 | ollama / qwen3.8:27b-mtp-q8_0 | 12 | 5/2 | 6/6 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=betrixaban) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: F10 (inhibitor), KCNH2 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 36 matched, 36 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ageno_2018 | irrelevant | 1 | 0 | This is a clinical review of the APEX trial focusing on efficacy and safety outcomes, not a pharmacokinetic study reporting quantitative disposition parameters (CL, V, etc.) for betrixaban. |
| popPK | Cabral_2012 | irrelevant | 2 | 1 | This is a clinical review article that provides only a general half-life (19 h) for betrixaban in a summary table, lacking the quantitative compartmental or population PK parameters (CL, V, Q, ka) required for extraction. |
| PD | Cabral_2012 | not_relevant | 1 | 0 | The paper is a clinical review discussing efficacy and safety outcomes (stroke prevention) and general PK properties, but it does not report any specific pharmacodynamic modeling, exposure-response analysis, or numeric PD parameters (such as Emax, EC50, or concentration-effect curves) for betrixaban. |
| popPK | Chan_2014 | irrelevant | 2 | 3 | The paper is a review that reports summary PK parameters (bioavailability, half-life, Tmax) but lacks the specific quantitative compartmental or population-PK parameters (CL, V, Q, ka) required for extraction. |
| popPK | Chan_2015 | irrelevant | 2 | 1 | This is a narrative review that summarizes general pharmacokinetic properties (half-life, bioavailability, clearance percentages) but does not report quantitative compartmental parameters (CL, V, Q, ka) or population-PK model estimates. |
| popPK | Dunois_2021 | irrelevant | 2 | 3 | This is a review article that summarizes general pharmacokinetic properties (half-life, bioavailability, clearance percentages) for betrixaban but does not report original quantitative disposition parameters like clearance (L/h), volume of distribution (L), or compartmental model parameters. |
| PD | Dunois_2021 | not_relevant | 1 | 0 | The paper is a review of laboratory monitoring methods and provides only general pharmacokinetic parameters (Cmax, half-life) without reporting specific pharmacodynamic models, exposure-response curves, or numeric PD parameters (e.g., Emax, EC50) for betrixaban. |
| popPK | Eriksson_2009 | irrelevant | 1 | 0 | The paper is a review comparing multiple drugs, and betrixaban is only listed as an agent in development without any specific quantitative PK parameters provided in the evidence. |
| PD | Eriksson_2009 | not_relevant | 2 | 1 | The text is an introductory review comparing pharmacokinetic and pharmacodynamic features of various anticoagulants, but it does not provide specific numeric PD parameters or exposure-response data for betrixaban. |
| popPK | Feng_2015 | irrelevant | 0 | 0 | The paper is a meta-analysis of clinical efficacy and safety outcomes, not a pharmacokinetic study, and contains no PK parameters for betrixaban. |
| PD | Feng_2015 | not_relevant | 3 | 2 | The paper is a meta-analysis that identifies a linear dose-response relationship for betrixaban regarding VTE risk, but it does not provide specific numeric PD parameters (e.g., slope, intercept, or specific dose-effect values) for betrixaban in the provided text. |
| popPK | Foerster_2018 | irrelevant | 1 | 0 | The paper describes a bioanalytical method validation for quantifying DOACs and does not report population pharmacokinetic parameters or numeric disposition values for betrixaban. |
| PD | Foerster_2018 | not_relevant | 0 | 0 | The paper describes a bioanalytical method for quantifying DOACs and reports PK profiles, but contains no pharmacodynamic data, exposure-response analysis, or numeric PD parameters. |
| popPK | Gelosa_2018 | irrelevant | 1 | 0 | The paper is a review of NOACs and does not report original quantitative pharmacokinetic parameters for betrixaban. |
| PD | Gelosa_2018 | not_relevant | 1 | 0 | The text is a qualitative review of PK drug interactions and does not report any numeric PD parameters or concentration-effect data for betrixaban. |
| popPK | Gosselin_2019 | irrelevant | 0 | 0 | The paper is a review on laboratory assessment methods for DOACs and does not report original quantitative pharmacokinetic parameters for betrixaban. |
| PD | Gosselin_2019 | not_relevant | 1 | 0 | The text is a review of laboratory methods for measuring DOACs and does not report specific numeric PD parameters or exposure-response relationships for betrixaban. |
| popPK | Kaatz_2017 | irrelevant | 0 | 0 | The paper is a clinical management review that mentions betrixaban only in the context of reversal agents and general PK/PD properties without reporting any quantitative pharmacokinetic parameter values. |
| PD | Kaatz_2017 | not_relevant | 1 | 0 | The text is a clinical review discussing management strategies and does not report any specific numeric pharmacodynamic parameters or exposure-response data for betrixaban. |
| popPK | Kaye_2019 | irrelevant | 0 | 0 | The paper is a clinical guideline review regarding perioperative management of anticoagulants and does not report original quantitative pharmacokinetic parameters for betrixaban. |
| PD | Kaye_2019 | not_relevant | 1 | 0 | The paper is a clinical guideline review that mentions betrixaban only in the context of perioperative management and risk stratification, without providing any specific pharmacodynamic data, exposure-response curves, or numeric PD parameters. |
| popPK | Kennedy_2012 | irrelevant | 0 | 0 | The paper is a general review of emerging anticoagulants that mentions betrixaban only as an example of a factor Xa inhibitor without providing any quantitative pharmacokinetic parameters. |
| PD | Kennedy_2012 | not_relevant | 1 | 0 | The text is a general review of emerging anticoagulants that mentions betrixaban only as an example of a direct factor Xa inhibitor, without providing any specific pharmacodynamic data, exposure-response analysis, or numeric parameters. |
| popPK | Lee_2018 | relevant | 4 | 5 | The paper is a review that reports standard single-dose PK parameters (bioavailability, half-life, Vd) for betrixaban in humans, but lacks a compartmental or population PK model with clearance (CL) or intercompartmental clearance (Q). |
| popPK | Lippi_2019 | irrelevant | 0 | 0 | The paper is a narrative review of direct oral anticoagulants and does not report original quantitative pharmacokinetic parameters for betrixaban. |
| PD | Lippi_2019 | not_relevant | 1 | 0 | The text is a narrative review discussing the general landscape of DOACs and mentions betrixaban only in the context of clinical evaluation stages, without providing any specific numeric PD parameters or exposure-response data. |
| popPK | Margetić_2022 | irrelevant | 1 | 0 | The paper is a review focused on laboratory monitoring of DOACs and does not report original quantitative population pharmacokinetic parameters (CL, V, Q, ka) for betrixaban. |
| PD | Margetić_2022 | not_relevant | 1 | 0 | The paper is a review of laboratory methods for measuring DOAC concentrations and does not report any specific pharmacodynamic or exposure-response modeling data for betrixaban. |
| popPK | Mariño-Ocampo_2023 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of protein binding (HSA) using spectroscopy and calorimetry, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PD | Mariño-Ocampo_2023 | not_relevant | 0 | 0 | The paper reports in vitro binding affinity (Kd) of betrixaban to human serum albumin, which is a physicochemical property, not a pharmacodynamic exposure-response or dose-response relationship for a biological effect. |
| popPK | Meddahi_2014 | irrelevant | 1 | 0 | The paper is a review of four factor Xa inhibitors and contains no original quantitative pharmacokinetic parameter values for betrixaban. |
| PD | Meddahi_2014 | not_relevant | 1 | 0 | The text is a general review introduction describing the class of drugs and their clinical utility, without providing specific numeric PD parameters or exposure-response data for betrixaban. |
| popPK | Merli_2012 | irrelevant | 0 | 0 | The paper is a review of hospital formulary challenges for new oral anticoagulants and does not report any quantitative pharmacokinetic parameters for betrixaban. |
| PD | Merli_2012 | not_relevant | 1 | 0 | The text is a general review of new oral anticoagulants for hospital formularies and does not report any specific pharmacodynamic data, exposure-response relationships, or numeric PD parameters for betrixaban. |
| popPK | Miller_2019 | irrelevant | 2 | 1 | This is a clinical efficacy review of the APEX trial that discusses betrixaban's pharmacokinetic profile qualitatively (e.g., half-life 35-45h) but does not report quantitative population PK parameters like clearance, volume, or intercompartmental clearance. |
| popPK | Morell_2010 | irrelevant | 1 | 0 | The paper is a review focusing on rivaroxaban that mentions betrixaban only as a comparator in development without reporting any quantitative pharmacokinetic parameters for it. |
| PD | Morell_2010 | not_relevant | 1 | 0 | The text is a general review of oral factor Xa inhibitors that mentions betrixaban only in a list of compounds without providing any specific pharmacodynamic data, exposure-response analysis, or numeric parameters for it. |
| popPK | Nafee_2018 | irrelevant | 0 | 0 | The paper is a clinical efficacy and safety review of the APEX trial for VTE prevention and does not report quantitative pharmacokinetic parameters (CL, V, ka, etc.) for betrixaban. |
| popPK | Narendra_2023 | irrelevant | 0 | 0 | The paper is an in-silico and in-vitro study on ALDH1A1 inhibition where betrixaban is only a screened compound, not a subject of pharmacokinetic analysis. |
| PD | Narendra_2023 | not_relevant | 0 | 0 | The paper identifies betrixaban as a potential ALDH1A1 inhibitor via virtual screening but does not report any experimental pharmacodynamic data, exposure-response analysis, or numeric PD parameters for betrixaban. |
| popPK | Padrini_2019 | irrelevant | 2 | 0 | This is a review article discussing DOACs in renal failure that mentions betrixaban's renal excretion percentage but does not report original quantitative PK parameters (CL, V, ka) or a compartmental model. |
| PD | Padrini_2019 | not_relevant | 0 | 0 | The provided text is a correction notice for an unrelated study on phenothiazines and aldehyde oxidase, containing no data or analysis regarding betrixaban or any pharmacodynamic parameters. |
| popPK | Perzborn_2009 | irrelevant | 1 | 0 | The paper is a review article discussing multiple FXa inhibitors, including betrixaban, but the provided evidence contains no original quantitative pharmacokinetic parameter values for betrixaban. |
| PD | Perzborn_2009 | not_relevant | 2 | 0 | The text is a review article that qualitatively describes the pharmacodynamic profiles of FXa inhibitors but does not provide specific numeric PD parameters or extractable concentration-effect data for betrixaban. |
| popPK | Piccini_2010 | irrelevant | 0 | 0 | The paper is a narrative review of oral factor Xa inhibitors and does not report original quantitative pharmacokinetic parameters for betrixaban. |
| PD | Piccini_2010 | not_relevant | 1 | 0 | The text is a narrative review summarizing the development status of factor Xa inhibitors and does not report specific numeric pharmacodynamic parameters or exposure-response data for betrixaban. |
| popPK | Rao_2017 | irrelevant | 1 | 0 | The paper is a review article summarizing pipeline drugs and does not report original quantitative pharmacokinetic parameter values for betrixaban. |
| PD | Rao_2017 | not_relevant | 1 | 0 | The text is a review summary that mentions betrixaban but does not provide specific numeric PD parameters or exposure-response data. |
| popPK | Raymond_2021 | irrelevant | 2 | 2 | This is a systematic review of pharmacogenetics that provides only general descriptive PK parameters (bioavailability, half-life) for betrixaban without reporting quantitative compartmental or population-PK model parameters (CL, V, Q, ka). |
| PD | Raymond_2021 | not_relevant | 1 | 0 | The paper is a systematic review of pharmacogenetics and does not report any specific pharmacodynamic (PD) or exposure-response models or numeric PD parameters for betrixaban. |
| PGx | Raymond_2021 | not_relevant | 0 | 0 | The paper is a systematic review that explicitly states literature is scarce for betrixaban and does not report specific pharmacogenomic effects or quantitative data for this drug. |
| popPK | Scarpa_2019 | irrelevant | 3 | 4 | This is a clinical review of efficacy and safety that summarizes PK properties (half-life, bioavailability, renal clearance %) but does not report quantitative compartmental parameters (CL, V, Q, ka) or a population PK model. |
| popPK | Thoenes_2016 | irrelevant | 2 | 0 | The paper is a narrative review summarizing betrixaban's properties and clinical trials but does not provide original quantitative PK parameter values (CL, V, etc.) in the text. |
| PD | Thoenes_2016 | not_relevant | 2 | 0 | The text is a review summary that qualitatively mentions pharmacodynamics but does not provide specific numeric PD parameters or exposure-response data. |
| popPK | Wieland_2019 | irrelevant | 0 | 0 | The paper is a review discussing drug monitoring methods and does not report any quantitative pharmacokinetic parameters for betrixaban. |
| PD | Wieland_2019 | not_relevant | 1 | 0 | The text is a review discussing the concept of PD monitoring for DOACs but does not report any specific numeric PD parameters, concentration-effect curves, or dose-response data for betrixaban. |
| popPK | Winstanley_2013 | irrelevant | 0 | 0 | The paper is a narrative review of anticoagulant development that mentions betrixaban only in the context of phase II trial outcomes without reporting any quantitative pharmacokinetic parameters. |
| PD | Winstanley_2013 | not_relevant | 1 | 0 | The text is a narrative review that qualitatively mentions betrixaban's promising phase II results but provides no numeric PD parameters, exposure-response data, or dose-effect curves. |
| popPK | Xing_2017 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on novel fXa inhibitors where betrixaban is used only as a safety comparator, with no PK parameters reported. |
| PD | Xing_2017 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for a novel compound (8e) and compares its safety profile to betrixaban, but does not report any pharmacodynamic or exposure-response data for betrixaban itself. |
| popPK | Yee_2019 | irrelevant | 0 | 0 | The paper is a clinical safety analysis of bleeding events in the APEX trial and does not report any pharmacokinetic parameters for betrixaban. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
