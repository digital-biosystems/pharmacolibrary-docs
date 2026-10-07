<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;ponesimod&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ponesimod_Valenzuela2021_reference&quot;,&quot;label&quot;:&quot;Valenzuela_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ponesimod/Ponesimod_Valenzuela2021_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# ponesimod

- **generic name:** ponesimod
- **ATC codes:** `L04AE04`
- **DrugBank:** [DB12016](https://go.drugbank.com/drugs/DB12016) · **PubChem:** [CID 11363176](https://pubchem.ncbi.nlm.nih.gov/compound/11363176)
- **molar mass:** 460.97 g/mol (C23H25ClN2O4S) — DrugBank
- **groups:** approved, investigational

## About

Ponesimod is an immunosuppressant used to treat relapsing-remitting multiple sclerosis. It is authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q18604129](https://www.wikidata.org/wiki/Q18604129) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| ponesimod | parent | 460.97 | C23H25ClN2O4S | DrugBank | [11363176](https://pubchem.ncbi.nlm.nih.gov/compound/11363176) | Valenzuela_2021 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 00:22 | 6:54 | 1/0/0 | 5/0/3 | 0/0/0 | 249,988/12,298 | einfracz / qwen3.8-27b | 12 | 0/7 | 12/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Valenzuela_2021_reference](drugs/drug_ponesimod/Ponesimod_Valenzuela2021_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Valenzuela B et al., Effect of Ponesimod Exposure on Total L…, Clinical pharmacokinetics (2021) | [10.1007/s40262-021-01019-9](https://doi.org/10.1007/s40262-021-01019-9) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Brossard_2013_total_lymphocyte_count](drugs/drug_ponesimod/pd_Brossard_2013_total_lymphocyte_count.md) | total lymphocyte count ← ponesimod · inhibition effect | — | Brossard P et al., Pharmacokinetics and pharmacodynamics o…, British journal of clinical… (2013) | [10.1111/bcp.12129](https://doi.org/10.1111/bcp.12129) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Krause_2018_PASI](drugs/drug_ponesimod/pd_Krause_2018_PASI.md) | PASI score ← ponesimod · delayed effect through transit (transduction) compartments | — | Krause A et al., Modeling clinical efficacy of the S1P r…, Journal of dermatological s… (2018) | [10.1016/j.jdermsci.2017.11.003](https://doi.org/10.1016/j.jdermsci.2017.11.003) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Kümmel_2018_total_lymphocyte_count_reduction_relative_to_baseline_levels](drugs/drug_ponesimod/pd_K_mmel_2018_total_lymphocyte_count_reduction_relative_to_bas.md) | total lymphocyte count reduction relative to baseline levels ← ponesimod · direct sigmoid Emax (Hill) effect | — | Kümmel A et al., Confidence and Prediction Intervals for…, CPT: pharmacometrics & syst… (2018) | [10.1002/psp4.12286](https://doi.org/10.1002/psp4.12286) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Lott_2017_2_B_cells](drugs/drug_ponesimod/pd_Lott_2017_2_B_cells.md) | B cells ← ponesimod · indirect response — drug inhibits the loss of B cells | — | Lott D et al., Modeling the Effect of the Selective S1…, Pharmaceutical research (2017) | [10.1007/s11095-016-2087-x](https://doi.org/10.1007/s11095-016-2087-x) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Lott_2017_2_T_cytotoxic_cells](drugs/drug_ponesimod/pd_Lott_2017_2_T_cytotoxic_cells.md) | T cytotoxic cells ← ponesimod · indirect response — drug inhibits the loss of T cytotoxic cells | — | Lott D et al., Modeling the Effect of the Selective S1…, Pharmaceutical research (2017) | [10.1007/s11095-016-2087-x](https://doi.org/10.1007/s11095-016-2087-x) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Lott_2017_2_T_helper_cells](drugs/drug_ponesimod/pd_Lott_2017_2_T_helper_cells.md) | T helper cells ← ponesimod · indirect response — drug inhibits the loss of T helper cells | — | Lott D et al., Modeling the Effect of the Selective S1…, Pharmaceutical research (2017) | [10.1007/s11095-016-2087-x](https://doi.org/10.1007/s11095-016-2087-x) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Valenzuela_2023_HR](drugs/drug_ponesimod/pd_Valenzuela_2023_HR.md) | heart rate ← ponesimod · inhibition effect | — | Valenzuela B et al., Pharmacokinetic-Pharmacodynamic Modelin…, Clinical pharmacology and t… (2023) | [10.1002/cpt.2827](https://doi.org/10.1002/cpt.2827) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Hoch_2015_QTcI](drugs/drug_ponesimod/pd_Hoch_2015_QTcI.md) | QTcI ← ponesimod · direct linear effect | model (no simulator) | Hoch M et al., Effect of ponesimod, a selective S1P1 r…, Basic & clinical pharmacolo… (2015) | [10.1111/bcpt.12336](https://doi.org/10.1111/bcpt.12336) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Valenzuela_2021_TLC](drugs/drug_ponesimod/pd_Valenzuela_2021_TLC.md) | total lymphocyte counts ← ponesimod · indirect response — drug inhibits the production of total lymphocyte counts | model (no simulator) | Valenzuela B et al., Effect of Ponesimod Exposure on Total L…, Clinical pharmacokinetics (2021) | [10.1007/s40262-021-01019-9](https://doi.org/10.1007/s40262-021-01019-9) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Valenzuela_2022_CUAL](drugs/drug_ponesimod/pd_Valenzuela_2022_CUAL.md) | Combined unique active lesions ← Ponesimod · direct log-linear effect | model (no simulator) | Valenzuela B et al., An exposure-response analysis of ponesi…, CPT: pharmacometrics & syst… (2022) | [10.1002/psp4.12778](https://doi.org/10.1002/psp4.12778) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=ponesimod) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | heart | `CYP2J2` substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate, `UGT2B7` substrate | DrugBank actor |
| metabolism | liver | `CYP3A4` substrate, `CYP3A5` substrate, `UGT1A1` substrate, `UGT2B7` substrate | DrugBank actor |
| metabolism | small intestine | `CYP2J2` substrate, `CYP3A4` substrate, `CYP3A5` substrate, `UGT1A1` substrate, `UGT2B7` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | lung | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: CYP4F12 (substrate), CYP4F3 (substrate), S1PR1 (modulator), S1PR1 (regulator), S1PR1 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 56 matched, 55 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_7 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Krause_2014.pdf` | Krause A et al., Population pharmacokinetics and pharmac…, Journal of pharmacokinetics… (2014) | popPK | 10 | [10.1007/s10928-014-9362-4](https://doi.org/10.1007/s10928-014-9362-4) | [24930034](https://pubmed.ncbi.nlm.nih.gov/24930034) | The paper describes a population PK/PD model for ponesimod with specific structural details (absorption lag, sequential zero/first-order absorption, two compartments), but the extracted evidence provided contains no numeric parameter values (CL, V, Q, ka, t1/2). |
| `Lott_2016.pdf` | Lott D et al., Population pharmacokinetics of ponesimo…, European journal of pharmac… (2016) | popPK | 10 | [10.1016/j.ejps.2016.04.021](https://doi.org/10.1016/j.ejps.2016.04.021) | [27108115](https://pubmed.ncbi.nlm.nih.gov/27108115) | The paper describes a population PK model for ponesimod, but the evidence contains only qualitative descriptions (e.g., "2 compartments", "9-fold higher exposure") and no specific numeric parameter values (CL, V, etc.). |
| `Valenzuela_2021.pdf` | Valenzuela B et al., Effect of Ponesimod Exposure on Total L…, Clinical pharmacokinetics (2021) | popPK | 10 | [10.1007/s40262-021-01019-9](https://doi.org/10.1007/s40262-021-01019-9) | [33914285](https://pubmed.ncbi.nlm.nih.gov/33914285) | The paper reports a population PK/PD model for ponesimod in humans with specific quantitative values for apparent clearance (5.52 L/h) and volume of distribution (239 L) provided in the abstract. |
| `Valenzuela_2023.pdf` | Valenzuela B et al., Pharmacokinetic-Pharmacodynamic Modelin…, Clinical pharmacology and t… (2023) | popPK | 10 | [10.1002/cpt.2827](https://doi.org/10.1002/cpt.2827) | [36524329](https://pubmed.ncbi.nlm.nih.gov/36524329) | The study describes a population PK/PD model for ponesimod, but the evidence text reports only PK/PD effect parameters and qualitative PK findings, not the specific quantitative PK parameter values (CL, V, Q, etc.) which are likely in supplementary material or figures. |
| `Lott_2017.pdf` | Lott D et al., Impact of Demographics, Organ Impairmen…, Clinical pharmacokinetics (2017) | popPK | 9 | [10.1007/s40262-016-0446-8](https://doi.org/10.1007/s40262-016-0446-8) | [27638335](https://pubmed.ncbi.nlm.nih.gov/27638335) | The paper describes a population PK model for ponesimod, but the specific numeric parameter values (CL, V, Q, ka, etc.) are not present in the provided evidence text. |
| `Reyes_2014_2.pdf` | Reyes M et al., Effects of ethnicity and sex on the pha…, Pharmacology (2014) | popPK | 6 | [10.1159/000368837](https://doi.org/10.1159/000368837) | [25402365](https://pubmed.ncbi.nlm.nih.gov/25402365) | The study reports non-compartmental PK parameters (AUC, t1/2) for ponesimod in humans, which are quantitative disposition metrics, though it lacks a full population PK model (CL, V, Q) or absorption rate (ka). |
| `Brossard_2013.pdf` | Brossard P et al., Pharmacokinetics and pharmacodynamics o…, British journal of clinical… (2013) | popPK | 5 | [10.1111/bcp.12129](https://doi.org/10.1111/bcp.12129) | [23594176](https://pubmed.ncbi.nlm.nih.gov/23594176) | The abstract reports qualitative PK findings and summary ranges for Tmax and half-life, but specific numeric parameters for clearance, volume, or intercompartmental clearance are not explicitly detailed in the text provided. |

<sub>queue written 2026-10-07T00:20:34.767638+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aledavood_2025 | irrelevant | 0 | 0 | The paper is a computational study on CHI3L1 inhibition using molecular docking and dynamics, not a pharmacokinetic study of ponesimod. |
| popPK | Birker-Robaczewska_2018 | irrelevant | 1 | 0 | This is a mechanistic pharmacology study focusing on receptor signaling pathways (Gαi/β-arrestin) and lymphocyte counts, not a pharmacokinetic study reporting quantitative disposition parameters (CL, V, Ka) for ponesimod. |
| popPK | Brossard_2013 | relevant | 5 | 4 | The abstract reports qualitative PK findings and summary ranges for Tmax and half-life, but specific numeric parameters for clearance, volume, or intercompartmental clearance are not explicitly detailed in the text provided. |
| popPK | Dash_2018 | irrelevant | 3 | 0 | This is a review article that summarizes pharmacokinetic parameters but does not report the specific quantitative values for clearance, volume, or intercompartmental clearance required for extraction, referencing primary studies instead. |
| popPK | Gisleskog_2021 | irrelevant | 2 | 0 | This is an exposure-response analysis focused on efficacy (MRI lesions/relapse rates) and does not report quantitative pharmacokinetic parameters (CL, V, ka) for ponesimod. |
| popPK | Gu_2024 | irrelevant | 0 | 0 | This study reports the PET pharmacokinetics of the radiotracer [18F]TZ4877 in nonhuman primates, using ponesimod only as a non-radiolabeled reference blocker to assess target occupancy. |
| popPK | Gu_2025 | irrelevant | 0 | 0 | The study evaluates the PET radiotracer [18F]TZ4877 in nonhuman primates, using ponesimod only as a reference blocker to assess radiotracer occupancy, without reporting ponesimod's own pharmacokinetic parameters. |
| popPK | Huntjens_2026 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of mocravimod, not ponesimod. |
| popPK | Krause_2014 | relevant | 10 | 0 | The paper describes a population PK/PD model for ponesimod with specific structural details (absorption lag, sequential zero/first-order absorption, two compartments), but the extracted evidence provided contains no numeric parameter values (CL, V, Q, ka, t1/2). |
| popPK | Kruger_2023 | irrelevant | 4 | 0 | The paper is a clinical review that summarizes PK parameters (half-life, bioavailability) but does not provide the specific numeric values for clearance (CL), volume of distribution (V), or intercompartmental clearance (Q) required for population PK extraction. |
| popPK | Kümmel_2018 | irrelevant | 0 | 0 | The paper is a general methodological tutorial on confidence and prediction intervals for pharmacometric models and does not report any specific pharmacokinetic parameters for ponesimod. |
| popPK | Liu_2025 | irrelevant | 0 | 0 | The paper is a Cochrane review on the efficacy and safety of Natalizumab for multiple sclerosis and does not mention ponesimod or report any pharmacokinetic parameters. |
| popPK | Lott_2016 | relevant | 10 | 0 | The paper describes a population PK model for ponesimod, but the evidence contains only qualitative descriptions (e.g., "2 compartments", "9-fold higher exposure") and no specific numeric parameter values (CL, V, etc.). |
| popPK | Lott_2017 | relevant | 9 | 0 | The paper describes a population PK model for ponesimod, but the specific numeric parameter values (CL, V, Q, ka, etc.) are not present in the provided evidence text. |
| popPK | Lott_2017_2 | irrelevant | 0 | 0 | The paper describes pharmacodynamic modeling of lymphocyte subsets, not the pharmacokinetic disposition parameters of ponesimod. |
| popPK | Lott_2020 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of cenerimod, not ponesimod. |
| popPK | Piali_2011 | irrelevant | 2 | 0 | The paper reports pharmacodynamic data (lymphocyte count) and in vitro potency (EC50), but does not provide quantitative population pharmacokinetic parameters like clearance or volume of distribution. |
| popPK | Reyes_2014 | irrelevant | 0 | 0 | The study evaluates ponesimod only as an interacting drug affecting the PK of contraceptives (NET and EE), not as the subject drug. |
| popPK | Valenzuela_2022 | irrelevant | 2 | 1 | The paper is an exposure-response (efficacy) analysis that uses AUC as a covariate but does not report the quantitative population PK parameters (CL, V, etc.) for ponesimod, which are derived from a separate referenced study. |
| popPK | Valenzuela_2023 | relevant | 10 | 2 | The study describes a population PK/PD model for ponesimod, but the evidence text reports only PK/PD effect parameters and qualitative PK findings, not the specific quantitative PK parameter values (CL, V, Q, etc.) which are likely in supplementary material or figures. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 00:20 UTC</sub>
