<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;tucatinib&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tucatinib_Zhang2024_final_population_pk_model_estimate_rse&quot;,&quot;label&quot;:&quot;Zhang_2024_final_population_pk_model_estimate_rse&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tucatinib/Tucatinib_Zhang2024_final_population_pk_model_estimate_rse.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tucatinib_Zhang2024_healthy_participants_300_mg_bid&quot;,&quot;label&quot;:&quot;Zhang_2024_healthy_participants_300_mg_bid&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tucatinib/Tucatinib_Zhang2024_healthy_participants_300_mg_bid.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tucatinib_Zhang2024_her2_mcrcn_68&quot;,&quot;label&quot;:&quot;Zhang_2024_her2_mcrcn_68&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tucatinib/Tucatinib_Zhang2024_her2_mcrcn_68.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# tucatinib

- **generic name:** tucatinib
- **ATC codes:** `L01EH03`
- **DrugBank:** [DB11652](https://go.drugbank.com/drugs/DB11652) · **PubChem:** [CID 51039094](https://pubchem.ncbi.nlm.nih.gov/compound/51039094)
- **molar mass:** 480.532 g/mol (C26H24N8O2) — DrugBank
- **groups:** approved, investigational

## About

Tucatinib is a HER2-blocking kinase inhibitor used to treat breast cancer, including metastatic disease. It is an approved medicine and is authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q25100690](https://www.wikidata.org/wiki/Q25100690) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| tucatinib | parent | 480.532 | C26H24N8O2 | DrugBank | [51039094](https://pubchem.ncbi.nlm.nih.gov/compound/51039094) | Zhang_2024, Zhang_2025 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 08:38 | 5:57 | 3/0/4 | 0/0/0 | 0/0/0 | 100,534/31,909 | openai / gpt-6-luna | 3 | 0/2 | 3/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Zhang_2024_final_population_pk_model_estimate_rse](drugs/drug_tucatinib/Tucatinib_Zhang2024_final_population_pk_model_estimate_rse.md) | ▶ model + simulator | 2-compartment, oral | 6 | Zhang D et al., Population Pharmacokinetic Analysis of…, Clinical pharmacokinetics (2024) | [10.1007/s40262-024-01412-0](https://doi.org/10.1007/s40262-024-01412-0) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Zhang_2024_healthy_participants_300_mg_bid](drugs/drug_tucatinib/Tucatinib_Zhang2024_healthy_participants_300_mg_bid.md) | ▶ model + simulator | 1-compartment, oral | 7 | Zhang D et al., Population Pharmacokinetic Analysis of…, Clinical pharmacokinetics (2024) | [10.1007/s40262-024-01412-0](https://doi.org/10.1007/s40262-024-01412-0) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Zhang_2024_her2_mcrcn_68](drugs/drug_tucatinib/Tucatinib_Zhang2024_her2_mcrcn_68.md) | ▶ model + simulator | 1-compartment, oral | 8 | Zhang D et al., Population Pharmacokinetic Analysis of…, Clinical pharmacokinetics (2024) | [10.1007/s40262-024-01412-0](https://doi.org/10.1007/s40262-024-01412-0) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q88 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Zhang_2024_her2_mbcn_52](drugs/drug_tucatinib/Tucatinib_Zhang2024_her2_mbcn_52.md) | — | 1-compartment (no model) | 7 | Zhang D et al., Population Pharmacokinetic Analysis of…, Clinical pharmacokinetics (2024) | [10.1007/s40262-024-01412-0](https://doi.org/10.1007/s40262-024-01412-0) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C1_half_life_beta failed (ratio 0.29)</sub><br><sub>blocking: C2_base_Q18 failed (ratio 1.0664)</sub><br><sub>route_to: `human_review`</sub> | [Zhang_2025_healthy_participants_300_mg_bid](drugs/drug_tucatinib/Tucatinib_Zhang2025_healthy_participants_300_mg_bid.md) | — | 1-compartment (no model) | 8 | Zhang D et al., Correction: Population Pharmacokinetic…, Clinical pharmacokinetics (2025) | [10.1007/s40262-024-01458-0](https://doi.org/10.1007/s40262-024-01458-0) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C1_half_life_beta failed (ratio 0.7235)</sub><br><sub>blocking: C2_base_Q18 failed (ratio 0.4858)</sub><br><sub>route_to: `human_review`</sub> | [Zhang_2025_her2_mbcn_52](drugs/drug_tucatinib/Tucatinib_Zhang2025_her2_mbcn_52.md) | — | 1-compartment (no model) | 8 | Zhang D et al., Correction: Population Pharmacokinetic…, Clinical pharmacokinetics (2025) | [10.1007/s40262-024-01458-0](https://doi.org/10.1007/s40262-024-01458-0) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C1_half_life_beta failed (ratio 0.3985)</sub><br><sub>blocking: C2_base_Q18 failed (ratio 0.8101)</sub><br><sub>route_to: `human_review`</sub> | [Zhang_2025_her2_mcrcn_68](drugs/drug_tucatinib/Tucatinib_Zhang2025_her2_mcrcn_68.md) | — | 1-compartment (no model) | 8 | Zhang D et al., Correction: Population Pharmacokinetic…, Clinical pharmacokinetics (2025) | [10.1007/s40262-024-01458-0](https://doi.org/10.1007/s40262-024-01458-0) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=tucatinib) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| metabolism | liver | `CYP2C8` substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `SLC22A2` inhibitor, `SLC47A1` inhibitor, `SLC47A2` inhibitor | DrugBank actor |
| excretion | liver | `SLC47A1` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ERBB2 (inhibitor), ERBB3 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 7  ·  extracted 3  ·  needs_review 4  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Meyer_2022 | irrelevant | 1 | 0 | This is a bioanalytical cross-validation paper, with no tucatinib disposition parameter values reported in the provided evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 08:33 UTC</sub>
