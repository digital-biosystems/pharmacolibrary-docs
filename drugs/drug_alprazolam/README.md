<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05B&quot;,&quot;href&quot;:&quot;atc/N05B.md&quot;},{&quot;label&quot;:&quot;alprazolam&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Alprazolam_Klein2026_body_weight_50_kg&quot;,&quot;label&quot;:&quot;Klein_2026_body_weight_50_kg&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_alprazolam/Alprazolam_Klein2026_body_weight_50_kg.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# alprazolam

- **generic name:** alprazolam
- **ATC codes:** `N05BA12`
- **DrugBank:** [DB00404](https://go.drugbank.com/drugs/DB00404) · **PubChem:** [CID 2118](https://pubchem.ncbi.nlm.nih.gov/compound/2118)
- **molar mass:** 308.765 g/mol (C17H13ClN4) — DrugBank
- **groups:** approved, illicit, investigational

## About

Alprazolam is a short-acting benzodiazepine anxiolytic used to treat anxiety and panic disorders, and also for conditions such as insomnia. It is an approved medicine that is widely used, though it carries a boxed warning and is also encountered as an illicit drug.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q319877](https://www.wikidata.org/wiki/Q319877) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| alprazolam | parent | 308.765 | C17H13ClN4 | DrugBank | [2118](https://pubchem.ncbi.nlm.nih.gov/compound/2118) | Klein_2026 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 18:18 | 21:10 | 1/1/2 | 13/1/0 | 0/0/0 | 535,221/30,856 | ollama / glm-5.3-flash | 15 | 2/10 | 13/2 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Klein_2026_body_weight_50_kg](drugs/drug_alprazolam/Alprazolam_Klein2026_body_weight_50_kg.md) | ▶ model + simulator | 1-compartment, oral | 6 | Klein P et al., Pharmacokinetics and tolerability of si…, Epilepsia (2026) | [10.1111/epi.18643](https://doi.org/10.1111/epi.18643) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Klein_2026_all_patients](drugs/drug_alprazolam/Alprazolam_Klein2026_all_patients.md) | — | 1-compartment (no model) | 3 | Klein P et al., Pharmacokinetics and tolerability of si…, Epilepsia (2026) | [10.1111/epi.18643](https://doi.org/10.1111/epi.18643) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Klein_2026_body_weight_50_kg_2](drugs/drug_alprazolam/Alprazolam_Klein2026_body_weight_50_kg_2.md) | — | 1-compartment (no model) | 3 | Klein P et al., Pharmacokinetics and tolerability of si…, Epilepsia (2026) | [10.1111/epi.18643](https://doi.org/10.1111/epi.18643) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [DeVane_1993_reference](drugs/drug_alprazolam/Alprazolam_DeVane1993_reference.md) | — | 1-compartment (no model) | 0 | DeVane CL et al., Evaluation of population pharmacokineti…, Clinical pharmacology and t… (1993) | [10.1038/clpt.1993.65](https://doi.org/10.1038/clpt.1993.65) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span> | [Ammit_1991_AA_induced_platelet_aggregation](drugs/drug_alprazolam/pd_Ammit_1991_AA_induced_platelet_aggregation.md) | AA-induced platelet aggregation ← alprazolam · inhibition effect | — | Ammit AJ et al., Platelet-activating factor (PAF) recept…, Lipids (1991) | [10.1007/BF02536529](https://doi.org/10.1007/BF02536529) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span> | [Ammit_1991_PAF_induced_platelet_aggregation](drugs/drug_alprazolam/pd_Ammit_1991_PAF_induced_platelet_aggregation.md) | PAF-induced platelet aggregation ← alprazolam · inhibition effect | — | Ammit AJ et al., Platelet-activating factor (PAF) recept…, Lipids (1991) | [10.1007/BF02536529](https://doi.org/10.1007/BF02536529) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Barbanoj_2007_VAS_activity](drugs/drug_alprazolam/pd_Barbanoj_2007_VAS_activity.md) | visual analogue scale activity ← alprazolam · model not identified | — | Barbanoj MJ et al., Different acute tolerance development t…, Neuropsychobiology (2007) | [10.1159/000108379](https://doi.org/10.1159/000108379) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Barbanoj_2007_VAS_drowsiness](drugs/drug_alprazolam/pd_Barbanoj_2007_VAS_drowsiness.md) | visual analogue scale drowsiness ← alprazolam · model not identified | — | Barbanoj MJ et al., Different acute tolerance development t…, Neuropsychobiology (2007) | [10.1159/000108379](https://doi.org/10.1159/000108379) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Barbanoj_2007_cancellation_task_correct_number_of_responses](drugs/drug_alprazolam/pd_Barbanoj_2007_cancellation_task_correct_number_of_responses.md) | cancellation task correct number of responses ← alprazolam · model not identified | — | Barbanoj MJ et al., Different acute tolerance development t…, Neuropsychobiology (2007) | [10.1159/000108379](https://doi.org/10.1159/000108379) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Barbanoj_2007_cancellation_task_total_number_of_responses](drugs/drug_alprazolam/pd_Barbanoj_2007_cancellation_task_total_number_of_responses.md) | cancellation task total number of responses ← alprazolam · model not identified | — | Barbanoj MJ et al., Different acute tolerance development t…, Neuropsychobiology (2007) | [10.1159/000108379](https://doi.org/10.1159/000108379) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Barbanoj_2007_relative_alpha](drugs/drug_alprazolam/pd_Barbanoj_2007_relative_alpha.md) | relative alpha activity ← alprazolam · model not identified | — | Barbanoj MJ et al., Different acute tolerance development t…, Neuropsychobiology (2007) | [10.1159/000108379](https://doi.org/10.1159/000108379) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Barbanoj_2007_relative_beta_1](drugs/drug_alprazolam/pd_Barbanoj_2007_relative_beta_1.md) | relative beta-1 activity ← alprazolam · model not identified | — | Barbanoj MJ et al., Different acute tolerance development t…, Neuropsychobiology (2007) | [10.1159/000108379](https://doi.org/10.1159/000108379) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Bertz_1997_DSS](drugs/drug_alprazolam/pd_Bertz_1997_DSS.md) | digit symbol substitution ← alprazolam · direct sigmoid Emax (Hill) effect | — | Bertz RJ et al., Alprazolam in young and elderly men: se…, The Journal of pharmacology… (1997) | — |
| <span class="pk-badge pk-badge--green">extracted</span> | [Bertz_1997_card_sorting](drugs/drug_alprazolam/pd_Bertz_1997_card_sorting.md) | card sorting performance ← alprazolam · direct sigmoid Emax (Hill) effect | — | Bertz RJ et al., Alprazolam in young and elderly men: se…, The Journal of pharmacology… (1997) | — |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Hu_1994_3H_FN_binding](drugs/drug_alprazolam/pd_Hu_1994_3H_FN_binding.md) | [3H]flunitrazepam binding (inhibition by type-1 BZ ligands) ← alprazolam · inhibition effect | — | Hu XJ et al., Development pattern of the GABAA-benzod…, Brain research. Development… (1994) | [10.1016/0165-3806(94)90097-3](https://doi.org/10.1016/0165-3806(94)90097-3) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Kaplan_2000_EEG_beta](drugs/drug_alprazolam/pd_Kaplan_2000_EEG_beta.md) | relative beta amplitude (EEG, 13-30 Hz) ← alprazolam · direct sigmoid Emax (Hill) effect | — | Kaplan GB et al., Differences in pharmacodynamics but not…, Journal of clinical psychop… (2000) | [10.1097/00004714-200006000-00008](https://doi.org/10.1097/00004714-200006000-00008) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Kozlowski_1988_TRH_receptor_binding](drugs/drug_alprazolam/pd_Kozlowski_1988_TRH_receptor_binding.md) | Inhibition of 3H-3-methyl-His-2-TRH (MeTRH) binding to TRH receptors ← alprazolam · direct sigmoid Emax (Hill) effect | — | Kozlowski MR, Inhibition of the binding and the behav…, Pharmacology, biochemistry,… (1988) | [10.1016/0091-3057(88)90426-1](https://doi.org/10.1016/0091-3057(88)90426-1) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Kroboth_1988_DSS](drugs/drug_alprazolam/pd_Kroboth_1988_DSS.md) | Digit symbol substitution (DSS) performance ← alprazolam · inhibition effect | — | Kroboth PD et al., Tolerance to alprazolam after intraveno…, Clinical pharmacology and t… (1988) | [10.1038/clpt.1988.32](https://doi.org/10.1038/clpt.1988.32) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Kroboth_1988_SE](drugs/drug_alprazolam/pd_Kroboth_1988_SE.md) | Spectral edge of the EEG ← alprazolam · inhibition effect | — | Kroboth PD et al., Tolerance to alprazolam after intraveno…, Clinical pharmacology and t… (1988) | [10.1038/clpt.1988.32](https://doi.org/10.1038/clpt.1988.32) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Lau_1997_shorter_response_rate](drugs/drug_alprazolam/pd_Lau_1997_shorter_response_rate.md) | shorter-response rate ← alprazolam · direct sigmoid Emax (Hill) effect | — | Lau CE et al., Pharmacokinetic-pharmacodynamic modelin…, The Journal of pharmacology… (1997) | — |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Lau_1997_2_reinforcement_rate_differential_reinforcement_of_low_rate_behavior_performance](drugs/drug_alprazolam/pd_Lau_1997_2_reinforcement_rate_differential_reinforcement_of_.md) | reinforcement rate (differential reinforcement of low-rate behavior performance) ← alprazolam · direct sigmoid Emax (Hill) effect | — | Lau CE et al., Differential reinforcement of low rate…, The Journal of pharmacology… (1997) | — |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Moon_1990_PAF_induced_platelet_aggregation](drugs/drug_alprazolam/pd_Moon_1990_PAF_induced_platelet_aggregation.md) | PAF-induced platelet aggregation ← alprazolam · inhibition effect | — | Moon DG et al., Platelet activating factor and sheep pl…, Thrombosis research (1990) | [10.1016/0049-3848(90)90072-k](https://doi.org/10.1016/0049-3848(90)90072-k) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Sanna_1999_3H_flunitrazepam_binding_inhibition_rat_cortical_membranes](drugs/drug_alprazolam/pd_Sanna_1999_3H_flunitrazepam_binding_inhibition_rat_cortical_.md) | [3H]flunitrazepam binding inhibition (rat cortical membranes) ← alprazolam · inhibition effect | — | Sanna E et al., Molecular and neurochemical evaluation…, Arzneimittel-Forschung (1999) | [10.1055/s-0031-1300366](https://doi.org/10.1055/s-0031-1300366) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Venkatakrishnan_2005_DSST](drugs/drug_alprazolam/pd_Venkatakrishnan_2005_DSST.md) | Digit Symbol Substitution Test (DSST) performance ← alprazolam · inhibition effect | — | Venkatakrishnan K et al., Kinetics and dynamics of intravenous ad…, Journal of clinical pharmac… (2005) | [10.1177/0091270004269105](https://doi.org/10.1177/0091270004269105) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Venkatakrishnan_2005_beta_EEG](drugs/drug_alprazolam/pd_Venkatakrishnan_2005_beta_EEG.md) | electroencephalographic (EEG) activity in the beta (12-30 Hz) range ← alprazolam · direct sigmoid Emax (Hill) effect | — | Venkatakrishnan K et al., Kinetics and dynamics of intravenous ad…, Journal of clinical pharmac… (2005) | [10.1177/0091270004269105](https://doi.org/10.1177/0091270004269105) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Wright_1997_psychomotor_performance_digit_symbol_substitution_and_card_sorting_tasks](drugs/drug_alprazolam/pd_Wright_1997_psychomotor_performance_digit_symbol_substitutio.md) | psychomotor performance (digit-symbol substitution and card-sorting tasks) ← alprazolam · direct sigmoid Emax (Hill) effect | — | Wright CE et al., Pharmacokinetics and psychomotor perfor…, Journal of clinical pharmac… (1997) | [10.1002/j.1552-4604.1997.tb04309.x](https://doi.org/10.1002/j.1552-4604.1997.tb04309.x) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Wright_1997_sedation](drugs/drug_alprazolam/pd_Wright_1997_sedation.md) | sedation ← alprazolam · stimulation effect | — | Wright CE et al., Pharmacokinetics and psychomotor perfor…, Journal of clinical pharmac… (1997) | [10.1002/j.1552-4604.1997.tb04309.x](https://doi.org/10.1002/j.1552-4604.1997.tb04309.x) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Lau_1997_reinforcement_rate](drugs/drug_alprazolam/pd_Lau_1997_reinforcement_rate.md) | reinforcement rate ← alprazolam · indirect response — drug inhibits the production of reinforcement rate | model (no simulator) | Lau CE et al., Pharmacokinetic-pharmacodynamic modelin…, The Journal of pharmacology… (1997) | — |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Sanna_1999_GABA_induced_Cl_current_potentiation_alpha1_beta2_gamma2S_GABAA_receptors](drugs/drug_alprazolam/pd_Sanna_1999_GABA_induced_Cl_current_potentiation_alpha1_beta2.md) | GABA-induced Cl- current potentiation (alpha1 beta2 gamma2S GABAA receptors) ← alprazolam · direct Emax (saturable) effect | model (no simulator) | Sanna E et al., Molecular and neurochemical evaluation…, Arzneimittel-Forschung (1999) | [10.1055/s-0031-1300366](https://doi.org/10.1055/s-0031-1300366) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span> | [Witt_2026_RGR](drugs/drug_alprazolam/pd_Witt_2026_RGR.md) | relative growth rate ← alprazolam · direct sigmoid Emax (Hill) effect | model (no simulator) | Witt NGPM et al., Ecotoxicological Effects of Psychoactiv…, Toxics (2026) | [10.3390/toxics14050420](https://doi.org/10.3390/toxics14050420) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=alprazolam) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| distribution | blood | `ALB` binder, `ORM1` binder | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP2C9` substrate, `CYP3A4` substrate, `CYP3A5` substrate, `CYP3A7` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: GABRA1 (positive allosteric modulator), GABRA1 (target), TSPO (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 445 matched, 140 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 4  ·  extracted 1  ·  needs_review 2  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_11 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `DeVane_1993.pdf` | DeVane CL et al., Evaluation of population pharmacokineti…, Clinical pharmacology and t… (1993) | popPK | 10 | [10.1038/clpt.1993.65](https://doi.org/10.1038/clpt.1993.65) | [8491063](https://pubmed.ncbi.nlm.nih.gov/8491063) | Population PK (mixed-effect) study of alprazolam in 94 psychiatric inpatients with CL, V, and ka values reported directly in the abstract. |
| `Hossain_1997.pdf` | Hossain M et al., Nonlinear mixed effects modeling of sin…, Pharmaceutical research (1997) | popPK | 10 | [10.1023/a:1012041920119](https://doi.org/10.1023/a:1012041920119) | [9098872](https://pubmed.ncbi.nlm.nih.gov/9098872) | Population PK (NONMEM) model of alprazolam itself with CL, KA, bioavailability parameters, but numeric values are not present in the abstract evidence. |
| `Venkatakrishnan_2005.pdf` | Venkatakrishnan K et al., Kinetics and dynamics of intravenous ad…, Journal of clinical pharmac… (2005) | popPK | 10 | [10.1177/0091270004269105](https://doi.org/10.1177/0091270004269105) | [15831776](https://pubmed.ncbi.nlm.nih.gov/15831776) | Alprazolam is a subject drug with numeric V (77 L), t½ (14.6 h), and CL (84 mL/min) reported directly in the abstract for healthy volunteers. |
| `Antal_1989.pdf` | Antal EJ et al., An evaluation of population pharmacokin…, Clinical pharmacology and t… (1989) | popPK | 8 | [10.1038/clpt.1989.185](https://doi.org/10.1038/clpt.1989.185) | [2684474](https://pubmed.ncbi.nlm.nih.gov/2684474) | Population PK study of alprazolam in humans, but no numeric parameter values are present in the evidence. |
| `Burkat_2023.pdf` | Burkat PM, Physiologically based pharmacokinetic a…, British journal of clinical… (2023) | popPK | 8 | [10.1111/bcp.15719](https://doi.org/10.1111/bcp.15719) | [36946233](https://pubmed.ncbi.nlm.nih.gov/36946233) | PBPK/PD modelling of alprazolam itself, but detailed CL/V/ka parameter values appear to live in PK-Sim/Monolix model files or supplementary material; only concentration outputs are given in the abstract. |
| `Grasela_1986.pdf` | Grasela TH et al., An evaluation of population pharmacokin…, Clinical pharmacology and t… (1986) | popPK | 8 | [10.1038/clpt.1986.107](https://doi.org/10.1038/clpt.1986.107) | [3709024](https://pubmed.ncbi.nlm.nih.gov/3709024) | Population PK (NONMEM) analysis of alprazolam clearance and volume from a phase III trial, but the abstract gives no numeric parameter values, which likely reside in tables/figures not provided. |
| `Bertz_1997.pdf` | Bertz RJ et al., Alprazolam in young and elderly men: se…, The Journal of pharmacology… (1997) | popPK | 6 | not captured | [9190868](https://pubmed.ncbi.nlm.nih.gov/9190868) | PK study of alprazolam in young vs elderly men reporting clearance and half-life differences, but no numeric CL/V values are given in the evidence (likely in tables/figures not provided). |
| `Chetty_2012.pdf` | Chetty M et al., Sex differences in the clearance of CYP…, Current drug metabolism (2012) | popPK | 6 | [10.2174/138920012800840464](https://doi.org/10.2174/138920012800840464) | [22452452](https://pubmed.ncbi.nlm.nih.gov/22452452) | Alprazolam is a subject drug in a population-PK simulation study, but only sample-size/power numbers appear; actual CL parameter values are not shown in the evidence. |
| `Kaplan_2000.pdf` | Kaplan GB et al., Differences in pharmacodynamics but not…, Journal of clinical psychop… (2000) | popPK | 6 | [10.1097/00004714-200006000-00008](https://doi.org/10.1097/00004714-200006000-00008) | [10831021](https://pubmed.ncbi.nlm.nih.gov/10831021) | Human single-dose alprazolam PK study reporting CL, V, half-life, but numeric values are not shown in the abstract/evidence provided. |
| `Lau_1997.pdf` | Lau CE et al., Pharmacokinetic-pharmacodynamic modelin…, The Journal of pharmacology… (1997) | popPK | 6 | not captured | [9399984](https://pubmed.ncbi.nlm.nih.gov/9399984) | PK-PD modeling of alprazolam in rats, but only PD parameters (EC50/IC50) appear; disposition parameters (CL, V) are not shown numerically in the evidence. |
| `Wright_1997.pdf` | Wright CE et al., Pharmacokinetics and psychomotor perfor…, Journal of clinical pharmac… (1997) | popPK | 5 | [10.1002/j.1552-4604.1997.tb04309.x](https://doi.org/10.1002/j.1552-4604.1997.tb04309.x) | [9115058](https://pubmed.ncbi.nlm.nih.gov/9115058) | Human PK study of alprazolam with clearance mentioned but no numeric parameter values present in the evidence. |

<sub>queue written 2026-10-06T18:11:04.410071+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Ambrosio_2018 | not_relevant | 0 | 0 | In vitro drug-drug interaction study on morphine metabolism; no gene variant/genotype effect on alprazolam PK/PD reported. |
| popPK | Ammit_1991 | irrelevant | 0 | 0 | Alprazolam is only a comparator in an in-vitro platelet aggregation potency assay; no PK parameters reported. |
| popPK | Antal_1989 | relevant | 8 | 2 | Population PK study of alprazolam in humans, but no numeric parameter values are present in the evidence. |
| popPK | Baumann_1996 | irrelevant | 0 | 0 | Review of SSRI pharmacokinetics; alprazolam mentioned only as an interaction probe, no quantitative PK parameters for alprazolam. |
| PGx | Baumann_1996 | not_relevant | 2 | 3 | Review of SSRI pharmacokinetics and CYP interactions; alprazolam only mentioned as a fluoxetine interaction, no gene variant effect on alprazolam PK/PD reported. |
| popPK | Bertz_1997 | relevant | 6 | 3 | PK study of alprazolam in young vs elderly men reporting clearance and half-life differences, but no numeric CL/V values are given in the evidence (likely in tables/figures not provided). |
| PGx | Boulenc_2016 | not_relevant | 0 | 0 | This is a drug-drug interaction study (ketoconazole-CYP3A4 inhibition), not a pharmacogenomic variant/genotype effect on alprazolam PK/PD. |
| popPK | Burkat_2023 | relevant | 8 | 4 | PBPK/PD modelling of alprazolam itself, but detailed CL/V/ka parameter values appear to live in PK-Sim/Monolix model files or supplementary material; only concentration outputs are given in the abstract. |
| PGx | Chan_2020 | not_relevant | 0 | 0 | In vitro drug-drug interaction (erythromycin inhibition of CYP3A) with no gene variant/genotype/phenotype effect on alprazolam PK/PD. |
| PGx | Chen_2020 | not_relevant | 0 | 0 | Study examines red clover supplement-drug interactions, not gene variant effects on alprazolam PK/PD. |
| popPK | Chetty_2012 | relevant | 6 | 3 | Alprazolam is a subject drug in a population-PK simulation study, but only sample-size/power numbers appear; actual CL parameter values are not shown in the evidence. |
| PGx | Chetty_2012 | not_relevant | 2 | 3 | Sex-based (not gene/genotype) differences in alprazolam clearance via simulation; no pharmacogenomic variant effect reported. |
| PGx | DSouza_2001 | not_relevant | 0 | 0 | Reports a drug-drug interaction (alosetron-alprazolam), not a pharmacogenomic effect of a gene variant on PK/PD. |
| PGx | Di_2008 | not_relevant | 2 | 1 | SJW–alprazolam is a herb–drug interaction, not a gene variant effect, and no quantitative PK/PD data are provided. |
| popPK | Dresser_2000 | irrelevant | 2 | 0 | This is a narrative review of CYP3A4 drug interactions mentioning alprazolam only as an example, with no quantitative PK parameters reported. |
| PGx | Dresser_2000 | not_relevant | 2 | 2 | Review of CYP3A4 drug-drug interactions; no gene variant/genotype effect on alprazolam PK/PD parameters reported. |
| PGx | Ellingrod_1995 | not_relevant | 0 | 0 | Mentions nefazodone (CYP3A4 inhibitor) increasing alprazolam concentrations, but no gene variant/genotype effect on alprazolam PK/PD is reported. |
| popPK | Ferrer_2025 | irrelevant | 0 | 0 | Paper is about oolong tea bioactive compounds and breast cancer; no alprazolam PK parameters present. |
| PGx | Fields_2015 | not_relevant | 2 | 5 | Reports drug-drug interaction effects of alprazolam on opioid PK, not a pharmacogenomic (gene variant/genotype) effect. |
| popPK | File_1986 | irrelevant | 0 | 0 | Behavioral place-conditioning study in rats with no pharmacokinetic parameters reported. |
| popPK | Fleishaker_2000 | irrelevant | 1 | 0 | This is a review of reboxetine; alprazolam is only mentioned as a CYP3A4 probe with no PK parameters reported. |
| PGx | Fleishaker_2000 | not_relevant | 0 | 0 | Paper is about reboxetine PK; alprazolam only mentioned as a probe drug in a DDI study, no gene variant/genotype effect reported. |
| PGx | Furukori_1998 | not_relevant | 0 | 0 | Drug-drug interaction (carbamazepine induction), not a gene variant/genotype/phenotype effect. |
| popPK | Gaudêncio_2023 | irrelevant | 0 | 0 | This is a review of natural products discovery methods with no alprazolam PK data or parameters. |
| popPK | Grasela_1986 | relevant | 8 | 3 | Population PK (NONMEM) analysis of alprazolam clearance and volume from a phase III trial, but the abstract gives no numeric parameter values, which likely reside in tables/figures not provided. |
| popPK | Grasela_1987 | irrelevant | 3 | 1 | Alprazolam is the co-administered/diagnostic agent affecting imipramine clearance; no numeric alprazolam PK parameters are reported in the evidence. |
| PGx | Greenblatt_1993 | not_relevant | 0 | 0 | Paper explicitly states CYP3A is not genetically polymorphic; no gene variant effect on alprazolam PK/PD reported. |
| PGx | Greene_1997 | not_relevant | 2 | 5 | Reports a drug-drug interaction (nefazodone inhibiting CYP3A4) affecting alprazolam PK, not a gene variant/genotype/phenotype effect. |
| popPK | Gurley_1995 | irrelevant | 0 | 0 | This is a GABAA receptor mutagenesis study; alprazolam is only an allosteric modulator with no PK parameters reported. |
| popPK | Gómez-Perales_2021 | irrelevant | 0 | 0 | no_text gate: only 59 chars of text extracted (&lt; 400) |
| popPK | Hascoët_1998 | irrelevant | 0 | 0 | Behavioral pharmacology study in mice with no PK parameters for alprazolam reported. |
| popPK | Hossain_1997 | relevant | 10 | 3 | Population PK (NONMEM) model of alprazolam itself with CL, KA, bioavailability parameters, but numeric values are not present in the abstract evidence. |
| PGx | Hossain_1997 | not_relevant | 2 | 5 | Smoking effect on clearance is reported, but no gene variant/genotype/phenotype effect on alprazolam PK/PD is described. |
| PGx | Hsu_1998 | not_relevant | 0 | 0 | The paper discusses ritonavir-alprazolam drug-drug interaction, not any gene variant/genotype/phenotype effect on alprazolam PK/PD. |
| popPK | Hu_1994 | irrelevant | 0 | 0 | In vitro receptor binding study; alprazolam is only a ligand probe, no PK parameters. |
| PGx | Huang_2018 | not_relevant | 0 | 0 | Ethanol-drug interaction study, no gene variant/genotype/phenotype effect on alprazolam PK/PD. |
| popPK | Inganäs_2025 | irrelevant | 0 | 0 | This is a PROTAC membrane-permeability/conformational chemistry study with no alprazolam PK data or parameters. |
| PGx | Izzo_2009 | not_relevant | 0 | 0 | Herbal-drug interaction case reports; no gene variant/genotype effects on alprazolam PK/PD reported. |
| PGx | Jones_2007 | not_relevant | 2 | 0 | Mentions polymorphism of drug-metabolizing enzymes only as a general consideration; no gene-specific effect on alprazolam PK/PD reported. |
| PGx | Juřica_2013 | not_relevant | 3 | 3 | The paper examines CYP2D6 inhibition by paroxetine (phenotype via dextromethorphan metabolic ratio), not a gene variant/genotype effect on alprazolam PK/PD parameters; alprazolam is used as a CYP2D6 substrate but no pharmacogenomic effect size on its PK/PD is reported. |
| popPK | Kaplan_2000 | relevant | 6 | 3 | Human single-dose alprazolam PK study reporting CL, V, half-life, but numeric values are not shown in the abstract/evidence provided. |
| popPK | Kozlowski_1988 | irrelevant | 0 | 0 | In vitro receptor binding/behavioral pharmacology study with no PK disposition parameters for alprazolam. |
| popPK | Kroboth_1988 | irrelevant | 4 | 2 | This is a PK/PD tolerance study reporting a tolerance rate constant (kt=0.15 hr⁻¹) and EC50 model, not quantitative disposition parameters (CL, V, half-life) for alprazolam; only kt is given numerically. |
| PGx | Kudo_1999 | not_relevant | 0 | 0 | Paper concerns haloperidol pharmacokinetics; alprazolam is only mentioned as an interacting drug, with no gene variant effect on alprazolam PK/PD reported. |
| popPK | Lasher_1991 | irrelevant | 3 | 1 | Interaction study in humans; no numeric PK parameters (CL, V, t½) for alprazolam appear in the evidence, only a ~30% concentration change. |
| popPK | Lau_1997 | relevant | 6 | 3 | PK-PD modeling of alprazolam in rats, but only PD parameters (EC50/IC50) appear; disposition parameters (CL, V) are not shown numerically in the evidence. |
| popPK | Lau_1998 | irrelevant | 0 | 0 | Study is about midazolam PK-PD in rats; alprazolam is only mentioned as a prior model, with no alprazolam parameter values present. |
| popPK | Leonard_2008 | irrelevant | 0 | 0 | Alprazolam is only a reference comparator for anxiolytic efficacy; no PK parameters for alprazolam are reported. |
| popPK | Levy-Cooperman_2016 | irrelevant | 0 | 0 | Alprazolam is only an active comparator in an abuse-liability study of eslicarbazepine; no alprazolam PK parameters are reported. |
| popPK | Lyauk_2020 | irrelevant | 0 | 0 | This is an IRT/pharmacometric model of IPSS symptom scores for degarelix in BPH; alprazolam is not mentioned and no PK parameters for it appear. |
| popPK | Mehta_1992 | irrelevant | 0 | 0 | In-vitro receptor binding study; alprazolam is only a displacing ligand, no PK parameters. |
| popPK | Mertes_2022 | irrelevant | 0 | 0 | This is a PK study of liposomal transcrocetin (LEAF-4L6715), not alprazolam; alprazolam is never mentioned. |
| popPK | Montero_1993 | irrelevant | 0 | 0 | Alprazolam is used only as a PAF antagonist in an in-vitro cell proliferation assay; no PK parameters reported. |
| popPK | Moon_1990 | irrelevant | 0 | 0 | Alprazolam is only used as a PAF receptor antagonist in an in vitro platelet bioassay; no PK parameters for alprazolam are reported. |
| PGx | Nicolussi_2020 | not_relevant | 2 | 3 | Alprazolam is only mentioned in a list of drugs whose PK is altered by St. John's wort; no gene variant/genotype effect on alprazolam PK/PD is reported. |
| PGx | Ogawa_2013 | not_relevant | 0 | 0 | Cross-species clearance prediction using monkey PK data; no gene variant/genotype effect on alprazolam PK/PD reported. |
| PGx | Ohtsuka_2010 | not_relevant | 0 | 0 | Reports CYP3A induction by rifampicin altering alprazolam PK in monkeys, not a gene variant/genotype/phenotype effect. |
| PGx | Otani_2003 | not_relevant | 3 | 2 | Discusses CYP3A4 metabolism of alprazolam and drug interactions, but no gene variant/genotype effect on PK/PD parameters is reported. |
| popPK | Robertson_1987 | irrelevant | 0 | 0 | Alprazolam is only used as a PAF-antagonist comparator in an in vitro pharmacology study; no PK parameters reported. |
| PGx | Roedler_2007 | not_relevant | 0 | 0 | Paper discusses metronidazole–CYP3A drug interactions, not gene variant effects on alprazolam PK/PD. |
| popPK | Sanna_1999 | irrelevant | 0 | 0 | In-vitro/neurochemical receptor binding study of etizolam; alprazolam is only a comparator ligand with no PK disposition parameters. |
| PGx | Schmider_1996 | not_relevant | 0 | 0 | In vitro CYP3A4 characterization of alprazolam 4-hydroxylation with antibodies; no gene variant/genotype effect on PK/PD parameters. |
| popPK | Schoedel_2017 | irrelevant | 0 | 0 | Alprazolam is only used as an active comparator in an abuse-potential study; no PK parameters for alprazolam are reported. |
| popPK | Schoedel_2018 | irrelevant | 0 | 0 | Alprazolam is only a positive control in an abuse-potential study of brivaracetam; no PK parameters for alprazolam are reported. |
| popPK | Schoedel_2018_2 | irrelevant | 0 | 0 | Alprazolam is only a positive-control comparator in a CBD abuse-potential study; no alprazolam PK parameters are reported. |
| PGx | Sierra_2024 | not_relevant | 0 | 0 | No gene variant/genotype/phenotype effects on alprazolam PK/PD; only NAFLD scalars and CYP3A4 abundance sensitivity analysis. |
| PGx | Sproule_1997 | not_relevant | 3 | 2 | Mentions genotyping/phenotyping as a factor and SSRI-drug interactions, but no gene variant effect on alprazolam PK/PD parameters is reported. |
| PGx | Stolbach_2015 | not_relevant | 0 | 0 | Only describes drug-drug interactions (PIs with alprazolam) via CYP3A4 inhibition; no gene variant/genotype effect on alprazolam PK/PD reported. |
| PGx | Venkatakrishnan_2000 | not_relevant | 0 | 0 | Paper describes drug-drug interactions (azole inhibitors) affecting alprazolam metabolism, not gene variant/genotype effects on PK/PD parameters. |
| PGx | Venkatakrishnan_2006 | not_relevant | 5 | 1 | Only a title is provided; no PK/PD effect sizes or genotype associations are extractable. |
| popPK | Wilbraham_2020 | irrelevant | 3 | 4 | Alprazolam is only a positive control in an abuse-potential study; only NCA Cmax/tmax/AUC (no CL, V, or PK model) for alprazolam appear, and half-life values live in Table 2/Supplementary figures not fully provided. |
| popPK | Witt_2026 | irrelevant | 0 | 0 | Ecotoxicology study in Lemna minor with no PK disposition parameters for alprazolam; only EC50 toxicity values are reported. |
| popPK | Wright_1997 | relevant | 5 | 2 | Human PK study of alprazolam with clearance mentioned but no numeric parameter values present in the evidence. |
| PGx | Zhao_2022 | not_relevant | 4 | 8 | Reports in vitro recombinant CYP3A43 mutant metabolite production rates, not a pharmacogenomic effect on an in vivo PK/PD parameter of alprazolam. |
| popPK | unknown_2023 | irrelevant | 0 | 0 | no_text gate: only 62 chars of text extracted (&lt; 400) |
| PGx | van_1995 | not_relevant | 0 | 0 | No gene variant/genotype/phenotype effect on alprazolam PK/PD is reported; only fluvoxamine's enzyme inhibition of alprazolam metabolism is mentioned. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 18:11 UTC</sub>
