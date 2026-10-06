<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;haloperidol&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Haloperidol_Franken2017_reference&quot;,&quot;label&quot;:&quot;Franken_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_haloperidol/Haloperidol_Franken2017_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Haloperidol_Li2022_base&quot;,&quot;label&quot;:&quot;Li_2022_base&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_haloperidol/Haloperidol_Li2022_base.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Haloperidol_Li2022_final&quot;,&quot;label&quot;:&quot;Li_2022_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_haloperidol/Haloperidol_Li2022_final.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# haloperidol

- **generic name:** haloperidol
- **ATC codes:** `N05AD01`
- **DrugBank:** [DB00502](https://go.drugbank.com/drugs/DB00502) · **PubChem:** [CID 3559](https://pubchem.ncbi.nlm.nih.gov/compound/3559)
- **molar mass:** 375.864 g/mol (C21H23ClFNO2) — DrugBank
- **groups:** approved, investigational

## About

Haloperidol is an antipsychotic used to treat conditions such as schizophrenia, psychosis, delirium, Tourette syndrome, and vomiting. It is widely used and appears on the WHO list of essential medicines, though it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q251347](https://www.wikidata.org/wiki/Q251347) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| haloperidol | parent | 375.864 | C21H23ClFNO2 | DrugBank | [3559](https://pubchem.ncbi.nlm.nih.gov/compound/3559) | Franken_2017, Li_2022, Yukawa_2002 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 15:48 | 3:25 | 3/1/2 | 5/1/0 | 0/0/0 | 176,446/12,431 | ollama / glm-5.3-flash | 17 | 2/3 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Franken_2017_reference](drugs/drug_haloperidol/Haloperidol_Franken2017_reference.md) | ▶ model + simulator | 1-compartment, IV | 3 | Franken LG et al., Population pharmacokinetics of haloperi…, European journal of clinica… (2017) | [10.1007/s00228-017-2283-6](https://doi.org/10.1007/s00228-017-2283-6) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | [Li_2022_base](drugs/drug_haloperidol/Haloperidol_Li2022_base.md) | ▶ model + simulator | 1-compartment, IV | 2 | Li L et al., Pharmacokinetics of Haloperidol in Crit…, Pharmaceutics (2022) | [10.3390/pharmaceutics14030549](https://doi.org/10.3390/pharmaceutics14030549) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | [Li_2022_final](drugs/drug_haloperidol/Haloperidol_Li2022_final.md) | ▶ model + simulator | 1-compartment, IV | 2 | Li L et al., Pharmacokinetics of Haloperidol in Crit…, Pharmaceutics (2022) | [10.3390/pharmaceutics14030549](https://doi.org/10.3390/pharmaceutics14030549) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.895). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q49, Q32, Q47, Q83 — no SI value to…</sub><br><sub>route_to: `human_review`</sub> | [Pilla_2013_reference](drugs/drug_haloperidol/Haloperidol_Pilla2013_reference.md) | — | 2-compartment (no model) | 13 | Pilla Reddy V et al., Population pharmacokinetic-pharmacodyna…, Journal of clinical psychop… (2013) | [10.1097/JCP.0b013e3182a4ee2c](https://doi.org/10.1097/JCP.0b013e3182a4ee2c) |
| <span class="pk-badge pk-badge--neutral">None</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>STALE — current validate: not captured</sub> | [Li_2022_reference](drugs/drug_haloperidol/Haloperidol_Li2022_reference.md) | — | — (no model) | 0 | Li L et al., Pharmacokinetics of Haloperidol in Crit…, Pharmaceutics (2022) | [10.3390/pharmaceutics14030549](https://doi.org/10.3390/pharmaceutics14030549) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Yukawa_2002_reference](drugs/drug_haloperidol/Haloperidol_Yukawa2002_reference.md) | — | 1-compartment (no model) | 1 | Yukawa E et al., Population pharmacokinetics of haloperi…, Clinical pharmacokinetics (2002) | [10.2165/00003088-200241020-00006](https://doi.org/10.2165/00003088-200241020-00006) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Arvanov_1997_AMPA_induced_current](drugs/drug_haloperidol/pd_Arvanov_1997_AMPA_induced_current.md) | alpha-amino-3-hydroxy-5-methyl-4-isoxazolepropionic acid (AMPA)-induced current ← haloperidol · direct Emax (saturable) effect | — | Arvanov VL et al., Clozapine and haloperidol modulate N-me…, The Journal of pharmacology… (1997) | — |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Arvanov_1997_NMDA_evoked_response](drugs/drug_haloperidol/pd_Arvanov_1997_NMDA_evoked_response.md) | NMDA-evoked responses facilitation in rat prefrontal cortical pyramidal neurons ← haloperidol · direct Emax (saturable) effect | — | Arvanov VL et al., Clozapine and haloperidol modulate N-me…, The Journal of pharmacology… (1997) | — |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Olsen_2008_CAR](drugs/drug_haloperidol/pd_Olsen_2008_CAR.md) | conditioned avoidance response suppression ← haloperidol · direct sigmoid Emax (Hill) effect | — | Olsen CK et al., Using pharmacokinetic-pharmacodynamic m…, European journal of pharmac… (2008) | [10.1016/j.ejphar.2008.02.005](https://doi.org/10.1016/j.ejphar.2008.02.005) |
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> | [Pilla_2013_PANSS](drugs/drug_haloperidol/pd_Pilla_2013_PANSS.md) | PANSS total score ← haloperidol · direct sigmoid Emax (Hill) effect | model (no simulator) | Pilla Reddy V et al., Population pharmacokinetic-pharmacodyna…, Journal of clinical psychop… (2013) | [10.1097/JCP.0b013e3182a4ee2c](https://doi.org/10.1097/JCP.0b013e3182a4ee2c) |
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> | [Pilla_2013_PANSS_negative](drugs/drug_haloperidol/pd_Pilla_2013_PANSS_negative.md) | PANSS negative subscale ← haloperidol · direct sigmoid Emax (Hill) effect | model (no simulator) | Pilla Reddy V et al., Population pharmacokinetic-pharmacodyna…, Journal of clinical psychop… (2013) | [10.1097/JCP.0b013e3182a4ee2c](https://doi.org/10.1097/JCP.0b013e3182a4ee2c) |
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> | [Pilla_2013_PANSS_positive](drugs/drug_haloperidol/pd_Pilla_2013_PANSS_positive.md) | PANSS positive subscale ← haloperidol · direct sigmoid Emax (Hill) effect | model (no simulator) | Pilla Reddy V et al., Population pharmacokinetic-pharmacodyna…, Journal of clinical psychop… (2013) | [10.1097/JCP.0b013e3182a4ee2c](https://doi.org/10.1097/JCP.0b013e3182a4ee2c) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Pilla_2013_2_PANSS_general](drugs/drug_haloperidol/pd_Pilla_2013_2_PANSS_general.md) | PANSS general subscale score ← haloperidol · direct Emax (saturable) effect | — | Pilla Reddy V et al., Pharmacokinetic-pharmacodynamic modelli…, Schizophrenia research (2013) | [10.1016/j.schres.2013.02.010](https://doi.org/10.1016/j.schres.2013.02.010) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Pilla_2013_2_PANSS_negative](drugs/drug_haloperidol/pd_Pilla_2013_2_PANSS_negative.md) | PANSS negative subscale score ← haloperidol · direct Emax (saturable) effect | — | Pilla Reddy V et al., Pharmacokinetic-pharmacodynamic modelli…, Schizophrenia research (2013) | [10.1016/j.schres.2013.02.010](https://doi.org/10.1016/j.schres.2013.02.010) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Pilla_2013_2_PANSS_positive](drugs/drug_haloperidol/pd_Pilla_2013_2_PANSS_positive.md) | PANSS positive subscale score ← haloperidol · direct Emax (saturable) effect | — | Pilla Reddy V et al., Pharmacokinetic-pharmacodynamic modelli…, Schizophrenia research (2013) | [10.1016/j.schres.2013.02.010](https://doi.org/10.1016/j.schres.2013.02.010) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Pilla_2013_3_PANSS](drugs/drug_haloperidol/pd_Pilla_2013_3_PANSS.md) | PANSS total score ← haloperidol · direct Emax (saturable) effect | — | Pilla Reddy V et al., Pharmacokinetic-pharmacodynamic modelin…, Schizophrenia research (2013) | [10.1016/j.schres.2013.02.011](https://doi.org/10.1016/j.schres.2013.02.011) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Pilla_2013_dropout](drugs/drug_haloperidol/pd_Pilla_2013_dropout.md) | dropout (time-to-event) ← haloperidol · time-to-event model | — | Pilla Reddy V et al., Population pharmacokinetic-pharmacodyna…, Journal of clinical psychop… (2013) | [10.1097/JCP.0b013e3182a4ee2c](https://doi.org/10.1097/JCP.0b013e3182a4ee2c) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Johnson_2014_CAT](drugs/drug_haloperidol/pd_Johnson_2014_CAT.md) | catalepsy severity (CAT) ← dopamine D2 receptor occupancy (haloperidol) · indirect response — drug stimulates the production of catalepsy severity (CAT) | — | Johnson M et al., Dopamine D2 receptor occupancy as a pre…, Pharmaceutical research (2014) | [10.1007/s11095-014-1358-7](https://doi.org/10.1007/s11095-014-1358-7) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=haloperidol) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | skeletal muscle | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | small intestine | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor/substrate | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor/substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate, `UGT1A9` substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` substrate, `CYP2C19` substrate, `CYP2C9` substrate, `CYP2D6` inhibitor/substrate, `CYP3A4` inhibitor/substrate, `CYP3A5` substrate, `CYP3A7` substrate, `UGT1A9` substrate | DrugBank actor |
| metabolism | lung | `CYP1A1` substrate | DrugBank actor |
| metabolism | small intestine | `CYP1A1` substrate, `CYP3A4` inhibitor/substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ADRA1A (target), ADRA2A (target), ADRA2B (target), ADRA2C (target), CBR1 (substrate), CHRM3 (target), DRD1 (target), DRD2 (target), DRD3 (inverse agonist), GRIN2B (target), HRH1 (target), HTR1A (target), HTR2A (target), HTR2C (target), HTR6 (target), HTR7 (target), MCHR1 (inhibitor), SIGMAR1 (target), SLC18A2 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 169 matched, 20 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 6  ·  extracted 3  ·  needs_review 1  ·  rejected 1  ·  stale 3
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Yukawa_2002.pdf` | Yukawa E et al., Population pharmacokinetics of haloperi…, Clinical pharmacokinetics (2002) | popPK | 10 | [10.2165/00003088-200241020-00006](https://doi.org/10.2165/00003088-200241020-00006) | [11888334](https://pubmed.ncbi.nlm.nih.gov/11888334) | Population PK model of haloperidol in Japanese patients with full CL and Vd equations and covariate effects given directly in the abstract. |
| `Olsen_2008.pdf` | Olsen CK et al., Using pharmacokinetic-pharmacodynamic m…, European journal of pharmac… (2008) | popPK | 7 | [10.1016/j.ejphar.2008.02.005](https://doi.org/10.1016/j.ejphar.2008.02.005) | [18325493](https://pubmed.ncbi.nlm.nih.gov/18325493) | PK/PD modelling of haloperidol in rats is the subject drug, but no numeric PK parameter values appear in the evidence (likely in figures/supplementary material). |
| `Pilla_2013_3.pdf` | Pilla Reddy V et al., Pharmacokinetic-pharmacodynamic modelin…, Schizophrenia research (2013) | popPK | 5 | [10.1016/j.schres.2013.02.011](https://doi.org/10.1016/j.schres.2013.02.011) | [23473810](https://pubmed.ncbi.nlm.nih.gov/23473810) | PK-PD modeling includes haloperidol with compartmental PK models, but no numeric PK parameter values appear in the evidence (likely in tables/supplement not provided). |

<sub>queue written 2026-10-06T15:45:40.438184+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Arvanov_1997 | irrelevant | 0 | 0 | In-vitro electrophysiology study of receptor effects in rat brain slices; no pharmacokinetic disposition parameters reported. |
| popPK | Balant_1996 | irrelevant | 2 | 1 | A review/discussion of metabolite issues in PK/PD with no numeric PK parameters for haloperidol reported. |
| popPK | Berk_2008 | irrelevant | 0 | 0 | Clinical efficacy study of smoking on mania outcomes; no PK parameters for haloperidol reported. |
| popPK | Ereshefsky_1984 | irrelevant | 3 | 1 | A review/discussion of depot neuroleptic PK with no numeric haloperidol disposition parameters present in the evidence. |
| popPK | Franken_2018 | irrelevant | 0 | 0 | This is a population PD study of midazolam sedation; haloperidol appears only as a covariate, with no haloperidol PK parameters reported. |
| popPK | Gex-Fabry_2001 | irrelevant | 3 | 1 | A review of TDM database studies; haloperidol clearance effect (32% increase with anticonvulsants) is mentioned but no numeric PK parameter values are reported here. |
| popPK | Goikolea_2013 | irrelevant | 0 | 0 | Clinical meta-analysis of depressive switch rates; no PK parameters for haloperidol are reported. |
| popPK | Johnson_2014 | relevant | 4 | 1 | PK-PD modeling in rats includes haloperidol, but the evidence contains no numeric PK parameters for haloperidol (values likely in figures/supplementary material not provided). |
| popPK | Lako_2013 | irrelevant | 2 | 2 | This is a receptor-occupancy meta-analysis, not a PK study; no CL/V/ka or population-PK disposition parameters for haloperidol are reported. |
| popPK | Megens_1994 | irrelevant | 0 | 0 | This is a pharmacodynamic review of risperidone; haloperidol is only a potency comparator and no haloperidol PK parameters are reported. |
| popPK | Oh-e_1991 | irrelevant | 0 | 0 | The evidence contains only a GROBID header with no paper content, so no PK parameters for haloperidol are present. |
| popPK | Olsen_2008 | relevant | 7 | 3 | PK/PD modelling of haloperidol in rats is the subject drug, but no numeric PK parameter values appear in the evidence (likely in figures/supplementary material). |
| popPK | Pilla_2013_2 | irrelevant | 3 | 1 | This is a PKPD/PANSS efficacy study where haloperidol is only a comparator FGA; no quantitative PK disposition parameters (CL, V, half-life) for haloperidol appear in the evidence. |
| popPK | Pilla_2013_3 | relevant | 5 | 2 | PK-PD modeling includes haloperidol with compartmental PK models, but no numeric PK parameter values appear in the evidence (likely in tables/supplement not provided). |
| popPK | Zajdel_2025 | irrelevant | 0 | 0 | Haloperidol is only used to induce catalepsy in a pharmacological disease model; no PK parameters for haloperidol are reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 15:45 UTC</sub>
