<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;mirikizumab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Mirikizumab_Chua2023_reference&quot;,&quot;label&quot;:&quot;Chua_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_mirikizumab/Mirikizumab_Chua2023_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# mirikizumab

- **generic name:** mirikizumab
- **ATC codes:** `L04AC24`
- **DrugBank:** [DB14910](https://go.drugbank.com/drugs/DB14910) · **PubChem:** none
- **groups:** approved, investigational

## About

Mirikizumab, a monoclonal antibody that blocks interleukin signalling, is used to treat ulcerative colitis. It is approved and authorised in the European Union, and remains under investigation for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q55641096](https://www.wikidata.org/wiki/Q55641096) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Start here

> **Chua_2023_reference** — <span class="pk-badge pk-badge--orange">Needs review</span> patients with moderately to severely active ulcerative colitis, n = — the modelled concentrations are mirikizumab's
  #   metabolite_pk: a metabolite of mirikizumab is what is modelled
  #   biomarker_turnover: the kinetic model describes an ENDOGENOUS substance
  #     (uric acid, glucose, cholesterol, INR, platelets, a hormone …) — its
  #     production, volume and clearance — and mirikizumab only perturbs
  #     it (Rmax, Imax, IC50 on production or loss). Those V and CL are the
  #     biomarker's, NOT the drug's pharmacokinetics.
  #   exposure_response: no kinetic model; effect vs dose or concentration
models_target_drug:  # yes or no - is mirikizumab (under ANY name: synonym, brand, code or
                     #   abbreviation such as BCNU, ACNU, MTX, 5-FU) the dose_compound or the
                     #   primary_analyte? 'no' when it is only a co-medication or comparator.
final_table_hint:    # if is_poppk=yes, the table that reports the FINAL fitted PK parameter
                     #   estimates (e.g. "Table 2" or its caption's first few words), else unknown
software:            # NONMEM, Monolix, nlmixr, etc., or unknown
has_control_stream:  # yes or no - is NONMEM/model code in the supplement?
dose_compound:       # the compound the subject actually receives
primary_analyte:     # the compound whose concentrations the model chiefly describes
                     # NOTE: dose_compound and primary_analyte MAY DIFFER
population:          # short label for the study population the FINAL parameters describe,
                     #   e.g. "healthy adults", "preterm newborns", "paediatric oncology patients"
age_class:           # one of: neonate | infant | child | adolescent | adult | elderly | mixed | unknown
n_subjects:          # number of subjects in the analysis (a plain integer), or unknown
condition:           # health/disease state, e.g. healthy | patent ductus arteriosus | renal impairment
species:             # the species the data were measured in: human | rat | mouse | dog | cat |
                     #   horse | cattle | sheep | goat | pig | rabbit | monkey | bird | fish |
                     #   other animal (name it) | in vitro | unknown

# List each compound on its own line under 'compounds', one per line, as:
#   - name | role | dosed | measured | has_parameters
# where role = parent | metabolite | co-administered | analyte-only | endogenous_biomarker
#       (endogenous_biomarker = a substance the body makes, whose kinetics the model
#        describes; it is never 'dosed')
#       dosed = yes/no (subject receives it)
#       measured = yes/no (its concentrations are modelled)
#       has_parameters = yes/no (paper gives it V/CL or a compartment)
compounds:
  -

# List each parent-&gt;metabolite (or interconversion) link on its own line under
# 'links', one per line, as:
#   - from | to | relation | link_parameter
# where relation = metabolism | hydrolysis | interconversion
#       link_parameter = Kfm | Fm | formation clearance | none
# If there are no links, write 'links: none' on a single line.
links:
  -

RULES:
- dose_compound and primary_analyte may be different. Allopurinol dosed,
  oxypurinol measured is a valid, common case. Do NOT collapse them to one name.
- A model of an endogenous substance's turnover under the drug (uric acid under
  allopurinol, INR under warfarin) is paper_class=biomarker_turnover with the substance
  listed as role=endogenous_biomarker; is_poppk may still be yes for that model, but the
  drug's own V/CL are then NOT reported.
- population describes the group the FINAL model parameters characterise (the whole
  analysis dataset), not a covariate subgroup. Prefer the paper's own wording.
- species is REQUIRED whenever the paper states it (veterinary and preclinical studies
  are common: "in cats", "Sprague-Dawley rats", "Thoroughbred horses"). Write human only when the subjects are people; do not assume it.
- List EVERY compound, including inactive metabolites, with its role.
- A compound measured but with has_parameters=no is mentioned but not modelled;
  still list it.
- Use the pipe character '|' to separate fields on the list lines.
- Output ONLY the YAML. No prose, no code fences.

OUTPUT FORMAT OVERRIDE: ignore any instruction above to answer in YAML. Return ONLY a JSON object matching the supplied schema. Put each value in its OWN named field — never repeat a field name as a value, never pack several values into one string.. [Run it in the simulator](drugs/drug_mirikizumab/Mirikizumab_Chua2023_reference.md?tab=Simulation) · [record](drugs/drug_mirikizumab/Mirikizumab_Chua2023_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | 0.021 | L/h | 0.021 L/h | pediatric patients with moderate-to-severe ulcerative colitis | 26 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Otani_2025_reference](drugs/drug_mirikizumab/Mirikizumab_Otani2025_reference.md) |
| CL | CL | 0.023 | L/h | 0.023 L/h | patients with moderately to severely active ulcerative colitis | — the modelled concentrations are mirikizumab's   #   metabolite_pk: a metabolite of mirikizumab is what is modelled   #   biomarker_turnover: the kinetic model describes an ENDOGENOUS substance   #     (uric acid, glucose, cholesterol, INR, platelets, a hormone …) — its   #     production, volume and clearance — and mirikizumab only perturbs   #     it (Rmax, Imax, IC50 on production or loss). Those V and CL are the   #     biomarker's, NOT the drug's pharmacokinetics.   #   exposure_response: no kinetic model; effect vs dose or concentration models_target_drug:  # yes or no - is mirikizumab (under ANY name: synonym, brand, code or                      #   abbreviation such as BCNU, ACNU, MTX, 5-FU) the dose_compound or the                      #   primary_analyte? 'no' when it is only a co-medication or comparator. final_table_hint:    # if is_poppk=yes, the table that reports the FINAL fitted PK parameter                      #   estimates (e.g. "Table 2" or its caption's first few words), else unknown software:            # NONMEM, Monolix, nlmixr, etc., or unknown has_control_stream:  # yes or no - is NONMEM/model code in the supplement? dose_compound:       # the compound the subject actually receives primary_analyte:     # the compound whose concentrations the model chiefly describes                      # NOTE: dose_compound and primary_analyte MAY DIFFER population:          # short label for the study population the FINAL parameters describe,                      #   e.g. "healthy adults", "preterm newborns", "paediatric oncology patients" age_class:           # one of: neonate \| infant \| child \| adolescent \| adult \| elderly \| mixed \| unknown n_subjects:          # number of subjects in the analysis (a plain integer), or unknown condition:           # health/disease state, e.g. healthy \| patent ductus arteriosus \| renal impairment species:             # the species the data were measured in: human \| rat \| mouse \| dog \| cat \|                      #   horse \| cattle \| sheep \| goat \| pig \| rabbit \| monkey \| bird \| fish \|                      #   other animal (name it) \| in vitro \| unknown # List each compound on its own line under 'compounds', one per line, as: #   - name \| role \| dosed \| measured \| has_parameters # where role = parent \| metabolite \| co-administered \| analyte-only \| endogenous_biomarker #       (endogenous_biomarker = a substance the body makes, whose kinetics the model #        describes; it is never 'dosed') #       dosed = yes/no (subject receives it) #       measured = yes/no (its concentrations are modelled) #       has_parameters = yes/no (paper gives it V/CL or a compartment) compounds:   - # List each parent-&gt;metabolite (or interconversion) link on its own line under # 'links', one per line, as: #   - from \| to \| relation \| link_parameter # where relation = metabolism \| hydrolysis \| interconversion #       link_parameter = Kfm \| Fm \| formation clearance \| none # If there are no links, write 'links: none' on a single line. links:   - RULES: - dose_compound and primary_analyte may be different. Allopurinol dosed,   oxypurinol measured is a valid, common case. Do NOT collapse them to one name. - A model of an endogenous substance's turnover under the drug (uric acid under   allopurinol, INR under warfarin) is paper_class=biomarker_turnover with the substance   listed as role=endogenous_biomarker; is_poppk may still be yes for that model, but the   drug's own V/CL are then NOT reported. - population describes the group the FINAL model parameters characterise (the whole   analysis dataset), not a covariate subgroup. Prefer the paper's own wording. - species is REQUIRED whenever the paper states it (veterinary and preclinical studies   are common: "in cats", "Sprague-Dawley rats", "Thoroughbred horses"). Write human only when the subjects are people; do not assume it. - List EVERY compound, including inactive metabolites, with its role. - A compound measured but with has_parameters=no is mentioned but not modelled;   still list it. - Use the pipe character '\|' to separate fields on the list lines. - Output ONLY the YAML. No prose, no code fences. OUTPUT FORMAT OVERRIDE: ignore any instruction above to answer in YAML. Return ONLY a JSON object matching the supplied schema. Put each value in its OWN named field — never repeat a field name as a value, never pack several values into one string. | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Chua_2023_reference](drugs/drug_mirikizumab/Mirikizumab_Chua2023_reference.md) |
| CL | CL | — | L/h | 0.227 | adults with moderately-to-severely active Crohn's disease | 897 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Chua_2025_serenity](drugs/drug_mirikizumab/Mirikizumab_Chua2025_serenity.md) |
| CL | CL | — | L/h | 0.0853 | adults with moderately-to-severely active Crohn's disease | 897 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Chua_2025_vivid_1](drugs/drug_mirikizumab/Mirikizumab_Chua2025_vivid_1.md) |
| V | V | 5.74 | L | 5.74 L | patients with moderately to severely active ulcerative colitis | — the modelled concentrations are mirikizumab's   #   metabolite_pk: a metabolite of mirikizumab is what is modelled   #   biomarker_turnover: the kinetic model describes an ENDOGENOUS substance   #     (uric acid, glucose, cholesterol, INR, platelets, a hormone …) — its   #     production, volume and clearance — and mirikizumab only perturbs   #     it (Rmax, Imax, IC50 on production or loss). Those V and CL are the   #     biomarker's, NOT the drug's pharmacokinetics.   #   exposure_response: no kinetic model; effect vs dose or concentration models_target_drug:  # yes or no - is mirikizumab (under ANY name: synonym, brand, code or                      #   abbreviation such as BCNU, ACNU, MTX, 5-FU) the dose_compound or the                      #   primary_analyte? 'no' when it is only a co-medication or comparator. final_table_hint:    # if is_poppk=yes, the table that reports the FINAL fitted PK parameter                      #   estimates (e.g. "Table 2" or its caption's first few words), else unknown software:            # NONMEM, Monolix, nlmixr, etc., or unknown has_control_stream:  # yes or no - is NONMEM/model code in the supplement? dose_compound:       # the compound the subject actually receives primary_analyte:     # the compound whose concentrations the model chiefly describes                      # NOTE: dose_compound and primary_analyte MAY DIFFER population:          # short label for the study population the FINAL parameters describe,                      #   e.g. "healthy adults", "preterm newborns", "paediatric oncology patients" age_class:           # one of: neonate \| infant \| child \| adolescent \| adult \| elderly \| mixed \| unknown n_subjects:          # number of subjects in the analysis (a plain integer), or unknown condition:           # health/disease state, e.g. healthy \| patent ductus arteriosus \| renal impairment species:             # the species the data were measured in: human \| rat \| mouse \| dog \| cat \|                      #   horse \| cattle \| sheep \| goat \| pig \| rabbit \| monkey \| bird \| fish \|                      #   other animal (name it) \| in vitro \| unknown # List each compound on its own line under 'compounds', one per line, as: #   - name \| role \| dosed \| measured \| has_parameters # where role = parent \| metabolite \| co-administered \| analyte-only \| endogenous_biomarker #       (endogenous_biomarker = a substance the body makes, whose kinetics the model #        describes; it is never 'dosed') #       dosed = yes/no (subject receives it) #       measured = yes/no (its concentrations are modelled) #       has_parameters = yes/no (paper gives it V/CL or a compartment) compounds:   - # List each parent-&gt;metabolite (or interconversion) link on its own line under # 'links', one per line, as: #   - from \| to \| relation \| link_parameter # where relation = metabolism \| hydrolysis \| interconversion #       link_parameter = Kfm \| Fm \| formation clearance \| none # If there are no links, write 'links: none' on a single line. links:   - RULES: - dose_compound and primary_analyte may be different. Allopurinol dosed,   oxypurinol measured is a valid, common case. Do NOT collapse them to one name. - A model of an endogenous substance's turnover under the drug (uric acid under   allopurinol, INR under warfarin) is paper_class=biomarker_turnover with the substance   listed as role=endogenous_biomarker; is_poppk may still be yes for that model, but the   drug's own V/CL are then NOT reported. - population describes the group the FINAL model parameters characterise (the whole   analysis dataset), not a covariate subgroup. Prefer the paper's own wording. - species is REQUIRED whenever the paper states it (veterinary and preclinical studies   are common: "in cats", "Sprague-Dawley rats", "Thoroughbred horses"). Write human only when the subjects are people; do not assume it. - List EVERY compound, including inactive metabolites, with its role. - A compound measured but with has_parameters=no is mentioned but not modelled;   still list it. - Use the pipe character '\|' to separate fields on the list lines. - Output ONLY the YAML. No prose, no code fences. OUTPUT FORMAT OVERRIDE: ignore any instruction above to answer in YAML. Return ONLY a JSON object matching the supplied schema. Put each value in its OWN named field — never repeat a field name as a value, never pack several values into one string. | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Chua_2023_reference](drugs/drug_mirikizumab/Mirikizumab_Chua2023_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. — the reported unit did not convert; the value is listed as reported. Rejected records are left out.</sub>

<div class="pk-forest-row"><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="80" viewBox="0 0 560 80" role="img" aria-label="CL across studies"><text x="190" y="14" font-size="12" font-weight="600">CL (L/h, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="58" stroke="#ddd"/><text x="190.0" y="72" font-size="10" text-anchor="middle">0.01</text><line x1="540.0" y1="18" x2="540.0" y2="58" stroke="#ddd"/><text x="540.0" y="72" font-size="10" text-anchor="middle">0.1</text><text x="184" y="34.0" font-size="11" text-anchor="end">Otani_2025 · CL</text><circle cx="302.8" cy="30.0" r="4" fill="#ef6c00"><title>Otani_2025 · CL: 0.021 L/h</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Chua_2023 · CL</text><circle cx="316.6" cy="46.0" r="4" fill="#ef6c00"><title>Chua_2023 · CL: 0.023 L/h</title></circle></svg></div>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: T1_cmax</sub> | [Chua_2023_reference](drugs/drug_mirikizumab/Mirikizumab_Chua2023_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Chua L et al., Mirikizumab Pharmacokinetics in Patient…, Clinical pharmacokinetics (2023) | [10.1007/s40262-023-01281-z](https://doi.org/10.1007/s40262-023-01281-z) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q22 — no SI value to build from</sub> | [Chua_2025_serenity](drugs/drug_mirikizumab/Mirikizumab_Chua2025_serenity.md) | — | 1-compartment (no model) | 1 (+8 cov.) | Chua L et al., Mirikizumab Pharmacokinetics and Exposu…, Clinical and translational… (2025) | [10.1111/cts.70320](https://doi.org/10.1111/cts.70320) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q22 — no SI value to build from</sub> | [↳ vivid_1](drugs/drug_mirikizumab/Mirikizumab_Chua2025_vivid_1.md) | — | 1-compartment (no model) | 1 (+8 cov.) |  |  |
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Otani_2025_reference](drugs/drug_mirikizumab/Mirikizumab_Otani2025_reference.md) | — | 1-compartment (no model) | 1 | Otani Y et al., Mirikizumab pharmacokinetics and exposu…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.13286](https://doi.org/10.1002/psp4.13286) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Chua_2025_SES_CD_response](drugs/drug_mirikizumab/pd_Chua_2025_SES_CD_response.md) | endoscopic response ← mirikizumab · direct Emax (saturable) effect | — | Chua L et al., Mirikizumab Pharmacokinetics and Exposu…, Clinical and translational… (2025) | [10.1111/cts.70320](https://doi.org/10.1111/cts.70320) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Chua_2025_clinical_response_by_PRO](drugs/drug_mirikizumab/pd_Chua_2025_clinical_response_by_PRO.md) | clinical response by PRO ← mirikizumab · stimulation effect | — | Chua L et al., Mirikizumab Pharmacokinetics and Exposu…, Clinical and translational… (2025) | [10.1111/cts.70320](https://doi.org/10.1111/cts.70320) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Friedrich_2024_change_in_modified_Mayo_score](drugs/drug_mirikizumab/pd_Friedrich_2024_change_in_modified_Mayo_score.md) | change in modified Mayo score ← mirikizumab · inhibition effect | — | Friedrich S et al., Mirikizumab Exposure-Response Relations…, Clinical pharmacology and t… (2024) | [10.1002/cpt.3305](https://doi.org/10.1002/cpt.3305) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Chua_2025_CDAI_clinical_remission_composite](drugs/drug_mirikizumab/pd_Chua_2025_CDAI_clinical_remission_composite.md) | clinical remission by CDAI ← mirikizumab · direct linear effect | model (no simulator) | Chua L et al., Mirikizumab Pharmacokinetics and Exposu…, Clinical and translational… (2025) | [10.1111/cts.70320](https://doi.org/10.1111/cts.70320) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Chua_2025_endoscopic_response_composite](drugs/drug_mirikizumab/pd_Chua_2025_endoscopic_response_composite.md) | endoscopic response ← mirikizumab · direct linear effect | model (no simulator) | Chua L et al., Mirikizumab Pharmacokinetics and Exposu…, Clinical and translational… (2025) | [10.1111/cts.70320](https://doi.org/10.1111/cts.70320) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Friedrich_2024_clinical_remission](drugs/drug_mirikizumab/pd_Friedrich_2024_clinical_remission.md) | clinical remission ← mirikizumab · categorical (graded) response model | — | Friedrich S et al., Mirikizumab Exposure-Response Relations…, Clinical pharmacology and t… (2024) | [10.1002/cpt.3305](https://doi.org/10.1002/cpt.3305) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Friedrich_2024_clinical_response](drugs/drug_mirikizumab/pd_Friedrich_2024_clinical_response.md) | clinical response ← mirikizumab · categorical (graded) response model | — | Friedrich S et al., Mirikizumab Exposure-Response Relations…, Clinical pharmacology and t… (2024) | [10.1002/cpt.3305](https://doi.org/10.1002/cpt.3305) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Friedrich_2024_endoscopic_remission](drugs/drug_mirikizumab/pd_Friedrich_2024_endoscopic_remission.md) | endoscopic remission ← mirikizumab · categorical (graded) response model | — | Friedrich S et al., Mirikizumab Exposure-Response Relations…, Clinical pharmacology and t… (2024) | [10.1002/cpt.3305](https://doi.org/10.1002/cpt.3305) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=mirikizumab).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: IL12A (inhibitor), IL23A (antibody), IL23A (binder).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 00:11 | 3:10 | 4/0/0 | 2/0/0 | 0/0/0 | 181,960/17,725 | einfracz / qwen3.8-27b | 4 | 4/0 | 4/0 | 1 |

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 4  ·  extracted 0  ·  needs review 4  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Dubinsky_2023 | irrelevant | 0 | 0 | The paper focuses on health-related quality of life (HRQoL) outcomes and clinical efficacy, reporting no quantitative pharmacokinetic parameters (e.g., CL, V, t1/2) for mirikizumab. |
| popPK | Friedrich_2024 | irrelevant | 4 | 0 | The paper is an exposure-response analysis that relies on PK model-predicted exposures but does not report the quantitative disposition parameters (CL, V, Q) themselves. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmirikizumab%5D&body=Drug%3A%20mirikizumab%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_mirikizumab/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-07 00:08 UTC</sub>
