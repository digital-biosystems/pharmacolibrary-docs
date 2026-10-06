<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;olanzapine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Olanzapine_Johnson2011_reference&quot;,&quot;label&quot;:&quot;Johnson_2011_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_olanzapine/Olanzapine_Johnson2011_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Olanzapine_Zang2024_reference&quot;,&quot;label&quot;:&quot;Zang_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_olanzapine/Olanzapine_Zang2024_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Olanzapine_Zhang2024_reference&quot;,&quot;label&quot;:&quot;Zhang_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_olanzapine/Olanzapine_Zhang2024_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Olanzapine_Zhang2025_reference&quot;,&quot;label&quot;:&quot;Zhang_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_olanzapine/Olanzapine_Zhang2025_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# olanzapine

- **generic name:** olanzapine
- **ATC codes:** `N05AH03`, `N05AH53`
- **DrugBank:** [DB00334](https://go.drugbank.com/drugs/DB00334) · **PubChem:** [CID 4585](https://pubchem.ncbi.nlm.nih.gov/compound/4585)
- **molar mass:** 312.432 g/mol (C17H20N4S) — DrugBank
- **groups:** approved, investigational

## About

Olanzapine is an atypical antipsychotic used to treat schizophrenia, bipolar disorder including acute mania, and other psychotic disorders in adults. It is widely used and authorised in the European Union, where several products remain on the market.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q201872](https://www.wikidata.org/wiki/Q201872) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| olanzapine | parent | 312.432 | C17H20N4S | DrugBank | [4585](https://pubchem.ncbi.nlm.nih.gov/compound/4585) | Johnson_2011, Maharaj_2021, Zang_2024, Zhang_2024, Zhang_2025 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 16:09 | 3:41 | 4/1/1 | 7/1/1 | 0/0/0 | 164,843/11,663 | ollama / glm-5.3-flash | 14 | 1/5 | 5/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Johnson_2011_reference](drugs/drug_olanzapine/Olanzapine_Johnson2011_reference.md) | ▶ model + simulator | 2-compartment, oral | 6 | Johnson M et al., Mechanism-based pharmacokinetic-pharmac…, Pharmaceutical research (2011) | [10.1007/s11095-011-0477-7](https://doi.org/10.1007/s11095-011-0477-7) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Zang_2024_reference](drugs/drug_olanzapine/Olanzapine_Zang2024_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Zang YN et al., Population pharmacokinetics of olanzapi…, Expert opinion on drug meta… (2024) | [10.1080/17425255.2024.2380472](https://doi.org/10.1080/17425255.2024.2380472) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.857). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Zhang_2024_reference](drugs/drug_olanzapine/Olanzapine_Zhang2024_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Zhang C et al., Effects of Aripiprazole on Olanzapine P…, Neuropsychiatric disease an… (2024) | [10.2147/NDT.S455183](https://doi.org/10.2147/NDT.S455183) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.75). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Zhang_2025_reference](drugs/drug_olanzapine/Olanzapine_Zhang2025_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Zhang C et al., Drug-drug interaction of paroxetine on…, Frontiers in psychiatry (2025) | [10.3389/fpsyt.2025.1538996](https://doi.org/10.3389/fpsyt.2025.1538996) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.944). The first reading is what the record holds.">cross-check: partial</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Maharaj_2021_reference](drugs/drug_olanzapine/Olanzapine_Maharaj2021_reference.md) | — | 1-compartment (no model) | 3 | Maharaj AR et al., Population pharmacokinetics of olanzapi…, British journal of clinical… (2021) | [10.1111/bcp.14414](https://doi.org/10.1111/bcp.14414) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Perlstein_2026_reference](drugs/drug_olanzapine/Olanzapine_Perlstein2026_reference.md) | — | 1-compartment (no model) | 0 | Perlstein I et al., Population Pharmacokinetic Model-Based…, Journal of clinical pharmac… (2026) | [10.1002/jcph.70144](https://doi.org/10.1002/jcph.70144) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Jiang_2023_ferroptosis_inhibition_in_RSL3_induced_HT22_cells](drugs/drug_olanzapine/pd_Jiang_2023_ferroptosis_inhibition_in_RSL3_induced_HT22_cells.md) | ferroptosis inhibition in RSL3-induced HT22 cells ← olanzapine · inhibition effect | — | Jiang X et al., Discovery and optimization of olanzapin…, Bioorganic chemistry (2023) | [10.1016/j.bioorg.2023.106393](https://doi.org/10.1016/j.bioorg.2023.106393) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Johnson_2011_D2RO](drugs/drug_olanzapine/pd_Johnson_2011_D2RO.md) | dopamine D2 receptor occupancy ← olanzapine · target-mediated drug disposition | — | Johnson M et al., Mechanism-based pharmacokinetic-pharmac…, Pharmaceutical research (2011) | [10.1007/s11095-011-0477-7](https://doi.org/10.1007/s11095-011-0477-7) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Lee_2015_hERG_tail_current](drugs/drug_olanzapine/pd_Lee_2015_hERG_tail_current.md) | hERG tail current at -50 mV inhibition ← olanzapine · direct sigmoid Emax (Hill) effect | — | Lee HJ et al., Mechanism of inhibition by olanzapine o…, Neuroscience letters (2015) | [10.1016/j.neulet.2015.10.039](https://doi.org/10.1016/j.neulet.2015.10.039) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Lee_2015_hERG_tail_current_2](drugs/drug_olanzapine/pd_Lee_2015_hERG_tail_current_2.md) | hERG tail current inhibition during repolarization (fast application) ← olanzapine · direct sigmoid Emax (Hill) effect | — | Lee HJ et al., Mechanism of inhibition by olanzapine o…, Neuroscience letters (2015) | [10.1016/j.neulet.2015.10.039](https://doi.org/10.1016/j.neulet.2015.10.039) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Olsen_2008_CAR](drugs/drug_olanzapine/pd_Olsen_2008_CAR.md) | conditioned avoidance response suppression ← olanzapine · direct sigmoid Emax (Hill) effect | — | Olsen CK et al., Using pharmacokinetic-pharmacodynamic m…, European journal of pharmac… (2008) | [10.1016/j.ejphar.2008.02.005](https://doi.org/10.1016/j.ejphar.2008.02.005) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Ortega_2010_PANSS](drugs/drug_olanzapine/pd_Ortega_2010_PANSS.md) | Positive and Negative Syndrome Scale (PANSS) score ← olanzapine · indirect response — drug inhibits the production of Positive and Negative Syndrome Scale (PANSS) score | — | Ortega I et al., Modeling the effectiveness of paliperid…, Journal of clinical pharmac… (2010) | [10.1177/0091270009346057](https://doi.org/10.1177/0091270009346057) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Pilla_2013_PANSS_G](drugs/drug_olanzapine/pd_Pilla_2013_PANSS_G.md) | PANSS general subscale score ← olanzapine · direct Emax (saturable) effect | — | Pilla Reddy V et al., Pharmacokinetic-pharmacodynamic modelli…, Schizophrenia research (2013) | [10.1016/j.schres.2013.02.010](https://doi.org/10.1016/j.schres.2013.02.010) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Pilla_2013_PANSS_N](drugs/drug_olanzapine/pd_Pilla_2013_PANSS_N.md) | PANSS negative subscale score ← olanzapine · direct Emax (saturable) effect | — | Pilla Reddy V et al., Pharmacokinetic-pharmacodynamic modelli…, Schizophrenia research (2013) | [10.1016/j.schres.2013.02.010](https://doi.org/10.1016/j.schres.2013.02.010) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Pilla_2013_PANSS_P](drugs/drug_olanzapine/pd_Pilla_2013_PANSS_P.md) | PANSS positive subscale score ← olanzapine · direct Emax (saturable) effect | — | Pilla Reddy V et al., Pharmacokinetic-pharmacodynamic modelli…, Schizophrenia research (2013) | [10.1016/j.schres.2013.02.010](https://doi.org/10.1016/j.schres.2013.02.010) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Pilla_2013_2_PANSS](drugs/drug_olanzapine/pd_Pilla_2013_2_PANSS.md) | PANSS total score ← olanzapine · direct Emax (saturable) effect | — | Pilla Reddy V et al., Pharmacokinetic-pharmacodynamic modelin…, Schizophrenia research (2013) | [10.1016/j.schres.2013.02.011](https://doi.org/10.1016/j.schres.2013.02.011) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Eugene_2017_D2RO](drugs/drug_olanzapine/pd_Eugene_2017_D2RO.md) | dopamine D2-receptor occupancy ← olanzapine · direct Emax (saturable) effect | model (no simulator) | Eugene AR et al., A pharmacodynamic modelling and simulat…, Nordic journal of psychiatry (2017) | [10.1080/08039488.2017.1314011](https://doi.org/10.1080/08039488.2017.1314011) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Johnson_2014_CAT](drugs/drug_olanzapine/pd_Johnson_2014_CAT.md) | catalepsy severity (CAT) ← dopamine D2 receptor occupancy (D2RO) driven by olanzapine · indirect response — drug inhibits the production of catalepsy severity (CAT) | — | Johnson M et al., Dopamine D2 receptor occupancy as a pre…, Pharmaceutical research (2014) | [10.1007/s11095-014-1358-7](https://doi.org/10.1007/s11095-014-1358-7) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=olanzapine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate | DrugBank actor |
| distribution | blood | `ALB` binder, `ORM1` binder | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` substrate, `CYP2C19` inhibitor, `CYP2C9` inhibitor, `CYP2D6` inhibitor/substrate, `CYP3A4` inhibitor, `FMO3` substrate, `UGT1A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ADRA1A (target), ADRA1B (target), ADRB1 (inhibitor), CHRM1 (target), CHRM2 (target), CHRM3 (target), CHRM4 (target), DRD1 (target), DRD2 (target), DRD3 (target), DRD4 (target), DRD5 (target), GABRA1 (inhibitor), HRH1 (target), HTR1A (inhibitor), HTR2A (target), HTR2C (target), HTR3A (target), HTR6 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 109 matched, 20 returned
- **screened:** 6  ·  **relevant:** 6
- **records:** 6  ·  extracted 4  ·  needs_review 1  ·  rejected 1  ·  stale 3
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Zang_2024.pdf` | Zang YN et al., Population pharmacokinetics of olanzapi…, Expert opinion on drug meta… (2024) | popPK | 10 | [10.1080/17425255.2024.2380472](https://doi.org/10.1080/17425255.2024.2380472) | [39010781](https://pubmed.ncbi.nlm.nih.gov/39010781) | Population PK model of olanzapine with full numeric parameters (CL/F, V/F, Ka) reported directly in the abstract. |
| `Tylutki_2015.pdf` | Tylutki Z et al., Abnormal olanzapine toxicokinetic profi…, Toxicology mechanisms and m… (2015) | popPK | 8 | [10.3109/15376516.2014.971137](https://doi.org/10.3109/15376516.2014.971137) | [25264211](https://pubmed.ncbi.nlm.nih.gov/25264211) | Population PK (NLME) modeling of olanzapine in poisoned patients, but no numeric parameter values are present in the evidence. |
| `Mao_2023.pdf` | Mao JH et al., Significant predictors for olanzapine p…, Expert review of clinical p… (2023) | popPK | 5 | [10.1080/17512433.2023.2219055](https://doi.org/10.1080/17512433.2023.2219055) | [37231707](https://pubmed.ncbi.nlm.nih.gov/37231707) | A systematic review of olanzapine population PK studies with some summary numeric values (median CL 0.253 L/h/kg), but full parameter estimates likely in tables/figures not fully provided. |
| `Pilla_2013_2.pdf` | Pilla Reddy V et al., Pharmacokinetic-pharmacodynamic modelin…, Schizophrenia research (2013) | popPK | 5 | [10.1016/j.schres.2013.02.011](https://doi.org/10.1016/j.schres.2013.02.011) | [23473810](https://pubmed.ncbi.nlm.nih.gov/23473810) | PK-PD modeling includes compartmental PK models for olanzapine in schizophrenia patients, but no numeric PK parameter values appear in the evidence (likely in tables/supplement not provided). |

<sub>queue written 2026-10-06T16:06:38.296155+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cooper_2023 | irrelevant | 0 | 0 | Olanzapine is only a co-ingested 5-HT2A antagonist in a serotonin-toxicity outcome model; no PK parameters for olanzapine are reported. |
| popPK | Eugene_2017 | irrelevant | 2 | 1 | This is a pharmacodynamic (D2 receptor occupancy) model, not a PK disposition model; no CL/V/ka/half-life values for olanzapine are reported. |
| popPK | Jiang_2023 | irrelevant | 0 | 0 | This is an in-vitro medicinal chemistry/ferroptosis study with no pharmacokinetic parameters for olanzapine. |
| popPK | Johnson_2014 | irrelevant | 4 | 2 | PK/PD modeling of olanzapine in rats, but no numeric disposition parameter values (CL, V, ka) appear in the evidence; likely in supplementary material. |
| popPK | Jovanović_2020 | irrelevant | 4 | 2 | This is a review of population PK models for olanzapine and other antipsychotics, with no numeric parameter values reported in the evidence. |
| popPK | Lee_2015 | irrelevant | 0 | 0 | In-vitro electrophysiology (hERG channel block) with no PK disposition parameters for olanzapine. |
| popPK | Mao_2023 | relevant | 5 | 4 | A systematic review of olanzapine population PK studies with some summary numeric values (median CL 0.253 L/h/kg), but full parameter estimates likely in tables/figures not fully provided. |
| popPK | Olsen_2008 | relevant | 4 | 2 | PK/PD modelling in rats includes olanzapine, but no numeric PK parameters (CL, V, ka) appear in the evidence; values likely in figures/supplementary material. |
| popPK | Ortega_2010 | irrelevant | 0 | 0 | This is a pharmacodynamic (PANSS effectiveness) model, not a PK study; no disposition parameters for olanzapine are reported. |
| popPK | Pilla_2013 | irrelevant | 3 | 1 | This is a PKPD/PANSS efficacy modelling study; PK parameters were from a prior paper (part I) and no numeric disposition values for olanzapine appear in the evidence. |
| popPK | Pilla_2013_2 | relevant | 5 | 2 | PK-PD modeling includes compartmental PK models for olanzapine in schizophrenia patients, but no numeric PK parameter values appear in the evidence (likely in tables/supplement not provided). |
| popPK | Tylutki_2015 | relevant | 8 | 2 | Population PK (NLME) modeling of olanzapine in poisoned patients, but no numeric parameter values are present in the evidence. |
| popPK | Yin_2016 | relevant | 8 | 1 | This is a population PK model of olanzapine, but the evidence contains only supplementary figure captions with no numeric parameter values (they live in figures/supplement not provided). |
| popPK | Zeng_1997 | irrelevant | 0 | 0 | In-vitro receptor pharmacology study (cAMP/EC50), no PK disposition parameters for olanzapine. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 16:07 UTC</sub>
