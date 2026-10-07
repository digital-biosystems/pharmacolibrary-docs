<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;pemigatinib&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Pemigatinib_Gong2023_reference&quot;,&quot;label&quot;:&quot;Gong_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pemigatinib/Pemigatinib_Gong2023_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# pemigatinib

- **generic name:** pemigatinib
- **ATC codes:** `L01EN02`
- **DrugBank:** [DB15102](https://go.drugbank.com/drugs/DB15102) · **PubChem:** not captured
- **molar mass:** 487.508 g/mol (C24H27F2N5O4) — DrugBank
- **groups:** approved, investigational

## About

Pemigatinib is a protein kinase inhibitor used to treat cholangiocarcinoma. It is an approved cancer medicine and is authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q96398739](https://www.wikidata.org/wiki/Q96398739) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| pemigatinib | parent | 487.508 | C24H27F2N5O4 | DrugBank | — | Gong_2023, Ji_2022 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 05:18 | 4:15 | 1/0/1 | 2/0/0 | 0/0/0 | 71,830/27,336 | openai / gpt-6-luna | 2 | 0/2 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Gong_2023_reference](drugs/drug_pemigatinib/Pemigatinib_Gong2023_reference.md) | ▶ model + simulator | 2-compartment, oral | 6 (+4 cov.) | Gong X et al., Population pharmacokinetic and exposure…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.13064](https://doi.org/10.1002/psp4.13064) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q22 — no SI value to build from</sub><br><sub>blocking: C2_base_Q49 failed (ratio 0.1211)</sub><br><sub>route_to: `human_review`</sub> | [Ji_2022_reference](drugs/drug_pemigatinib/Pemigatinib_Ji2022_reference.md) | — | 2-compartment (no model) | 6 (+3 cov.) | Ji T et al., Population Pharmacokinetics Analysis of…, Clinical pharmacology in dr… (2022) | [10.1002/cpdd.1038](https://doi.org/10.1002/cpdd.1038) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Gong_2023_serum_phosphate_change_from_baseline](drugs/drug_pemigatinib/pd_Gong_2023_serum_phosphate_change_from_baseline.md) | mean serum phosphate concentration change from baseline at C1D8 and C1D15 ← pemigatinib · direct sigmoid Emax (Hill) effect | — | Gong X et al., Population pharmacokinetic and exposure…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.13064](https://doi.org/10.1002/psp4.13064) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Gong_2026_alopecia](drugs/drug_pemigatinib/pd_Gong_2026_alopecia.md) | alopecia ← pemigatinib · stimulation effect | — | Gong X et al., Exposure-response analyses of pemigatin…, Journal of chemotherapy (Fl… (2026) | [10.1080/1120009X.2025.2497641](https://doi.org/10.1080/1120009X.2025.2497641) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Gong_2026_diarrhea](drugs/drug_pemigatinib/pd_Gong_2026_diarrhea.md) | diarrhea ← pemigatinib · stimulation effect | — | Gong X et al., Exposure-response analyses of pemigatin…, Journal of chemotherapy (Fl… (2026) | [10.1080/1120009X.2025.2497641](https://doi.org/10.1080/1120009X.2025.2497641) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Gong_2026_dry_mouth](drugs/drug_pemigatinib/pd_Gong_2026_dry_mouth.md) | dry mouth ← pemigatinib · stimulation effect | — | Gong X et al., Exposure-response analyses of pemigatin…, Journal of chemotherapy (Fl… (2026) | [10.1080/1120009X.2025.2497641](https://doi.org/10.1080/1120009X.2025.2497641) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Gong_2026_hyperphosphatemia](drugs/drug_pemigatinib/pd_Gong_2026_hyperphosphatemia.md) | hyperphosphatemia ← pemigatinib · stimulation effect | — | Gong X et al., Exposure-response analyses of pemigatin…, Journal of chemotherapy (Fl… (2026) | [10.1080/1120009X.2025.2497641](https://doi.org/10.1080/1120009X.2025.2497641) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Gong_2026_level_of_efficacy](drugs/drug_pemigatinib/pd_Gong_2026_level_of_efficacy.md) | level of efficacy ← pemigatinib · model not identified | — | Gong X et al., Exposure-response analyses of pemigatin…, Journal of chemotherapy (Fl… (2026) | [10.1080/1120009X.2025.2497641](https://doi.org/10.1080/1120009X.2025.2497641) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Gong_2026_nail_toxicity](drugs/drug_pemigatinib/pd_Gong_2026_nail_toxicity.md) | nail toxicity ← pemigatinib · stimulation effect | — | Gong X et al., Exposure-response analyses of pemigatin…, Journal of chemotherapy (Fl… (2026) | [10.1080/1120009X.2025.2497641](https://doi.org/10.1080/1120009X.2025.2497641) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Gong_2026_stomatitis](drugs/drug_pemigatinib/pd_Gong_2026_stomatitis.md) | stomatitis ← pemigatinib · stimulation effect | — | Gong X et al., Exposure-response analyses of pemigatin…, Journal of chemotherapy (Fl… (2026) | [10.1080/1120009X.2025.2497641](https://doi.org/10.1080/1120009X.2025.2497641) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Gong_2023_CNAE_hyperphosphatemia](drugs/drug_pemigatinib/pd_Gong_2023_CNAE_hyperphosphatemia.md) | clinically notable hyperphosphatemia ← pemigatinib · categorical (graded) response model | — | Gong X et al., Population pharmacokinetic and exposure…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.13064](https://doi.org/10.1002/psp4.13064) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Gong_2023_CNAE_hypophosphatemia](drugs/drug_pemigatinib/pd_Gong_2023_CNAE_hypophosphatemia.md) | hypophosphatemia ← pemigatinib · categorical (graded) response model | — | Gong X et al., Population pharmacokinetic and exposure…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.13064](https://doi.org/10.1002/psp4.13064) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Gong_2023_ORR](drugs/drug_pemigatinib/pd_Gong_2023_ORR.md) | objective response rate ← pemigatinib · categorical (graded) response model | — | Gong X et al., Population pharmacokinetic and exposure…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.13064](https://doi.org/10.1002/psp4.13064) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Gong_2023_PFS](drugs/drug_pemigatinib/pd_Gong_2023_PFS.md) | progression-free survival ← pemigatinib · time-to-event model | — | Gong X et al., Population pharmacokinetic and exposure…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.13064](https://doi.org/10.1002/psp4.13064) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Gong_2023_TEAE_hyperphosphatemia](drugs/drug_pemigatinib/pd_Gong_2023_TEAE_hyperphosphatemia.md) | hyperphosphatemia ← pemigatinib · categorical (graded) response model | — | Gong X et al., Population pharmacokinetic and exposure…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.13064](https://doi.org/10.1002/psp4.13064) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Gong_2023_alopecia](drugs/drug_pemigatinib/pd_Gong_2023_alopecia.md) | alopecia ← pemigatinib · categorical (graded) response model | — | Gong X et al., Population pharmacokinetic and exposure…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.13064](https://doi.org/10.1002/psp4.13064) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Gong_2023_constipation](drugs/drug_pemigatinib/pd_Gong_2023_constipation.md) | constipation ← pemigatinib · categorical (graded) response model | — | Gong X et al., Population pharmacokinetic and exposure…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.13064](https://doi.org/10.1002/psp4.13064) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Gong_2023_decreased_appetite](drugs/drug_pemigatinib/pd_Gong_2023_decreased_appetite.md) | decreased appetite ← pemigatinib · categorical (graded) response model | — | Gong X et al., Population pharmacokinetic and exposure…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.13064](https://doi.org/10.1002/psp4.13064) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Gong_2023_diarrhea](drugs/drug_pemigatinib/pd_Gong_2023_diarrhea.md) | diarrhea ← pemigatinib · categorical (graded) response model | — | Gong X et al., Population pharmacokinetic and exposure…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.13064](https://doi.org/10.1002/psp4.13064) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Gong_2023_dry_mouth](drugs/drug_pemigatinib/pd_Gong_2023_dry_mouth.md) | dry mouth ← pemigatinib · categorical (graded) response model | — | Gong X et al., Population pharmacokinetic and exposure…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.13064](https://doi.org/10.1002/psp4.13064) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Gong_2023_dysgeusia](drugs/drug_pemigatinib/pd_Gong_2023_dysgeusia.md) | dysgeusia ← pemigatinib · categorical (graded) response model | — | Gong X et al., Population pharmacokinetic and exposure…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.13064](https://doi.org/10.1002/psp4.13064) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Gong_2023_fatigue](drugs/drug_pemigatinib/pd_Gong_2023_fatigue.md) | fatigue ← pemigatinib · categorical (graded) response model | — | Gong X et al., Population pharmacokinetic and exposure…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.13064](https://doi.org/10.1002/psp4.13064) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Gong_2023_nail_related_toxicities](drugs/drug_pemigatinib/pd_Gong_2023_nail_related_toxicities.md) | nail-related toxicities ← pemigatinib · categorical (graded) response model | — | Gong X et al., Population pharmacokinetic and exposure…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.13064](https://doi.org/10.1002/psp4.13064) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Gong_2023_nausea](drugs/drug_pemigatinib/pd_Gong_2023_nausea.md) | nausea ← pemigatinib · categorical (graded) response model | — | Gong X et al., Population pharmacokinetic and exposure…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.13064](https://doi.org/10.1002/psp4.13064) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Gong_2023_retina_related_toxicities](drugs/drug_pemigatinib/pd_Gong_2023_retina_related_toxicities.md) | retina-related toxicities ← pemigatinib · categorical (graded) response model | — | Gong X et al., Population pharmacokinetic and exposure…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.13064](https://doi.org/10.1002/psp4.13064) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Gong_2023_serum_creatinine_change_from_baseline](drugs/drug_pemigatinib/pd_Gong_2023_serum_creatinine_change_from_baseline.md) | percentage change from baseline in serum creatinine concentration ← pemigatinib · direct sigmoid Emax (Hill) effect | — | Gong X et al., Population pharmacokinetic and exposure…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.13064](https://doi.org/10.1002/psp4.13064) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Gong_2023_stomatitis](drugs/drug_pemigatinib/pd_Gong_2023_stomatitis.md) | stomatitis ← pemigatinib · categorical (graded) response model | — | Gong X et al., Population pharmacokinetic and exposure…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.13064](https://doi.org/10.1002/psp4.13064) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Gong_2023_vomiting](drugs/drug_pemigatinib/pd_Gong_2023_vomiting.md) | vomiting ← pemigatinib · categorical (graded) response model | — | Gong X et al., Population pharmacokinetic and exposure…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.13064](https://doi.org/10.1002/psp4.13064) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=pemigatinib) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate, `ABCG2` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate, `ABCG2` substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate, `ABCG2` substrate | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor/substrate, `ABCG2` substrate | DrugBank actor |
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `SLC22A2` inhibitor, `SLC47A1` inhibitor | DrugBank actor |
| excretion | liver | `SLC47A1` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: FGFR1 (inhibitor), FGFR2 (inhibitor), FGFR3 (inhibitor), FGFR4 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 1  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Gong_2026 | irrelevant | 1 | 0 | Exposure-response models are described, but no quantitative pemigatinib disposition parameters or their values are provided. |
| popPK | Ji_2021 | irrelevant | 2 | 1 | The human DDI study reports AUC and Cmax changes but no quantitative disposition parameters such as clearance, volume, or a compartmental model. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 05:14 UTC</sub>
