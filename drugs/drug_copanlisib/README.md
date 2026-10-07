<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;copanlisib&quot;}]"></div>

# copanlisib

- **generic name:** copanlisib
- **ATC codes:** `L01EM02`
- **DrugBank:** [DB12483](https://go.drugbank.com/drugs/DB12483) · **PubChem:** [CID 24989044](https://pubchem.ncbi.nlm.nih.gov/compound/24989044)
- **molar mass:** 480.529 g/mol (C23H28N8O4) — DrugBank
- **groups:** approved, investigational

## About

Copanlisib is a PI3K inhibitor investigated as a cancer treatment, notably for marginal zone lymphoma. Its marketing application in the European Union was withdrawn, so it is not authorised there.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q19903876](https://www.wikidata.org/wiki/Q19903876) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| copanlisib | parent | 480.529 | C23H28N8O4 | DrugBank | [24989044](https://pubchem.ncbi.nlm.nih.gov/compound/24989044) | Morcos_2023 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:01 | 3:19 | 0/1/0 | 0/0/1 | 0/0/0 | 80,751/18,255 | openai / gpt-6-luna | 2 | 0/2 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C2 negative clearance/volume in a covariate scenario or base (implausible — bas…</sub><br><sub>route_to: `human_review`</sub> | [Morcos_2023_reference](drugs/drug_copanlisib/Copanlisib_Morcos2023_reference.md) | — | 2-compartment (no model) | 7 | Morcos PN et al., Copanlisib population pharmacokinetics…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.13000](https://doi.org/10.1002/psp4.13000) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> | [Morcos_2023_ORR](drugs/drug_copanlisib/pd_Morcos_2023_ORR.md) | objective response rate ← copanlisib · categorical (graded) response model | — | Morcos PN et al., Copanlisib population pharmacokinetics…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.13000](https://doi.org/10.1002/psp4.13000) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Morcos_2023_PFS](drugs/drug_copanlisib/pd_Morcos_2023_PFS.md) | progression-free survival ← copanlisib · time-to-event model | — | Morcos PN et al., Copanlisib population pharmacokinetics…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.13000](https://doi.org/10.1002/psp4.13000) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Morcos_2023_SAEs](drugs/drug_copanlisib/pd_Morcos_2023_SAEs.md) | frequency of serious adverse events (SAEs) ← copanlisib · categorical (graded) response model | — | Morcos PN et al., Copanlisib population pharmacokinetics…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.13000](https://doi.org/10.1002/psp4.13000) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Morcos_2023_TEAEs_of_grade_3_or_worse](drugs/drug_copanlisib/pd_Morcos_2023_TEAEs_of_grade_3_or_worse.md) | frequency of treatment-emergent adverse events that were grade 3 or worse ← copanlisib · categorical (graded) response model | — | Morcos PN et al., Copanlisib population pharmacokinetics…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.13000](https://doi.org/10.1002/psp4.13000) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Morcos_2023_diarrhea](drugs/drug_copanlisib/pd_Morcos_2023_diarrhea.md) | diarrhea ← copanlisib · categorical (graded) response model | — | Morcos PN et al., Copanlisib population pharmacokinetics…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.13000](https://doi.org/10.1002/psp4.13000) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Morcos_2023_fatigue](drugs/drug_copanlisib/pd_Morcos_2023_fatigue.md) | fatigue ← copanlisib · categorical (graded) response model | — | Morcos PN et al., Copanlisib population pharmacokinetics…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.13000](https://doi.org/10.1002/psp4.13000) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Morcos_2023_hyperglycemia](drugs/drug_copanlisib/pd_Morcos_2023_hyperglycemia.md) | hyperglycemia ← copanlisib · categorical (graded) response model | — | Morcos PN et al., Copanlisib population pharmacokinetics…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.13000](https://doi.org/10.1002/psp4.13000) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Morcos_2023_hypertension](drugs/drug_copanlisib/pd_Morcos_2023_hypertension.md) | hypertension ← copanlisib · categorical (graded) response model | — | Morcos PN et al., Copanlisib population pharmacokinetics…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.13000](https://doi.org/10.1002/psp4.13000) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Morcos_2023_lung_infections_including_pneumonitis](drugs/drug_copanlisib/pd_Morcos_2023_lung_infections_including_pneumonitis.md) | lung infections (including pneumonitis) ← copanlisib · categorical (graded) response model | — | Morcos PN et al., Copanlisib population pharmacokinetics…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.13000](https://doi.org/10.1002/psp4.13000) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Morcos_2023_nausea](drugs/drug_copanlisib/pd_Morcos_2023_nausea.md) | nausea ← copanlisib · categorical (graded) response model | — | Morcos PN et al., Copanlisib population pharmacokinetics…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.13000](https://doi.org/10.1002/psp4.13000) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Morcos_2023_neutropenia_of_any_grade](drugs/drug_copanlisib/pd_Morcos_2023_neutropenia_of_any_grade.md) | neutropenia of any grade ← copanlisib · categorical (graded) response model | — | Morcos PN et al., Copanlisib population pharmacokinetics…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.13000](https://doi.org/10.1002/psp4.13000) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Morcos_2023_time_to_SAEs](drugs/drug_copanlisib/pd_Morcos_2023_time_to_SAEs.md) | time to serious adverse events ← copanlisib · time-to-event model | — | Morcos PN et al., Copanlisib population pharmacokinetics…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.13000](https://doi.org/10.1002/psp4.13000) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Morcos_2023_time_to_TEAEs_of_grade_3_or_worse](drugs/drug_copanlisib/pd_Morcos_2023_time_to_TEAEs_of_grade_3_or_worse.md) | time to treatment-emergent adverse events that were grade 3 or worse ← copanlisib · time-to-event model | — | Morcos PN et al., Copanlisib population pharmacokinetics…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.13000](https://doi.org/10.1002/psp4.13000) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=copanlisib) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| distribution | blood | `ALB` substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP3A4` substrate, `CYP3A5` substrate, `CYP3A7` substrate | DrugBank actor |
| metabolism | lung | `CYP1A1` substrate | DrugBank actor |
| metabolism | small intestine | `CYP1A1` substrate, `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `SLC47A2` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: PIK3CA (inhibitor), PIK3CB (inhibitor), PIK3CD (inhibitor), PIK3CG (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Morcos_2023_2 | relevant | 9 | 2 | A copanlisib population-PK model is applied to pediatric patients, but numerical disposition parameter values are not provided here and are fixed to a previously published adult model. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 22:58 UTC</sub>
