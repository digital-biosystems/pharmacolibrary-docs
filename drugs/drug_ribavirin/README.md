<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;ribavirin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ribavirin_Jin2012_mean_of_25_leverage_runs_cv&quot;,&quot;label&quot;:&quot;Jin_2012_mean_of_25_leverage_runs_cv&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ribavirin/Ribavirin_Jin2012_mean_of_25_leverage_runs_cv.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ribavirin_Jin2012_population_mean_in_final_pk_model&quot;,&quot;label&quot;:&quot;Jin_2012_population_mean_in_final_pk_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ribavirin/Ribavirin_Jin2012_population_mean_in_final_pk_model.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ribavirin_Wade2006_reference&quot;,&quot;label&quot;:&quot;Wade_2006_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ribavirin/Ribavirin_Wade2006_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# ribavirin

- **generic name:** ribavirin
- **ATC codes:** `J05AB04`, `J05AP01`
- **DrugBank:** [DB00811](https://go.drugbank.com/drugs/DB00811) · **PubChem:** [CID 37542](https://pubchem.ncbi.nlm.nih.gov/compound/37542)
- **molar mass:** 244.2047 g/mol (C8H12N4O5) — DrugBank
- **groups:** approved, investigational

## About

Ribavirin is an antiviral nucleoside analogue used against viral infections such as hepatitis C, hepatitis E, and respiratory syncytial virus infection. It is included on the WHO essential medicines list and remains in use, though several European marketing authorisations have been withdrawn or lapsed; it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q421862](https://www.wikidata.org/wiki/Q421862) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| ribavirin | parent | 244.205 | C8H12N4O5 | DrugBank | [37542](https://pubchem.ncbi.nlm.nih.gov/compound/37542) | Erameh_2026, Jin_2012, Mulder_2025, Wade_2006 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 16:52 | 5:23 | 4/2/0 | 2/0/0 | 0/0/0 | 284,732/20,528 | ollama / glm-5.3-flash | 22 | 2/8 | 9/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Jin_2012_mean_of_25_leverage_runs_cv](drugs/drug_ribavirin/Ribavirin_Jin2012_mean_of_25_leverage_runs_cv.md) | ▶ model + simulator | 2-compartment, oral | 5 (+1 cov.) | Jin R et al., Population pharmacokinetics and pharmac…, The AAPS journal (2012) | [10.1208/s12248-012-9368-z](https://doi.org/10.1208/s12248-012-9368-z) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Jin_2012_population_mean_in_final_pk_model](drugs/drug_ribavirin/Ribavirin_Jin2012_population_mean_in_final_pk_model.md) | ▶ model + simulator | 2-compartment, oral | 5 (+1 cov.) | Jin R et al., Population pharmacokinetics and pharmac…, The AAPS journal (2012) | [10.1208/s12248-012-9368-z](https://doi.org/10.1208/s12248-012-9368-z) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Mulder_2025_reference](drugs/drug_ribavirin/Ribavirin_Mulder2025_reference.md) | held back | 1-compartment, oral | 7 (+2 cov.) | Mulder MB et al., Development of a ribavirin dosing regim…, The Journal of antimicrobia… (2025) | [10.1093/jac/dkaf183](https://doi.org/10.1093/jac/dkaf183) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Wade_2006_reference](drugs/drug_ribavirin/Ribavirin_Wade2006_reference.md) | ▶ model + simulator | 2-compartment, oral | 9 | Wade JR et al., Pharmacokinetics of ribavirin in patien…, British journal of clinical… (2006) | [10.1111/j.1365-2125.2006.02704.x](https://doi.org/10.1111/j.1365-2125.2006.02704.x) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Erameh_2026_median](drugs/drug_ribavirin/Ribavirin_Erameh2026_median.md) | — | 2-compartment (no model) | 3 | Erameh C et al., Favipiravir for Lassa fever: an open-la…, Nature medicine (2026) | [10.1038/s41591-026-04402-w](https://doi.org/10.1038/s41591-026-04402-w) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Erameh_2026_ribavirinparticipants](drugs/drug_ribavirin/Ribavirin_Erameh2026_ribavirinparticipants.md) | — | 2-compartment (no model) | 3 | Erameh C et al., Favipiravir for Lassa fever: an open-la…, Nature medicine (2026) | [10.1038/s41591-026-04402-w](https://doi.org/10.1038/s41591-026-04402-w) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Janowski_2020_HAstV4_viral_RNA_replication_inhibition](drugs/drug_ribavirin/pd_Janowski_2020_HAstV4_viral_RNA_replication_inhibition.md) | HAstV4 viral RNA replication inhibition ← ribavirin · direct sigmoid Emax (Hill) effect | — | Janowski AB et al., Antiviral activity of ribavirin and fav…, Journal of clinical virolog… (2020) | [10.1016/j.jcv.2019.104247](https://doi.org/10.1016/j.jcv.2019.104247) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Janowski_2020_VA1_viral_RNA_replication_inhibition](drugs/drug_ribavirin/pd_Janowski_2020_VA1_viral_RNA_replication_inhibition.md) | VA1 viral RNA replication inhibition ← ribavirin · direct sigmoid Emax (Hill) effect | — | Janowski AB et al., Antiviral activity of ribavirin and fav…, Journal of clinical virolog… (2020) | [10.1016/j.jcv.2019.104247](https://doi.org/10.1016/j.jcv.2019.104247) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Tod_2005_H](drugs/drug_ribavirin/pd_Tod_2005_H.md) | haemoglobin level ← ribavirin · direct Emax (saturable) effect | — | Tod M et al., Pharmacokinetic/pharmacodynamic and tim…, Clinical pharmacokinetics (2005) | [10.2165/00003088-200544040-00006](https://doi.org/10.2165/00003088-200544040-00006) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Tod_2005_time_to_anaemia](drugs/drug_ribavirin/pd_Tod_2005_time_to_anaemia.md) | time-to-anaemia ← ribavirin · time-to-event model | — | Tod M et al., Pharmacokinetic/pharmacodynamic and tim…, Clinical pharmacokinetics (2005) | [10.2165/00003088-200544040-00006](https://doi.org/10.2165/00003088-200544040-00006) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=ribavirin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| distribution | blood | `SLC29A1` substrate | DrugBank actor |
| distribution | liver | `SLC29A1` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ADK (activator), IMPDH1 (inhibitor), IMPDH2 (inhibitor), NT5C2 (modulator), SLC28A3 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 284 matched, 20 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 6  ·  extracted 4  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Polepally_2017.pdf` | Polepally AR et al., Effects of Mild and Moderate Renal Impa…, European journal of drug me… (2017) | popPK | 8 | [10.1007/s13318-016-0341-6](https://doi.org/10.1007/s13318-016-0341-6) | [27165046](https://pubmed.ncbi.nlm.nih.gov/27165046) | Population PK modeling includes ribavirin as a subject drug with covariate analysis, but the evidence only reports AUC changes (up to 17% higher in renal impairment); actual CL/V parameter values are not shown and likely reside in tables/supplementary material not provided. |
| `Tod_2005.pdf` | Tod M et al., Pharmacokinetic/pharmacodynamic and tim…, Clinical pharmacokinetics (2005) | popPK | 5 | [10.2165/00003088-200544040-00006](https://doi.org/10.2165/00003088-200544040-00006) | [15828854](https://pubmed.ncbi.nlm.nih.gov/15828854) | Population PK/PD model of ribavirin exposure in humans, but only RT50 (~12 mg/kg/day) is reported; no CL/V/compartmental parameter values appear in the evidence. |

<sub>queue written 2026-10-07T16:48:12.112041+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Gastine_2021 | irrelevant | 0 | 0 | This is a viral dynamics (SARS-CoV-2) model; ribavirin is only a co-administered antiviral covariate, with no ribavirin PK parameters reported. |
| popPK | Janowski_2020 | irrelevant | 0 | 0 | In-vitro antiviral efficacy study (EC50 in Caco-2 cells) with no pharmacokinetic disposition parameters for ribavirin. |
| popPK | Mogalian_2018 | irrelevant | 0 | 0 | This is a PK study of velpatasvir/sofosbuvir; ribavirin is only a co-administered treatment arm with no ribavirin disposition parameters reported. |
| popPK | Polepally_2017 | relevant | 8 | 3 | Population PK modeling includes ribavirin as a subject drug with covariate analysis, but the evidence only reports AUC changes (up to 17% higher in renal impairment); actual CL/V parameter values are not shown and likely reside in tables/supplementary material not provided. |
| popPK | Riggs_2012 | irrelevant | 1 | 0 | The population PK parameters (ka, CL/F, V/F) are for albinterferon alfa-2b, not ribavirin, which is only co-administered; no ribavirin PK values are reported. |
| popPK | Rui_2022 | irrelevant | 0 | 0 | Ribavirin is only an in-vitro comparator; no PK parameters reported. |
| popPK | Salam_2022 | irrelevant | 3 | 2 | A systematic review of ribavirin in Lassa fever; no original PK parameters (CL, V, half-life) for ribavirin are reported — PK modelling values are cited from Preston et al and profiles live in Fig 1/Table 2 not provided. |
| popPK | Sanna_2020 | irrelevant | 0 | 0 | In-vitro antiviral drug-discovery study where ribavirin is only a reference comparator; no PK parameters for ribavirin are reported. |
| popPK | Suleiman_2020 | irrelevant | 0 | 0 | This is a population-PK study of glecaprevir/pibrentasvir; ribavirin is only mentioned as absent from the regimen, with no ribavirin parameters. |
| popPK | Tod_2005 | relevant | 5 | 3 | Population PK/PD model of ribavirin exposure in humans, but only RT50 (~12 mg/kg/day) is reported; no CL/V/compartmental parameter values appear in the evidence. |
| popPK | Tonelli_2011 | irrelevant | 0 | 0 | Ribavirin is only a reference comparator in in-vitro antiviral assays; no PK parameters reported. |
| popPK | Ueno_2018 | irrelevant | 0 | 0 | This is an exposure-response (efficacy) analysis of daclatasvir and asunaprevir; ribavirin is only mentioned as prior IFN/RBV treatment background, with no ribavirin PK parameters reported. |
| popPK | Zeitlinger_2020 | irrelevant | 2 | 2 | This is a narrative review of antivirals for COVID-19; ribavirin appears only as a co-administered/comparator drug with no quantitative PK disposition parameters (CL, V, ka, half-life) reported for it. |
| popPK | Zhu_2018 | irrelevant | 0 | 0 | This is a population PK study of asunaprevir; ribavirin is only a co-administered drug in the QUAD regimen, with no ribavirin PK parameters reported. |
| popPK | de_2024 | irrelevant | 0 | 0 | In-vitro antiviral study of an algae extract; ribavirin is only a co-administered comparator with no PK parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 16:48 UTC</sub>
