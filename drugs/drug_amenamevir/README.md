<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;amenamevir&quot;}]"></div>

# amenamevir

- **generic name:** amenamevir
- **ATC codes:** `J05AX26`
- **DrugBank:** [DB11701](https://go.drugbank.com/drugs/DB11701) · **PubChem:** [CID 11397521](https://pubchem.ncbi.nlm.nih.gov/compound/11397521)
- **molar mass:** 482.56 g/mol (C24H26N4O5S) — DrugBank
- **groups:** investigational

## About

Amenamevir is an antiviral drug developed for the treatment of shingles (herpes zoster). It is still investigational and is not authorised in the European Union; it has been used mainly in Japan.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27271708](https://www.wikidata.org/wiki/Q27271708) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 12:57 | 0:35 | 0/0/0 | 0/1/0 | 0/0/0 | 41,827/996 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> | [Takada_2016_lesion_score](drugs/drug_amenamevir/pd_Takada_2016_lesion_score.md) | lesion score ← amenamevir · categorical (graded) response model | — | Takada A et al., Integrative pharmacokinetic-pharmacodyn…, Drug metabolism and pharmac… (2016) | [10.1016/j.dmpk.2016.05.005](https://doi.org/10.1016/j.dmpk.2016.05.005) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Takada_2016_virus_plaques](drugs/drug_amenamevir/pd_Takada_2016_virus_plaques.md) | virus plaques ← amenamevir · indirect response — drug inhibits the production of virus plaques | — | Takada A et al., Integrative pharmacokinetic-pharmacodyn…, Drug metabolism and pharmac… (2016) | [10.1016/j.dmpk.2016.05.005](https://doi.org/10.1016/j.dmpk.2016.05.005) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Andreu_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of a new HSV-1 inhibitor (LN-7), and amenamevir is only mentioned as a background comparator for resistance. |
| popPK | Chono_2010 | irrelevant | 0 | 0 | The study focuses on antiviral mechanisms, in vitro potency (EC50), and efficacy in a mouse infection model, without reporting any pharmacokinetic parameters (CL, V, ka, t1/2) for amenamevir. |
| popPK | Effendi_2024 | irrelevant | 0 | 0 | This is a mechanistic virology study on viral resistance to amenamevir, not a pharmacokinetic study. |
| popPK | Katsumata_2013 | irrelevant | 1 | 1 | The study is a preclinical pharmacodynamics/pharmacokinetics analysis in a murine model that focuses on viral load reduction and correlates it with exposure metrics (AUC, Cmax, T&gt;100) rather than reporting quantitative compartmental disposition parameters (CL, V, ka) or a population-PK model for amenamevir. |
| popPK | Shiraki_2020 | irrelevant | 0 | 0 | The study investigates the mechanism of antiviral activity (EC50 and viral replication kinetics) in vitro, not the pharmacokinetic disposition parameters (CL, V, etc.) of amenamevir. |
| popPK | Takada_2016 | irrelevant | 3 | 0 | The abstract describes a PK/PD modeling study for amenamevir, indicating relevance, but no quantitative PK parameter values (CL, V, etc.) are present in the provided text. |
| popPK | Yajima_2017 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic assessment of antiviral efficacy and does not report quantitative pharmacokinetic parameters (e.g., clearance, volume) for amenamevir. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
