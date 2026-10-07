<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;S01X&quot;,&quot;href&quot;:&quot;atc/S01X.md&quot;},{&quot;label&quot;:&quot;alum&quot;}]"></div>

# alum

- **generic name:** alum
- **ATC codes:** `S01XA07`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

Alum, a family of double sulfate salts, has been used in medicine, for example as an ophthalmological agent, and is also widely known as an adjuvant in vaccines and as an astringent. It remains in use, mainly in topical and ophthalmological preparations and as a vaccine adjuvant.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q190527](https://www.wikidata.org/wiki/Q190527) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 17:13 | 1:09 | 0/0/0 | 0/0/0 | 0/0/0 | 65,997/1,895 | ollama / glm-5.3-flash | 3 | 0/3 | 3/0 | 0 |

## popPK records

_not available_

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
| popPK | Duranceau_2016 | irrelevant | 0 | 0 | This is an ecotoxicity screening study of phosphorus-removal adsorbents (alum sludge as a material), with no pharmacokinetic parameters for alum. |
| popPK | Inglefield_2022 | irrelevant | 0 | 0 | This is an immunology/vaccine study using alum (Alhydrogel) only as an adjuvant formulation; no PK parameters for alum are reported. |
| popPK | Kaushik_2024 | irrelevant | 0 | 0 | Alum is only used as a co-formulated vaccine adjuvant in mice; no PK parameters for alum are reported. |
| popPK | Kumar_2024 | irrelevant | 0 | 0 | Alum is only an adsorption vehicle for TLR7/8 agonists; no PK parameters for alum are reported. |
| popPK | Kumar_2024_2 | irrelevant | 0 | 0 | Alum is only an adsorption vehicle for TLR7 agonists; no PK parameters for alum are reported. |
| popPK | Mistry_2025 | irrelevant | 1 | 2 | Alum is only an inert scaffold/adjuvant in an IL-12 anchored-drug conjugate; the PK model parameters (ka, V/F, half-lives 115 vs 8 h) describe mIL-12–ABP/mANK-101, not alum itself, and full parameter estimates are in Supplementary Table S2 not provided. |
| popPK | Nowak_2022 | irrelevant | 0 | 0 | This is a clinical efficacy trial of GAD-alum immunotherapy in type 1 diabetes reporting CGM/C-peptide outcomes, not pharmacokinetic disposition parameters for alum. |
| popPK | Rodríguez-Álvarez_2017 | irrelevant | 0 | 0 | This is a protein production/characterization study of recombinant simian IL-15 with no alum pharmacokinetic parameters reported. |
| popPK | Sastry_2017 | irrelevant | 0 | 0 | This is an immunogenicity/adjuvant study of an RSV vaccine; alum is only used as an adjuvant, with no PK parameters (CL, V, half-life, etc.) reported. |
| popPK | Wang_2018 | irrelevant | 0 | 0 | Alum is only mentioned as a comparator adjuvant; no PK parameters for alum are reported. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
