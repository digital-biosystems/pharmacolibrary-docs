<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V03A&quot;,&quot;href&quot;:&quot;atc/V03A.md&quot;},{&quot;label&quot;:&quot;glucarpidase&quot;}]"></div>

# glucarpidase

- **generic name:** glucarpidase
- **ATC codes:** `V03AF09`
- **DrugBank:** [DB08898](https://go.drugbank.com/drugs/DB08898) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Glucarpidase is a detoxifying agent used to treat toxicity caused by antineoplastic (cancer) treatment, specifically high levels of methotrexate in the blood. It is an approved medicine, with one product authorised in the European Union, though it remains a specialised rescue therapy used mainly in hospital settings.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5572303](https://www.wikidata.org/wiki/Q5572303) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| glucarpidase | parent | 261.52 | Zn4+8 | PubChem | [21195079](https://pubchem.ncbi.nlm.nih.gov/compound/21195079) | Fukaya_2023 |
| methotrexate | metabolite | 454.447 | C20H22N8O5 | PubChem | [4112](https://pubchem.ncbi.nlm.nih.gov/compound/4112) | Fukaya_2023 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 19:41 | 3:34 | 0/1/2 | 0/0/0 | 0/0/0 | 122,662/7,379 | ollama / glm-5.3-flash | 4 | 0/4 | 4/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: nonlinear topology</sub><br><sub>route_to: `manual_model_class`</sub> | [Fukaya_2023_phase_1](drugs/drug_glucarpidase/Glucarpidase_Fukaya2023_phase_1.md) | — | nonlinear / manual (no model) | 2 | Fukaya Y et al., Development of a population pharmacokin…, Frontiers in oncology (2023) | [10.3389/fonc.2023.1003633](https://doi.org/10.3389/fonc.2023.1003633) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: nonlinear topology</sub><br><sub>route_to: `manual_model_class`</sub> | [Fukaya_2023_phase_2](drugs/drug_glucarpidase/Glucarpidase_Fukaya2023_phase_2.md) | — | nonlinear / manual (no model) | 2 | Fukaya Y et al., Development of a population pharmacokin…, Frontiers in oncology (2023) | [10.3389/fonc.2023.1003633](https://doi.org/10.3389/fonc.2023.1003633) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Fukaya_2023_original_estimate](drugs/drug_glucarpidase/Glucarpidase_Fukaya2023_original_estimate.md) | — | nonlinear / manual (no model) | 4 (+3 cov.) | Fukaya Y et al., Development of a population pharmacokin…, Frontiers in oncology (2023) | [10.3389/fonc.2023.1003633](https://doi.org/10.3389/fonc.2023.1003633) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 3  ·  extracted 0  ·  needs_review 2  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Antoniw_1990 | irrelevant | 2 | 2 | CPG2 (glucarpidase) is only used as a prodrug-activating antibody-enzyme conjugate; the PK parameters reported (half-lives, AUC, Vd, Cl) are for the prodrug and active drug, not for glucarpidase itself. |
| popPK | Mouawad_2026 | irrelevant | 1 | 0 | A narrative review of methotrexate toxicity management mentioning glucarpidase only as a mitigation agent, with no PK parameters for glucarpidase. |
| popPK | Taylor_2020 | irrelevant | 0 | 0 | This is a population PK study of methotrexate, not glucarpidase; glucarpidase is only mentioned as a rescue agent and patients receiving it were excluded, with no glucarpidase disposition parameters reported. |
| popPK | Taylor_2023 | irrelevant | 0 | 0 | This is a population PK study of high-dose methotrexate (MTXPK.org model); glucarpidase is only mentioned as a supportive-care tool and its post-glucarpidase samples were excluded, with no glucarpidase disposition parameters reported. |
| popPK | Weller_1994 | irrelevant | 0 | 0 | In vitro neurotoxicity study of folates in rat neuronal cultures with no glucarpidase PK parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 19:38 UTC</sub>
