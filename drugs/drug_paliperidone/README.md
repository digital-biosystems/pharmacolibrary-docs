<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;paliperidone&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Paliperidone_Kozielska2012_reference&quot;,&quot;label&quot;:&quot;Kozielska_2012_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_paliperidone/Paliperidone_Kozielska2012_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# paliperidone

- **generic name:** paliperidone
- **ATC codes:** `N05AX13`
- **DrugBank:** [DB01267](https://go.drugbank.com/drugs/DB01267) · **PubChem:** [CID 115237](https://pubchem.ncbi.nlm.nih.gov/compound/115237)
- **molar mass:** 426.4839 g/mol (C23H27FN4O3) — DrugBank
- **groups:** approved, investigational

## About

Paliperidone is an antipsychotic used to treat schizophrenia and other psychotic disorders, including schizoaffective disorder. It is authorised in the European Union and is widely used in psychiatric care.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q423292](https://www.wikidata.org/wiki/Q423292) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| paliperidone (paliperidone palmitate, 9-hydroxyrisperidone (paliperidone)) | parent | 426.484 | C23H27FN4O3 | DrugBank | [115237](https://pubchem.ncbi.nlm.nih.gov/compound/115237) | Kozielska_2012, Shimizu_2020, Vandenberghe_2015 |
| risperidone | metabolite | 410.493 | C23H27FN4O2 | PubChem | [5073](https://pubchem.ncbi.nlm.nih.gov/compound/5073) | Kozielska_2012, Vandenberghe_2015 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 16:22 | 6:39 | 1/2/3 | 6/2/1 | 0/0/0 | 286,933/20,827 | ollama / glm-5.3-flash | 8 | 2/6 | 7/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Kozielska_2012_reference](drugs/drug_paliperidone/Paliperidone_Kozielska2012_reference.md) | ▶ model + simulator | parent 2-cmt + liver + 1 metabolite (2-cmt) | 15 | Kozielska M et al., Pharmacokinetic-pharmacodynamic modelin…, Pharmaceutical research (2012) | [10.1007/s11095-012-0722-8](https://doi.org/10.1007/s11095-012-0722-8) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q88 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Shimizu_2020_100_mg_eq_gluteal](drugs/drug_paliperidone/Paliperidone_Shimizu2020_100_mg_eq_gluteal.md) | — | 1-compartment (no model) | 7 | Shimizu H et al., Population Pharmacokinetics of Paliperi…, Clinical pharmacology in dr… (2020) | [10.1002/cpdd.737](https://doi.org/10.1002/cpdd.737) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub><br><sub>route_to: `human_review`</sub> | [Shimizu_2020_150_mg_eq_gluteal](drugs/drug_paliperidone/Paliperidone_Shimizu2020_150_mg_eq_gluteal.md) | — | 1-compartment (no model) | 7 | Shimizu H et al., Population Pharmacokinetics of Paliperi…, Clinical pharmacology in dr… (2020) | [10.1002/cpdd.737](https://doi.org/10.1002/cpdd.737) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub><br><sub>route_to: `human_review`</sub> | [Shimizu_2020_50_mg_eq_gluteal](drugs/drug_paliperidone/Paliperidone_Shimizu2020_50_mg_eq_gluteal.md) | — | 1-compartment (no model) | 7 | Shimizu H et al., Population Pharmacokinetics of Paliperi…, Clinical pharmacology in dr… (2020) | [10.1002/cpdd.737](https://doi.org/10.1002/cpdd.737) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Toja-Camba_2021_reference](drugs/drug_paliperidone/Paliperidone_TojaCamba2021_reference.md) | — | 1-compartment (no model) | 0 | Toja-Camba FJ et al., Review of Pharmacokinetics and Pharmaco…, Pharmaceutics (2021) | [10.3390/pharmaceutics13070935](https://doi.org/10.3390/pharmaceutics13070935) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C2 negative clearance/volume in a covariate scenario or base (implausible — bas…</sub><br><sub>route_to: `human_review`</sub> | [Vandenberghe_2015_reference](drugs/drug_paliperidone/Paliperidone_Vandenberghe2015_reference.md) | — | parent + metabolite (no model) | 5 (+3 cov.) | Vandenberghe F et al., Genetics-Based Population Pharmacokinet…, Clinical pharmacokinetics (2015) | [10.1007/s40262-015-0289-8](https://doi.org/10.1007/s40262-015-0289-8) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Kozielska_2012_5_HT2A_RO](drugs/drug_paliperidone/pd_Kozielska_2012_5_HT2A_RO.md) | 5-HT2A receptor occupancy ← paliperidone (and risperidone, competing for the same receptors) · target-mediated drug disposition | — | Kozielska M et al., Pharmacokinetic-pharmacodynamic modelin…, Pharmaceutical research (2012) | [10.1007/s11095-012-0722-8](https://doi.org/10.1007/s11095-012-0722-8) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Kozielska_2012_D2_RO](drugs/drug_paliperidone/pd_Kozielska_2012_D2_RO.md) | D2 receptor occupancy ← paliperidone (and risperidone, competing for the same receptors) · target-mediated drug disposition | — | Kozielska M et al., Pharmacokinetic-pharmacodynamic modelin…, Pharmaceutical research (2012) | [10.1007/s11095-012-0722-8](https://doi.org/10.1007/s11095-012-0722-8) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Mun_2023_Kv_current](drugs/drug_paliperidone/pd_Mun_2023_Kv_current.md) | voltage-dependent K+ (Kv) channel current inhibition ← paliperidone · direct sigmoid Emax (Hill) effect | — | Mun SY et al., Inhibition of voltage-dependent K, Journal of applied toxicolo… (2023) | [10.1002/jat.4528](https://doi.org/10.1002/jat.4528) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Olsen_2008_CAR](drugs/drug_paliperidone/pd_Olsen_2008_CAR.md) | conditioned avoidance response suppression ← paliperidone · direct sigmoid Emax (Hill) effect | — | Olsen CK et al., Using pharmacokinetic-pharmacodynamic m…, European journal of pharmac… (2008) | [10.1016/j.ejphar.2008.02.005](https://doi.org/10.1016/j.ejphar.2008.02.005) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Ortega_2010_PANSS](drugs/drug_paliperidone/pd_Ortega_2010_PANSS.md) | Positive and Negative Syndrome Scale score ← paliperidone ER · indirect response — drug inhibits the production of Positive and Negative Syndrome Scale score | — | Ortega I et al., Modeling the effectiveness of paliperid…, Journal of clinical pharmac… (2010) | [10.1177/0091270009346057](https://doi.org/10.1177/0091270009346057) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Pilla_2013_PANSS_general](drugs/drug_paliperidone/pd_Pilla_2013_PANSS_general.md) | PANSS general subscale score ← paliperidone · direct Emax (saturable) effect | — | Pilla Reddy V et al., Pharmacokinetic-pharmacodynamic modelli…, Schizophrenia research (2013) | [10.1016/j.schres.2013.02.010](https://doi.org/10.1016/j.schres.2013.02.010) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Pilla_2013_PANSS_negative](drugs/drug_paliperidone/pd_Pilla_2013_PANSS_negative.md) | PANSS negative subscale score ← paliperidone · direct Emax (saturable) effect | — | Pilla Reddy V et al., Pharmacokinetic-pharmacodynamic modelli…, Schizophrenia research (2013) | [10.1016/j.schres.2013.02.010](https://doi.org/10.1016/j.schres.2013.02.010) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Pilla_2013_PANSS_positive](drugs/drug_paliperidone/pd_Pilla_2013_PANSS_positive.md) | PANSS positive subscale score ← paliperidone · direct Emax (saturable) effect | — | Pilla Reddy V et al., Pharmacokinetic-pharmacodynamic modelli…, Schizophrenia research (2013) | [10.1016/j.schres.2013.02.010](https://doi.org/10.1016/j.schres.2013.02.010) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Taneja_2016_PRL](drugs/drug_paliperidone/pd_Taneja_2016_PRL.md) | Prolactin ← paliperidone (unbound plasma) · stimulation effect | — | Taneja A et al., A comparison of two semi-mechanistic mo…, European journal of pharmac… (2016) | [10.1016/j.ejphar.2016.07.005](https://doi.org/10.1016/j.ejphar.2016.07.005) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Taneja_2016_PRL_2](drugs/drug_paliperidone/pd_Taneja_2016_PRL_2.md) | Prolactin ← paliperidone (unbound plasma) · direct Emax (saturable) effect | — | Taneja A et al., A comparison of two semi-mechanistic mo…, European journal of pharmac… (2016) | [10.1016/j.ejphar.2016.07.005](https://doi.org/10.1016/j.ejphar.2016.07.005) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Russu_2019_relapse](drugs/drug_paliperidone/pd_Russu_2019_relapse.md) | relapse of schizophrenia symptoms ← paliperidone · time-to-event model | — | Russu A et al., Pharmacokinetic-Pharmacodynamic Charact…, Journal of clinical psychop… (2019) | [10.1097/JCP.0000000000001137](https://doi.org/10.1097/JCP.0000000000001137) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Johnson_2014_CAT](drugs/drug_paliperidone/pd_Johnson_2014_CAT.md) | catalepsy (CAT) severity ← paliperidone (dopamine D2 receptor occupancy) · indirect response — drug inhibits the production of catalepsy (CAT) severity | — | Johnson M et al., Dopamine D2 receptor occupancy as a pre…, Pharmaceutical research (2014) | [10.1007/s11095-014-1358-7](https://doi.org/10.1007/s11095-014-1358-7) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Lee_1999_EEG_delta_power](drugs/drug_paliperidone/pd_Lee_1999_EEG_delta_power.md) | absolute power in the delta frequency band (F3 lead), difference from placebo ← risperidone (and sum of risperidone and 9-hydroxyrisperidone) · direct linear effect | — | Lee DY et al., Pharmacokinetic-pharmacodynamic modelin…, Psychopharmacology (1999) | [10.1007/s002130051003](https://doi.org/10.1007/s002130051003) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=paliperidone) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor/substrate | DrugBank actor |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` substrate, `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ADRA1A (target), ADRA1B (target), ADRA2A (target), ADRA2B (target), ADRA2C (target), DRD1 (target), DRD2 (target), DRD3 (target), DRD4 (target), HRH1 (target), HTR1A (target), HTR1D (target), HTR2A (target), HTR2C (target), HTR7 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 63 matched, 20 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 6  ·  extracted 1  ·  needs_review 3  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Magnusson_2017.pdf` | Magnusson MO et al., Dosing and Switching Strategies for Pal…, CNS drugs (2017) | popPK | 8 | [10.1007/s40263-017-0416-1](https://doi.org/10.1007/s40263-017-0416-1) | [28258365](https://pubmed.ncbi.nlm.nih.gov/28258365) | Population PK models of paliperidone palmitate/oral paliperidone are described, but no numeric parameter values (CL, V, ka) appear in the evidence; they likely reside in supplementary material or figures not provided. |
| `Russu_2019.pdf` | Russu A et al., Pharmacokinetic-Pharmacodynamic Charact…, Journal of clinical psychop… (2019) | popPK | 6 | [10.1097/JCP.0000000000001137](https://doi.org/10.1097/JCP.0000000000001137) | [31688450](https://pubmed.ncbi.nlm.nih.gov/31688450) | Population PK/PD modeling of paliperidone palmitate in patients, but no numeric PK parameter values appear in the evidence (likely in supplementary material/figures not provided). |
| `Taneja_2016.pdf` | Taneja A et al., A comparison of two semi-mechanistic mo…, European journal of pharmac… (2016) | popPK | 6 | [10.1016/j.ejphar.2016.07.005](https://doi.org/10.1016/j.ejphar.2016.07.005) | [27395799](https://pubmed.ncbi.nlm.nih.gov/27395799) | Population PK-PD modeling with paliperidone dosed in rats, but the evidence only shows PD parameters (EC50, KI); PK disposition values (CL, V) are not present and likely live in the full paper/supplementary material. |

<sub>queue written 2026-10-06T16:17:12.362252+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Carrascosa-Arteaga_2025 | relevant | 8 | 3 | A compilation of published paliperidone population-PK models (CL, V, ka, F, IIV) in humans, but the text is severely garbled and many values appear to live in tables/figures not cleanly provided. |
| popPK | Gopal_2010 | irrelevant | 3 | 1 | A dosing-guidance review referencing a population PK simulation model, but no numeric PK parameters (CL, V, t½) are reported in the evidence. |
| popPK | Johnson_2014 | relevant | 4 | 1 | Paliperidone is one of the subject drugs in a rat PK/PD (D2 receptor occupancy) modeling study, but no numeric PK disposition parameters for paliperidone appear in the evidence; values may live in figures/supplements not provided. |
| popPK | Lee_1999 | irrelevant | 2 | 2 | This is a PK-PD study of risperidone with 9-hydroxyrisperidone (paliperidone) only as its metabolite after risperidone dosing, not paliperidone as the administered subject drug, and no numeric PK parameter values appear in the evidence. |
| popPK | Magnusson_2017 | relevant | 8 | 2 | Population PK models of paliperidone palmitate/oral paliperidone are described, but no numeric parameter values (CL, V, ka) appear in the evidence; they likely reside in supplementary material or figures not provided. |
| popPK | Megens_1994 | irrelevant | 0 | 0 | This is a pharmacodynamics review of risperidone, not a PK study of paliperidone; no disposition parameters for paliperidone are reported. |
| popPK | Mun_2023 | irrelevant | 0 | 0 | In-vitro electrophysiology study of Kv channel inhibition by paliperidone in rabbit coronary arterial smooth muscle cells; no PK disposition parameters reported. |
| popPK | Olsen_2008 | irrelevant | 3 | 1 | Paliperidone appears only as a metabolite in a rat PK/PD study of antipsychotics; no numeric PK disposition parameters for paliperidone are reported in the evidence. |
| popPK | Ortega_2010 | irrelevant | 0 | 0 | This is a pharmacodynamic (PANSS effectiveness) model, not a PK study, and no paliperidone disposition parameters are reported. |
| popPK | Perlstein_2025 | relevant | 6 | 3 | A popPK simulation study of paliperidone palmitate (PP1m) in humans, but the actual CL/V/ka parameter values live in the cited published models (Samtani 2009 etc.) and supplementary material; only simulated exposure concentrations (Cmax/Cmin/Cavg) appear here. |
| popPK | Pilla_2013 | irrelevant | 3 | 1 | This is a PKPD/PANSS efficacy modelling study; paliperidone PK parameters are not reported and any values would come from prior work/supplementary material not included. |
| popPK | Russu_2019 | relevant | 6 | 2 | Population PK/PD modeling of paliperidone palmitate in patients, but no numeric PK parameter values appear in the evidence (likely in supplementary material/figures not provided). |
| popPK | Samtani_2011 | relevant | 8 | 2 | Population PK model of paliperidone palmitate/ER in humans, but the actual parameter values (CL, V, ka) appear only in figures/supplementary material not included in the evidence. |
| popPK | Sherwin_2012 | irrelevant | 0 | 0 | This is a population PK study of risperidone and its metabolite 9-hydroxyrisperidone, not paliperidone; no paliperidone parameters are reported. |
| popPK | Taneja_2016 | relevant | 6 | 3 | Population PK-PD modeling with paliperidone dosed in rats, but the evidence only shows PD parameters (EC50, KI); PK disposition values (CL, V) are not present and likely live in the full paper/supplementary material. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 16:17 UTC</sub>
