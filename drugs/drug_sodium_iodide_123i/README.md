<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V09F&quot;,&quot;href&quot;:&quot;atc/V09F.md&quot;},{&quot;label&quot;:&quot;sodium iodide (123I)&quot;}]"></div>

# sodium iodide (123I)

- **generic name:** sodium iodide (123I)
- **ATC codes:** `V09FX02`
- **DrugBank:** [DB09420](https://go.drugbank.com/drugs/DB09420) · **PubChem:** [CID 135300](https://pubchem.ncbi.nlm.nih.gov/compound/135300)
- **molar mass:** 122.9061 g/mol (I) — DrugBank
- **groups:** approved

## About

Sodium iodide I-123 is a radioactive iodine isotope used as a diagnostic radiopharmaceutical for imaging the thyroid. It is an approved diagnostic agent, used in nuclear medicine for thyroid scans.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3801335](https://www.wikidata.org/wiki/Q3801335) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 19:49 | 1:42 | 0/0/0 | 0/1/0 | 0/0/0 | 72,811/4,369 | openai / gpt-6-luna | 3 | 0/3 | 3/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Tonacchera_2004_125_I_uptake](drugs/drug_sodium_iodide_123i/pd_Tonacchera_2004_125_I_uptake.md) | (125)I(-) uptake ← iodide (I(-)) · direct sigmoid Emax (Hill) effect | — | Tonacchera M et al., Relative potencies and additivity of pe…, Thyroid : official journal… (2004) | [10.1089/thy.2004.14.1012](https://doi.org/10.1089/thy.2004.14.1012) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Adams_2020 | irrelevant | 0 | 0 | The paper studies 5-aminotetrazole toxicity, not sodium_iodide_123i pharmacokinetics. |
| popPK | Chan_2012 | irrelevant | 0 | 0 | This is a zebrafish toxicology study of other chemicals, not a sodium_iodide_123i pharmacokinetic study. |
| popPK | Hays_1979 | irrelevant | 0 | 0 | The study models thyroidal pertechnetate trapping; sodium iodide is an intervention, not the subject drug with reported PK parameters. |
| popPK | Kogai_2005 | irrelevant | 0 | 0 | This is an in-vitro study of NIS regulation and iodide uptake, not sodium_iodide_123i pharmacokinetics. |
| popPK | Kramer_2002 | irrelevant | 0 | 0 | The reported retention parameters are for iodine-131, not sodium_iodide_123i. |
| popPK | Latif_2020 | irrelevant | 0 | 0 | This is an in-vitro TSH receptor agonist study, not a pharmacokinetic study of sodium_iodide_123i. |
| popPK | Murr_2025 | irrelevant | 0 | 0 | The study evaluates oxyfluorfen’s endocrine effects in rats and reports no pharmacokinetic parameters for sodium_iodide_123i. |
| popPK | Neumann_2016 | irrelevant | 0 | 0 | This is a pharmacology study of a TSH receptor agonist, not a quantitative PK study of sodium_iodide_123i. |
| popPK | Rosowsky_1997 | irrelevant | 0 | 0 | This is an in-vitro antiviral activity study of PFA-AZT, not a pharmacokinetic study of sodium_iodide_123i. |
| popPK | Stoker_2024 | irrelevant | 0 | 0 | The study examines oxyfluorfen in rats, not sodium_iodide_123i, and reports no PK parameters for it. |
| popPK | Tonacchera_2004 | irrelevant | 0 | 0 | This in-vitro uptake-inhibition study reports no pharmacokinetic disposition parameters for sodium_iodide_123i. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
