<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;capivasertib&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Capivasertib_Fernandez2025_reference&quot;,&quot;label&quot;:&quot;Fernandez_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_capivasertib/Capivasertib_Fernandez2025_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# capivasertib

- **generic name:** capivasertib
- **ATC codes:** `L01EX27`
- **DrugBank:** [DB12218](https://go.drugbank.com/drugs/DB12218) · **PubChem:** [CID 25227436](https://pubchem.ncbi.nlm.nih.gov/compound/25227436)
- **molar mass:** 428.915 g/mol (C21H25ClN6O2) — DrugBank
- **groups:** approved, investigational

## About

Capivasertib is a protein kinase inhibitor used to treat breast cancer. It is authorised in the European Union for breast cancer and is also being investigated for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27074756](https://www.wikidata.org/wiki/Q27074756) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| capivasertib | parent | 428.915 | C21H25ClN6O2 | DrugBank | [25227436](https://pubchem.ncbi.nlm.nih.gov/compound/25227436) | Fernandez-Teruel_2024, Fernandez_2025 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 22:26 | 7:00 | 1/0/1 | 0/0/1 | 0/0/0 | 111,375/39,412 | openai / gpt-6-luna | 3 | 0/3 | 3/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Fernandez_2025_reference](drugs/drug_capivasertib/Capivasertib_Fernandez2025_reference.md) | ▶ model + simulator | 2-compartment, oral | 10 (+1 cov.) | Fernandez Teruel C et al., Population Pharmacokinetics and Exposur…, Clinical and translational… (2025) | [10.1111/cts.70286](https://doi.org/10.1111/cts.70286) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C1_half_life_alpha failed (ratio 1.8838)</sub><br><sub>blocking: C1_half_life_beta failed (ratio 0.6367)</sub><br><sub>route_to: `human_review`</sub> | [Fernandez-Teruel_2024_reference](drugs/drug_capivasertib/Capivasertib_FernandezTeruel2024_reference.md) | — | 2-compartment (no model) | 10 | Fernandez-Teruel C et al., Population Pharmacokinetics of Capivase…, Clinical pharmacokinetics (2024) | [10.1007/s40262-024-01407-x](https://doi.org/10.1007/s40262-024-01407-x) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> | [Fernandez_2025_AE_grade_1](drugs/drug_capivasertib/pd_Fernandez_2025_AE_grade_1.md) | AE grade ≥ 1 ← capivasertib · categorical (graded) response model | — | Fernandez Teruel C et al., Population Pharmacokinetics and Exposur…, Clinical and translational… (2025) | [10.1111/cts.70286](https://doi.org/10.1111/cts.70286) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Fernandez_2025_AE_grade_3](drugs/drug_capivasertib/pd_Fernandez_2025_AE_grade_3.md) | AE grade ≥ 3 ← capivasertib · categorical (graded) response model | — | Fernandez Teruel C et al., Population Pharmacokinetics and Exposur…, Clinical and translational… (2025) | [10.1111/cts.70286](https://doi.org/10.1111/cts.70286) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Fernandez_2025_AE_leading_to_dose_discontinuation](drugs/drug_capivasertib/pd_Fernandez_2025_AE_leading_to_dose_discontinuation.md) | AE leading to dose discontinuation ← capivasertib · categorical (graded) response model | — | Fernandez Teruel C et al., Population Pharmacokinetics and Exposur…, Clinical and translational… (2025) | [10.1111/cts.70286](https://doi.org/10.1111/cts.70286) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Fernandez_2025_AE_leading_to_dose_modification](drugs/drug_capivasertib/pd_Fernandez_2025_AE_leading_to_dose_modification.md) | AE leading to dose modification (interruption and/or reduction) ← capivasertib · categorical (graded) response model | — | Fernandez Teruel C et al., Population Pharmacokinetics and Exposur…, Clinical and translational… (2025) | [10.1111/cts.70286](https://doi.org/10.1111/cts.70286) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Fernandez_2025_Diarrhea_AE_grade_2](drugs/drug_capivasertib/pd_Fernandez_2025_Diarrhea_AE_grade_2.md) | Diarrhea AE grade ≥ 2 ← capivasertib · categorical (graded) response model | — | Fernandez Teruel C et al., Population Pharmacokinetics and Exposur…, Clinical and translational… (2025) | [10.1111/cts.70286](https://doi.org/10.1111/cts.70286) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Fernandez_2025_Hyperglycemia_AE_any_grade](drugs/drug_capivasertib/pd_Fernandez_2025_Hyperglycemia_AE_any_grade.md) | Hyperglycemia AE any grade ← capivasertib · categorical (graded) response model | — | Fernandez Teruel C et al., Population Pharmacokinetics and Exposur…, Clinical and translational… (2025) | [10.1111/cts.70286](https://doi.org/10.1111/cts.70286) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Fernandez_2025_Hyperglycemia_AE_grade_3](drugs/drug_capivasertib/pd_Fernandez_2025_Hyperglycemia_AE_grade_3.md) | Hyperglycemia AE grade ≥ 3 ← capivasertib · categorical (graded) response model | — | Fernandez Teruel C et al., Population Pharmacokinetics and Exposur…, Clinical and translational… (2025) | [10.1111/cts.70286](https://doi.org/10.1111/cts.70286) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Fernandez_2025_Increased_blood_glucose_13_9_mmol_L](drugs/drug_capivasertib/pd_Fernandez_2025_Increased_blood_glucose_13_9_mmol_L.md) | Increased blood glucose &gt; 13.9 mmol/L ← capivasertib · categorical (graded) response model | — | Fernandez Teruel C et al., Population Pharmacokinetics and Exposur…, Clinical and translational… (2025) | [10.1111/cts.70286](https://doi.org/10.1111/cts.70286) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Fernandez_2025_ORR](drugs/drug_capivasertib/pd_Fernandez_2025_ORR.md) | Objective response rate ← capivasertib · categorical (graded) response model | — | Fernandez Teruel C et al., Population Pharmacokinetics and Exposur…, Clinical and translational… (2025) | [10.1111/cts.70286](https://doi.org/10.1111/cts.70286) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Fernandez_2025_PFS](drugs/drug_capivasertib/pd_Fernandez_2025_PFS.md) | Progression-free survival ← capivasertib · time-to-event model | — | Fernandez Teruel C et al., Population Pharmacokinetics and Exposur…, Clinical and translational… (2025) | [10.1111/cts.70286](https://doi.org/10.1111/cts.70286) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Fernandez_2025_Rash_AE_grade_2](drugs/drug_capivasertib/pd_Fernandez_2025_Rash_AE_grade_2.md) | Rash AE grade ≥ 2 ← capivasertib · categorical (graded) response model | — | Fernandez Teruel C et al., Population Pharmacokinetics and Exposur…, Clinical and translational… (2025) | [10.1111/cts.70286](https://doi.org/10.1111/cts.70286) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Fernandez_2025_SAE](drugs/drug_capivasertib/pd_Fernandez_2025_SAE.md) | SAE ← capivasertib · categorical (graded) response model | — | Fernandez Teruel C et al., Population Pharmacokinetics and Exposur…, Clinical and translational… (2025) | [10.1111/cts.70286](https://doi.org/10.1111/cts.70286) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=capivasertib) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCG2` inhibitor | DrugBank actor |
| absorption | liver | `ABCG2` inhibitor | DrugBank actor |
| absorption | mammary gland | `ABCG2` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCG2` inhibitor | DrugBank actor |
| absorption | testis | `ABCG2` inhibitor | DrugBank actor |
| metabolism | kidney | `UGT2B7` substrate | DrugBank actor |
| metabolism | liver | `CYP3A4` substrate, `SLCO1B1` inhibitor, `SLCO1B3` inhibitor, `UGT2B7` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `UGT2B7` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `SLC22A2` inhibitor, `SLC22A8` inhibitor, `SLC47A1` inhibitor, `SLC47A2` inhibitor | DrugBank actor |
| excretion | liver | `SLC47A1` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: AKT1 (inhibitor), AKT2 (inhibitor), AKT3 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 1  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Voronova_2022 | irrelevant | 1 | 0 | This is a human concentration–QT analysis, not a capivasertib disposition or population-PK model, and reports no quantitative disposition parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 22:20 UTC</sub>
