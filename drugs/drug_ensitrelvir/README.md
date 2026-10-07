<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;ensitrelvir&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ensitrelvir_Ishibashi2024_mean&quot;,&quot;label&quot;:&quot;Ishibashi_2024_mean&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ensitrelvir/Ensitrelvir_Ishibashi2024_mean.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ensitrelvir_Ishibashi2024_median&quot;,&quot;label&quot;:&quot;Ishibashi_2024_median&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ensitrelvir/Ensitrelvir_Ishibashi2024_median.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# ensitrelvir

- **generic name:** ensitrelvir
- **ATC codes:** `J05AE16`
- **DrugBank:** [DB18834](https://go.drugbank.com/drugs/DB18834) · **PubChem:** not captured
- **molar mass:** 531.88 g/mol (C22H17ClF3N9O2) — DrugBank
- **groups:** investigational

## About

Ensitrelvir is an investigational antiviral drug that works as a protease inhibitor. It is not yet an approved medicine in major regions such as the European Union and remains under investigation.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q110798570](https://www.wikidata.org/wiki/Q110798570) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| ensitrelvir | parent | 531.88 | C22H17ClF3N9O2 | DrugBank | — | Ishibashi_2024 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 15:32 | 9:49 | 2/0/0 | 1/0/0 | 0/0/0 | 205,123/52,347 | openai / gpt-6-luna | 7 | 0/7 | 7/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Ishibashi_2024_mean](drugs/drug_ensitrelvir/Ensitrelvir_Ishibashi2024_mean.md) | ▶ model + simulator | 1-compartment, oral | 6 | Ishibashi T et al., Population Pharmacokinetics of Ensitrel…, Clinical pharmacokinetics (2024) | [10.1007/s40262-024-01446-4](https://doi.org/10.1007/s40262-024-01446-4) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Ishibashi_2024_median](drugs/drug_ensitrelvir/Ensitrelvir_Ishibashi2024_median.md) | ▶ model + simulator | 1-compartment, oral | 6 | Ishibashi T et al., Population Pharmacokinetics of Ensitrel…, Clinical pharmacokinetics (2024) | [10.1007/s40262-024-01446-4](https://doi.org/10.1007/s40262-024-01446-4) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Yamaguchi_2024_Y](drugs/drug_ensitrelvir/pd_Yamaguchi_2024_Y.md) | viral load ← ensitrelvir · direct Emax (saturable) effect | — | Yamaguchi D et al., Modeling the Impact of Ensitrelvir on S…, Infectious diseases and the… (2024) | [10.1007/s40121-024-01046-6](https://doi.org/10.1007/s40121-024-01046-6) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Yamaguchi_2024_Y_2](drugs/drug_ensitrelvir/pd_Yamaguchi_2024_Y_2.md) | viral load ← ensitrelvir · direct Emax (saturable) effect | — | Yamaguchi D et al., Modeling the Impact of Ensitrelvir on S…, Infectious diseases and the… (2024) | [10.1007/s40121-024-01046-6](https://doi.org/10.1007/s40121-024-01046-6) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 2  ·  extracted 2  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chaibi_2024 | irrelevant | 0 | 0 | This is an in-vitro inhibitor study and reports no ensitrelvir pharmacokinetic parameters. |
| popPK | Eltayb_2023 | irrelevant | 1 | 0 | This is an in vitro and computational antiviral study, with no quantitative ensitrelvir disposition parameters reported. |
| popPK | Jochmans_2023 | irrelevant | 0 | 0 | This is an in-vitro resistance study, reporting inhibitor potency rather than ensitrelvir disposition parameters. |
| popPK | McGovern-Gooch_2024 | irrelevant | 0 | 0 | The study characterizes AB-343 in vitro; ensitrelvir is only mentioned as a comparator and no ensitrelvir PK values are reported. |
| popPK | Shimizu_2023 | relevant | 7 | 2 | The study evaluates ensitrelvir pharmacokinetics and shows AUC values, but eligible disposition parameter values are not readable here. |
| popPK | Unoh_2025 | irrelevant | 0 | 0 | Ensitrelvir is only a comparator; the reported PK is for S-892216, with detailed values in tables not provided. |
| popPK | Yamaguchi_2024 | relevant | 8 | 0 | The human analysis uses an ensitrelvir population-PK model, but its parameter values are only referenced in supplementary Table S2, which is not provided. |
| popPK | Yang_2024 | irrelevant | 0 | 0 | Ensitrelvir is only an antiviral comparator; the quantitative PK values shown are for other compounds. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 15:23 UTC</sub>
