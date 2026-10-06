<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;butaperazine&quot;}]"></div>

# butaperazine

- **generic name:** butaperazine
- **ATC codes:** `N05AB09`
- **DrugBank:** [DB13213](https://go.drugbank.com/drugs/DB13213) · **PubChem:** not captured
- **molar mass:** 409.59 g/mol (C24H31N3OS) — DrugBank
- **groups:** approved

## About

Butaperazine is a phenothiazine antipsychotic used to treat psychotic disorders such as schizophrenia. It is an approved antipsychotic, but it is not widely used today and is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5002359](https://www.wikidata.org/wiki/Q5002359) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 15:23 | 0:33 | 0/0/0 | 0/0/0 | 0/0/0 | 21,934/567 | ollama / glm-5.3-flash | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Garver_1976.pdf` | Garver DL et al., Pharmacokinetics of red blood cell phen…, Archives of general psychia… (1976) | popPK | 5 | [10.1001/archpsyc.1976.01770070092011](https://doi.org/10.1001/archpsyc.1976.01770070092011) | [8025](https://pubmed.ncbi.nlm.nih.gov/8025) | Human PK study of butaperazine (half-life, plasma/RBC concentrations) but no numeric parameter values present in the evidence. |

<sub>queue written 2026-10-06T15:23:33.533659+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cooper_1975 | irrelevant | 3 | 1 | No numeric PK parameters (CL, V, half-life) are reported in the evidence; only qualitative steady-state blood level comparisons. |
| popPK | Davy_1978 | irrelevant | 1 | 0 | A narrative review of neuroleptic level monitoring with no quantitative PK parameters for butaperazine reported. |
| popPK | Garver_1976 | relevant | 5 | 1 | Human PK study of butaperazine (half-life, plasma/RBC concentrations) but no numeric parameter values present in the evidence. |
| popPK | Garver_1977 | irrelevant | 2 | 1 | This is a therapeutic drug monitoring/response study reporting RBC vs plasma BPZ concentrations, not PK disposition parameters (CL, V, half-life, or a PK model), and no numeric parameter values appear in the evidence. |
| popPK | Kala_1980 | irrelevant | 1 | 2 | This is an in-vitro physicochemical study (solubility, pKa, distribution coefficients) with no PK disposition parameters for butaperazine. |
| popPK | Rockland_1986 | irrelevant | 0 | 0 | A narrative review of neuroleptic blood level/clinical response studies with no quantitative PK parameters for butaperazine reported. |
| popPK | Simpson_1985 | irrelevant | 0 | 0 | A narrative review of plasma level–response literature with no quantitative PK parameters for butaperazine reported. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
